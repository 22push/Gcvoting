import React from 'react'
import Navbar from '../components/Navbar'
import LoginPage1 from '../components/LoginPage'
import Footer from '../components/footer'
export default function LoginPage(props) {
  return (
    <>
    <LoginPage1 sendDataToParent={props.sendDataToParent} sendBranchtoparent = {props.sendbranchtoparent}/>
    </>
  )
}
