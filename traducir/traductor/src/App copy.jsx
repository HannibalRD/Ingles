import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function RandomWord() {
  const { t } = useTranslation();
  const [englishWords, setEnglishWords] = useState(Array(10).fill(''));
  const [spanishWords, setSpanishWords] = useState(Array(10).fill(''));

  const generateRandomWords = () => {
    const englishWordsList = [
      'As well as','And','Then / Next','Also / Too','Moreover / Furthermore','In fact / As a matter of fact','Actually','Anyway','Besides','By the way'
    ];

    const shuffledWords = [...englishWordsList].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, 10);

    setEnglishWords(selectedWords);
    setSpanishWords(Array(10).fill(''));
  };

  useEffect(() => {
    generateRandomWords();
  }, []);

  const translateToSpanish = () => {
    if (englishWords.length === 10) {
      const translatedWords = englishWords.map((word) => t(`global.${word}`));
      setSpanishWords(translatedWords);
    }
  };

  return (
    <div className="page-container">
      <div className="button-container">
        <Button className="hola" variant="outline-success" size="lg" onClick={generateRandomWords}>
          Get Random Words
        </Button>
        <Button className="hola" variant="outline-success" size="lg" onClick={translateToSpanish}>
          Translate to Spanish
        </Button>
      </div>
      <div className="words-container">
        <div className="word-row">
          {englishWords.slice(0, 5).map((word, index) => (
            <div key={index} className="word">
              <h2>{index + 1}</h2>
              <p>English: {word}</p>
              <p>Español: {spanishWords[index]}</p>
            </div>
          ))}
        </div>
        <div className="word-row">
          {englishWords.slice(5).map((word, index) => (
            <div key={index} className="word">
              <h2>{index + 6}</h2>
              <p>English: {word}</p>
              <p>Español: {spanishWords[index + 5]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RandomWord;
