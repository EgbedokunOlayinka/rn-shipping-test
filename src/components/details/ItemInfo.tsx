import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, sizes, spacing } from '../../utils/theme';
import _Text from '../_Text';
import ItemInfoBtn from './ItemInfoBtn';

const ItemInfo = () => {
  return (
    <View style={styles.container}>
      <_Text variant='SemiBold' style={styles.title}>Item Information</_Text>

      <View style={styles.bodyWrapper}>
        <View style={styles.btnWrapper}>
          <ItemInfoBtn text='daily necessities' />
          <ItemInfoBtn text='food' />
          <ItemInfoBtn text='document' />
        </View>
        <View style={{...styles.btnWrapper, marginTop: 10 }}>
          <ItemInfoBtn text='clothing' />
          <ItemInfoBtn text='digital product' />
          <ItemInfoBtn text='other' />
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
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    backgroundColor: colors.grey,
    borderRadius: 15,
    width: 110,
    paddingVertical: spacing.sm
  },
  btnText: {
    fontSize: sizes.sm2,
    textAlign: 'center'
  }
})

export default ItemInfo
