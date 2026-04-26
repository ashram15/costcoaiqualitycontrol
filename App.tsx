import * as React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import CartPage from "./screens/CartPage";
import ProductAnalysisPage from "./screens/ProductAnalysisPage";
import RecommendedProductsPage from "./screens/RecommendedProductsPage";
import ProfilePage from "./screens/ProfilePage";
import ScanHistoryPage from "./screens/ScanHistoryPage";
import MarkForRemovalAdminScreen from "./screens/MarkForRemovalAdminScreen";
import ScanResultScreen from "./screens/ScanResultScreen";
import ScannerPage from "./screens/ScannerPage";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";

type AppPage =
  | "home"
  | "profile"
  | "markForRemoval"
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
    if (key === "home") {
      return page === "home";
    }
    if (key === "warehouse") {
      return page === "recommended";
    }
    if (key === "tag") {
      return page === "productAnalysis";
    }
    if (key === "scanner") {
      return page === "scanner" || page === "scanResult";
    }
    if (key === "profile") {
      return page === "profile" || page === "markForRemoval";
    }
    return false;
  };

  const onPressItem = (key: string) => {
    if (key === "home") {
      onPageChange("home");
      return;
    }
    if (key === "warehouse") {
      onPageChange("recommended");
      return;
    }
    if (key === "scanner" || key === "profile" || key === "tag") {
      if (key === "tag") {
        onPageChange("productAnalysis");
      } else {
        onPageChange(key);
      }
    }
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
              <MaterialCommunityIcons
                name={item.icon}
                size={item.isCenter ? 36 : 24}
                color="#ffffff"
              />
            ) : (
              <Ionicons name={item.icon} size={item.isCenter ? 36 : 24} color="#ffffff" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function TopBanner({ onBackPress }: { onBackPress?: () => void }) {
  return (
    <View style={styles.header}>
      {onBackPress ? (
        <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={onBackPress}>
          <Ionicons name="arrow-back" size={30} color="#005BAD" />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}
      <Image
        source={require("./assets/costcologo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
}

export default function App() {
  const [inApp, setInApp] = React.useState(false);
  const [appPage, setAppPage] = React.useState<AppPage>("home");

  if (!inApp) {
    return <SignUpScreen onEnterApp={() => setInApp(true)} />;
  }

  const handleBackPress =
    appPage === "scanHistory" ? () => setAppPage("profile") : undefined;

  const renderAppPage = () => {
    if (appPage === "home") {
      return (
        <HomeScreen
          onNavigate={(target) => {
            if (target === "scanner" || target === "profile") {
              setAppPage(target);
            }
          }}
        />
      );
    }
    if (appPage === "profile") {
      return (
        <ProfilePage
          onShowHistory={() => setAppPage("scanHistory")}
          onOpenMarkForRemoval={() => setAppPage("markForRemoval")}
        />
      );
    }
    if (appPage === "markForRemoval") {
      return <MarkForRemovalAdminScreen onBack={() => setAppPage("profile")} />;
    }
    if (appPage === "scanHistory") {
      return <ScanHistoryPage />;
    }
    if (appPage === "productAnalysis") {
      return <ProductAnalysisPage onBack={() => setAppPage("profile")} />;
    }
    if (appPage === "cart") {
      return <CartPage />;
    }
    if (appPage === "recommended") {
      return <RecommendedProductsPage />;
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
    appPage !== "home" &&
    appPage !== "productAnalysis" &&
    appPage !== "cart" &&
    appPage !== "recommended" &&
    appPage !== "scanResult" &&
    appPage !== "markForRemoval";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mobileView}>
        {showShellHeader ? <TopBanner onBackPress={handleBackPress} /> : null}
        <View style={styles.pageFill}>{renderAppPage()}</View>
        <BottomNav page={appPage} onPageChange={setAppPage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileView: {
    width: "100%",
    maxWidth: 450,
    height: "100%",
    backgroundColor: "#ffffff",
  },
  pageFill: {
    flex: 1,
  },
  header: {
    height: 74,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#d5d7df",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 40,
  },
  bottomNav: {
    height: 92,
    backgroundColor: "#005BAD",
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
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircleCenter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#005BAD",
    borderWidth: 2,
  },
  activeIconCircle: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  activeIconCircleCenter: {
    backgroundColor: "#005BAD",
  },
});
