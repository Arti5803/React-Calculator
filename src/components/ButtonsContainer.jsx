
import styles from './Display.module.css';

const ButtonsContainer=({ onButtonClicked })=>{
  const buttonNames=['C','1','2','+','3','4','5','-','6','7','8','*','9','0','.','/','=','x' ]

  return(
     <div className={styles.buttonContainer}>
       {buttonNames.map((name) => (
         <button key={name} className={styles.button} onClick={() => onButtonClicked(name)}>
           {name}
         </button>
       ))}
      </div>
  )
}

export default ButtonsContainer;
