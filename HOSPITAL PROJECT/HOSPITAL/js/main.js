let hospital1 = {};
let hospitalName;
let hospitalAddress;

function newElement(obj,path,id) {	
let name = obj.name;
let ol = document.getElementById(id);
let li = document.createElement("li");

li.innerHTML =" "+path+" "+name;
ol.appendChild(li)
}


function runHospital(){
	hospitalName= document.getElementById("hospitalName").value;
	hospitalAddress = document.getElementById("hospitalAddress").value;
	hospital1= new Hospital(hospitalName,hospitalAddress); 
	hospital1.save();

	newElement(hospital1,"Hospital:","list")

};


function runDoctor(){

	let doctorName = document.getElementById("doctorName");
	let doctorlastName = document.getElementById("doctorlastName");
	let doctorAge = document.getElementById("doctorAge");
	let specialization = document.getElementById("doctorSpecialization");
	let experience = document.getElementById("doctorExperience");
	let doctor1= new Doctor(doctorName.value,doctorlastName.value,doctorAge.value,specialization.value,experience.value);
	hospital1.addDoctors(doctor1);
	doctor1.save();
	newElement(doctor1,"Doctor:","listDoctor")





};
function runPatient(){
	let patientName = document.getElementById("patientName");
	let patientlastName = document.getElementById("patientlastName");
	let patientAge = document.getElementById("patientAge");
	let disease = document.getElementById("patientDisease");
	let DateOfTreatment = document.getElementById("patientDate");
	let patient1= new Patient(patientName.value,patientlastName.value,patientAge,disease,DateOfTreatment);

	patient1.save();
	hospital1.addPatients(patient1);
	console.log(hospital1)
	hospital1.getPatients();
	newElement(patient1,"Patient:","listPatient")

	
	
};

function runWorker(){
	let workerName = document.getElementById("workerName");
	let workerlastName = document.getElementById("workerlastName");
	let workerAge = document.getElementById("workerAge");
	let	role = document.getElementById("workerRole");
	let	compensation = document.getElementById("workerCompensation");
	let worker1= new Worker(workerName.value,workerlastName.value,workerAge,role,compensation);
	hospital1.addWorkers(worker1);
	worker1.save();
	console.log(hospital1);
	newElement(worker1,"Worker:","listWorker");
	
};