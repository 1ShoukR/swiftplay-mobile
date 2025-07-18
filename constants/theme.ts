/*
This file is for the theme of Swiftplay - the gaming dating app.
These colors are based on research for optimal engagement with gamers,
featuring purple primary colors (similar to Discord/Twitch) with mint accents.
The theme is optimized for dark mode usage with gaming audiences.
*/

const COLORS = {
	primaryDark: '#4A3B8C', // Deep Purple
	primary: '#6B46C1', // Vibrant Purple
	secondary: '#4FFFB0', // Mint Accent
	primaryLight1: '#7D5FCC', // Lighter Purple
	primaryLight2: '#8F78D7', // Even Lighter Purple
	primaryLight3: '#A191E2', // Much Lighter Purple
	primaryLight4: '#B3AAED', // Very Light Purple
	primaryLight5: '#C5C3F8', // Near-White Purple
	success: '#4ADE80', // Gaming Green
	info: '#3B82F6', // Info Blue
	danger: '#EF4444', // Error Red
	warning: '#F59E0B', // Warning Amber
	gray100: '#F7F7F7', // Off-White
	gray200: '#E5E5E5', // Light Gray
	gray300: '#D4D4D4', // Light-Medium Gray
	gray400: '#A3A3A3', // Medium Gray
	gray500: '#737373', // True Gray
	gray600: '#525252', // Dark Gray
	gray700: '#404040', // Darker Gray
	gray800: '#262626', // Almost Black
	gray900: '#171717', // Near Black
	status1: '#4ADE80', // Online/Available
	status2: '#F59E0B', // Away/Busy
	status3: '#EF4444', // Do Not Disturb
	status4: '#737373', // Offline
	status5: '#3B82F6', // In Game
	status6: '#8B5CF6', // Streaming
	tags: '#737373', // Equal to gray500
	// Convenient aliases for theme colors
	tertiary: '#525252', // Equal to gray600
	black: '#000000', // True Black (OLED)
	lightModeText: '#4A3B8C', // Deep Purple for light mode
	white: '#FFFFFF', // White
	lightWhite: '#F3EFFF', // Light Lavender
	lightGray: '#E5E5E5', // Equal to gray200
	gray2: '#D4D4D4', // Equal to gray300
	gray: '#A3A3A3', // Equal to gray400
	// Gaming-specific variations
	primaryLight: '#E8E0FF', // Very Light Purple
	secondaryDark: '#3ACC8B', // Dark Mint
	secondaryBackground: '#4FFFB01A', // Mint with 10% opacity
	successDark: '#22C55E', // Darker Gaming Green
	successBackground: '#4ADE801A', // Gaming Green with 10% opacity
	successBadgeDark: '#16A34A', // Even Darker Gaming Green
	successBadgeBackground: '#4ADE8026', // Gaming Green with 15% opacity
	infoDark: '#2563EB', // Darker Info Blue
	infoBackground: '#3B82F61A', // Info Blue with 10% opacity
	dangerDark: '#DC2626', // Darker Error Red
	dangerBackground: '#EF44441A', // Error Red with 10% opacity
	warningDark: '#D97706', // Darker Warning Amber
	warningBackground: '#F59E0B1A', // Warning Amber with 10% opacity
	draggableHoverBackground: '#E8E0FF', // Equal to primaryLight
	draggableHoverIcon: '#4A3B8C', // Equal to primaryDark
	linkText: '#6B46C1', // Equal to primary
	mutedText: '#737373', // Equal to gray500
	inputPlaceholder: '#A3A3A3', // Equal to gray400
	cardBorder: '#262626', // Dark border for dark mode
	// Rank colors (Valorant-inspired)
	rankIron: '#4B4B4B',
	rankBronze: '#A57E5A',
	rankSilver: '#B8B8B8',
	rankGold: '#FFD700',
	rankPlatinum: '#4FC3F7',
	rankDiamond: '#B39DDB',
	rankImmortal: '#E91E63',
	rankRadiant: '#FFFB8C',
} as const;

type ColorTheme = keyof typeof COLORS;

const FONT = {
	branding: 'System', // Will be replaced with custom gaming font
};

const SIZES = {
	xSmall: 10,
	small: 12,
	medium: 16,
	large: 20,
	xLarge: 24,
	xxLarge: 32,
};

const SHADOWS = {
	small: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	medium: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.84,
		elevation: 5,
	},
};

export { COLORS, FONT, SIZES, SHADOWS, ColorTheme };