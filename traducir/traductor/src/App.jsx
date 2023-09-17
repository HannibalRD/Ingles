import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Example() {
  const [open, setOpen] = useState(false);

}
function RandomWord() {
  const { t } = useTranslation();
  const [englishWord, setEnglishWord] = useState(''); 
  const [spanishWord, setSpanishWord] = useState('');

  const getRandomEnglishWord = () => {
    // Simula la obtención de una palabra aleatoria en inglés (puedes personalizar esta parte)
    const englishWords = ['Get on', 'Drive off', 'Come back', 'Turn round', 'Break down','Look out','Take off','Get by','Run away (from)','Keep up (with)','Look up (at)','Look forward (to)','Get in','Let yourself in'];
    const randomIndex = Math.floor(Math.random() * englishWords.length);
    const word = englishWords[randomIndex];
    setEnglishWord(word);
    // Limpia la traducción actual
    setSpanishWord('');
  };

  const translateToSpanish = () => {
    if (englishWord) {
      // Traduce la palabra actualmente mostrada en inglés al español utilizando i18n
      const translatedWord = t(`global.${englishWord}`);
      setSpanishWord(translatedWord);
    }
  };

  return (
    <>
      {/* <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">  */}
          <Button variant='outline-success' size="lg" onClick={getRandomEnglishWord}>Get Random Word</Button>
          <Button variant='outline-success' size="lg" onClick={translateToSpanish}>Translate to Spanish</Button>
        {/* </ButtonGroup>
      </ButtonToolbar> */}
    
      <p>English: {englishWord}</p>
      <p>Español: {spanishWord}</p>
    </>
  );
}


export default RandomWord;
