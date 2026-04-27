import * as React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import { HIT_SLOP, ICON, backButtonLightBg } from "../constants/ui";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

type ScanDashboardAdminPageProps = {
  onBack?: () => void;
};

export default function ScanDashboardAdminPage({ onBack }: ScanDashboardAdminPageProps) {
  return (
    <SafeAreaView style={styles.container}>
      {onBack ? (
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.7}
          hitSlop={HIT_SLOP}
          style={styles.backButton}
          accessibilityLabel="Back"
        >
          <Ionicons name="arrow-back" size={ICON.back} color={COLORS.PRIMARY_BLUE} />
        </TouchableOpacity>
      ) : null}

      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuIconContainer} activeOpacity={0.8}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
        <View style={styles.searchBarPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Scan Dashboard/Admin</Text>

        <View style={styles.gridContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.gridButton, styles.bgBlue]} activeOpacity={0.85}>
              <Text style={styles.buttonText}>
                {"Quality\nControl\nMetrics"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgRed]} activeOpacity={0.85}>
              <Text style={styles.buttonText}>
                {"High-Risk\nBatches"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgBlue]} activeOpacity={0.85}>
              <Text style={styles.buttonText}>
                {"User Integrity\nReports"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.gridButton, styles.bgRed]} activeOpacity={0.85}>
              <Text style={styles.buttonText}>
                {"Warehouse\nServices"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgBlue]} activeOpacity={0.85}>
              <Text style={styles.buttonText}>
                {"Manual\nReview"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridButton, styles.bgRed]} activeOpacity={0.85}>
              <Text style={styles.buttonText}>
                {"Supplier\nClaims"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.subtitle}>Quality Control Metrics</Text>

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
              <View style={styles.chartGrid}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <View key={i} style={styles.gridLine} />
                ))}
              </View>
              <View style={styles.chartYAxis} />
              <View style={styles.chartXAxis} />

              <View style={styles.mountain1} />
              <View style={styles.mountain1Overlay} />

              <View style={styles.mountain2} />
            </View>
          </View>
        </View>
      </ScrollView>

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
    backgroundColor: COLORS.WHITE,
  },
  backButton: {
    ...backButtonLightBg,
    alignSelf: "flex-start",
    marginLeft: 8,
    marginTop: 4,
    marginBottom: 2,
  },
  topBar: {
    backgroundColor: COLORS.PRIMARY_BLUE,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 8,
  },
  menuIconContainer: {
    backgroundColor: COLORS.BLUE_DEEP,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  hamburgerLine: {
    width: 20,
    height: 2,
    backgroundColor: COLORS.WHITE,
    marginVertical: 2,
  },
  searchBarPlaceholder: {
    flex: 1,
    backgroundColor: COLORS.BORDER_LIGHT,
    height: 24,
    borderRadius: 12,
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  mainTitle: {
    color: COLORS.PRIMARY_RED,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  gridContainer: {
    width: "100%",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  gridButton: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 2,
  },
  bgBlue: {
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  bgRed: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
  },
  subtitle: {
    color: COLORS.PRIMARY_RED,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentSection: {
    width: "100%",
  },
  fullLinesContainer: {
    width: "100%",
    marginBottom: 10,
  },
  fullLine: {
    height: 2,
    backgroundColor: COLORS.BORDER_LIGHT,
    width: "100%",
    marginBottom: 20,
  },
  splitContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  halfLinesContainer: {
    width: "45%",
    paddingTop: 10,
  },
  halfLine: {
    height: 2,
    backgroundColor: COLORS.BORDER_LIGHT,
    width: "100%",
    marginBottom: 20,
  },
  chartContainer: {
    width: "50%",
    height: 160,
    position: "relative",
  },
  chartGrid: {
    position: "absolute",
    top: 0,
    left: 20,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
  },
  gridLine: {
    height: 1,
    backgroundColor: COLORS.BORDER_LIGHT,
    width: "100%",
  },
  chartYAxis: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: COLORS.BORDER_LIGHT,
  },
  chartXAxis: {
    position: "absolute",
    left: 20,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: COLORS.BORDER_LIGHT,
  },
  mountain1: {
    position: "absolute",
    bottom: 0,
    left: 30,
    width: 60,
    height: 80,
    backgroundColor: COLORS.CHART_TINT_A,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
    opacity: 0.9,
  },
  mountain1Overlay: {
    position: "absolute",
    bottom: 0,
    left: 70,
    width: 40,
    height: 50,
    backgroundColor: COLORS.CHART_TINT_A,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.9,
  },
  mountain2: {
    position: "absolute",
    bottom: 0,
    left: 60,
    width: 80,
    height: 130,
    backgroundColor: COLORS.CHART_TINT_B,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 30,
    opacity: 0.9,
  },
  bottomBar: {
    flexDirection: "row",
    height: 40,
  },
  bottomBarSegment: {
    flex: 1,
  },
  bottomDark: {
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  bottomLight: {
    backgroundColor: "rgba(0, 91, 173, 0.45)",
  },
});
