/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = function getIndexBelowMaxForKey(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// Whiteboarding
// Notes:
// Implement insert, retrieve, and remove methods
// Double storage size when 3/4 of storage limit
// Half storage size when 1/4 of storage limit

// Make hash table
// I: None
// O: Hash table object
// C: None
// E: None

// Hash table insert
// I: key, value
// O: None. (Updates storage with key-value pair)
// C: None
// E: Different key hashes to same index
//    The complications with updating values that arise from that
//      When to add a new key vs update an existing one

// Hash table retrieve
// I: Key
// O: Value
// C: None
// E: Multiple keys hash to same index

// Hash table remove
// I: Key
// O: Value
// C: None
// E: Multiple keys hash to same index

const makeHashTable = function makeHashTable() {
  const result = {};
  let storage = [];
  let storageLimit = 4;
  let size = 0;

  result.resize = function resize(newStorageLimit) {
    const tempStorage = storage.slice();
    storage = [];
    storageLimit = newStorageLimit;

    tempStorage.forEach((index) => {
      if (index) {
        index.forEach((keyValue) => {
          result.insert(keyValue.key, keyValue.value);
        });
      }
    });
  };

  result.insert = function insert(key, value) {
    // Resize storage
    if (size + 1 >= Math.floor((storageLimit * 3) / 4)) {
      this.resize(storageLimit * 2);
    }

    // Add value
    const index = getIndexBelowMaxForKey(key, storageLimit);

    storage[index] = storage[index] || [];
    for (let keysInIndex = 0; keysInIndex < storage[index].length; keysInIndex += 1) {
      if (key === storage[index][keysInIndex].key) {
        storage[index][keysInIndex].value = value;
        return;
      }
    }

    storage[index].push({ key, value });
    size += 1;
  };

  result.retrieve = function retrieve(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);

    if (storage[index]) {
      for (let keysInIndex = 0; keysInIndex < storage[index].length; keysInIndex += 1) {
        if (key === storage[index][keysInIndex].key) {
          return storage[index][keysInIndex].value;
        }
      }
    }

    return undefined;
  };

  result.remove = function remove(key) {
    if (size - 1 <= Math.floor(storageLimit / 4)) {
      this.resize(storageLimit / 2);
    }

    const index = getIndexBelowMaxForKey(key, storageLimit);

    for (let keysInIndex = 0; keysInIndex < storage[index].length; keysInIndex += 1) {
      if (key === storage[index][keysInIndex].key) {
        storage[index][keysInIndex] = undefined;
        if (storage[index].length === 1) {
          storage[index] = undefined;
        }
        size -= 1;
        return;
      }
    }
  };

  return result;
};

if (module) {
  module.exports = makeHashTable;
}
