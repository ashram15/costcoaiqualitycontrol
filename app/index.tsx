import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function ScanDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuIconContainer}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
        <View style={styles.searchBarPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.mainTitle}>Scan Dashboard/Admin</Text>

        {/* Grid of Buttons */}
        <View style={styles.gridContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.gridButton, styles.bgBlue]}>
              <Text style={styles.buttonText}>Quality{'\n'}Control{'\n'}Metrics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgRed]}>
              <Text style={styles.buttonText}>High-Risk{'\n'}Batches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgBlue]}>
              <Text style={styles.buttonText}>User Integrity{'\n'}Reports</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.gridButton, styles.bgRed]}>
              <Text style={styles.buttonText}>Warehouse{'\n'}Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgBlue]}>
              <Text style={styles.buttonText}>Manual{'\n'}Review</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgRed]}>
              <Text style={styles.buttonText}>Supplier{'\n'}Claims</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Quality Control Metrics</Text>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <View style={styles.fullLinesContainer}>
            <View style={styles.fullLine} />
            <View style={styles.fullLine} />
            <View style={styles.fullLine} />
          </View>
          
          <View style={styles.splitContentContainer}>
            <View style={styles.halfLinesContainer}>
              <View style={styles.halfLine} />
              <View style={styles.halfLine} />
              <View style={styles.halfLine} />
              <View style={styles.halfLine} />
              <View style={styles.halfLine} />
            </View>
            <View style={styles.chartContainer}>
              {/* CSS Art representation of the mountain chart */}
              <View style={styles.chartGrid}>
                {[...Array(5)].map((_, i) => (
                  <View key={i} style={styles.gridLine} />
                ))}
              </View>
              <View style={styles.chartYAxis} />
              <View style={styles.chartXAxis} />
              
              {/* Chart Series 1 */}
              <View style={styles.mountain1} />
              <View style={styles.mountain1Overlay} />
              
              {/* Chart Series 2 */}
              <View style={styles.mountain2} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <View style={[styles.bottomBarSegment, styles.bottomDark]} />
        <View style={[styles.bottomBarSegment, styles.bottomLight]} />
        <View style={[styles.bottomBarSegment, styles.bottomDark]} />
        <View style={[styles.bottomBarSegment, styles.bottomLight]} />
        <View style={[styles.bottomBarSegment, styles.bottomDark]} />
        <View style={[styles.bottomBarSegment, styles.bottomLight]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    backgroundColor: '#5271FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 40, // For status bar spacing on generic view
  },
  menuIconContainer: {
    backgroundColor: '#003399',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  hamburgerLine: {
    width: 20,
    height: 2,
    backgroundColor: '#000',
    marginVertical: 2,
  },
  searchBarPlaceholder: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    height: 24,
    borderRadius: 12,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  mainTitle: {
    color: '#FF4D4D',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gridContainer: {
    width: '100%',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridButton: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 2,
  },
  bgBlue: {
    backgroundColor: '#0047AB',
  },
  bgRed: {
    backgroundColor: '#FF3333',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
  },
  subtitle: {
    color: '#FF4D4D',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentSection: {
    width: '100%',
  },
  fullLinesContainer: {
    width: '100%',
    marginBottom: 10,
  },
  fullLine: {
    height: 2,
    backgroundColor: '#000',
    width: '100%',
    marginBottom: 20,
  },
  splitContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfLinesContainer: {
    width: '45%',
    paddingTop: 10,
  },
  halfLine: {
    height: 2,
    backgroundColor: '#000',
    width: '100%',
    marginBottom: 20,
  },
  chartContainer: {
    width: '50%',
    height: 160,
    position: 'relative',
  },
  chartGrid: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  gridLine: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
  chartYAxis: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  chartXAxis: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  mountain1: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    width: 60,
    height: 80,
    backgroundColor: '#A0E4F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
    opacity: 0.8,
  },
  mountain1Overlay: {
    position: 'absolute',
    bottom: 0,
    left: 70,
    width: 40,
    height: 50,
    backgroundColor: '#A0E4F5',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.8,
  },
  mountain2: {
    position: 'absolute',
    bottom: 0,
    left: 60,
    width: 80,
    height: 130,
    backgroundColor: '#63C5DA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 30,
    opacity: 0.8,
  },
  bottomBar: {
    flexDirection: 'row',
    height: 40,
  },
  bottomBarSegment: {
    flex: 1,
  },
  bottomDark: {
    backgroundColor: '#0047AB',
  },
  bottomLight: {
    backgroundColor: '#5271FF',
  },
});
