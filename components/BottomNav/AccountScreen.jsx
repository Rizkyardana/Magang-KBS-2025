  import React, { useState } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
  } from 'react-native';
  import { MaterialIcons } from '@expo/vector-icons';
  import styles from './styles/akunStyle';


  const AccountScreen = ({ navigation }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Profile Info Card */}
          <View style={styles.card}>
            <Text style={styles.companyName}>PENASCOP MARITIM INDONESIA PT.</Text>
            <Text style={styles.companyId}>C05-P01-00001</Text>
            
            <View style={styles.infoSectionFullWidth}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>JL. SUNAN GUNUNG JATI NO. 1 CIGADING - CILEGON</Text>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detailColumn}>
                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>Phone</Text>
                  <Text style={styles.infoValue}>0254-602424</Text>
                </View>
                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>Fax</Text>
                  <Text style={styles.infoValue}>0254-605604</Text>
                </View>
              </View>
              <View style={styles.detailColumn}>
                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>E-mail</Text>
                  <Text style={styles.infoValue}>admin@eport.com</Text>
                </View>
                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>NPWP</Text>
                  <Text style={styles.infoValue}>01.717.931.8.-417.001</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Change Password Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Change Password</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Old Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Input old password ..."
                secureTextEntry
                value={oldPassword}
                onChangeText={setOldPassword}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>New Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Input new password ..."
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Input new password ..."
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Password</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Section */}
          <View style={styles.logoutContainer}>
              <TouchableOpacity 
                  onPress={() => navigation.reset({
                      index: 0,
                      routes: [{ name: 'Login' }],
                  })}
              >
                  <Text style={styles.logoutText}>Logout My Account</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default AccountScreen;
