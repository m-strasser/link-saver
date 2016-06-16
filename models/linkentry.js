var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LinkEntrySchema = new Schema({
        savedBy: String,
        url: String,
        title: String,
        addedAt: { type: Date, default: Date.now }
});

var LinkEntry = mongoose.model('LinkEntry', LinkEntrySchema);

module.exports.create = function(user, title, url, callback) {
        var linkEntry = {
                savedBy: user,
                title: title,
                url: url
        };

        LinkEntry.create(linkEntry, callback);
};

module.exports.all = function(user, callback) {
        LinkEntry.find({savedBy: user}, 'url title addedAt', callback);
};

//module.exports = mongoose.model('LinkEntry', LinkEntry);
