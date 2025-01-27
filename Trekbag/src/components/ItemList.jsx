import { useState, useMemo } from "react";
import Select from "react-select";
import EmptyView from "./EmptyView";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore((state) => state.items);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const deleteItem = useItemsStore((state) => state.deleteItem);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return a.isComplete === b.isComplete ? 0 : a.isComplete ? -1 : 1;
      } else if (sortBy === "unpacked") {
        return a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1;
      }
      return 0; // default sorting
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(e) => setSortBy(e.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onToggleItem={toggleItem}
          onDeleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
