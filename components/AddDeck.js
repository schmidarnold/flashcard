import React,{Component} from 'react'
import {View, TouchableOpacity,Text, Platform, StyleSheet, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {addDeck} from '../actions'
import {white, purple} from '../utils/colors'

function SubmitBtn({onPress}){
  return(
    <TouchableOpacity
      style={Platform.OS ==='ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddDeck extends Component{
  state={
    deckTitle:""
  }
  submit = ()=>{
    const newDeck = {
      'title':this.state.deckTitle,
      'questions':[],
        }
    const key = this.state.deckTitle
    //console.log(newDeck)
    this.props.addDeck(newDeck,key)
  }

  render(){
    return(
      <View style={styles.container}>
      <TextInput
      placeholder="Deck Title"
      style={[{borderColor: 'gray', borderWidth: 1, margin: 20},styles.row]}
      onChangeText={(deckTitle) => this.setState({deckTitle})}
        value={this.state.deckTitle}
      />
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}
function mapStateToProps (state){
  return(
    state
  )
}
const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck,key) => dispatch(addDeck(deck,key)),
})
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: white,
    justifyContent: 'center'

  },
  iosSubmitBtn:{
    backgroundColor:purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight:40,
    margin: 20
  },

  row:{
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center'
  },
  androidSubmitBtn:{
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    margin: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  submitBtnText:{
    color:white,
    fontSize: 22,
    textAlign: 'center',
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }
})
export default connect(mapStateToProps,mapDispatchToProps) (AddDeck)
