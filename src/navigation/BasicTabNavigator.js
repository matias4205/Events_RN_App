import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import { homeworkFilter, testFilter, scheduleFilter } from '../utils/eventsFilter';

import Home from '../screens/Home';

const AppNavigator = createMaterialTopTabNavigator({
    Tests: {
        screen: Home,
        params: {
            filterFunc: testFilter
        }
    },
    Homework: {
        screen: Home,
        params: {
            filterFunc: homeworkFilter
        }
    },
    Schedule: {
        screen: Home,
        params: {
            filterFunc: scheduleFilter
        }
    }
},
{
    swipeEnabled: true,
    initialRouteName: 'Tests',
    order: ['Tests', 'Homework', 'Schedule'],
    tabBarOptions: {
        tabStyle: {
            height: 55,
        },
        labelStyle: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        style: {
            backgroundColor: '#2E166F'
        },
        indicatorStyle: {
            backgroundColor: '#70B122',
            height: 4
        }
    },
    
});

export default createAppContainer(AppNavigator);