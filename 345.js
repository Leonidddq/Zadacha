// 305 №1
//     С помощью метода call и функции func выведите на экран value каждого из инпутов.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value); // выведет value инпута
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);



// 305 №2


//     Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
// let elem = document.querySelector('#elem');

// function func(surname, name) {
   
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem,'Smith','John')