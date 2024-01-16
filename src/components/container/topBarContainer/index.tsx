import {View} from 'react-native';
import topBarContainerStyle from './TopBarContainer.style';

interface ITopBarContainerProp {
  children: React.ReactNode;
}

const TopBarContainer = ({children}: ITopBarContainerProp) => {
  return <View style={topBarContainerStyle.container}>{children}</View>;
};

export default TopBarContainer;
