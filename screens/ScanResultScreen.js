import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/** Match SignUpScreen — Costco brand */
const RED = '#E31837';
const BUTTON_BLUE = '#003478';
const LABEL_GREY = '#9E9E9E';
const INPUT_BG = '#F5F5F5';
const INPUT_BORDER = '#E8E8E8';
const RADIUS = 4;

function FakeStatusIcons() {
  return (
    <View style={styles.statusCluster}>
      <View style={styles.signalBars}>
        {[4, 6, 8, 10].map((h, i) => (
          <View key={i} style={[styles.bar, { height: h }, i > 0 && styles.barSpacer]} />
        ))}
      </View>
      <MaterialCommunityIcons name="wifi" size={16} color={LABEL_GREY} style={styles.statusIcon} />
      <View style={styles.battery}>
        <View style={styles.batteryOutline}>
          <View style={styles.batteryFill} />
        </View>
      </View>
    </View>
  );
}

export default function ScanResultScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 8,
            paddingBottom: 16,
          },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inner}>
          <View style={styles.topRow}>
            <Text style={styles.timestamp}>Timestamp: xx:xx</Text>
            <FakeStatusIcons />
          </View>

          <Image
            source={require('../assets/costco-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
            accessibilityLabel="Costco Wholesale logo"
          />

          <View style={styles.imagePlaceholder}>
            <MaterialCommunityIcons name="image-outline" size={72} color={BUTTON_BLUE} />
          </View>

          <Text style={styles.productLine}>Product: Name</Text>

          <View style={styles.starsRow}>
            {[0, 1, 2, 3].map((i) => (
              <MaterialCommunityIcons
                key={`f-${i}`}
                name="star"
                size={28}
                color={RED}
                style={styles.starIcon}
              />
            ))}
            <MaterialCommunityIcons name="star-outline" size={28} color={RED} />
          </View>

          <Text style={styles.notesLabel}>Notes:</Text>
          <View style={styles.notesBar} />

          <Pressable onPress={() => {}} style={styles.analysisLinkWrap}>
            <Text style={styles.analysisLink}>View Analysis</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <Pressable
          style={({ pressed }) => [styles.circleBtn, pressed && styles.circleBtnPressed]}
          onPress={() => {}}
        >
          <MaterialCommunityIcons name="chevron-left" size={32} color="#fff" />
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.circleBtn, pressed && styles.circleBtnPressed]}
          onPress={() => {}}
        >
          <MaterialCommunityIcons name="cart-outline" size={28} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  inner: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  timestamp: {
    fontSize: 12,
    color: LABEL_GREY,
  },
  statusCluster: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 6,
  },
  bar: {
    width: 3,
    backgroundColor: LABEL_GREY,
    borderRadius: 1,
  },
  barSpacer: {
    marginLeft: 2,
  },
  statusIcon: {
    marginRight: 6,
  },
  battery: {
    justifyContent: 'center',
  },
  batteryOutline: {
    width: 22,
    height: 11,
    borderWidth: 1,
    borderColor: LABEL_GREY,
    borderRadius: 2,
    padding: 1,
    justifyContent: 'center',
  },
  batteryFill: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 1,
  },
  logoImage: {
    width: '100%',
    maxWidth: 300,
    height: 88,
    marginBottom: 20,
    alignSelf: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 1.15,
    backgroundColor: INPUT_BG,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    borderRadius: RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  productLine: {
    fontSize: 16,
    color: LABEL_GREY,
    marginBottom: 12,
    textAlign: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 4,
  },
  notesLabel: {
    fontSize: 15,
    color: LABEL_GREY,
    alignSelf: 'flex-start',
    width: '100%',
    marginBottom: 8,
  },
  notesBar: {
    width: '100%',
    height: 28,
    backgroundColor: BUTTON_BLUE,
    borderRadius: RADIUS,
    marginBottom: 28,
  },
  analysisLinkWrap: {
    paddingVertical: 8,
  },
  analysisLink: {
    fontSize: 15,
    color: LABEL_GREY,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 36,
    paddingTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: INPUT_BORDER,
  },
  circleBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBtnPressed: {
    opacity: 0.88,
  },
});
