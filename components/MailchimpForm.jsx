import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

const CustomForm = ({ status, message, onSubmitted }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

// to clear the input useEffect will run if the status is "success"
  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }

  // function stop refreshing when submit, check if the values are good if false the form won't submit, onValidated will assign our state to the mailchimp values
  const handleSubmit = (e) => {
    e.preventDefault();
      email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onSubmitted({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <div className="grid-cols-1">
      <form className="" onSubmit={(e) => handleSubmit(e)} >
        <h3 className="title-font text-color mb-10 text-center text-3xl">
          {status === "success"
            ? "Success !"
            : "Join our email list for future updates !"}
        </h3>
        {status === "sending" && (
          <div className="text-blue-500">sending...</div>
        )}
        {status === "error" && (
          <div
            className="text-red-600"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="text-emerald-500"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

          <div className="mc__field-container">
            <div className="align-center">
              <InputField
                onChangeHandler={setEmail}
                type="text"
                value={email}
                placeholder="Your email..."
                isRequired
              />
            </div>
          </div>
       
        {status === "success" ? "thanks you for register" : 
          <div className="mt-8 text-center">
          <InputField
            label="subscribe"
            type="submit"
            formValues={[email, firstName, lastName]}
          />
        </div>
        }
      </form>
    </div>
  );
};


const MailchimpForm = props => {
  const url = `https://gmail.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <div className="mt-10 mb-10 flex justify-center">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onSubmitted={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;