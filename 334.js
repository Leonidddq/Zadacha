// 304 №1
//     Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.


// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	let a = this
//     alert(square())     //теряется контекст и надо this записать в переменную
// 	function square() {
// 		return a.value * a.value; 
        
// 	}
    
// }




// 304 №2

// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного второго способа.


// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     square(this) 
     
// 	function square(param) {
// 		alert(param.value * param.value ) 
        
// 	}
     
// }



// 304 №3

// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного третьего способа.


// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	alert(this.value * this.value );
	
// 	let square = () => {
// 		alert(this.value * this.value);
// 	}
//     square()
// }