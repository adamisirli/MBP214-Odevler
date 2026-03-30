function sonucuGoster(mesaj) {
  document.getElementById("result").textContent = mesaj;
  alert(mesaj);
}

document.getElementById("startBtn").addEventListener("click", function () {
  const yasGirisi = prompt("Lütfen yaşınızı giriniz:");
  const yas = Number(yasGirisi);

  if (isNaN(yas)) {
    sonucuGoster("Geçerli bir yaş giriniz!");
    return;
  }

  const ogrenciMi = confirm("Öğrenci misiniz?\nTamam = Evet\nİptal = Hayır");

  if (yas < 18) {
    sonucuGoster("Reşit değilsiniz.");
  } else if (yas >= 18 && ogrenciMi) {
    sonucuGoster("Hoşgeldiniz öğrenci!");
  } else {
    sonucuGoster("Hoşgeldiniz!");
  }
});
