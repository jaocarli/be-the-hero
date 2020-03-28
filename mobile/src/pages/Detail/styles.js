import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerButtonText: {
    color: '#555',
    fontWeight: 'bold',
    marginLeft: 10
  },

  incident: {
    padding: 24,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginTop: 32,
    marginBottom: 16
  },

  incidentOng: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold'
  },

  incidentDescription: {
    fontSize: 14,
    color: '#404040',
    marginVertical: 10,
  },

  incidentValue: {
    color: '#585858',
  },

  contact: {
    padding: 24,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginTop: 30,
    marginBottom: 16
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#444'
  },

  heroDescription: {
    fontSize: 16,
    color: '#555',
    marginVertical: 15
  },
  
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonText: {
    fontWeight: 'bold',
    marginLeft: 10
  },

  buttonTextWhatsapp: {
    color: '#E9FAEF',
  },

  buttonTextEmail: {
    color: '#FBE8EC',
  },

  buttonWhatsapp: {
    width: '48%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#25D366',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonEmail: {
    width: '48%',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#E02041',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
})