import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing } from '../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import _Text from '../components/_Text';
import DetailsView from '../components/details/DetailsView';
import Btn from '../components/Btn';
import { RootStackParamList } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Pickup from '../components/details/Pickup';
import ItemInfo from '../components/details/ItemInfo';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import { toggleDeliveryType } from '../redux/deliveryTypeSlice';

type DetailsNavProps = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const Details = () => {
  const navigation = useNavigation<DetailsNavProps>();

  const deliveryType = useSelector((state: RootState) => state.deliveryType.type);
  const { dropoff, pickup } = useSelector((state: RootState) => state.location);

  const dispatch = useDispatch();

  const navToConnect = () => {
    if(!dropoff.description || !pickup.description) {
      return;
    }

    navigation.navigate('Connect');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeftBtn}>
          <Icon name='reorder-two-outline' size={40} color='black' />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerRightBtn}>
            <Icon name='reorder-three-outline' size={20} color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerRightBtnTwo}>
            <Icon name='notifications' size={20} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topBtnWrapper}>
        <TouchableOpacity 
          style={{
            ...styles.topBtn,
            backgroundColor: deliveryType === 'send' ? colors.blue : 'transparent'
          }}
          onPress={() => dispatch(toggleDeliveryType('send'))}
        >
          <_Text style={{
            color: deliveryType === 'send' ? 'white' : 'black'
          }}>
            Send
          </_Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            ...styles.topBtnLeft,
            ...styles.topBtn,
            backgroundColor: deliveryType === 'fetch' ? colors.blue : 'transparent'
          }}
          onPress={() => dispatch(toggleDeliveryType('fetch'))}
        >
          <_Text style={{
            color: deliveryType === 'fetch' ? 'white' : 'black'
          }}>
            Fetch me
          </_Text>
        </TouchableOpacity>
      </View>

      <DetailsView />

      <Pickup />

      <ItemInfo />

      <View style={styles.priceView}>
        <_Text>Total price</_Text>
        <_Text variant='SemiBold' style={styles.priceBold}>$48.80</_Text>
      </View>

      <View style={styles.btnView}>
        <Btn
          text='Submit'
          style={{ width: '100%' }}
          onPress={() => navToConnect()}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    flex: 1
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLeftBtn: {
    width: 50,
  },
  headerRightBtn: {
    width: 20,
    backgroundColor: 'silver',
    borderRadius: 3
  },
  headerRightBtnTwo: {
    width: 20,
    marginLeft: spacing.lg
  },
  headerRight: {
    flexDirection: 'row'
  },
  btnView: {
    marginTop: spacing.md,
    display: 'flex',
    alignItems: 'center'
  },
  topBtnWrapper: {
    marginTop: spacing.sm,
    flexDirection: 'row'
  },
  topBtnLeft: {
    marginLeft: spacing.xs
  },
  topBtn: {
    paddingVertical: spacing.sm2,
    paddingHorizontal: 20,
    borderRadius: 12
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg
  },
  priceBold: {
    fontSize: 20
  }
})

export default Details
