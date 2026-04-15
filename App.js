import { SafeAreaProvider } from 'react-native-safe-area-context';
import ScanResultScreen from './screens/ScanResultScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScanResultScreen />
    </SafeAreaProvider>
  );
}
