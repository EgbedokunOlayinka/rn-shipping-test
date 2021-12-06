import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { colors, sizes, spacing } from '../../utils/theme'
import _Text from '../_Text';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux'
import PickupModal from './PickupModal';
import DropoffModal from './DropoffModal';

const DetailsView = () => {
  const { dropoff, pickup } = useSelector((state: RootState) => state.location);

  const [pickupVisible, setPickupVisible] = useState<boolean>(false);
  const [dropoffVisible, setDropoffVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Modal visible={pickupVisible} animationType="slide">
        <PickupModal closeModal={() => setPickupVisible(false)} />
      </Modal>
      <Modal visible={dropoffVisible} animationType="slide">
        <DropoffModal closeModal={() => setDropoffVisible(false)} />
      </Modal>

      <_Text variant='SemiBold' style={styles.title}>Details</_Text>
      
      <View style={styles.bodyWrapper}>
        <TouchableOpacity
          style={styles.box} 
          onPress={() => setPickupVisible(true)}
        >
          <View>
            <Icon name='location-sharp' size={25} color={colors.green} />
          </View>
          <View style={styles.boxRight}>
            {
              pickup.description ? (
                <>
                  <_Text variant='SemiBold' style={styles.boxTitle} numberOfLines={1}>
                    { pickup.description }
                  </_Text>
                  <_Text variant='SemiBold' style={styles.boxText}>
                    Driver
                  </_Text>
                </>
              ) : (
                  <_Text variant='SemiBold'>
                    Enter your pickup location
                  </_Text>
              )
            }
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Icon name='chevron-forward' size={25} color={colors.green} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{...styles.box, marginTop: spacing.sm2}} 
          onPress={() => setDropoffVisible(true)}
        >
          <View>
            <Icon name='flag' size={25} color={colors.red} />
          </View>
          {
            dropoff.description ? (
              <_Text variant='SemiBold' style={{ ...styles.boxRight, color: colors.red, fontSize: 14 }} numberOfLines={1}>
                { dropoff.description }
              </_Text>
            ) : (
              <_Text variant='SemiBold' style={styles.boxRight}>
                Enter your destination
              </_Text>
            )
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing.lg
  },
  title: {
    fontSize: 20
  },
  bodyWrapper: {
    marginTop: spacing.sm
  },
  box: {
    borderWidth: 1,
    borderColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    height: 60
  },
  boxRight: {
    marginLeft: spacing.md
  },
  boxTitle: {
    color: colors.green,
    fontSize: sizes.md
  },
  boxText: {
    color: colors.grey,
    marginTop: spacing.xs,
    fontSize: sizes.md
  }
})

export default DetailsView
