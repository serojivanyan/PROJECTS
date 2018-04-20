 function Hospital(name,address){
	let that=this;
	this._id;
	this.name=name;
	this.address=address;
	this.doctors=[];
	this.workers=[];
	this.patients=[];
};
		  	
Hospital.prototype.setAddress=function(address){
	this.address=address;
}

Hospital.prototype.addDoctors=function(doctors){
	this.doctors = this.doctors.concat(doctors);
}

Hospital.prototype.getDoctors=function(){
	return this.doctors;
}

Hospital.prototype.addWorkers=function(workers){
	this.workers = this.workers.concat(workers);
}

Hospital.prototype.getWorkers=function(){
	return this.workers;
}

Hospital.prototype.addPatients=function(patients){
	this.patients = this.patients.concat(patients);
}

Hospital.prototype.getPatients=function(){
	return this.patients;
}

Hospital.prototype.save = function(){
	let reqObj= { name:this.name,
				  address:this.address
				};

	postHttpReq(reqObj,"hospitals",function(err,hospital){
		if(err) {
			return console.log(err);
		};
		console.log("posthttpreq + hosId")
		this._id = hospital._id;
		console.log(hospital);
	});
};
