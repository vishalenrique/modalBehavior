/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={{flex:1, backgroundColor:'lightgrey'}}>
        <Modal
        visible
        onRequestClose={() => { Alert.alert('Modal has been closed.')}}
        transparent>
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <View style={{backgroundColor:'white', height:500, width:300, alignItems:'center' }}>
        <Text style={{backgroundColor:'lightblue', height:30, width:300, textAlign:'center', textAlignVertical:'center', color:'white', fontSize:18}}>Modal</Text>
        <TextInput
         style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1, marginTop:10}}
          value={'textInput'}
        />
         <TextInput
          value={'textInput'}
          style={{marginTop:350, height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        />
        </View>
        </View>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
