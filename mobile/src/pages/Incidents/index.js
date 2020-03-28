import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native'

import api from '../../services/api'

import logoImage from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {
  const [ incidents, setIncidents ] = useState([])
  const [ totalIncidents, setTotalIncidents ] = useState(0)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)

  const navigation = useNavigation()

  function navigateToDetails(incident) {
    navigation.navigate('Details', { incident })
  }

  async function loadIncidents() {
    if (loading) {
      return
    }

    if (totalIncidents > 0 && incidents.length === totalIncidents) {
      return
    }

    setLoading(true)

    const response = await api.get('/incidents', {
      params: {
        page: currentPage
      }
    })

    setIncidents([ ...incidents, ...response.data ])
    setTotalIncidents(response.headers['X-Total-Count'])

    setCurrentPage(currentPage + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={ styles.incidentsContainer }>

      <View style={ styles.headerContainer }>
        <Image source={ logoImage }/>
        <Text style={ styles.headerText }>
          Total de <Text style={ styles.headerTextBold }>{ totalIncidents }</Text> casos
        </Text>
      </View>
      <Text style={ styles.mainTitle }>Bem-vindo</Text>
      <Text style={ styles.mainDescription }>Escolha um dos casos abaixo e salve o dia!</Text>
      
      <FlatList style={ styles.incidentsList } data={ incidents }
        keyExtractor={ incident => String(incident.id) }
        showsVerticalScrollIndicator={ false }
        onEndReached={ loadIncidents }
        onEndReachedThreshold={ 0.2 }
        renderItem={({ item: incident }) => (

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
              currency: 'BRL'
            }).format(incident.value)
          }
          </Text>

          <TouchableOpacity onPress={ () => navigateToDetails(incident) }
            style={ styles.incidentButton }>
            <Text style={ styles.incidentButtonText }>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={ 16 } color="#E02041"/>
          </TouchableOpacity>
        </View>
      )}/>

    </View>
  )
}