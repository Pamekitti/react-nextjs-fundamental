import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header className="header">
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.isComplete).length}
      />
    </header>
  );
}
