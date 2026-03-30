let urunSayisi = Number(prompt("Kaç farklı ürün gireceksiniz?"));

while (isNaN(urunSayisi) || urunSayisi < 1) {
  urunSayisi = Number(prompt("Lütfen 1 veya daha büyük geçerli bir ürün sayısı giriniz."));
}

let urunler = [];
let sepetToplami = 0;

for (let i = 1; i <= urunSayisi; i++) {
  let urunAdi = prompt(i + ". ürün adını giriniz:");

  while (!urunAdi || urunAdi.trim() === "") {
    urunAdi = prompt("Ürün adı boş bırakılamaz. Lütfen tekrar giriniz:");
  }

  let urunFiyati = Number(prompt(urunAdi + " ürününün fiyatını giriniz:"));
  while (isNaN(urunFiyati) || urunFiyati < 0) {
    urunFiyati = Number(prompt("Ürün fiyatı 0'dan küçük olamaz. Lütfen tekrar giriniz:"));
  }

  let urunAdedi = Number(prompt(urunAdi + " ürününün adet bilgisini giriniz:"));
  while (isNaN(urunAdedi) || urunAdedi < 1) {
    urunAdedi = Number(prompt("Ürün adedi 1'den küçük olamaz. Lütfen tekrar giriniz:"));
  }

  let urunToplami = urunFiyati * urunAdedi;
  sepetToplami += urunToplami;

  urunler.push({
    ad: urunAdi,
    fiyat: urunFiyati,
    adet: urunAdedi,
    toplam: urunToplami
  });
}

let indirimOrani = 0;

if (sepetToplami >= 1000) {
  indirimOrani = 10;
} else if (sepetToplami >= 500) {
  indirimOrani = 5;
} else {
  indirimOrani = 0;
}

let indirimTutari = sepetToplami * indirimOrani / 100;
let indirimliToplam = sepetToplami - indirimTutari;

document.write(`
  <html>
  <head>
    <title>Soru 1 Sonuç</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f2f4f7;
        padding: 30px;
        color: #222;
      }
      .kapsayici {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 25px;
        border-radius: 14px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.1);
      }
      h1, h2 {
        color: #1e3a8a;
      }
      .kart {
        border: 1px solid #d1d5db;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 16px;
        background: #f9fafb;
      }
      .ozet {
        background: #eff6ff;
        border-radius: 10px;
        padding: 16px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="kapsayici">
      <h1>Sepet Özeti</h1>
      ${urunler.map(urun => `
        <div class="kart">
          <p>Fiyatı <strong>${urun.fiyat} TL</strong> olan <strong>${urun.ad}</strong>'dan <strong>${urun.adet}</strong> adet alındı.</p>
          <p>Toplam bedel: <strong>${urun.toplam} TL</strong></p>
        </div>
      `).join("")}

      <div class="ozet">
        <h2>Genel Toplam</h2>
        <p>Sepet toplamı: <strong>${sepetToplami} TL</strong></p>
        <p>İndirim oranı: <strong>%${indirimOrani}</strong></p>
        <p>İndirim tutarı: <strong>${indirimTutari} TL</strong></p>
        <p>İndirimli sepet toplamı: <strong>${indirimliToplam} TL</strong></p>
      </div>
    </div>
  </body>
  </html>
`);
