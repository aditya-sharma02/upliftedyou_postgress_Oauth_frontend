import { useState } from "react";
import React from "react";

function OpenAi() {
  const [response, setres] = useState("")
  const [details, setdetails] = useState("")
  const submit = async (e) => {
    e.preventDefault()
    let response = await fetch("http://localhost:5000/getdata",  {
      method: "post",
      body: JSON.stringify({ details }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
    let data = await response.json()
    console.log(data)
    
  }
  return (
    <>
      {(response)?response:"hello"}
      <form action="" >
        <input type="text" placeholder="details" value={details} onChange={(e) => setdetails(e.target.value)} />
        <button type="submit" onClick={submit}>click me</button>
      </form>
    </>
  );
}

export default OpenAi;
