import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { colors } from './tokens'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: Platform.OS === 'ios',
	headerBlurEffect: Platform.OS === 'ios' ? 'prominent' : undefined,
	headerShadowVisible: false,
	headerStyle: {
		backgroundColor: colors.background,
	},
}
