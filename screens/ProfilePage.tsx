import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { flaggedProducts } from "../data";

export default function ProfilePage({ onShowHistory }: { onShowHistory: () => void }) {
  return (
    <View style={styles.screen}>
      <View style={styles.profileContent}>
        <View style={styles.profileHeaderRow}>
          <View style={styles.profileIconBox}>
            <Ionicons name="person-outline" size={58} color="#ffffff" />
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileNameText}>Name</Text>
            <Text style={styles.profileDetailText}>Email</Text>
            <Text style={styles.profileDetailText}>Membership ID</Text>
            <Text style={styles.profileDetailText}>Product Flagging Rating : /5</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.scanHistoryButton}
          activeOpacity={0.85}
          onPress={onShowHistory}
        >
          <Text style={styles.scanHistoryText}>See Scan History</Text>
        </TouchableOpacity>

        <View style={styles.flaggedSection}>
          <View style={styles.flaggedHeader}>
            <Text style={styles.flaggedHeaderText}>Your Flagged Products</Text>
          </View>
          <View style={styles.flaggedProductsRow}>
            {flaggedProducts.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <View style={styles.productSquare}>
                  <Image source={product.image} style={styles.productImage} resizeMode="cover" />
                </View>
                <Text style={styles.productName} numberOfLines={2}>
                  {product.name}
                </Text>
                <View style={styles.productActions}>
                  <TouchableOpacity activeOpacity={0.75}>
                    <Text style={styles.productActionLink}>Edit</Text>
                  </TouchableOpacity>
                  <Text style={styles.productActionDivider}>/</Text>
                  <TouchableOpacity activeOpacity={0.75}>
                    <Text style={styles.productActionLink}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  profileContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
    backgroundColor: "#ffffff",
  },
  profileHeaderRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  profileIconBox: {
    width: 134,
    height: 134,
    borderRadius: 28,
    backgroundColor: "#f08f84",
    alignItems: "center",
    justifyContent: "center",
  },
  profileDetails: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 4,
  },
  profileDetailText: {
    color: "#111827",
    fontSize: 14,
    marginBottom: 7,
    lineHeight: 18,
  },
  profileNameText: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7,
    lineHeight: 22,
  },
  scanHistoryButton: {
    width: "100%",
    backgroundColor: "#005BAD",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 22,
  },
  scanHistoryText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  flaggedSection: {
    borderWidth: 1,
    borderColor: "#dbe0f0",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  flaggedHeader: {
    backgroundColor: "#005BAD",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  flaggedHeaderText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  flaggedProductsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 16,
  },
  productCard: {
    width: "31%",
    alignItems: "center",
  },
  productSquare: {
    width: 96,
    height: 96,
    borderRadius: 16,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    marginBottom: 6,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productName: {
    color: "#111827",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 6,
    minHeight: 32,
  },
  productActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  productActionLink: {
    color: "#005BAD",
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "600",
  },
  productActionDivider: {
    color: "#6b7280",
    marginHorizontal: 3,
    fontSize: 12,
  },
});
