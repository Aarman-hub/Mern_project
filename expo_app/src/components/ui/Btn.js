import {Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import colors from '../Colors';

const {width} = Dimensions.get("screen");

const Button = styled.View`
  margin-bottom: 25px;
  border: 1px solid ${colors.black};
  border-radius: 30px;
  padding: 12.5px 0px;
  align-items: center;
  width: ${width / 1.5}px;
  background-color: ${colors.red};
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.white};
`;


const Btn = ({
text,
loading = false,
onPress
}) => {
  return (
    <TouchableOpacity onPress={loading ? null : onPress}>
      {loading ? (
        <ActivityIndicator color="White" />
      ) : (
        <Text>{text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default Btn;