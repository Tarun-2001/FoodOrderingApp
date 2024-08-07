const express = require("express");
const fetch = require('node-fetch');
const routerSwiggy = express.Router();

routerSwiggy.get("/restaurant", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      }
    );
    const responseObj = await response.json();
    res.status(200).json(responseObj);
  } catch (error) {
    console.log(error);
  }
});

routerSwiggy.get("/getMorerestaurant", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.971389&lng=77.750130",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      }
    );
    const responseObj = await response.json();
    res.status(200).json(responseObj);
  } catch (error) {
    console.log(error);
  }
});

routerSwiggy.get("/restaurantMenu/:resId", async (req, res) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${req.params.resId}&catalog_qa=undefined&submitAction=ENTER`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      }
    );
    const responseObj = await response.json();
    res.status(200).json(responseObj);
  } catch (error) {
    console.log(error);
  }
});

routerSwiggy.get("/update", async (req, res) => {
  try {
    let data = JSON.stringify({
      lat: "18.3205",
      lng: "78.3370",
    });

    let config = {
      method: "post",
      url: "https://www.swiggy.com/dapi/restaurants/list/update",
      headers: {
        "content-type": "application/json",
        origin: "https://www.swiggy.com",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
      },
      data: data,
    };
    let resposnse = await fetch(config.url, {
      method: "POST",
      headers: config.headers,
      body: data,
    });
    resposnse = await resposnse.json();
    res.status(200).json(resposnse);
  } catch (error) {
    console.log(error);
  }
});
module.exports = routerSwiggy;
