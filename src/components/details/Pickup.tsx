import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../../utils/theme';
import _Text from '../_Text';

const Pickup = () => {
  const [time, setTime] = useState<'am'|'pm'>('am');

  return (
    <View style={styles.container}>
      <_Text variant='SemiBold' style={styles.title}>Pick up</_Text>

      <View style={styles.bodyWrapper}>
        <_Text variant='SemiBold'>Time</_Text>

        <View style={styles.btnView}>
          <TouchableOpacity 
            style={{
              ...styles.btn, 
              ...styles.rightBtn,
              backgroundColor: time === 'am' ? colors.blue : 'transparent'
            }}
            onPress={() => setTime('am')}
          >
            <_Text variant='SemiBold'>
              AM
            </_Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              ...styles.btn,
              ...styles.leftBtn,
              backgroundColor: time === 'pm' ? colors.blue : 'transparent'
            }}
            
            onPress={() => setTime('pm')}
          >
            <_Text variant='SemiBold'>
              PM
            </_Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timeView}>
          <_Text variant='SemiBold'>11:00</_Text>
          <_Text variant='SemiBold' style={styles.timeViewSpacer}>-</_Text>
          <_Text variant='SemiBold' style={styles.timeViewSpacer}>12:00</_Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl
  },
  title: {
    fontSize: 20
  },
  bodyWrapper: {
    marginTop: spacing.sm2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 12
  },
  btn: {
    borderRadius: 12,
    paddingHorizontal: spacing.sm2,
    paddingVertical: 10,
  },
  rightBtn: {
    borderRightWidth: 0
  },
  leftBtn: {
    borderLeftWidth: 0
  },
  timeView: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: spacing.sm2,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeViewSpacer: {
    marginLeft: spacing.sm2
  }
})

export default Pickup
