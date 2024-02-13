import React, { useState } from 'react';

import { GoogleLogin } from '@react-oauth/google';

const Google = ({setVoter}) => {
  // const [data, setData] = useState({});
  function decodeJwtResponse(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  const handleVoter = async (email) => {
    const res = await fetch(`http://localhost:5000/api/getdept/${email}`, {
      method: "GET",

    }).then(response => {
      return response.json()
    }).then(data => {
      const voterDetails = {
        email: email,
        name: data.studentDetails.name,
        dept: data.studentDetails.dept
      }
      setVoter(voterDetails)
    })
  }
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              const responsePayload = decodeJwtResponse(credentialResponse.credential);
              handleVoter(responsePayload.email);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
    )
}

export default Google;