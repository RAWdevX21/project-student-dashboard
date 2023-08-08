import data from '../data/data.json'

console.log(data)
console.log("data[0] : ", data[0])

export default function StudentBody() {

  const studentsToRender = data.map((eachStudentObj) => {
      return (
        <div key={eachStudentObj.id}>
          <img src={eachStudentObj.profilePhoto} alt={`Image of Student: ${eachStudentObj.names.preferredName}`} />
          <h4>{eachStudentObj.username}</h4>
          <a href="#">See More...</a>
        </div>
      );
  });

  return (
    <div className="students-container">
      {studentsToRender}
    </div>
  );
}


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