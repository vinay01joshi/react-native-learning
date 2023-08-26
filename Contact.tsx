import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet ,Alert } from 'react-native';

const Contact = ({navigation}:any) => {
    const [formName, setFormName] = useState('Enter Name');
    const [formEail, setFormEmail] = useState('Enter Email');
    const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
    const [formMessage, setFormMessage] = useState('Let us know whats on your mind');


    const submit = () => {
        if(!formName || !formEail || !formMessage) {
            Alert.alert('Please enter the info for all required field.');
        } else {
            Alert.alert(`Thank you ${formName}`);
            navigation.navigate('Home');
        }
    }

    return(
        <View style={styles.form}>
            <Text style={styles.labels}>
                Name: *required
            </Text>
            <TextInput 
                style={styles.txtinput}
                onChangeText={name => setFormName(name)}
                value={formName}
                autoCapitalize='words'
                selectTextOnFocus={true}
             />
             <Text style={styles.labels}>
                Email: *required
             </Text>
             <TextInput 
                style={styles.txtinput}
                onChangeText={email => setFormEmail(email)}
                value={formEail}
                selectTextOnFocus={true}
             />
             <Text style={styles.labels}>Phone:</Text>
             <TextInput 
                style={styles.txtinput}
                onChangeText={phoneNumber => setFormPhoneNumber(phoneNumber)}
                value={formPhoneNumber}
                selectTextOnFocus={true}
             />
             <Text style={styles.labels}>
                Message: *required
             </Text>
             <TextInput 
                style={styles.multitxtinput}
                onChangeText={message => setFormMessage(message)}
                value={formMessage}
                multiline={true}
                numberOfLines={3}
                selectTextOnFocus={true}
             />
             <Button
                title='Contact Us'
                color='#708090'
                onPress={submit}
             />
        </View>
    );
}


const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 18
    },
    txtinput:{
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '80%',
        paddingBottom: 15
    },
    multitxtinput: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-Regular',
        width: '90%',
        height: 120,
        marginBottom: 50
    },
    labels: {
        fontFamily: 'Ubuntu-Regular'
    }
});

export default Contact;