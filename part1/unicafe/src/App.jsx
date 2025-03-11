import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);
  let newAll, newGood, newNeutral, newBad;

  const handleGoodClick = () => {
    newGood = good + 1;
    newAll = all + 1;

    setGood(() => newGood);
    setAll(() => newAll);

    setAvg(() => (newGood - bad) / newAll);

    setPositive(() => (newGood / newAll) * 100);
  };

  const handleNeutralClick = () => {
    setNeutral((n) => n + 1);

    newAll = all + 1;
    setAll(() => newAll);

    setAvg(() => (good - bad) / newAll);

    setPositive(() => (good / newAll) * 100);
  };

  const handleBadClick = () => {
    newBad = bad + 1;
    setBad(() => newBad);

    newAll = all + 1;
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

      <div>
        <h1>statistics</h1>

        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {all}</p>
        <p>average: {avg}</p>
        <p>positive: {positive} %</p>
      </div>

    </div>
  );
}
 
export default App;