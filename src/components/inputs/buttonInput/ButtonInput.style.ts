import {StyleSheet} from 'react-native';

export const buttonInputStyle = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    position: 'relative',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    right: 16,
  },
});
