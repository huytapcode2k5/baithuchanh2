import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Image } from 'react-native'

// Import Screens
import HomeScreen from './Screens/HomeScreen'
import ScanScreen from './Screens/ScanScreen'
import YourCartScreen from './Screens/YourCartScreen'
import PaymentScreen from './Screens/PaymentScreen'
import Payment_SucsessScreen from './Screens/Payment_SucsessScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

// Bottom Tab
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {

          let iconSource

          if (route.name === "Home") {
            iconSource = require("./Ảnh/Group 152.png")
          } else if (route.name === "Notification") {
            iconSource = require("./Ảnh/Group 153.png")
          } else if (route.name === "Scan") {
            iconSource = require("./Ảnh/Vector.png")
          } else if (route.name === "History") {
            iconSource = require("./Ảnh/Group 154.png")
          } else if (route.name === "Cart") {
            iconSource = require("./Ảnh/Card Icon.png")
          }

          const isMiddle = route.name === "Scan"

          return (
            <View style={{
              backgroundColor: focused && !isMiddle ? "#ddeeff" : "transparent",
              borderRadius: 12,
              padding: isMiddle ? 0 : 8,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Image
                source={iconSource}
                style={{
                  width: isMiddle ? 28 : 22,
                  height: isMiddle ? 28 : 22,
                  resizeMode: "contain",
                  tintColor: focused ? "#4a90d9" : "#aaaaaa",
                }}
              />
            </View>
          )
        },

        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 10,
          height: 65,
          paddingBottom: 10,
          paddingTop: 8,
        }
      })}
    >

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={HomeScreen} />
      <Tab.Screen name="Cart" component={YourCartScreen} />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Success"
          component={Payment_SucsessScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}