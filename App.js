import { SafeAreaProvider } from 'react-native-safe-area-context';
import MarkForRemovalAdminScreen from './screens/MarkForRemovalAdminScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <MarkForRemovalAdminScreen />
    </SafeAreaProvider>
  );
}
