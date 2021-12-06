import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DeliveryTypeState {
  type: 'send' | 'fetch'
}

const initialState: DeliveryTypeState = {
  type: 'send'
}

export const deliveryTypeSlice = createSlice({
  name: 'deliveryType',
  initialState,
  reducers: {
    toggleDeliveryType: (state, action: PayloadAction<'send' | 'fetch'>) => {
      state.type = action.payload
    },
  },
})

export const { toggleDeliveryType } = deliveryTypeSlice.actions

export default deliveryTypeSlice.reducer