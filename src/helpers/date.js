const formatDate = (date) => {
  let newDate = new Date(date)
    .toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    .split(' ')
    .join(' ');

  return newDate;
};

export default formatDate;
