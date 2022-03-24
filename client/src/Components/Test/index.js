import React, { useState } from 'react';

export default function Test() {
    const [data, setData] = useState(0);
    function send(){
        let XHR = new XMLHttpRequest();
        XHR.open("POST", "/send");
        XHR.send();
        XHR.onload=()=>{
            setData(XHR.response);
        }
    }
    return (
        <button onClick={()=>send()}>Кликнули {data} раз(а)</button>
    )
}