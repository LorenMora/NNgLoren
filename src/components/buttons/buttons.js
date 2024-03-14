//import { useEffect } from 'react';
import { useState } from 'react';
import { BookMarkFilledIcon, BookMarkOutlinedIcon } from '../icons/icons';
import styles from './buttons.module.css';

export const RadioButton = (props) => {
    const [ checked, setChecked ] = useState(props.idx === 0 ? true: false);

    return (
        <div className={styles.radioWrapper}>
            <input 
                {...props} 
                aria-labelledby={`${props.id}-label`} 
                aria-describedby={`${props.id}-description`} 
                hecked={checked} 
                aria-checked={checked} 
                onChange={()=> setChecked(!checked)}  
                type="radio" 
                className={styles.radioButton} 
            />
                {props.focused === 'true' ? 
                <span className={styles.radioFocused}></span>
                : <span></span>}
        </div>
    );
}

export const RedTextButton = ({ text, handleClick }) => {
    return (
        <button className={styles.redButtonText} onClick={handleClick}><span>{text}</span></button>
    )
}

export const SaveCourseButtion = ({ handleClick, isSaved}) => {
    return(
        <button className={styles.saveCourseButton} onClick={handleClick}>
            {isSaved ? 
            <BookMarkFilledIcon /> :
            <BookMarkOutlinedIcon />
            }
            <span>Save Course</span>
        </button>
    )
}