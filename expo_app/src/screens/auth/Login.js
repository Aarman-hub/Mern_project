import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import DismissKeyBoard from '../../components/DismissKeyBoard';
import { Container, HeadingContainer, HeadingText, InputContainer } from '../../components/Styled';
import utils from '../../helpers/utils';
import Input from '../../components/ui/Input';
import Btn from '../../components/ui/Btn';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState();


  const isFormValid = () =>{
    if(email === "" || password === ""){
      alert("All field are required");
    }
    if(!utils.isEmail(email)){
      alert("Please provide a valid email");
      return false;
    }
    return true;
  }


  const handleSubmit = async () =>{
    if(!isFormValid){
      return;
    }
    setLoading(true);

    try {
      
    } catch (err) {
      alert("Email not found");
    } finally {
      setLoading(false);
    }
  };


  return (
    <DismissKeyBoard>
      <Container>
      <StatusBar barStyle="dark-content" />
        <HeadingContainer>
          <HeadingText>Sign In</HeadingText>
        </HeadingContainer>
        <KeyboardAvoidingView behavior='position'>
        <InputContainer>
          <Input 
            placeholder="Email"
            value={email}
            autoCapitalize="words"
            stateFn={setEmail}
            keyboardType={"email-address"}
          />
          <Input 
            placeholder="Password"
            value={password}
            autoCapitalize="words"
            stateFn={setPassword}
            isPassword={true}
          />
        </InputContainer>
        <Btn
          loading={loading}
          text={"Login"}
          onPress={handleSubmit}
        />

        </KeyboardAvoidingView>
      </Container>
    </DismissKeyBoard>
  )
}

export default Login

const styles = StyleSheet.create({})