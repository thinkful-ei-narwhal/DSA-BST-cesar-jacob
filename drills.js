const BinarySearchTree = require('./BinarySearchTree');

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



//Question 3 ____________________________________________________________________________

//find a book in the dewey decimal system, provided with dewey number and title
//dewey is a 3 digit number containing info about the book 0 - 999
//look up book by dewey, find dewey, arr[dewey] = book
const arr = [{dewey: 001, title: 'A book'}, {dewey: 002, title: 'A book1'}, {dewey: 003, title: 'A book2'}]

function findBook(dewey, title, start = 0, end = arr.length) {

  let index = Math.floor((start + end) / 2);

  if (start > end) return -1;

  if(arr[index].dewey === dewey) {
    return arr[index].title
  }
  else if(arr[index].dewey < dewey) {
    return findBook(dewey, title, index + 1, end)
  }
  else if (arr[index].dewey > dewey) {
    return findBook(dewey, title, start, index - 1)
  }
}

function main(){
  //1. How many searches?
  //A. 11,6,8
  // b.11,14,15

  //2. Adding a React UI
  // let arr= [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
  // const sortedArr = arr.sort((a,b) => a - b);
  // console.log('2.a: '+ linearCounter(arr, 13));
  // console.log('2.b: '+ binarySearch(sortedArr, 13));
  //3. Find a book
  console.log(findBook(002, 'A book1'))
  //4. Searching in a BST
  //            35  
  //           /   \ 
  //         5      89  
  //       /  \     / \
  //     15    27   79  91
  //    / \            /
  //  14   19         90

  //4.a= 14,19,15,27,25,79,90,91,89,35

  //         8
  //       /   \
  //     7       10
  //    / \     /  \
  //   5    6   9   11   

  //4.b= 5,6,7,10,9,11,8

  //5. Implement different tree traversals
  const BST = new BinarySearchTree();
  const dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  dataset.forEach(data => BST.insert(data, data));

  console.log(BST.preOrder());
  console.log(BST.inOrder());
  console.log(BST.postOrder());

  //6. Find the next commanding officer
  const BST2 = new BinarySearchTree();
  BST2.insert(8, 'Captain Picard')
  BST2.insert(6, 'Commander Riker')
  BST2.insert(10, 'Commander Data')
  BST2.insert(5, 'Lt. Cmdr.Worf')
  BST2.insert(7, 'Lt. Cmdr. LaForge')
  BST2.insert(12, 'Lt. Cmdr.Crusher')
  BST2.insert(4, 'Lieutenant security-officer')
  BST2.insert(11, 'Selar')
  console.log(BST2);
}
const mainRun = main();