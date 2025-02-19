// useState - allows creation of statefull variable and a setter 
// function to update its value in Virtual DOM

import { useState } from 'react'

function StateUse() {

    // GENERAL SYNTAX !!
    // const [variable , setVariable] = useState(defaultValue);

    // variable -> statefull variable, and its default value 
    // will be given inside useState parenthesis, 
    // if we ever want to change the value of statefull variable, we do so 
    // by using setVariable setter function

    // ********CHANGE NAME***********
    const [name, setName] = useState("Chat GPT");
    const nameChanged = () => {      //always use callback function in onclick if using in inline methods
        if (name === 'Chat GPT') setName("DeepSeek");
        else setName('Chat GPT');
    }

    // *********CHANGE AGE **********
    const [age, setAge] = useState(19);
    let addYear = () => {
        setAge(age + 1);
    }

    // ********** TEXT FIELD **********
    const [text, setText] = useState('');
    function textChanged(event) {
        // console.log(event.target.value);
        setText(event.target.value);
    }
    function resetBtn() {
        setText('');
    }

    // ********** CHECKBOX *********** 
    const [check, setCheck] = useState(false);
    function isChecked() {
        setCheck(!check);
    }

    // ********* UPDATER FUNCTION *********
    const [year, setYear] = useState(2025);
    function updatePreValue() {
        /* expected
        setYear(year+1);    //26
        setYear(year+1);    //27
        setYear(year+1);    //28
        setYear(year+1);    //29
        setYear(year+1);    //30
        */
        // updater function
        setYear(y => y + 1);//26
        setYear(y => y + 1);//27
        setYear(y => y + 1);//28
    }


    return (
        <>
            <div>
                Change name
                <div>I love {name}</div>
                <button onClick={nameChanged}> Change name </button>
            </div>

            <br /><br />

            <div>
                Change Age
                <div>I am {age} years old</div>
                <button onClick={addYear}> +1 year </button>
                {/* <button onClick={()=>setAge(age = age+1)}>+1 year</button> */}
            </div>

            <br /> <br />

            <div>
                Text Field
                <br />
                <input type="text" placeholder='Type something...' onChange={textChanged} />
                <div>Your typing: {text}</div>
                <button onClick={resetBtn}>Reset</button>
            </div>

            <br /><br />

            <div>
                CheckBox
                <br />
                <span><input type="checkbox" onClick={isChecked} /> Tick the CheckBox</span>
                <div>The CheckBox is {check ? 'checked' : 'not checked'}</div>
            </div>

            <br /><br />

            <div>
                Updater Function <br />
                <div>The year is: {year}</div>
                <button onClick={updatePreValue}>+3</button>
            </div>

            {/* Continue reading from "Updating objects and arrays in state" !! */}

        </>
    )
}

export default StateUse;
