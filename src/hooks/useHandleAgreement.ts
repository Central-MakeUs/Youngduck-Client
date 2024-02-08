import {IAgreementProps} from '@/types/signup/agreement';

interface IUpdateAgreementTermProps {
  agreements: IAgreementProps[];
  allAgreement?: boolean;
  index?: number;
  setAgreements: React.Dispatch<React.SetStateAction<IAgreementProps[]>>;
}

const useHandleAgreement = () => {
  const updateOneAgreement = ({
    agreements,
    index,
    setAgreements,
  }: IUpdateAgreementTermProps) => {
    const newData = agreements.map(
      (term: IAgreementProps, newIndex: number) => {
        const returnData = {
          type: term.type,
          content: term.content,
          uri: term.uri,
          isAgree: index === newIndex ? !term.isAgree : term.isAgree,
        };

        return returnData;
      },
    );

    setAgreements([...newData]);
  };

  const updateAllAgreement = ({
    agreements,
    allAgreement,
    setAgreements,
  }: IUpdateAgreementTermProps) => {
    const newData = agreements.map((term: IAgreementProps) => {
      return {
        type: term.type,
        content: term.content,
        uri: term.uri,
        isAgree: !allAgreement,
      };
    });

    setAgreements([...newData]);
  };

  return {updateOneAgreement, updateAllAgreement};
};

export default useHandleAgreement;
