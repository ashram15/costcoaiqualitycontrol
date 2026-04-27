import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { flaggedProducts } from "../data";
import { COLORS } from "../constants/colors";
import { RADIUS } from "../constants/ui";

export default function ProfilePage({
  onShowHistory,
  onOpenMarkForRemoval,
  onOpenScanDashboardAdmin,
}: {
  onShowHistory: () => void;
  onOpenMarkForRemoval?: () => void;
  onOpenScanDashboardAdmin?: () => void;
}) {
  return (
    <View style={styles.screen}>
      <View style={styles.profileContent}>
        <View style={styles.profileHeaderRow}>
          <View style={styles.profileIconBox}>
            <Ionicons name="person-outline" size={58} color={COLORS.WHITE} />
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileNameText}>Jane Doe</Text>
            <Text style={styles.profileDetailText}>jane.doe@example.com</Text>
            <Text style={styles.profileDetailText}>Membership ID: CST-8472-9915</Text>
            <Text style={styles.profileDetailText}>Product Flagging Rating: 4.6/5</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.scanHistoryButton}
          activeOpacity={0.85}
          onPress={onShowHistory}
        >
          <Text style={styles.scanHistoryText}>See Scan History</Text>
        </TouchableOpacity>

        {onOpenMarkForRemoval ? (
          <TouchableOpacity
            style={styles.adminButton}
            activeOpacity={0.85}
            onPress={onOpenMarkForRemoval}
          >
            <Text style={styles.adminButtonText}>Mark for removal (admin)</Text>
          </TouchableOpacity>
        ) : null}

        {onOpenScanDashboardAdmin ? (
          <TouchableOpacity
            style={styles.scanDashboardButton}
            activeOpacity={0.85}
            onPress={onOpenScanDashboardAdmin}
          >
            <Text style={styles.scanDashboardButtonText}>Scan dashboard (admin)</Text>
          </TouchableOpacity>
        ) : null}

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
    backgroundColor: COLORS.WHITE,
  },
  profileContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
    backgroundColor: COLORS.WHITE,
  },
  profileHeaderRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  profileIconBox: {
    width: 134,
    height: 134,
    borderRadius: 28,
    backgroundColor: COLORS.PRIMARY_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
  profileDetails: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 4,
  },
  profileDetailText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    marginBottom: 7,
    lineHeight: 18,
  },
  profileNameText: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7,
    lineHeight: 22,
  },
  scanHistoryButton: {
    width: "100%",
    backgroundColor: COLORS.PRIMARY_BLUE,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  scanHistoryText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: "700",
  },
  adminButton: {
    width: "100%",
    backgroundColor: COLORS.WHITE,
    borderRadius: RADIUS.md,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_RED,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  adminButtonText: {
    color: COLORS.PRIMARY_RED,
    fontSize: 15,
    fontWeight: "700",
  },
  scanDashboardButton: {
    width: "100%",
    backgroundColor: COLORS.WHITE,
    borderRadius: RADIUS.md,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_BLUE,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 22,
  },
  scanDashboardButtonText: {
    color: COLORS.PRIMARY_BLUE,
    fontSize: 15,
    fontWeight: "700",
  },
  flaggedSection: {
    borderWidth: 1,
    borderColor: COLORS.BORDER_CARD,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: COLORS.WHITE,
  },
  flaggedHeader: {
    backgroundColor: COLORS.PRIMARY_BLUE,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  flaggedHeaderText: {
    color: COLORS.WHITE,
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
    backgroundColor: COLORS.INPUT_BG,
    overflow: "hidden",
    marginBottom: 6,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productName: {
    color: COLORS.TEXT_PRIMARY,
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
    color: COLORS.PRIMARY_BLUE,
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "600",
  },
  productActionDivider: {
    color: COLORS.TEXT_MUTED,
    marginHorizontal: 3,
    fontSize: 12,
  },
});
