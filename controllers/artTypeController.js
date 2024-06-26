const ArtType = require("../models/artType");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of all ArtType
exports.arttype_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ArtType list");
});

// Display detail page for a specific ArtType
exports.arttype_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: ArtType detail: ${req.params.id}`);
});

// Display ArtType create form on GET
exports.arttype_create_get = (req, res, next) => {
  res.render("arttype_form", { title: "Create Art Type" });
}

// Handle ArtType create on POST
exports.arttype_create_post = [
  // Validate and sanitize the name field.
  body("name", "Art Type must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Art Type object with escaped and trimmed data.
    const artType = new ArtType({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("arttype_form", {
        title: "Create Art Type",
        artType: artType,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Check if Art Type with same name already exists.
      const artTypeExists = await ArtType.findOne({ name: req.body.name })
        .collation({ locale: "en", strength: 2 })
        .exec();

      if (artTypeExists) {
        // ArtType exists, redirect to its detail page.
        res.redirect(artTypeExists.url);
      } else {
        await artType.save();
        // New Art Type saved. Redirect to art type detail page.
        res.redirect(artType.url);
      }
    }
  }),
];