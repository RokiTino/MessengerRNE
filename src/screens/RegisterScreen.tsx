import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import logo from '../../assets/logo_size.png'
import { LinearGradient } from 'expo-linear-gradient'

const RegisterScreen = ({navigation}) => {
    
    const [username, setUsername] = useState('')
    const [usernameError, setusernameError] = useState("")
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState("")
    const [surname, setSurName] = useState('')
    const [surnameError,setSurNameError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


const handleSubmit = () => {
    let userNameValid = false;
    if(username.length == 0){
        setusernameError("Username is required");
    }     
    else if(username.indexOf(' ') >= 0){        
        setusernameError('Username cannot contain spaces');                          
    }    
    else{
        setusernameError("")
        userNameValid = true
    }
    let nameValid = false;
    if(name.length === 0){
        setNameError('Name is required')
    }else {
        setNameError('')
        nameValid = true;
    }
    let surnameValid = false;
    if(surname.length === 0){
        setSurNameError('Surname is required')
    }else {
        setSurNameError('')
        surnameValid = true;
    }
    let emailValid = false;
    if(email.length === 0 ){
        setEmailError('Email is required')
    }else if (email.indexOf(' ') >= 0){
        setEmailError('Email cannot contain spaces');  
    }else if (email.length < 6 ) {
        setEmailError('Email cannot be smaller then 6 letters')
    }else {
        setEmailError('')
        emailValid = true;
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
    if(userNameValid && passwordValid && nameValid && emailValid && surnameValid){
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
        <Text style={styles.title}>Join us now</Text>
        <TextInput style={styles.input} placeholder={'Name'} spellCheck={false} onChangeText={text => setName(text)} value={name} ></TextInput>
        {nameError.length> 0 && 
            <Text style={styles.errorText}>{nameError}</Text>
        }
        <TextInput style={styles.input} placeholder={'Surname'} spellCheck={false} onChangeText={text => setSurName(text)} value={surname} ></TextInput>
        {surnameError.length> 0 && 
            <Text style={styles.errorText}>{surnameError}</Text>
        }
        <TextInput style={styles.input} placeholder={'E-Mail'} spellCheck={false} onChangeText={text => setEmail(text)} value={email} ></TextInput>
        {emailError.length> 0 && 
            <Text style={styles.errorText}>{emailError}</Text>
        }
        <TextInput style={styles.input} placeholder={'Username'} spellCheck={false} onChangeText={text => setUsername(text)} value={username} ></TextInput>
        {usernameError.length> 0 && 
            <Text style={styles.errorText}>{usernameError}</Text>
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
       
        </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
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
    
    hero: {
        justifyContent:'center',
        marginBottom:40,
        width:130,
        height:140,
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

    title: {
        fontSize:25,
        color: '#ffff',
        margin:10,
        marginBottom:10,
        padding:10,
    }
})