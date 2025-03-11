import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    let newGood = good + 1;
    let newAll = all + 1;

    setGood(() => newGood);
    setAll(() => newAll);

    setAvg(() => (newGood - bad) / newAll);

    setPositive(() => (newGood / newAll) * 100);
  };

  const handleNeutralClick = () => {
    setNeutral((n) => n + 1);

    let newAll = all + 1;
    setAll(() => newAll);

    setAvg(() => (good - bad) / newAll);

    setPositive(() => (good / newAll) * 100);
  };

  const handleBadClick = () => {
    let newBad = bad + 1;
    setBad(() => newBad);

    let newAll = all + 1;
    setAll(() => newAll);

    setAvg(() => (good - newBad) / newAll);

    setPositive(() => (good / newAll) * 100);
  };


  return (
    <div>

      <div>
        <h1>give feedback</h1>

        <button onClick={() => handleGoodClick()}>good</button>
        <button onClick={() => handleNeutralClick()}>neutral</button>
        <button onClick={() => handleBadClick()}>bad</button>
      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        positive={positive}
      />      

    </div>
  );
}

const Statistics = ({good, neutral, bad, all, avg, positive}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <div>
        <h3>No feedback given</h3>
      </div>
    );
  }

  return(
    <div>
      <h1>statistics</h1>

      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {avg}</p>
      <p>positive: {positive} %</p>
    </div>
  );
}
 
export default App;