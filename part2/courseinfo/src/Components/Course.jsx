import Content from "./Content";
import Header from "./Header";
import TotalExercises from "./TotalExercises";

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>

            <Content parts={course.parts}/>

            <TotalExercises parts={course.parts}/>
        </div>
    );
}
 
export default Course;

// separate component