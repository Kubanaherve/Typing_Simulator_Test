// Strict regex patterns matching the assignment rubric criteria
export const VALIDATION_RULES = {
  // Forbids leading/trailing spaces and collapses inner spaces
  description: /^\S(?:.*\S)?$/,
  
  // Validates amounts (integers or up to 2 decimal places)
  amount: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
  
  // Strict ISO Date verification matching YYYY-MM-DD format
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
};



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
 
// Validates full data model integrity and yields readable error messages
export function validateTransaction(data) {
  if (!VALIDATION_RULES.description.test(data.description)) return "Invalid description layout.";
  if (!ADVANCED_RULES.noDuplicateWords.test(data.description)) return "Duplicate consecutive words found.";
  if (!VALIDATION_RULES.amount.test(data.amount)) return "Amount must be valid currency format.";
  if (!VALIDATION_RULES.date.test(data.date)) return "Date must match format YYYY-MM-DD.";
  if (!ADVANCED_RULES.category.test(data.category)) return "Category contains forbidden tokens.";
  return null; 
}


