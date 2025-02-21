// useCallback is a React Hook that lets you cache a 
// function definition between re-renders.

// GENERAL SYNTAX
// const fnName = useCallback(Function, [dependencies]);

// Function -  value that you want to cache
// dependencies - list of all reactive values referenced inside of the Function code

//How it works? On the initial render, useCallback returns the Function you have passed,
// During subsequent renders, it will either return an already stored Function from the 
// last render (if the dependencies haven’t changed), or return the Function you have passed during this render.

// Basically, when the values in the dependencies are changed, the function is re-rendered 
// by  Object.is comparison algorithm.

import { useCallback } from "react";

function CallbackUse() {



    return (
        <>
            <h1>useCallback Hook</h1>
        </>
    );
}

export default CallbackUse;