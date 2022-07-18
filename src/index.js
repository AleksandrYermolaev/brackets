module.exports = function check(str, bracketsConfig) {

	// проверка длины строки
	if (str.length % 2 !== 0) return false;

	// объявление переменных
	const stek = [];
	const strArr = str.split('');
	const openArr = [];
	const closeArr = [];
	let count = 0;
	let result = true;

	// создание массива открывающих и закрывающих скобок
	bracketsConfig.forEach(value => {
		openArr.push(value[0]);
		closeArr.push(value[1]);
	});

	// перебор символов строки и сравнение их с массивами открывающих и закрывающих строк
	strArr.forEach((value) => {
		for (let i = 0; i < openArr.length; i++) {
			if (value === openArr[i] && value === stek[stek.length - 1] && value === closeArr[i]) { 
				stek.pop(); // если скобка уже в стеке и она совпадает с открывающей и закрывающей - удаляем ее
				count = 1; // счетчик нужен, чтобы не запускать цикл удаления закрывающей скобки
			} else if (value === openArr[i]) {
			stek.push(value); //если скобка совпадает только лишь с массивом открывающих - добавляем ее в стек
			count = 1;
			}
		} 
		if (count === 0) { // условия запуска цикла удаления скобок из стека
			for (let j = 0; j < closeArr.length; j++) {
				if (value === closeArr[j]) { // если скобка совпадает с массивов закрывающих и со значение стека - удаляем ее
					stek[stek.length - 1] === openArr[j] ? stek.pop() :  result = false;
				} 
			}	
		} else count = 0; // обнуляем счетчик в конце цикла перебора символов строки
	});
	stek.length === 0 ? result = true : result = false; // проверка пустоты стек, если стек не пуст - последовательность не верна
	return result;
}