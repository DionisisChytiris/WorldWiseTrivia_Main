import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export function useSoundEffect(soundFile: any) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.setVolumeAsync(0.3);
    await sound.playAsync();
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return playSound;
}
