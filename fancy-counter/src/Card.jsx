import Count from "./Count";
import Title from "./Title";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        const newCount = count + 1;
        locked ? setCount(count) : setCount(newCount);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [count, locked]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked}/>
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        {/* Prop Drilling */}
        <CountButton setCount={setCount} type="minus" locked={locked} />
        <CountButton setCount={setCount} type="plus" locked={locked} />
      </ButtonContainer>
    </div>
  );
}
