import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  if(total === 0){
    return(
      <p>No feedback given</p>
    )
  } else {
    return(
      <div>
        <table>
          <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='Total' value={total} />
          <StatisticLine text='Average' value={average} />
          <StatisticLine text='Positive' value={positive} />
          </tbody>
        </table>
       
      </div>
    )
  }
}

export default Statistics;