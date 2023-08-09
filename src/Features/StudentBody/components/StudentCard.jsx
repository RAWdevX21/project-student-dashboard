import { formatDate } from '../utils/formatDate';
import PropTypes from 'prop-types';


export default function StudentCard({ student, expandedStudentId, setExpandedStudentId }) {
  const dobDate = `${formatDate(student.dob)}`;

  return (
    <div className="carousel-card">

      <img
        src={student.profilePhoto}
        alt={`Profile of ${student.names.preferredName}`}
        className="profilePhoto"
      />
      <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
      <p>{student.username}<br/><span>Birthday: </span>{dobDate}</p>
      <a href="#" onClick={() => setExpandedStudentId(student.id)}>
        See More...
      </a>
      {expandedStudentId === student.id && (
        <div className="student-details">
          <h4>CodeWars Data:</h4>
          <p>Current Total: {student.codewars.current.total}</p>
          <p>Last Week: {student.codewars.current.lastWeek}</p>
          <p>Goal Total: {student.codewars.goal.total}</p>
          <p>Goal Last Week: {student.codewars.goal.lastWeek}</p>

          <h4>Scores:</h4>
          <p>Assignments: {student.cohort.scores.assignments}</p>
          <p>Projects: {student.cohort.scores.projects}</p>
          <p>Assessments: {student.cohort.scores.assessments}</p>

          <h4>Certifications:</h4>
          <p>Resume: {student.certifications.resume ? "Yes" : "No"}</p>
          <p>LinkedIn: {student.certifications.linkedin ? "Yes" : "No"}</p>
          <p>GitHub: {student.certifications.github ? "Yes" : "No"}</p>
          <p>Mock Interview: {student.certifications.mockInterview ? "Yes" : "No"}</p>
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

/*
{
    "id": "D8-hEWB",
    "names": {
      "preferredName": "Israel",
      "middleName": "Benjamin",
      "surname": "Rodriguez"
    },
    "username": "israel.rodriguez@pursuit.org",
    "dob": "2/3/1979",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
    "codewars": {
      "current": { "total": 1804, "lastWeek": 144 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [
      {
        "commenter": "Alan R.",
        "comment": "Israel is a pleasure to work with!"
      }
    ],
    "cohort": {
      "cohortCode": "Winter2025",
      "cohortStartDate": "12/1/25",
      "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
    }
  }
*/