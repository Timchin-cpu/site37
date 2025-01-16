import React, { useState, useEffect } from "react";
import styles from "./Requestoffer.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Requestoffer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];  
  console.log(selectedItems);
  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  const tg = window.Telegram.WebApp;
  const tgUserId = tg.initDataUnsafe.user.id;
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // console.log(userData);

  useEffect(() => {
    // Запрос к серверу для получения данных пользователя
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${tgUserId}`);
        const data = await response.json();
        console.log(data);

        if (data) {
          setUserData({
            name: data.name || "",
            phone: data.phone || "",
            email: data.email || "",
          });
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchUserData();
  }, [tgUserId]);
  const handleSubmit = () => {
    if (!userData.name || !userData.phone || !userData.email || !message) {
      alert("Пожалуйста, заполните все поля, включая сообщение");
      return;
    }

    // Получаем русскую версию текста
    const russianBrand = t("Request for an offer", { lng: "ru" });

    // Отправка данных на сервер
    fetch("/api/submit1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        userId: tgUserId,
        // type: selectedOption,
        message: message,
        brand: russianBrand, // Добавляем русскую версию текста
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Данные успешно отправлены");
      })
      .catch((error) => {
        console.error("Ошибка при отправке:", error);
        alert("Произошла ошибка при отправке");
      });
  };
  const handleInputChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
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
          <h1>{t("Request for an offer")}</h1>{" "}
          <div className={styles.input}>
            <p>{t("Respectful Name")}</p>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <p>{t("Telephone")}</p>
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <p>E-mail</p>
            <input
              type="text"
              value={userData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
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
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <p> {t("Agree to process personal data")}</p>
          </div>
          <div className={styles.send}>
            <button onClick={handleSubmit}>{t("send")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestoffer;
