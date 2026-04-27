import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scanHistory } from "../data";
import { COLORS } from "../constants/colors";

export default function ScanHistoryPage() {
  const formatDateToMMDDYYYY = (rawDate: string) => {
    const parsed = new Date(rawDate);
    if (Number.isNaN(parsed.getTime())) {
      return rawDate;
    }

    const month = String(parsed.getMonth() + 1).padStart(2, "0");
    const day = String(parsed.getDate()).padStart(2, "0");
    const year = parsed.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const getStatusStyle = (status: string) => {
    if (status === "Critical") {
      return styles.statusCritical;
    }
    if (status === "Fair") {
      return styles.statusFair;
    }
    return styles.statusLow;
  };

  const getProductImage = (id: string) => {
    if (id === "s1") {
      return require("../assets/organicspinach.png");
    }
    if (id === "s2") {
      return require("../assets/costcobutter.png");
    }
    return require("../assets/frozenberries.png");
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scanHistoryList}>
        {scanHistory.map((entry) => (
          <View key={entry.id} style={styles.scanHistoryCard}>
            <View style={styles.scanCardRow}>
              <View style={styles.scanCardImagePlaceholder}>
                <Image source={getProductImage(entry.id)} style={styles.scanCardImage} resizeMode="cover" />
              </View>
              <View style={styles.scanCardDetails}>
                <Text style={styles.scanCardText}>
                  <Text style={styles.scanCardLabel}>Product Name: </Text>
                  {entry.productName}
                </Text>
                <Text style={styles.scanCardText}>
                  <Text style={styles.scanCardLabel}>Timestamp: </Text>
                  {entry.timestamp}
                </Text>
                <Text style={styles.scanCardText}>
                  <Text style={styles.scanCardLabel}>Score: </Text>
                  {entry.score}%[<Text style={getStatusStyle(entry.status)}>{entry.status}</Text>]
                </Text>
                <Text style={styles.scanCardText}>
                  <Text style={styles.scanCardLabel}>Best By date: </Text>
                  {formatDateToMMDDYYYY(entry.bestByDate)}
                </Text>
                <Text style={styles.scanCardText}>
                  <Text style={styles.scanCardLabel}>Problems: </Text>
                  {entry.problems}
                </Text>
                <TouchableOpacity activeOpacity={0.85}>
                  <Text style={styles.assessmentLink}>View Full Assessment</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scanHistoryList: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    paddingBottom: 24,
  },
  scanHistoryCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.BORDER_CARD,
    padding: 12,
    marginBottom: 12,
  },
  scanCardRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  scanCardImagePlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: COLORS.INPUT_BG,
    marginRight: 12,
    overflow: "hidden",
  },
  scanCardImage: {
    width: "100%",
    height: "100%",
  },
  scanCardDetails: {
    flex: 1,
  },
  scanCardText: {
    color: COLORS.TEXT_BODY,
    fontSize: 13,
    marginBottom: 3,
  },
  scanCardLabel: {
    fontWeight: "700",
    color: COLORS.TEXT_PRIMARY,
  },
  statusCritical: {
    color: COLORS.PRIMARY_RED,
    fontWeight: "700",
  },
  statusFair: {
    color: COLORS.STATUS_WARN,
    fontWeight: "700",
  },
  statusLow: {
    color: COLORS.STATUS_OK,
    fontWeight: "700",
  },
  assessmentLink: {
    marginTop: 6,
    color: COLORS.PRIMARY_BLUE,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
