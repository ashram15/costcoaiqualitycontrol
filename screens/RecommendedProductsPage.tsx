import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../constants/colors";
import { HIT_SLOP, ICON, RADIUS, headerBarLight } from "../constants/ui";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const recommendedItems = [
  {
    id: "B001",
    name: "Kirkland Salted Sweet Butter",
    stock: 52,
    qualityScore: 96,
    image: require("../assets/butter1.png"),
  },
  {
    id: "B002",
    name: "Organic Butter",
    stock: 34,
    qualityScore: 92,
    image: require("../assets/butter2.png"),
  },
  {
    id: "B003",
    name: "Cabot Grass-Fed Butter",
    stock: 21,
    qualityScore: 88,
    image: require("../assets/butter3.png"),
  },
  {
    id: "B004",
    name: "Cabot Creamery Butter",
    stock: 15,
    qualityScore: 83,
    image: require("../assets/butter4.png"),
  },
];

type RecommendedProductsPageProps = {
  onBack?: () => void;
  onGoToCart?: () => void;
};

export default function RecommendedProductsPage({
  onBack,
  onGoToCart,
}: RecommendedProductsPageProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          {onBack ? (
            <TouchableOpacity onPress={onBack} activeOpacity={0.7} hitSlop={HIT_SLOP}>
              <Ionicons name="arrow-back" size={ICON.back} color={COLORS.PRIMARY_BLUE} />
            </TouchableOpacity>
          ) : (
            <Ionicons name="arrow-back" size={ICON.back} color={COLORS.PRIMARY_BLUE} />
          )}

          <Image
            source={require("../assets/costcologo.png")}
            style={styles.logo}
          />

          {onGoToCart ? (
            <TouchableOpacity onPress={onGoToCart} activeOpacity={0.7} hitSlop={HIT_SLOP}>
              <Ionicons name="cart-outline" size={ICON.cart} color={COLORS.PRIMARY_BLUE} />
            </TouchableOpacity>
          ) : (
            <Ionicons name="cart-outline" size={ICON.cart} color={COLORS.PRIMARY_BLUE} />
          )}
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {recommendedItems.map((item, index) => (
            <View key={item.id}>
              <View style={styles.itemRow}>
                <Image source={item.image} style={styles.productImage} />

                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>ID: {item.id}</Text>
                    <Text style={styles.infoText}>Stock: {item.stock}</Text>
                  </View>

                  <Text style={styles.scoreText}>
                    Quality Score: {item.qualityScore}
                  </Text>

                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${item.qualityScore}%` },
                      ]}
                    />
                  </View>

                  <Pressable style={styles.addBtn} onPress={() => onGoToCart?.()}>
                    <Text style={styles.addBtnText}>Add To Cart</Text>
                  </Pressable>
                </View>
              </View>

              {index !== recommendedItems.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.PAGE_BG_ALT,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.PAGE_BG_ALT,
  },
  header: {
    ...headerBarLight,
  },
  logo: {
    width: 150,
    height: 44,
    resizeMode: "contain",
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingBottom: 30,
  },
  itemRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 18,
    alignItems: "center",
  },
  productImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.PRIMARY_BLUE,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingRight: 12,
  },
  infoText: {
    fontSize: 16,
    color: COLORS.TEXT_BODY,
  },
  scoreText: {
    fontSize: 16,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: COLORS.TRACK_GREY,
    borderRadius: RADIUS.sm,
    overflow: "hidden",
    marginBottom: 14,
    width: "100%",
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.PRIMARY_RED,
    borderRadius: RADIUS.sm,
  },
  addBtn: {
    backgroundColor: COLORS.PRIMARY_RED,
    paddingVertical: 12,
    borderRadius: RADIUS.md,
    alignItems: "center",
    width: 170,
  },
  addBtnText: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.BORDER_LIGHT,
    marginHorizontal: 20,
  },
});
