const init = ""; 

export default function(state = init, action) {
  switch(action.type) {
    case 'transaction' : {
      return action.payload
    }
    default: 
      return state;
  }
}