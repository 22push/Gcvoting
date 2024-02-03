// CandidateContext.js
import React, { createContext, useContext, useState } from 'react';

const CandidateContext = createContext();

export const useCandidateContext = () => {
  return useContext(CandidateContext);
};

export const CandidateProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  const setCandidatesData = (data) => {
    setCandidates(data);
  };

  return (
    <CandidateContext.Provider value={{ candidates, setCandidatesData }}>
      {children}
    </CandidateContext.Provider>
  );
};