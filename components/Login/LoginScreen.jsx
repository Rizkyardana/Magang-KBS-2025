import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert, 
  StatusBar, 
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import loginStyles from './styles/loginStyle';
import api from '../../services/api';

const LoginScreen = ({ navigation }) => {
  const [nik, setNik] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = async () => {
    if (nik.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'NIK dan password harus diisi');
      return;
    }

    setLoading(true);
    const response = await api.login(nik, password);
    setLoading(false);

    if (response.success) {
      navigation.replace('Dashboard');
    } else {
      Alert.alert('Login Gagal', response.error || 'Terjadi kesalahan');
    }
  };
  
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={loginStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      {/* Header Section */}
      <View style={loginStyles.topSection}>
        <View style={{ width: '100%' }}>
          <Image 
            source={require('../../assets/logoPort.png')} 
            style={loginStyles.logo} 
            resizeMode="contain" 
          />
          <View>
            <Text style={loginStyles.welcomeText}>Selamat</Text>
            <Text style={loginStyles.welcomeText}>Datang di</Text>
            <Text style={loginStyles.welcomeText}>EPort!</Text>
          </View>
          <Text style={loginStyles.subtitle}> Aplikasi pelayanan jasa pelabuhan </Text>
          <Text style={loginStyles.subtitle}> kelola layanan jadi lebih mudah </Text>
        </View>
      </View>

      {/* Form Section */}
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={loginStyles.formContainer}>
            <View style={loginStyles.inputContainer}>
              <Text style={loginStyles.inputLabel}>NIK</Text>
              <TextInput
                style={loginStyles.input}
                placeholder="Masukan NIK ..."
                placeholderTextColor="#999"
                value={nik}
                onChangeText={setNik}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </View>
            
            <View style={loginStyles.inputContainer}>
              <Text style={loginStyles.inputLabel}>Password</Text>
              <TextInput
                style={loginStyles.input}
                placeholder="Masukan Password ..."
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity>
                <Text style={loginStyles.forgotPassword}>Lupa Password Anda ?</Text>
              </TouchableOpacity>
            </View>
            
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <TouchableOpacity 
                style={loginStyles.primaryButton} 
                onPress={handleLogin}
                activeOpacity={0.8}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={loginStyles.primaryButtonText}>Login</Text>
                )}
              </TouchableOpacity>
            </View>
            
            {/* Powered by text */}
            <View style={{ marginTop: 'auto', paddingTop: 20, alignItems: 'center', width: '100%' }}>
              <Text style={loginStyles.footerText}>Powered by PT. Krakatau Bandar Samudera</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
