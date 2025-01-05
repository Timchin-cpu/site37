import React from "react";
import styles from "./Offer.module.css";
import { useNavigate } from "react-router-dom";

const Offer = () => {
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
        <p>Сделать предложение </p>
        <div></div>
        <div>
          <p>Наименование</p>
          <div>
            <p>состояние</p>
            <p>кол-во</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
