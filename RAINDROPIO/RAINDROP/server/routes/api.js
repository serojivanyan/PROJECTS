const express = require("express");
const apiRouter = express.Router();

// apiRouter.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
apiRouter.get("/",function(req,res,next){
	res.render("index.html")
});

module.exports = apiRouter;