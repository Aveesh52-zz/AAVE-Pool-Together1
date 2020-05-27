import React, { Component } from 'react';

import Web3 from 'web3'; 
import './Pool.css';

import dai from '../Dai.png';

import pool from '../pooltogether.png';

class Zap extends Component {

  async componentWillMount() {
 
    await this.loadWeb3()
    await this.loadBlockchainData()


  }

  async loadBlockchainData() {
  const web3 = window.web3

  const accounts = await web3.eth.getAccounts()
  this.setState({ account: accounts[0] })
  console.log(this.state.account);

  const ethBalance = await web3.eth.getBalance(this.state.account)
  this.setState({ ethBalance })
  console.log(ethBalance);
  
 
 
}





  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }





  constructor(props) {
    super(props)
   
  }
  
  render() {


    return (

      <form className="mb-3" onSubmit={(event) => {
        event.preventDefault()
        
      }}>
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
            
      <button type="submit" className="button1">DEPOSIT</button>
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
      </form>
    );
  };
}

export default Zap;
