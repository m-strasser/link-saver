var express = require('express');
var router = express.Router();
var Link = require('../models/linkentry');
var IsAuthenticated = require('../utils/isauthenticated');

router.use(IsAuthenticated);

router.get('/', function(req, res) {
        Link.all(
                req.user.username,
                function(err, linkEntries) {
                        if(err) {
                                console.log(err);
                        }
                        res.render('overview', {user: req.user, linkEntries: linkEntries})
                }
        );
});

router.get('/create', function(req, res) {
        res.render('addentry', {user: req.user});
});

router.post('/create', function(req, res) {
        Link.create(
                req.user.username,
                req.body.title,
                req.body.url,
                function(err, link) {
                        if(err) {
                                // TODO: Handle error
                                return res.render('/create', {});
                        }

                        res.redirect('/links/');
                }
        );
});

module.exports = router;
