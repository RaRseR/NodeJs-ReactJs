import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState({
        id: 1,
        count: 10,
        name: "TEST",
    });

    async function send() {
        await axios("/send", {
            method: "POST",
            params: data,
        })
            .then((response) => {
                setData(response.data.newData);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="wrapper">
            <button onClick={() => send()}>SEND</button>
            <h1>{data.name}</h1>
        </div>
    );
}
