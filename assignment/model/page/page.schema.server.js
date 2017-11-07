module.exports = function () {
  var mongoose = require('mongoose');

  var PageSchema = mongoose.Schema({
    websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
    name: String,
    description: String,
    widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'WidgetModel'}],
  }, {collection: 'Pages'});

  return PageSchema;
}
