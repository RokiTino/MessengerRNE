import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActiveFriends from './ActiveFriends';
import Friends from './Friends';
import { BlurView } from 'expo-blur';
const Tab = createBottomTabNavigator()

const FriendsScreen = () => {
  return (
    <View style={styles.topNavBar}>
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 200 },
            tabBarStyle: { backgroundColor: 'powderblue',opacity:0.5},
            
    tabBarBackground: () => (
        <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
      ),
          }}
          >
            <Tab.Screen name='Active' component={ActiveFriends} options={{headerShown:false}} />
            <Tab.Screen name='All' component={Friends} options={{headerShown:false}} />
        </Tab.Navigator>
    </View>
  )
}

export default FriendsScreen

const styles = StyleSheet.create({
    topNavBar: {
        alignContent:'center',
        justifyContent: 'flex-start',
        marginTop:5,
        display:'flex',
        flex: 1,
        borderRadius:10,
    }
})