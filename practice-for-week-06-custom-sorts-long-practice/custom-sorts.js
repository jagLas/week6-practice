function ageSort(users) {
  // Your code here
  users.sort((a, b) => {
    return a.age-b.age;
  })

  return users;
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) {
      return 1;
    }

    if (a % 2 === 1 && b % 2 === 0) {
      return -1;
    }

    return a - b;
  })

  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) {
    return false;
  }

  let arr1 = s.split('').sort();
  let arr2 = t.split('').sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function reverseBaseSort(arr) {

  const baseFinder = (num) => {
    let count = 0;
    while (num >= 10) {
      count++;
      num /= 10;
    }

    return count;
  }

  arr.sort((a, b) => {
    const baseA = baseFinder(a);
    const baseB = baseFinder(b);

    if(baseA > baseB) {
      return -1;
    }

    if(baseA < baseB) {
      return 1;
    }

    return a-b;
  })

  return arr;
}

function frequencySort(arr) {
  //construct counts for each number
  const counts = {};
  arr.forEach(num => {
    if (!counts[num]) {
      counts[num] = 0;
    }
    counts[num]++;
  })

  arr.sort((a, b) => {
    if (counts[a] < counts[b]) {
      return -1;
    }

    if (counts[a] > counts[b]) {
      return 1;
    }

    return b-a;
  })

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];