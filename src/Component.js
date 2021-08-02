import React, { useState, useCallback, useMemo, useEffect } from "react";

export const Component = (props) => {
    console.log("----------, component is rendering");
    const [messageList, setMessageList] = useState([]);
    const [count, setCount] = useState(1);
    const [names, setNames] = useState([""]);

    useEffect(() => {
        console.log('did mount');
    }, []);

    useEffect(() => {
        console.log("did mount & name update");
    }, [names]);

    const handleClick = useCallback(() => {
        setCount(names.length + 1);
    }, [names]);

    return (
        <>
            <span>Hello there, {count}</span>
            <button onClick={handleClick}>ADD NAME</button>
            {names.map(names => <div>{names}</div>)}
        </>
    );
};