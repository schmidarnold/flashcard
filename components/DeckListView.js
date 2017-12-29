import React, {Component} from 'react'
import {View, Text,FlatList,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDecks} from '../actions'
import { List, ListItem } from 'react-native-elements';



class DeckListView extends Component {
  state={
    ready: false
  }
  componentDidMount(){
    console.log("component did mount DeckListView")
    this.props.getDecks()
  }



  render(){
    const {cardArray} = this.props
    return(

      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >

        <FlatList
          snapToAlignment={'center'}
          data={cardArray}
          renderItem={({ item }) => (

            <ListItem

              title={`${item.title} `}
              subtitle={`${item.questions.length} cards`}

            />

          )}
          keyExtractor={item => item.title}
        />

      </List>
    )
  }

}

function mapStateToProps (decks) {
  let cardArray = Object.keys(decks).map(key => decks[key]);
  console.log(JSON.stringify(decks))
  console.log (JSON.stringify(cardArray))
  return {
    cardArray
  }
}
const mapDispatchToProps = (dispatch) => ({
  getDecks: () => dispatch(getDecks()),
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
