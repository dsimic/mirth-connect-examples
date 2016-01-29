logger.info("Starting transformer.");
logger.info("Msg: " + msg);


var input = JSON.parse(msg);

// PID
var patientGivenName = input.PID.givenName;
var patientFamilyName = input.PID.familyName;
var patientSex = input.PID.sex;
var patientInternalId = input.PID.internalId;
var patientBirthDateTime = input.PID.birthDateTime;

tmp['PID']['PID.3']['PID.3.1'] = patientInternalId;
tmp['PID']['PID.5']['PID.5.1'] = patientFamilyName;
tmp['PID']['PID.5']['PID.5.2'] = patientGivenName;
tmp['PID']['PID.7']['PID.7.1'] = patientBirthDateTime;
tmp['PID']['PID.8']['PID.8.1'] = patientSex;

// PV1
var refDoctorFamilyName = input.PV1.refDoctorFamilyName;
var refDoctorGivenName = input.PV1.refDoctorGivenName;

tmp['PV1']['PV1.3']['PV1.3.1'] = 'RDP';
tmp['PV1']['PV1.8']['PV1.8.2'] = refDoctorFamilyName;
tmp['PV1']['PV1.8']['PV1.8.3'] = refDoctorGivenName;

// ORC
var orderStatus = input.ORC.orderStatus;

tmp['ORC']['ORC.1']['ORC.1.1'] = 'NW';
tmp['ORC']['ORC.5']['ORC.5.1'] = orderStatus;

// OBR
var orderServiceId = input.OBR.universalServiceId.identifier;
var orderModality = input.OBR.diagnosticServSectId.id;
var orderPriority = input.OBR.priority;
var orderScheduledDateTime = input.OBR.scheduledDateTime;

tmp['OBR']['OBR.4']['OBR.4.1'] = orderServiceId;
tmp['OBR']['OBR.5']['OBR.5.1'] = orderPriority;
tmp['OBR']['OBR.24']['OBR.24.1'] = orderModality;
tmp['OBR']['OBR.36']['OBR.36.1'] = orderScheduledDateTime;
tmp['OBR']['OBR.19']['OBR.19.1'] = "MRI BRAIN";

// ZDS
tmp['ZDS']['ZDS.1']['ZDS.1.1'] = "12312.123123.435345";
