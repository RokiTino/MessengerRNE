import { View, Text,StyleSheet,TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import logo from '../../assets/logo_size.png'
import { LinearGradient } from 'expo-linear-gradient'

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


const handleSubmit = () => {
        var emailValid = false;
        if(username.length == 0){
            setEmailError("Email is required");
        }     
        else if(username.indexOf(' ') >= 0){        
            setEmailError('Email cannot contain spaces');                          
        }    
        else{
            setEmailError("")
            emailValid = true
        }
        var passwordValid = false;
        if(password.length == 0){
            setPasswordError("Password is required");
        }        
        else if(password.length < 6){
            setPasswordError("Password should be minimum 6 characters");
        }      
        else if(password.indexOf(' ') >= 0){        
            setPasswordError('Password cannot contain spaces');                          
        }    
        else{
            setPasswordError("")
            passwordValid = true
        }
        if(emailValid && passwordValid){
            console.log('Username: ',username);
            console.log('Password: ',password);
            
            navigation.navigate('Home');

            
            setUsername("");
            setPassword("");
        }        
    
      }
  return (
    
    <View style={styles.container}>
        <LinearGradient 
        colors={['rgba(249,245,254,0.8)', 'transparent']} style={styles.background}/>
        <View style={styles.hero}>
            <Image source={logo} style={styles.hero} />
        </View>
        <Text style={styles.title}>Welcome</Text>
        <TextInput style={styles.input} placeholder={'Username'} spellCheck={false} onChangeText={text => setUsername(text)} value={username} ></TextInput>
        {emailError.length> 0 && 
            <Text style={styles.errorText}>{emailError}</Text>
        }
        <TextInput style={[styles.input,{marginTop:20}]} placeholder={'Password'} spellCheck={false} secureTextEntry={true} onChangeText={(value) => setPassword(value)} value={password}></TextInput>
        {passwordError.length > 0 &&
            
            <Text style={styles.errorText}>{passwordError}</Text>
          }
        <TouchableOpacity onPress={() => handleSubmit()}>
        <View style={styles.button}>
            <Text style={styles.textInButton}>LogIn</Text>
        </View>
        </TouchableOpacity>
        
            <View style={styles.inlign}>
                <Text>Don't have an account ? </Text><TouchableOpacity onPress={() => {navigation.navigate('Register')}}><Text style={styles.register}>Register</Text></TouchableOpacity>
            </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
    inlign:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
    },
    register: {
        flex:0,
        color:'#7879F1',
        height:18,
        width:106,
        alignContent:'center',
        justifyContent:'center',
    },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
    hero: {
        justifyContent:'center',
        marginTop:20,
        marginBottom:35,
        width:170,
        height:180,
        padding:10,
        borderRadius:82,
        alignContent:'center',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CBADF2',
    },
    input: {
        borderColor:'#000',
        borderWidth: 0.5,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        textShadowColor:'#f3f3f3',
        margin: 5,
        padding: 15,
        width:343,
        height:52,
    },
    button: {
        width:343,
        height:52,
        backgroundColor:'#7879F1',
        borderRadius: 100,
        borderColor: 'black',
        alignItems:'center',
        marginTop:40,
        padding:10,
    },
    textInButton: {
        marginTop:0,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
        fontSize:20,
        padding:5,
    },
    errorText: {
        color:'red',
        fontWeight:'400',
        textAlign:'center',
        margin: 5,
        padding:2,
        alignContent:'space-between',
        justifyContent:'space-between',
    }, 
    title: {
        fontSize:25,
        color: '#ffff',
        margin:10,
        marginBottom:25,
        padding:10,
    }
  });