import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert,
    FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '../../store/hooks';
import { saveOnboardingStatus } from '../../store/slices/onboardingSlice';
import { Colors, Fonts } from '../../constants/Colors';
import { hp, wp } from '../../utils/dimensions';
import { featureCardsData, subscriptionPlansData } from '../../data/onboardingMockData';

export default function OnboardingStep4() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

    const handleContinue = async () => {
        await dispatch(saveOnboardingStatus(true));
        router.replace('/(tabs)');
    };

    const handleTermsPress = () => {
        Alert.alert('Terms', 'Terms content will be displayed here.');
    };

    const handlePrivacyPress = () => {
        Alert.alert('Privacy', 'Privacy content will be displayed here.');
    };

    const handleRestorePress = () => {
        Alert.alert('Restore', 'Restore purchases functionality.');
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "rgba(16, 30, 23, 1)"
            }}
        >
            <ImageBackground
                source={require('../../assets/images/Image.png')}
                style={styles.backgroundImage}
                resizeMode="contain"
            >
                {/* Close button */}
                <TouchableOpacity style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>

                {/* Central plant image with viewfinder */}
                <View style={styles.plantContainer}>
                    <Image

                        style={styles.plantImage}
                        resizeMode="contain"
                    />

                </View>

                {/* Title section */}
                <View style={styles.titleSection}>
                    <Text style={styles.title}>
                        <Text style={styles.titleMain}>PlantApp</Text>
                        <Text style={styles.titlePremium}> Premium</Text>
                    </Text>
                    <Text style={styles.subtitle}>Access All Features</Text>
                </View>

                {/* Feature cards */}
                <View>
                    <FlatList
                        data={featureCardsData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.featureCardsContainer}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.featureCard}>
                                <Image source={item.icon} style={styles.featureIcon} resizeMode="contain" />
                                <Text style={styles.featureTitle}>{item.title}</Text>
                                <Text style={styles.featureSubtitle}>{item.subtitle}</Text>
                            </View>
                        )}
                    />
                    <View style={styles.subscriptionOptions}>
                        {subscriptionPlansData.map((plan) => (
                            <TouchableOpacity
                                key={plan.id}
                                onPress={() => setSelectedPlan(plan.id as 'monthly' | 'yearly')}
                            >
                                {selectedPlan === plan.id ? (
                          <LinearGradient
                          colors={['rgba(16, 30, 23, 1)', 'rgba(40, 175, 110, 0.2)']}
                          start={{ x: 0, y: 0.1 }}
                          end={{ x: 0, y: 0.1 }}
                          locations={[0.0, 0.9]}
                          style={[styles.subscriptionOption, { borderWidth: 1.5, borderColor: "rgba(40, 175, 110, 1)", }]}
                        >
                                        <View style={[styles.radioButton, styles.radioButtonSelected]}>
                                            <View style={styles.radioButtonInner} />
                                        </View>
                                        <View style={styles.subscriptionText}>
                                            <Text style={styles.subscriptionTitle}>{plan.title}</Text>
                                            <Text style={styles.subscriptionPrice}>
                                                {plan.id === 'yearly' ? plan.description : (
                                                    <>
                                                        $2.99/
                                                        <Text style={styles.subscriptionPriceLight}>month</Text>
                                                        <Text style={styles.subscriptionPriceRegular}>, auto renewable</Text>
                                                    </>
                                                )}
                                            </Text>
                                        </View>
                                        {plan.isPopular && plan.savePercentage && (
                                            <View style={styles.saveBadge}>
                                                <Text style={styles.saveBadgeText}>{plan.savePercentage}</Text>
                                            </View>
                                        )}
                                    </LinearGradient>
                                ) : (
                                    <View style={[styles.subscriptionOption, {
                                        borderWidth: 0.5,
                                        borderColor: "rgba(255, 255, 255, 0.1)",
                                    }]}>
                                        <View style={styles.radioButton}>
                                        </View>
                                        <View style={styles.subscriptionText}>
                                            <Text style={styles.subscriptionTitle}>{plan.title}</Text>
                                            <Text style={styles.subscriptionPrice}>
                                                {plan.id === 'yearly' ? plan.description : (
                                                    <>
                                                        $2.99/
                                                        <Text style={styles.subscriptionPriceLight}>month</Text>
                                                        <Text style={styles.subscriptionPriceRegular}>, auto renewable</Text>
                                                    </>
                                                )}
                                            </Text>
                                        </View>
                                        {plan.isPopular && plan.savePercentage && (
                                            <View style={styles.saveBadge}>
                                                <Text style={styles.saveBadgeText}>{plan.savePercentage}</Text>
                                            </View>
                                        )}
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{
                        paddingHorizontal: wp(20),
                        height:hp(52),
                      
                        marginTop:hp(13)
                    }}>
                        <TouchableOpacity 
                            style={[styles.subscriptionOption, {
                                backgroundColor: "#28AF6E",
                                alignItems: "center",
                                justifyContent: "center",
                                height: hp(52)
                            }]}
                            onPress={handleContinue}
                        >
                            <Text style={{
                                fontSize: wp(15),
                                color: "#fff",
                                fontFamily: Fonts.Rubik_700,
                            }}>Try free for 3 days</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <Text style={{
                            color: "rgba(255, 255, 255, 0.52)",
                            textAlign: "center",
                            fontSize: wp(9),
                            fontFamily: Fonts.Rubik_300,
                            lineHeight: wp(11),
                            marginTop:hp(10),
                            marginBottom:hp(5),
                          
                            paddingHorizontal: wp(20),
                        }}>
                        After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                       
                    }}>
                        <TouchableOpacity>
                            <Text style={styles.footerText}>
                                Terms  {' '}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.footerText}>
                        •  {' '}  
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerText}>
                        Privacy{' '}  
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.footerText}>
                        •  {' '}
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerText}>
                                Restore
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: wp(378),
        height: hp(571),
        marginTop: hp(-40)
    },
    closeButton: {
        position: 'absolute',
        top: hp(100),
        right: wp(20),
        width: wp(24),
        height: wp(24),
        borderRadius: wp(15),
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: wp(10),
        fontWeight: 'bold',
    },
    plantContainer: {
        alignItems: 'center',
        marginTop: hp(120),
        position: 'relative',
    },
    plantImage: {
        width: wp(200),
        height: hp(250),
    },
    viewfinder: {
        position: 'absolute',
        width: wp(180),
        height: wp(180),
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderStyle: 'dashed',
        borderRadius: wp(10),
    },
    titleSection: {
        alignItems: 'flex-start',
        marginTop: hp(-50),
        marginLeft: wp(24),
    },
    title: {
        fontSize: wp(30),
        color: '#FFFFFF',
        fontFamily: Fonts.VisbyCF_800,
        textAlign: 'left',
        marginBottom: hp(8),
        lineHeight: wp(30),
        letterSpacing: 0,

    },
    titleMain: {
        fontSize: wp(30),
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: Fonts.VisbyCF_800,
        lineHeight: wp(30),
        letterSpacing: 0,
        fontWeight: '900',
    },
    titlePremium: {
        fontSize: wp(24),
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: Fonts.Rubik_400,
        lineHeight: wp(24),
        letterSpacing: 0,
        textTransform: 'capitalize',
        fontWeight: '400',
    },
    subtitle: {
        fontSize: wp(17),
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: Fonts.Rubik_300,
        textAlign: 'left',
        lineHeight: wp(24),
        letterSpacing: wp(0.38),
    },
    featureCardsContainer: {
        paddingHorizontal: wp(20),
        marginTop: hp(20),
    },
    featureCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: wp(14),
        padding: wp(16),
        marginHorizontal: wp(4),
        alignItems: 'flex-start',
        width: wp(156),
        height: hp(130),
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: hp(4) },
        shadowOpacity: 1,
        shadowRadius: wp(16),
        elevation: 8,
    },
    featureIcon: {
        width: wp(36),
        height: wp(36),
        marginBottom: hp(16)
    },

    featureTitle: {
        fontSize: wp(18),
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: Fonts.Rubik_700,
        textAlign: 'center',
        marginBottom: hp(4),
    },
    featureSubtitle: {
        fontSize: wp(14),
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: Fonts.Rubik_400,
        textAlign: 'center',
    },
    subscriptionOptions: {
        paddingHorizontal: wp(20),
        marginTop: hp(24),
    },
    subscriptionOption: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: wp(14),
        padding: wp(16),
        marginBottom: hp(16),
        height: hp(60)
    },
    radioButton: {
        width: wp(24),
        height: wp(24),
        borderRadius: wp(24),

        backgroundColor: "rgba(255, 255, 255, 0.15)",
        marginRight: wp(12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        borderColor: Colors.primaryGreen,
        backgroundColor: Colors.primaryGreen,
    },
    radioButtonInner: {
        width: wp(8),
        height: wp(8),
        borderRadius: wp(4),
        backgroundColor: '#FFFFFF',
    },
    subscriptionText: {
        flex: 1,
    },
    subscriptionTitle: {
        fontSize: wp(16),
        color: '#FFFFFF',
        fontFamily: Fonts.Rubik_600,
        marginBottom: hp(2),
    },
    subscriptionPrice: {
        fontSize: wp(14),
        color: '#FFFFFF',
        fontFamily: Fonts.Rubik_400,
        opacity: 0.8,
    },
    subscriptionPriceLight: {
        fontSize: wp(14),
        color: '#FFFFFF',
        fontFamily: Fonts.Rubik_300,
        opacity: 0.8,
    },
    subscriptionPriceRegular: {
        fontSize: wp(14),
        color: '#FFFFFF',
        fontFamily: Fonts.Rubik_400,
        opacity: 0.8,
    },
    saveBadge: {
        backgroundColor: Colors.primaryGreen,
        borderBottomLeftRadius: wp(20),
        borderTopRightRadius: wp(14),
        width: wp(77),
        height: hp(26),
        paddingVertical: hp(4),
        position: "absolute",
        right: wp(-1),
        top: hp(-1),
        justifyContent: "center",
        alignItems: "center"
    },
    saveBadgeText: {
        fontSize: wp(12),
        color: '#FFFFFF',
        fontFamily: Fonts.Rubik_600,
    },
    footer: {
        position: 'absolute',
        bottom: hp(45),
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingHorizontal: wp(20),
        backgroundColor: 'rgba(16, 30, 23, 1)',
    },
    button: {
        marginBottom: hp(20),
        alignSelf: "center",
        height: hp(52),
        width: wp(327)
    },
    legalText: {
        fontSize: wp(11),
        color: '#666666',
        textAlign: 'center',
        lineHeight: wp(15),
        marginBottom: hp(15),
        fontFamily: Fonts.Rubik_400,
        paddingHorizontal: wp(20),
    },
    legalLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(20),
    },
    legalLink: {
        fontSize: wp(12),
        color: '#666666',
        fontFamily: Fonts.Rubik_400,
    },
    legalLinkSeparator: {
        fontSize: wp(12),
        color: '#666666',
        marginHorizontal: wp(8),
    },
    footerText: {
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "center",
        fontSize: wp(11),
        fontFamily: Fonts.Rubik_400,
        lineHeight: wp(18),
    }
}); 