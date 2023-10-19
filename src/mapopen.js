import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

const mapopen = () => {
    // { navigation, route }
    // const gotoUser = () => {
    //     const { username } = route.params;
    //     navigation.navigate('User', { "username": username })
    // }
    return (
                <WebView
                    originWhitelist={['*']}
                    source={{ uri: 'https://clever-malasada-f92412.netlify.app' }}
                    style={{ flex:1, height: 800, width: 390, marginRight: 20}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}u
                    scalesPageToFit={true}
                />
    );
};

export default mapopen;