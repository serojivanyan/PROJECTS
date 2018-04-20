function Patient(name,lastname,age,disease,DateOfTreatment){
  	People.call(this,patientName.value,patientlastName.value,patientAge.value)
  	this.disease=patientDisease.value;
  	this.DateOfTreatment=patientDate.value; 	
};
Patient.prototype.save = function(){
	let patientObj = {
		name:this.name,
		lastname:this.lastName,
		age:this.age,
		disease:this.disease,
		DateOfTreatment:this.DateOfTreatment
	};
	postHttpReq(patientObj,"patients",function(err,patient){
		if(err){
			return console.log("err")
		};
		console.log("posthttpReq create Patient");
		this.id=patient._id
	});
}