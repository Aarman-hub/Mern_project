import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AuthNav from '../navigations/Auth/Auth';
import MainNav from '../navigations/Main/Main';

const Gate = () => {
  const isLogedIn = false;
  return (
    <NavigationContainer>
        {isLogedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  )
}

export default Gate