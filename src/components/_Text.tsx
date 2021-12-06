import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

interface ITextProps extends TextProps {
  variant?: 'Bold' | 'Light' | 'Regular' | 'SemiBold';
  style?: {[key: string]: any},
  children: ReactNode
}

const CustomText = ({ variant, style, children, ...rest } : ITextProps) => {
  return (
    <Text 
      style={{
        fontFamily: variant ? `Outfit-${variant}` : 'Outfit-Regular',
        fontSize: 16,
        color: 'black',
        ...style
      }}
      {...rest}
    >
      { children }
    </Text>
  )
}

export default CustomText;
