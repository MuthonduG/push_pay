import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function WalletScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>My Wallet</Text>
        </View>

        {/* Cards Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          
          <View style={styles.cardContainer}>
            {/* Primary Card */}
            <View style={styles.primaryCard}>
              <View style={styles.cardLogo} />
              <Text style={styles.cardNumber}>•••• •••• •••• 4679</Text>
              <View style={styles.cardRow}>
                <Text style={styles.cardName}>John Doe</Text>
                <Text style={styles.cardExpiry}>09/25</Text>
              </View>
            </View>
            
            {/* Add Card Button */}
            <View style={styles.addCard}>
              <Ionicons name="add" size={24} color={Colors.primary} />
              <Text style={styles.addCardText}>Add new card</Text>
            </View>
          </View>
        </View>

        {/* Accounts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bank Accounts</Text>
          
          <View style={styles.accountItem}>
            <View style={styles.accountIcon}>
              <FontAwesome name="bank" size={18} color={Colors.primary} />
            </View>
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>Chase Bank</Text>
              <Text style={styles.accountNumber}>Checking ••3456</Text>
            </View>
            <Text style={styles.accountBalance}>$8,450.00</Text>
          </View>
          
          <View style={styles.accountItem}>
            <View style={styles.accountIcon}>
              <FontAwesome name="bank" size={18} color={Colors.primary} />
            </View>
            <View style={styles.accountInfo}>
              <Text style={styles.accountName}>Bank of America</Text>
              <Text style={styles.accountNumber}>Savings ••7890</Text>
            </View>
            <Text style={styles.accountBalance}>$15,200.00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  cardContainer: {
    gap: 12,
  },
  primaryCard: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 20,
    height: 180,
    justifyContent: 'space-between',
  },
  cardLogo: {
    width: 40,
    height: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
  },
  cardNumber: {
    color: Colors.white,
    fontSize: 18,
    letterSpacing: 2,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    color: Colors.white,
    fontSize: 14,
  },
  cardExpiry: {
    color: Colors.white,
    fontSize: 14,
  },
  addCard: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  addCardText: {
    color: Colors.primary,
    fontWeight: '500',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  accountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    color: Colors.textTertiary,
  },
  accountBalance: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
});