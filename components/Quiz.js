import React, { Component } from 'react';
import {StyleSheet, View,Text,Dimensions,TouchableOpacity } from 'react-native';
import {gray,lightPurp,white,blue,purple} from '../utils/colors'
import { Button} from 'native-base'
import FlipCard from 'react-native-flip-card'
import QuizCard from './QuizCard'

const QuizResult = ({result, onPressRetry, onPressHome})=>(
  <View style={{flex:1}}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Congratulations!!!</Text>
      <Text style={{fontSize: 18}}>{`Your score is ${result}% `}</Text>
    </View>
    <View style={{ justifyContent:'flex-end'}}>
      <Button block primary onPress={onPressRetry}><Text>Retry</Text></Button>
      <Button block light onPress={onPressHome}><Text>Go to Decks</Text></Button>
    </View>
  </View>
)




class Quiz extends Component{
  state={
    flipped:false,
    index:0,
    score:0,
  }

  showAnswer=()=>{
    console.log("flipping");
    this.setState({flipped:!this.state.flipped})
  }
  goToNext=(correct)=>{
    console.log("toToNext")
    if (correct){
      this.setState({score:this.state.score+1},function(){
        this.showNewQuestion()
      })
    }else{
      this.showNewQuestion()
    }


    //console.log("calculating score" + this.state.score)
  }
  showNewQuestion=()=>{
    const {questions} = this.props.navigation.state.params
    this.setState({index: this.state.index+1}, function(){
      position = this.state.index
      if (position ===questions.length){
        console.log("finished")
      }else{
        console.log("next question")
      }

      console.log("calling showNewQuestion")
    })

  }
  retry=()=>{
    this.setState({
      index:0,
      score:0,
      flipped:false
    })
    console.log("retry")

  }
  goHome=()=>{
    console.log("go home")
    //this.props.navigation.goBack()
    this.props.navigation.navigate('Home')
  }
  render(){
    const {title,questions}= this.props.navigation.state.params
    const {index,score} = this.state
    const finished = index===questions.length
    const result = Math.round(score / questions.length * 10000) / 100;
    return(
      <View style={styles.container}>
        {finished
        ?<QuizResult
          result={result}
          onPressRetry={this.retry}
          onPressHome={this.goHome}
        />
        : <QuizCard
          questions={questions}
          index={index}
          onShowAnswer={this.showAnswer}
          onGoNext={this.goToNext}
          flipped={this.state.flipped}
          />

      }
      </View>
    )
  }
}
var styles = StyleSheet.create({

  container: {
       flex: 1,

       backgroundColor: white
   },

});
export default Quiz
