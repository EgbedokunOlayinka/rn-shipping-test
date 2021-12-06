import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, sizes, spacing } from '../../utils/theme';
import _Text from '../_Text';

interface IHomeBoxProps {
  title: string,
  text: string
}

const HomeBox = ({ text, title }: IHomeBoxProps) => {
  return (
    <View style={styles.container}>
      <_Text style={styles.title} variant='SemiBold'>
        {title}
      </_Text>
      <_Text style={styles.text} variant='SemiBold'>
        {text}
      </_Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing.sm,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 4
  },
  title: {
    textAlign: 'center',
    fontSize: 18
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.grey
  }
})

export default HomeBox
