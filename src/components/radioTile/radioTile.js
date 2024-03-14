import React, { useEffect, useState } from 'react';
import styles from './radioTile.module.css'
import { RadioButton } from '../buttons/buttons';
import { getDateObj, timeAndDateFormatReadable } from '../../utils/timeAndDate';

const RadioTile = ({ course, idx }) => {
    const { 
        id, 
        dates, 
        instructors: [{ first_name, last_name, portrait_image }], 
        location: { timezone }, 
        pricing: { amount, currency, valid_until } 
    } = course;
    const [ focused, setFocused ] = useState('false');
    const { weekday, month, day, time } = getDateObj(dates, timezone);
    const dateUntil = timeAndDateFormatReadable(valid_until);

    const checkFocus = (event) => {
        const thisButton = document.getElementById(`course-${id}`);

        if((event.key === 'ArrowUp' || 'ArrowDown' || 'Tab') && (thisButton === document.activeElement)){
            setFocused('true');
        } else {
            setFocused('false');
        }
    };

    useEffect(()=>{
        document.addEventListener("keyup", checkFocus);
        return () => document.removeEventListener("keyup", checkFocus);
    })

    const selectInput = (e) => {
        document.getElementById(id).getElementsByTagName('input')[0].checked = true;
    }

return (
    <div onClick={selectInput} className={styles.radioTile} id={id}>
        <div className={styles.radioBtnContainer}>
            <RadioButton  id={`course-${id}`} idx={idx} focused={focused} name="courses"/>
            <span id={`course-${id}-label`} className={styles.radioBtnLabel}>Virtual Course</span>
        </div>

        <div className={styles.tileBody} id={`course-${id}-description`} >
            <div className={styles.bodyTextContainer}>
                <div className={styles.date}>{weekday}, {day} {month}</div>
                <div className={styles.time}>{time}</div>
                <div className={styles.place}>New York City Time</div>

                <div className={styles.price}>${amount} {currency} Until {dateUntil[1]} {dateUntil[2]}</div>
            </div>
            <div className={styles.instructorContainer}>
                <img className={styles.portrait} src={portrait_image} alt={`Portrait headshot of ${first_name} ${last_name}`} />
                <span className={styles.instructor}>Instructor: {first_name}</span>
            </div>
        </div>
    </div>
  )
}

export default RadioTile;