import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Chat: undefined;
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const EMOJIS = ['😊', '😢', '😡', '😱', '😴', '😍'];

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Cómo te sientes hoy?</Text>

      <View style={styles.emojiContainer}>
        {EMOJIS.map((emoji) => (
          <TouchableOpacity
            key={emoji}
            onPress={() => setSelected(emoji)}
            style={[
              styles.emojiBox,
              selected === emoji && styles.selectedEmojiBox,
            ]}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selected && (
        <Text style={styles.selectionText}>
          Has seleccionado: <Text style={styles.selected}>{selected}</Text>
        </Text>
      )}

      <TouchableOpacity 
        style={[styles.button, !selected && styles.buttonDisabled]}
        onPress={() => selected && navigation.navigate('Chat')}
        disabled={!selected}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 24,
  },
  emojiContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  emojiBox: {
    backgroundColor: '#222',
    padding: 18,
    borderRadius: 14,
    margin: 6,
  },
  selectedEmojiBox: {
    backgroundColor: '#444',
    borderColor: '#00ff88',
    borderWidth: 2,
  },
  emoji: {
    fontSize: 30,
  },
  selectionText: {
    color: '#aaa',
    fontSize: 18,
    marginTop: 24,
    marginBottom: 24,
  },
  selected: {
    fontSize: 22,
    color: '#00ff88',
  },
  button: {
    backgroundColor: '#00C897',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#444',
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default HomeScreen;
