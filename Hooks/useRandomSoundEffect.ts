import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export function useRandomSoundEffect(soundFiles: any[], volume = 1.0) {
  const [loadedSounds, setLoadedSounds] = useState<Audio.Sound[]>([]);

  // Preload all sounds
  useEffect(() => {
    const loadSounds = async () => {
      const sounds: Audio.Sound[] = [];
      for (const file of soundFiles) {
        const { sound } = await Audio.Sound.createAsync(file);
        await sound.setVolumeAsync(volume);
        sounds.push(sound);
      }
      setLoadedSounds(sounds);
    };

    loadSounds();

    // Unload on cleanup
    return () => {
      loadedSounds.forEach((s) => s.unloadAsync());
    };
  }, []);

  const playRandomSound = async () => {
    if (loadedSounds.length === 0) return;
    const randomIndex = Math.floor(Math.random() * loadedSounds.length);
    const sound = loadedSounds[randomIndex];
    await sound.replayAsync(); // replayAsync is better for preloaded sounds
  };

  return playRandomSound;
}
