import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors, sizes, spacing } from '../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import EntIcon from 'react-native-vector-icons/Entypo';
import _Text from '../components/_Text';
import Btn from '../components/Btn';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/core';

type ConnectNavProps = NativeStackNavigationProp<RootStackParamList, 'Connect'>;

const Connect = () => {
  const navigation = useNavigation<ConnectNavProps>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
          <Icon name='chevron-back' size={20} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn}>
          <EntIcon name='dots-two-vertical' size={20} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.mapView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/rn-map.png')}
          />
        </View>
        <View style={styles.textView}>
          <View style={styles.textFlex}>
            <View style={styles.leftTextView}>
              <_Text style={styles.greyText}>Estimate Time</_Text>
              <View style={styles.leftTextFlex}>
                <_Text variant='SemiBold' style={styles.bigText}>30</_Text>
                <_Text style={styles.mtText}>m</_Text>
                <_Text style={{...styles.mtText, ...styles.smText}}>/</_Text>
                <_Text variant='SemiBold' style={styles.bigText}>35</_Text>
                <_Text style={styles.mtText}>m</_Text>
              </View>
            </View>
            <View style={styles.rightTextView}>
              <_Text style={styles.rightText}>Today</_Text>
              <_Text style={{...styles.rightText, marginTop: 4 }}>11:35</_Text>
            </View>
          </View>
          <View style={styles.bottomFlex}>
            <View style={styles.detailsFlex}>
              <View style={styles.iconBox}>
                <Icon name='chevron-down' size={15} color='black' />
              </View>
              <_Text style={styles.detailsText}>Details</_Text>
            </View>
            <View style={styles.btnView}>
              <Btn
                style={{ width: '100%', flexDirection: 'row' }}
                onPress={() => console.log('done')}
              >
                <Icon name='call' size={18} color='white' />
                <_Text variant='SemiBold' style={{ marginLeft: spacing.sm }}>Connect</_Text>
              </Btn>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    flex: 1
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerBtn: {
    padding: spacing.sm,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 12
  },
  body: {
    flex: 1
  },
  mapView: {
    flex: 0.8,
    marginVertical: spacing.lg,
    borderRadius: 15
  },
  textView: {
    flex: 0.2
  },
  leftTextView: {

  },
  rightTextView: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 15,
    paddingVertical: spacing.sm2,
    paddingHorizontal: spacing.md,
  },
  textFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconBox: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 3,
    borderRadius: 8
  },
  btnView: {
    flex: 0.8,
    paddingLeft: spacing.xl3
  },
  bigText: {
    fontSize: sizes.xl2
  },
  mtText: {
    marginBottom: spacing.xs
  },
  greyText: {
    color: colors.grey
  },
  leftTextFlex: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: spacing.sm2
  },
  smText: {
    fontSize: 12,
    marginHorizontal: spacing.xs
  },
  rightText: {
    textAlign: 'center'
  },
  detailsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.2
  },
  detailsText: {
    marginLeft: spacing.sm,
    color: colors.grey,
    fontSize: sizes.md
  },
  bottomFlex: {
    marginTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20
  }
})

export default Connect
