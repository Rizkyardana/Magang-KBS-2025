import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import LoginScreen from './components/Login/LoginScreen';
import DashboardScreen from './components/BottomNav/DashboardScreen';
import NewSalesOrderScreen from './components/NSO/NewSalesOrderScreen';
import SalesOrderScreen from './components/SO/SalesOrderScreen';
import DetailSalesOrderScreen from './components/SO/DetailSalesOrderScreen';
import AccountScreen from './components/BottomNav/AccountScreen';
import CallCenterScreen from './components/BottomNav/CallCenterScreen';
import SalesServiceOrderScreen from './components/SSO/SalesServiceOrderScreen';
import DetailSalesServiceOrder from './components/SSO/DetailSalesServiceOrderScreen';
import WorkOrderScreen from './components/WO/WorkOrderScreen';
import DetailInvoiceScreen from './components/Invoice/DetailInvoiceScreen';
import InvoiceScreen from './components/Invoice/InvoiceScreen';


// Buat context untuk navigasi
export const NavigationContext = createContext();

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  // Daftar item bottom navigation
  const bottomNavItems = [
    { 
      id: 1, 
      icon: require('./assets/Beranda.png'), 
      label: 'Beranda', 
      route: 'Dashboard' 
    },
    { 
      id: 2, 
      icon: require('./assets/Akun.png'),
      label: 'Akun', 
      route: 'Account' 
    },
    { 
      id: 3, 
      icon: require('./assets/CallCenter.png'),
      label: 'Call Center', 
      route: 'CallCenter' 
    },
  ];

  // Nilai yang akan disediakan ke context
  const navigationContextValue = {
    activeTab,
    setActiveTab,
    bottomNavItems,
  };

  // Komponen Bottom Navigation
  const BottomNavigation = ({ navigation }) => (
    <View style={styles.bottomNavContainer}>
      {bottomNavItems.map((item) => {
        const isActive = activeTab === item.route;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.navItem}
            onPress={() => {
              setActiveTab(item.route);
              navigation.navigate(item.route);
            }}
          >
            <Image 
              source={item.icon}
              style={[
                styles.navIcon,
                { tintColor: isActive ? '#2196f3' : '#666' }
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.navLabel, { color: isActive ? '#2196f3' : '#666' }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  // Komponen pembungkus untuk layar dengan bottom navigation
  const ScreenWithBottomNav = ({ children, navigation }) => (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
      <BottomNavigation navigation={navigation} />
    </View>
  );

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          {/* Halaman Login (tanpa bottom navigation) */}
          <Stack.Screen name="Login" component={LoginScreen} />
          
          {/* Halaman dengan bottom navigation */}
          <Stack.Screen name="Dashboard">
            {props => (
              <ScreenWithBottomNav {...props}>
                <DashboardScreen {...props} />
              </ScreenWithBottomNav>
            )}
          </Stack.Screen>
          
          <Stack.Screen name="Account">
            {props => (
              <ScreenWithBottomNav {...props}>
                <AccountScreen {...props} />
              </ScreenWithBottomNav>
            )}
          </Stack.Screen>

          <Stack.Screen name="CallCenter">
            {props => (
              <ScreenWithBottomNav {...props}>
                <CallCenterScreen {...props} />
              </ScreenWithBottomNav>
            )}
          </Stack.Screen>

          {/* Halaman tanpa bottom navigation */}
          <Stack.Screen 
            name="NewSalesOrder" 
            component={NewSalesOrderScreen} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="SalesOrder" 
            component={SalesOrderScreen} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="DetailSalesOrder" 
            component={DetailSalesOrderScreen} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="SalesServiceOrder" 
            component={SalesServiceOrderScreen} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="WorkOrder" 
            component={WorkOrderScreen} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="DetailSalesServiceOrder" 
            component={DetailSalesServiceOrder} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="DetailWorkOrder"
            component={require('./components/WO/DetailWorkOrderScreen').default}
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="Invoice" 
            component={InvoiceScreen} 
            options={{ headerShown: false }}
          />
          
          <Stack.Screen 
            name="DetailInvoice" 
            component={DetailInvoiceScreen} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationContext.Provider>
  );
}

const styles = StyleSheet.create({
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 11,
    marginTop: 4,
  },
});

export default App;
