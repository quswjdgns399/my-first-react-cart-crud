/* eslint-disable react/prop-types */
import s from "./FruitItem.module.css";

export default function FruitItem(props) {
  const { id, name, price, onDelete } = props;

  return (
    <div key={id} className={s.inputWrapper}>
      <span className={s.inputWrapperItem}>{name}</span>
      <span className={s.inputWrapperItem}>{price}</span>
      <input
        className={s.inputWrapperInput}
        id={`quantityInput_${id}`}
        name={`quantityInput_${id}`}
        type="number"
        min={0}
        step={1}
      />
      <button type="button">📝</button>
      <button type="button" onClick={() => onDelete(id)}>
        🗑️
      </button>
    </div>
  );
}
