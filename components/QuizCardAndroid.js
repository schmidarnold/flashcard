import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  
} from 'react-native';
import {gray,lightPurp,white,blue,purple} from '../utils/colors'
import FlipCard from 'react-native-flip-card';
import { Button} from 'native-base'
const SCREEN_WIDTH = Dimensions.get('window').width
const FLIP_HEIGHT = 150

class QuizCardAndroid extends Component {

  render() {
    const {
      questions,
      index,
      onShowAnswer,
      onGoNext,
      flipped,
    } = this.props;
    return (

      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>{`card ${index + 1} of ${questions.length}`}</Text>
          <View style={styles.cardContainer}>



            <FlipCard
              flip={flipped}
              friction={6}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              clickable={false}
              style={styles.card}
              alignHeight={true}
              // alignWidth={true}
              onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
            >
              {/* Face Side */}
              <View style={styles.face}>
                <Text>{questions[index].question}</Text>
              </View>
              {/* Back Side */}
              <View style={styles.back}>
                <Text>{questions[index].answer}</Text>

              </View>
            </FlipCard>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={onShowAnswer}
                >
                {!flipped
                ?<Text style={styles.buttonText}>Show Answer</Text>
                :<Text style={styles.buttonText}>Show Question</Text>
                }

              </TouchableOpacity>
            </View>

          </View>





        </ScrollView>
        <View style={[styles.buttons, {flex:1,backgroundColor:white}]}>


            <Button block success onPress={()=>onGoNext(true)}><Text> Correct </Text></Button>
            <Button block danger onPress={()=>onGoNext(false)}><Text> Incorrect </Text></Button>
        </View>
      </View>


    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    width:200,
  },
  face: {
    flex:1,
    height: FLIP_HEIGHT,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex:1,
    height: FLIP_HEIGHT,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    marginTop: 30,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: 64
  },
  buttons: {

    justifyContent: 'flex-end',
    marginBottom:30,
    backgroundColor:gray
  },
});
export default QuizCardAndroid
