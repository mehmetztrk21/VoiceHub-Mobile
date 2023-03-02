import { Audio, Permissions } from 'expo-av';
import { useState } from 'react';

const RECORDING_DURATION = 10;

export default function RecordingVoice() {
  const [recording, setRecording] = useState(null);
  const [soundUrl, setSoundUrl] = useState(null);

  const startRecording = async () => {
    const { granted } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (granted) {
      const recording = new Audio.Recording();
      try {
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync();
        setRecording(recording);
        setTimeout(() => {
          stopRecording();
        }, RECORDING_DURATION * 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      setSoundUrl(uri);
    } catch (error) {
      console.log(error);
    }
  };

  {/*return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {soundUrl && <Text>{soundUrl}</Text>}
      <Button title="Start Recording" onPress={startRecording} disabled={recording !== null} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={recording === null} />
    </View>
  );*/}
}
