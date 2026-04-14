import { useState } from "react"

const InputValueState = () => {
    const [text, setText] = useState<string>('');
    const [num, setNum] = useState<number>(0);

    //입력값 변경 핸들러 함수
    // event의 타입은 React.ChangeEvent<HTMLInputElement
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum(Number(e.target.value));
    }

    return(
        <div>
            <h2>입력값 상태 변경</h2>
            <input 
                type="text" 
                value={text}
                onChange={handleTextChange}
                placeholder="글자를 입력하세요"
            />
            <br />
            <input 
                type="number" 
                value={num}
                onChange={handleNumChange}
                placeholder="숫자를 입력하세요"
            />

            <p>입력된 텍스트: {text}</p>
            <p>입력된 숫자: {num + 100}</p>
        </div>
    )
}

export default InputValueState