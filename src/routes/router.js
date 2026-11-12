import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StartScreen } from "../screens/StartScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { DetailsProducts } from "../screens/DetailsProducts";

export const AppRouter = () => {
   
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="start" component={StartScreen}/>
                <Stack.Screen name="home" component={HomeScreen}/>
                <Stack.Screen name="products" component={ProductsScreen}/>
                <Stack.Screen name="details" component={DetailsProducts}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}