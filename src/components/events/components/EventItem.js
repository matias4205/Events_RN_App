import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import EventIcon from './EventIcon';

const EventItem = (props) => {
    return (
        <View style={styles.container}>
                <View style={styles.left}>
                    <EventIcon title={props.title} />
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.date}>{props.date.day}/{props.date.month}/{props.date.year}</Text>
                    <Text style={styles.type}>{props.type}</Text>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 1,
        marginVertical: 3,
        marginHorizontal: 3
    },
    type: {
        fontSize: 11,
        backgroundColor: '#70b124',
        borderRadius: 15,
        paddingVertical: 4,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 12,
        fontFamily: 'Roboto'
    },
    right: {
        paddingLeft: 15,
        justifyContent: 'space-between'
    },
    left: {
        alignContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Roboto'
    },
    date: {
        marginBottom: 5,
        fontFamily: 'Roboto'
    }
});

export default EventItem;