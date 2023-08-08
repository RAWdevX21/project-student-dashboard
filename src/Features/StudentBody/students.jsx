import data from '../data/data.json'
import './students.css'
import Carousel from './components/Carousel'
// import { checkIMGdimensions } from '../utils/imgDimensions'

console.log(data)
console.log("data[0] : ", data[0])

/*
  - The Carousel component is responsible for rendering and managing the carousel behavior
  - The StudentBody component is responsible for generating the individual student cards
*/

export default function StudentBody() {
  return (
    <div className="students-card">
      <Carousel students={data} />
    </div>
  );
}
