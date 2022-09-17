import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Formik from 'formik'
import Input from '../../components/ui/Input'
import { Container, HeadingContainer, HeadingText, InputContainer } from '../../components/Styled'
import DismissKeyBoard from '../../components/DismissKeyBoard'
import Btn from '../../components/ui/Btn'

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState();

  const handelSubmit = async () =>{

  }

  return (
    <DismissKeyBoard>
      <Container>
        <StatusBar barStyle={"dark-content"} />
        <HeadingContainer>
          <HeadingText>Register</HeadingText>
        </HeadingContainer>
        <KeyboardAvoidingView>
          <InputContainer>
            <Input 
              placeholder="Email" 
              value={email}
              autoCapitalize="words"
              stateFn={setEmail}
              keyboardType={"email-address"}
            />
            <Input 
              placeholder="Username" 
              value={username}
              autoCapitalize="words"
              stateFn={setUsername}
            />
            <Input 
              placeholder="Password" 
              value={email}
              stateFn={setEmail}
              isPassword={true}
            />
          </InputContainer>
          <Btn
            onPress={handelSubmit}
            text={"SignUp"}
            loading={loading}
          />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyBoard>
  )
}

export default Register

const styles = StyleSheet.create({})