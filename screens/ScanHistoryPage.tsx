import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scanHistory } from "../data";

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

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scanHistoryList}>
        {scanHistory.map((entry) => (
          <View key={entry.id} style={styles.scanHistoryCard}>
            <View style={styles.scanCardRow}>
              <View style={styles.scanCardImagePlaceholder} />
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
    backgroundColor: "#ffffff",
  },
  scanHistoryList: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    paddingBottom: 24,
  },
  scanHistoryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#dbe0f0",
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
    backgroundColor: "#f08f84",
    marginRight: 12,
  },
  scanCardDetails: {
    flex: 1,
  },
  scanCardText: {
    color: "#1f2937",
    fontSize: 13,
    marginBottom: 3,
  },
  scanCardLabel: {
    fontWeight: "700",
    color: "#111827",
  },
  statusCritical: {
    color: "#dc2626",
    fontWeight: "700",
  },
  statusFair: {
    color: "#f59e0b",
    fontWeight: "700",
  },
  statusLow: {
    color: "#16a34a",
    fontWeight: "700",
  },
  assessmentLink: {
    marginTop: 6,
    color: "#0047ab",
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
