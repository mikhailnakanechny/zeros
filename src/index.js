module.exports = function getZerosCount(number) {
  // https://tproger.ru/problems/how-many-zeros-at-the-end-of-the-factorial-of-100/
    /*       Ноль в конце получается при умножении на 10
Если расписать на простые множители, то при произведении 2 и 5
Задача сводится к нахождению 5 в множителях, если каждое число в факториале
расписать на простые множители.   */

    let zCount = 0;
    for (let i = 5; i <= number; i += 5) {
        let y = i;
        while( y % 5 === 0) {
            y = y / 5;
            zCount++;
        }
    }
    return zCount;
};

