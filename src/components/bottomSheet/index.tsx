import React from 'react';
import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';

interface BottomSheetProps {
  children: React.ReactNode;
  drawerRef: React.RefObject<BottomDrawerMethods> | null;
  height?: number;
  onBackdropPress?: () => void;
}

const BottomSheet = ({
  children,
  drawerRef,
  height,
  onBackdropPress,
}: BottomSheetProps) => {
  return (
    <BottomDrawer
      onBackdropPress={onBackdropPress}
      ref={drawerRef}
      openOnMount={false}
      initialHeight={height}>
      {children}
    </BottomDrawer>
  );
};

export default BottomSheet;
