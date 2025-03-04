const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}/>
      
      <Content parts={course.parts}/>

      <Total parts={course.parts}/>
    </div>
  )
}

export default App





const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  );
};

const Content = ({parts}) => {
  return(
    <div>
      {parts.map((part, index) => 
        <div key={index}>
          <Part partName={part.name} exercisesNum={part.exercises}/>
        </div>
      )}
    </div>
  );
};

const Total = ({parts}) => {
  return(
    <p>Number of exercises {parts.reduce((acc, curr) => acc + curr.exercises, 0)}</p>
  );
};

const Part = ({partName, exercisesNum}) => {
  return(
    <p>
      {partName} {exercisesNum}
    </p>
  );
};






