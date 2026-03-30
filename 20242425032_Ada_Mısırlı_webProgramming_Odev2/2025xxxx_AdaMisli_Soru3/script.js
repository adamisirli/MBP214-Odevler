let ilkSayi = 0;
let ikinciSayi = 1;
let sayac = 1;
let sonucAlani = document.getElementById("sonuc");
let metin = "";

while (sayac <= 20) {
  metin += `<div class="sayi">${sayac}. sayı: ${ilkSayi}</div>`;

  let gecici = ilkSayi + ikinciSayi;
  ilkSayi = ikinciSayi;
  ikinciSayi = gecici;
  sayac++;
}

sonucAlani.innerHTML = metin;
