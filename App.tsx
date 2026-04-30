import * as React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "./constants/colors";
import { HIT_SLOP, ICON, backButtonLightBg } from "./constants/ui";
import CartPage from "./screens/CartPage";
import ProductAnalysisPage from "./screens/ProductAnalysisPage";
import RecommendedProductsPage from "./screens/RecommendedProductsPage";
import ProfilePage from "./screens/ProfilePage";
import ScanHistoryPage from "./screens/ScanHistoryPage";
import MarkForRemovalAdminScreen from "./screens/MarkForRemovalAdminScreen";
import ScanDashboardAdminPage from "./screens/ScanDashboardAdminPage";
import ScanResultScreen from "./screens/ScanResultScreen";
import ScannerPage from "./screens/ScannerPage";
import HomeScreen from "./screens/HomeScreen";
import InstructionsPage from "./screens/InstructionsPage";
import SignUpScreen from "./screens/SignUpScreen";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
};

type AppPage =
  | "instructions"
  | "home"
  | "profile"
  | "markForRemoval"
  | "scanDashboardAdmin"
  | "scanHistory"
  | "scanner"
  | "scanResult"
  | "productAnalysis"
  | "cart"
  | "recommended";

const NAV_ITEMS = [
  { key: "home", icon: "home-outline" as const, lib: "ionicons" as const },
  { key: "warehouse", icon: "warehouse" as const, lib: "material-community" as const },
  { key: "scanner", icon: "camera-outline" as const, lib: "ionicons" as const, isCenter: true },
  { key: "tag", icon: "pricetag-outline" as const, lib: "ionicons" as const },
  { key: "profile", icon: "person-outline" as const, lib: "ionicons" as const },
];

function BottomNav({
  page,
  onPageChange,
}: {
  page: AppPage;
  onPageChange: (nextPage: AppPage) => void;
}) {
  const isActive = (key: string) => {
    if (key === "home") return page === "home";
    if (key === "warehouse") return page === "instructions";
    if (key === "tag") return page === "cart";
    if (key === "scanner") {
      return page === "scanner" || page === "scanResult" || page === "productAnalysis" || page === "recommended";
    }
    if (key === "profile") {
      return page === "profile" || page === "markForRemoval" || page === "scanDashboardAdmin";
    }
    return false;
  };

  const onPressItem = (key: string) => {
    if (key === "home") return onPageChange("home");
    if (key === "warehouse") return onPageChange("instructions");
    if (key === "tag") return onPageChange("cart");
    if (key === "scanner" || key === "profile") onPageChange(key);
  };

  return (
    <View style={styles.bottomNav}>
      {NAV_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[styles.navButton, item.isCenter ? styles.navButtonCenter : undefined]}
          activeOpacity={0.8}
          onPress={() => onPressItem(item.key)}
        >
          <View
            style={[
              styles.iconCircle,
              item.isCenter ? styles.iconCircleCenter : undefined,
              isActive(item.key)
                ? item.isCenter
                  ? styles.activeIconCircleCenter
                  : styles.activeIconCircle
                : undefined,
            ]}
          >
            {item.lib === "material-community" ? (
              <MaterialCommunityIcons name={item.icon} size={item.isCenter ? 36 : 24} color={COLORS.WHITE} />
            ) : (
              <Ionicons name={item.icon} size={item.isCenter ? 36 : 24} color={COLORS.WHITE} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function TopBanner({ onBackPress }: { onBackPress?: () => void }) {
  return (
    <View style={styles.topBannerRow}>
      {onBackPress ? (
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7} onPress={onBackPress} hitSlop={HIT_SLOP}>
          <Ionicons name="arrow-back" size={ICON.back} color={COLORS.PRIMARY_BLUE} />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}

      <Image source={require("./assets/costcologo.png")} resizeMode="contain" style={styles.logo} />
    </View>
  );
}

export default function App() {
  const insets = useSafeAreaInsets();
  const [inApp, setInApp] = React.useState(false);
  const [appPage, setAppPage] = React.useState<AppPage>("home");

  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "milk",
      name: "A2 Protein Milk",
      price: 15.99,
      quantity: 1,
      image: require("./assets/milk.png"),
    },
    {
      id: "cereal",
      name: "Granola Cereal",
      price: 8.99,
      quantity: 1,
      image: require("./assets/cereal.png"),
    },
  ]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  if (!inApp) {
    return (
      <SignUpScreen
        onEnterApp={() => {
          setInApp(true);
          setAppPage("home");
        }}
      />
    );
  }

  const handleBackPress = appPage === "scanHistory" ? () => setAppPage("profile") : undefined;

  const renderAppPage = () => {
    if (appPage === "instructions") {
      return <InstructionsPage onConfirm={() => setAppPage("scanner")} />;
    }

    if (appPage === "home") {
      return (
        <HomeScreen
          onNavigate={(target) => {
            if (target === "scanner" || target === "profile") setAppPage(target);
          }}
        />
      );
    }

    if (appPage === "profile") {
      return (
        <ProfilePage
          onShowHistory={() => setAppPage("scanHistory")}
          onOpenMarkForRemoval={() => setAppPage("markForRemoval")}
          onOpenScanDashboardAdmin={() => setAppPage("scanDashboardAdmin")}
        />
      );
    }

    if (appPage === "markForRemoval") {
      return <MarkForRemovalAdminScreen onBack={() => setAppPage("profile")} />;
    }

    if (appPage === "scanDashboardAdmin") {
      return <ScanDashboardAdminPage onBack={() => setAppPage("profile")} />;
    }

    if (appPage === "scanHistory") {
      return <ScanHistoryPage />;
    }

    if (appPage === "productAnalysis") {
      return (
        <ProductAnalysisPage
          onBack={() => setAppPage("scanner")}
          onGoToCart={() => setAppPage("cart")}
          onAddToCart={addToCart}
          onFindAlternatives={() => setAppPage("recommended")}
        />
      );
    }

    if (appPage === "cart") {
      return <CartPage cartItems={cartItems} setCartItems={setCartItems} />;
    }

    if (appPage === "recommended") {
      return (
        <RecommendedProductsPage
          onBack={() => setAppPage("productAnalysis")}
          onGoToCart={() => setAppPage("cart")}
          onAddToCart={addToCart}
        />
      );
    }

    if (appPage === "scanResult") {
      return (
        <ScanResultScreen
          onBack={() => setAppPage("scanner")}
          onViewAnalysis={() => setAppPage("productAnalysis")}
          onGoToCart={() => setAppPage("cart")}
        />
      );
    }

    return <ScannerPage onScanAccepted={() => setAppPage("scanResult")} />;
  };

  const showShellHeader =
    appPage !== "instructions" &&
    appPage !== "home" &&
    appPage !== "productAnalysis" &&
    appPage !== "cart" &&
    appPage !== "recommended" &&
    appPage !== "scanResult" &&
    appPage !== "markForRemoval" &&
    appPage !== "scanDashboardAdmin";

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />

      <View style={styles.mobileView}>
        {showShellHeader ? <TopBanner onBackPress={handleBackPress} /> : null}

        <View style={styles.pageFill}>{renderAppPage()}</View>

        <View style={[styles.bottomNavHost, { paddingBottom: insets.bottom }]}>
          <BottomNav page={appPage} onPageChange={setAppPage} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  mobileView: {
    width: "100%",
    maxWidth: 450,
    height: "100%",
    backgroundColor: COLORS.WHITE,
  },
  pageFill: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  topBannerRow: {
    height: 74,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.BORDER_LIGHT,
  },
  backButton: {
    ...backButtonLightBg,
  },
  logo: {
    width: 120,
    height: 40,
  },
  bottomNavHost: {
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  bottomNav: {
    height: 92,
    backgroundColor: COLORS.PRIMARY_BLUE,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
  },
  navButtonCenter: {
    marginTop: -26,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.2,
    borderColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleCenter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.PRIMARY_BLUE,
    borderWidth: 2,
  },
  activeIconCircle: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  activeIconCircleCenter: {
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
});