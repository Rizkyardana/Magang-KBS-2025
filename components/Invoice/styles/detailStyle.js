import { StyleSheet, Dimensions } from 'react-native';

const styles = {
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
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      marginRight: 15,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    orderInfo: {
      backgroundColor: 'white',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    orderNumberContainer: {
      flex: 1,
    },
    orderNumberLabel: {
      fontSize: 12,
      color: '#666',
      marginBottom: 4,
    },
    orderNumber: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    orderStatusContainer: {
      alignItems: 'flex-end',
    },
    orderStatusLabel: {
      fontSize: 12,
      color: '#666',
      marginBottom: 4,
    },
    orderStatus: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#4CAF50',
      backgroundColor: '#E8F5E9',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      overflow: 'hidden',
    },
    tabs: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    tab: {
      flex: 1,
      paddingVertical: 15,
      alignItems: 'center',
    },
    tabText: {
      fontSize: 14,
      color: '#666',
    },
    tabTextActive: {
      color: '#007AFF',
      fontWeight: 'bold',
    },
    tabUnderline: {
      height: 2,
      backgroundColor: '#007AFF',
      marginTop: 5,
    },
    content: {
      flex: 1,
      padding: 20,
    },
    section: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 15,
    },
    detailRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    detailLabel: {
      flex: 1,
      fontSize: 14,
      color: '#666',
    },
    detailValue: {
      flex: 1,
      fontSize: 14,
      color: '#333',
      fontWeight: '500',
    },
    documentCard: {
      backgroundColor: '#f8f9fa',
      borderRadius: 8,
      padding: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderStyle: 'dashed',
    },
    documentHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    pdfIcon: {
      width: 40,
      height: 40,
      backgroundColor: '#ff6b6b',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    documentInfo: {
      flex: 1,
    },
    documentName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 2,
    },
    documentSize: {
      fontSize: 12,
      color: '#666',
    },
    downloadText: {
      color: '#ff6b6b',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
    paymentSection: {
      backgroundColor: '#0D2A5F', 
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    paymentTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: 'white',
      marginBottom: 10,
      textAlign: 'center',
    },
    paymentTitleDivider: {
      height: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      marginBottom: 15,
      marginHorizontal: 30,
    },
    paymentRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    paymentLabel: {
      fontSize: 14,
      color: 'white',
    },
    paymentValue: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
    },
    paymentGroupDivider: {
      height: 20,
    },
    totalAmountRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    totalAmountLabel: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
    },
    totalAmount: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
    /* Two Column Layout */
    twoColumnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    column: {
      flex: 1,
      paddingHorizontal: 5,
    },
    detailItem: {
      marginBottom: 16,
    },
    twoColumnDetailLabel: {
      fontSize: 12,
      color: '#666',
      marginBottom: 4,
    },
    twoColumnDetailValue: {
      fontSize: 14,
      color: '#333',
      fontWeight: '500',
    },
    /* End Two Column Layout */
  };

export default styles;
