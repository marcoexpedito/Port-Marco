import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles/skillStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
          style= {styles.image} 
          source={require('../../assets/eu.png')}
          />
          <Text style ={styles.name}> Minhas Habilidades </Text>
          <Text style ={styles.skills}> CSS: ⭐⭐⭐</Text>
          <Text style ={styles.skills}> HTML: ⭐⭐⭐⭐</Text>
          <Text style ={styles.skills}> PYTHON: ⭐⭐</Text>
          <Text style ={styles.skills}> REACT: ⭐⭐⭐⭐</Text>
          <Text style ={styles.skills}> TYPESCRIPT: ⭐⭐⭐⭐</Text>
          <Text style ={styles.skills}> JAVASCRIPT: ⭐⭐⭐⭐</Text>
          <Pressable style={styles.botao}>
            <Button title='Fala comigo' onPress={() => Alert.alert('Para entrar em contato, volte na página inicial e clique em e-mail!')} color='green'>
            </Button>
          </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}