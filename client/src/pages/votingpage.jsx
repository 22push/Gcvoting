import React from 'react'
import Navbar from '../components/Navbar'
import Candidates from '../components/voting.jsx'
import Footer from '../components/footer'
export default function Votingpage({voter , setVoter}) {
  // console.log(senddatatochildA)
  return (
    <>
    <Candidates voter = {voter} setVoter={setVoter}/>
    <Footer/>
    </>
  )
}
