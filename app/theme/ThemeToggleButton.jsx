import React from 'react';
import { Switch, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from './ThemeContext';


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <TouchableOpacity  onPress={toggleTheme} style={{ marginRight: 10 }}>
      <Feather name={isDark ? 'sun' : 'moon'} size={24} color={isDark ? '#FFD700' : '#333'} />
    </TouchableOpacity>
  );
};

export default ThemeToggleButton;
