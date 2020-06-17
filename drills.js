
function linearCounter (arr,value){
  let count=1;
  for(let i=0; i<arr.length; i++){
    if(arr[i]==value){
      return count++; 
    }else{
      count++; 
    }
  }
  return (count <=arr.length)? count : 'number not found';
}

function binarySearch(array, value, start=0, end=array.length-1,count=1) {
  if (start > end) return -1;
  let index = Math.floor((start + end) / 2);
  let item = array[index];

  if (item === value) {
    return count;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end,count+1);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1,count+1);
  }
}

function main(){
  //1. How many searches?
  //A. 11,6,8
  // b.11,14,15

  //2. Adding a React UI
  let arr= [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
  const sortedArr = arr.sort((a,b) => a - b);
  console.log('2.a: '+ linearCounter(arr, 13));
  console.log('2.b: '+ binarySearch(sortedArr, 13));
  
}
const mainRun = main();