import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../theme/appTheme'
import { CalcButton } from '../components/CalcButton'
import { useCalculator } from '../hooks/useCalculator'



export const Calculadora = () => {

  const {
    previousNumber,
    number,
    clear,
    positivoNegativo,
    sum,
    sub,
    division,
    multiply,
    del,
    sumNumber,
    calculate
  } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>

      {
        (previousNumber !== '0') && (
          <Text style={styles.smallResult}> {previousNumber} </Text>
        )
      }

      <Text 
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      > 
        {number}
      </Text>

      {/* btn row */}
      <View style={styles.fila}>
        <CalcButton text='C'    color='#9b9b9b' action={ clear } />
        <CalcButton text='+/-'  color='#9b9b9b' action={ positivoNegativo } />
        <CalcButton text='del'  color='#9b9b9b' action={ del } />
        <CalcButton text='÷'    color='#ff9427' action={ division } />
      </View>

      {/* btn row */}
      <View style={styles.fila}>
        <CalcButton text='7' action={sumNumber} />
        <CalcButton text='8' action={sumNumber} />
        <CalcButton text='9' action={sumNumber} />
        <CalcButton text='x' action={ multiply } color='#ff9427'/>
      </View>

      {/* btn row */}
      <View style={styles.fila}>
        <CalcButton text='4' action={sumNumber} />
        <CalcButton text='5' action={sumNumber} />
        <CalcButton text='6' action={sumNumber} />
        <CalcButton text='-' action={ sub } color='#ff9427'/>
      </View>

      {/* btn row */}
      <View style={styles.fila}>
        <CalcButton text='1' action={sumNumber} />
        <CalcButton text='2' action={sumNumber} />
        <CalcButton text='3' action={sumNumber} />
        <CalcButton text='+' action={ sum } color='#ff9427'/>
      </View>

      {/* btn row */}
      <View style={styles.fila}>
        <CalcButton text='0' action={sumNumber} largeBtn />
        <CalcButton text=',' action={ sumNumber } />
        <CalcButton text='=' action={ calculate } color='#ff9427'/>
      </View>

    </View>
  )
}