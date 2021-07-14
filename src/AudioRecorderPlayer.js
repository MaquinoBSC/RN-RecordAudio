import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export default function AudioRecorderPlayer(){
    console.log(RESULTS.UNAVAILABLE);

    const checkPermissions= async()=> {
        if(Platform.OS === 'android'){
            try {
                await request(PERMISSIONS.ANDROID.RECORD_AUDIO)
                await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
                await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
                await request(PERMISSIONS.ANDROID.CAMERA)
            } catch (error) {
                console.log(error);
            }
        }


        check(PERMISSIONS.ANDROID.RECORD_AUDIO)
            .then((result)=> {
                console.log(result);
            })
        
        check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            .then((result)=> {
                console.log(result);
            })

        check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
            .then((result)=> {
                console.log(result);
            })

        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result)=> {
                console.log(result);
            })
    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Audio Recorder Player</Text>
            <View style={styles.subcontainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> checkPermissions()}
                >
                    <Text style={styles.textButton}>Probar permisos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: 'auto',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    subcontainer: {
        marginVertical: 10,
        width: '100%',
        height: 'auto',
    },

    button: {
        backgroundColor: 'cyan',
        width: '50%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    textButton: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
    }
})