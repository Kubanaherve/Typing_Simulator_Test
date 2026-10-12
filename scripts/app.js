// Synchronizing core data streams and handling initialization hooks
import { AppState } from './state.js';
import { StorageEngine } from './storage.js';
import { validateTransaction } from './validators.js';

// Attaches core document listeners to trigger boot sequence protocols
document.addEventListener('DOMContentLoaded', () => {
  console.log('Booting transactional system architecture...');
  
  // This helps us to import the baseline and logs out of persistent client memory
  const storedData = StorageEngine.loadRecords();
  AppState.setRecords(storedData);
});
