import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <header className="header">
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}
