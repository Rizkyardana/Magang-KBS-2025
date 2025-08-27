import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Modal, 
  TextInput, 
  Dimensions 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/WOstyle';

const { width } = Dimensions.get('window');

// Mock data for work orders
const workOrders = [
  {
    id: 'WO-P01-2024-00000006',
    status: 'WORK ORDER VERIFIED',
    salesOrderNo: 'BO-P01-2025-00000001',
    customerName: 'PT. KRAKATAU POSCO',
    vesselName: 'BG. LKH 3883',
    projectStartDate: '1 April 2020 13:02',
    salesServiceOrderNo: 'SSO-P01-2024-00000003',
    voyageNo: 'D24P010006',
    relatedVessel: 'Yes',
    projectEndDate: '3 April 2020 13:02',
  },
  {
    id: 'WO-P01-2024-00000007',
    status: 'WORK ORDER VERIFIED',
    salesOrderNo: 'BO-P01-2025-00000002',
    customerName: 'PT. KRAKATAU POSCO',
    vesselName: 'BG. LKH 3884',
    projectStartDate: '2 April 2020 14:30',
    salesServiceOrderNo: 'SSO-P01-2024-00000004',
    voyageNo: 'D24P010007',
    relatedVessel: 'Yes',
    projectEndDate: '4 April 2020 14:30',
  },
];

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const WorkOrderCard = ({ data, onPress }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.orderNumberContainer}>
        <Text style={styles.cardId}>{data.id}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.cardStatus, { color: '#FF9800' }]}>{data.status}</Text>
      </View>
    </View>
    <View style={styles.cardBody}>
      <View style={styles.cardColumn}>
        <InfoRow label="Sales Order No" value={data.salesOrderNo} />
        <InfoRow label="Customer Name" value={data.customerName} />
        <InfoRow label="Vessel Name" value={data.vesselName} />
        <InfoRow label="Project Start Date" value={data.projectStartDate} />
      </View>
      <View style={styles.cardColumn}>
        <InfoRow label="SSO Number" value={data.salesServiceOrderNo} />
        <InfoRow label="Voyage No" value={data.voyageNo} />
        <InfoRow label="Related Vessel" value={data.relatedVessel} />
        <InfoRow label="Project End Date" value={data.projectEndDate} />
      </View>
    </View>
  </View>
);

export default function WorkOrderScreen({ navigation }) {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchData, setSearchData] = useState({
    workOrderNumber: '',
    salesOrderNumber: '',
    salesServiceOrderNumber: '',
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
            <MaterialIcons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Work Order (WO)</Text>
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setSearchModalVisible(true)}
        >
          <MaterialIcons name="search" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {workOrders.map((order, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('DetailWorkOrder', { order })}
          >
            <WorkOrderCard data={order} />
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
            <Text style={styles.modalTitle}>Cari Informasi Work Order</Text>
            <Text style={styles.modalSubtitle}>Masukan Informasi yang anda butuhkan</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Work Order Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Work Order Number ..."
                value={searchData.workOrderNumber}
                onChangeText={(text) => setSearchData({ ...searchData, workOrderNumber: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Sales Order Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Pilih Sales Order Number ..."
                value={searchData.salesOrderNumber}
                onChangeText={(text) => setSearchData({ ...searchData, salesOrderNumber: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Sales Service Order Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Pilih Sales Service Order Number ..."
                value={searchData.salesServiceOrderNumber}
                onChangeText={(text) => setSearchData({ ...searchData, salesServiceOrderNumber: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Status Work Order</Text>
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
