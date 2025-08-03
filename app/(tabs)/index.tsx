import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { fetchQuestions } from '../../store/slices/questionsSlice';

import { View } from '@/components/Themed';
import { wp } from '@/utils/dimensions';
import HomeHeader from '@/components/common/HomeHeader';
import SearchBar from '@/components/common/SearchBar';
import PremiumBanner from '@/components/common/PremiumBanner';
import GetStartedSection from '@/components/common/GetStartedSection';
import PlantCategoriesSection from '@/components/common/PlantCategoriesSection';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
  const dispatch = useAppDispatch();
  const { categories, loading: categoriesLoading } = useAppSelector((state) => state.categories);
  const { questions, loading: questionsLoading } = useAppSelector((state) => state.questions);

  useEffect(() => {
    // Fetch data when component mounts
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleSearchPress = () => {
    Alert.alert('Search', 'Search functionality will be implemented');
  };

  const handlePremiumPress = () => {
    Alert.alert('Premium', 'Premium upgrade functionality will be implemented');
  };

  const handleQuestionPress = (question: any) => {
    Alert.alert('Question', `Selected: ${question.title}`);
  };

  const handleCategoryPress = (category: any) => {
    Alert.alert('Category', `Selected: ${category.title}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HomeHeader />
        <SearchBar onPress={handleSearchPress} />
        <PremiumBanner onPress={handlePremiumPress} />
        
        <GetStartedSection 
          questions={questions}
          onQuestionPress={handleQuestionPress}
        />
        
        <PlantCategoriesSection 
          categories={categories}
          onCategoryPress={handleCategoryPress}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
  
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: wp(100), 
    paddingTop: wp(24)
  },
  searchSectionContainer: {
    width: wp(375), 
    height: wp(175),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(24), 
  },
  searchImageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
