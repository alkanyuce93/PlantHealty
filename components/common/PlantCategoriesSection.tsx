import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Colors, Fonts } from '@/constants';
import { wp, hp } from '@/utils';
import { Category } from '@/store';

interface PlantCategoriesSectionProps {
  categories: Category[];
  onCategoryPress?: (category: Category) => void;
}

const PlantCategoriesSection: React.FC<PlantCategoriesSectionProps> = ({
  categories,
  onCategoryPress,
}) => {
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => onCategoryPress?.(item)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image.url }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories.slice(0, 8)}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dotActive,
    marginBottom: hp(16),
    paddingHorizontal: wp(24),
  },
  listContent: {
    paddingHorizontal: wp(24),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: hp(16),
    gap: wp(12),
  },
  categoryCard: {
    width: wp(158),
    height: hp(152),
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 0.5,
    borderRadius: 12,
    backgroundColor: 'rgba(244, 246, 246, 1)',
    overflow: 'hidden',
    position: 'relative',
  },
  categoryImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: wp(165),
    height: hp(160),
    resizeMode: 'contain',
  },
  categoryTitle: {
    fontSize: hp(16),
    fontFamily: Fonts.Rubik_500,
    fontWeight: '500',
    color: 'rgba(19, 35, 27, 1)',
    textAlign: 'left',
    paddingHorizontal: wp(16),
    paddingTop: hp(16),
    lineHeight: 21,
    letterSpacing: -0.32,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    maxWidth: wp(85),
  },
});

export default PlantCategoriesSection; 