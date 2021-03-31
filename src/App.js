import React, { Component } from 'react'
import MainRouter from './MainRouter'
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  render() {
    return (
    <>
      <ToastContainer />
      <MainRouter/>  
    </> 
    )
  }
}

export default App;