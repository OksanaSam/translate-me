import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [userInput, setUserInput] = useState('')
  const [translateResult, setTranslateResult] = useState()
  // const API_KEY =`${process.env.REACT_APP_API_KEY}`;


  const options = [
    { name: 'Select…', value: null },
    { name: 'en-es', value: 'en-es' },
    { name: 'es-en', value: 'es-en' },
    { name: 'en-de', value: 'en-de' },
    { name: 'de-en', value: 'de-en' },
    { name: 'en-fr', value: 'en-fr' },
    { name: 'fr-en', value: 'fr-en' } 
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value)
  
  const axios = require('axios')
  
  const translate = (keyPhrase) => {
    axios({
      url: "https://translate.yandex.net/api/v1.5/tr.json/translate?",
      method: "GET",
      responseType: 'JSON',
      params: {
        key: "trnsl.1.1.20190518T054559Z.6098481762cecacb.6b721345d2262aa024e24b0aa7bbc42011422525",
        text: keyPhrase,
        lang: selectedOption
      },
    })
      .then((response) => {
        setTranslateResult(response.data.text[0])

      })
      .catch((error) => {
        alert(error);
      });
  };
  

  
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!userInput) return;
      let translateTarget = userInput;
      translate(translateTarget);
      setUserInput('')
    }
  }
  
  
  const handleTranslate = () => {
    if (!userInput) return;
    let translateTarget = userInput;
    translate(translateTarget);
    setUserInput('')
  }

  return (
  <div>
    <SEO title="Home" />
    <h1>Hi folks</h1>
    <p>Welcome to my Gatsby translations app!</p>
    <label className="visuallyHidden">Translate a phrase</label>
    <input
      type="text"
      placeholder="enter a phrase"
      value={userInput}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      name="userInput"
    />
    <button className="translateButton" onClick={handleTranslate}>Translate</button>
    {/* <label className="visuallyHidden">Select language</label> */}
    <select
      name='language'
      id='language'
      value={selectedOption}
      onChange={e => setSelectedOption(e.target.value)}>
      {options.map(option => (
        <option
          key={option.value}
          selected={option.value === null ? 'selected' : null}
          value={option.value}
          disabled={option.value === null ? true : null} 
        >
            {option.name}
        </option>
      ))}
    </select>
    <div style={{ width: `500px`, margin: `20px`, height: `300px`, border: `2px solid black`, marginBottom: `1.45rem`}}>
      {
        translateResult
        ?
      <p>{translateResult}</p>
        
        :
        null}
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">About</Link> <br />
  </div>
  )
}

export default IndexPage