export const GET_DECKS = 'GET_DECKS'
export const GET_DECK= 'GET_DECK'
export const ADD_DECK= 'ADD_DECK'
export const ADD_QUESTION= 'ADD_QUESTION'
export const DELETE_DECK= 'DELETE_DECK'


export function getDecks(){
  return {
    type: GET_DECKS,

  }
}

export function addDeck(deck,key){
  console.log("action-addDeck : " + key)
  return {
    type: ADD_DECK,
    key,
    deck,
  }
}
export function addQuestion(key,question,answer){
  console.log("action-addQuestion: " + key,question,answer)
  return {
    type: ADD_QUESTION,
    payload: {key,question,answer}
  }
}
export function deleteDeck(key){
  console.log("action- delete Deck: " + key)
  return {
    type: DELETE_DECK,
    key,
  }
}
