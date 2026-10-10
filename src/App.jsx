import styles from './App.module.css'
import Display from './components/Display.jsx'
import ButtonsContainer from './components/ButtonsContainer.jsx'
import { useState } from 'react';
function App() {
  const [displayValue, setDisplayValue] = useState('');

  const onButtonClicked = (buttonValue) => {
    if(buttonValue === 'C'){
      setDisplayValue('');
    } else if(buttonValue === '='){
      
        const result = eval(displayValue);
        setDisplayValue(result);
    }
    else if(buttonValue === 'x'){
      const newValue = displayValue.slice(0, -1);
      setDisplayValue(newValue);
    }
    else
    {
      const newValue = displayValue + buttonValue;
      setDisplayValue(newValue);
    }
  
  }

  return(
    <div className={styles.calculator}>
      <Display value={displayValue}
     />
      <ButtonsContainer  
      onButtonClicked={onButtonClicked} />

    </div>
  )

}
export default App;