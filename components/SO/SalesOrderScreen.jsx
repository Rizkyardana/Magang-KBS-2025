import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Modal,
  TextInput,
  Dimensions,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { NavigationContext } from '../../App';
import styles from './styles/SOstyle';
import mockData from '../../services/mockData';

const { width } = Dimensions.get('window');

// Get sales orders from mockData
const salesOrders = mockData.salesOrdersData?.orders || [];

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const SalesOrderCard = ({ data }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardId} numberOfLines={1} ellipsizeMode="tail">
        {data?.id || ' - '}
      </Text>
      <Text 
        style={[
          styles.cardStatus, 
          { 
            color: data?.status === 'BOOKING VERIFIED' ? '#FF9500' : 
                   data?.status ? '#ff9800' : '#666'
          }
        ]}
      >
        {data?.status === 'BOOKING VERIFIED' ? 'SERVICE ORDER OPEN' : data?.status || ' - '}
      </Text>
    </View>
    <View style={styles.cardBody}>
      <View style={styles.cardColumn}>
      <Text style={styles.infoLabel}>Customer Name</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.customerName || ' - '}
        </Text>
        <Text style={styles.infoLabel}>Vessel Name</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.vesselName || ' - '}
        </Text>
        <Text style={styles.infoLabel}>Related Vessel</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.relatedVessel || ' - '}
        </Text>
        <Text style={styles.infoLabel}>Port Discharge</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.portDischarge || ' - '}
        </Text>
      </View>
      <View style={styles.cardColumn}>
        <Text style={styles.infoLabel}>Tugboat</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.tugboat || ' - '}
        </Text>
        <Text style={styles.infoLabel}>Customer Type</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.customerType || ' - '}
        </Text>
        <Text style={styles.infoLabel}>Booking Time</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.bookingTime || ' - '}
        </Text>
        <Text style={styles.infoLabel}>Port Origin</Text>
        <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
          {data?.portOrigin || ' - '}
        </Text>
      </View>
    </View>
  </View>
);

const SalesOrderScreen = () => {
  const navigation = useNavigation();
  const { setActiveTab } = useContext(NavigationContext);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchData, setSearchData] = useState({
    soNumber: '',
    status: '',
  });

  const handleSearch = () => {
    // Implement search logic here
    setSearchModalVisible(false);
  };

  const handleClose = () => {
    setSearchModalVisible(false);
  };

  const handleOrderPress = (order) => {
    // Add additional data that might be needed in the detail screen
    const orderWithDetails = {
      ...order,
      // Add any additional fields that DetailScreen expects but might not be in the list item
      estimateArrival: '2024-03-19 13:59:33',
      estimateDeparture: '2024-03-21 13:59:33',
      vesselActivity: 'Discharge',
      loadingDischargeShipCall: '12814D',
      estArrival: '2 April 2020 06:00',
      portLoading: 'SGSIN - SINGAPORE',
      estDeparture: '6 April 2020 18:00',
    };
    navigation.navigate('DetailSalesOrder', { orderData: orderWithDetails });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sales Order (SO)</Text>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setSearchModalVisible(true)}
        >
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView}>
        {salesOrders.map((order, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOrderPress(order)}
            activeOpacity={0.7}
          >
            <SalesOrderCard data={order} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Modal */}
      <Modal
        visible={searchModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSearchModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Cari Informasi Sales Order</Text>
            <Text style={styles.modalSubtitle}>Masukan Informasi yang anda butuhkan</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Sales Order Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Sales Order Number ..."
                value={searchData.soNumber}
                onChangeText={(text) => setSearchData({ ...searchData, soNumber: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Status Sales Order</Text>
              <TextInput
                style={styles.input}
                placeholder="Pilih Status"
                value={searchData.status}
                onChangeText={(text) => setSearchData({ ...searchData, status: text })}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyButton} onPress={handleSearch}>
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SalesOrderScreen;
