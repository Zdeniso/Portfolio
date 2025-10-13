import Title from './Title.tsx';
import Count from './Count.tsx';
import ResetButton from './ResetButton.tsx';
import CountButtons from './CountButtons.tsx';

export default function Card() {
  return (
    <div>
        <Title />
        <Count />
        <ResetButton />
        <CountButtons />
    </div>
  )
}
