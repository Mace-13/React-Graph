import axios from "axios";

function getRequestParams(email) {
    const API_KEY = process.env.REACT_APP_MAILCHIMP_APIKEY;
    const LIST_ID = process.env.REACT_APP_MAILCHIMP_ID;

    const DATACENTER = process.env.REACT_APP_MAILCHIMP_APIKEY.split("-")[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
        email_address: email,
        status: "subscribed",
    }

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        Authorization: `Basic ${base64ApiKey}`,
    };

    return{ 
        url, 
        data,
        headers
    }
}

export default async (req, res) => {
    const { email } = req.body;
  
    if (!email || !email.length) {
      return res.status(400).json({
        error: "Forgot to add your email?",
      });
    }
  
    try {
      const { url, data, headers } = getRequestParams(email);
  
      const response = await axios.post(url, data, { headers });
  
      // Success
      return res.status(201).json({ error: null });
    } catch (error) {
      return res.status(400).json({
        error: `Oops, something went wrong...`,
      });
  
      
    }
  };