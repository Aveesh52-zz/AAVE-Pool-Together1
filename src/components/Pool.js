import React, { Component } from 'react';

import Web3 from 'web3'; 
import './Pool.css';
import dai from '../Dai.png';


import IntermediateFactory from '../abis/IntermediateFactory.json'
import Mocklendingpool from '../abis/mocklendingpool.json'
import mockatoken from '../abis/mockatoken.json'



import pool from '../pooltogether.png';

class Zap extends Component {

  async componentWillMount() {
 
    await this.loadWeb3()
    await this.loadBlockchainData()


  }

  async loadBlockchainData() {
  const web3 = window.web3

  
  const accounts = await this.state.web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  console.log(this.state.account);

  
  const ethBalance = await this.state.web3.eth.getBalance(this.state.account)
  this.setState({ ethBalance })
  console.log(this.state.ethBalance);


  
  const contractAddress = "0x05356bff5e15d217586eaa64cd8ff018872be1e6"
  const intermediateFactory = new this.state.web3.eth.Contract(IntermediateFactory.abi, contractAddress);
  
  this.setState({intermediateFactory});
  console.log(this.state.intermediateFactory);
 

  let result1; 
  result1 =  await this.state.intermediateFactory.methods.getIntermediateUser(this.state.account).call({ from: this.state.account })
  console.log(result1);
  this.setState({result1});


  if(!result1){
    let result2;
    result2 =  await this.state.intermediateFactory.methods.createIntermediate("0xb2315367a090b43b468a55a325eb3f53bccf3d35",this.state.account).send({ from: this.state.account })
    console.log(result2);
  }


    const contractAddress1 = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa"
    const mocklendingpool = this.state.web3.eth.Contract(Mocklendingpool.abi, contractAddress1)
    this.setState({mocklendingpool});

    console.log(this.state.mocklendingpool);

     
    
   


}



async loadWeb3() {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    this.setState({ web3 })
  }
  else if (window.web3) {
    const web3 = new Web3(window.web3.currentProvider)
    this.setState({ web3 })
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}










  constructor(props) {
    super(props);
    this.state = {
     account:'',
     result1:'0',
     intermediateFactory:{},
     mocklendingpool:{},
     mockatoken:{},
     intermediate:{},
     web3:{},
     ethBalance:'0'
    }
   
  }


  


  
  render() {


    return (

     
      <div>
  
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">

              
                <div className="d-flex justify-content-center">
           <div id="container">
           <div className="title">DEPOSIT</div>

         
     

           
<img src={dai} className="App-logo" alt="logo" />
            <div className="amount">
            <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount
              })
              console.log(this.state.output);
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />  
            </div>
            <div className="zap">
            
      <button type="submit" className="button1" >DEPOSIT</button>
            </div>
          </div>



          <div id="container1">
           <div className="title">INVEST</div>

         
            
         

           
<img src={pool} className="App-logo1" alt="logo" />
            <div className="amount">
            <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount
              })
              console.log(this.state.output);
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />  
            </div>
            <div className="zap">
            
      <button type="submit" className="button1">INVEST</button>
            </div>
          </div>

  <div id="container2">
           <div className="title">REDEEM</div>

         
            


           
<img src={dai} className="App-logo2" alt="logo" />
            <div className="amount">
            <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount
              })
              console.log(this.state.output);
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />  
            </div>
            <div className="zap">
            
      <button type="submit" className="button1">REDEEM</button>
            </div>
          </div>


                
      
</div>
        
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  };
}

export default Zap;
