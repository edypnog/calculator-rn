import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  text: string;
  color?: string;
  largeBtn?: boolean;
  action: (action: string) => void;
}

export const CalcButton = ({ text, color = '#2d2d2d', largeBtn = false, action }: Props) => {
  return (
    <TouchableOpacity onPress={ () => action( text ) }>
      <View style={{
        ...styles.btn,
        backgroundColor: color,
        width: largeBtn ? 180 : 80
      }}>
        <Text style={{
          ...styles.btnText,
          color: ( color === '#9b9b9b' ? 'black' : 'white' )
        }}> { text } </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    margin: 6,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
})