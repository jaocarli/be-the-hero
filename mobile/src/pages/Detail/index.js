import React from 'react'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'

import logoImage from '../../assets/logo.png'

export default function Details() {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident
  const messageToSend = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL' }
    ).format(incident.value)
  }` 

  function navigateBack() {
    navigation.goBack()
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [ incident.email ],
      body: messageToSend
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${messageToSend}`)
  }

  return (
    <View style={ styles.detailsContainer }>

      <View style={ styles.headerContainer }>
        <Image source={ logoImage }/>

        <TouchableOpacity style={ styles.headerButton } onPress={ navigateBack }>
          <Feather name="arrow-left" size={ 28 } color="#E02041"/>
          <Text style={ styles.headerButtonText }>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.incident }>
        <Text style={ styles.incidentOng }>
          { incident.name } de { incident.city }/{ incident.uf }
        </Text>

        <Text style={ styles.incidentDescription }>
          { incident.description }
        </Text>

        <Text style={ styles.incidentValue }>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL' }
          ).format(incident.value)
        }
        </Text>
      </View>

      <View style={ styles.contact }>
        <Text style={ styles.heroTitle }>Salve o dia!</Text>
        <Text style={ styles.heroTitle }>Seja o herói desse caso</Text>

        <Text style={ styles.heroDescription }> Entre em contato:</Text>
        <View style={ styles.contactButtons }>
          <TouchableOpacity onPress={ sendWhatsapp } style={ styles.buttonWhatsapp }>
            <FontAwesome name="whatsapp" size={ 32 } color="#E9FAEF"/>
            <Text style={[ styles.buttonText, styles.buttonTextWhatsapp ]}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ sendEmail } style={ styles.buttonEmail }>
            <FontAwesome name="envelope-o" size={ 30 } color="#FBE8EC"/>
            <Text style={[ styles.buttonText, styles.buttonTextEmail ]}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}