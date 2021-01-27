/**
 * NOTES:
 * There is some decisions one has to make under the hood when creating a hash table.
 * The Dev can have a big impact on the performance of the table by what they use to operate their hashes
 */
class HashTable {
  table = new Array(3); // small table to show off resize in case of collusion
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    // NOTE once you resize your table, you have to REHASH every key in the existing table
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          // deconstructing key, value pair out of array
          const idx = this.hashStringToInt(key, newTable.length);

          if (newTable[idx]) {
            // CHAINING to prevent collusion
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

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

    // O(n) worst case if table is really large
    return this.table[idx].find((el) => el[0] === key)[1];
  };

  setItem = (key, value) => {
    this.numItems++; // increases number of items stored.
    const loadFactor = this.numItems / this.table.length; // once your table reaches a certain size, we can increase the table size?
    if (loadFactor > 0.8) {
      // if table is bigger than 80%, we want to resize
      this.resize();
    }
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
console.log(myTable.table.length);
myTable.setItem("lastName", "tim");
console.log(myTable.table.length);
myTable.setItem("age", 5);
console.log(myTable.table.length); // NOTICE THE LENGTH CHANGE (chaining  resize  to solve collusion)
myTable.setItem("dob", "1/2/3");
console.log(myTable.table[0]); // elements collusion on 1st index
console.log(myTable.table.length);
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
