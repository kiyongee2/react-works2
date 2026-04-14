"use strict";
const translations = {
    hello: "안녕하세요",
    goodbye: "안녕히 가세요"
};
//출력
console.log(translations.hello); //안녕하세요
console.log(translations.goodbye);
const prices = {
    apple: 1000,
    banana: 500,
    orange: 2000
};
console.log(`사과의 가격: ${prices.apple}`);
//for(변수 in 객체){}
for (const fruit in prices) {
    console.log(`${fruit}: ${prices[fruit]}원`);
}
