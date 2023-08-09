import { useState, useRef } from 'react';
import './Carousel.css';
import StudentCard from './StudentCard';
import PropTypes from 'prop-types';

export default function Carousel({ students }) {
  const [expandedStudentId, setExpandedStudentId] = useState(null);
  const [scrollInterval, setScrollInterval] = useState(null);
  const carouselRef = useRef(null);

  const startScrolling = (direction) => {
    const interval = setInterval(() => {
      carouselRef.current.scrollLeft += (direction === 'left' ? -30 : 30);
    }, 25);

    setScrollInterval(interval);
  };

  console.log("Expanded Student ID:", expandedStudentId);
  console.log("Student Data:", students[expandedStudentId]);

  return (
    <>
      <div className="carousel-wrapper">
        <button 
          className="left-arrow" 
          onMouseDown={() => startScrolling('left')} 
          onMouseUp={() => clearInterval(scrollInterval)}
        >
          ←
        </button>
        <div className="carousel-container" ref={carouselRef}>
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              expandedStudentId={expandedStudentId}
              setExpandedStudentId={setExpandedStudentId}
            />
          ))}
        </div>
        <button 
          className="right-arrow" 
          onMouseDown={() => startScrolling('right')} 
          onMouseUp={() => clearInterval(scrollInterval)} 
        >
          →
        </button>
      </div>

      {expandedStudentId !== null && (
        <div className="expanded-details-container">
          <h4>CodeWars Data:</h4>
          <p>Current Total: {students[expandedStudentId]?.codewars?.current?.total}</p>
          {/* ... add other details ... */}
          <button onClick={() => setExpandedStudentId(null)}>See Less...</button>
        </div>
      )}
    </>
  );
}

Carousel.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profilePhoto: PropTypes.string.isRequired,
      names: PropTypes.shape({
        preferredName: PropTypes.string.isRequired,
        middleName: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
      }).isRequired,
      username: PropTypes.string.isRequired,
      dob: PropTypes.string.isRequired
    })
  ).isRequired
};
