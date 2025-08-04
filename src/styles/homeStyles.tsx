import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
 container: {
    flex: 1,
    marginVertical: 90,
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  name: {
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  botao: {
    width: 350, 
    alignSelf: 'center',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 15,
    fontWeight: 'bold'
  }
});