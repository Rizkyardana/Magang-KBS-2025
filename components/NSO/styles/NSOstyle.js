import { StyleSheet } from 'react-native';

export const NSOstyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 16,
    },
    scrollContainer: {
      padding: 8,
      paddingBottom: 20,
    },
    section: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    sectionSubtitle: {
      fontSize: 12,
      color: '#666',
      marginBottom: 16,
    },
    inputGroup: {
      marginBottom: 12,
    },
    label: {
      fontSize: 14,
      color: '#333',
      marginBottom: 6,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 6,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 14,
      backgroundColor: '#fff',
    },
    disabledInput: {
      backgroundColor: '#f0f2f5',
      color: '#555',
    },
    dropdown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 6,
      paddingHorizontal: 12,
      paddingVertical: 12,
      backgroundColor: '#fff',
    },
    datePicker: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 6,
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    webDateInput: {
      width: '100%',
      padding: '9px 35px 9px 12px',
      border: '1px solid #ddd',
      borderRadius: 6,
      fontSize: '14px',
      fontFamily: 'sans-serif',
      opacity: 0, // Sembunyikan input asli
      position: 'relative',
      zIndex: 1,
      cursor: 'pointer',
    },
    dropdownText: {
      flex: 1,
      fontSize: 14,
      color: '#999',
      marginRight: 8,
    },
    dropdownTextSelected: {
      flex: 1,
      fontSize: 14,
      color: '#000',
      marginRight: 8,
    },
    dropdownModalContent: {
      width: '80%',
      maxWidth: 400,
      maxHeight: '60%',
      backgroundColor: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    dropdownList: {
      maxHeight: '100%',
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    dropdownItemSelected: {
      backgroundColor: '#f8f9fa',
    },
    dropdownItemText: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    dropdownItemTextSelected: {
      color: '#007AFF',
      fontWeight: '500',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    modalContent: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 25,
      alignItems: 'stretch',
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 25,
      textAlign: 'left',
      color: '#000',
    },
    formGroup: {
      borderWidth: 1,
      borderColor: '#d1d1d6',
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 15,
      marginBottom: 20,
    },
    formLabel: {
      fontSize: 12,
      color: '#8e8e93',
      marginBottom: 2,
    },
    formInput: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000',
      paddingVertical: 2, // Ruang vertikal minimal untuk input
      outline: 'none',
    },
    formInputFocused: {
      borderColor: '#d1d1d6', // Pastikan border color tidak berubah saat focus
      shadowOpacity: 0, // Hilangkan bayangan
      elevation: 0, // Hilangkan bayangan untuk Android
    },
    formGroupFocused: {
      borderColor: '#d1d1d6', // Menjaga warna border tetap sama
      shadowOpacity: 0, // Menghilangkan bayangan saat focus
      elevation: 0, // Menghilangkan bayangan untuk Android
    },
    modalFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    footerButton: {
      flex: 1,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#c8102e', // Merah
      marginRight: 10,
    },
    addButton: {
      backgroundColor: '#00833D', // Hijau
      marginLeft: 10,
    },
    footerButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    serviceCard: {
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 8,
      marginBottom: 10,
      padding: 12,
      backgroundColor: '#fff',
    },
    serviceCardSelected: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      marginBottom: 10,
      padding: 12,
      backgroundColor: '#fff',
    },
    serviceHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    serviceName: {
      fontSize: 14,
      fontWeight: '500',
      marginLeft: 10,
    },
    serviceDetails: {
        marginTop: 12,
        paddingLeft: 32, // Indent details
    },
    detailLabel: {
        fontSize: 13,
        color: '#555',
        marginBottom: 8,
        marginTop: 8,
    },
    uploadInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    fileName: {
        fontSize: 14,
    },
    docButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginLeft: 8,
    },
    viewButton: {
        backgroundColor: '#e9ecef',
    },
    uploadButton: {
        backgroundColor: '#d4edda',
    },
    viewButtonText: {
        color: '#007bff',
        fontWeight: '500',
    },
    uploadButtonText: {
        color: '#155724',
        fontWeight: '500',
    },
    tapToUpload: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 6,
        padding: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    tapToUploadText: {
        color: '#888',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 14,
    },
    commodityCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    commodityGroup: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    commodityText: {
        fontSize: 13,
        color: '#555',
    },
    deleteText: {
        color: '#dc3545',
        fontWeight: '500',
        marginBottom: 4,
    },
    addCommodityButton: {
        backgroundColor: '#28a745',
        borderRadius: 6,
        padding: 14,
        alignItems: 'center',
        marginTop: 16,
    },
    addCommodityButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    actionButtonsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 8,
      marginTop: 20,
    },
  
    footerButton: {
      flex: 1,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#dc3545',
      marginRight: 8,
    },
    createButton: {
      backgroundColor: '#007bff',
      marginLeft: 8,
    },
    footerButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });