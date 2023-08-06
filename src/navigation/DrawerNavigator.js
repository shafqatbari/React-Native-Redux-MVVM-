import React from 'react';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import { TabsNavigator } from './TabsNavigator';
import CustomDrawerContent from '../components/SideMenu/CustomeMenu';



const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    // const AgenciesStack = () => {
    //     const Stack = createStackNavigator();
    //     return (
    //         <Stack.Navigator initialRouteName="ListAgencies" screenOptions={{
    //             header: () => null,
    //         }}>
    //             <Stack.Screen name="ListAgencies" component={ListAgencies} />
    //             <Stack.Screen name="AddAgencies" component={AddAgencies} />
    //             <Stack.Screen name="AgencyDetails" component={AgencyDetails} />
    //         </Stack.Navigator>
    //     );
    // };

    return (
        <Drawer.Navigator
            drawerStyle={{
                width: 304,
                paddingTop: 0,
                backgroundColor: '#F6F8FC',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
            overlayColor="transparent"
            initialRouteName="TabsNavigator" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
        </Drawer.Navigator>
    );
};
