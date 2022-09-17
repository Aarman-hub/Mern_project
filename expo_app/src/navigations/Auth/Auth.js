import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import Welcome from '../../screens/auth/Welcome';


const Auth = createNativeStackNavigator();


const AuthNav = () =>{
    return(
        <Auth.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown: false
        }}>
            <Auth.Screen name='Welcome' component={Welcome} />
            <Auth.Screen name='Register' component={Register} />
            <Auth.Screen name='Login' component={Login} />
        </Auth.Navigator>
    )
}

export default AuthNav;