function arrayMadness(a, b) {
  // Ready, get set, GO!!!
return b.length < a.length ? false : true ; 

// const isAllOnline = a.every(number => b.length > number);
//  console.log(isAllOnline);
}
// Даны два целочисленных массива a, b , оба length >= 1, создать программу , которая возвращает , 
// true если сумма квадратов каждого элемента aявляется строго больше , 
// чем в сумме кубов каждого элемента b.

  console.log((arrayMadness([4,5,6],[1,2,3])));//true
  console.log((arrayMadness([5,6,7],[4,5,6])));//false
  console.log((arrayMadness([4,5,6],[3,4,5])));//false
  console.log((arrayMadness([3,4,5],[2,3,4])));//false
  console.log((arrayMadness([2,3,4],[1,2,3])));//false
  console.log((arrayMadness([1,2,3],[0,1,2])));//true
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
