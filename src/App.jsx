import { useState } from "react";
import "./App.css";
import styles from "./App.module.scss";

function App() {
  const [promptMessage, setPromptMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [listPromptMessage, setListPromptMessage] = useState([]);

  const getMessage = () => {
    const promptValue = prompt("Введите значение");

    setPromptMessage(promptValue);

    promptValue?.length < 3
      ? setErrorMessage("Введенное значение должно содержать минимум 3 символа")
      : setErrorMessage("");
  };

  return (
    <>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>
      <p className={styles["no-margin-text"]}>
        Текущее значение <code>value</code>: "
        <output className={styles["current-value"]}>{promptMessage}</output>"
      </p>
      <div className={styles["error"]}>{errorMessage}</div>
      <div className={styles["buttons-container"]}>
        <button className={styles["button"]} onClick={getMessage}>
          Ввести новое
        </button>
        <button
          className={styles["button"]}
          disabled={promptMessage.length < 3}
          onClick={() => {
            setListPromptMessage((prevPromptMessages) => [
              ...prevPromptMessages,
              promptMessage,
            ]);
            setPromptMessage("");
          }}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        <ul className={styles["list"]}>
          {listPromptMessage.map((message, i) => {
            return (
              <li key={message + i} className={styles["list-item"]}>
                {message}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
