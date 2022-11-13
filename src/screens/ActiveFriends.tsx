import { FlatList, StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import InfiniteScrollView from 'react-native-infinite-scroll-view';

const ActiveFriends = () => {

  const [data,setData] = useState([])
  const [canLoadMore,setCanLoadMore] = useState(false)
  const [item,setItem] = useState({name: 'Robertino', image:''})
  const renderItem = ({ item }) => {
    return (
     <View>
      <TouchableOpacity>
          <Text>{item.name}</Text>
      </TouchableOpacity>
     </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['rgba(249,245,254,0.8)', 'transparent']} style={styles.background}/>
        <FlatList style={{ backgroundColor: '#FFF' }}
            renderScrollComponent={props => <InfiniteScrollView {...props} />}
            data={data}
            renderItem={renderItem} />
          
    </View>
  )
}

export default ActiveFriends

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#CBADF2',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
})