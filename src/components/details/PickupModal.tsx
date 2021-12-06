import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { GoogleAutoComplete } from "react-native-google-autocomplete";
import { colors, spacing } from '../../utils/theme';
import Btn from '../Btn';
import _Text from '../_Text';
import { setPickup } from '../../redux/locationSlice';
import { useDispatch } from 'react-redux';
import { GOOGLE_API_KEY } from "@env";

interface IPickupModalProps {
  closeModal: () => void
}

const PickupModal = ({ closeModal }: IPickupModalProps) => {
  const dispatch = useDispatch();

  const setLocation = (desc: string, id: string) => {
    dispatch(setPickup({
      description: desc,
      placeId: id
    }));
    closeModal();
  } 

  return (
      <View style={styles.container}>
        <GoogleAutoComplete
          apiKey={GOOGLE_API_KEY}
          debounce={150}
          components="country:ng"
          minLength={1}
        >
          {({
            inputValue,
            handleTextChange,
            locationResults,
            fetchDetails,
          }) => (
            <>
              <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleTextChange}
                placeholder="Enter pickup address"
              />

              {/* <ScrollView style={styles.autoList}>
                {locationResults.map((item, i) => (
                  <KbLocationItem
                    item={item}
                    fetchDetails={fetchDetails}
                    key={String(i)}
                    setAddressData={setAddressData}
                    chooseModalLocation={chooseModalLocation}
                  />
                ))}
              </ScrollView> */}

              <FlatList
                data={locationResults}
                ItemSeparatorComponent={
                  () => <View style={styles.spacer}></View>
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => setLocation(item.description, item.place_id)}
                  >
                    <_Text>
                      {item.description}
                    </_Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => String(Math.random())}
                style={styles.list}
              />
            </>
          )}
        </GoogleAutoComplete>

        <View style={styles.btnView}>
          <Btn
            text='Close'
            style={{ width: '100%' }}
            onPress={closeModal}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md
  },
  btnView: {
    marginTop: spacing.xl,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: spacing.md
  },
  list: {
    marginTop: spacing.lg
  },
  listItem: {
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 18,
    borderRadius: 12
  },
  spacer: {
    marginVertical: spacing.sm,
  }
})

export default PickupModal
