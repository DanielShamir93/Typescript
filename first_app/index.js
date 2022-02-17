"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';
axios_1["default"].get(url)
    .then(function (response) {
    console.log(response.data);
});
