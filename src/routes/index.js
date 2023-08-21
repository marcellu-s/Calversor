import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Temperature from '../pages/Temperature';
import Money from '../pages/Money';

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="Temperature" component={Temperature} />
                <Stack.Screen name="Money" component={Money} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;