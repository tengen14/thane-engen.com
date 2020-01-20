const Recipes = require('../models/Recipes')

module.exports = {
    find: function(params, callback){
        Recipes.find(params,'_id title teaser', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback){
        Recipes.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}