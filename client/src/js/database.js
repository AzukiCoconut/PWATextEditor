import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method for updating content to the IndexDB
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // always update the first element in the DB.
  const request = store.put({ id: 1, text: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

// Method to get content from IndexDB
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Technically, only need to get the first element but since there is only one to begin with...
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result[0].text);
  // Only return the text
  return result[0].text;
};

initdb();
