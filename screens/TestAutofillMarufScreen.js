import React from 'react';
import {
  Button,
  Link,
  ScreenContainer,
  Spacer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Purchases from 'react-native-purchases';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import * as CustomTextInput from '../custom-files/CustomTextInput';
import palettes from '../themes/palettes';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const TestAutofillMarufScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      return;
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'System',
                fontSize: 36,
                fontWeight: '600',
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Welcome Back!'}
          </Text>
          {/* Subtitle */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'System',
                fontSize: 14,
                fontWeight: '400',
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'Sign in to your account to continue'}
          </Text>
        </View>
        {/* Login Form */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 24, paddingLeft: 36, paddingRight: 36 },
            dimensions.width
          )}
        >
          {/* Error Message */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.background.danger,
                fontSize: 12,
                marginBottom: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {null}
          </Text>
          {/* Email Input */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newEmailInputValue => {
              try {
                setEmail(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            autoComplete={'username'}
            keyboardType={'email-address'}
            placeholder={'Email'}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                fontFamily: 'System',
                fontWeight: '400',
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
            textContentType={'emailAddress'}
            value={email}
          />
          <Spacer left={8} right={8} bottom={12} top={12} />
          <Utils.CustomCodeErrorBoundary>
            <CustomTextInput.Index
              StyleSheet={StyleSheet}
              theme={theme}
              dimensions={dimensions}
            />
          </Utils.CustomCodeErrorBoundary>
          <Spacer left={8} right={8} bottom={24} top={24} />
          {/* Sign In Button */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                /* hidden 'Open Browser' action */
                navigation.navigate('HomepageGridScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.branding.primary,
                borderRadius: 8,
                fontFamily: 'System',
                fontWeight: '700',
                paddingBottom: 16,
                paddingTop: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Sign in'}
          >
            {'Sign Up'}
          </Button>
          <Spacer left={8} right={8} bottom={16} top={16} />
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 12,
              },
              dimensions.width
            )}
          >
            <Text accessible={true} selectable={false}>
              {'New User?'}
            </Text>
            <Spacer bottom={8} top={8} left={2} right={2} />
            {/* Sign Up Link */}
            <Link
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.branding.primary },
                dimensions.width
              )}
              title={'Sign up!'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flex: 1, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'].style,
            dimensions.width
          )}
        >
          {Constants['DONOTDELETE']}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TestAutofillMarufScreen);
