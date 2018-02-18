import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { submit } from '../actions/actions.js'
import { Block, BlockChain } from '../../blockchain.js';
import Display from './Display.js'


export const Transaction = (props) => {
  const { state, submit } = props;
  const enter = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = event.which;
    if (isEnterKey == 13) {
      submit(text); 
    }  
  }

  const history = () => {
    fetch('/getHistory').then((result) => {
      return result.json()
    }).then((data) => {
      console.log('fetched data: ', (data))
    })
    console.log("STATE: ", state)
  }

  const style = {
    paddingTop: 50
  }

  return (
    <MuiThemeProvider>
    <div>
      <input placeholder="Your transaction!" name="data" onKeyDown={enter}></input>
      <button onClick={history}>History</button>
    </div>
    <div id="display" style={style}>
      <Display />
    </div>
    </MuiThemeProvider>
  )
}