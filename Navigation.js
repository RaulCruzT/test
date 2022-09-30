import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

//screens
import FiltroManual1 from "./screens/FiltroManual/FiltroManual1";
import FiltroManual2 from "./screens/FiltroManual/FiltroManual2";
import FiltroManual3 from "./screens/FiltroManual/FiltroManual3";
import FiltroManual4 from "./screens/FiltroManual/FiltroManual4";
import FiltroManualResultado1 from "./screens/FiltroManual/FiltroManualResultado1";
import FiltroAutomatizado1 from "./screens/FiltroAutomatizado/FiltroAutomatizado1";
import Publicar1 from "./screens/Publicar/Publicar1";
import Usuario1 from "./screens/Usuario/Usuario1";

//icons
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const FiltroManualStackNavigator = createNativeStackNavigator();

function MyStack() {
    return(
        <FiltroManualStackNavigator.Navigator
            initialRouteName="Filtro Manual 1"
            screenOptions={{
                headerTitleStyle: styles.headerTitleStyle,
                headerStyle: {
                    backgroundColor: "#F3845C",
                    
                }
            }}
        >
            <FiltroManualStackNavigator.Screen
                name="Filtro Manual 1"
                options={{ title: 'Filtro Manual' }}
                component={FiltroManual1}
            />
            <FiltroManualStackNavigator.Screen
                name="Filtro Manual 2"
                options={{ title: 'Filtro Manual', headerTintColor: "#fff", headerBackTitleVisible: false }}
                component={FiltroManual2}
            />
            <FiltroManualStackNavigator.Screen
                name="Filtro Manual 3"
                options={{ title: 'Filtro Manual', headerTintColor: "#fff", headerBackTitleVisible: false }}
                component={FiltroManual3}
            />
            <FiltroManualStackNavigator.Screen
                name="Filtro Manual 4"
                options={{ title: 'Filtro Manual', headerTintColor: "#fff", headerBackTitleVisible: false }}
                component={FiltroManual4}
            />
            <FiltroManualStackNavigator.Screen
                name="Filtro Manual Resultado"
                options={{ title: 'Filtro Manual', headerTintColor: "#fff", headerBackTitleVisible: false }}
                component={FiltroManualResultado1}
            />
        </FiltroManualStackNavigator.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
            <Tab.Navigator
                initialRouteName="Filtro Manual"
                screenOptions={{
                    tabBarActiveTintColor: "#FF6600",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: "10%"
                    },
                    headerTitleStyle: styles.headerTitleStyle,
                    headerStyle: {
                        backgroundColor: "#F3845C",
                        
                    },
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="Filtro Manual"
                    component={MyStack}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <Feather name="filter" size={30} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Filtro Automatizado"
                    component={FiltroAutomatizado1}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <FontAwesome name="cogs" size={30} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Publicar"
                    component={Publicar1}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <Entypo name="plus" size={35} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Usuario"
                    component={Usuario1}
                    options = {{
                        tabBarIcon: ({color,size}) => (
                            <AntDesign name="user" size={30} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
    );
}

function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
    },
});

export default Navigation;