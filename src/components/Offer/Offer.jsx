import React from "react";
import styles from "./Offer.module.css";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.header}>
        {" "}
        <div className={styles.logos}>
          <img className={styles.logo} src="/BANSYS.png" alt="" />
          <img
            className={styles.arrow}
            src="/arrow.png"
            alt=""
            onClick={handleBackClick}
            style={{ cursor: "pointer" }} // Добавьте стиль курсора для указания, что элемент кликабелен
          />
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.offer}>Сделать предложение </p>
        <div className={styles.chooseAll}>
          <p className={styles.offer}>Выбрать</p>
          <div className={styles.checkboxAll}>
            <p> все</p>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              onChange={() => handleCheckboxChange(id)}
              checked={selectedItems.includes(id)}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <p>Наименование</p>
          </div>

          <div className={styles.buttonsSm}>
            <div className={styles.button}>
              <p>состояние</p>
            </div>
            <div className={styles.button}>
              <p>кол-во</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p>Станины для Mei Advance  с чипом….. </p>
            <div className={styles.usedCount}>
              <p>б/у</p>
              <p>15</p>
            </div>
          </div>
          <div className={styles.cardAbout}>
            <div className={styles.pN}>
              <p>p/n:</p>
              <p>1234567890111</p>
              <img src="/Group 9264.png" alt="" />
            </div>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              onChange={() => handleCheckboxChange(id)}
              checked={selectedItems.includes(id)}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p>Станины для Mei Advance  с чипом….. </p>
            <div className={styles.usedCount}>
              <p>б/у</p>
              <p>15</p>
            </div>
          </div>
          <div className={styles.cardAbout}>
            <div className={styles.pN}>
              <p>p/n:</p>
              <p>1234567890111</p>
              <img src="/Group 9264.png" alt="" />
            </div>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
              onChange={() => handleCheckboxChange(id)}
              checked={selectedItems.includes(id)}
            />
          </div>
        </div>
      </div>
      {selectedItems.length > 0 && (
        <button className={styles.submitButton}>Отправить предложение</button>
      )}
    </div>
  );
};

export default Offer;
