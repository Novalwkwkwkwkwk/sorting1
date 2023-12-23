function quickSort(arr) {
    // Kasus dasar: array dengan panjang 0 atau 1 sudah diurutkan
    if (arr.length <= 1) {
      return arr;
    }
   
    // Pilih elemen pertama sebagai poros
    const pivot = arr[0];
   
    // Partisi array menjadi dua sub-array
    const lebihrendah = [];
    const lebihbesar = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lebihrendah.push(arr[i]);
      } else {
        lebihbesar.push(arr[i]);
      }
    }
   
    // Mengurutkan sub-array secara rekursif
    const sortedLebihrendah = quickSort(lebihrendah);
    const sortedLebihbesar = quickSort(lebihbesar);
   i
    // Gabungkan sub-array yang diurutkan dengan pivot di tengahnya
    return sortedLebihrendah.concat(pivot, sortedLebihbesar);
   }