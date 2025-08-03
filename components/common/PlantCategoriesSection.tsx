import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/utils/dimensions';
import { Category } from '@/store/slices/categoriesSlice';

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
      <Text style={styles.title}>Plant Categories</Text>
      <FlatList
        data={categories.slice(0, 8)} // Show only first 8 categories
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
    color: Colors.mainText,
    marginBottom: 16,
    paddingHorizontal: wp(24),
  },
  listContent: {
    paddingHorizontal: wp(24),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: wp(160),
    height: hp(160),
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.mainText,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

export default PlantCategoriesSection; 