const languages = {
  vi: {
    "main-building": "TRỤ SỞ CHÍNH - TÒA NHÀ SHD",
    "floor-g": "TẦNG G",
    "floor-1": "TẦNG 1",
    "floor-2": "TẦNG 2",
    "floor-3": "TẦNG 3",
    "floor-4": "TẦNG 4",
    "floor-5": "TẦNG 5",
    "kitchen": "Pantry",
    "about-us": "VỀ CHÚNG TÔI",
    "video-us": "VIDEO",
    "image-us": "HÌNH ẢNH",
  },
  en: {
    "main-building": "MAIN BUILDING - SHD TOWER",
    "floor-g": "FLOOR G",
    "floor-1": "FLOOR 1",
    "floor-2": "FLOOR 2",
    "floor-3": "FLOOR 3",
    "floor-4": "FLOOR 4",
    "floor-5": "FLOOR 5",
    "kitchen": "Kitchen",
    "about-us": "ABOUT US",
    "video-us": "VIDEO",
    "image-us": "IMAGE",
  },
  de: {
    "main-building": "HAUPTGEBAUDE - SHD TOWER",
    "floor-g": "GESCHOSS G",
    "floor-1": "GESCHOSS 1",
    "floor-2": "GESCHOSS 2",
    "floor-3": "GESCHOSS 3",
    "floor-4": "GESCHOSS 4",
    "floor-5": "GESCHOSS 5",
    "kitchen": "Küche",
    "about-us": "ÜBER UNS",
    "video-us": "VIDEO",
    "image-us": "BILD",
  },
};

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (languages[language][key]) {
      element.textContent = languages[language][key];
    }
  });

  localStorage.setItem("language", language);
}

function checkStoredLanguage() {
  const storedLanguage = localStorage.getItem("language");

  if (storedLanguage) {
    changeLanguage(storedLanguage);
  } else {
    changeLanguage("vi");
  }
}

document.getElementById("viBtn").addEventListener("click", () => {
  changeLanguage("vi");
  languageMenu.classList.toggle("hidden");
});
document.getElementById("enBtn").addEventListener("click", () => {
  changeLanguage("en");
  languageMenu.classList.toggle("hidden");
});
document.getElementById("deBtn").addEventListener("click", () => {
  changeLanguage("de");
  languageMenu.classList.toggle("hidden");
});

checkStoredLanguage();
