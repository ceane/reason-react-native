// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Pervasives        = require("bs-platform/lib/js/pervasives.js");
var ReactNative       = require("react-native");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function action(resp) {
  if (resp.action === ReactNative.DatePickerAndroid.dateSetAction) {
    return /* Set */[/* record */[
              /* year */resp.year,
              /* month */resp.month,
              /* day */resp.day
            ]];
  } else if (resp.action === ReactNative.DatePickerAndroid.dismissedAction) {
    return /* Dismissed */0;
  } else {
    return Pervasives.failwith("Unknown action received from DatePickerAndroid. Please report this in the bs-react-native repository");
  }
}

function open_(date, minDate, maxDate, $staropt$star, _) {
  var mode = $staropt$star ? $staropt$star[0] : /* Default */2;
  var tmp;
  switch (mode) {
    case 0 : 
        tmp = "calendar";
        break;
    case 1 : 
        tmp = "spinner";
        break;
    case 2 : 
        tmp = "default";
        break;
    
  }
  return ReactNative.DatePickerAndroid.open({
                date: date,
                minDate: Js_null_undefined.from_opt(minDate),
                maxDate: Js_null_undefined.from_opt(maxDate),
                mode: tmp
              }).then((function (resp) {
                return Promise.resolve(action(resp));
              }));
}

exports.open_ = open_;
/* react-native Not a pure module */