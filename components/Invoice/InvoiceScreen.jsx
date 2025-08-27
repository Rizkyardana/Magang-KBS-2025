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
import styles from './styles/InvoiceStyle';

// Mock data for invoices
const mockInvoiceData = [
  {
    id: 'INV-P01-2024-00000004',
    status: 'PARTIAL PAID',
    salesOrderNo: 'BO-P01-2024-00000003',
    workOrderNo: 'WO-P01-2024-00000006',
    vesselName: 'BG. LKH 3883',
    projectStartDate: '1 April 2020 13:02',
    salesServiceOrderNo: 'SSO-P01-2024-00000003',
    customerName: 'PT. KRAKATAU POSCO',
    dueDate: '1 April 2020 13:02',
    projectEndDate: '1 April 2020 13:02',
  },
];

export default function InvoiceScreen({ navigation }) {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchData, setSearchData] = useState({
    invoiceNumber: '',
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
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Invoice</Text>
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
        {mockInvoiceData.map((invoice, index) => (
          <TouchableOpacity
            key={index}
            style={styles.orderCard}
            onPress={() => navigation.navigate('DetailInvoice', { invoice })}
          >
            <View style={styles.orderHeader}>
              <Text style={styles.orderNumber}>{invoice.id}</Text>
              <Text style={styles.orderStatus}>{invoice.status}</Text>
            </View>
            <View style={styles.orderDetails}>
              <View style={styles.orderDetailsLeft}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Sales Order No</Text>
                  <Text style={styles.detailValue}>{invoice.salesOrderNo}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Work Order No</Text>
                  <Text style={styles.detailValue}>{invoice.workOrderNo}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Vessel Name</Text>
                  <Text style={styles.detailValue}>{invoice.vesselName}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Project Start Date</Text>
                  <Text style={styles.detailValue}>{invoice.projectStartDate}</Text>
                </View>
              </View>
              <View style={styles.orderDetailsRight}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Sales Service Order No</Text>
                  <Text style={styles.detailValue}>{invoice.salesServiceOrderNo}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Customer Name</Text>
                  <Text style={styles.detailValue}>{invoice.customerName}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Due Date</Text>
                  <Text style={styles.detailValue}>{invoice.dueDate}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Project End Date</Text>
                  <Text style={styles.detailValue}>{invoice.projectEndDate}</Text>
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
            <Text style={styles.modalTitle}>Cari Informasi Invoice</Text>
            <Text style={styles.modalSubtitle}>Masukan Informasi yang anda butuhkan</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Invoice Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Input Invoice Number ..."
                value={searchData.invoiceNumber}
                onChangeText={(text) => setSearchData({ ...searchData, invoiceNumber: text })}
              />
            </View>

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
              <Text style={styles.inputLabel}>Status Invoice</Text>
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
