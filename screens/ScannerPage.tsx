import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

const GRID_LINES = Array.from({ length: 12 }, (_, index) => index);

export default function ScannerPage({ onScanAccepted }: { onScanAccepted: () => void }) {
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanDots, setScanDots] = React.useState(".");
  const [permission, requestPermission] = useCameraPermissions();

  React.useEffect(() => {
    if (!isScanning) {
      return;
    }

    const dotInterval = setInterval(() => {
      setScanDots((prev) => (prev.length >= 3 ? "." : `${prev}.`));
    }, 350);

    const doneTimer = setTimeout(() => {
      onScanAccepted();
    }, 1600);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(doneTimer);
    };
  }, [isScanning, onScanAccepted]);

  const handleAllowCamera = async () => {
    if (!permission || !permission.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        return;
      }
    }
    setIsScanning(true);
  };

  if (!permission) {
    return (
      <View style={styles.screen}>
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Preparing camera…</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <CameraView style={styles.camera} facing="back" />
      <View
        style={[styles.scannerArea, isScanning ? styles.scannerAreaTransparent : undefined]}
        pointerEvents="box-none"
      >
        {GRID_LINES.map((line) => (
          <View key={`h-${line}`} style={[styles.gridHorizontal, { top: `${line * 9}%` }]} />
        ))}
        {GRID_LINES.map((line) => (
          <View key={`v-${line}`} style={[styles.gridVertical, { left: `${line * 9}%` }]} />
        ))}

        {isScanning ? (
          <View style={styles.modalOverlay}>
            <Text style={styles.modalTitle}>Scanning{scanDots}</Text>
            <Text style={styles.modalDescription}>
              Running a quick quality assessment on your product.
            </Text>
          </View>
        ) : (
          <View style={styles.modalOverlay}>
            <Text style={styles.modalTitle}>Allow camera access</Text>
            <Text style={styles.modalDescription}>
              Costco AI needs camera permission to scan products and analyze freshness/quality.{" "}
              Your images will only be used for this feature.
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.modalButton} activeOpacity={0.8} onPress={handleAllowCamera}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} activeOpacity={0.8}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  scannerArea: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  scannerAreaTransparent: {
    backgroundColor: "transparent",
  },
  loadingOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  loadingText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  gridHorizontal: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#c90f1f",
  },
  gridVertical: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#c90f1f",
  },
  modalOverlay: {
    marginTop: "14%",
    marginHorizontal: 20,
    backgroundColor: "#001f66",
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 18,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  modalDescription: {
    color: "#e6ecff",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 18,
  },
  modalActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 11,
    marginHorizontal: 6,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#001f66",
    fontSize: 16,
    fontWeight: "700",
  },
});
