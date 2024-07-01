const express = require("express");
const router = express.Router();

// Require controller modules.
const artpiece_controller = require("../controllers/artPieceController");
const artist_controller = require("../controllers/artistController");
const arttype_controller = require("../controllers/artTypeController");
const artpieceinstance_controller = require("../controllers/artPieceInstanceController");


// ART PIECE ROUTES //

// Get gallery art piece list
router.get("/art", artpiece_controller.artpiece_list);

// Get request for one art piece
router.get("/art/:id", artpiece_controller.artpiece_detail);


// ART PIECE INSTANCE //

// Get art piece instance list
router.get("/piece", artpieceinstance_controller.artpieceinstance_list);

// Get request for one art piece instance
router.get("/piece/:id", artpieceinstance_controller.artpieceinstance_detail);


// ARTIST ROUTES //

// Get artist list
router.get("/artist", artist_controller.artist_list);

// Get request for one artist
router.get("/artist/:id", artist_controller.artist_detail);


// ART TYPE ROUTES //

// Get request for creating an art type. 
// This must come before route that displays Art Type (uses id).
router.get("/type/create", arttype_controller.arttype_create_get);

// Post request for creating art type
router.post("/type/create", arttype_controller.arttype_create_post);

// Get art type list
router.get("/type", arttype_controller.arttype_list);

// Get request for one art type
router.get("/type/:id", arttype_controller.arttype_detail);


module.exports = router