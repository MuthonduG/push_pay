import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type MenuItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  hasSwitch?: boolean;
};

export default function ProfileScreen() {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    joinedDate: 'Member since March 2023',
  };

  const menuItems: MenuItem[] = [
    { icon: 'person-outline', label: 'Personal Information' },
    { icon: 'lock-closed-outline', label: 'Security' },
    { icon: 'notifications-outline', label: 'Notification Settings' },
    { icon: 'card-outline', label: 'Payment Methods' },
    { icon: 'help-circle-outline', label: 'Help Center' },
    { icon: 'document-text-outline', label: 'Legal Documents' },
    { icon: 'moon-outline', label: 'Dark Mode', hasSwitch: true },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="camera-outline" size={18} color={Colors.primary} />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>
          <Text style={styles.profileDetail}>{user.phone}</Text>
          <Text style={styles.profileDetail}>{user.joinedDate}</Text>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={`menu-item-${index}`} 
              style={styles.menuItem}
              activeOpacity={0.7}
            >
              <View style={styles.menuIcon}>
                <Ionicons name={item.icon} size={20} color={Colors.text} />
              </View>
              <Text style={styles.menuText}>{item.label}</Text>
              {item.hasSwitch ? (
                <View style={styles.toggleSwitch}>
                  {/* Switch component would go here */}
                  <Ionicons name="chevron-forward" size={20} color={Colors.border} />
                </View>
              ) : (
                <Ionicons name="chevron-forward" size={20} color={Colors.border} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          activeOpacity={0.7}
        >
          <Ionicons name="log-out-outline" size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  profileDetail: {
    fontSize: 14,
    color: Colors.textTertiary,
    marginBottom: 4,
    textAlign: 'center',
  },
  menuSection: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  toggleSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 12,
    gap: 10,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  logoutText: {
    color: Colors.error,
    fontWeight: '600',
    fontSize: 16,
  },
  versionText: {
    textAlign: 'center',
    color: Colors.textTertiary,
    fontSize: 12,
    marginTop: 16,
  },
});