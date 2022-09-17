import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../../screens/main/Explore";
import Home from "../../screens/main/Home";
import Maps from "../../screens/main/Maps";
import Profile from "../../screens/user/Profile";
import {Ionicons} from '@expo/vector-icons';
import Settings from "../../screens/main/Settings";

const Main = createBottomTabNavigator();


const MainNav = () =>{
    return(
        <Main.Navigator initialRouteName='Home' screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName;

                if(route.name ==='Home'){
                    iconName = focused ? 'home-outline'
                    : 'ios-home-outline';
                } else if(route.name ==='Maps'){
                    iconName = focused ? 'map-outline' : 'map-outline';
                } else if(route.name ==='Settings'){
                    iconName = focused ? 'settings-outline' : 'settings-outline';
                } else if(route.name ==='Profile'){
                    iconName = focused ? 'person-outline' : 'person-outline';
                }
                return <Ionicons name={iconName} size={30} color={'red'} />;
            },
            tabBarActiveTintColor:'tamato',
            tabBarInactiveTintColor:'gray',
        })}>
            <Main.Screen name='Home' component={Home} />
            <Main.Screen name='Maps' component={Maps} />
            <Main.Screen name="Settings" component={Settings} />
            <Main.Screen name='Profile' component={Profile} />
        </Main.Navigator>
    )
}

export default MainNav;