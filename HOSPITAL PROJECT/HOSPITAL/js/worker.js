function Worker(name,lastname,age,role,compensation){
  	People.call(this,workerName.value,workerlastName.value,workerAge.value)
  	this.role=role.value;
  	this.compensation=compensation.value; 	
};
Worker.prototype.save = function(){
	let workerObj = {
		name:this.name,
		lastname:this.lastName,
		age:this.age,
		role:this.role,
		compensation:this.compensation
	};
	postHttpReq(workerObj,"workers",function(err,worker){
		if(err){
			return console.log("err")
		};
		console.log("posthttpReq create worker");
		this.id=worker._id
	});
}
