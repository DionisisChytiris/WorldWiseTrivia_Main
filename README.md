# WorldWiseTrivia

Lightweight React Native trivia app focused on geography — categories, quizzes, maps, and a contact/admin reply system.

## Features
- Category-based quizzes (Capitals, Flags, Monuments, Natural, Mixed)
- Theme (dark/light) and language (i18n) support (English, Spanish, Greek)
- Persistent user data with AsyncStorage
- Contact form with message history and admin replies
- Map view for world monuments
- Redux for state management
- Expo updates integration

## Repo layout (important files)
- App.tsx — app entry, theme/provider, navigator
- AppNavigator.js — navigation setup
- /screens
  - Home.tsx — landing screen
  - QuizScreen.js — category list
  - Drawer/DrawerContent.js — drawer UI and settings
  - BottomTabs/Templates/components/Contact.tsx — contact & messages
  - BottomTabs/WorldMonuments/Map.js — map screen
- /utils — Theme provider, EarthRotate, i18n setup
- /ReduxSetUp — redux store and slices
- /assets — images and flags

## Requirements
- Node.js (LTS)
- npm or yarn
- Expo CLI (if using Expo): `npm install -g expo-cli`
- Android/iOS simulator or physical device

## Setup (recommended for this project)
1. Clone
   git clone <repo-url>
2. Install dependencies
   cd WorldWiseTrivia_Main
   npm install
   or
   yarn
3. Start Metro / Expo
   - Expo managed:
     npx expo start -c

## Download

Get the app on:

- Google Play: [WorldWiseTrivia on Google Play](https://play.google.com/store/apps/details?id=com.worldwisetrivia.app)
- App Store: [WorldWiseTrivia on the App Store](https://apps.apple.com/us/app/world-wise-trivia/id6670754535)
