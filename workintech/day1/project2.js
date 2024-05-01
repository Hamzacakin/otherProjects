let yas = Math.random() * 100;
let ucret = 450;

if (yas > 65 && yas <= 100) {
  console.log('ücretsiz seyahat edebilir');
  ucret = ucret * 0;
} else if (yas >= 25 || yas <= 65) {
  console.log('indirim yok :(');
  ucret = ucret;
} else if (yas >= 15 || yas < 25) {
  console.log('%50 indirimli seyahat edebilir');
  ucret = ucret * 0.5;
} else if (yas >= 10 || yas < 15) {
  consolo.log('%80 indirimli seyahat edebilir');
  ucret = ucret * 0.2;
} else {
  console.log('geçerli bir değer giriniz');
}
