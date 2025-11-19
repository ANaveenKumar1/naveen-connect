import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18,fontWeight:'700'}}>Naveen Connect</Text>
      <Text style={{marginTop:8}}>Expo app scaffold - replace with your screens</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding:20 },
});