import React, { useState } from "react";
import styles from "./Equipmentspare.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Equipmentspare() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    `${t("Request for sales quotation")}`
  );
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  // const options = [
  //   { value: "painting", label: "Окраска" },
  //   { value: "wrapping", label: "Оклейка" },
  //   { value: "other", label: "Другое" },
  // ];
  const options =
    i18n.language === "en"
      ? [
          {
            value: "ATM Terminal ZIP ATM",
            label: `${t("ATM Terminal ZIP ATM")}`,
          },
          {
            value: "Terminal ZIP Terminal",
            label: `${t("Terminal ZIP Terminal")}`,
          },
          { value: "other", label: `${t("Other")}` },
        ]
      : [
          { value: "ATM", label: `${t("ATM")}` },
          { value: "Terminal", label: `${t("Terminal")}` },
          {
            value: "ATM Terminal ZIP ATM",
            label: `${t("ATM Terminal ZIP ATM")}`,
          },
          {
            value: "Terminal ZIP Terminal",
            label: `${t("Terminal ZIP Terminal")}`,
          },
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
          <p>{t("Equipment and spare parts")}</p>
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
                  "The company is selling new products Self service banking equipment and spare parts refurbished by world leading manufacturers."
                )}
              </p>
            </div>
            <div className={styles.borderText}>
              <p>
                {t("Delivery comes with warranty and pre-sales preparation.")}
              </p>
            </div>
            <div className={styles.borderText}>
              <p>{t("It is possible to upgrade and supplement equipment.")}</p>
            </div>
            <div className={styles.borderText}>
              <p>
                {t(
                  "Previously used equipment still needs to be refurbished (remanufactured)."
                )}
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
                    {(index === 0 ||
                      index === 1 ||
                      index === 2 ||
                      index === 3) && <hr className={styles.divider} />}
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

export default Equipmentspare;
