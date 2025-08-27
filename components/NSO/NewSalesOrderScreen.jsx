import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  Modal,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { NSOstyle as styles } from './styles/NSOstyle';

// Dummy data for demonstration
const commoditiesData = [
  { id: 1, group: 'Krakatau Steel', name: 'Steel Bar', type: 'General Cargo', package: '1 Package', tonnage: '1800 Tonnage' },
  { id: 2, group: 'Krakatau Posco', name: 'Steel Bar', type: 'General Cargo', package: '1 Package', tonnage: '1800 Tonnage' },
];

const serviceCodes = [
  'TAMBAT TUG BDW',
  'WATER SUPPLY VIA HYDRANT',
  'PHC RENT AND SHORE CRANE FEE',
  'JASA PEMANDUAN CIGADING',
  'JASA PEMANDUAN NON CIGADING',
  'JASA TAMBAT (BOSS)',
  'JASA PANDU TUNDA TUBAN',
  'JASA PANDU TUNDA LUPUSM',
  'PEMANDUAN CIGADING DAN FUEL SURCHARGE',
  'PEMANDUAN DAN FUEL SURCHARGE NON CIGADING',
];

const subServices = [
  'FEE SUPPLY GEWA-VOYANT MANDALIKA',
  'FEE SUPPLY GEWA-VOYANT MANDALIKA T3',
  'FEE SUPPLY GEWA-VOYANT MANDALIKA T4',
]

const NewSalesOrderScreen = ({ navigation }) => {
  const [formState, setFormState] = useState({
    customerType: '',
    relatedVessel: '',
    contract: '',
    vesselName: '',
    activity: '',
    voyageNumber: '',
    portDischarge: '',
    portOrigin: '',
    estimateArrival: null,
    estimateDeparture: null,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [datePicker, setDatePicker] = useState({ show: false, field: null });

  const [showCommodityModal, setShowCommodityModal] = useState(false);
  const [newCommodity, setNewCommodity] = useState({
    consignee: 'Krakatau Steel (Persero) Tbk. PT.',
    commodity: 'Steel Bar',
    package: '1',
    weight: '10,000',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommodities, setSelectedCommodities] = useState([]);

  const [focusedInput, setFocusedInput] = useState(null);

  const dropdownOptions = {
    customerType: ['AGENT', 'OWNER', 'CHARTERER'],
    relatedVessel: ['Yes', 'No'],
    contract: ['C-12345', 'C-67890'],
    vesselName: ['MV. BERNAL', 'MV. SUCCESS', 'MV. GLORY'],
    activity: ['LOADING', 'DISCHARGING', 'OTHER'],
    voyageNumber: ['VOY-001', 'VOY-002', 'VOY-003'],
  };

  const handleInputChange = (field, value) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChangeCommodity = (field, value) => {
    setNewCommodity(prev => ({ ...prev, [field]: value }));
  };

  const openDropdown = (field) => {
    setCurrentDropdown(field);
    setModalVisible(true);
  };

  const onSelectDropdown = (value) => {
    handleInputChange(currentDropdown, value);
    setModalVisible(false);
    setCurrentDropdown(null);
  };

  const showDatePicker = (field) => {
    // Di web, kita akan menggunakan input type="date"
    if (Platform.OS === 'web') {
      const input = document.createElement('input');
      input.type = 'date';
      input.onchange = (e) => {
        const selectedDate = new Date(e.target.value);
        if (!isNaN(selectedDate.getTime())) {
          handleInputChange(field, selectedDate);
        }
      };
      input.showPicker(); // Ini akan menampilkan date picker browser
    } else {
      setDatePicker({ show: true, field, mode: 'datetime' });
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formState[datePicker.field];
    // Sembunyikan picker setelah selesai
    setDatePicker({ show: false, field: null });

    // Hanya perbarui state jika tanggal dipilih (event 'set')
    if (event.type === 'set' && currentDate) {
      handleInputChange(datePicker.field, currentDate);
    }
  };

  const [selectedService, setSelectedService] = useState('WATER SUPPLY VIA HYDRANT');
  const [selectedSubServices, setSelectedSubServices] = useState({
    'FEE SUPPLY GEWA-VOYANT MANDALIKA T3': true
  });

  const handleSubServiceToggle = (service) => {
    setSelectedSubServices(prev => ({ ...prev, [service]: !prev[service] }));
  };

  const handleAddNewCommodity = () => {
    // Logika untuk menambahkan komoditas baru ke daftar
    // Untuk sekarang, kita hanya akan menampilkan alert dan menutup modal
    Alert.alert('Komoditas Ditambahkan', JSON.stringify(newCommodity));
    setShowCommodityModal(false);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleCreateOrder = () => {
    Alert.alert('Success', 'Order created successfully!');
    navigation.goBack();
  };

  const renderDropdown = (label, field) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity 
        style={styles.dropdown} 
        onPress={() => openDropdown(field)}
        accessibilityLabel={`Select ${label}`}
        accessibilityRole="button"
      >
        <Text 
          style={formState[field] ? styles.dropdownTextSelected : styles.dropdownText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {formState[field] || `Select ${label}...`}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#666" />
      </TouchableOpacity>
    </View>
  );

  const renderDropdownModal = () => (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <View style={styles.dropdownModalContent}>
          <ScrollView 
            style={styles.dropdownList}
            keyboardShouldPersistTaps="handled"
          >
            {dropdownOptions[currentDropdown]?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dropdownItem,
                  formState[currentDropdown] === item && styles.dropdownItemSelected
                ]}
                onPress={() => onSelectDropdown(item)}
                accessibilityLabel={item}
                accessibilityRole="button"
              >
                <Text 
                  style={[
                    styles.dropdownItemText,
                    formState[currentDropdown] === item && styles.dropdownItemTextSelected
                  ]}
                >
                  {item}
                </Text>
                {formState[currentDropdown] === item && (
                  <Ionicons name="checkmark" size={18} color="#007AFF" />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const renderTextInput = (label, field, placeholder) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={formState[field]}
        onChangeText={(text) => handleInputChange(field, text)}
      />
    </View>
  );

  const renderDatePicker = (label, field) => {
    // Format tanggal dan waktu untuk input type="datetime-local" (YYYY-MM-DDTHH:mm)
    const formatForInput = (date) => {
      if (!date) return '';
      const d = new Date(date);
      // Sesuaikan dengan timezone lokal
      const year = d.getFullYear();
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const day = d.getDate().toString().padStart(2, '0');
      const hours = d.getHours().toString().padStart(2, '0');
      const minutes = d.getMinutes().toString().padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const dateTimeValue = formState[field] ? formatForInput(formState[field]) : '';

    return Platform.OS === 'web' ? (
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            type="datetime-local"
            style={{
              width: '100%',
              height: 48,
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              padding: '12px 16px',
              backgroundColor: '#f8f9fa',
              fontSize: 14,
              color: '#333',
              fontFamily: 'sans-serif',
              cursor: 'pointer',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              outline: 'none',
              boxSizing: 'border-box',
              borderStyle: 'solid',
              transition: 'border-color 0.2s',
              ':focus': {
                borderColor: '#007bff',
                backgroundColor: '#fff'
              }
            }}
            value={dateTimeValue}
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              if (!isNaN(selectedDate.getTime())) {
                handleInputChange(field, selectedDate);
              }
            }}
            onClick={(e) => e.target.showPicker()}
          />
        </div>
      </View>
    ) : (
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity 
          style={styles.datePicker} 
          onPress={() => showDatePicker(field)}
          activeOpacity={0.7}
        >
          <Text style={formState[field] ? styles.dropdownTextSelected : styles.dropdownText}>
            {formState[field] ? formatDateTime(formState[field]) : 'Select Date & Time...'}
          </Text>
          <Ionicons name="calendar-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    );
  };

  const formatDateTime = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const datePart = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
    const timePart = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    return `${datePart} ${timePart}`;
  };

  const renderCommodityModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showCommodityModal}
      onRequestClose={() => setShowCommodityModal(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Commodity</Text>

          <View style={[styles.formGroup, focusedInput === 'consignee' && styles.formGroupFocused]}>
            <View style={styles.inputBox}>
              <View style={styles.inputBoxLabel}>
                <Text style={styles.formLabel}>Consignee</Text>
              </View>
              <TextInput
                style={styles.formInput}
                value={newCommodity.consignee}
                onChangeText={(text) => handleInputChangeCommodity('consignee', text)}
                onFocus={() => setFocusedInput('consignee')}
                onBlur={() => setFocusedInput(null)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={[styles.formGroup, focusedInput === 'commodity' && styles.formGroupFocused]}>
            <View style={styles.inputBox}>
              <View style={styles.inputBoxLabel}>
                <Text style={styles.formLabel}>Commodity</Text>
              </View>
              <TextInput
                style={styles.formInput}
                value={newCommodity.commodity}
                onChangeText={(text) => handleInputChangeCommodity('commodity', text)}
                onFocus={() => setFocusedInput('commodity')}
                onBlur={() => setFocusedInput(null)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={[styles.formGroup, focusedInput === 'package' && styles.formGroupFocused]}>
            <View style={styles.inputBox}>
              <View style={styles.inputBoxLabel}>
                <Text style={styles.formLabel}>Package</Text>
              </View>
              <TextInput
                style={styles.formInput}
                value={newCommodity.package}
                onChangeText={(text) => handleInputChangeCommodity('package', text)}
                keyboardType="numeric"
                onFocus={() => setFocusedInput('package')}
                onBlur={() => setFocusedInput(null)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={[styles.formGroup, focusedInput === 'weight' && styles.formGroupFocused]}>
            <View style={styles.inputBox}>
              <View style={styles.inputBoxLabel}>
                <Text style={styles.formLabel}>Weight (Ton)</Text>
              </View>
              <TextInput
                style={styles.formInput}
                value={newCommodity.weight}
                onChangeText={(text) => handleInputChangeCommodity('weight', text)}
                keyboardType="numeric"
                onFocus={() => setFocusedInput('weight')}
                onBlur={() => setFocusedInput(null)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.modalFooter}>
            <TouchableOpacity 
              style={[styles.footerButton, styles.cancelButton]}
              onPress={() => setShowCommodityModal(false)}
            >
              <Text style={styles.footerButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.footerButton, styles.addButton]}
              onPress={handleAddNewCommodity}
            >
              <Text style={styles.footerButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Sales Order</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Basic Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <Text style={styles.sectionSubtitle}>Please complete all information below</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Customer</Text>
            <TextInput
              style={[styles.input, styles.disabledInput]}
              value="KRAKATAU INTERNATIONAL PORT"
              editable={false}
            />
          </View>
          {renderDropdown('Customer Type', 'customerType')}
          {renderDropdown('Related Vessel', 'relatedVessel')}
          {renderDropdown('Contract', 'contract')}
        </View>

        {/* Detail Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detail Information</Text>
          <Text style={styles.sectionSubtitle}>Please complete all information below</Text>
          {renderDropdown('Vessel Name', 'vesselName')}
          {renderDropdown('Activity', 'activity')}
          {renderDropdown('Voyage Number', 'voyageNumber')}
          {renderTextInput('Port Discharge / Loading', 'portDischarge', 'Search Port Discharge / Loading...')}
          {renderTextInput('Port Origin / Destination', 'portOrigin', 'Search Port Origin / Destination...')}
          {renderDatePicker('Estimate Arrival', 'estimateArrival')}
          {renderDatePicker('Estimate Departure', 'estimateDeparture')}
        </View>

        {/* Service Code */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Code</Text>
          <Text style={styles.sectionSubtitle}>Please select one of the service code</Text>
          {serviceCodes.map((service, index) => (
            <View key={index} style={selectedService === service ? styles.serviceCardSelected : styles.serviceCard}>
                <TouchableOpacity style={styles.serviceHeader} onPress={() => setSelectedService(service)}>
                    <Ionicons name={selectedService === service ? 'radio-button-on' : 'radio-button-off'} size={22} color="#007bff" />
                    <Text style={styles.serviceName}>{service}</Text>
                </TouchableOpacity>
                {selectedService === service && (
                    <View style={styles.serviceDetails}>
                        <Text style={styles.detailLabel}>Upload document</Text>
                        <View style={styles.uploadInfo}>
                            <Text style={styles.fileName}>Bill Lading Filename</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={[styles.docButton, styles.viewButton]}><Text style={styles.viewButtonText}>View</Text></TouchableOpacity>
                                <TouchableOpacity style={[styles.docButton, styles.uploadButton]}><Text style={styles.uploadButtonText}>Upload</Text></TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.tapToUpload}>
                            <Text style={styles.tapToUploadText}>Tap to select D/I No Lading</Text>
                        </TouchableOpacity>
                        <Text style={styles.detailLabel}>Select your service</Text>
                        {subServices.map((sub, i) => (
                             <TouchableOpacity key={i} style={styles.checkboxContainer} onPress={() => handleSubServiceToggle(sub)}>
                                <Ionicons name={selectedSubServices[sub] ? 'checkbox' : 'checkbox-outline'} size={22} color="#007bff" />
                                <Text style={styles.checkboxLabel}>{sub}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
          ))}
        </View>

        {/* Commodity */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Commodity</Text>
            {commoditiesData.map(item => (
                <View key={item.id} style={styles.commodityCard}>
                    <View>
                        <Text style={styles.commodityGroup}>{item.group}</Text>
                        <Text style={styles.commodityText}>{item.name}</Text>
                        <Text style={styles.commodityText}>{item.type}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                         <TouchableOpacity><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
                         <Text style={styles.commodityText}>{item.package}</Text>
                         <Text style={styles.commodityText}>{item.tonnage}</Text>
                    </View>
                </View>
            ))}
            <TouchableOpacity style={styles.addCommodityButton} onPress={() => setShowCommodityModal(true)}>
                <Text style={styles.addCommodityButtonText}>Add Commodity</Text>
            </TouchableOpacity>
        </View>

        {/* Action Buttons moved into ScrollView */}
        <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={[styles.footerButton, styles.cancelButton]} onPress={handleCancel}>
                <Text style={styles.footerButtonText}>Cancel Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.footerButton, styles.createButton]} onPress={handleCreateOrder}>
                <Text style={styles.footerButtonText}>Create Order</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Dropdown Modal */}
      {renderDropdownModal()}

      {/* Date Picker - Hanya untuk mobile */}
      {Platform.OS !== 'web' && datePicker.show && (
        <DateTimePicker
          value={formState[datePicker.field] || new Date()}
          mode={datePicker.mode}
          display="default"
          onChange={onDateChange}
          is24Hour={true}
        />
      )}

      {renderCommodityModal()}
    </SafeAreaView>
  );
};

export default NewSalesOrderScreen;
