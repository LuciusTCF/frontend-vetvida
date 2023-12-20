const actualDate = new Date();

const year = actualDate.getFullYear();
let month = actualDate.getMonth() + 1;
month = month < 10 ? `0${month}` : month;
let day = actualDate.getDate() + 1;
day = day < 10 ? `0${day}` : day;

const minDate = `${year}-${month}-${day}T00:00`;

const actualYear = actualDate.getFullYear();

const maxDate = `${actualYear + 1}-12-31T23:59`;

export { minDate, maxDate };
