import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { RADIUS, buttonPrimaryBlue, textOnPrimary } from '../constants/ui';

interface InstructionsPageProps {
  onConfirm: () => void;
}

const InstructionsPage: React.FC<InstructionsPageProps> = ({ onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>

      <View style={styles.stepContainer}>
        {/* Step 1 */}
        <View style={styles.stepRow}>
          <Ionicons name="camera-outline" size={32} color={COLORS.PRIMARY_RED} />
          <View style={styles.textColumn}>
            <Text style={styles.stepText}>
              Step 1: Focus your camera on the product you want to check.
            </Text>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.stepRow}>
          <Ionicons name="time-outline" size={32} color={COLORS.PRIMARY_RED} />
          <View style={styles.textColumn}>
            <Text style={styles.stepText}>
              Step 2: Wait for the product to be processed.
            </Text>
          </View>
        </View>

        {/* Step 3 */}
        <View style={styles.stepRow}>
          <Ionicons name="checkmark-circle-outline" size={32} color={COLORS.PRIMARY_RED} />
          <View style={styles.textColumn}>
            <Text style={styles.stepText}>
              Step 3: Check your result!
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.note}>
        Note: the AI will take some time to analyze the quality. please be patient.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.8} 
        onPress={onConfirm}
      >
        <Text style={styles.buttonText}>Got it!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.WHITE, 
    padding: 24, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: COLORS.PRIMARY_RED,
    marginBottom: 40 
  },
  stepContainer: { 
    width: '100%', 
    marginBottom: 30 
  },
  stepRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 30, 
    paddingHorizontal: 10 
  },
  textColumn: { 
    flex: 1, 
    marginLeft: 15 
  },
  stepText: { 
    fontSize: 16, 
    color: COLORS.TEXT_PRIMARY, 
    fontWeight: '500', 
    lineHeight: 22 
  },
  note: { 
    fontSize: 14, 
    color: COLORS.TEXT_MUTED, 
    textAlign: 'center', 
    fontStyle: 'italic', 
    marginBottom: 50, 
    paddingHorizontal: 20 
  },
  button: { 
    ...buttonPrimaryBlue,
    paddingVertical: 16, 
    paddingHorizontal: 60, 
    borderRadius: RADIUS.md, 
    elevation: 2,
  },
  buttonText: { 
    ...textOnPrimary, 
    fontSize: 18, 
  },
});

export default InstructionsPage;
