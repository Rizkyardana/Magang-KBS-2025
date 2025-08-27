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
import styles from './styles/detailSSOstyle';

export default function DetailSalesServiceOrderScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('Information');
  const { order } = route.params || {};

  // Mock data for the sales service order
  const orderData = order || {
    id: 'SSO-P01-2024-00000004',
    status: 'BOOKING VERIFIED',
    salesOrderNo: 'BO-P01-2025-00000001',
    customerName: 'PT. KRAKATAU POSCO',
    vesselName: 'BG. LKH 3883 / TB. SUKMA...',
    flagVessel: 'Yes',
    tempProjectNo: 'TEMP/BO-P01-2024-00000004',
    voyageNo: 'D24P010006',
    customerType: 'AGENT',
    bookingTime: '1 April 2020 13:02',
    vesselActivity: 'Discharge',
    estBerthing: '2 April 2020 06:00',
    estDeparture: '6 April 2020 18:00',
    voyageNumber: 'D24P010002',
    portDischarge: 'CIGADING PORT 2',
    portOrigin: 'SGSIN - SINGAPORE',
    projectStart: '12 April 2020',
    projectEnd: '15 April 2020',
    totalDownPayment: 'Rp. 910.410.000',
    totalPaid: 'Rp. 0',
  };

  const services = [
    {
      code: 'A107',
      description: 'PORT FACILITY SERVICE (SCRAP) (T2)',
      price: 'IDR 12.000 PER TONAGE',
    },
    {
      code: 'A015',
      description: 'PORT FACILITY SERVICE LOADING PLATE',
      price: 'IDR 15.000 PER TONAGE',
    },
    {
      code: 'B075',
      description: 'SHIP UNLOADER',
      price: 'IDR 21.000 PER TONAGE',
    },
  ];

  const commodities = [
    {
      name: 'COAL',
      type: 'NON GRAIN BULK',
      package: '1',
      tonnage: '37,340.000',
    },
    {
      name: 'IRON ORE',
      type: 'NON GRAIN BULK',
      package: '2',
      tonnage: '175,000.000',
    },
  ];

  const tabs = ['Information', 'Service', 'Commodity'];

  const renderPaymentSection = () => (
    <View style={styles.paymentSection}>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Project Start</Text>
        <Text style={styles.paymentValue}>{orderData.projectStart || ' - '}</Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Project End</Text>
        <Text style={styles.paymentValue}>{orderData.projectEnd || ' - '}</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.downloadLink}>Tap Here to Download Proforma</Text>
      </TouchableOpacity>

      <Text style={styles.paymentTitle}>Detail Payment</Text>
      <View style={styles.divider} />

      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total Down Payment</Text>
        <Text style={[styles.paymentValue, { fontWeight: 'bold' }]}>
          {orderData.totalDownPayment || ' - '}
        </Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentLabel}>Total Paid</Text>
        <Text style={[styles.paymentValue, { fontWeight: 'bold' }]}>
          {orderData.totalPaid || ' - '}
        </Text>
      </View>
    </View>
  );

  const renderInformationTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Information</Text>
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Sales Order No</Text>
              <Text style={styles.detailValue}>
                {orderData.salesOrderNo || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Customer Name</Text>
              <Text style={styles.detailValue}>
                {orderData.customerName || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vessel Name</Text>
              <Text style={styles.detailValue}>
                {orderData.vesselName || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Flag Vessel</Text>
              <Text style={styles.detailValue}>
                {orderData.flagVessel || ' - '}
              </Text>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Temp Project No</Text>
              <Text style={styles.detailValue}>
                {orderData.tempProjectNo || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Voyage No</Text>
              <Text style={styles.detailValue}>
                {orderData.voyageNo || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Customer Type</Text>
              <Text style={styles.detailValue}>
                {orderData.customerType || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Booking Time</Text>
              <Text style={styles.detailValue}>
                {orderData.bookingTime || ' - '}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schedule Information</Text>
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vessel Activity</Text>
              <Text style={styles.detailValue}>{orderData.vesselActivity || ' - '}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Est. Berthing</Text>
              <Text style={styles.detailValue}>{orderData.estBerthing || ' - '}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Est. Departure</Text>
              <Text style={styles.detailValue}>{orderData.estDeparture || ' - '}</Text>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Voyage Number</Text>
              <Text style={styles.detailValue}>{orderData.voyageNumber || ' - '}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Port Discharge</Text>
              <Text style={styles.detailValue}>{orderData.portDischarge || ' - '}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Port Origin</Text>
              <Text style={styles.detailValue}>{orderData.portOrigin || ' - '}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Payment Section */}
      {renderPaymentSection()}
    </ScrollView>
  );

  const renderServiceTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Included Service</Text>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <Text style={styles.serviceCode}>{service.code} - {service.description}</Text>
            <Text style={styles.servicePrice}>{service.price}</Text>
          </View>
        ))}
      </View>
      {renderPaymentSection()}
    </ScrollView>
  );

  const renderCommodityTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Commodity Information</Text>
        {commodities.map((commodity, index) => (
          <View key={index} style={styles.commodityItem}>
            <View style={styles.commodityRow}>
              <View style={styles.commodityColumn}>
                <View style={styles.commodityField}>
                  <Text style={styles.commodityLabel}>Commodity Name</Text>
                  <Text style={styles.commodityValueBold}>{commodity.name}</Text>
                </View>
                <View style={styles.commodityField}>
                  <Text style={styles.commodityLabel}>Commodity Type</Text>
                  <Text style={styles.commodityValueBold}>{commodity.type}</Text>
                </View>
              </View>
              <View style={styles.commodityColumnRight}>
                <View style={styles.commodityFieldRight}>
                  <Text style={styles.commodityLabel}>Package</Text>
                  <Text style={[styles.commodityValueBold, {textAlign: 'right'}]}>{commodity.package}</Text>
                </View>
                <View style={styles.commodityFieldRight}>
                  <Text style={styles.commodityLabel}>Tonage</Text>
                  <Text style={[styles.commodityValueBold, {textAlign: 'right'}]}>{commodity.tonnage}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
      {renderPaymentSection()}
    </ScrollView>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Information':
        return renderInformationTab();
      case 'Service':
        return renderServiceTab();
      case 'Commodity':
        return renderCommodityTab();
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
          <Text style={styles.headerTitle}>Detail Sales Service Order (SSO)</Text>
        </View>
      </View>

      {/* Order Info */}
      <View style={styles.orderInfoContainer}>
        <View style={styles.orderNumberContainer}>
          <Text style={styles.orderNumberLabel}>Sales Service Order No</Text>
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
