import React, { useState } from "react";
import styles from "./Ransom.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Ransom() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    `${t("Request for sales quotation")}`
  );

  const options = [
    { value: "ATM", label: `${t("ATM")}` },
    { value: "Terminal", label: `${t("Terminal")}` },
    { value: "ZIP", label: `${t("ZIP")}` },
    { value: "other", label: `${t("Other")}` },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <div className={styles.logo}>
          {" "}
          <p>{t("ransom")}</p>
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
                {t(
                  "Bansys provides you with professional banking and related electrical equipment repurchase services, offering you favorable conditions and comprehensive support at all stages of the transaction."
                )}
              </p>
            </div>

            <div className={styles.textContent}>
              <p>
                <b>{t("Our advantages:")}</b>{" "}
                <ul>
                  <li>
                    {t(
                      "Rich market experience: We have many successful transactions and satisfied customers;"
                    )}
                  </li>
                  <li>
                    {t(
                      "Work throughout the Russian Federation and other countries around the world;"
                    )}
                  </li>
                  <li>
                    {t(
                      "Personalization: We meet your needs and offer competitive prices;"
                    )}
                  </li>
                  <li>
                    {t(
                      "Transaction Transparency: All terms are pre negotiated, and you will receive complete information about the process;"
                    )}
                  </li>
                  <li>
                    {t(
                      "Quick Design: We appreciate your time and ensure that all issues are resolved quickly;"
                    )}
                  </li>
                  <li>
                    {t(
                      "Our logistics: You don't need to search for transportation, we will arrange the export of the equipment we are interested in."
                    )}
                  </li>
                </ul>
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

export default Ransom;