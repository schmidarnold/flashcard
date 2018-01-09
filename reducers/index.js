import {GET_DECKS, GET_DECK, ADD_QUESTION,ADD_DECK,DELETE_DECK} from '../actions'

const decks = (state=defaultState, action)=> {
  switch(action.type){
    case GET_DECKS:
      console.log("reducer: get_decks" )
      return {
        ...state

      }
    case ADD_DECK:
      return {
        ...state,
      [action.key]:action.deck
      }
    case ADD_QUESTION:
     const{key,question,answer} = action.payload
     return {
       ...state,
       [key]:{
         title:key,
         questions:[
           ...state[`${key}`].questions,
           {question,answer}
         ]
       }
     }
     case DELETE_DECK:
        delete state[action.key]
        return{
          ...state
        }
    default:
     return state
  }

}
const defaultState= {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
export default {
  decks
}
