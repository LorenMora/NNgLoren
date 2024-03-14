import React, { useState } from 'react';
import useGetCourses from '../../utils/hooks/useGetCourses';
import RadioTile from '../../components/radioTile/radioTile';
import styles from './prototype.module.css';
import { RedTextButton, SaveCourseButtion } from '../../components/buttons/buttons';

const Prototype = () => {
    const [ isSaved, setIsSaved ] = useState(false);
    const courses = useGetCourses();

    const sendToCoursePage = () => {
        let courseId = document.querySelector('input[name="courses"]:checked').id.substring(7);
        alert(`Going to course page: /course/${courseId}/enroll/`);
    }
    const handleClick = () => {
        setIsSaved(!isSaved);
    }

    return (
        <section>
            <h2 className={styles.heading2}>Course Dates</h2>
            <div role="radiogroup" className={styles.radioTilesContainer}>
                {courses?.map((course, idx) => <div key={course.id}><RadioTile idx={idx} course={course} /></div>)}
            </div>
            <div className={styles.buttonContainer}>
                <RedTextButton text="Enroll in Course" handleClick={sendToCoursePage} />
                <SaveCourseButtion handleClick={handleClick} isSaved={isSaved} />
            </div>
        </section>
    )
}

export default Prototype;