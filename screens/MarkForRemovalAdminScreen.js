import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { HIT_SLOP, ICON, backButtonLightBg } from '../constants/ui';

/** Hardcoded demo rows — swap for real data later */
const REMOVAL_ROWS = [
  {
    productName: 'Kirkland Signature Organic Pasture-Raised 24 Large Eggs',
    reason: 'Repeated temperature alert in cold chain',
    deptTimestamp: 'Dairy / Grocery — marked Apr 12, 2026 9:14 AM',
    productId: 'Item 88401924401',
    filledStars: 1,
    image: require('../assets/product-eggs.png'),
  },
  {
    productName: 'Kirkland Signature Trail Mix 4 lb',
    reason: 'Customer complaint — foreign object reported',
    deptTimestamp: 'Grocery — marked Apr 11, 2026 4:02 PM',
    productId: 'Item 1474436',
    filledStars: 1,
    image: require('../assets/product-trail-mix.png'),
  },
  {
    productName: 'Kirkland Signature 9 ft Patio Umbrella',
    reason: 'Recall notice from supplier Lot #A19',
    deptTimestamp: 'Seasonal — marked Apr 10, 2026 11:38 AM',
    productId: 'Item 77244001190',
    filledStars: 2,
    image: require('../assets/product-umbrella.png'),
  },
  {
    productName: 'Kirkland Signature Seasoned Rotisserie Chicken 3 lb',
    reason: 'Hold time exceeded — quality hold',
    deptTimestamp: 'Fresh Foods — marked Apr 9, 2026 7:55 PM',
    productId: 'Item 33088120093',
    filledStars: 1,
    image: require('../assets/product-chicken.png'),
  },
];

function StarRow({ filled }) {
  return (
    <View style={styles.starsRow}>
      {[0, 1, 2, 3, 4].map((i) => (
        <MaterialCommunityIcons
          key={i}
          name={i < filled ? 'star' : 'star-outline'}
          size={20}
          color={COLORS.PRIMARY_BLUE}
          style={styles.starIcon}
        />
      ))}
    </View>
  );
}

function RemovalCard({ productName, reason, deptTimestamp, productId, filledStars, image }) {
  return (
    <View style={styles.card}>
      <View style={styles.thumb}>
        <Image source={image} style={styles.thumbImage} resizeMode="cover" />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.pillBlue}>
          <Text style={styles.pillWhiteText}>{productName}</Text>
        </View>
        <View style={styles.pillGrey}>
          <Text style={styles.pillWhiteText}>{reason}</Text>
        </View>
        <View style={styles.pillBlue}>
          <Text style={styles.pillWhiteText}>{deptTimestamp}</Text>
        </View>
        <View style={styles.pillGrey}>
          <Text style={styles.pillWhiteText}>{productId}</Text>
        </View>
        <StarRow filled={filledStars} />
      </View>
    </View>
  );
}

export default function MarkForRemovalAdminScreen({ onBack } = {}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + 12,
            paddingBottom: insets.bottom + 24,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          {onBack ? (
            <TouchableOpacity
              onPress={onBack}
              activeOpacity={0.7}
              hitSlop={HIT_SLOP}
              style={styles.backButton}
              accessibilityLabel="Back"
            >
              <Ionicons name="arrow-back" size={ICON.back} color={COLORS.PRIMARY_BLUE} />
            </TouchableOpacity>
          ) : null}
          <Image
            source={require('../assets/costcologo.png')}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="Costco Wholesale logo"
          />
          <Text style={styles.adminLabel}>ADMIN</Text>
          <Text style={styles.screenTitle}>Mark For Removal:</Text>

          {REMOVAL_ROWS.map((row, index) => (
            <RemovalCard
              key={index}
              productName={row.productName}
              reason={row.reason}
              deptTimestamp={row.deptTimestamp}
              productId={row.productId}
              filledStars={row.filledStars}
              image={row.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inner: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  backButton: {
    ...backButtonLightBg,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  logo: {
    width: '100%',
    maxWidth: 280,
    height: 80,
    marginBottom: 10,
  },
  adminLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.PRIMARY_RED,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 1,
  },
  screenTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.TEXT_SUBHEAD,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.SURFACE_MUTED,
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
    alignItems: 'stretch',
  },
  thumb: {
    width: 92,
    height: 92,
    borderRadius: 10,
    backgroundColor: COLORS.THUMB_PLACEHOLDER,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  thumbImage: {
    width: '100%',
    height: '100%',
  },
  cardBody: {
    flex: 1,
    minWidth: 0,
  },
  pillBlue: {
    backgroundColor: COLORS.PRIMARY_BLUE,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 6,
  },
  pillGrey: {
    backgroundColor: COLORS.PILL_GREY,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 6,
  },
  pillWhiteText: {
    color: COLORS.WHITE,
    fontSize: 13,
    fontWeight: '600',
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 2,
  },
});
