import {Alert, Linking, Platform} from 'react-native';
import {
  RESULTS,
  requestMultiple,
  Permission,
  check,
} from 'react-native-permissions';

/**
 * '앱의 권한'을 공통으로 관리하는 유틸입니다.
 */
class PermissionUtil {
  /**
   * 접근 가능한 디바이스 플랫폼을 체크합니다.
   *
   * @returns {boolean} true : 사용 가능 디바이스 플랫폼, false : 사용 불가능 디바이스 플랫폼
   */
  private cmmAccessDevicePlatformCheck = (): boolean => {
    let isUseDevice = true;
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') !isUseDevice;
    return isUseDevice;
  };

  /**
   * 권한 체크에서 모두 '허용(granted)'을 하였는지 여부를 체크합니다.
   *
   * @param {Permission[]} permsCodeArr
   * @returns {Promise<Permission[]>} 권한 중 '허용'을 모두 한 경우 빈 배열이며 '허용'을 하지 않으면 배열로 반환합니다.
   */
  private cmmPermsArrCheck = async (
    permsCodeArr: Permission[],
  ): Promise<Permission[]> => {
    let notGrantedArr: Permission[] = [];

    // [STEP1] 전달 받은 배열을 순회하면서 권한을 허용했는지 체크합니다.
    for (let permsItem of permsCodeArr) {
      // [STEP2] 동일한 플랫폼(andriod, ios)의 코드가 아니면 undefined가 발생합니다. 이를 제외하고 수행합니다.
      if (permsItem != undefined) {
        //[STEP3] react-native-permissions 함수를 이용해 권한을 체크합니다.
        let permsCheck = await check(permsItem);
        switch (permsCheck) {
          // [CASE1] 권한 상태가 수락(granted) 상태인 경우
          case 'granted':
            break;
          // [CASE2] 권한 상태가 수락되지 않은 상태 : 배열을 저장합니다.
          case 'blocked':
          case 'denied':
          case 'limited':
          case 'unavailable':
            notGrantedArr.push(permsItem);
            break;
        }
      }
    }
    return notGrantedArr;
  };

  /**
   * 권한 체크를 수행할 것을 배열로 전달받습니다.
   *
   * @param {Permission[]} permsArr
   * @returns
   */
  cmmReqPermis = async (permsArr: Permission[]): Promise<void> => {
    // [CASE1] 모든 권한에 대해 디바이스 플랫폼을 체크합니다. (해당 되지 않는 경우 종료합니다.)
    if (!this.cmmAccessDevicePlatformCheck()) return;

    // [CASE2] 허용되지 않은 권한을 확인합니다.
    const notGrantedArr = await this.cmmPermsArrCheck(permsArr);
    const notGrantedArrLen = notGrantedArr.length;

    /**
     * [CASE3] 허용되지 않은 권한이 있는지 체크하여 분기 처리를 합니다.
     * - 허용되지 않은 권한이 없을 경우 - 종료
     * - 허용되지 않은 권한이 있는 경우 - 권한요청
     */
    if (notGrantedArrLen == 0) return;
    else {
      await requestMultiple(notGrantedArr)
        .then(statues => {
          let permsCnt = 0; // 허용되지 않은 권한의 종류
          notGrantedArr.map(permsItem =>
            statues[permsItem] === RESULTS.GRANTED ? (permsCnt += 1) : 0,
          );
          if (notGrantedArrLen === permsCnt) return;
          else {
            Linking.openSettings(); // 핸드폰 상 설정 페이지
            Alert.alert('권한을 모두 허용해주세요');
          }
        })
        .catch(e => {
          console.log('[-] 권한 요청에서 에러가 발생하였습니다.', e);
        });
    }
  };
}
export default new PermissionUtil();
