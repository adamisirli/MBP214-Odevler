let bakiye = 1000;

function sonucuGoster(mesaj) {
  document.getElementById("result").textContent = mesaj;
  alert(mesaj);
}

document.getElementById("startBtn").addEventListener("click", function () {
  const islemKodu = prompt(
    "İşlem kodunu giriniz:\n1 - Bakiye Görüntüleme\n2 - Para Çekme\n3 - Para Yatırma"
  );

  switch (islemKodu) {
    case "1":
      sonucuGoster("Güncel bakiyeniz: " + bakiye + " TL");
      break;

    case "2": {
      const cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));

      if (isNaN(cekilecekTutar) || cekilecekTutar <= 0) {
        sonucuGoster("Geçerli bir tutar giriniz.");
      } else if (cekilecekTutar > bakiye) {
        sonucuGoster("Yetersiz bakiye!");
      } else {
        bakiye -= cekilecekTutar;
        sonucuGoster(
          "Para çekme işlemi başarılı. Kalan bakiyeniz: " + bakiye + " TL"
        );
      }
      break;
    }

    case "3": {
      const yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz:"));

      if (isNaN(yatirilacakTutar) || yatirilacakTutar <= 0) {
        sonucuGoster("Geçerli bir tutar giriniz.");
      } else {
        bakiye += yatirilacakTutar;
        sonucuGoster(
          "Para yatırma işlemi başarılı. Yeni bakiyeniz: " + bakiye + " TL"
        );
      }
      break;
    }

    default:
      sonucuGoster("Geçersiz işlem kodu seçtiniz.");
  }
});
