let value;


const now = new Date(); // Şu anki zamanı almamızı sağlar

const date1 = new Date("7-24-1996 11:45:00");

const date2 = new Date("July 24 1996");

const date3 = new Date("24/7/1996");

value = date1;

value = date1.getMonth()+1;
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1995);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);


value = date1;

console.log(value);