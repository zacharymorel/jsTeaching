class HashTable {
  table = new Array(3);

  hashStringToInt = (s, tableSize) => {
    let hash = 17; // use prime numbers
    for (let i = 0; i < s.length; i++) {
      hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
  };

  getItem = (key) => {
    const idx = this.hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((el) => el[0] === key)[1];
  };

  setItem = (key, value) => {
    const idx = this.hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      // CHAINING to prevent collusion
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.setItem("age", 5);
myTable.setItem("dob", "1/2/3");
console.log(myTable.table[0]); // elements collusion on 1st index
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
