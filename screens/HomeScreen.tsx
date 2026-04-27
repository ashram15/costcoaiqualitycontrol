import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS } from '../constants/colors';
import { RADIUS } from '../constants/ui';

interface HomeScreenProps {
  onNavigate: (page: "scanner" | "profile") => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  // These buttons match your wireframe grid
  const buttons: {
    name: string;
    color: string;
    action: "scanner" | "profile" | null;
  }[] = [
    { name: "Shop Costco", color: COLORS.PRIMARY_BLUE, action: null },
    { name: "Product Freshness Scanner", color: COLORS.PRIMARY_RED, action: "scanner" },
    { name: "Scan History and Profile", color: COLORS.PRIMARY_RED, action: "profile" },
    { name: "Warehouse Services", color: COLORS.PRIMARY_BLUE, action: null },
    { name: "Current Orders", color: COLORS.PRIMARY_BLUE, action: null },
    { name: "Staff Management Portal", color: COLORS.PRIMARY_RED, action: null },
  ];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/costcologo.png')}
        style={styles.brandLogo}
        resizeMode="contain"
        accessibilityLabel="Costco Wholesale logo"
      />
      <Text style={styles.header}>Homepage</Text>
      <View style={styles.grid}>
        {buttons.map((btn, i) => (
          <TouchableOpacity 
            key={i} 
            style={[styles.card, { backgroundColor: btn.color }]}
            // Clicking the button now triggers the navigation logic in App.tsx
            onPress={() => (btn.action ? onNavigate(btn.action) : undefined)}
          >
            <Text style={styles.cardText}>{btn.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.WHITE, padding: 20 },
  brandLogo: {
    width: '100%',
    maxWidth: 300,
    height: 80,
    alignSelf: 'center',
    marginBottom: 8,
  },
  header: {
    color: COLORS.PRIMARY_RED,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    height: 160,
    borderRadius: RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    elevation: 3,
  },
  cardText: { color: COLORS.WHITE, textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
});

export default HomeScreen;
