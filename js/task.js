function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const total = classPoints.reduce((acc, number) => acc + number, 0)/classPoints.length;
return total < yourPoints ? true : false;

}



    console.log((betterThanAverage([2, 3], 5)));//, true , 5

    console.log((betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)));//, true , 75

    console.log((betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)));//, false , 9

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
