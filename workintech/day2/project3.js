function randomNumber() {
    const num = Math.floor(Math.random() * 1000);
  
    if (num % 2 === 0) {
      return num + ' sayısı çift sayıdır';
    } else {
      return num + ' sayısı tek sayıdır';
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = randomNumber;
  