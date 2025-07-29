const menu = document.getElementById("menu");
const aboutToggle = document.getElementById("about-toggle");
const aboutPopup = document.getElementById("about-popup");
const closeAboutBtn = document.getElementById("close-about-popup");
const aboutInfor = document.getElementById("aboutUs");
const aboutImage = document.getElementById("imageUs");
const aboutVideo = document.getElementById("videoUs");
const websiteBtn = document.getElementById("website-button");
const websiteMenu = document.getElementById("website-popup");
const languageMenu = document.getElementById("language-menu");

lucide.createIcons();

const deviceLocations = {
  desktop: [
    // {
    //   markerLatLng: [10.815059369649262, 106.77412181182721],
    //   popupLatLng: [10.820059, 106.765121],
    //   cornerPoint: [10.815059, 106.765121],
    //   description: "Ký Túc Xá<br/>LÊ THỊ<br/>RIÊNG",
    //   locationImg: "./assets/img/ktxltr.png",
    //   locationLink: "./home.htm?media=dormitoryLeThiRieng",
    //   // locationInfo: "Số 1 đường 9, Phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.81489418917185, 106.77439983424597],
      popupLatLng: [10.803059, 106.7684],
      cornerPoint: [10.815059, 106.7684],
      description: "Ký Túc Xá<br/>620 ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/620dxh.jpg",
      locationLink: "./home.htm?media=dormitory620",
      // locationInfo: "620 Đỗ Xuân Hợp, Phường Phước Bình, TP. Thủ Đức"
    },
    {
      markerLatLng: [10.799403194044327, 106.7224868388116],
      popupLatLng: [10.805403, 106.740487],
      cornerPoint: [10.799403, 106.740487],
      description: "TRỤ SỞ SHD",
      locationImg: "./assets/img/mainshd.png",
      locationLink: "./home.htm?media=main-shd",
      datakey: "headquarters",
      // locationInfo: "679 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh"
    },
    {
      markerLatLng: [10.821701114531619, 106.77162359549077],
      popupLatLng: [10.824501, 106.764624],
      cornerPoint: [10.821701114531619, 106.764624],
      description: "CƠ SỞ<br/>ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/520dxh.png",
      locationLink: "./home.htm?media=DoXuanHopfacility",
      datakey: "doxuanhop-Campus",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804052, 106.713324],
    //   popupLatLng: [10.806052, 106.704324],
    //   cornerPoint: [10.804052, 106.704324],
    //   description: "Ký Túc Xá<br/>441/92<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/44192.jpg",
    //   locationLink: "./home.htm?media=dormitory441/92",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.803005, 106.712899],
      popupLatLng: [10.808505, 106.712899],
      cornerPoint: [10.803005, 106.712899],
      description: "Ký Túc Xá<br/>441/55A<br/>ĐIỆN BIÊN PHỦ",
      locationImg: "./assets/img/44155A.jpg",
      locationLink: "./home.htm?media=dormitory441/55A",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804564, 106.713315],
    //   popupLatLng: [10.807052, 106.720315],
    //   cornerPoint: [10.804564, 106.720315],
    //   description: "Ký Túc Xá<br/>441/112<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/441112.jpg",
    //   locationLink: "./home.htm?media=dormitory441/112",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
  ],
  lgDesktop: [
    // {
    //   markerLatLng: [10.815059369649262, 106.77412181182721],
    //   popupLatLng: [10.820059, 106.765121],
    //   cornerPoint: [10.815059, 106.765121],
    //   description: "Ký Túc Xá<br/>LÊ THỊ<br/>RIÊNG",
    //   locationImg: "./assets/img/ktxltr.png",
    //   locationLink: "./home.htm?media=dormitoryLeThiRieng",
    //   // locationInfo: "Số 1 đường 9, Phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.81489418917185, 106.77439983424597],
      popupLatLng: [10.805059, 106.7704],
      cornerPoint: [10.814059, 106.7704],
      description: "Ký Túc Xá<br/>620 ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/620dxh.jpg",
      locationLink: "./home.htm?media=dormitory620",
      // locationInfo: "620 Đỗ Xuân Hợp, Phường Phước Bình, TP. Thủ Đức"
    },
    {
      markerLatLng: [10.799403194044327, 106.7224868388116],
      popupLatLng: [10.805403, 106.745487],
      cornerPoint: [10.799403, 106.745487],
      description: "TRỤ SỞ SHD",
      locationImg: "./assets/img/mainshd.png",
      locationLink: "./home.htm?media=main-shd",
      datakey: "headquarters",
      // locationInfo: "679 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh"
    },
    {
      markerLatLng: [10.821701114531619, 106.77162359549077],
      popupLatLng: [10.824501, 106.760624],
      cornerPoint: [10.822701, 106.760624],
      description: "CƠ SỞ<br/>ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/520dxh.png",
      locationLink: "./home.htm?media=DoXuanHopfacility",
      datakey: "doxuanhop-Campus",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804052, 106.713324],
    //   popupLatLng: [10.806052, 106.710324],
    //   cornerPoint: [10.804052, 106.710324],
    //   description: "Ký Túc Xá<br/>441/92<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/44192.jpg",
    //   locationLink: "./home.htm?media=dormitory441/92",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.803005, 106.712899],
      popupLatLng: [10.805505, 106.725899],
      cornerPoint: [10.803005, 106.725899],
      description: "Ký Túc Xá<br/>441/55A<br/>ĐIỆN BIÊN PHỦ",
      locationImg: "./assets/img/44155A.jpg",
      locationLink: "./home.htm?media=dormitory441/55A",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804564, 106.713315],
    //   popupLatLng: [10.807052, 106.718315],
    //   cornerPoint: [10.804564, 106.718315],
    //   description: "Ký Túc Xá<br/>441/112<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/441112.jpg",
    //   locationLink: "./home.htm?media=dormitory441/112",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
  ],
  smDesktop: [
    // {
    //   markerLatLng: [10.815059369649262, 106.77412181182721],
    //   popupLatLng: [10.820059, 106.762121],
    //   cornerPoint: [10.815059, 106.762121],
    //   description: "Ký Túc Xá<br/>LÊ THỊ<br/>RIÊNG",
    //   locationImg: "./assets/img/ktxltr.png",
    //   locationLink: "./home.htm?media=dormitoryLeThiRieng",
    //   // locationInfo: "Số 1 đường 9, Phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.81489418917185, 106.77439983424597],
      popupLatLng: [10.819059, 106.7884],
      cornerPoint: [10.815059, 106.7884],
      description: "Ký Túc Xá<br/>620 ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/620dxh.jpg",
      locationLink: "./home.htm?media=dormitory620",
      // locationInfo: "620 Đỗ Xuân Hợp, Phường Phước Bình, TP. Thủ Đức"
    },
    {
      markerLatLng: [10.799403194044327, 106.7224868388116],
      popupLatLng: [10.811403, 106.745487],
      cornerPoint: [10.799403, 106.745487],
      description: "TRỤ SỞ SHD",
      locationImg: "./assets/img/mainshd.png",
      locationLink: "./home.htm?media=main-shd",
      datakey: "headquarters",
      // locationInfo: "679 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh"
    },
    {
      markerLatLng: [10.821701114531619, 106.77162359549077],
      popupLatLng: [10.828501, 106.766624],
      cornerPoint: [10.822701, 106.766624],
      description: "CƠ SỞ<br/>ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/520dxh.png",
      locationLink: "./home.htm?media=DoXuanHopfacility",
      datakey: "doxuanhop-Campus",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804052, 106.713324],
    //   popupLatLng: [10.810052, 106.704324],
    //   cornerPoint: [10.804052, 106.704324],
    //   description: "Ký Túc Xá<br/>441/92<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/44192.jpg",
    //   locationLink: "./home.htm?media=dormitory441/92",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.803005, 106.712899],
      popupLatLng: [10.812505, 106.712899],
      cornerPoint: [10.812005, 106.712899],
      description: "Ký Túc Xá<br/>441/55A<br/>ĐIỆN BIÊN PHỦ",
      locationImg: "./assets/img/44155A.jpg",
      locationLink: "./home.htm?media=dormitory441/55A",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804564, 106.713315],
    //   popupLatLng: [10.810052, 106.718315],
    //   cornerPoint: [10.804564, 106.718315],
    //   description: "Ký Túc Xá<br/>441/112<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/441112.jpg",
    //   locationLink: "./home.htm?media=dormitory441/112",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
  ],
  tablet: [
    // {
    //   markerLatLng: [10.815059369649262, 106.77412181182721],
    //   popupLatLng: [10.820059, 106.762121],
    //   cornerPoint: [10.815059, 106.762121],
    //   description: "Ký Túc Xá<br/>LÊ THỊ<br/>RIÊNG",
    //   locationImg: "./assets/img/ktxltr.png",
    //   locationLink: "./home.htm?media=dormitoryLeThiRieng",
    //   // locationInfo: "Số 1 đường 9, Phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.81489418917185, 106.77439983424597],
      popupLatLng: [10.800059, 106.7684],
      cornerPoint: [10.815059, 106.7684],
      description: "Ký Túc Xá<br/>620 ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/620dxh.jpg",
      locationLink: "./home.htm?media=dormitory620",
      // locationInfo: "620 Đỗ Xuân Hợp, Phường Phước Bình, TP. Thủ Đức"
    },
    {
      markerLatLng: [10.799403194044327, 106.7224868388116],
      popupLatLng: [10.810403, 106.742487],
      cornerPoint: [10.799403, 106.742487],
      description: "TRỤ SỞ SHD",
      locationImg: "./assets/img/mainshd.png",
      locationLink: "./home.htm?media=main-shd",
      datakey: "headquarters",
      // locationInfo: "679 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh"
    },
    {
      markerLatLng: [10.821701114531619, 106.77162359549077],
      popupLatLng: [10.828501, 106.771624],
      cornerPoint: [10.822701, 106.771624],
      description: "CƠ SỞ<br/>ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/520dxh.png",
      locationLink: "./home.htm?media=DoXuanHopfacility",
      datakey: "doxuanhop-Campus",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804052, 106.713324],
    //   popupLatLng: [10.826052, 106.709324],
    //   cornerPoint: [10.804052, 106.709324],
    //   description: "Ký Túc Xá<br/>441/92<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/44192.jpg",
    //   locationLink: "./home.htm?media=dormitory441/92",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.803005, 106.712899],
      popupLatLng: [10.830505, 106.722899],
      cornerPoint: [10.820005, 106.722899],
      description: "Ký Túc Xá<br/>441/55A<br/>ĐIỆN BIÊN PHỦ",
      locationImg: "./assets/img/44155A.jpg",
      locationLink: "./home.htm?media=dormitory441/55A",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804564, 106.713315],
    //   popupLatLng: [10.827052, 106.720315],
    //   cornerPoint: [10.814564, 106.720315],
    //   description: "Ký Túc Xá<br/>441/112<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/441112.jpg",
    //   locationLink: "./home.htm?media=dormitory441/112",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
  ],
  mobile: [
    // {
    //   markerLatLng: [10.815059369649262, 106.77412181182721],
    //   popupLatLng: [10.750059, 106.765121],
    //   cornerPoint: [10.755059, 106.765121],
    //   description: "Ký Túc Xá<br/>LÊ THỊ<br/>RIÊNG",
    //   locationImg: "./assets/img/ktxltr.png",
    //   locationLink: "./home.htm?media=dormitoryLeThiRieng",
    //   // locationInfo: "Số 1 đường 9, Phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.81489418917185, 106.77439983424597],
      popupLatLng: [10.767059, 106.7724],
      cornerPoint: [10.767059, 106.7724],
      description: "Ký Túc Xá<br/>620 ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/620dxh.jpg",
      locationLink: "./home.htm?media=dormitory620",
      // locationInfo: "620 Đỗ Xuân Hợp, Phường Phước Bình, TP. Thủ Đức"
    },
    {
      markerLatLng: [10.799403194044327, 106.7224868388116],
      popupLatLng: [10.828403, 106.723487],
      cornerPoint: [10.799403, 106.7223487],
      description: "TRỤ SỞ SHD",
      locationImg: "./assets/img/mainshd.png",
      locationLink: "./home.htm?media=main-shd",
      datakey: "headquarters",
      // locationInfo: "679 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh"
    },
    {
      markerLatLng: [10.821701114531619, 106.77162359549077],
      popupLatLng: [10.854501, 106.778624],
      cornerPoint: [10.830701, 106.778624],
      description: "CƠ SỞ<br/>ĐỖ XUÂN HỢP",
      locationImg: "./assets/img/520dxh.png",
      locationLink: "./home.htm?media=DoXuanHopfacility",
      datakey: "doxuanhop-Campus",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804052, 106.713324],
    //   popupLatLng: [10.846052, 106.688324],
    //   cornerPoint: [10.804052, 106.688324],
    //   description: "Ký Túc Xá<br/>441/92<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/44192.jpg",
    //   locationLink: "./home.htm?media=dormitory441/92",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
    {
      markerLatLng: [10.803005, 106.712899],
      popupLatLng: [10.716505, 106.750899],
      cornerPoint: [10.770005, 106.720899],
      description: "Ký Túc Xá<br/>441/55A<br/>ĐIỆN BIÊN PHỦ",
      locationImg: "./assets/img/44155A.jpg",
      locationLink: "./home.htm?media=dormitory441/55A",
      // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    },
    // {
    //   markerLatLng: [10.804564, 106.713315],
    //   popupLatLng: [10.720052, 106.690315],
    //   cornerPoint: [10.770564, 106.690315],
    //   description: "Ký Túc Xá<br/>441/112<br/>ĐIỆN BIÊN PHỦ",
    //   locationImg: "./assets/img/441112.jpg",
    //   locationLink: "./home.htm?media=dormitory441/112",
    //   // locationInfo: "502 Đỗ Xuân Hợp, phường Phước Bình, TP. Thủ Đức"
    // },
  ],
};

function getDeviceType() {
  const width = window.innerWidth;
  if (width < 576) return "mobile";
  if (width >= 576 && width < 992) return "tablet";
  if (width >= 993 && width < 1441) return "smDesktop";
  if (width >= 1921) return "lgDesktop";
  return "desktop";
}

function initMap() {
  const deviceType = getDeviceType();
  const locations = deviceLocations[deviceType];

  const mapConfig = {
    mobile: {
      center: [10.800059, 106.744122],
      zoom: 12,
      zoomSnap: 0.1,
    },
    tablet: {
      center: [10.822059, 106.744122],
      zoom: 13.8,
      zoomSnap: 0.1,
    },
    smDesktop: {
      center: [10.820059, 106.744122],
      zoom: 13.7,
      zoomSnap: 0.1,
    },
    lgDesktop: {
      center: [10.818059, 106.745122],
      zoom: 15.2,
      zoomSnap: 0.1,
    },
    desktop: {
      center: [10.813059, 106.744122],
      zoom: 15,
      zoomSnap: 0.1,
    },
  };

  const map = L.map("map", {
    zoomSnap: mapConfig[deviceType].zoomSnap,
  }).setView(mapConfig[deviceType].center, mapConfig[deviceType].zoom);

  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution: "© OpenStreetMap contributors",
  // }).addTo(map);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; CARTO",
    }
  ).addTo(map);

  locations.forEach((location) => {
    L.popup({
      closeButton: false,
      autoClose: false,
      closeOnClick: false,
      className: `custom-popup ${deviceType}-popup`,
    })
      .setLatLng(location.popupLatLng)
      .setContent(
        location.locationImg === "./assets/img/620dxh.jpg"
          ? `<div class="custom-popup custom-popup-group">
              <p data-key="doxuanhop-dormitory">Ký Túc Xá Đỗ Xuân Hợp</p>
              <div class="custom-popup-option">
                <a href="./home.htm?media=dormitoryLeThiRieng" class="custom-item"
                  ><div>
                    <strong data-key="ltr">Lê Thị Riêng</strong>
                  </div>
                  <div class="popup-image">
                    <img src="./assets/img/ktxltr.png" alt="" />
                  </div>
                </a>
                <a href="./home.htm?media=dormitory620" class="custom-item">
                  <div>
                    <strong data-key="dxh">Đỗ Xuân Hợp</strong>
                  </div>
                  <div class="popup-image">
                    <img src="./assets/img/620dxh.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>`
          : location.locationImg === "./assets/img/44155A.jpg"
          ? `<div class="custom-popup custom-popup-group">
              <p data-key="dienbienphu-dormitory">
                Ký Túc Xá Điện Biên Phủ
              </p>
              <div class="custom-popup-option">
                <a href="./home.htm?media=dormitory441/92" class="custom-item"
                  ><div>
                    <strong data-key="441/92">SỐ 441/92</strong>
                  </div>
                  <div class="popup-image">
                    <img src="./assets/img/44192.jpg" alt="" />
                  </div>
                </a>
                <a
                  href="./home.htm?media=dormitory441/55A
                        "
                  class="custom-item"
                >
                  <div>
                    <strong data-key="441/55A">SỐ 441/55A</strong>
                  </div>
                  <div class="popup-image">
                    <img src="./assets/img/44155A.jpg" alt="" />
                  </div>
                </a>
                <a href="./home.htm?media=dormitory441/112" class="custom-item">
                  <div>
                    <strong data-key="441/112">SỐ 441/112</strong>
                  </div>
                  <div class="popup-image">
                    <img src="./assets/img/441112.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>`
          : `<a href="${location.locationLink}" class="custom-popup">
              <div class="popup-image">
                <img src="${location.locationImg}" alt="">
              </div>
              <div class="popup-description">
                <strong data-key="${location.datakey}">${location.description}</strong>            
                <button class="popup-button">Đi đến</button>
              </div>
            </a>`
      )
      .openOn(map);

    const dotIcon = L.divIcon({
      className: `${deviceType}-dot`,
      html: '<div class="dot"></div>',
      iconSize: deviceType === "mobile" ? [10, 10] : [12, 12],
      iconAnchor: deviceType === "mobile" ? [8, 8] : [10, 10],
    });
    L.marker(location.markerLatLng, { icon: dotIcon }).addTo(map);

    const path = [
      location.popupLatLng,
      location.cornerPoint,
      location.markerLatLng,
    ];
    const polyline = L.polyline(path, {
      color: "#da2527",
      weight: deviceType === "mobile" ? 2 : 2,
    }).addTo(map);

    const movingDot = L.marker(location.popupLatLng, {
      icon: L.divIcon({
        className: `${deviceType}-moving-dot`,
        html: '<div class="moving-dot"></div>',
        iconSize: deviceType === "mobile" ? [8, 8] : [10, 10],
        iconAnchor: deviceType === "mobile" ? [7, 7] : [9, 9],
      }),
    }).addTo(map);

    let progress = 0;
    const speed = deviceType === "mobile" ? 0.002 : 0.003;

    function animateDot() {
      if (progress > 1) progress = 0;
      const latlng = getPolylinePoint(path, progress);
      movingDot.setLatLng(latlng);
      progress += speed;
      requestAnimationFrame(animateDot);
    }

    animateDot();
  });

  function getPolylinePoint(path, t) {
    if (t <= 0) return path[0];
    if (t >= 1) return path[path.length - 1];

    const total = path.length - 1;
    const seg = Math.floor(t * total);
    const segT = t * total - seg;
    const p0 = L.latLng(path[seg]);
    const p1 = L.latLng(path[seg + 1]);

    const lat = p0.lat + (p1.lat - p0.lat) * segT;
    const lng = p0.lng + (p1.lng - p0.lng) * segT;
    return [lat, lng];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initMap();

  let currentDevice = getDeviceType();
  window.addEventListener("resize", function () {
    const newDevice = getDeviceType();
    if (newDevice !== currentDevice) {
      currentDevice = newDevice;
      document.getElementById("map").innerHTML = "";
      initMap();
    }
  });
});

document.getElementById("menu-toggle").addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.contains("hidden")
    ? menu.classList.remove("hidden")
    : menu.classList.add("hidden");
});

document.querySelectorAll(".submenu").forEach(function (submenu) {
  submenu.addEventListener("click", function () {
    document.querySelectorAll(".submenu.active").forEach(function (openMenu) {
      if (openMenu !== submenu) {
        openMenu.classList.remove("active");
      }
    });

    submenu.classList.toggle("active");
  });
});

if (getDeviceType() === "mobile" || getDeviceType() === "tablet") {
  document.getElementById("menu-toggle").style.display = "flex";
  document.getElementById("menu").classList.add("hidden");
}

websiteBtn.addEventListener("click", () => {
  if (websiteMenu.classList.contains("hidden")) {
    websiteMenu.classList.remove("hidden");
    aboutPopup.classList.add("hidden");
  } else {
    websiteMenu.classList.add("hidden");
  }
});

aboutToggle.addEventListener("click", () => {
  if (aboutPopup.classList.contains("hidden")) {
    aboutPopup.classList.remove("hidden");
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

document.getElementById("translate-button").addEventListener("click", () => {
  if (document.getElementById("language-menu").classList.contains("hidden")) {
    document.getElementById("language-menu").classList.remove("hidden");
  } else {
    document.getElementById("language-menu").classList.add("hidden");
  }
});

localStorage.setItem("language", "vi");

document.getElementById("sound-button").addEventListener("click", () => {
  console.log(
    document.getElementById("sound-button").classList.contains("muted")
  );
  if (!document.getElementById("sound-button").classList.contains("muted")) {
    document.getElementById("sound-button").classList.add("muted");
    document.querySelector("#sound-button img").src = "./assets/img/muted.png";
  } else {
    document.getElementById("sound-button").classList.remove("muted");
    document.querySelector("#sound-button img").src = "./assets/img/sound.png";
  }
});
