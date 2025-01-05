import React from "react";
import styles from "./Provider.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Provider() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
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
        <div className={styles.questionSupport}>
          {" "}
          <p>{t("Ask a question")}</p>
          <div className={styles.questionSupportImgs}>
            <img className={styles.supportImg} src="/mail.png" alt="" />
            <img className={styles.supportImg} src="/tg.png" alt="" />
            <img className={styles.supportImg} src="/wp.png" alt="" />
          </div>
        </div>
        <div className={styles.mainConten}>
          <div className={styles.conten}>
            <img src="/vykup 1.png" alt="" />
            <div
              className={styles.textConten}
              style={{
                background: i18n.language === "en" ? "white" : "#ffdddd",
              }}
            >
              <h2>{t("Equipment repurchase")}</h2>
              <p>
                {t(
                  "Acquiring various banks and other related electrical equipment..."
                )}
              </p>
            </div>
          </div>
          <div className={styles.buttonConatiner}>
            <button>{t("propose")}</button>
          </div>
        </div>
        <div className={styles.mainContent}>
          <p>{t("View Bansys' current purchase projects")}</p>
          <img src="/forwardwh.png" alt="" />
        </div>
        <div className={styles.mainContenSec}>
          <div className={styles.conten}>
            <div
              className={styles.textConten}
              style={{
                background: i18n.language === "en" ? "white" : "#ffdddd",
              }}
            >
              <h2>{t("utilizeMax")}</h2>
              <p>
                {t(
                  "Recycling various electronic devices, household and office equipment, self-service devices, and other types of machines..."
                )}
              </p>
            </div>
            <img src="/utilisatsia2 1.png" alt="" />
          </div>
          <div className={styles.buttonConatiner}>
            <button>{t("order")}</button>
          </div>
        </div>

        <div className={styles.subscription}>
          <img className={styles.planeImg} src="/plane.png" alt="" />
          <div>
            <p className={styles.text}>{t("Subscribe to our")}</p>
            <p className={styles.titleText}>{t("Telegram")}</p>
            <p className={styles.text}>
              {t(
                "All new Bansys stocks and themed market news from one channel"
              )}
            </p>
            <button>{t("Go to channel")}</button>
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <p>
              {t("Link invited to our Telegram bot")}
              <br />
              https://
            </p>
          </div>
          <p>
            {t(
              "For detailed information about the company's services and products, please visit the Bans'.ru website"
            )}
            <span>{t("bansys.ru")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Provider;