import React from 'react'
import { StyleSheet, TextInput, View  } from 'react-native'
import { Container, Header, Content, Title,Button, List, ListItem, Left,Icon, Body, Right, Thumbnail, Text } from 'native-base';
import Firebase from '../components/Firebase';

class BorrowScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      password: '',
      errorMessage: null,
      types: []
    }
  }

  componentDidMount() {
    this.getTypes();
  }

  getTypes = () => {
    Firebase.getData('types', this.state.types).then(data => {
      this.setState({
        types: [...data]
      })
    })
  }

  update = () => {
    const id = 'pmex3sePwiFd9Xl74FyN'
    const { input } = this.state
    db.collection("types").doc(id).set({
      name: input,
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  gotoAdd = () => {
    this.props.navigation.navigate('Add')
  }

  render() {
    const { types, input } = this.state
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Borrow</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.gotoAdd}>
              <Icon name='ios-add' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmDtq24O4emp1Bc8TrDK1V9QFcZvHkOnYyYfdGl8-kHB7hdAR' }} />
              </Left>
              <Body>
                <Text>Khánh {types.length}</Text>
                <Text note>70.000.000 VND</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            {
              types.map((type, index) => {
                return <ListItem avatar key={index}>
                  <Left>
                    <Thumbnail source={{ uri: type.item.iconUrl }} />
                  </Left>
                  <Body>
                    <Text>{type.item.name}</Text>
                    <Text note>70.000.000 VND</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
              })
            }
          </List>
        </Content>
        <TextInput
          autoCapitalize="none"
          onChangeText={input => this.setState({ input })}
          value={input}
        />
        <Button title="CHange" onPress={this.update} />
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

export default BorrowScreen