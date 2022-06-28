import React, {useState} from 'react';
import axios from 'axios';


const MailchimpForm = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [error, setError] = useState(null);

  const subscribe = async() => {
    setState("LOADING");
    setError(null);
    try{
      const reponse = await axios.post("/api/mailchimp", {email});
      setState("SUCCESS");
    } catch(e) {
      setError(e.response.data.error);
      setState("ERROR");
    }
  }

  return (
    <div className="flex flex-col items-center w-full p-8">
    <h2 className="title-font text-color text-2xl text-center">
      Inscrivez-vous à la Newsletter ! 
    </h2>
    <div className="flex w-1/2 lg:w-2/3 justify-center mt-5 flex-col lg:flex-row">
      <input
        className="mb-2 lg:mb-0 w-full lg:w-2/3 py-2 px-4 outline-none rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 "
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className={`lg:ml-2 w-full lg:w-40 darkPink inline-block transform cursor-pointer rounded-full text-md text-white transition duration-500  hover:bg-red-300 ${
          state === "LOADING" ? "button-gradient-loading" : ""
        }`}
        type="button"
        disabled={state === "LOADING"}
        onClick={subscribe}
      >
        Subscribe
      </button>
    </div>
    {state === "ERROR" && (
      <p className="w-1/2 mt-2 text-red-600">{error}</p>
    )}
    {state === "SUCCESS" && (
      <p className="w-1/2 mt-2 text-green-600">Success!</p>
    )}
  </div>
  )
}

export default MailchimpForm