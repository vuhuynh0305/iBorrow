import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Firebase from '../components/Firebase'
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class LoadingScreen extends React.Component {

  componentWillMount() {
    Firebase.init()
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    const auth = Firebase.isLoggedIn();
    this.props.navigation.navigate(!auth ? 'Main' : 'Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default LoadingScreen