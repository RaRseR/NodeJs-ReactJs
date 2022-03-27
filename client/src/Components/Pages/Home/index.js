import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState({
        id: 10,
        content: "TEST",
    });

    async function lastData() {
        await axios("/lastData", {
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
    async function add() {
        await axios("/add", {
            method: "POST",
            params: { content: test.value },
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
            <button onClick={() => lastData()}> lastData </button>
            <input id="test" type="text" />
            <button onClick={() => add()}> ADD </button>
            <h1> {data.id} </h1>
            <h1> {data.content} </h1>
        </div>
    );
}
