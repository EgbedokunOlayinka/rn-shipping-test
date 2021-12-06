import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { colors, sizes, spacing } from '../../utils/theme';
import _Text from '../_Text';
import { ItemInfoType, setItemInfo } from '../../redux/itemInfoSlice';

interface IItemInfoBtnProps {
  text: ItemInfoType;
}

const ItemInfoBtn = ({ text }: IItemInfoBtnProps) => {
  const info = useSelector((state: RootState) => state.itemInfo.info);

  const dispatch = useDispatch();

  const selected = text === info;

  return (
    <TouchableOpacity
      style={{
        borderRadius: 15,
        width: 110,
        paddingVertical: spacing.sm,
        backgroundColor: selected ? colors.blue : colors.grey,
      }}
      onPress={() => dispatch(setItemInfo(text))}
    >
      <_Text 
        style={{
          fontSize: sizes.sm2,
          textAlign: 'center',
          color: selected ? 'white' : 'black',
          textTransform: 'capitalize'
        }}
      >
        { text }
      </_Text>
    </TouchableOpacity>
  )
}

export default ItemInfoBtn
