import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';
import {connect} from 'react-redux'
import { Container, Header, Content, Button, Text } from 'native-base'
import {white}from '../utils/colors'

class Deck extends Component{
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params.item;
    return {
      title,

    }
  }
  addCard = ()=>{
    const {deck} = this.props
    console.log("Add Card")
    this.props.navigation.navigate('AddCard', {deck})
  }
  startQuiz = ()=>{
    const {deck} = this.props

    const questions = deck.questions
    const title = deck.title
    console.log("Start Quiz " + title)
    this.props.navigation.navigate('Quiz',{title,questions})
  }
  render(){
    const {deck} = this.props
    return(
      <View style={styles.container}>
        <View style={styles.cardTitleSection}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.quizCount}>{`${deck.questions.length}  ${(deck.questions.length<2)? 'card':'cards'}`}</Text>
        </View>
        <View style={styles.buttons}>

          <Button block light onPress={this.addCard}><Text> Add Card </Text></Button>
          <Button block primary onPress={this.startQuiz}><Text> Start Quiz </Text></Button>


        </View>
      </View>
    )
  }
}
function mapStateToProps ({decks}, {navigation}) {
  let curDeck = navigation.state.params.item
  let deck = decks[curDeck.title]
  console.log ("mapStateToProps " + deck.title)
  return {deck}
}
var styles = StyleSheet.create({
   buttons: {
     flex: 1,
     justifyContent: 'flex-end',
     marginBottom:30
   },
   button: {
     marginTop: 5,
     marginLeft: 5,
     marginBottom:5,
     marginRight:5,

   },
   container:{
     flex:1,
     backgroundColor:white,
   },
   cardTitleSection:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   deckTitle: {

     fontSize: 35,
     color: '#333',
     fontWeight: '600',
     textAlign: 'center',
   },
   quizCount: {
     marginTop: 5,
     marginBottom: 10,
     fontSize: 13,
     color: '#999',
     fontWeight: '300',
     textAlign: 'center',
   },
});
export default connect(mapStateToProps) (Deck);
