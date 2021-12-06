import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colors, spacing } from '../utils/theme';
import _Text from './_Text';

interface IBtnProps extends TouchableOpacityProps {
  style?: {[key: string]: any},
  children?: ReactNode,
  text?: string,
  onPress: () => void
}

const Btn = ({ style, children, text, onPress, ...props }: IBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.blue,
        borderRadius: 15,
        paddingVertical: spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
      {...props}
    >
      { text ? (
        <_Text
          variant='SemiBold'
          style={{
            color: 'white',
            textAlign: 'center'
          }}
        >
          { text }
        </_Text>
      ) : children }
    </TouchableOpacity>
  )
}

export default Btn
