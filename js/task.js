function multipleOfIndex(array) {
  // good luck
  return array.indexOf(1)
}


console.log((multipleOfIndex([22, -6, 32, 82, 9, 25])));//, [-6, 32, 25]
console.log((multipleOfIndex([68, -1, 1, -7, 10, 10])));//, [-1, 10]
console.log((multipleOfIndex([11, -11]), [-11]));
console.log((multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68])));//, [-85, 72, 0, 68]
console.log((multipleOfIndex([28,38,-44,-99,-13,-54,77,-51])));//, [38, -44, -99]
console.log((multipleOfIndex([-1,-49,-1,67,8,-60,39,35])));//, [-49, 8, -60, 35]
//===================================================
// function well(x){
// let solve = x.filter(x => x == 'good').length
// console.log(solve)



// // var arr2 = [];
// // for (let i in x) {
// //   if (arr2[x[i]] != undefined) {
// //     (arr2[x[i]] ++)
// //   } else {
// //     (arr2[x[i]] = 1)
// //   }
  
// // }
// // if(arr2['good'] === 1) return 'Publish!';
// // if(arr2['good'] > 1) return 'I smell a series!'
// // return 'Fail!'

// }

//   console.log((well(['bad', 'bad', 'bad'])));//, 'Fail!'
//   console.log((well(['good', 'bad', 'bad', 'bad', 'bad'])));//, 'Publish!'
//   console.log((well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])));//, 'I smell a series!'
  



// function between(a, b) {
//   // your code here
//   let arr = [];
//   for (let i = a +1; i < b; i++){
//     arr.push(i)
//   }

//   return arr;
// }
// console.log((between(1, 4)));//[1, 2, 3, 4]
// console.log((between(-2, 2)))//[-2, -1, 0, 1, 2]


//===========================================================================
// function century(year) {
//   // Finish this :)

//    let solve =  (year - 1) / 100 + 1;
//   return Math.floor(solve)

// }
// console.log((century(1705)))//'Testing for year 1705' 18
// console.log((century(1900)))//'Testing for year 1900' 19
// console.log((century(1601)))//'Testing for year 1601' 17 
// console.log((century(2000)))//'Testing for year 2000' 20
// console.log((century(8)))//'Testing for year 89'       1
//=======================================================================
// function findNeedle(haystack) {
//   return 'found the needle at position ' + haystack.findIndex((s) => s == 'needle')

// }

// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

// console.log((findNeedle(haystack_1)))// 'found the needle at position 3
// console.log((findNeedle(haystack_2)))// 'found the needle at position 5 
// console.log((findNeedle(haystack_3)))// 'found the needle at position 30
//===============================

// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   // Your code here.

//   return (blueStart - bluePulled)/((blueStart - bluePulled)+(redStart-redPulled))
// }

// console.log((guessBlue(5, 5, 2, 3)))//0.6
// console.log((guessBlue(5, 7, 4, 3)))//0.2
// console.log((guessBlue(12, 18, 4, 6)))//0.4

// Вы и ваш друг решили сыграть в игру, чтобы развить свою статистическую интуицию. Игра работает так:

// У вас есть связка красных и синих шариков. Чтобы начать игру, вы берете пригоршню шариков каждого цвета и кладете их в сумку,
//  отслеживая, сколько штук каждого цвета входит в нее. Вы по очереди кладете руку в сумку, угадываете цвет, 
//  а затем вытаскиваете один шарик. Вы получите балл, если угадали правильно. Хитрость в том, что у вас есть всего три секунды, 
//  обы сделать предположение, поэтому вам нужно думать быстро.

// Вы решили написать функцию, guessBlue()которая поможет автоматически вычислить, следует ли угадывать «синий» или «красный». 
// Функция должна принимать четыре аргумента:

// количество синих шариков, которые вы положили в сумку, чтобы начать
// количество красных шариков, которые вы положили в сумку, чтобы начать
// количество синих шариков, вытянутых на данный момент (всегда меньше начального количества синих шариков)
// количество вытянутых красных шариков (всегда меньше начального количества красных шариков)
// guessBlue()должен возвращать вероятность рисования синего шарика, выраженную как поплавок. 
// Например, guessBlue(5, 5, 2, 3)должен вернуться 0.6.




//=================================================================
// function tripleTrouble(one, two, three){
//   //Solution
//  let first = one.split('')
//  let second = two.split('')
//  let third = three.split('')

// let x = '';
// for(let i = 0 ; i < first.length; i += 1){
// x += first[i] + second[i] + third[i] 

// }
// console.log(x)

//  }


// console.log((tripleTrouble("this","test","lock")));//, "ttlheoiscstk"
// console.log((tripleTrouble("aa","bb","cc")));//, "abcabc"
// console.log((tripleTrouble("Bm", "aa", "tn")));//, "Batman"
// console.log((tripleTrouble("LLh","euo","xtr")));//, "LexLuthor"



 //======================================================
 // Задачка для собесов где надо сделать реверс без использования reverse
//  weirdReverse=a=>a.sort(n=>1)


// var arr = weirdReverse([1,2,3,4,5]);

  // console.log(assertSimilar(arr, [5,4,3,2,1], 'Array must be reversed'))

//=================================================
// Задача на удаление нулей в конце числа
// function noBoringZeros(n) {

//     var noZeroes = n.toString()
//    return +noZeroes.replace(/0+$/,'')
//     console.log(noZeroes)
//   }

//   console.log((noBoringZeros(1450)))// , 145
//   console.log((noBoringZeros(960000)))// , 96
//   console.log((noBoringZeros(1050)))// , 105
//   console.log((noBoringZeros(-1050)))// , -105
//   console.log((noBoringZeros(-105)))// , -105
//   console.log((noBoringZeros(0)))// , 0
