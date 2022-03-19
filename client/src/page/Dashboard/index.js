import React, {useState} from "react";
import Auth from "../utils/auth";
import "./style.css";

const Dashboard = () => {
    //Javascript goes here
    const [dashboardText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);


    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
      };

      const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            // add thought to database
            await addMeetups({
              variables: { thoughtText }
            });
        
            // clear form value
            setText('');
            setCharacterCount(0);
          } catch (e) {
            console.error(e);
          }
      };

    return (
        <div>
          <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form className="flex-row justify-center justify-space-between-md align-stretch"onSubmit={handleFormSubmit}>
            <textarea
              placeholder="Here's..."
              value={thoughtText}
              className="form-input col-12 col-md-9"
              onChange={handleChange}
            ></textarea>
            <button className="btn col-12 col-md-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      );

    

    
    
}

export default Dashboard;