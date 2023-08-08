import { useState, useRef } from 'react';
import './Carousel.css';
import StudentCard from './StudentCard';
import PropTypes from 'prop-types';

export default function Carousel({ students }) {
  const [expandedStudentId, setExpandedStudentId] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const [scrollInterval, setScrollInterval] = useState(null);

  const startScrolling = (direction) => {
    const interval = setInterval(() => {
      carouselRef.current.scrollLeft += (direction === 'left' ? -30 : 30);
    }, 25);

    setScrollInterval(interval);
  };

  return (
    <>
      <div className="carousel-wrapper">

        <button 
          className="left-arrow" 
          onMouseDown={() => startScrolling('left')} 
          onMouseUp={() => clearInterval(scrollInterval)}  // Clear interval here
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
          onMouseUp={() => clearInterval(scrollInterval)}  // Clear interval here
        >
          →
        </button>

      </div>

      <div className="pagination">
        {students.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></span>
        ))}
      </div>
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
