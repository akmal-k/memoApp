export const rederDetails = (details: string) => {
  if (details && details.length > 80) {
    if (!details) return '';
    return details.slice(0, 50) + '...';
  } else {
    return details;
  }
};
