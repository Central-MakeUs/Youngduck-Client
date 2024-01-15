import {IAgreementProps} from '@/types/signup/agreement';
import TextButtonContainer from '../inputGenre/TextButtonContainer';
import Typography from '@/components/typography';
import CheckBox from '@/components/checkBox';
import useHandleAgreement from '@/hooks/useHandleAgreement';

interface IAgreement {
  agreements: IAgreementProps[];
  setAgreements: React.Dispatch<React.SetStateAction<IAgreementProps[]>>;
}

const Agreement = ({agreements, setAgreements}: IAgreement) => {
  const {updateOneAgreement} = useHandleAgreement();

  const handleUpdateAgreement = (index: number) => {
    updateOneAgreement({
      agreements,
      index,
      setAgreements,
    });
  };

  return (
    <>
      {agreements.map((term: IAgreementProps, index: number) => (
        <TextButtonContainer mb={24} key={`${term.content}container`}>
          <Typography style="Body1" key={`${term.content}typography`}>
            {term.content}
          </Typography>
          <CheckBox
            state={term.isAgree ? 'on' : 'off'}
            onPress={() => handleUpdateAgreement(index)}
            key={`${term.content}checkbox`}
          />
        </TextButtonContainer>
      ))}
    </>
  );
};

export default Agreement;
