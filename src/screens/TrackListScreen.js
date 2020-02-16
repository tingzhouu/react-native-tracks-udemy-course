import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
            <ListItem title={item.name} chevron />
          </TouchableOpacity> 
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})


export default TrackListScreen
