import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, ActivityIndicator, Dimensions, Image, FlatList, Animated, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContext } from '../../App';
import api from '../../services/api';
import styles from './styles/dashStyle';
import mockData from '../../services/mockData';

const { width } = Dimensions.get('window');

const navItems = [
  { id: 1, image: require('../../assets/SO.png'), label: 'Sales Order (SO)', route: 'SalesOrder' },
  { id: 2, image: require('../../assets/SSO.png'), label: 'Sales Service Order (SSO)', route: 'SalesServiceOrder' },
  { id: 3, image: require('../../assets/WO.png'), label: 'Work Order (WO)', route: 'WorkOrder' },
  { id: 4, image: require('../../assets/Invoice.png'), label: 'Invoice', route: 'Invoice' },
  { id: 5, image: require('../../assets/MO.png'), label: 'Monitoring Operational', route: 'Dashboard' },
];

const chartData = [
  { id: '1', title: ' ', color: '#2196f3' },
  { id: '2', title: ' ', color: '#4caf50' },
  { id: '3', title: ' ', color: '#ff9800' },
];

function DetailRow({ label, value }) {
  return (
    <View style={styles.orderDetailRow}>
      <Text style={styles.orderLabel}>{label}</Text>
      <Text style={styles.orderValue}>{value}</Text>
    </View>
  );
}

// Komponen untuk menampilkan info dalam baris
const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);


// Komponen card untuk Last Sales Order
const DashboardOrderCard = ({ data }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardId} numberOfLines={1} ellipsizeMode="tail">
        {data?.id || ' - '}
      </Text>
      <Text 
        style={[
          styles.cardStatus, 
          { 
            color: data?.status === 'BOOKING VERIFIED' ? '#0B6BCE' : 
                   data?.status ? '#ff9800' : '#666'
          }
        ]}
      >
        {data?.status === 'BOOKING VERIFIED' ? 'BOOKED' : data?.status || ' - '}
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

export default function DashboardScreen() {
  const navigation = useNavigation();
  const { setActiveTab } = useContext(NavigationContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChart, setCurrentChart] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  useEffect(() => {
    fetchLastOrder();
  }, []);

  const fetchLastOrder = async () => {
    try {
      setLoading(true);
      const recentOrders = mockData.dashboard?.recentOrders || [];
      
      if (recentOrders.length > 0) {
        // Ambil order terbaru (indeks 0 jika sudah diurutkan dari API)
        setLastOrder(recentOrders[0]);
      } else {
        setError('Tidak ada data order');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Gagal memuat data order');
    } finally {
      setLoading(false);
    }
  };

  const handleNavItemPress = (route) => {
    if (route === 'Dashboard') {
      // If it's already on dashboard, just scroll to top
      return;
    }
    setActiveTab(route);
    navigation.navigate(route);
  };

  const scrollIndicatorWidth = (width - 40) / chartData.length;

  const renderChartItem = ({ item }) => (
    <View style={styles.chartContainer}>
      <View style={[styles.chartPlaceholder, { backgroundColor: item.color + '20' }]}>
        {/* Chart content will go here */}
      </View>
    </View>
  );

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {chartData.map((_, i) => {
          const inputRange = [
            (i - 1) * width,
            i * width,
            (i + 1) * width,
          ];
          
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });
          
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });
          
          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                  backgroundColor: chartData[i].color,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={fetchLastOrder} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <ScrollView>
        {/* Bagian Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.companyName}>Krakatau Bandar Samudera</Text>
          </View>
          <View style={styles.headerRight}></View>
        </View>

        {/* Konten Utama */}
        <View style={[styles.content, { backgroundColor: '#f5f5f5' }]}>
          {/* Ikon Navigasi */}
          <View style={styles.navIconsContainer}>
            {navItems.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.navItem}
                onPress={() => handleNavItemPress(item.route)}
              >
                <View style={styles.iconContainer}>
                  <Image 
                    source={item.image} 
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.navLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tombol Order Baru */}
          <TouchableOpacity style={styles.newOrderButton} onPress={() => navigation.navigate('NewSalesOrder')}>
            <View style={styles.newOrderButtonLeft}>
              <Image 
                source={require('../../assets/NSO.png')} 
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
              <Text style={styles.newOrderButtonText}>New Sales Order (SO)</Text>
            </View>
            <Text style={{ fontSize: 24, color: '#C9C9C9' }}>›</Text>
          </TouchableOpacity>

          {/* Simple Chart Section */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { paddingHorizontal: 20 }]}>Chart Today</Text>
            <View style={styles.chartWrapper}>
              <Animated.FlatList
                ref={flatListRef}
                data={chartData}
                renderItem={renderChartItem}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false }
                )}
                onMomentumScrollEnd={(e) => {
                  const index = Math.round(e.nativeEvent.contentOffset.x / width);
                  setCurrentChart(index);
                }}
                scrollEventThrottle={16}
              />
              {renderPagination()}
            </View>
          </View>

          {/* Bagian Order Terakhir */}
          <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <Text style={styles.sectionTitle}>Last Sales Order</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SalesOrder')}>
                <Text style={{ color: '#2196f3', fontSize: 12 }}>see all order ...</Text>
              </TouchableOpacity>
            </View>
            
            {lastOrder ? (
              <DashboardOrderCard data={lastOrder} />
            ) : (
              <Text style={styles.noDataText}>Tidak ada data order</Text>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}/>
    </SafeAreaView>
  );
}