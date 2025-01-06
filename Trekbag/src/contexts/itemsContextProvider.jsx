import { useState, useEffect, createContext } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      isComplete: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    console.log("remove all items");
    setItems([]);
  };

  const handleResetToInitial = () => {
    console.log("reset to initial");
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    console.log("mark all as complete");
    const newItems = items.map((item) => ({ ...item, isComplete: true }));
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    console.log("mark all as incomplete");
    const newItems = items.map((item) => ({ ...item, isComplete: false }));
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    console.log("item checkbox change", id);
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    console.log("item remove", id);
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleToggleItem,
        handleDeleteItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
