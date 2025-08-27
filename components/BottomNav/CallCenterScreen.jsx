import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Linking,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/callStyle';

const CallCenterScreen = () => {
  const contactData = [
    {
      icon: 'business',
      text: 'Jl. May. Jend. S. Parman Km 13\nCigading, Tegalratu, Kec. Ciwandan\nKota Cilegon Banten 42445',
      type: 'address',
    },
    {
      icon: 'call',
      text: '(0254) 311121',
      type: 'phone',
      action: 'tel:0254311121',
    },
    {
      icon: 'print',
      text: '(0254) 311178, 311182',
      type: 'fax',
    },
    {
      icon: 'email',
      text: 'komersial@ptkbs.co.id\nkomersialptkbs@gmail.com',
      type: 'email',
    },
    {
      icon: 'location-on',
      text: 'View on Google Maps',
      type: 'map',
    },
  ];

  const handlePress = (action) => {
    if (action) {
      Linking.openURL(action).catch(err => console.error("Couldn't load page", err));
    }
  };

  const renderContactText = (item) => {
    if (item.type === 'email') {
      const emails = item.text.split('\n');
      return (
        <View>
          <TouchableOpacity onPress={() => handlePress(`mailto:${emails[0]}`)}>
            <Text style={[styles.contactText, styles.linkText]}>{emails[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(`mailto:${emails[1]}`)}>
            <Text style={[styles.contactText, styles.linkText]}>{emails[1]}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const textStyle = [styles.contactText];
    if (['phone', 'map'].includes(item.type)) {
      textStyle.push(styles.linkText);
    }

    return <Text style={textStyle}>{item.text}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Call Center</Text>
          <Text style={styles.headerSubtitle}>Have a question? Feel free to contact us</Text>
        </View>

        <View style={styles.contactListContainer}>
          {contactData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(item.action)} disabled={!item.action}>
              <View style={styles.contactItem}>
                <View style={styles.iconContainer}>
                  <MaterialIcons name={item.icon} size={24} color="#FFF" />
                </View>
                <View style={styles.textContainer}>
                  {renderContactText(item)}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Area untuk fitur peta (belum ada fitur petanya) */}
        <View style={styles.mapPlaceholder}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CallCenterScreen;
