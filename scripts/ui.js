import { highlightMatches } from './search.js';

// Dynamically populates and renders database tables or responsive layout structures
export const UIRenderer = {
  renderTable(records, activeRegex) {
    const tableContainer = document.getElementById('stats-view');
    if (!tableContainer) return;

    // Builds semantic data row fragments dynamically matching current queries
    let htmlContent = `
      <table class="responsive-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
    `;
      records.forEach(item => {
      // Safely filters target columns through our try-catch highlight wrapper
      const markedDesc = highlightMatches(item.description, activeRegex);
      const markedCategory = highlightMatches(item.category, activeRegex);

      htmlContent += `
        <tr>
          <td>${markedDesc}</td>
          <td>${Number(item.amount).toFixed(2)}</td>
          <td>${markedCategory}</td>
          <td>${item.date}</td>
        </tr>
      `;
    });

    htmlContent += '</tbody></table>';
    tableContainer.innerHTML = htmlContent;
  }
};

