import { useRef, useState } from "react";


enum Operators {
  sum, div, multiply, sub
}

export const useCalculator = () => {

  const [previousNumber, setPreviousNumber] = useState('')
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>()

  const clear = () => {
    setNumber('');
    setPreviousNumber('0');
  }

  const sumNumber = (textNumber: string) => {

    if (number.includes(',') && textNumber === ',') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal
      if(textNumber === ',') {
        setNumber( number + textNumber);        
      } else if ( textNumber === '0' && number.includes(',') ) {        
        setNumber( number + textNumber);
      } else if ( textNumber !== '0' && !number.includes(',') ) {
        setNumber( textNumber )
      } else if ( textNumber === '0' && !number.includes(',') ) {
        setNumber( number )
      } else {
        setNumber( number + textNumber )
      }
    } else {
      setNumber( number + textNumber);
    }

  }

  const positivoNegativo = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number )
    }
  }

  const del = () => {
    let negative = '';
    let tempName = number;

    if ( number.includes('-')) {
      negative = '-';
      tempName = number.substring(1);
    }
    
    if ( tempName.length > 1 ) {
      setNumber( negative + number.slice(0, -1))
    } else {
      setNumber('0')
    }
  }

  const changePrevNumber = () => {
    if (number.endsWith(',')) {
      setPreviousNumber(number.slice(0, -1));
    } else{
      setPreviousNumber( number );
    }
    setNumber('0')
  }

  // operations
  const division = () => {
    changePrevNumber();
    lastOperation.current = Operators.div;
  }

  const multiply = () => {
    changePrevNumber();
    lastOperation.current = Operators.multiply;
  }

  const sum = () => {
    changePrevNumber();
    lastOperation.current = Operators.sum;
  }

  const sub = () => {
    changePrevNumber();
    lastOperation.current = Operators.sub;
  }


  const calculate = () => {
    let num1 = Number(number);
    let num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.sub:
        setNumber(`${num2 - num1}`);
        break;
        
      case Operators.div:
        setNumber(`${num2 / num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
    
      default:
        break;
    }

    setPreviousNumber('0');

  }

  return {
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
  }


}