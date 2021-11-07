import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

let login = (username, pass) => {
  alert("Username: ${username} Password: ${pass}");
}

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style = {styles.container}>
      <Image
        source={{uri: "https://27tcx2gd0ls2aa2s03qr8l8n-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"}}
        style={{width: 200, height: 200}}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Username"
        onChangeText = {(username) => setUsername(username)}
      />
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Password"
        secureTextEntry = {true}
        onChangeText = {(password) => setPassword(password)}
      />
        <TouchableOpacity>
        <Text style={styles.forgot_password}>Forgot Password?</Text>
      </TouchableOpacity>
        <TouchableOpacity 
        styles={styles.button}
        onPress={() => {
            fetch("http://localhost:5000/login" + username + "-" + password, {
              mode: "no-cors",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(username + password)
            }
            ).then(response => { 
              return response.json()
            })
            .then(json => { 
              console.log(json);
            })
          }
        }>
        <Text style={styles.forgot_password}>Login</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    forgot_password: {
      height: 30,
        marginBottom: 30,
    }
});
export default App