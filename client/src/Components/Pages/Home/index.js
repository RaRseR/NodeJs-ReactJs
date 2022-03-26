import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState({
        id: 10,
        content: "TEST",
    });

    async function send() {
        await axios("/send", {
            method: "POST",
            params: data,
        })
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="wrapper">
            <button onClick={() => send()}> SEND </button>
            <h1> {data.id} </h1>
            <h1> {data.content} </h1>
        </div>
    );
}
