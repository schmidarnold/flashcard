import React, { Component } from 'react';
import {StyleSheet, View,Text,Alert } from 'react-native';
import {connect} from 'react-redux'
import {white}from '../utils/colors'
import {Form, Input, Label, Item,Button} from 'native-base'
import {addQuestion} from '../actions'

class AddCard extends Component{
  state={
    question:'',
    answer:'',
  }
  valid=()=>{
    if (this.state.question!==''&&this.state.answer!==''){
      return true
    }else{
      return false
    }

  }
  onAddHandler=()=>{
    const {deck} = this.props.navigation.state.params
    //console.log("Adding question to deck: " + curDeck.title)
    if (this.valid()){
      console.log("valid question")
      this.props.addNewQuestion(deck.title, this.state.question,this.state.answer)
      this.setState({
      question: '',
      answer: '',
      })
      this.props.navigation.goBack()
    }else{
      return Alert.alert('Invalid Question', 'Question and Answer must not be empty');
    }
    
  }
  render(){
    const {deck} = this.props.navigation.state.params
    //console.log("Add Card to deck: " + curDeck.title)
    return(

      <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Adding card to {deck.title}</Text>
      </View>
        <View style={{flex: 1}}>
        <Form style={styles.formContainer}>
          <Item floatingLabel>
            <Label>Question</Label>
            <Input value={this.state.question} onChangeText={text => this.setState({question:text})}/>
          </Item>
          <Item floatingLabel last>
            <Label>Answer</Label>
            <Input value={this.state.answer} onChangeText={text => this.setState({answer:text})}/>
          </Item>
        </Form>
        </View>
        <View style={styles.buttonContainer}>
          <Button block success onPress={this.onAddHandler}><Text> Add Question </Text></Button>
        </View>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  addNewQuestion: (key,question,answer) => dispatch(addQuestion(key,question,answer)),
})
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:white,
    padding:20
  },
  formContainer:{
    flex:1
  },
  titleContainer:{
    alignItems:'center',
    justifyContent: 'flex-start',
    marginTop:10
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center'


  }
})
export default connect (null,mapDispatchToProps)(AddCard)
