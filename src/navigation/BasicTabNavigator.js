import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import { homeworkFilter, testFilter, scheduleFilter } from '../utils/eventsFilter';

import Home from '../screens/Home';

const AppNavigator = createMaterialTopTabNavigator({
    Tests: {
        screen: Home,
        params: {
            filterFunc: testFilter,
            dick: 'aaaaaaa'
        }
    },
    Homework: {
        screen: Home,
        params: {
            filterFunc: homeworkFilter,
            dick: 'aaaaaaa'
        }
    },
    Schedule: {
        screen: Home,
        params: {
            filterFunc: scheduleFilter,
            dick: 'aaaaaaa'
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
            backgroundColor: '#26364c'
        },
        indicatorStyle: {
            backgroundColor: '#70B122'
        }
    },
    
});

export default createAppContainer(AppNavigator);