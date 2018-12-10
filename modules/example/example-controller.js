module.exports = function (){

  return {
    get: function (req, res) {

    	// return res.json({success: true});
    	return res.json([{success: true}, {a: 1}, {b: "oloko"}]);

    }
  }
}