import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../../types';
import Btn from '../components/Btn';
import HomeBox from '../components/home/HomeBox';
import _Text from '../components/_Text';
import { spacing, sizes } from '../utils/theme';

type HomeNavProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeNavProps>();

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          style={styles.image}
          source={require('../../assets/images/rn-test.png')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.bottomView}>
        <_Text style={styles.titleText} variant='SemiBold'>
          Send Anything Fast
        </_Text> 
        <Text style={styles.bodyText}>
          There is no transfer, leading to the real destination, real-time monitoring, first compensation guarantee, peace of mind and peace of mind.
        </Text>
        <View style={styles.flexView}>
          <HomeBox title='25m' text='Fastest' />
          <HomeBox title='1 to 1' text='Distribution' />
          <HomeBox title='229' text='Cities' />
        </View>
        <View style={styles.btnView}>
          <Btn 
            text='Start'
            style={{ width: 150 }}
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm2,
    paddingVertical: spacing.sm,
    flex: 1,
    maxHeight: '100%'
  },
  topView: {
    flex: 0.5,
    // padding: 32
  },
  bottomView: {
    flex: 0.5,
    marginTop: spacing.sm2,
    paddingHorizontal: spacing.xs
  },
  image: {
    width: '100%',
    height: '100%'
  },
  titleText: {
    textAlign: 'center',
    fontSize: sizes.xl,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: sizes.md,
    marginTop: spacing.sm
  },
  flexView: {
    paddingHorizontal: spacing.sm,
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  btnView: {
    marginTop: spacing.md,
    display: 'flex',
    alignItems: 'center'
  }
})

export default Home
