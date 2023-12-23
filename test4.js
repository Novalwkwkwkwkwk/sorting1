function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Menyimpan nilai saat ini untuk membandingkan dan memindahkannya ke posisi yang benar
      const currentVal = arr[i];
      let j = i - 1;
  
      // Memindahkan elemen-elemen yang lebih besar dari currentVal ke posisi setelahnya
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Menempatkan currentVal pada posisi yang benar dalam array terurut
      arr[j + 1] = currentVal;
    }
  
    return arr;
  }
  
  // Contoh penggunaan
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(unsortedArray);
  
  console.log("Array Sebelum Diurutkan: ", unsortedArray);
  console.log("Array Setelah Diurutkan: ", sortedArray);