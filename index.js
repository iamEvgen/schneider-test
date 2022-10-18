function getNextMonday() {
  const date = new Date();
  const targetDate = new Date();
  const delta = 1 - date.getDay();
  if (delta >= 0) {
    targetDate.setDate(date.getDate() + delta);
  } else {
    targetDate.setDate(date.getDate() + 7 + delta);
  }
  const day =
    targetDate.getDate().toString().length === 1
      ? '0' + targetDate.getDate().toString()
      : targetDate.getDate();
  const monthTmp = targetDate.getMonth() + 1;
  const month =
    monthTmp.toString().length === 1
      ? '0' + monthTmp.toString()
      : monthTmp.toString();
  const nextMonday = `${day}.${month}.${targetDate
    .getFullYear()
    .toString()
    .slice(2)}`;
  return nextMonday;
}

const saleDate = document.querySelector('#sale_date');
saleDate.textContent = getNextMonday();
