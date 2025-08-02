import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';

import Colors, { Colors as DesignColors } from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { wp } from '@/utils/dimensions';
import HomeSvgIcon from '@/components/common/HomeSvgIcon';
import DiagnoseSvgIcon from '@/components/common/DiagnoseSvgIcon';
import CameraSvgIcon from '@/components/common/CameraSvgIcon';
import GardenSvgIcon from '@/components/common/GardenSvgIcon';
import ProfileSvgIcon from '@/components/common/ProfileSvgIcon';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      // Seçili sekmenin başlık rengini ayarlıyoruz
      tabBarActiveTintColor: "rgba(40, 175, 110, 1)",
      tabBarInactiveTintColor: '#999',
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        paddingBottom: 10,
        paddingTop: 10,
        height: wp(90),
      },
      // Disable the static render of the header on web
      // to prevent a hydration error in React Navigation v6.
      headerShown: useClientOnlyValue(false, true),
    }}>
      <Tabs.Screen
        name="index"
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeSvgIcon isSelected={focused} size={28} />
          ),
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="diagnose"
        options={({ navigation }) => ({
          title: 'Diagnose',
          tabBarIcon: ({ focused }) => (
            <DiagnoseSvgIcon isSelected={focused} size={28} />
          ),
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: '',
          tabBarIcon: () => <CameraSvgIcon size={90} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="garden"
        options={({ navigation }) => ({
          title: 'My Garden',
          tabBarIcon: ({ focused }) => (
            <GardenSvgIcon isSelected={focused} size={28} />
          ),
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name="profile"
        options={({ navigation }) => ({
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <ProfileSvgIcon isSelected={focused} size={28} />
          ),
          headerShown: false,
        })}
      />
    </Tabs>
  );
}
