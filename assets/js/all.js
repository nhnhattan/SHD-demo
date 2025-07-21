const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("close-menu");
const transBtn = document.getElementById("translation-toggle");
const fullscreenBtn = document.getElementById("zoom-toggle");
const openMapBtn = document.getElementById("openMap");
const miniMap = document.getElementById("mini-map");
const websiteBtn = document.getElementById("website-button");
const websiteMenu = document.getElementById("website-popup");
const aboutToggle = document.getElementById("about-toggle");
const aboutPopup = document.getElementById("about-popup");
const closeAboutBtn = document.getElementById("close-about-popup");
const aboutInfor = document.getElementById("aboutUs");
const aboutImage = document.getElementById("imageUs");
const aboutVideo = document.getElementById("videoUs");

function openMenu() {
  menu.classList.remove("hidden");
}

function closeMenu() {
  menu.classList.add("hidden");

  document.querySelectorAll(".menu-group").forEach((group) => {
    group.classList.remove("active");

    const submenu = group.querySelector(".submenu");
    if (submenu) setHeightAuto(submenu, false);

    // Đóng tất cả submenu-toggle bên trong
    group.querySelectorAll(".submenu-toggle").forEach((btn) => {
      btn.classList.remove("active");
      const content = btn.nextElementSibling;
      if (content && content.classList.contains("submenu-content")) {
        setHeightAuto(content, false);
      }
    });
  });
}

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.contains("hidden") ? openMenu() : closeMenu();
  languageMenu.classList.add("hidden");
});

closeMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});

function setHeightAuto(el, expand) {
  if (expand) {
    el.style.height = el.scrollHeight + "px";
    el.addEventListener("transitionend", function handler() {
      el.style.height = "auto";
      el.removeEventListener("transitionend", handler);
    });
  } else {
    el.style.height = el.scrollHeight + "px";
    requestAnimationFrame(() => {
      el.style.height = "0px";
    });
  }
}

function closeAllSubmenusWithin(group) {
  group.querySelectorAll(".submenu-toggle").forEach((btn) => {
    btn.classList.remove("active");
    const content = btn.nextElementSibling;
    if (content && content.classList.contains("submenu-content")) {
      setHeightAuto(content, false);
    }
  });
}

document.querySelectorAll(".menu-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentGroup = btn.parentElement;
    const submenu = btn.nextElementSibling;
    const isActive = parentGroup.classList.contains("active");

    if (isActive) {
      parentGroup.classList.remove("active");
      setHeightAuto(submenu, false);
      closeAllSubmenusWithin(parentGroup);
    } else {
      document.querySelectorAll(".menu-group").forEach((group) => {
        if (group !== parentGroup) {
          group.classList.remove("active");
          const sub = group.querySelector(".submenu");
          if (sub) setHeightAuto(sub, false);
          closeAllSubmenusWithin(group);
        }
      });

      parentGroup.classList.add("active");
      setHeightAuto(submenu, true);
    }
  });
});

document.querySelectorAll(".submenu-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentGroup = btn.closest(".menu-group");
    const content = btn.nextElementSibling;
    const isActive = btn.classList.contains("active");

    parentGroup.querySelectorAll(".submenu-toggle").forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
        const otherContent = otherBtn.nextElementSibling;
        if (
          otherContent &&
          otherContent.classList.contains("submenu-content")
        ) {
          setHeightAuto(otherContent, false);
        }
      }
    });

    if (isActive) {
      btn.classList.remove("active");
      setHeightAuto(content, false);
    } else {
      btn.classList.add("active");
      setHeightAuto(content, true);
    }
  });
});

document
  .querySelector(".menu-container")
  .addEventListener("wheel", function (e) {
    e.preventDefault();
    this.scrollBy({
      top: e.deltaY < 0 ? -10 : 10,
      behavior: "smooth",
    });
  });

lucide.createIcons();

const languageMenu = document.getElementById("language-menu");
const translateToggle = document.getElementById("translation-toggle");

translateToggle.addEventListener("click", () => {
  languageMenu.classList.toggle("hidden");
  closeMenu();
});

document.addEventListener("click", (e) => {
  if (!languageMenu.contains(e.target) && !translateToggle.contains(e.target)) {
    languageMenu.classList.add("hidden");
  }
});

function toggleFullScreen() {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    document.querySelector("#zoom-toggle img").src =
      "./assets/img/zoom-out.png";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    document.querySelector("#zoom-toggle img").src = "./assets/img/zoom.png";
  }
}

fullscreenBtn.addEventListener("click", (e) => {
  toggleFullScreen();
});

function getQueryParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

var mediaValue = getQueryParam("media");

var markerPosition;

if (mediaValue === "main-shd") {
  markerPosition = [10.799403194044327, 106.7224868388116];
} else if (mediaValue === "DoXuanHopfacility") {
  markerPosition = [10.821701114531619, 106.77162359549077];
} else if (mediaValue === "dormitoryLeThiRieng") {
  markerPosition = [10.815059369649262, 106.77412181182721];
} else if (mediaValue === "dormitory620") {
  markerPosition = [10.81489418917185, 106.77439983424597];
} else if (mediaValue === "dormitory441/55A") {
  markerPosition = [10.803005, 106.712899];
} else if (mediaValue === "dormitory441/92") {
  markerPosition = [10.804052, 106.713324];
} else if (mediaValue === "dormitory441/112") {
  markerPosition = [10.804564, 106.713315];
}

var map = L.map("mini-map").setView(markerPosition, 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

var redIcon = L.icon({
  iconUrl: "./assets/img/marker.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

var marker = L.marker(markerPosition, { icon: redIcon }).addTo(map);

openMapBtn.addEventListener("click", () => {
  if (miniMap.classList.contains("hidden")) {
    miniMap.classList.remove("hidden");
    websiteMenu.classList.add("hidden");
    aboutPopup.classList.add("hidden");
  } else {
    miniMap.classList.add("hidden");
  }
});

websiteBtn.addEventListener("click", () => {
  if (websiteMenu.classList.contains("hidden")) {
    websiteMenu.classList.remove("hidden");
    miniMap.classList.add("hidden");
    aboutPopup.classList.add("hidden");
  } else {
    websiteMenu.classList.add("hidden");
  }
});

aboutToggle.addEventListener("click", () => {
  if (aboutPopup.classList.contains("hidden")) {
    aboutPopup.classList.remove("hidden");
    miniMap.classList.add("hidden");
    websiteMenu.classList.add("hidden");
  } else {
    aboutPopup.classList.add("hidden");
  }
  document.getElementById("about-content").style.display = "block";
  document.getElementById("about-image").style.display = "none";
  document.getElementById("about-video").style.display = "none";
  aboutInfor.classList.add("active");
  aboutImage.classList.remove("active");
  aboutVideo.classList.remove("active");
});

closeAboutBtn.addEventListener("click", () => {
  aboutPopup.classList.add("hidden");
});

aboutInfor.addEventListener("click", () => {
  document.getElementById("about-content").style.display = "block";
  document.getElementById("about-image").style.display = "none";
  document.getElementById("about-video").style.display = "none";
  aboutInfor.classList.add("active");
  aboutImage.classList.remove("active");
  aboutVideo.classList.remove("active");
});

aboutVideo.addEventListener("click", () => {
  document.getElementById("about-content").style.display = "none";
  document.getElementById("about-image").style.display = "none";
  document.getElementById("about-video").style.display = "block";
  aboutInfor.classList.remove("active");
  aboutImage.classList.remove("active");
  aboutVideo.classList.add("active");
});

aboutImage.addEventListener("click", () => {
  document.getElementById("about-content").style.display = "none";
  document.getElementById("about-image").style.display = "block";
  document.getElementById("about-video").style.display = "none";
  aboutInfor.classList.remove("active");
  aboutImage.classList.add("active");
  aboutVideo.classList.remove("active");
});
