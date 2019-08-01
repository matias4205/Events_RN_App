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
        marginTop: 15,
        paddingHorizontal: 10,
        flex: 1
    }
});

export default EventsListLayout;