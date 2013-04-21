
/*
 * jacky
 */

exports.go = function(req, res){
  	var method = req.method.toLowerCase();
    var param = '';
    if(method == 'get'){
        param = req.query;
    }
    else if(method == 'post'){
        param = req.body;
    }

    res.jsonp(param);

};

