import React, { Component } from 'react';
import {StyleSheet, View,Text,Dimensions,TouchableOpacity } from 'react-native';
import {gray,lightPurp,white,blue,purple} from '../utils/colors'
import { Button} from 'native-base'
import FlipCard from 'react-native-flip-card'

const SCREEN_WIDTH = Dimensions.get('window').width
const FLIP_HEIGHT = 250

class QuizCard extends Component {

  render(){
    const {
      questions,
      index,
      onShowAnswer,
      onGoNext,
      flipped,
    } = this.props;
    console.log("QuizCard:" + JSON.stringify(questions))
    return(

      <View style={styles.container}>
          <View style={styles.headerText}>
            <Text> {`card ${index + 1} of ${questions.length}`}</Text>
          </View>
          <View style={styles.card}>
            <FlipCard
              style={styles.card}
              friction={6}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              flip={flipped}
              clickable={true}
              onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
              >
              {/* Face Side */}
              <View style={styles.face}>
                <Text style={styles.text}>{questions[index].question}</Text>
              </View>
              {/* Back Side */}
              <View style={styles.back}>
                <Text>{questions[index].answer}</Text>
              </View>
            </FlipCard>
          </View>
          <View style={{flex:0.1}}>
            <TouchableOpacity onPress={onShowAnswer}>
              {!flipped
              ?<Text style={styles.showAnswer}>Show Answer</Text>
              :<Text style={styles.showAnswer}>Show Question</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={[styles.buttons, {flex:0.3,backgroundColor:white}]}>


              <Button block success onPress={()=>onGoNext(true)}><Text> Correct </Text></Button>
              <Button block danger onPress={()=>onGoNext(false)}><Text> Incorrect </Text></Button>
          </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  face:{
    height: FLIP_HEIGHT,
    backgroundColor: gray
  },
  back:{
    height:FLIP_HEIGHT,
    backgroundColor: lightPurp
  },
  card:{
    flex:0.5,


    borderColor: '#ddd',
  },
  container: {
       flex: 1,

       backgroundColor: white
   },
   buttons: {

     justifyContent: 'flex-end',
     marginBottom:30,
     backgroundColor:gray
   },
   text: {
     height:FLIP_HEIGHT,
     backgroundColor: gray
   },
   headerText:{
     flex: 0.1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   showAnswer: {
      height: 15,
      textAlign: 'center',
      color: purple,
      margin:20,
    }
});
export default QuizCard
