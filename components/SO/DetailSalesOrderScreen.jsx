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
import styles from './styles/detailSOstyle';

export default function DetailSalesOrderScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState('Information');
  const { orderData } = route.params || {};
  
  // Use the passed orderData or fallback to mock data
  const order = orderData || {
    id: 'BO-P01-2025-00000001',
    status: 'BOOKING VERIFIED',
    customerName: 'PT. KRAKATAU POSCO',
    bookingTime: '1 April 2020 13:02',
    vesselName: 'BG. LKH 3883 / TB. SUKMA ...',
    customerType: 'AGENT',
    estimateArrival: '2024-03-19 13:59:33',
    estimateDeparture: '2024-03-21 13:59:33',
    vesselActivity: 'Discharge',
    loadingDischargeShipCall: '12814D',
    estArrival: '2 April 2020 06:00',
    portDischarge: 'CIGADING PORT 2',
    estDeparture: '6 April 2020 18:00',
    portLoading: 'SGSIN - SINGAPORE',
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

  const tabs = ['Information', 'Service', 'Commodity', 'History'];

  const renderInformationTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Information</Text>
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Customer Name</Text>
              <Text style={styles.detailValue} numberOfLines={1} ellipsizeMode="tail">
                {order.customerName || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vessel Name</Text>
              <Text style={styles.detailValue} numberOfLines={1} ellipsizeMode="tail">
                {order.vesselName || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Estimate Arrival</Text>
              <Text style={styles.detailValue}>
                {order.estimateArrival || ' - '}
              </Text>
            </View>
          </View>
          
          {/* Right Column */}
          <View style={[styles.column, {borderRightWidth: 0}]}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Booking Time</Text>
              <Text style={styles.detailValue}>
                {order.bookingTime || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Customer Type</Text>
              <Text style={styles.detailValue}>
                {order.customerType || ' - '}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Estimate Departure</Text>
              <Text style={styles.detailValue}>
                {order.estimateDeparture || ' - '}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.section, {marginTop: 10}]}>
        <Text style={styles.sectionTitle}>Schedule Information</Text>
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vessel Activity</Text>
              <Text style={styles.detailValue}>
                {order.vesselActivity || 'Discharge'}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Est. Arrival</Text>
              <Text style={styles.detailValue}>
                {order.estArrival}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Est. Departure</Text>
              <Text style={styles.detailValue}>
                {order.estDeparture}
              </Text>
            </View>
          </View>
          
          {/* Right Column */}
          <View style={[styles.column, {borderRightWidth: 0}]}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Loading / Discharge Ship Call</Text>
              <Text style={styles.detailValue}>
                {order.loadingDischargeShipCall}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Port Discharge</Text>
              <Text style={styles.detailValue}>
                {order.portDischarge}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Port Loading</Text>
              <Text style={styles.detailValue}>
                {order.portLoading}
              </Text>
            </View>
          </View>
        </View>
      </View>
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
    </ScrollView>
  );

  const renderCommodityTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Commodity Information</Text>
        {commodities.map((commodity, index) => (
          <View key={index} style={styles.commodityItem}>
            <View style={styles.commodityRow}>
              {/* Left Column */}
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
              {/* Right Column */}
              <View style={styles.commodityColumnRight}>
                <View style={styles.commodityFieldRight}>
                  <Text style={styles.commodityLabel}>Package</Text>
                  <Text style={[styles.commodityValueBold, {textAlign: 'right'}]}>
                    {commodity.package}
                  </Text>
                </View>
                <View style={styles.commodityFieldRight}>
                  <Text style={styles.commodityLabel}>Tonage</Text>
                  <Text style={[styles.commodityValueBold, {textAlign: 'right'}]}>
                    {commodity.tonnage}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderHistoryTab = () => (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        <Text style={styles.detailValue}>No history available</Text>
      </View>
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
      case 'History':
        return renderHistoryTab();
      default:
        return renderInformationTab();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Sales Order (SO)</Text>
      </View>

      {/* Order Info */}
      <View style={styles.orderInfoContainer}>
        <View style={styles.orderNumberContainer}>
          <Text style={styles.orderNumberLabel}>Sales Order No.</Text>
          <Text style={styles.orderId}>{order.id}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Status</Text>
          <Text style={styles.statusValue}>{order.status}</Text>
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
