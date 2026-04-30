import React, { useMemo } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { ICON, RADIUS } from "../constants/ui";
import type { CartItem } from "../App";

type Props = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export default function CartPage({ cartItems, setCartItems }: Props) {
  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const shipping = totalItems * 1.5;
  const deliveryFee = cartItems.length > 0 ? 2.0 : 0;
  const total = subtotal + shipping + deliveryFee;

  const increaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const saveForLater = (name: string) => {
    Alert.alert("Saved For Later", `${name} was saved for later.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="cart" size={ICON.back} color={COLORS.PRIMARY_BLUE} />

          <Image source={require("../assets/costcologo.png")} style={styles.logo} />

          <Ionicons name="search-outline" size={ICON.cart} color={COLORS.PRIMARY_BLUE} />
        </View>

        <View style={styles.itemsSection}>
          {cartItems.length === 0 ? (
            <View style={styles.emptyCartBox}>
              <Text style={styles.emptyCartText}>Your cart is empty.</Text>
            </View>
          ) : (
            <ScrollView
              style={styles.itemsScroll}
              contentContainerStyle={styles.itemsScrollContent}
              showsVerticalScrollIndicator={true}
            >
              {cartItems.map((item, index) => (
                <View key={item.id}>
                  <View style={styles.itemRow}>
                    <Image source={item.image} style={styles.productImage} />

                    <View style={styles.itemInfo}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.price}>${item.price.toFixed(2)}</Text>

                      <View style={styles.itemBottomRow}>
                        <View style={styles.qtyBox}>
                          <Pressable
                            style={styles.qtyBtn}
                            onPress={() => decreaseQuantity(item.id)}
                          >
                            <Text style={styles.qtyText}>-</Text>
                          </Pressable>

                          <View style={styles.qtyCenter}>
                            <Text style={styles.qtyNumber}>{item.quantity}</Text>
                          </View>

                          <Pressable
                            style={styles.qtyBtn}
                            onPress={() => increaseQuantity(item.id)}
                          >
                            <Text style={styles.qtyText}>+</Text>
                          </Pressable>
                        </View>

                        <View style={styles.linkBox}>
                          <Pressable onPress={() => removeItem(item.id)}>
                            <Text style={styles.linkText}>Remove Item</Text>
                          </Pressable>

                          <Pressable onPress={() => saveForLater(item.name)}>
                            <Text style={styles.linkText}>Save For Later</Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>

                  {index !== cartItems.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
            </ScrollView>
          )}
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
            </View>

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>

          <Pressable
            style={styles.checkoutBtn}
            onPress={() => Alert.alert("Checkout", "Proceeding to checkout")}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </Pressable>
        </View>
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
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.BORDER_LIGHT,
  },
  logo: {
    width: 140,
    height: 44,
    resizeMode: "contain",
  },
  itemsSection: {
    flex: 1,
  },
  itemsScroll: {
    flex: 1,
  },
  itemsScrollContent: {
    paddingBottom: 20,
  },
  itemRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 24,
    alignItems: "flex-start",
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    marginBottom: 18,
  },
  itemBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  qtyBox: {
    flexDirection: "row",
  },
  qtyBtn: {
    width: 42,
    height: 42,
    backgroundColor: COLORS.QTY_TRACK,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyCenter: {
    width: 42,
    height: 42,
    backgroundColor: COLORS.QTY_TRACK_MID,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  qtyNumber: {
    fontSize: 22,
    fontWeight: "bold",
  },
  linkBox: {
    alignItems: "flex-start",
  },
  linkText: {
    color: COLORS.PRIMARY_RED,
    textDecorationLine: "underline",
    fontSize: 15,
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.BORDER_LIGHT,
    marginHorizontal: 20,
    marginTop: 20,
  },
  bottomSection: {
    backgroundColor: COLORS.PAGE_BG_ALT,
    paddingBottom: 20,
  },
  summaryBox: {
    backgroundColor: COLORS.CARD,
    marginHorizontal: 20,
    marginTop: 16,
    padding: 18,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 18,
  },
  summaryValue: {
    fontSize: 18,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 28,
    fontWeight: "bold",
  },
  checkoutBtn: {
    backgroundColor: COLORS.PRIMARY_RED,
    marginHorizontal: 50,
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: RADIUS.md,
    alignItems: "center",
  },
  checkoutText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: "700",
  },
  emptyCartBox: {
    marginTop: 80,
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 22,
    fontWeight: "600",
  },
});