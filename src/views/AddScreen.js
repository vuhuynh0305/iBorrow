import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native'
import firebase from 'firebase'
import { Container, Header, Content, Title, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Styles from '../styles/Styles';
// import { SegmentedControls } from 'react-native-radio-buttons'
import { SegmentedControls } from '../components';
const options = [
  {
    label: 'Borrow',
    value: 'borrow'
  },
  {
    label: 'Lend',
    value: 'lend'
  }
]

const categories = [
  {
    label: 'Money',
    value: 'money',
    file: require('../../assets/img/money.png'),
    note: '80.000.000 VND'
  },
  {
    label: 'Book',
    value: 'book',
    file: require('../../assets/img/book.png'),
    note: 'Can build a library'
  }, {
    label: 'Machine',
    value: 'machine',
    file: require('../../assets/img/machine.png'),
    note: 'ATM'
  }, {
    label: 'Furniture',
    value: 'furniture',
    file: require('../../assets/img/furniture.png'),
    note: 'Everything in house'
  }, {
    label: 'Vehicle',
    value: 'vehicle',
    file: require('../../assets/img/vehicle.png'),
    note: 'BMW 740Li'
  }, {
    label: 'Other',
    value: 'other',
    file: require('../../assets/img/other.png'),
    note: 'Love'
  },
]

class AddScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      selectedOption: 'borrow',
      selectedIndex: 0
    }
  }

  setSelectedOption = (selectedOption) => {
    console.log(selectedOption, 'option')
    this.setState({ selectedOption });
  }

  select = () => {

  }

  render() {
    const { selectedOption } = this.state
    return (
      <View style={Styles.viewPadding}>
        <Text>Type:</Text>
        {/* <SegmentedControls
          options={options}
          onSelection={this.setSelectedOption}
          selectedOption={this.state.selectedOption}
          extractText={(option) => option.label}
          testOptionEqual={(selectedValue, option) => this.state.selectedOption == option.value}
          renderOption={(option, selected) => {
            return (
              <View style={[{ height: 40 }, Styles.rowOrder]}>
                <Text style={Styles.mediumFontSize}>{option.label}</Text>
              </View>
            )
          }}
        /> */}
        <SegmentedControls
          options={options}
          selectedOption={selectedOption}
          onChange={this.setSelectedOption}
          fontSize={20}
        />
        <View>
          <Text style={{ fontWeight: 'bold', color: '#ef5f31', fontSize: 20 }}>Trương Quốc Khánh</Text>
          <Text>Categories:</Text>
          <List>
            {
              categories.map((item, idx) => {
                return <ListItem avatar key={idx}>
                  <Left>
                    <Image source={item.file} />
                  </Left>
                  <Body>
                    <Text>{item.label}</Text>
                    <Text note>{item.note}</Text>
                  </Body>
                  <Right>
                    <Text note>yesterday</Text>
                  </Right>
                </ListItem>
              })
            }

          </List>
        </View>
      </View>
    )
  }
}
const componentStyles = StyleSheet.create({
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
  },
  radioGroupContainer: {
    display: 'flex',
    // justifyContent: ''
  },
  radioGroupButton: {
    width: '45%'
  }
})

export default AddScreen