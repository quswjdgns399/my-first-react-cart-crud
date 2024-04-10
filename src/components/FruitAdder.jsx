import { useState } from "react";
import s from "./FruitAdder.module.css";

// eslint-disable-next-line react/prop-types
export default function FruitAdder({ onAdd }) {
  const [fruitName, setFruitName] = useState("");
  const [fruitPrice, setFruitPrice] = useState("");

  const handleNameChange = (e) => {
    setFruitName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setFruitPrice(e.target.value);
  };

  const addFruit = () => {
    onAdd({ name: fruitName, price: fruitPrice });
    setFruitName("");
    setFruitPrice("");
  };

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        value={fruitName}
        onChange={handleNameChange}
        placeholder="과일 이름"
        style={{ color: "black" }}
      />
      <input
        type="text"
        value={fruitPrice}
        onChange={handlePriceChange}
        placeholder="과일 가격"
        style={{ color: "black" }}
      />
      <button type="button" onClick={addFruit}>
        🍏 과일 추가
      </button>
    </div>
  );
}
