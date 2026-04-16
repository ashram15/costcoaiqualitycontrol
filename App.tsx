import * as React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import ProfilePage from "./screens/ProfilePage";
import ScanHistoryPage from "./screens/ScanHistoryPage";
import ScannerPage from "./screens/ScannerPage";
import HomeScreen from './screens/HomeScreen';

type Page = "scanner" | "profile" | "scanHistory";

const NAV_ITEMS = [
  { key: "home", icon: "home-outline" as const, lib: "ionicons" as const },
  {
    key: "warehouse",
    icon: "warehouse" as const,
    lib: "material-community" as const,
  },
  { key: "scanner", icon: "camera-outline" as const, lib: "ionicons" as const, isCenter: true },
  { key: "tag", icon: "pricetag-outline" as const, lib: "ionicons" as const },
  { key: "profile", icon: "person-outline" as const, lib: "ionicons" as const },
];

function BottomNav({
  page,
  onPageChange,
}: {
  page: Page;
  onPageChange: (nextPage: Page) => void;
}) {
  const onPressItem = (key: string) => {
    if (key === "scanner" || key === "profile") {
      onPageChange(key);
    }
  };

  return (
    <View style={styles.bottomNav}>
      {NAV_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[
            styles.navButton,
            item.isCenter ? styles.navButtonCenter : undefined,
          ]}
          activeOpacity={0.8}
          onPress={() => onPressItem(item.key)}
        >
          <View
            style={[
              styles.iconCircle,
              item.isCenter ? styles.iconCircleCenter : undefined,
              page === item.key
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
          <Ionicons name="arrow-back" size={30} color="#0047ab" />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}
      <Image source={require("./assets/costcologo.png")} resizeMode="contain" style={styles.logo} />
    </View>
  );
}

export default function App() {
  const [page, setPage] = React.useState<Page>("profile");

  const renderPage = () => {
    if (page === "profile") {
      return <ProfilePage onShowHistory={() => setPage("scanHistory")} />;
    }
    if (page === "scanHistory") {
      return <ScanHistoryPage />;
    }
    return <ScannerPage onScanAccepted={() => setPage("scanner")} />;
  };

  const handleBackPress = page === "scanHistory" ? () => setPage("profile") : undefined;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mobileView}>
        <TopBanner onBackPress={handleBackPress} />
        {renderPage()}
        <BottomNav page={page} onPageChange={setPage} />
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
    backgroundColor: "#000080",
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
    backgroundColor: "#1233cc",
    borderWidth: 2,
  },
  activeIconCircle: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  activeIconCircleCenter: {
    backgroundColor: "#1233cc",
  },
});
