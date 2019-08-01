import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const HomeLayout = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {props.children}
            </View>
            
            <View style={styles.footer}>
                { props.footer }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        backgroundColor: '#EAEAEA',
        paddingVertical: 15,
        elevation: 1
    }
})

export default HomeLayout;