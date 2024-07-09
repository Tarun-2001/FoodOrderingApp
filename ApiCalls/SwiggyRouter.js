const express = require("express");
const http = require("http");

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
      "https://www.swiggy.com/api/seo/getListing?lat=17.425938120298223&lng=78.39342287825744",
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


module.exports = routerSwiggy;
