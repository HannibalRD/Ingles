import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function RandomWord() {
  const { t } = useTranslation();
  const [englishWords, setEnglishWords] = useState(Array(10).fill(''));
  const [spanishWords, setSpanishWords] = useState(Array(10).fill(''));

  const generateRandomWords = () => {
    const englishWordsList = [
      'Get on', 'Drive off', 'Come back', 'Turn round', 'Break down','Look out','Take off','Get by','Run away (from)','Keep up (with)','Look up (at)','Look forward (to)','Get in','Let yourself in','Dive in','Move in','Check in (hotel,airport)','Walk out','Lock out','Climb out','Plug in','Fill in (U.K)-Fill out (U.S.A)','Take somebody in','Eat out','Drop out','Get out','Cut something out','Leave something out','Cross/rub something +out','Go out','Put out(a fire,a cigarette,a light)','Turn out (a light)','Blow out','Work out','Work something out','Carry out (order, experiment, survey)','Fall out (with somebody)','Find out + THAT/WHAT/WHEN/WHO etc'
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
        <div className="word-row d-flex">
          {englishWords.slice(0, 5).map((word, index) => (
            <div key={index} className={`word buenas${index }`}>
              <h2>{index + 1}</h2>
              <p>English: <b>{word}</b></p>
              <p>Español: <b>{spanishWords[index]}</b></p>
              <input type="text" />
            </div>
          ))}
        </div>
        <div className="word-row">
          {englishWords.slice(5).map((word, index) => (
            <div key={index} className={`word buenas${index +5}`} >
              <h2>{index + 6}</h2>
              <p>English: <b>{word}</b></p>
              <p>Español: <b>{spanishWords[index + 5]}</b></p>
              <input type="text" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RandomWord;
