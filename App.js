import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

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
        tabBarIcon: ({ color, size }) => {

          let iconName

          if (route.name === "Home") {
            iconName = "home"
          }
          else if (route.name === "Scan") {
            iconName = "camera"
          }
          else if (route.name === "Cart") {
            iconName = "shopping-cart"
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />
        },

        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        headerShown: false
      })}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Scan"
        component={ScanScreen}
      />

      <Tab.Screen
        name="Cart"
        component={YourCartScreen}
      />

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