import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: JSON.parse(localStorage.getItem("items")) || initialItems,
      removeAllItems: () => {
    console.log("remove all items");
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    console.log("reset to initial");
    set(() => ({ items: initialItems }));
  },
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      isComplete: false,
    };
    console.log("add item", newItem);
    set((state) => ({ items: [...state.items, newItem] }));
  },
  toggleItem: (id) => {
    console.log("item checkbox change", id);
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      ),
    }));
  },
  deleteItem: (id) => {
    console.log("item remove", id);
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  markAllAsComplete: () => {
    console.log("mark all as complete");
    set((state) => ({
      items: state.items.map((item) => ({ ...item, isComplete: true })),
    }));
  },
  markAllAsIncomplete: () => {
    console.log("mark all as incomplete");
    set((state) => ({
        items: state.items.map((item) => ({ ...item, isComplete: false })),
      }));
    },
  }),
  {
    name: "items",
  }
));
