import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  const handleClick = (event) => {
    if (type === "minus") {
      setCount((prevCount) => (
        prevCount > 0 ? 
        prevCount - 1 : 0
      ));
    } else if (type === "plus") {
      setCount((prevCount) => (
        prevCount + 1
      ));
    }

    event.currentTarget.blur();
  };

  const isMinus = type === "minus";
  const isPlus = type === "plus";

  return (
    <button className="count-btn" onClick={handleClick} disabled={locked ? isPlus : false}>
      {isMinus && <MinusIcon className="count-btn-icon" />}
      {isPlus && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
