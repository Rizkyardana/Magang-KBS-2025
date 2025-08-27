import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/detailStyle';

export default function DetailInvoiceScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('Information');
  const { invoice } = route.params || {};

  // Mock data for the invoice
  const invoiceData = invoice || {
    id: 'INV-P01-2024-00000004',
    status: 'PARTIAL PAID',
    salesOrderNo: 'BO-P01-2024-00000003',
    workOrderNo: 'WO-P01-2024-00000006',
    projectStartDate: '1 April 2020 13:02',
    noFaktur: '11.100-18.17300802',
    salesServiceOrderNo: 'SSO-P01-2024-00000003',
    vesselName: 'BG. LKH 3883',
    projectEndDate: '2 April 2020 13:02',
    dueDate: '2024-05-02',
    totalBeforeTax: 'Rp. 217,140',
    totalAfterTax: 'Rp. 241,026',
    totalPPN: 'Rp. 23,886',
    totalPPH: 'Rp. 0',
    totalAmount: 'Rp. 241.026',
    totalDPPaid: 'Rp. 0',
    totalInvoicePaid: 'Rp. 0',
  };

  const tabs = ['Information', 'Document'];

  const renderPaymentSection = () => (
    <View style={styles.paymentSection}>
      <Text style={styles.paymentTitle}>Detail Payment</Text>
      <View style={styles.paymentTitleDivider} />
      
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total Before Tax</Text>
        <Text style={styles.paymentValue}>{invoiceData.totalBeforeTax}</Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total After Tax</Text>
        <Text style={styles.paymentValue}>{invoiceData.totalAfterTax}</Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total PPN</Text>
        <Text style={styles.paymentValue}>{invoiceData.totalPPN}</Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total PPH</Text>
        <Text style={styles.paymentValue}>{invoiceData.totalPPH}</Text>
      </View>

      <View style={styles.paymentGroupDivider} />

      <View style={styles.totalAmountRow}>
        <Text style={styles.totalAmountLabel}>Total Amount</Text>
        <Text style={styles.totalAmount}>{invoiceData.totalAmount}</Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total DP Paid</Text>
        <Text style={styles.paymentValue}>{invoiceData.totalDPPaid}</Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total Invoice Paid</Text>
        <Text style={styles.paymentValue}>{invoiceData.totalInvoicePaid}</Text>
      </View>
    </View>
  );

  const renderInformationTab = () => (
    <ScrollView style={styles.content}>
      {/* Booking Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Information</Text>
        <View style={styles.twoColumnContainer}>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Sales Order No</Text>
              <Text style={styles.detailValue}>{invoiceData.salesOrderNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Work Order No</Text>
              <Text style={styles.detailValue}>{invoiceData.workOrderNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Project Start Date</Text>
              <Text style={styles.detailValue}>{invoiceData.projectStartDate}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>No. Faktur</Text>
              <Text style={styles.detailValue}>{invoiceData.noFaktur}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Sales Service Order No</Text>
              <Text style={styles.detailValue}>{invoiceData.salesServiceOrderNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vessel Name</Text>
              <Text style={styles.detailValue}>{invoiceData.vesselName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Project End Date</Text>
              <Text style={styles.detailValue}>{invoiceData.projectEndDate}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Due Date</Text>
              <Text style={styles.detailValue}>{invoiceData.dueDate}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Payment Section */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentTitle}>Detail Payment</Text>
        <View style={styles.paymentTitleDivider} />
        
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total Before Tax</Text>
          <Text style={styles.paymentValue}>{invoiceData.totalBeforeTax}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total After Tax</Text>
          <Text style={styles.paymentValue}>{invoiceData.totalAfterTax}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total PPN</Text>
          <Text style={styles.paymentValue}>{invoiceData.totalPPN}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total PPH</Text>
          <Text style={styles.paymentValue}>{invoiceData.totalPPH}</Text>
        </View>

        <View style={styles.paymentGroupDivider} />

        <View style={styles.totalAmountRow}>
          <Text style={styles.totalAmountLabel}>Total Amount</Text>
          <Text style={styles.totalAmount}>{invoiceData.totalAmount}</Text>
        </View>
        
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total DP Paid</Text>
          <Text style={styles.paymentValue}>{invoiceData.totalDPPaid}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Total Invoice Paid</Text>
          <Text style={styles.paymentValue}>{invoiceData.totalInvoicePaid}</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderDocumentTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Invoice Document</Text>
        <TouchableOpacity style={styles.documentCard}>
          <View style={styles.documentHeader}>
            <View style={styles.pdfIcon}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>PDF</Text>
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentName}>Document One.pdf</Text>
              <Text style={styles.documentSize}>2,3 Mb</Text>
            </View>
          </View>
          <Text style={styles.downloadText}>Tap here to download</Text>
        </TouchableOpacity>
      </View>
      {renderPaymentSection()}
    </ScrollView>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Information':
        return renderInformationTab();
      case 'Document':
        return renderDocumentTab();
      default:
        return renderInformationTab();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail Invoice</Text>
        </View>
      </View>

      {/* Order Info */}
      <View style={styles.orderInfo}>
        <View style={styles.orderNumberContainer}>
          <Text style={styles.orderNumberLabel}>Invoice No.</Text>
          <Text style={styles.orderNumber}>{invoiceData.id}</Text>
        </View>
        <View style={styles.orderStatusContainer}>
          <Text style={styles.orderStatusLabel}>Status</Text>
          <Text style={styles.orderStatus}>{invoiceData.status}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>
    </SafeAreaView>
  );
}
