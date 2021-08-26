import useCounter from '../../hooks/use-counter';
import Card from './../UI/Card';

const UpCounter = () => {
  const counter = useCounter();
  return (
    <Card>
      <h2>UpCounter</h2>
      <h2>{counter}</h2>
    </Card>
  );
};

export default UpCounter;
