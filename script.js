/* ==========================================
   HAYVANLAR DÜNYASI - ORTAK JAVASCRIPT
   ========================================== */

// Tüm hayvanlar verisi (arama için)
const hayvanlar = [
  // Memeliler
  { isim: 'Aslan', emoji: '🦁', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Panthera leo' },
  { isim: 'Kaplan', emoji: '🐯', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Panthera tigris' },
  { isim: 'Kurt', emoji: '🐺', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Canis lupus' },
  { isim: 'Fil', emoji: '🐘', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Loxodonta africana' },
  { isim: 'Zürafa', emoji: '🦒', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Giraffa camelopardalis' },
  { isim: 'Zebra', emoji: '🦓', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Equus quagga' },
  { isim: 'Şempanze', emoji: '🐒', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Pan troglodytes' },
  { isim: 'Goril', emoji: '🦍', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Gorilla gorilla' },
  { isim: 'Orangutan', emoji: '🦧', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Pongo pygmaeus' },
  { isim: 'Yunus', emoji: '🐬', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Delphinus delphis' },
  { isim: 'Balina', emoji: '🐋', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Balaenoptera musculus' },
  { isim: 'Fok', emoji: '🦭', kategori: 'Memeliler', sayfa: 'memeliler.html', latin: 'Phoca vitulina' },

  // Kuşlar
  { isim: 'Kartal', emoji: '🦅', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Aquila chrysaetos' },
  { isim: 'Şahin', emoji: '🦅', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Falco peregrinus' },
  { isim: 'Baykuş', emoji: '🦉', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Strix aluco' },
  { isim: 'Flamingo', emoji: '🦩', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Phoenicopterus roseus' },
  { isim: 'Pelikan', emoji: '🦆', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Pelecanus onocrotalus' },
  { isim: 'Devekuşu', emoji: '🐦', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Struthio camelus' },
  { isim: 'Penguen', emoji: '🐧', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Aptenodytes forsteri' },
  { isim: 'Martı', emoji: '🕊️', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Larus argentatus' },
  { isim: 'Kivi', emoji: '🐦', kategori: 'Kuşlar', sayfa: 'kuslar.html', latin: 'Apteryx mantelli' },

  // Sürüngen
  { isim: 'Nil Timsahı', emoji: '🐊', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Crocodylus niloticus' },
  { isim: 'Tuzlu Su Timsahı', emoji: '🐊', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Crocodylus porosus' },
  { isim: 'Amerikan Alligatörü', emoji: '🐊', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Alligator mississippiensis' },
  { isim: 'Gavyal', emoji: '🐊', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Gavialis gangeticus' },
  { isim: 'Kral Kobra', emoji: '🐍', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Ophiophagus hannah' },
  { isim: 'Piton', emoji: '🐍', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Python reticulatus' },
  { isim: 'Anakonda', emoji: '🐍', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Eunectes murinus' },
  { isim: 'İguana', emoji: '🦎', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Iguana iguana' },
  { isim: 'Bukalemun', emoji: '🦎', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Chamaeleo chamaeleon' },
  { isim: 'Komodo Ejderi', emoji: '🦎', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Varanus komodoensis' },
  { isim: 'Deniz Kaplumbağası', emoji: '🐢', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Chelonia mydas' },
  { isim: 'Dev Kaplumbağa', emoji: '🐢', kategori: 'Sürüngen', sayfa: 'surungen.html', latin: 'Aldabrachelys gigantea' },

  // Balıklar
  { isim: 'Beyaz Köpekbalığı', emoji: '🦈', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Carcharodon carcharias' },
  { isim: 'Çekirge Köpekbalığı', emoji: '🦈', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Sphyrna mokarran' },
  { isim: 'Balina Köpekbalığı', emoji: '🦈', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Rhincodon typus' },
  { isim: 'Palyaço Balığı', emoji: '🐠', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Amphiprion ocellaris' },
  { isim: 'Melek Balığı', emoji: '🐠', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Pterophyllum scalare' },
  { isim: 'Beta Balığı', emoji: '🐠', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Betta splendens' },
  { isim: 'Alabalık', emoji: '🐟', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Salmo trutta' },
  { isim: 'Sazan', emoji: '🐟', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Cyprinus carpio' },
  { isim: 'Yayın Balığı', emoji: '🐟', kategori: 'Balıklar', sayfa: 'baliklar.html', latin: 'Silurus glanis' },

  // Amfibiler
  { isim: 'Zehirli Ok Kurbağası', emoji: '🐸', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Dendrobates tinctorius' },
  { isim: 'Ağaç Kurbağası', emoji: '🐸', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Hyla arborea' },
  { isim: 'Ateş Semenderi', emoji: '🦎', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Salamandra salamandra' },
  { isim: 'Dev Semender', emoji: '🦎', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Andrias japonicus' },

  // Böcekler
  { isim: 'Kral Kelebek', emoji: '🦋', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Danaus plexippus' },
  { isim: 'Mavi Morpho', emoji: '🦋', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Morpho menelaus' },
  { isim: 'Uğur Böceği', emoji: '🐞', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Coccinella septempunctata' },
  { isim: 'Geyik Böceği', emoji: '🪲', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Lucanus cervus' },
  { isim: 'Karınca', emoji: '🐜', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Formicidae' },
  { isim: 'Bal Arısı', emoji: '🐝', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Apis mellifera' },
  { isim: 'Çeşitli Böcekler', emoji: '🪲', kategori: 'Böcekler', sayfa: 'bocekler.html', latin: 'Coleoptera' },

  // Omurgasızlar
  { isim: 'Ahtapot', emoji: '🐙', kategori: 'Omurgasızlar', sayfa: 'omurgasizlar.html', latin: 'Octopus vulgaris' },
  { isim: 'Mürekkep Balığı', emoji: '🦑', kategori: 'Omurgasızlar', sayfa: 'omurgasizlar.html', latin: 'Sepia officinalis' },
  { isim: 'Denizanası', emoji: '🪼', kategori: 'Omurgasızlar', sayfa: 'omurgasizlar.html', latin: 'Aurelia aurita' },
  { isim: 'Mercan', emoji: '🪸', kategori: 'Omurgasızlar', sayfa: 'omurgasizlar.html', latin: 'Corallium rubrum' },
  { isim: 'Denizyıldızı', emoji: '⭐', kategori: 'Omurgasızlar', sayfa: 'omurgasizlar.html', latin: 'Asterias rubens' },
  { isim: 'Deniz Kestanesi', emoji: '🟤', kategori: 'Omurgasızlar', sayfa: 'omurgasizlar.html', latin: 'Paracentrotus lividus' },

  // Amfibiler (yeni)
  { isim: 'Kara Kurbağası', emoji: '🐸', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Bufo bufo' },
  { isim: 'Aksolotl', emoji: '🦎', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Ambystoma mexicanum' },
  { isim: 'Körkurbağa', emoji: '🐍', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Caecilia' },
  { isim: 'Olm', emoji: '🦎', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Proteus anguinus' },
  { isim: 'Kaburga Semenderi', emoji: '🦎', kategori: 'Amfibiler', sayfa: 'amfibiler.html', latin: 'Pleurodeles waltl' },

  // Tehlike Altında
  { isim: 'Amur Leoparı', emoji: '🐆', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Panthera pardus orientalis' },
  { isim: 'Vaquita', emoji: '🐬', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Phocoena sinus' },
  { isim: 'Kuzey Beyaz Gergedanı', emoji: '🦏', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Ceratotherium simum cottoni' },
  { isim: 'Javan Gergedanı', emoji: '🦏', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Rhinoceros sondaicus' },
  { isim: 'Sumatra Orangutanı', emoji: '🦧', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Pongo abelii' },
  { isim: 'Dağ Gorili', emoji: '🦍', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Gorilla beringei beringei' },
  { isim: 'Kakapo', emoji: '🦜', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Strigops habroptilus' },
  { isim: 'Kelaynak', emoji: '🐦', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Geronticus eremita' },
  { isim: 'Akdeniz Foku', emoji: '🦭', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Monachus monachus' },
  { isim: 'Kırmızı Panda', emoji: '🐾', kategori: 'Tehlike Altında', sayfa: 'tehlike-altinda.html', latin: 'Ailurus fulgens' },

  // Türkiye Hayvanları
  { isim: 'Anadolu Parsı', emoji: '🐆', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Panthera pardus tulliana' },
  { isim: 'Van Kedisi', emoji: '🐱', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Felis catus' },
  { isim: 'Kangal Köpeği', emoji: '🐕', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Canis lupus familiaris' },
  { isim: 'Karakulak', emoji: '🐱', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Caracal caracal' },
  { isim: 'Toros Çakalı', emoji: '🐺', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Canis aureus' },
  { isim: 'Anadolu Yaban Koyunu', emoji: '🐑', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Ovis gmelinii anatolica' },
  { isim: 'Sığla Ağaç Kurbağası', emoji: '🐸', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Hyla heinzsteinitzi' },
  { isim: 'Toros Kertenkelesi', emoji: '🦎', kategori: 'Türkiye', sayfa: 'turkiye-hayvanlari.html', latin: 'Darevskia rudis' },

  // En Hızlı Hayvanlar
  { isim: 'Çita', emoji: '🐆', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Acinonyx jubatus' },
  { isim: 'Ceylan', emoji: '🦌', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Antilocapra americana' },
  { isim: 'Springbok', emoji: '🦌', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Antidorcas marsupialis' },
  { isim: 'Gökdoğan', emoji: '🦅', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Falco peregrinus' },
  { isim: 'Altın Kartal', emoji: '🦅', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Aquila chrysaetos' },
  { isim: 'İğne Kuyruklu Sağan', emoji: '🐦', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Hirundapus caudacutus' },
  { isim: 'Yelken Balığı', emoji: '🐟', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Istiophorus platypterus' },
  { isim: 'Kılıçbalığı', emoji: '🐟', kategori: 'En Hızlı', sayfa: 'en-hizli-hayvanlar.html', latin: 'Xiphias gladius' },

  // En Yavaş Hayvanlar
  { isim: 'Tembel Hayvan', emoji: '🦥', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Bradypus variegatus' },
  { isim: 'Koala', emoji: '🐨', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Phascolarctos cinereus' },
  { isim: 'Dev Kaplumbağa', emoji: '🐢', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Aldabrachelys gigantea' },
  { isim: 'Salyangoz', emoji: '🐌', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Cornu aspersum' },
  { isim: 'Denizatı', emoji: '🐴', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Hippocampus' },
  { isim: 'Deniz Yıldızı', emoji: '⭐', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Asterias rubens' },
  { isim: 'Yavaş Lori', emoji: '🐒', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Nycticebus' },
  { isim: 'Deniz İneği', emoji: '🐋', kategori: 'En Yavaş', sayfa: 'en-yavas-hayvanlar.html', latin: 'Trichechus' },

  // En Uzun Yaşayanlar
  { isim: 'Grönland Köpekbalığı', emoji: '🦈', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Somniosus microcephalus' },
  { isim: 'Okyanus Midyesi', emoji: '🐚', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Arctica islandica' },
  { isim: 'Ölümsüz Denizanası', emoji: '🪼', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Turritopsis dohrnii' },
  { isim: 'Grönland Balinası', emoji: '🐋', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Balaena mysticetus' },
  { isim: 'Dev Kaplumbağa', emoji: '🐢', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Aldabrachelys gigantea' },
  { isim: 'Kırmızı Deniz Kestanesi', emoji: '🟤', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Strongylocentrotus franciscanus' },
  { isim: 'Tuatara', emoji: '🦎', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Sphenodon punctatus' },
  { isim: 'Macaw Papağanı', emoji: '🦜', kategori: 'En Uzun Yaşayan', sayfa: 'en-uzun-yasayanlar.html', latin: 'Ara macao' },

  // En Zehirli Hayvanlar
  { isim: 'Zehirli Ok Kurbağası', emoji: '🐸', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Phyllobates terribilis' },
  { isim: 'İç Taipan', emoji: '🐍', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Oxyuranus microlepidotus' },
  { isim: 'Kara Mamba', emoji: '🐍', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Dendroaspis polylepis' },
  { isim: 'Kral Kobra', emoji: '🐍', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Ophiophagus hannah' },
  { isim: 'Kutu Denizanası', emoji: '🪼', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Chironex fleckeri' },
  { isim: 'Mavi Halkalı Ahtapot', emoji: '🐙', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Hapalochlaena' },
  { isim: 'Taşbalığı', emoji: '🐟', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Synanceia verrucosa' },
  { isim: 'Konik Salyangoz', emoji: '🐚', kategori: 'En Zehirli', sayfa: 'en-zehirli-hayvanlar.html', latin: 'Conus geographus' },

  // Buz Devri Hayvanları
  { isim: 'Yünlü Mamut', emoji: '🦣', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Mammuthus primigenius' },
  { isim: 'Kılıçdiş Kaplan', emoji: '🐅', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Smilodon fatalis' },
  { isim: 'Yünlü Gergedan', emoji: '🦏', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Coelodonta antiquitatis' },
  { isim: 'Dev Tembel Hayvan', emoji: '🦥', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Megatherium americanum' },
  { isim: 'Megaloceros', emoji: '🦌', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Megaloceros giganteus' },
  { isim: 'Mastodon', emoji: '🦣', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Mammut americanum' },
  { isim: 'Glyptodon', emoji: '🐢', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Glyptodon clavipes' },
  { isim: 'Dire Kurt', emoji: '🐺', kategori: 'Buz Devri', sayfa: 'buz-devri-hayvanlari.html', latin: 'Aenocyon dirus' },

  // Amazon Hayvanları
  { isim: 'Jaguar', emoji: '🐆', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Panthera onca' },
  { isim: 'Pembe Nehir Yunusu', emoji: '🐬', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Inia geoffrensis' },
  { isim: 'Yeşil Anakonda', emoji: '🐍', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Eunectes murinus' },
  { isim: 'Zehirli Ok Kurbağası', emoji: '🐸', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Dendrobates tinctorius' },
  { isim: 'Tukan', emoji: '🐦', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Ramphastos toco' },
  { isim: 'Piranha', emoji: '🐟', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Pygocentrus nattereri' },
  { isim: 'Harpy Kartalı', emoji: '🦅', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Harpia harpyja' },
  { isim: 'Yaprak Kesen Karınca', emoji: '🐜', kategori: 'Amazon', sayfa: 'amazon-hayvanlari.html', latin: 'Atta cephalotes' },
];

// ==========================================
// NAVİGASYON
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  // Hamburger menü
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Sayfa dışına tıklanınca menü kapat
  document.addEventListener('click', (e) => {
    if (navLinks && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

  // Scroll ile navbar stili
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==========================================
  // ARAMA
  // ==========================================
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 2) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
      }

      const sonuclar = hayvanlar.filter(h =>
        h.isim.toLowerCase().includes(query) ||
        h.kategori.toLowerCase().includes(query) ||
        h.latin.toLowerCase().includes(query)
      );

      if (sonuclar.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">Sonuç bulunamadı 😕</div>';
        searchResults.classList.add('active');
        return;
      }

      searchResults.innerHTML = sonuclar.slice(0, 10).map(h => `
        <a href="${h.sayfa}" class="search-result-item">
          <span class="result-emoji">${h.emoji}</span>
          <div class="result-info">
            <h4>${h.isim}</h4>
            <span>${h.kategori} &middot; ${h.latin}</span>
          </div>
        </a>
      `).join('');

      searchResults.classList.add('active');
    });

    // Arama dışına tıklanınca kapat
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    // ESC ile kapat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.value = '';
      }
    });
  }

  // ==========================================
  // SCROLL ANİMASYONLARI
  // ==========================================
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // ==========================================
  // MODAL SİSTEMİ
  // ==========================================
  setupModals();
});

// ==========================================
// MODAL FONKSİYONLARI
// ==========================================
function setupModals() {
  const animalCards = document.querySelectorAll('.animal-card[data-animal]');
  const modalOverlay = document.getElementById('modalOverlay');

  if (!modalOverlay) return;

  animalCards.forEach(card => {
    card.addEventListener('click', () => {
      const data = JSON.parse(card.getAttribute('data-animal'));
      openModal(data);
    });
  });

  // Kapat butonları
  const closeBtn = modalOverlay.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(data) {
  const modalOverlay = document.getElementById('modalOverlay');
  if (!modalOverlay) return;

  const modal = modalOverlay.querySelector('.modal');

  // Modal içeriğini doldur
  modal.querySelector('.modal-emoji').textContent = data.emoji || '🐾';
  modal.querySelector('.modal h2').textContent = data.isim || '';
  modal.querySelector('.modal-latin').textContent = data.latin || '';

  // Bilgi gridi
  const infoGrid = modal.querySelector('.modal-info-grid');
  infoGrid.innerHTML = '';

  if (data.habitat) {
    infoGrid.innerHTML += `<div class="modal-info-item"><div class="info-label">Habitat</div><div class="info-value">${data.habitat}</div></div>`;
  }
  if (data.beslenme) {
    infoGrid.innerHTML += `<div class="modal-info-item"><div class="info-label">Beslenme</div><div class="info-value">${data.beslenme}</div></div>`;
  }
  if (data.boyut) {
    infoGrid.innerHTML += `<div class="modal-info-item"><div class="info-label">Boyut</div><div class="info-value">${data.boyut}</div></div>`;
  }
  if (data.yasam) {
    infoGrid.innerHTML += `<div class="modal-info-item"><div class="info-label">Yaşam Süresi</div><div class="info-value">${data.yasam}</div></div>`;
  }
  if (data.agirlik) {
    infoGrid.innerHTML += `<div class="modal-info-item"><div class="info-label">Ağırlık</div><div class="info-value">${data.agirlik}</div></div>`;
  }
  if (data.hiz) {
    infoGrid.innerHTML += `<div class="modal-info-item"><div class="info-label">Hız</div><div class="info-value">${data.hiz}</div></div>`;
  }

  // Açıklama
  const desc = modal.querySelector('.modal-description');
  desc.textContent = data.aciklama || '';

  // İlginç bilgiler
  const funFacts = modal.querySelector('.modal-fun-facts');
  if (data.ilgincBilgiler && data.ilgincBilgiler.length > 0) {
    funFacts.style.display = 'block';
    const ul = funFacts.querySelector('ul');
    ul.innerHTML = data.ilgincBilgiler.map(b => `<li>${b}</li>`).join('');
  } else {
    funFacts.style.display = 'none';
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  if (!modalOverlay) return;

  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
