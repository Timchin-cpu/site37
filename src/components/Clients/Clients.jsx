import React, { useState } from "react";
import styles from "./Clients.module.css";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
function Clients() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  const handleBrandClick = () => {
    navigate("/Branding");
  };
  const handleDisposalClick = () => {
    navigate("/Disposal");
  };
  const handleRansomClick = () => {
    navigate("/Ransom");
  };
  const handleRentClick = () => {
    navigate("/Rent");
  };
  const handleSend = () => {
    setIsModalOpen(false);
  };
  const handleEquipmentspareClick = () => {
    navigate("/Equipmentspare");
  };
  const { t, i18n } = useTranslation();
  const handleMailClick = () => {
    const tg = window.Telegram.WebApp;
    if (tg.platform === "tdesktop") {
      // Для десктопной версии
      tg.openLink("mailto:sale@bansys.ru");
    } else {
      // Для остальных платформ
      window.open("mailto:sale@bansys.ru");
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обработчик клика по изображению
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText("https://t.me/bansysbot")
      .then(() => {
        console.log("Ссылка скопирована"); // Optional: показать уведомление
      })
      .catch((err) => {
        console.error("Ошибка при копировании:", err);
      });
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
            <img
              className={styles.supportImg}
              src="/mail.png"
              alt=""
              onClick={handleMailClick}
            />
            <img
              className={styles.supportImg}
              src="/tg.png"
              alt=""
              onClick={() => window.open("https://t.me/Bansys_chat")}
            />
            <img
              className={styles.supportImg}
              src="/wp.png"
              alt=""
              onClick={() => window.open("https://wa.me/79295022998")}
            />
          </div>
        </div>

        <div className={styles.navContents}>
          <div className={styles.equipment} onClick={handleEquipmentspareClick}>
            <p>{t("Equipment and spare parts")}</p>
            <img className={styles.texnImg} src="/texn.png" alt="" />
          </div>
          <div className={styles.navContentButtons}>
            <div className={styles.navContent} onClick={handleRentClick}>
              <p>{t("rental fee for equipment")}</p>
            </div>
            <div className={styles.navContent} onClick={handleRansomClick}>
              <p>{t("ransom")}</p>
            </div>
            <div className={styles.navContent} onClick={handleDisposalClick}>
              <p>{t("utilize")}</p>
            </div>
            <div className={styles.navContent} onClick={handleBrandClick}>
              <p>{t("brand")}</p>
            </div>
          </div>
        </div>
        <h2 className={styles.brandNames}>{t("SUPPLIED BRANDS")}</h2>
        <div className={styles.carousel}>
          {/* <img className={styles.arrowImgar} src="/arrow.png" alt="" /> */}
          <div className={styles.carouselImgs}>
            <img className={styles.companyImg} src="/dn.png" alt="" />
            <img className={styles.companyImg} src="/ncr.png" alt="" />
            <img className={styles.companyImg} src="/hyousung.png" alt="" />
            <img className={styles.companyImg} src="/oki.png" alt="" />
            <img className={styles.companyImg} src="/grg.png" alt="" />
            <img className={styles.companyImg} src="/wincor.png" alt="" />
          </div>
          <img
            className={styles.arrowImgfor}
            src="/forwarf.png"
            alt=""
            onClick={() => window.open("https://bansys.ru/company/brands/")}
          />
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
            <button onClick={() => window.open("https://t.me/Bansys_sale")}>
              {t("Go to channel")}
            </button>
          </div>
        </div>
        <div className={styles.mailing}>
          <p style={{ color: i18n.language === "en" ? "black" : "white" }}>
            {t(
              "Subscribe to the newsletter. News, popular stocks, sales, inventory clearance."
            )}
          </p>
          <img
            src="/forwardwh.png"
            alt=""
            onClick={handleModalOpen}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.footer}>
          <div>
            <p onClick={handleCopyLink} style={{ cursor: "pointer" }}>
              {t("Link invited to our Telegram bot")}
              <br />
              https://t.me/bansysbot
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
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* Содержимое модального окна */}
            {/* <button onClick={() => setIsModalOpen(false)}>Закрыть</button> */}
            <div className={styles.imgArrow}>
              <img
                src="/down.png"
                alt=""
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <input type="text" placeholder="Введите ваш e-mail" />
            <button onClick={handleSend}>Отправить</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clients;
