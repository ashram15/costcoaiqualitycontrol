import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface MenuButton {
  name: string;
  color: string;
}

const HomeScreen: React.FC = () => {
  const buttons: MenuButton[] = [
    { name: 'Shop Costco', color: '#005DAA' },
    { name: 'Product Freshness Scanner', color: '#E31837' },
    { name: 'Scan History and Profile', color: '#E31837' },
    { name: 'Warehouse Services', color: '#005DAA' },
    { name: 'Current Orders', color: '#005DAA' },
    { name: 'Staff Management Portal', color: '#E31837' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Homepage</Text>
      <View style={styles.grid}>
        {buttons.map((btn, i) => (
          <TouchableOpacity key={i} style={[styles.card, { backgroundColor: btn.color }]}>
            <Text style={styles.cardText}>{btn.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { color: '#E31837', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', height: 160, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 15, padding: 10, elevation: 3 },
  cardText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});

export default HomeScreen;