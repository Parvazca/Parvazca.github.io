var airports = {
  "YVR | Vancouver International Airport": null,
  "IKA | Tehran Imam Khomeini International Airport": null,
  "MSP | Minneapolis–Saint Paul International Airport ": null, ///Optional image url
  "YYZ | Toronto Pearson International Airport": null
};

var flights = {
  "IKA-YVR-25/3/2018-3:25":{
    to:"IKA",
    from:"YVR",
    time:"21/3/2018 3:25",
    price:"300"
  },
  "IKA-YVR-25/3/2018-2:25":{
    to:"IKA",
    from:"YVR",
    time:"25/3/2018 2:25",
    price:"700"
  },
  "IKA-YVR-21/3/2018-3:25":{
    to:"IKA",
    from:"YVR",
    time:"21/3/2018 3:25",
    price:"500"
  }
}

$(document).ready(function(){



  $('.datepicker').pickadate({
     selectMonths: true, // Creates a dropdown to control month
     selectYears: 15, // Creates a dropdown of 15 years to control year,
     today: 'Today',
     clear: 'Clear',
     close: 'Ok',
     closeOnSelect: false // Close upon selecting a date,
   });

   $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    });

    $('.submit').click(function() {
      ///MAKE Request Here
      var data = flights;
      for (var key in data) {
    // skip loop if the property is from prototype
        if (!data.hasOwnProperty(key)) continue;

        var obj = data[key];

        // for (var prop in obj) {
        //     // skip loop if the property is from prototype
        //     if(!obj.hasOwnProperty(prop)) continue;
        //
        //     // your code
        //     alert(prop + " = " + obj[prop]);
        // }
        ShowFlightInListing(obj);
      }
      $('html, body').animate({
        scrollTop: $(".flightsContainer").offset().top
    }, 800);
      ///Display information
    })

    $('.autocomplete').autocomplete({
   data: airports,
   limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
   onAutocomplete: function(val) {
     // Callback function when value is autcompleted.
   },
   minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
 });

});

function ShowFlightInListing(obj){
  var html = ' \
    <div class="row">\
      <div class="col s12 m12">\
        <div class="card-panel teal">\
          <span class="white-text"><h3> <i class="material-icons medium">flight</i>'+ obj.from+ '->'+  obj.to + '</h3>\
          <hr>\
          <span class="flow-text">\
          \
            <div class="card-panel green hoverable center">\
            <i class="material-icons small">date_range</i>'+ obj.date +'\
            </div>\
            \
            <div class="card-panel blue hoverable center">\
            <i class="material-icons small">access_time</i>'+ obj.time +'\
            </div>\
          </span>\
          <h5> \
            <div class="card-panel red hoverable">\
          <h5 class="center"><i class="material-icons small">attach_money</i>'+obj.price+'</h5>\
        </div>\
      </div>\
    </div>';

    $(".flightsContainer").append(html);
}
var flights = {
  "IKA-YVR-25/3/2018-3:25":{
    to:"IKA",
    from:"YVR",
    date:"21/3/2018",
    time:"3:25",
    price:"300"
  },
  "IKA-YVR-25/3/2018-2:25":{
    to:"IKA",
    from:"YVR",
    date:"25/3/2018",
    time:"2:25",
    price:"700"
  },
  "IKA-YVR-21/3/2018-3:25":{
    to:"IKA",
    from:"YVR",
    date:"21/3/2018",
    time:"3:25",
    price:"500"
  }
}
