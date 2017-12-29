export const GET_DECKS = 'GET_DECKS'
export const GET_DECK= 'GET_DECK'
export const ADD_DECK= 'ADD_DECK'
export const ADD_QUESTION= 'ADD_QUESTION'


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
