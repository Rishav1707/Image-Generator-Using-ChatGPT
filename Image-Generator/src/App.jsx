import { useEffect } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_APIKEY;

function App() {
  useEffect(() => {
    const inputElement = document.querySelector("input");
    const sendButton = document.querySelector("#send");

    async function fetchImage() {
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputElement.value,
          n: 4,
          size: "1024x1024",
        }),
      };

      try {
        const response = await fetch(
          "https://api.openai.com/v1/images/generations",
          options
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("Error", error);
      }
    }

    sendButton.onclick = function () {
      fetchImage();
    };
  }, []);

  return (
    <>
      <h1>Image Generator Using OpenAI DALL-E Model</h1>
      <input className="inputElement" placeholder="Write your prompt"></input>
      <span id="send" className="material-symbols-outlined">
        send
      </span>
    </>
  );
}

export default App;
