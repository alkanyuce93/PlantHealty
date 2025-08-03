import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Colors, Fonts } from '@/constants/Colors';
import { wp, hp } from '@/utils/dimensions';
import { Question } from '@/store/slices/questionsSlice';

interface GetStartedSectionProps {
  questions: Question[];
  onQuestionPress?: (question: Question) => void;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  questions,
  onQuestionPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {questions.map((question) => (
          <TouchableOpacity
            key={question.id}
            style={styles.card}
            onPress={() => onQuestionPress?.(question)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: question.image_uri }} style={styles.cardImage} />
            <BlurView 
              intensity={80} 
              tint="dark" 
              style={styles.cardOverlay}
            >
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>
                  {question.id === 1 ? (
                    <>
                      How to identify 
                      <Text style={styles.cardTitleBold}>{" "}plants easily</Text>{'\n'}
                      <Text style={styles.cardTitleBold}>with PlantApp?</Text>
                    </>
                  ) : question.id === 2 ? (
                    <>
                      <Text style={styles.cardTitleBold}>Species and varieties,</Text>{'\n'}
                      what are the differences?
                    </>
                  ) : (
                    <>
                      {question.title}{'\n'}
                      <Text style={styles.cardTitleBold}>{question.subtitle}</Text>
                    </>
                  )}
                </Text>
              </View>
            </BlurView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: hp(15),
    fontWeight: 'medium',
    fontFamily:Fonts.Rubik_500,
    color: Colors.dotActive,
    marginBottom: hp(16),
    paddingHorizontal: wp(24),
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  scrollContent: {
    paddingHorizontal: wp(24),
  },
  card: {
    width: wp(240),
    height: hp(164),
    marginRight: wp(10),
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
   
  },
  cardImage: {
    width: wp(240),
    height: hp(164),
    resizeMode: 'contain',
    borderRadius: 12,
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(66), // Approximately 40% of card height (164 * 0.4)
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: wp(14),
    overflow: 'hidden',
  },
  cameraFrame: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraFrameInner: {
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: hp(15),
    fontFamily: Fonts.Rubik_400,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 20,
    letterSpacing: -0.24,
    textAlign: 'left',
  },
  cardTitleBold: {
    fontSize: hp(15),
    fontFamily: Fonts.Rubik_500,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 20,
    letterSpacing: -0.24,
  },
});

export default GetStartedSection; 