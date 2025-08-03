import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  Tabs } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { wp } from '@/utils/dimensions';
import HomeSvgIcon from '@/components/common/HomeSvgIcon';
import DiagnoseSvgIcon from '@/components/common/DiagnoseSvgIcon';
import CameraSvgIcon from '@/components/common/CameraSvgIcon';
import GardenSvgIcon from '@/components/common/GardenSvgIcon';
import ProfileSvgIcon from '@/components/common/ProfileSvgIcon';


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
