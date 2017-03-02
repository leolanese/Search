var mongoose = require('mongoose');

var SearchSchema = new mongoose.Schema({
  result_count: String,
  area: String,
  listing:[{
    num_bedrooms: String,
    agent_address: String,
    property_type: String,
    description: String,
    agent_postcode: String,
    details_url: String,
    price: String,
    agent_name: String,
    agent_logo: String,
    agent_phone: String,
    image_url: String
  }]

});

module.exports = mongoose.model('Search', SearchSchema);
