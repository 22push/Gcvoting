import React from 'react'
import Navbar from '../components/Navbar'
import Candidates from '../components/voting.jsx'
import Footer from '../components/footer'
export default function Votingpage({senddatatochildA , sendbranchtochildA}) {
  console.log(senddatatochildA)
  return (
    <>
    <Candidates SenddatatochildB = {senddatatochildA} sendbranchtochildB={sendbranchtochildA}/>
    <Footer/>
    </>
  )
}
