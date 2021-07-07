import { getDateNow } from './date';
 const getDateBirthday = () => getDateNow(new Date(1994, 4, 4)).getTime()

 getDateNow()


console.log(getDateBirthday())