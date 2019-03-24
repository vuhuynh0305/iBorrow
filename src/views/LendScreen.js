import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'
import { Container, Header, Content,Title, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

class LendScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Sign Up",
      headerLeft: null
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
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Lend</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmDtq24O4emp1Bc8TrDK1V9QFcZvHkOnYyYfdGl8-kHB7hdAR' }} />
              </Left>
              <Body>
                <Text>Khánh</Text>
                <Text note>80.000.000 VND</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
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

export default LendScreen