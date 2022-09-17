import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';


const CustomButton = styled.TouchableOpacity`
  padding: 10px;
  background-color:red;
  width: 150px;
  height: 60px;
  margin-bottom: 5px;
  text-aligns:center;
  align-items:center;
  `;
const ButtonText = styled.Text`
  color:white;
  font-size:28px;
`;

const Welcome = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontWeight:'800', fontSize:28, marginBottom: 10}}>Welcome Back!</Text>
      <CustomButton onPress={()=>navigation.navigate("Register")}>
        <ButtonText>Register</ButtonText>
      </CustomButton>
      <CustomButton onPress={()=>navigation.navigate("Login")}>
        <ButtonText>Login</ButtonText>
      </CustomButton>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})