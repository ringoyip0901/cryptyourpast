import { Block, BlockChain } from '../../blockchain.js'

const chain = new BlockChain();
export const submit = (transaction) => {
  let block = new Block(Date.now(), transaction)
  if (chain.isValidChain()) {
    console.log('adding a new block')
    chain.addBlock(block)
    console.log('chain: ', chain)
    return dispatch => {
      dispatch({
        type: 'transaction', 
        payload: chain
      })
      return (
        fetch('/saveHistory', {
          method: "POST", 
          headers: {
            "Accept": 'application/json', 
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(chain)
        }).catch(err => {
          console.log(err);
        })
      )
    }
  }
  else {
    console.log('The chain is not valid.')
    return;
  }
}


