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
  

// Registers event monitoring routes against interactive form elements
const activeForm = document.getElementById('transaction-form');

if (activeForm) {
  activeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Assembles user payload structures into semantic data models
    const payload = {
      id: `txn_${Date.now()}`,
      description: document.getElementById('tx-desc').value,
      amount: document.getElementById('tx-amount').value,
      category: document.getElementById('tx-category').value,
      date: document.getElementById('tx-date').value,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

        // Runs structural integrity validations across active rulesets
    const diagnosticError = validateTransaction(payload);
    
    if (diagnosticError) {
      console.error(`Validation Failure Context: ${diagnosticError}`);
      return;
    }

    // Appends passing records into storage collections and updates memory
    const updatedCollection = [...AppState.records, payload];
    StorageEngine.saveRecords(updatedCollection);
    AppState.setRecords(updatedCollection);
    activeForm.reset();
  });
}

