import { hp, wp } from "@/utils/dimensions";

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  width: number;
  height: number;
}

export const featureCardsData: FeatureCard[] = [
  {
    id: '1',
    title: 'Unlimited',
    subtitle: 'Plant Identify',
    icon: require('../assets/images/scan1.png'),
    width: wp(156),
    height: hp(130),
  },
  {
    id: '2',
    title: 'Faster',
    subtitle: 'Process',
    icon: require('../assets/images/scan2.png'),
    width: wp(156),
    height: hp(130),
  },
  {
    id: '3',
    title: 'Daster',
    subtitle: 'Process',
    icon: require('../assets/images/scan2.png'),
    width: wp(156),
    height: hp(130),
  },
];

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  isPopular?: boolean;
  savePercentage?: string;
}

export const subscriptionPlansData: SubscriptionPlan[] = [
  {
    id: 'monthly',
    title: '1 Month',
    price: '$2.99',
    description: 'month, auto renewable',
  },
  {
    id: 'yearly',
    title: '1 Year',
    price: '$529,99',
    description: 'First 3 days free, then /year',
    isPopular: true,
    savePercentage: 'Save 50%',
  },
]; 