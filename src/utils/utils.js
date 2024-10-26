export const getFirstSentence = (text) => {
  const match = text.match(/[^.!?]*[.!?]/);
  return match ? match[0].trim() : text;
}

export const formatDate = (date) => {
    const formattedDate = new Date(date);
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(formattedDate);
  }