module.exports = function() {

  var mongoose = require("mongoose");

  var PageSchema = mongoose.Schema({
    websiteID: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
    name: String,
    title: String,
    description: String,
    widgets: [{type: mongoose.Schema.Types.ObjectId, ref:'WidgetModel'}],
  }, {collection: "pages"});

  return PageSchema;
};
