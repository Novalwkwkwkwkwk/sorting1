function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Membandingkan elemen-elemen dari kedua sub-array dan menggabungkannya secara terurut
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Menambahkan sisa elemen dari sub-array yang belum terpilih
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Contoh penggunaan
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = mergeSort(unsortedArray);
  
  console.log("Array Sebelum Diurutkan: ", unsortedArray);
  console.log("Array Setelah Diurutkan: ", sortedArray);