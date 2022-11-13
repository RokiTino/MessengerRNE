import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FriendsScreen from './FriendsScreen';
import ChatListScreen from './ChatListScreen';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.topNavBar}>
      <Tab.Navigator
        
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12,color:'white',fontWeight:'bold',fontStyle:'italic' },
          tabBarItemStyle: { width: 200},
          tabBarStyle: { backgroundColor: '#A5A6F6',opacity:0.5},
          tabBarPressColor:'#7879F1',
          tabBarPressOpacity:1,
          
        }}
      >
        <Tab.Screen name='Friends' component={FriendsScreen} />
        <Tab.Screen name='Communications' component={ChatListScreen} />
      </Tab.Navigator>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    topNavBar: {
        alignContent:'center',
        justifyContent: 'flex-start',
        marginTop:37,
        display:'flex',
        flex: 1,
    }
})