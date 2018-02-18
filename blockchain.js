const SHA256 = require("crypto-js/sha256");

export function Block(timestamp, data, previousHash = "") {
  this.timestamp = timestamp;
  this.data = data; 
  this.previousHash = previousHash;
  this.hash = this.calculateHash();
  this.nounce = 0; 
}

Block.prototype.calculateHash = function() {
  return SHA256(this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nounce).toString(); 
}

Block.prototype.mineBlock = function(difficulty) {
  while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
    this.nounce++;
    this.hash = this.calculateHash();
  }
}

export function BlockChain() {
  this.chain = [this.createGenesisBlock()];
  this.difficulty = 2; 
}

BlockChain.prototype.createGenesisBlock = function() {
  return new Block(Date.now(), {Genesis: 'Genesis'})
}

BlockChain.prototype.getLatestBlock = function() {
  return this.chain[this.chain.length-1];
}

BlockChain.prototype.addBlock = function(block) {
  block.previousHash = this.getLatestBlock().hash;
  block.mineBlock(this.difficulty);
  this.chain.push(block);
}

BlockChain.prototype.isValidChain = function() {
  for (let i = 1; i < this.chain.length; i++) {
    if (this.chain[i].previousHash !== this.chain[i-1].hash) {
      console.log('The chain has been modified.') 
      return false;
    }
    if (this.chain[i].hash !== this.chain[i].calculateHash()) {
      console.log('The chain has been modified.')
      return false;
    }
  }
  return true;
}


// let chain = new BlockChain();
// let block1 = new Block(Date.now(), {username: "good", password: "good", email: "good@gmail.com"})
// chain.addBlock(block1);
// let block2 = new Block(Date.now(), "confidential")
// chain.addBlock(block2);
// // chain.chain[2].data = 'wrong data'
// console.log("blockchain: ", chain) 
// console.log("validity: ", chain.isValidChain()) //constantly keep checking its validity
// //if the chain turns out to be false, forcefully change the chain back to its original. 
// console.log('third item: ', chain.chain[2])

//example of using blockchain - transactions/new ideas that shall not be stolen or copied/application information