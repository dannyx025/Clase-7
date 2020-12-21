import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './api';
import DealList from './components/DealList';



export default function App() {
  
  const [ deals, setDeals ] = useState([]);
   
  useEffect( () => {
    ( async () => {

      const deals = await api.fetchInitialDeals();
   

    } 
      
    )();
    

  },[]);

  return (
    <View style={styles.container}>
      {
        deals.length > 0 ? (
<DealList  deals={deals}/>

        ) : (
<Text style={styles.header}>BigSale App!</Text>
          
          )
      }
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 40,
  }
});
