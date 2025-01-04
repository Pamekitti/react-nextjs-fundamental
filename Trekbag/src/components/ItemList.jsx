export default function ItemList({
  items,
  handleItemCheckboxChange,
  handleItemRemove,
}) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onItemCheckboxChange={handleItemCheckboxChange}
          onItemRemove={handleItemRemove}
        />
      ))}
    </ul>
  );
}

function Item({ item, onItemCheckboxChange, onItemRemove }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={() => onItemCheckboxChange(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onItemRemove(item.id)}>❌</button>
    </li>
  );
}
