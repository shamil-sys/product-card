
import { socialComments } from './comments.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = numbers.filter(number => number > 4)
console.log('Задание №2 (фильтрация массива);', newNumbers)



const furniture = ["Диван", "Стол", "Стул", "Шкаф"]
console.log('Задание №3 (проверка массива);', furniture.includes("Стул"))



function reverseArray (arr) {
  return arr.reverse();
}
const reversedNumbers = reverseArray(numbers);
const reversedFurniture = reverseArray(furniture);
console.log ('Задание №4 (переворачивание массива);', reversedNumbers)
console.log ('Задание №4 (переворачивание массива);', reversedFurniture)


const comEmailsComments = socialComments.filter (comment => comment.email.includes('.com'));
console.log('Задание 7 (почта с .com):', comEmailsComments);



const updatedPostIdComments = socialComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log('Задание 8 (обновленный postId):', updatedPostIdComments);


const shortComments = socialComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name,
  }});

console.log('Задание 9 (только id и name):', shortComments);


const validatedComments = socialComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log('Задание 10 (проверка на валидность body):', validatedComments);


const emailsWithReduce = socialComments.reduce((emailsArray, comment) => 
  emailsArray.concat(comment.email), []);
console.log('Почты через reduce:', emailsWithReduce);


const emailsWithMap = socialComments.map(comment => comment.email);
console.log('Почты через map:', emailsWithMap);


const stringViaToString = emailsWithMap.toString();
console.log('Строка через toString', stringViaToString);

const stringViaJoin = emailsWithMap.join(',\n ');
console.log('Строка через join()\n', stringViaJoin);