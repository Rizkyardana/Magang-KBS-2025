import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const SOstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f8fa',
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
    headerContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    backButton: {
      marginRight: 15,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      flex: 1,
      marginLeft: 10,
    },
    searchButton: {
      padding: 5,
      marginLeft: 10,
    },
    scrollView: {
      flex: 1,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginVertical: 8,
      marginHorizontal: 16,
      borderLeftWidth: 5,
      borderLeftColor: '#4caf50',
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
      marginBottom: 8,
    },
    orderNumberContainer: {
      flexDirection: 'column',
    },
    orderNumberLabel: {
      fontSize: 12,
      color: '#666',
      marginBottom: 2,
    },
    cardId: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333',
      flex: 1,
      marginRight: 8,
    },
    statusContainer: {
      alignItems: 'flex-end',
    },
    statusLabel: {
      fontSize: 12,
      color: '#666',
      marginBottom: 2,
    },
    cardStatus: {
      fontWeight: 'bold',
      fontSize: 14,
      textAlign: 'right',
    },
    cardBody: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardColumn: {
      flex: 1,
    },
    infoRow: {
      marginBottom: 10,
    },
    infoLabel: {
      fontSize: 12,
      color: '#888',
    },
    infoValue: {
      fontSize: 14,
      fontWeight: '600',
      color: '#444',
      marginBottom: 10,
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    navItem: {
      alignItems: 'center',
    },
    navItemText: {
      fontSize: 12,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      width: '100%',
      maxWidth: 400,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
      textAlign: 'left',
    },
    modalSubtitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 20,
      textAlign: 'left',
    },
    inputContainer: {
      marginBottom: 15,
    },
    inputLabel: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
      fontWeight: '500',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 12,
      fontSize: 14,
      backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    closeButton: {
      flex: 1,
      backgroundColor: '#CE0B0E',
      padding: 12,
      borderRadius: 5,
      alignItems: 'center',
      marginRight: 5,
    },
    closeButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 14,
    },
    applyButton: {
      flex: 1,
      backgroundColor: '#198129',
      padding: 12,
      borderRadius: 5,
      alignItems: 'center',
      marginLeft: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });

  export default SOstyles;