import React, { useState, useEffect } from "react";
import styles from "./Offer.module.css";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const allItemsId = "all";

  const [cardItems, setCardItems] = useState([]); // Изменяем на состояние
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setCardItems(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке товаров:", error);
      });
  }, []);

  const handleCheckboxChange = (id) => {
    if (id === allItemsId) {
      // Если нажат "выбрать все"
      if (selectedItems.includes(allItemsId)) {
        setSelectedItems([]); // Снимаем все выделения
      } else {
        setSelectedItems([allItemsId, ...cardItems.map((item) => item.id)]); // Выбираем все
      }
    } else {
      setSelectedItems((prev) => {
        if (prev.includes(id)) {
          const newSelected = prev.filter(
            (item) => item !== id && item !== allItemsId
          );
          return newSelected;
        } else {
          const newSelected = [...prev, id];
          // Проверяем, выбраны ли все карточки
          if (cardItems.every((item) => newSelected.includes(item.id))) {
            return [...newSelected, allItemsId];
          }
          return newSelected;
        }
      });
    }
  };
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
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
              onChange={() => handleCheckboxChange(allItemsId)}
              checked={selectedItems.includes(allItemsId)}
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
        {cardItems.map((item) => (
          <div className={styles.card} key={item.id}>
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
                onChange={() => handleCheckboxChange(item.id)}
                checked={selectedItems.includes(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {selectedItems.length > 0 && (
        <button
          className={styles.submitButton}
          onClick={() => {
            navigate("/Requestoffer");
          }}
        >
          Сделать предложение
        </button>
      )}
    </div>
  );
};

export default Offer;
