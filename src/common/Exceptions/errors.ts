type errors = {
    invalidEmailPassword:string;
    internalServerError:string;
    repeatedExamName:string;
    attendenceClosingDate:string;
    registrationStartDate:string;
    registrationEndDateWithoutFine:string;
    registrationEndDate:string;
    minAttendancePercentage:string;
    noFileChosen:string;
    alreadyRegistered:string;
    unsupportedFile:string;
    invalidCurriculamFormat:string;
    invalidAttendanceFormat:string;
    invalidFacultyFormat:string;
    unAuthorized:string;
}
export const errors: errors = {
    invalidEmailPassword:"Invalid Email or Password",
    internalServerError:"Something went wrong.",
    unAuthorized:'You are not allowed to do this action',
    alreadyRegistered:'Sorry! this email is already registered',
    repeatedExamName:"Exam name already exit.",
    attendenceClosingDate:"Please enter a valid date.",
    registrationStartDate:"Please enter a valid date.",
    registrationEndDateWithoutFine:"Please enter a valid date.",
    registrationEndDate:"Please enter a valid date.",
    minAttendancePercentage:"Enter a valid percentage.",
    
    noFileChosen:"Please Choose a file.",
    unsupportedFile:"UnSupported file! Please select an excel file.",
    invalidCurriculamFormat:"File must be in the format of a valid curriculam data",
    invalidFacultyFormat:'File must be in the format of a valid Faculty data',
    invalidAttendanceFormat:'File must be in the format of a valid Attendance data',
}