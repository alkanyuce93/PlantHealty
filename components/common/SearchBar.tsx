import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {  Fonts } from '@/constants/Colors';
import { wp } from '@/utils/dimensions';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search for plants',
  value,
  onChangeText,
  onPress,
}) => {
  return (
    <ImageBackground
      source={require('@/assets/images/searchBarBE.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#999"
            value={value}
            onChangeText={onChangeText}
            editable={!onPress}
          />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    marginHorizontal: wp(-23),
  },
  container: {
    width: '100%',
    marginVertical: wp(16),
    borderRadius: wp(12),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderRadius: wp(12),
    paddingHorizontal: wp(16),
    paddingVertical: wp(12),
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    width: wp(327),
    height: wp(44),
    alignSelf: 'center',
  },
  searchIcon: {
    marginRight: wp(12),
  },
  input: {
    flex: 1,
    fontSize: wp(15.5),
    color: "rgba(175, 175, 175, 1)",
    fontFamily: Fonts.Rubik_400,
  },
});

export default SearchBar;