// App.jsx

import s from "./App.module.css";
import FruitItem from "./components/FruitItem";
import Header from "./components/Header";
import FruitAdder from "./components/FruitAdder";
import useFruitManager from "./components/useFruitManager";

export default function App() {
  const { fruits, addFruit, deleteFruit } = useFruitManager();

  return (
    <>
      <main className={s.mainContainer}>
        <div className={s.pageContainer}>
          <div className={s.appContainer}>
            <form className={s.form}>
              <div className={s.fieldset}>
                <h2>장바구니 애플리케이션</h2>
                <Header />
                {fruits.map((f) => (
                  <FruitItem
                    key={f.id}
                    id={f.id}
                    name={f.name}
                    price={f.price}
                    onDelete={deleteFruit}
                  ></FruitItem>
                ))}
                <FruitAdder onAdd={addFruit} />
                <span>{"🧺 총액 : " + 1234}</span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
