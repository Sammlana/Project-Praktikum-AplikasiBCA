import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View, Image } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#0000cd',
            headerStyle: {
              backgroundColor: '#191d20',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 10,},
            tabBarIconStyle: {
              marginBottom: -10,
            },
            tabBarLabelPosition: 'below-icon',
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
              backgroundColor: '#191d20',
              height:60
            },
        }}
        >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: () => (
            <Image
              source={{ uri: 'https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-BCA-PNG.png' }}
              style={{ width: 100, height: 100  }}
              resizeMode="contain"
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}/>   
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: 'green',
                  marginRight: 8,
                }}
              />
              <Ionicons name="exit-outline" size={24} color="#fff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          title: 'Transaksi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'wallet' : 'wallet-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Notifikasi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="akunsaya"
        options={{
          title: 'Akun Saya',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
