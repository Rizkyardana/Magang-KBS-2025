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
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/SSOstyle';

const { width } = Dimensions.get('window');

// Mock data for sales service orders
const mockSSOData = [
  {
    id: 'SSO-P01-2024-00000004',
    status: 'SERVICE ORDER CLOSED',
    salesOrderNo: 'BO-P01-2025-00000001',
    customerName: 'PT. KRAKATAU POSCO',
    vesselName: 'BG. LKH 3883 / TB. SUKMA ...',
    relatedVessel: 'Yes',
    portDischarge: 'CIGADING 2',
    customerType: 'AGENT',
    bookingTime: '1 April 2020 13:02',
    portOrigin: 'CIGADING 1',
  },
  {
    id: 'SSO-P01-2024-00000005',
    status: 'BOOKING VERIFIED',
    salesOrderNo: 'BO-P01-2025-00000002',
    customerName: 'PT. KRAKATAU POSCO',
    vesselName: 'BG. LKH 3884 / TB. SUKMA ...',
    relatedVessel: 'Yes',
    portDischarge: 'CIGADING 1',
    customerType: 'AGENT',
    bookingTime: '2 April 2020 14:30',
    portOrigin: 'CIGADING 2',
  },
];

export default function SalesServiceOrderScreen({ navigation }) {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchData, setSearchData] = useState({
    ssoNumber: '',
    salesOrderNumber: '',
    status: '',
  });

  const handleSearch = () => {
    // Implement search logic here
    setSearchModalVisible(false);
  };

  const handleClose = () => {
    setSearchModalVisible(false);
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
          <Text style={styles.headerTitle}>Sales Service Order (SSO)</Text>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setSearchModalVisible(true)}
        >
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {mockSSOData.map((order, index) => (
          <TouchableOpacity
            key={index}
            style={styles.orderCard}
            onPress={() => navigation.navigate('DetailSalesServiceOrder', { params: { order } })}
          >
            <View style={styles.statusBar} />
            <View style={styles.orderHeader}>
              <Text style={styles.orderNumber}>{order.id}</Text>
              <Text style={styles.orderStatus}>{order.status}</Text>
            </View>
            <View style={styles.orderDetails}>
              <View style={styles.orderDetailsLeft}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Sales Order No</Text>
                  <Text style={styles.detailValue}>{order.salesOrderNo}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Vessel Name</Text>
                  <Text style={styles.detailValue}>{order.vesselName}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Related Vessel</Text>
                  <Text style={styles.detailValue}>{order.relatedVessel}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Port Discharge</Text>
                  <Text style={styles.detailValue}>{order.portDischarge}</Text>
                </View>
              </View>
              <View style={styles.orderDetailsRight}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Customer Name</Text>
                  <Text style={styles.detailValue}>{order.customerName}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Customer Type</Text>
                  <Text style={styles.detailValue}>{order.customerType}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Booking Time</Text>
                  <Text style={styles.detailValue}>{order.bookingTime}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Port Origin</Text>
                  <Text style={styles.detailValue}>{order.portOrigin}</Text>
                </View>
              </View>
            </View>
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
            <Text style={styles.modalTitle}>Cari Informasi Sales Service Order</Text>
            <Text style={styles.modalSubtitle}>Masukan Informasi yang anda butuhkan</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Sales Service Order Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Sales Service Order Number ..."
                value={searchData.ssoNumber}
                onChangeText={(text) => setSearchData({ ...searchData, ssoNumber: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Sales Order Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Sales Order Number ..."
                value={searchData.salesOrderNumber}
                onChangeText={(text) => setSearchData({ ...searchData, salesOrderNumber: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Status Sales Service Order</Text>
              <TextInput
                style={styles.input}
                placeholder="Pilih Status"
                value={searchData.status}
                onChangeText={(text) => setSearchData({ ...searchData, status: text })}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <Text style={styles.buttonText}>Close</Text>
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
}