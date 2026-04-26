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

/** Match scan result palette */
const RED = '#E61031'; /* Medium Candy Apple Red */
const BUTTON_BLUE = '#005BAD'; /* Medium Persian Blue */
const LABEL_GREY = '#9E9E9E';
const PLACEHOLDER_GREY = '#BDBDBD';
const INPUT_BG = '#F5F5F5';
const INPUT_BORDER = '#E8E8E8';

export default function SignUpScreen({ onProductAnalysisPress, onEnterApp }) {
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
              placeholderTextColor={PLACEHOLDER_GREY}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              placeholder="example@costco.com"
              placeholderTextColor={PLACEHOLDER_GREY}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              placeholder="....."
              placeholderTextColor={PLACEHOLDER_GREY}
              secureTextEntry
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>DATE OF BIRTH</Text>
            <TextInput
              style={styles.input}
              placeholder="Sign up"
              placeholderTextColor={PLACEHOLDER_GREY}
            />
          </View>

          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>

          {onProductAnalysisPress ? (
            <Pressable
              onPress={onProductAnalysisPress}
              style={({ pressed }) => [styles.demoLinkWrap, pressed && { opacity: 0.8 }]}
            >
              <Text style={styles.demoLink}>View product analysis (demo)</Text>
            </Pressable>
          ) : null}

          {onEnterApp ? (
            <Pressable
              onPress={onEnterApp}
              style={({ pressed }) => [styles.enterApp, pressed && styles.buttonPressed]}
            >
              <Text style={styles.enterAppText}>Continue to app</Text>
            </Pressable>
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    color: RED,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: LABEL_GREY,
    textAlign: 'center',
    marginBottom: 36,
  },
  link: {
    textDecorationLine: 'underline',
    color: BUTTON_BLUE,
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
    color: LABEL_GREY,
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: INPUT_BG,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: BUTTON_BLUE,
    paddingVertical: 16,
    borderRadius: 4,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  demoLinkWrap: {
    marginTop: 20,
    paddingVertical: 8,
  },
  demoLink: {
    color: BUTTON_BLUE,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  enterApp: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: BUTTON_BLUE,
    paddingVertical: 14,
    borderRadius: 4,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterAppText: {
    color: BUTTON_BLUE,
    fontSize: 16,
    fontWeight: '700',
  },
});
