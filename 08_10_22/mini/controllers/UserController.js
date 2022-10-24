"use strict";

const axios = require("axios");

exports.userPostAPI = async (req, res) => {
  try {
    console.log(process.env.USER_POST_API_ENDPOINT + req.query.postid)
    let posts = await axios.get(process.env.USER_POST_API_ENDPOINT + req.query.postid)


    res.status(200);
    res.json({ success: true, data: posts.data });
  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};

