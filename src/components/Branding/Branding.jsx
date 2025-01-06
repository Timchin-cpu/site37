import React, { useState, useEffect } from "react";
import styles from "./Branding.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Branding() {
  const tg = window.Telegram.WebApp;
  const tgUserId = tg.initDataUnsafe.user.id
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  console.log(userData);

  useEffect(() => {
    // Запрос к серверу для получения данных пользователя
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${tgUserId}`);
        const data = await response.json();
        console.log(data);
        
        if (data) {
          setUserData({
            name: data.name || '',
            phone: data.phone || '',
            email: data.email || ''
          });
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchUserData();
  }, [tgUserId]);
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    `${t("Request for sales quotation")}`
  );

  const options = [
    { value: "painting", label: `${t("dyeing")}` },
    { value: "wrapping", label: `${t("Paste")}` },
    { value: "other", label: `${t("Other")}` },
  ];
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <div className={styles.logo}>
          {" "}
          <p>{t("brand")}</p>
          <img
            className={styles.arrow}
            src="/arrow.png"
            alt=""
            onClick={handleBackClick}
            style={{ cursor: "pointer" }} // Добавьте стиль курсора для указания, что элемент кликабелен
          />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.main}>
          <div>
            <div className={styles.borderText}>
              <p className={styles.firstText}>
                {t("The brand is developed in its own paint workshop.")}
              </p>
            </div>
            <div className={styles.borderText}>
              <p>
                {t(
                  "The company's highly qualified experts will complete the full cycle of self-service banking equipment branding, from disassembly and paint preparation to sticker and finished product packaging. "
                )}
              </p>
            </div>
            <div className={styles.borderText}>
              <p>
                {t(
                  "Strict quality control is implemented throughout the entire work process."
                )}
              </p>
            </div>
            <div className={styles.textContent}>
              <p>
                <b>
                  {t("The company adopts three main methods of ATM brand:")}
                </b>{" "}
                <br />
                <br />
                {t("1) Paste;")}
                <br />
                {t("2) Paint;")}
                <br />
                {t("3) The combination of paint and adhesive.")}
                <br />
                <br />
                {t("In addition, we can also provide the following services:")}
                <br />
                <br />
                {t("Visualization of object design layout;")}
                <br />
                {t("Customize ready-made design layouts based on equipment;")}
                <br />
                {t("Develop brand layout from scratch;")}
                <br />
                {t("Create advertising lighting design;")}
              </p>
            </div>
          </div>
          <div className={styles.supportImgs}>
            <img src="/wp.png" alt="" />
            <img src="/tg.png" alt="" />
            <img src="mail.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.selectContainer}>
          <div
            className={styles.selectHeader}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
            <img src="/down.png" alt="" />
          </div>
          {isOpen && (
            <div className={styles.optionsList}>
              {options.map((option, index) => (
                <React.Fragment key={option.value}>
                  <div
                    className={styles.option}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </div>
                  {(index === 0 || index === 1) && (
                    <hr className={styles.divider} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
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
        <div className={styles.attach}>
          <p>{t("Attach a file")}</p>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="coding" name="interest" value="coding" />
          <p> {t("Agree to process personal data")}</p>
        </div>
        <div className={styles.send}>
          {i18n.language !== "en" && <button>отправить</button>}
        </div>
        <p className={styles.textInfo}>
          {t(
            "If you need more information about hardware, you can visit the directory on our website"
          )}
        </p>
        <button className={styles.abouService}>
          {t("Regarding Services")}
        </button>
        <p className={styles.textInfo}>
          {t("The invitation link to our TELEGRAM bot")}
        </p>
        <div className={styles.tgWindow}>
          <p className={styles.textInfo}>{t("link")}</p>
          {i18n.language !== "en" && <img src="/windows.png" alt="" />}
        </div>
        <p className={styles.textInfo}>
          {t(
            "Detailed information about the company's services and products is available on the website bansys.ru"
          )}
        </p>
      </div>
    </div>
  );
}

export default Branding;
