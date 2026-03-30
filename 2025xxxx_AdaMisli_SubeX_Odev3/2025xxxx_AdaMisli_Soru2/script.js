const netflixVeri = [
  {
    kategori: "Because you watched Gupi",
    filmler: [
      {
        ad: "IF",
        etiket: "Recently Added",
        gorsel: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Migration",
        etiket: "Popüler",
        gorsel: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Rafadan Tayfa Kapadokya",
        etiket: "Çocuk",
        gorsel: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    kategori: "Activating Hibernation Mode",
    filmler: [
      {
        ad: "Jaadugar",
        etiket: "Romantik",
        gorsel: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Blacklist",
        etiket: "Suç",
        gorsel: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Peaky Blinders",
        etiket: "Dram",
        gorsel: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    kategori: "30-Minute Laughs",
    filmler: [
      {
        ad: "Old Dog, New Tricks",
        etiket: "Komedi",
        gorsel: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "MO",
        etiket: "Trend",
        gorsel: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Young Sheldon",
        etiket: "Aile",
        gorsel: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    kategori: "Only on Netflix",
    filmler: [
      {
        ad: "House of Guinness",
        etiket: "Özel Yapım",
        gorsel: "https://images.unsplash.com/photo-1512070679279-c0b8f6a6f5b1?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Chupa",
        etiket: "Fantastik",
        gorsel: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "The Residence",
        etiket: "Gizem",
        gorsel: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  {
    kategori: "Because you watched The Decameron",
    filmler: [
      {
        ad: "Crap Happens",
        etiket: "Recently Added",
        gorsel: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Joe's College Road Trip",
        etiket: "Recently Added",
        gorsel: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
      },
      {
        ad: "Paul",
        etiket: "Bilim Kurgu",
        gorsel: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  }
];

const icerikAlani = document.getElementById("icerik");

for (let i = 0; i < netflixVeri.length; i++) {
  const kategoriBolumu = document.createElement("section");
  kategoriBolumu.className = "kategori";

  const baslik = document.createElement("h2");
  baslik.textContent = netflixVeri[i].kategori;
  kategoriBolumu.appendChild(baslik);

  const filmSatiri = document.createElement("div");
  filmSatiri.className = "film-satiri";

  for (let j = 0; j < netflixVeri[i].filmler.length; j++) {
    const film = netflixVeri[i].filmler[j];

    const kart = document.createElement("div");
    kart.className = "kart";
    kart.style.backgroundImage = `url('${film.gorsel}')`;

    const kartIcerik = document.createElement("div");
    kartIcerik.className = "kart-icerik";

    const filmAdi = document.createElement("h3");
    filmAdi.textContent = film.ad;

    const filmEtiket = document.createElement("span");
    filmEtiket.className = "etiket";
    filmEtiket.textContent = film.etiket;

    kartIcerik.appendChild(filmAdi);
    kartIcerik.appendChild(filmEtiket);
    kart.appendChild(kartIcerik);
    filmSatiri.appendChild(kart);
  }

  kategoriBolumu.appendChild(filmSatiri);
  icerikAlani.appendChild(kategoriBolumu);
}
