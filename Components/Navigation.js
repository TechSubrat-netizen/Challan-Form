
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ChalanDetails from "./ChalanDetails"
import Dashboard from "./Dashboard"

const Stack=createNativeStackNavigator()

const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="ChallanDetails">
        <Stack.Screen name="ChallanDetails" component={ChalanDetails} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation