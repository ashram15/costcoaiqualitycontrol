import React from "react";
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
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onBack?: () => void;
};

export default function ProductAnalysisPage({ onBack }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            {onBack ? (
              <TouchableOpacity onPress={onBack} activeOpacity={0.7} hitSlop={12}>
                <Ionicons name="arrow-back" size={28} color="white" />
              </TouchableOpacity>
            ) : (
              <Ionicons name="arrow-back" size={28} color="white" />
            )}
            <Image source={require("../assets/costco-logo.png")} style={styles.logo} />
            <Ionicons name="cart-outline" size={30} color="white" />
          </View>

          <View style={styles.productSection}>
            <Image source={require("../assets/butter.png")} style={styles.productImage} />

            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>Kirkland Butter</Text>
              <Text style={styles.productInfo}>ID: 894321</Text>
              <Text style={styles.productInfo}>Price: $5.50</Text>

              <View style={styles.ratingRow}>
                <Ionicons name="star" size={18} color="#E61031" />
                <Ionicons name="star" size={18} color="#E61031" />
                <Ionicons name="star" size={18} color="#E61031" />
                <Ionicons name="star" size={18} color="#E61031" />
                <Ionicons name="star-outline" size={18} color="#E61031" />
                <Text style={styles.reviewText}>1,240 Reviews</Text>
              </View>

              <Text style={styles.productInfo}>Stock: 52</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.success}>✔ Successfully Scanned</Text>

              <Text style={styles.title}>Product Analysis</Text>

              <Text style={styles.cardText}>✔ Quality Status: Excellent</Text>
              <Text style={styles.cardText}>✔ Customer Reviews: Highly Positive</Text>
              <Text style={styles.cardText}>✔ Return Rate: Very Low</Text>
              <Text style={styles.cardText}>✔ Popularity: High</Text>

              <Text style={styles.title}>Key Insights</Text>

              <Text style={styles.cardText}>• High-quality dairy source</Text>
              <Text style={styles.cardText}>• Trusted Kirkland brand</Text>
              <Text style={styles.cardText}>• Great for cooking and baking</Text>
            </View>

            <View>
              <Text style={styles.score}>Quality Score: 96/100</Text>

              <View style={styles.bar}>
                <View style={styles.fill} />
              </View>

              <View style={styles.buttons}>
                <Pressable style={styles.btn}>
                  <Text style={styles.btnText}>Add To Cart</Text>
                </Pressable>

                <Pressable style={styles.btn2}>
                  <Text style={styles.btn2Text}>Find Alternatives</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  scrollContainer: {
    flexGrow: 1,
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
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  productSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: "center",
  },
  productImage: {
    width: 115,
    height: 115,
    marginRight: 16,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  productInfo: {
    fontSize: 16,
    marginBottom: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  reviewText: {
    marginLeft: 6,
    fontSize: 14,
  },
  card: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 16,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "#efefef",
    justifyContent: "space-between",
  },
  success: {
    color: "green",
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 4,
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 12,
  },
  bar: {
    height: 12,
    backgroundColor: "#d9d9d9",
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  fill: {
    width: "96%",
    height: "100%",
    backgroundColor: "#E61031",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  btn: {
    backgroundColor: "#E61031",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: 140,
    alignItems: "center",
  },
  btn2: {
    backgroundColor: "#f2b6c1",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    minWidth: 170,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btn2Text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
