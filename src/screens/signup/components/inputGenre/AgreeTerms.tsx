import Typography from '@/components/typography';
import TextButtonContainer from './TextButtonContainer';
import CheckBox from '@/components/checkBox';
import {useEffect, useRef, useState} from 'react';

interface IAgreeTermsProps {
  allAgreeState: boolean;
  setAllAgreeState: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFinishAgreeState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITermProps {
  content: string;
  isAgree: boolean;
}

const AgreeTerms = ({
  allAgreeState,
  setAllAgreeState,
  setIsFinishAgreeState,
}: IAgreeTermsProps) => {
  const [terms, setTerms] = useState<ITermProps[]>([
    {content: '이용 약관동의 (필수)', isAgree: false},
    {content: '개인정보 처리 방침 동의 (필수)', isAgree: false},
    {content: '마케팅 정보 수신 동의 (선택)', isAgree: false},
  ]);
  const agreeCount = useRef<number>(0);
  const essentialAgreeCount = useRef<number>(0);

  const handleAgreeTerm = (index: number) => {
    agreeCount.current = 0;
    essentialAgreeCount.current = 0;
    const newData = terms.map((term: ITermProps, newIndex: number) => {
      const returnData = {
        content: term.content,
        isAgree: index === newIndex ? !term.isAgree : term.isAgree,
      };
      if (returnData.isAgree) agreeCount.current++;
      if (newIndex < 2 && returnData.isAgree) essentialAgreeCount.current++;

      return returnData;
    });

    if (agreeCount.current === 3) {
      setAllAgreeState(true);
    }

    if (agreeCount.current < 3) {
      setAllAgreeState(false);
    }

    if (essentialAgreeCount.current === 2) {
      setIsFinishAgreeState(true);
    } else {
      setIsFinishAgreeState(false);
    }

    setTerms([...newData]);
  };

  console.log(agreeCount.current);

  useEffect(() => {
    const newData = terms.map((term: ITermProps) => {
      return {
        content: term.content,
        isAgree: allAgreeState
          ? true
          : agreeCount.current === 3
          ? false
          : term.isAgree,
      };
    });
    agreeCount.current = allAgreeState ? 3 : 0;
    essentialAgreeCount.current = allAgreeState ? 2 : 0;
    setIsFinishAgreeState(
      allAgreeState ? true : essentialAgreeCount.current === 2 ? true : false,
    );

    setTerms([...newData]);
  }, [allAgreeState]);

  return (
    <>
      {terms.map((term: ITermProps, index: number) => (
        <TextButtonContainer mb={24} key={`${term.content}container`}>
          <Typography style="Body1" key={`${term.content}typography`}>
            {term.content}
          </Typography>
          <CheckBox
            state={term.isAgree ? 'on' : 'off'}
            onPress={() => handleAgreeTerm(index)}
            key={`${term.content}checkbox`}
          />
        </TextButtonContainer>
      ))}
    </>
  );
};

export default AgreeTerms;
