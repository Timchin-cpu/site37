import React from "react";
import styles from "./RequestDisposal.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RequestDisposal = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <div className={styles.window}>
          <h1>{t("Disposal application")}</h1>{" "}
          <div className={styles.input}>
            <p>{t("Respectful Name")}</p>
            <input type="text" />
          </div>
          <div className={styles.input}>
            <p>{t("Telephone")}</p>
            <input type="text" />
          </div>
          <div className={styles.input}>
            <p>E-mail</p>
            <input type="text" />
          </div>
          <div className={styles.inputMsg}>
            <div>
              <h2>{t("signal communication")}</h2>
              <p>
                {t(
                  "In order to better form our company's commercial quotation, please indicate the model name and quantity Geographic location."
                )}
              </p>
            </div>
            <textarea></textarea>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <p> {t("Agree to process personal data")}</p>
          </div>
          <div className={styles.send}>
            <button>{t("send")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDisposal;
