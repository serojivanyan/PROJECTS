
function Doctor(name,lastName,age,specialization,experience){
	// specialization = document.getElementById("doctorSpecialization");
	// experience = document.getElementById("doctorExperience");
  	People.call(this,name,lastName,age);
  	this.specialization=specialization;
  	this.experience=experience; 	
 
};

Doctor.prototype.save = function(){
	let doctorObj = {
		name:this.name,
		lastname:this.lastName,
		age:this.age,
		specialization:this.specialization,
		experience:this.experience
	}
	postHttpReq(doctorObj,"doctors",function(err,doctor){
		if(err){
			return console.log("err")
		};
		console.log("posthttpReq create doctor");
		this.id=doctor._id
	});
}
