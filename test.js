  const express = require("express");
  const bodyParser = require("body-parser");

  const restService = express();

  restService.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  restService.use(bodyParser.json());



  restService.post("/audio", function(req, res) {
    var speech = "";
    switch (req.body.queryResult.queryText.toLowerCase()) {
      //Speech Synthesis Markup Language 

      case "tpo":
        speech = "Room No: 12, Ground Floor, 'A' Wing, SJCEM";
        console.log(req.body);
          res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;


      case "dean":
        speech = "Room No: 13, Ground Floor, 'A' Wing, SJCEM";
           res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;


      case "academic council":
        speech = " Room No: 14, Ground Floor, 'A' Wing, SJCEM ";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;


      case "chairman":
        speech = "Room No: 15 , Ground Floor, 'A' Wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;


      case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;

        case "public information officer":
        speech = "Room No.: 12, Ground Floor, 'A' wing, SJCEM";
         res.json({
      fulfillmentText: speech,
      source: "Team .Onion"
        });
        break;


    }
     
  });

  restService.listen(process.env.PORT || 8000, function() {
    console.log("Server up and listening");
  });
