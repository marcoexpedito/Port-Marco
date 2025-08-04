import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 50,
  },
  name: {
    fontSize: 30,
    color: 'green'
  },
  skills: {
    fontSize: 22,
    marginBottom: 10,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  botao: {
    width: 300,
    borderColor: 'black', 
    borderRadius: 8,
    borderWidth: 2,
    alignSelf: 'center',
    marginVertical: 5 
  }
});
