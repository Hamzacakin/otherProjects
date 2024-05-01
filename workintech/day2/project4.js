function tasKagitMakas(kullanici) {
    const rndm = Math.floor(Math.random() * 3);
  
    if (rndm === 1) {
      bilgisayar = 'kağıt';
    } else if (rndm === 2) {
      bilgisayar = 'makas';
    } else {
      bilgisayar = 'taş';
    }
  
    if (
      (bilgisayar === 'taş' && kullanici === 'kağıt') ||
      (bilgisayar === 'kağıt' && kullanici === 'makas') ||
      (bilgisayar === 'makas' && kullanici === 'taş')
    ) {
      return (
        'Senin seçimin: ' +
        +kullanici +
        '.' +
        ' Bilgisayarın seçimi: ' +
        bilgisayar +
        '. Kazandın!'
      );
    } else if (bilgisayar === kullanici) {
      return (
        'Senin seçimin: ' +
        kullanici +
        '.' +
        ' Bilgisayarın seçimi: ' +
        bilgisayar +
        '. Beraberlik!'
      );
    } else {
      return (
        'Senin seçimin: ' +
        kullanici +
        '.' +
        ' Bilgisayarın seçimi: ' +
        bilgisayar +
        '. Kaybettin!'
      );
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = tasKagitMakas;
  