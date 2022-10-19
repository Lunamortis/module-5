"use strict";

const axios = require("axios");

exports.userPostAPI = async (req, res) => {
  try {
    const options = { 
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
      },
    };

    const userPostAPI =  process.env.USER_POST_API_ENDPOINT;
    const responce = await axios.get(userPostAPI, options);
    res.status(200);
    res.json({ success: true, data: responce.data });
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};

