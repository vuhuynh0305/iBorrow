import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'

class SignUpScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Sign Up"
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }

  handleSignUp = () => {
    const {email, password} = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.props.navigation.navigate('Main')
    }).catch(error => this.setState({errorMessage: error}))
  }

  render() {
    const {email, password, errorMessage} = this.state
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {errorMessage &&
          <Text style={{ color: 'red' }}>
            {errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

export default SignUpScreen