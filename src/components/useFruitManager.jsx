// useFruitManager.js
import { useState, useEffect } from "react";
import { data } from "../data";

export default function useFruitManager() {
  const initialFruits =
    JSON.parse(localStorage.getItem("fruits")) || data.fruits;
  const [fruits, setFruits] = useState(initialFruits);

  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);

  const addFruit = (fruit) => {
    const newFruit = {
      id: fruits.length + 1,
      ...fruit,
    };
    setFruits([...fruits, newFruit]);
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  return { fruits, addFruit, deleteFruit };
}
