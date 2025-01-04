import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

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

  const handleItemCheckboxChange = (id) => {
    console.log("item checkbox change", id);
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    );
    setItems(newItems);
  };

  const handleItemRemove = (id) => {
    console.log("item remove", id);
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList
          items={items}
          handleItemCheckboxChange={handleItemCheckboxChange}
          handleItemRemove={handleItemRemove}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
