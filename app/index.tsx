import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';

const Login = () => {
  const [Nomeusuario, setNomeusuario] = useState('');
  const [senha, setsenha] = useState('');

  const handleLogin = () => {
  };

  return (
    <>
    <Text style={{ color: 'blue',fontSize: 60 ,fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Viridis</Text>
    <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Login</Text>
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => setNomeusuario(text)}
        value={Nomeusuario}
        placeholder="Nome de usuário"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={text => setsenha(text)}
        value={senha}
        placeholder="Senha"
        secureTextEntry
      />
      <Button
        title="Entrar"
        onPress={handleLogin}
      />
    </View>
    </>
  );
};

export default Login;