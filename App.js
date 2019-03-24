import { LoginScreen, SignUpScreen, LoadingScreen, BorrowScreen, LendScreen, AddScreen } from './src/views';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

const AuthNavigator = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
});

const TabNavigator = createBottomTabNavigator({
  Borrow: BorrowScreen, Lend: LendScreen
})

const MainScreen = createStackNavigator({
  Add: AddScreen,
  Tab: TabNavigator,
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })



const AppSwitchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  Auth: AuthNavigator,
  Main: MainScreen
}, {
    initialRouteName: 'Loading',
  })

const App = createAppContainer(AppSwitchNavigator);

export default App;