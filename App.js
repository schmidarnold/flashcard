import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, AsyncStorage } from 'react-native';
import {Provider} from 'react-redux'
import {Constants} from 'expo'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DeckListView from './components/DeckListView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import {purple, white} from './utils/colors'
import configureStore from './utils/configureStore'
import {persistStore} from 'redux-persist'
import {Font, AppLoading} from 'expo'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { setLocalNotification } from './utils/helpers'

function DecksStatusBar ({backgroundColor, ...props}){
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const Tabs = TabNavigator({
  DeckList: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({tintColor})=><FontAwesome name='question-circle-o' size={30} color={tintColor}/>
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions:{
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({tintColor})=><Entypo name='add-to-list' size={30} color={tintColor}/>

    }
  }
},{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor:Platform.OS==='ios' ? purple:white,
    style:{
      height: 56,
      backgroundColor: Platform.OS ==='ios' ? white: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
       shadowOffset: {
         width: 0,
         height: 3
       },
       shadowRadius: 6,
       shadowOpacity: 1
    }
  }
})
const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
  },
  AddCard: {
    screen:AddCard,
  },
  Quiz: {
    screen:Quiz,
  }
})
const{persistor, store} = configureStore()
export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { loading: true };
    }
    async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }


  componentDidMount(){

      setLocalNotification()

  }

  render() {
    if (this.state.loading) {
      return (

          <AppLoading />

      );
    }


    return (
    <PersistGate persistor={persistor}>
    <Provider store={store}>
        <View style={{flex:1}}>
          <DecksStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator/>
        </View>
    </Provider>
    </PersistGate>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
