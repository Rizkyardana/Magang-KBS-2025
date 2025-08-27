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
import styles from './styles/detailWOstyle';

export default function DetailWorkOrderScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('Information');
  const { order } = route.params || {};

  // Mock data for the work order
  const orderData = order || {
    id: 'WO-P01-2024-00000006',
    status: 'WORK ORDER VERIFIED',
    salesOrderNo: 'BO-P01-2025-00000001',
    customerName: 'PT. KRAKATAU POSCO',
    vesselName: 'BG. LKH 3883 / TB. SUKMA ...',
    projectStartDate: '1 April 2020 13:02',
    salesServiceOrderNo: 'SSO-P01-2024-00000003',
    workOrderName: 'BAP',
    voyageNo: 'D24P010006',
    projectEndDate: '3 April 2020 13:02',
    signatureCustomer: 'POSCO INTERNATIONAL CORP',
    signaturePosition: 'Position Cust',
    exchangeRate: '1000',
    biDate: '02/04/2025',
  };

  const tabs = ['Information', 'Allocate', 'Document'];

  const pilotageAllocations = [
    {
      type: 'BERTHING',
      jettyOrigin: 'DERMAGA 1.1',
      pilotOnBoard: '2024-04-05 10:33:12',
      pilot: 'ADIMAS PONIDI ARIFIN',
      inaportJobType: 'MASUK',
      jettyDestination: 'DERMAGA 1.1',
      pilotOffBoard: '2024-04-05 10:33:12',
      tugboat: 'TB. SUKMA JAYA 01',
    },
    {
      type: 'UNBERTHING',
      jettyOrigin: 'DERMAGA 1.1',
      pilotOnBoard: '2024-04-05 10:33:12',
      pilot: 'ADIMAS PONIDI ARIFIN',
      inaportJobType: 'KELUAR',
      jettyDestination: 'DERMAGA 1.1',
      pilotOffBoard: '2024-04-05 10:33:12',
      tugboat: 'TB. SUKMA JAYA 01',
    },
  ];

  const towageAllocations = [
    {
      type: 'BERTHING',
      jettyOrigin: 'DERMAGA 1.1',
      startTowing: '2024-04-05 10:33:12',
      tugboat: 'TB. SUKMA JAYA 01',
      inaportJobType: 'MASUK',
      jettyDestination: 'DERMAGA 1.1',
      stopTowing: '2024-04-05 10:33:12',
    },
    {
      type: 'UNBERTHING',
      jettyOrigin: 'DERMAGA 1.1',
      startTowing: '2024-04-05 10:33:12',
      tugboat: 'TB. SUKMA JAYA 01',
      inaportJobType: 'KELUAR',
      jettyDestination: 'DERMAGA 1.1',
      stopTowing: '2024-04-05 10:33:12',
    },
  ];

  const formulaServices = [
    {
      description: 'C14-P01-00001 - JASA PANDU CIGADING',
      uom1: 'Lupsum',
      uom2: 'Lupsum',
      value1: '1',
      value2: '1',
      currency: 'IDR',
      total: '217.410',
    },
  ];

  const renderInformationTab = () => (
    <ScrollView>
      {/* Booking Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Information</Text>
        <View style={styles.twoColumnContainer}>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Sales Order No</Text>
              <Text style={styles.detailValue}>{orderData.salesOrderNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Customer Name</Text>
              <Text style={styles.detailValue}>{orderData.customerName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vessel Name</Text>
              <Text style={styles.detailValue}>{orderData.vesselName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Project Start Date</Text>
              <Text style={styles.detailValue}>{orderData.projectStartDate}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Sales Service Order No</Text>
              <Text style={styles.detailValue}>{orderData.salesServiceOrderNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Work Order Name</Text>
              <Text style={styles.detailValue}>{orderData.workOrderName}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Voyage No</Text>
              <Text style={styles.detailValue}>{orderData.voyageNo}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Project End Date</Text>
              <Text style={styles.detailValue}>{orderData.projectEndDate}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Signature Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Signature Information</Text>
        <View style={styles.twoColumnContainer}>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Signature Customer</Text>
              <Text style={styles.detailValue}>{orderData.signatureCustomer}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Signature Position</Text>
              <Text style={styles.detailValue}>{orderData.signaturePosition}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Formula Tarif Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formula Tarif</Text>
        <View style={styles.twoColumnContainer}>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Exchange Rate</Text>
              <Text style={styles.detailValue}>{orderData.exchangeRate}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>BI Date</Text>
              <Text style={styles.detailValue}>{orderData.biDate}</Text>
            </View>
          </View>
        </View>
        
        {formulaServices.map((service, index) => (
          <View key={index} style={styles.formulaCard}>
            <Text style={styles.formulaDescription}>{service.description}</Text>
            <View style={styles.formulaRow}>
              <View style={styles.formulaDetail}>
                <Text style={styles.formulaLabel}>UOM 1</Text>
                <Text style={styles.formulaValue}>{service.uom1}</Text>
              </View>
              <View style={styles.formulaDetail}>
                <Text style={styles.formulaLabel}>UOM 2</Text>
                <Text style={styles.formulaValue}>{service.uom2}</Text>
              </View>
              <View style={styles.formulaDetail}>
                <Text style={styles.formulaLabel}>Value 1</Text>
                <Text style={styles.formulaValue}>{service.value1}</Text>
              </View>
              <View style={styles.formulaDetail}>
                <Text style={styles.formulaLabel}>Value 2</Text>
                <Text style={styles.formulaValue}>{service.value2}</Text>
              </View>
            </View>
            <View style={styles.formulaRow}>
              <View style={styles.formulaDetail}>
                <Text style={styles.formulaLabel}>Currency</Text>
                <Text style={styles.formulaValue}>{service.currency}</Text>
              </View>
              <View style={styles.formulaDetail}>
                <Text style={styles.formulaLabel}>Total</Text>
                <Text style={styles.formulaValue}>{service.total}</Text>
              </View>
              <View style={styles.formulaDetail} />
              <View style={styles.formulaDetail} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderAllocateTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allocate Pilotage</Text>
        {pilotageAllocations.map((allocation, index) => (
          <View key={index} style={styles.allocationCard}>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Piloting Job Type</Text>
                <Text style={styles.allocationValue}>{allocation.type}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Inaport Job Type</Text>
                <Text style={styles.allocationValue}>{allocation.inaportJobType}</Text>
              </View>
            </View>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Jetty Origin</Text>
                <Text style={styles.allocationValue}>{allocation.jettyOrigin}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Jetty Destination</Text>
                <Text style={styles.allocationValue}>{allocation.jettyDestination}</Text>
              </View>
            </View>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Pilot On Board</Text>
                <Text style={styles.allocationValue}>{allocation.pilotOnBoard}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Pilot Off Board</Text>
                <Text style={styles.allocationValue}>{allocation.pilotOffBoard}</Text>
              </View>
            </View>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Pilot</Text>
                <Text style={styles.allocationValue}>{allocation.pilot}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Tugboat</Text>
                <Text style={styles.allocationValue}>{allocation.tugboat}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allocate Towage</Text>
        {towageAllocations.map((allocation, index) => (
          <View key={index} style={styles.allocationCard}>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Piloting Job Type</Text>
                <Text style={styles.allocationValue}>{allocation.type}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Inaport Job Type</Text>
                <Text style={styles.allocationValue}>{allocation.inaportJobType}</Text>
              </View>
            </View>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Jetty Origin</Text>
                <Text style={styles.allocationValue}>{allocation.jettyOrigin}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Jetty Destination</Text>
                <Text style={styles.allocationValue}>{allocation.jettyDestination}</Text>
              </View>
            </View>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Start Towing</Text>
                <Text style={styles.allocationValue}>{allocation.startTowing}</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Stop Towing</Text>
                <Text style={styles.allocationValue}>{allocation.stopTowing}</Text>
              </View>
            </View>
            <View style={styles.allocationRow}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationLabel}>Tugboat</Text>
                <Text style={styles.allocationValue}>{allocation.tugboat}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderDocumentTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
        <Text style={styles.detailValue}>No documents available</Text>
      </View>
    </ScrollView>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Information':
        return renderInformationTab();
      case 'Allocate':
        return renderAllocateTab();
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
          <Text style={styles.headerTitle}>Detail Work Order (WO)</Text>
        </View>
      </View>

      {/* Order Info */}
      <View style={styles.orderInfoContainer}>
        <View style={styles.orderNumberContainer}>
          <Text style={styles.orderNumberLabel}>Work Order No.</Text>
          <Text style={styles.orderId}>{orderData.id}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Status</Text>
          <Text style={styles.statusValue}>{orderData.status}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.tabActive
            ]}
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
      <View style={{flex: 1}}>
        {renderTabContent()}
      </View>
    </SafeAreaView>
  );
}
