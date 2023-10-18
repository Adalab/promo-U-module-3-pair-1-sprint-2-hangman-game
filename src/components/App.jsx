import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Dummy from './Dummy';

function App() {
  useEffect(() => {
    fetch('https://dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((data) => {
        setWord(data.word);
      });
  }, []);
  //funciones, variables, handles
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('pepino');
  const [userLetters, setUserLetters] = useState([]);

  /******5. Pintando el muñeco******/

  const calculateErrors = () => {
    // Calcular el número de errores
    const errorCount = userLetters.filter(
      (letter) => !word.includes(letter)
    ).length;
    return errorCount;
  };

  const renderDummyClass = () => {
    const errorCount = calculateErrors();
    return `dummy error-${errorCount}`;
  };

  const handleChange = (event) => {
    const inputLetter = event.target.value;

    const isValidLetter = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]+$/.test(inputLetter);

    if (isValidLetter || inputLetter === '') {
      setLastLetter(inputLetter);

      /*2. Modificando un array del estado. Estado arrriba*/
      setUserLetters([...userLetters, inputLetter]);
    } else {
      console.log('La letra ingresada no es válida.');
    }
  };

  /****1. Pintando los guiones de la solución (fase 1) */
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');

    /***3. Pintando los guiones de la solución (fase 2) */

    return wordLetters.map((letter, index) => {
      const isLetterInUserLetters = userLetters.includes(letter);
      return (
        <li className='letter' key={index}>
          {isLetterInUserLetters ? letter : ''}
        </li>
      );
    });
  };

  /****4. Pintando las letras falladas*** */
  const renderErrorLetters = () => {
    // Filtrar las userLetters que no existen en la palabra
    const errorLetters = userLetters.filter((letter) => !word.includes(letter));

    // Recorrer las letras erróneas y retornar un <li> para cada una
    return errorLetters.map((letter, index) => (
      <li className='letter' key={index}>
        {letter}
      </li>
    ));
  };

  return (
    //html
    <>
      <div className='page'>
        <Header />
        <main className='main'>
          <section>
            <div className='solution'>
              <h2 className='title'>Solución:</h2>

              <ul className='letters'>{renderSolutionLetters()}</ul>
            </div>
            <div className='error'>
              <h2 className='title'>Letras falladas:</h2>
              <ul className='letters'>{renderErrorLetters()}</ul>
            </div>
            <form className='form'>
              <label className='title' htmlFor='last-letter'>
                Escribe una letra:
              </label>
              <input
                autoComplete='off'
                className='form__input'
                maxLength='1'
                type='text'
                name='last-letter'
                id='last-letter'
                value={lastLetter}
                onChange={handleChange}
              />
            </form>
          </section>
          <Dummy numberOfErrors={errorCount}/>
        </main>
      </div>
    </>
  );
}

export default App;
