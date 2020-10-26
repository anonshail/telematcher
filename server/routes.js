const express = require('express');
const router = express.Router();

/**
 * Ping tester
 */
router.get('/ping', function(req, res){
   redis.set('ping', 'pong');
   res.send(redis.get('ping'));
});

//export this router to use in our index.js
module.exports = router;