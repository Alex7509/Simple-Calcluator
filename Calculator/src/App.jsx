import './App.css'

import { useState } from 'react';

function App() {

    const [display, setDisplay] = useState('0');
    const [currentValue, setCurrentValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');

    const numberClick = (num) => {
        if (display === '0' && num !== '.') {
            setDisplay(num.toString());
        } else {
            setDisplay(display + num.toString());
        }

        setCurrentValue(currentValue + num.toString());
    };

    const operatorClick = (op) => {
        setPreviousValue(display);
        setCurrentValue('');
        setOperator(op);
        setDisplay(display + op);
    };

    const equalClick = () => {

        const previous = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        let result;

        switch (operator) {
            case '/':
                result = previous / current;
                break;
            case '*':
                result = previous * current;
                break;
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;

            default:
                return;
        }

        setDisplay(result.toString());
        setCurrentValue(result.toString());
        setPreviousValue('');
        setOperator('');
    };

    const clearClick = () => {
        setDisplay('0');
        setCurrentValue('');
        setPreviousValue('');
        setOperator('');
    };

    const deleteClick = () => {
        if (display.length === 1) {
            setDisplay('0');
            setCurrentValue('');
        } else {
            setDisplay(display.slice(0, -1));
            setCurrentValue(currentValue.slice(0, -1));
        }
    };

    return (
        <div className='container'>
            <div className='calculator'>
                <form action="">
                    <div className='display'>
                        <input type='text' value={display} />
                    </div>
                    <div>
                        <input type='button' value="AC" onClick={clearClick} />
                        <input type='button' value="DEL" onClick={deleteClick} />
                        <input type='button' value="." onClick={() => numberClick('.')} />
                        <input className='operator' type='button' value="/" onClick={() => operatorClick('/')} />
                    </div>
                    <div>
                        <input type='button' value="7" onClick={() => numberClick('7')} />
                        <input type='button' value="8" onClick={() => numberClick('8')} />
                        <input type='button' value="9" onClick={() => numberClick('9')} />
                        <input className='operator' type='button' value="*" onClick={() => operatorClick('*')} />
                    </div>
                    <div>
                        <input type='button' value="4" onClick={() => numberClick('4')} />
                        <input type='button' value="5" onClick={() => numberClick('5')} />
                        <input type='button' value="6" onClick={() => numberClick('6')} />
                        <input className='operator' type='button' value="+" onClick={() => operatorClick('+')} />
                    </div>
                    <div>
                        <input type='button' value="1" onClick={() => numberClick('1')} />
                        <input type='button' value="2" onClick={() => numberClick('2')} />
                        <input type='button' value="3" onClick={() => numberClick('3')} />
                        <input className='operator' type='button' value="-" onClick={() => operatorClick('-')} />
                    </div>
                    <div>
                        <input type='button' value="0" onClick={() => numberClick('0')} />
                        <input className='equal' type='button' value="=" onClick={equalClick} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App
