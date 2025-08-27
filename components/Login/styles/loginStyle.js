import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  topSection: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 12,
    color: '#black',
    textAlign: 'left',
    lineHeight: 20,
    alignSelf: 'flex-start',
  },
  formContainer: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 20,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500'
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#666',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#0B6BCE',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
  },
  footerText: {
    color: '#999',
    fontSize: 12,
  },
});

export default loginStyles;