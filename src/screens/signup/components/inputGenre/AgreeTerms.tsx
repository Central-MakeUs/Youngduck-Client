import Typography from '@/components/typography';
import TextButtonContainer from './TextButtonContainer';
import CheckBox from '@/components/checkBox';
import {useEffect, useRef, useState} from 'react';
import useHandleAgreeTerm from '@/hooks/useHandleAgreeTerm';
import {useAgreeTermStore} from '@/stores/agreeTermStore';

interface ITermProps {
  content: string;
  isAgree: boolean;
}

const AgreeTerms = () => {
  const [terms, setTerms] = useState<ITermProps[]>([
    {content: '이용 약관동의 (필수)', isAgree: false},
    {content: '개인정보 처리 방침 동의 (필수)', isAgree: false},
    {content: '마케팅 정보 수신 동의 (선택)', isAgree: false},
  ]);
  const agreeCount = useRef<number>(0);
  const essentialAgreeCount = useRef<number>(0);

  const {allAgree} = useAgreeTermStore();
  const {updateOneAgreeTerm, updateAllAgreeTerm} = useHandleAgreeTerm();

  useEffect(() => {
    updateAllAgreeTerm({terms, agreeCount, essentialAgreeCount, setTerms});
  }, [allAgree]);

  return (
    <>
      {terms.map((term: ITermProps, index: number) => (
        <TextButtonContainer mb={24} key={`${term.content}container`}>
          <Typography style="Body1" key={`${term.content}typography`}>
            {term.content}
          </Typography>
          <CheckBox
            state={term.isAgree ? 'on' : 'off'}
            onPress={() =>
              updateOneAgreeTerm({
                terms,
                agreeCount,
                essentialAgreeCount,
                index,
                setTerms,
              })
            }
            key={`${term.content}checkbox`}
          />
        </TextButtonContainer>
      ))}
    </>
  );
};

export default AgreeTerms;
