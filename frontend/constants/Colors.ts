// constants/Colors.ts
export const Colors = {
  // Primary Colors
  primary: '#0066FF',       // Main brand blue
  primaryDark: '#0052CC',   // Darker blue for pressed states
  primaryLight: '#E6F0FF',  // Very light blue for backgrounds
  
  // Accent Colors
  secondary: '#FF6B00',     // Orange accent
  success: '#00C853',       // Green for success states
  warning: '#FFAB00',       // Yellow for warnings
  error: '#FF3B30',        // Red for errors
  info: '#00B8D9',         // Teal for informational
  
  // Neutral Colors
  black: '#000000',
  white: '#FFFFFF',
  background: '#F8F9FA',    // App background
  card: '#FFFFFF',          // Card backgrounds
  border: '#E9ECEF',        // Borders and dividers
  placeholder: '#CED4DA',   // Input placeholder
  
  // Text Colors
  text: '#1A1A1A',         // Primary text
  textSecondary: '#6C757D', // Secondary text
  textTertiary: '#ADB5BD',  // Tertiary text
  
  // Status Colors
  active: '#00C853',        // Active status
  inactive: '#6C757D',      // Inactive status
  pending: '#FFAB00',       // Pending status
  
  // Special Colors
  overlay: 'rgba(0, 0, 0, 0.5)',          // For modals
  shadow: 'rgba(0, 0, 0, 0.1)',           // For shadows
  highlight: 'rgba(0, 102, 255, 0.1)',    // For selection
  
  // Gradients
  gradientPrimary: ['#0066FF', '#00C6FF'], // Blue gradient
  gradientSuccess: ['#00C853', '#00E676'], // Green gradient
  gradientWarning: ['#FFAB00', '#FFD600'], // Yellow gradient
};

// Text variants with opacity for better readability
export const TextColors = {
  primary: `rgba(26, 26, 26, 1)`,
  secondary: `rgba(26, 26, 26, 0.7)`,
  disabled: `rgba(26, 26, 26, 0.5)`,
  inverse: `rgba(255, 255, 255, 1)`,
  inverseSecondary: `rgba(255, 255, 255, 0.7)`,
};

// Dark mode colors (optional)
export const DarkColors = {
  background: '#121212',
  card: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#BBBBBB',
  border: '#2D2D2D',
};