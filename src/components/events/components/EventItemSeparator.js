import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventItemSeparator = (props) => {
    return (
        <View style={ styles.separator }
        />
    );
};

const styles = StyleSheet.create({
    separator: {
        marginBottom: 8
    }
});

export default EventItemSeparator;