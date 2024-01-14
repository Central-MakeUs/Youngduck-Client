import {useAgreeTermStore} from '@/stores/agreeTermStore';

interface IHandleAgreeTermProps {
  terms: ITermProps[];
  agreeCount: React.MutableRefObject<number>;
  essentialAgreeCount: React.MutableRefObject<number>;
  index?: number;
  setTerms: React.Dispatch<React.SetStateAction<ITermProps[]>>;
}

interface ITermProps {
  content: string;
  isAgree: boolean;
}

const useHandleAgreeTerm = () => {
  const {allAgree, setAllAgree, setIsFinishAgree} = useAgreeTermStore();
  const updateOneAgreeTerm = ({
    terms,
    agreeCount,
    essentialAgreeCount,
    index,
    setTerms,
  }: IHandleAgreeTermProps) => {
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
      setAllAgree(true);
    }

    if (agreeCount.current < 3) {
      setAllAgree(false);
    }

    if (essentialAgreeCount.current === 2) {
      setIsFinishAgree(true);
    } else {
      setIsFinishAgree(false);
    }

    setTerms([...newData]);
  };

  const updateAllAgreeTerm = ({
    terms,
    agreeCount,
    essentialAgreeCount,
    setTerms,
  }: IHandleAgreeTermProps) => {
    const newData = terms.map((term: ITermProps) => {
      return {
        content: term.content,
        isAgree: allAgree
          ? true
          : agreeCount.current === 3
          ? false
          : term.isAgree,
      };
    });
    agreeCount.current = allAgree
      ? 3
      : agreeCount.current > 0 && agreeCount.current < 3
      ? agreeCount.current
      : 0;
    essentialAgreeCount.current = allAgree
      ? 2
      : agreeCount.current > 0 && agreeCount.current < 3
      ? essentialAgreeCount.current
      : 0;
    setIsFinishAgree(
      allAgree ? true : essentialAgreeCount.current === 2 ? true : false,
    );

    setTerms([...newData]);
  };

  return {updateOneAgreeTerm, updateAllAgreeTerm};
};

export default useHandleAgreeTerm;
