import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Fonts } from '../../../utils/fonts';
import subjectAssests from '../../../utils/eventIconAssets';

const removeSubject = (title) => {
    title = title.toLowerCase();
    for(let item of Object.keys(subjectAssests) ){
        if(title.indexOf(item) !== -1){
            return item;
        }
    }

    return 'undefined'
}

const EventIcon = (props) => {
    const subject = removeSubject(props.title);
    
    return (
        <View style={[styles.container, { backgroundColor: subjectAssests[subject].color }]}>
            <Text style={ styles.text }>{ subjectAssests[subject].letter }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 38,
        fontFamily: Fonts.MontSerrat_Light
    }
});

export default EventIcon;