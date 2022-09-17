import { Dimensions } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import PropsType from 'prop-types';


const {width} = Dimensions.get('screen');

const InputContainer = styled.View``;

const CustomInput = styled.TextInput`
    width: ${width / 1.2}px;
    padding: 12.5px 20px;
    border: 1px solid grey;
    background-color: white;
    border-radius: 30px;
    margin-bottom: 10px;
    font-weight: 500;
`;


const Input = ({
    value,
    placeholder,
    isPassword = false,
    autoCapitalize,
    keyboardType,
    stateFn
}) => {
  return (
    <CustomInput
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isPassword ? true : false}
        autoCapitalize={autoCapitalize}
        onChangeText={text=>stateFn(text)}
    />
  )
}

export default Input
