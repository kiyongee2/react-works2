
// Record<K, T> -> 유틸리티 타입
// K - Keys(키, 속성), T - type
type StringMap = Record<string, string>

const translations: StringMap = {
    hello: "안녕하세요",
    goodbye: "안녕히 가세요"
}

//출력
console.log(translations.hello); //안녕하세요
console.log(translations.goodbye);

type Fruit = 'apple' | 'banana' | 'orange'

const prices: Record<Fruit, number> = {
    apple: 1000,
    banana: 500,
    orange: 2000
}

console.log(`사과의 가격: ${prices.apple}`);

//for(변수 in 객체){}
for(const fruit in prices){
    console.log(`${fruit}: ${prices[fruit as Fruit]}원`);
}

