async function sendDataToGoogleSheets() {
    const url = "https://script.google.com/macros/s/AKfycbxuO9suynKymoUSTaF8PyZutrIKLhtVBUtkmFZCxsyT9eMV1LhtLBrj2W8A9WDbL9Tjxw/exec"; // Вставьте ваш URL веб-приложения
  
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        alert("Данные успешно отправлены в Google Sheets!");
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ошибка подключения!");
    }
  }
  
  // Привязка к кнопке отправки
  document.getElementById("submitButton").addEventListener("click", sendDataToGoogleSheets);
  