import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ILocation {
  description: string | null;
  placeId: string | null;
}

export interface LocationState {
  pickup: ILocation,
  dropoff: ILocation
}

const initialState: LocationState = {
  pickup: {
    description: null,
    placeId: null
  },
  dropoff: {
    description: null,
    placeId: null
  }
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setPickup: (state, action: PayloadAction<ILocation>) => {
      state.pickup = action.payload
    },
    setDropoff: (state, action: PayloadAction<ILocation>) => {
      state.dropoff = action.payload
    },
  },
})

export const { setPickup, setDropoff } = locationSlice.actions

export default locationSlice.reducer