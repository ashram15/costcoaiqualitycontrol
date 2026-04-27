import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { circleActionRed, HIT_SLOP, ICON } from '../constants/ui';

const INPUT_BORDER = COLORS.INPUT_BORDER;
const RADIUS = 8;

export default function ScanResultScreen({
  onBack,
  onViewAnalysis,
  onGoToCart,
} = {}) {
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
            <Text style={styles.timestamp}>Timestamp: April 17, 2026 · 2:41 PM</Text>
          </View>

          <Image
            source={require('../assets/costcologo.png')}
            style={styles.logoImage}
            resizeMode="contain"
            accessibilityLabel="Costco Wholesale logo"
          />

          <View style={styles.imagePlaceholder}>
            <Image
              source={require('../assets/scan-product-butter.png')}
              style={styles.productImage}
              resizeMode="cover"
              accessibilityLabel="Kirkland Signature salted sweet cream butter"
            />
          </View>

          <Text style={styles.productLine}>
            Product: Kirkland Signature Salted Sweet Cream Butter (4 x 4 oz sticks, 16 oz / 1 lb)
          </Text>

          <View style={styles.starsRow}>
            {[0, 1, 2, 3].map((i) => (
              <Ionicons
                key={`f-${i}`}
                name="star"
                size={28}
                color={COLORS.PRIMARY_RED}
                style={styles.starIcon}
              />
            ))}
            <Ionicons name="star-outline" size={28} color={COLORS.PRIMARY_RED} />
          </View>

          <Text style={styles.notesLabel}>Notes:</Text>
          <View style={styles.notesBox}>
            <Text style={styles.notesText}>
              Salted sweet cream butter for baking, cooking, and table use (spreads, sauces, sautés).
              Refrigerate after purchase. View Analysis for a detailed rating breakdown.
            </Text>
          </View>

          <Pressable
            onPress={onViewAnalysis || (() => {})}
            style={styles.analysisLinkWrap}
          >
            <Text style={styles.analysisLink}>View Analysis</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <Pressable
          style={({ pressed }) => [styles.circleBtn, pressed && styles.circleBtnPressed]}
          onPress={onBack || (() => {})}
          hitSlop={HIT_SLOP}
        >
          <Ionicons name="arrow-back" size={ICON.back} color={COLORS.WHITE} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.circleBtn, pressed && styles.circleBtnPressed]}
          onPress={onGoToCart || (() => {})}
          hitSlop={HIT_SLOP}
        >
          <Ionicons name="cart-outline" size={ICON.nav} color={COLORS.WHITE} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
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
    marginBottom: 12,
  },
  timestamp: {
    fontSize: 12,
    color: COLORS.LABEL_GREY,
    textAlign: 'left',
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
    backgroundColor: COLORS.INPUT_BG,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    borderRadius: RADIUS,
    overflow: 'hidden',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productLine: {
    fontSize: 16,
    color: COLORS.LABEL_GREY,
    marginBottom: 12,
    textAlign: 'center',
    paddingHorizontal: 4,
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
    color: COLORS.LABEL_GREY,
    alignSelf: 'flex-start',
    width: '100%',
    marginBottom: 8,
  },
  notesBox: {
    width: '100%',
    backgroundColor: COLORS.INPUT_BG,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    borderRadius: RADIUS,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  notesText: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.TEXT_SECONDARY,
  },
  analysisLinkWrap: {
    paddingVertical: 8,
  },
  analysisLink: {
    fontSize: 15,
    color: COLORS.PRIMARY_BLUE,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: '600',
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
    ...circleActionRed,
  },
  circleBtnPressed: {
    opacity: 0.88,
  },
});
