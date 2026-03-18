const form = document.getElementById("contactForm");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const text = document.getElementById("message").value.trim();

if(name.length < 3){
message.textContent = "Name must be at least 3 characters";
message.style.color = "red";
return;
}

if(!email.includes("@")){
message.textContent = "Please enter a valid email";
message.style.color = "red";
return;
}

if(text.length < 10){
message.textContent = "Message must be at least 10 characters";
message.style.color = "red";
return;
}

message.textContent = "Message sent successfully!";
message.style.color = "green";

form.reset();

});

// ============================
// Weather za Stockholm
// ============================
const weatherInfo = document.getElementById("weather-info");
const weatherIcon = document.getElementById("weather-icon");

const apiKey = "669362dc1a46162b3966341d3c8201f4"; // tvoj API ključ
const city = "Stockholm";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon; // kod ikone iz OpenWeatherMap

    // prikaz teksta
    weatherInfo.textContent = `${city}: ${temp}°C, ${description}`;

    // postavljanje ikone
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = description;
  })
  .catch(() => {
    weatherInfo.textContent = "Weather data could not be loaded";
    weatherIcon.src = "";
  });

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu i hamburger animaciju
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Zatvaranje menija kada klikneš link
const links = document.querySelectorAll("#nav-links a");
links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});