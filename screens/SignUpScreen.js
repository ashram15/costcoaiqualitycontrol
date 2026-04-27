import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants/colors';
import { RADIUS } from '../constants/ui';

export default function SignUpScreen({ onEnterApp }) {
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>Create New Account</Text>

          <Text style={styles.subtitle}>
            Already Registered?{' '}
            <Text style={styles.link} onPress={() => {}}>
              Log in here.
            </Text>
          </Text>

          <View style={styles.field}>
            <Text style={styles.label}>NAME</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              placeholderTextColor={COLORS.PLACEHOLDER_GREY}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              placeholder="example@costco.com"
              placeholderTextColor={COLORS.PLACEHOLDER_GREY}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              placeholder="....."
              placeholderTextColor={COLORS.PLACEHOLDER_GREY}
              secureTextEntry
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>DATE OF BIRTH</Text>
            <TextInput
              style={styles.input}
              placeholder="Sign up"
              placeholderTextColor={COLORS.PLACEHOLDER_GREY}
            />
          </View>

          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={onEnterApp}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingVertical: 32,
  },
  inner: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.PRIMARY_RED,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.LABEL_GREY,
    textAlign: 'center',
    marginBottom: 36,
  },
  link: {
    textDecorationLine: 'underline',
    color: COLORS.PRIMARY_BLUE,
    fontWeight: '600',
  },
  field: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: COLORS.LABEL_GREY,
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.INPUT_BG,
    borderWidth: 1,
    borderColor: COLORS.INPUT_BORDER,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.PRIMARY_BLUE,
    paddingVertical: 16,
    borderRadius: RADIUS.md,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 17,
    fontWeight: '700',
  },
});
