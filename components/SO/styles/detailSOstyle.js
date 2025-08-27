import { StyleSheet } from 'react-native';

const detailSOstyles = {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderNumberContainer: {
    flexDirection: 'column',
  },
  orderNumberLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  statusLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  statusValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
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
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    width: '48%',
  },
  detailItem: {
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  serviceItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  serviceCode: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  servicePrice: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  commodityItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  commodityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  commodityColumn: {
    width: '48%',
  },
  commodityColumnRight: {
    width: '48%',
  },
  commodityField: {
    marginBottom: 10,
  },
  commodityFieldRight: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  commodityLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  commodityValueBold: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  commodityName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commodityDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commodityDetail: {
    flex: 1,
  },
};

export default detailSOstyles;