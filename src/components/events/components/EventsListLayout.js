import React from 'react';
import { View, StyleSheet } from 'react-native';

const EventsListLayout = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
});

export default EventsListLayout;