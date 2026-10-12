// Storage keys and core serialization layers for data persistence
const STORAGE_KEY = 'app:finance:records';
const SETTINGS_KEY = 'app:finance:settings';

export const StorageEngine = {
  // Reads local store data or falls back to an empty collection array
  loadRecords() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }
};
  
