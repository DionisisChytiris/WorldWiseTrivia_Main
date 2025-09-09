#!/bin/bash

# Path to Expo Go APK (only needed if not installed yet)
EXPO_APK="$HOME/Downloads/ExpoGo.apk"

# List all running Android emulators
EMULATORS=$(adb devices | grep emulator | awk '{print $1}')

if [ -z "$EMULATORS" ]; then
  echo "No running emulators found. Start at least one emulator first."
  exit 1
fi

for EMU in $EMULATORS; do
  echo "Checking Expo Go on $EMU..."

  # Check if Expo Go is installed
  adb -s $EMU shell pm list packages | grep -q "host.exp.exponent"
  if [ $? -ne 0 ]; then
    echo "Expo Go not installed on $EMU. Installing..."
    adb -s $EMU install "$EXPO_APK"
  fi

  # Launch Expo Go app
  echo "Launching Expo Go on $EMU..."
  adb -s $EMU shell am start -n host.exp.exponent/.experience.HomeActivity
done

echo "Done! Expo Go should now be running on all emulators. Open your project manually once."
