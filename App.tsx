import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const emociones = ['😊', '😠', '😢'];

export default function App() {
  const [emoji, setEmoji] = useState('🎭');

  const mostrarEmocion = () => {
    const index = Math.floor(Math.random() * emociones.length);
    setEmoji(emociones[index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toca para saber tu destino</Text>
      <Text style={styles.emoji}>{emoji}</Text>
      <Pressable onPress={mostrarEmocion} style={styles.button}>
        <Text style={styles.buttonText}>Mostrar emoción</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 90,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
