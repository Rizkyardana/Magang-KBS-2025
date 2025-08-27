import { StyleSheet } from 'react-native';

const akunStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    backButton: {
      marginRight: 15,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    scrollContainer: {
      padding: 16,
    },
    card: {
      backgroundColor: '#FFF',
      padding: 16,
      marginBottom: 16,
    },
    companyName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#212529',
      marginBottom: 2,
    },
    companyId: {
      fontSize: 14,
      color: '#007BFF',
      marginBottom: 20,
    },
    infoSectionFullWidth: {
      marginBottom: 16,
    },
    infoSection: {
      marginBottom: 12,
    },
    infoLabel: {
      fontSize: 12,
      color: '#6c757d',
      marginBottom: 4,
    },
    infoValue: {
      fontSize: 14,
      color: '#212529',
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailColumn: {
      width: '48%',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 14,
      color: '#212529',
      marginBottom: 8,
      fontWeight: '500',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ced4da',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 14,
      backgroundColor: '#FFF',
    },
    saveButton: {
      backgroundColor: '#007BFF',
      borderRadius: 8,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: 8,
    },
    saveButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    logoutContainer: {
      backgroundColor: '#FFF',
      padding: 16,
      alignItems: 'center',
    },
    logoutText: {
      color: '#dc3545',
      fontSize: 16,
      fontWeight: '500',
    }
  });

  export default akunStyles;