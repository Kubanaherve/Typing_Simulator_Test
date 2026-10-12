// Computes business intelligence calculations across transactional datasets
export function calculateDashboardMetrics(records) {
  const totalRecords = records.length;
  const runningSum = records.reduce((sum, rec) => sum + parseFloat(rec.amount || 0), 0);
  
  // Scans entries to establish active frequency tracking arrays
  const categories = records.map(rec => rec.category);
  const distribution = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const topCategory = Object.keys(distribution).sort((a, b) => distribution[b] - distribution[a])[0] || 'N/A';

  return { totalRecords, runningSum, topCategory };
}




