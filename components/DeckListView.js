import React, {Component} from 'react'
import {View, Text,FlatList,StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {getDecks,deleteDeck} from '../actions'
import { List, ListItem } from 'react-native-elements';
import {AppLoading} from 'expo'
import DeckListItem from './DeckListItem'
import {StackNavigator} from 'react-navigation'

class DeckListView extends Component {
  state={
    ready: false
  }
  componentDidMount(){

    this.props.getDecks()
    //console.log("componentDidMOunt: " + this.props.getDecks)
    this.setState({ready:true})
  }

  goToDeck=(item)=>{
    this.props.navigation.navigate('Deck', {item})
  }
  deleteDeck=(item)=>{
    //console.log ("Deleting " + item.title)
    this.props.deleteCurDeck(item.title)
  }
  render(){
    const {cardArray} = this.props

    if (!this.state.ready){
      return <AppLoading />
    }
    return(

      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >

        <FlatList
          snapToAlignment={'center'}

          data={cardArray}
          renderItem={({ item }) => (



                <TouchableOpacity onPress={() => this.goToDeck(item)}>
                  <DeckListItem curItem={item} onDeleteItem={this.deleteDeck}/>

                </TouchableOpacity>





          )}
          keyExtractor={item => item.title}
        />

      </List>

    )
  }

}

function mapStateToProps ({decks}) {
  let cardArray = Object.keys(decks).map(key => decks[key]);
  console.log(JSON.stringify(decks))
  console.log (JSON.stringify(cardArray))
  return {
    cardArray
  }
}
const mapDispatchToProps = (dispatch) => ({
  getDecks: () => dispatch(getDecks()),
  deleteCurDeck:(key) => dispatch(deleteDeck(key))
})
var styles = StyleSheet.create({
   listView: {
     flex: 1,
     justifyContent: 'center',

   },
});

export default connect(
  mapStateToProps,mapDispatchToProps
)(DeckListView)
