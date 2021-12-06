import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ItemInfoType =  'daily necessities' | 'food' | 'document' | 'clothing' | 'digital product' | 'other'

export interface ItemInfoState {
  info: ItemInfoType
}

const initialState: ItemInfoState = {
  info: 'daily necessities'
}

export const itemInfoSlice = createSlice({
  name: 'itemInfo',
  initialState,
  reducers: {
    setItemInfo: (state, action: PayloadAction<ItemInfoType>) => {
      state.info = action.payload
    },
  },
})

export const { setItemInfo } = itemInfoSlice.actions

export default itemInfoSlice.reducer