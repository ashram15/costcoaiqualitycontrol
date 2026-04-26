import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
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

export default function RecommendedProductsPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={30} color="white" />

          <Image
            source={require("../assets/costco-logo.png")}
            style={styles.logo}
          />

          <Ionicons name="cart-outline" size={32} color="white" />
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

                  <Pressable style={styles.addBtn}>
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
    backgroundColor: "#f3f3f3",
  },
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  header: {
    backgroundColor: "#005BAD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 18,
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
    color: "#005BAD",
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
    color: "black",
  },
  scoreText: {
    fontSize: 16,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 14,
    width: "100%",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E61031",
    borderRadius: 8,
  },
  addBtn: {
    backgroundColor: "#E61031",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
    width: 170,
  },
  addBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    height: 2,
    backgroundColor: "#000",
    marginHorizontal: 20,
  },
});
