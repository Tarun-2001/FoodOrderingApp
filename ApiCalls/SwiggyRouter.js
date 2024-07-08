const express = require('express');
const http = require('http');

const routerSwiggy = express.Router();

routerSwiggy.get('/restaurant', (req, res) => {
  const options = {
    hostname: 'www.swiggy.com',
    path: '/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=750389&catalog_qa=undefined&submitAction=ENTER',
    method: 'GET'
  };

  const request = http.request(options, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    response.on('end', () => {
      if (response.statusCode === 200) {
        try {
          const responseObj = JSON.parse(data);
          res.status(200).json({ responseObj });
        } catch (error) {
          res.status(500).json({ errorMessage: 'Error parsing JSON response', error });
        }
      } else {
        res.status(response.statusCode).json({ errorMessage: `HTTP error! Status: ${response.statusCode}` });
      }
    });
  });

  // Handle request errors
  request.on('error', (error) => {
    console.error('Error fetching restaurant data:', error);
    res.status(500).json({ errorMessage: 'Oops!!! Something Went Wrong....', error });
  });

  request.end();
});

module.exports = routerSwiggy;
