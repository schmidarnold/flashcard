import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {purple} from '../utils/colors'

export default class DeckListItem extends PureComponent {
  render(){
    const {curItem,onDeleteItem} = this.props
    return(
      <View style={[styles.container,styles.separator]}>
        <Text style={styles.deckTitle}>{curItem.title}</Text>
        <Text style={styles.quizCount}>{`${curItem.questions.length} ${(curItem.questions.length>1)?'cards':'card'}`}  </Text>
        <TouchableOpacity onPress={()=>this.props.onDeleteItem(curItem)}>
          <Text style={styles.delete}>Delete</Text>

        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  deckTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
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
  separator: {
  flex: 1,
  borderWidth: 1,
  borderColor: 'red'
 },
 delete: {
    textAlign: 'center',
    color: purple,
    margin:20,
  }
})
