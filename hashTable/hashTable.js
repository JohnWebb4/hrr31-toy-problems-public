/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
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

const makeKeyObject = function makeKeyObject(key, value) {
  return { key, value };
};

const makeHashTable = function makeHashTable() {
  const result = {};
  const storage = [];
  const storageLimit = 1000;

  result.insert = function insert(key, value) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) {
      const keyValue = makeKeyObject(key, value);
      storage[index] = [keyValue];
      return storage[index][0].value;
    }

    return (storage[index].push(makeKeyObject(key, value))).value;
  };

  result.retrieve = function retrieve(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) {
      return undefined;
    }

    let value;

    storage[index].forEach((keyValue) => {
      if (keyValue.key === key) {
        ({ value } = keyValue);
      }
    });

    return value;
  };

  result.remove = function remove(key) {
    const index = getIndexBelowMaxForKey(key, storageLimit);

    if (storage[index]) {
      storage[index].forEach((keyValue, keyIndex) => {
        if (keyValue.key === key) {
          storage[index].splice(keyIndex, 1);
        }
      });
    }
  };

  return result;
};

if (process.env.DEBUG) {
  module.exports = makeHashTable;
}
