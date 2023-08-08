import { formatDate } from '../utils/formatDate';
import PropTypes from 'prop-types';


export default function StudentCard({ student, expandedStudentId, setExpandedStudentId }) {
  const dobDate = `Birthday: ${formatDate(student.dob)}`;

  return (
    <div className="carousel-card">
      <img
        src={student.profilePhoto}
        alt={`Profile of ${student.names.preferredName}`}
        className="profilePhoto"
      />
      <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
      <p>{student.username}<br/><span>{dobDate}</span></p>
      <a href="#" onClick={() => setExpandedStudentId(student.id)}>
        See More...
      </a>
      {expandedStudentId === student.id && (
        <div className="student-details">
          {/* Add more details here if needed */}
        </div>
      )}
    </div>
  );
}

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    names: PropTypes.shape({
      preferredName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired
    }).isRequired,
    username: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired
  }).isRequired,
  expandedStudentId: PropTypes.number,
  setExpandedStudentId: PropTypes.func.isRequired
};
