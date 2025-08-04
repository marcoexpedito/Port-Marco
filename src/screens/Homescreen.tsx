import { StatusBar } from 'expo-status-bar';
import { homeStyles } from '../styles/homeStyles';
import { Alert, Button, Image, Pressable, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={homeStyles.container}>
    <Image 
    style= {homeStyles.image} 
    source={require('../../assets/eu.png')}
    />
      <Text 
      style= {homeStyles.name}>Marco Expedito
      </Text>
      <Pressable style={homeStyles.botao}>
        <Button 
      title={'LinkedIn'}
      onPress={() => Alert.alert('https://www.linkedin.com/in/marcoexpedito/')}
      color= 'black'
      /> 
      </Pressable>
      <Pressable style={homeStyles.botao}>
        <Button 
      title={'GitHub'}
      onPress={() => Alert.alert('https://github.com/marcoexpedito')}
      color= 'black'/> 
      </Pressable>
      <Pressable style={homeStyles.botao}>
        <Button
      title={'E-mail'}
      onPress={() => Alert.alert('marcogomes52@hotmail.com')}
      color= 'black'
      /> 
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
