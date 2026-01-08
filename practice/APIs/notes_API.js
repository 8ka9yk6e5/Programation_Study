'use strict'

const express = require('express');

const app = express();

const studentsMap = new Map();

//object to create the student to add in map

app.use(express.json());

//post path

app.post('/createStudent', (req, res) => {
    const response = {};
    response.result = studentCreationService.studentCreation(req.body);
    res.send(response);
});

const studentCreationService = {
    //control all part of student creation
    studentCreation(informations){
        informations = studentCreationValidator.unimportantValueRemover(Object.entries(informations));

        if(!studentsMap.has(informations.name)){
            if(studentCreationValidator.studentCreationImportantValueVerificador(Object.keys(informations))){
                if(this.studentCreationValidatorControl.call(studentCreationValidator, Object.entries(informations))){
                    this.studentCreationSaver(informations);
                    return true;
                }
                else return false;
            }
            else return false;
        }
        else return false;
    },

    //methods which add a setter inside each value
    studentCreationValidatorControl(pairs){
        let name, grade, absences, notes;
        for(let pair of pairs){
            switch(pair[0]){
                case 'name':
                    name = this.studentCreationNameValidator(pair[1]);
                    break;
                case 'grade':
                    grade = this.studentCreationGradeValidator(pair[1]);
                    break;
                case 'absences':
                    absences = this.studentCreationAbsencesValidator(pair[1]);
                    break;
                case 'notes':
                    notes = this.studentCreationNotesValidator(Object.entries(pair[1]));
                    break;
            }
        }

        return (name && grade && absences && notes);
    },

    //save the student in a map
    studentCreationSaver(informationReq){
        this.studentObjectValues = new objectConstructor(informationReq);
        const {name : studentObjectKey} = informationReq;
        studentsMap.set(studentObjectKey, this.studentObjectValues);
    }
};

function objectConstructor(originalObj){
        this.grade = originalObj.grade;
        this.absences = originalObj.absences;
        this.notes = originalObj.notes;
};

const studentCreationValidator = {
    importantValues : ['name', 'grade', 'absences', 'notes'],

    unimportantValueRemover(informations){//test this function
        for(let pair of informations){
            if(!this.importantValues.includes(pair[0])){
                informations.splice(informations.indexOf(pair), 1);
            }
        }

        return Object.fromEntries(informations);
    },

    //method which verify if some value is missing
    studentCreationImportantValueVerificador(informations){
        if(this.importantValues.every(item => informations.includes(item))) return true; 
        else  return false;
    },

    //method which verify which value is missing
    studentCreationMissingValues(informations){
        this.missingValues = [];
        for(let info of this.importantValues){
            if(!(informations.includes(info))){
                this.missingValues.push(info);
            }
        }
        //add an error
    },

    //method to verify if the name is in a correct format
    studentCreationNameValidator(name){
        if(name?.trim().length > 0 ) return true;
        else return false;
    },

    //method to verify if the grade is in a correct format
    studentCreationGradeValidator(grade){
        if(grade >= 1 && grade <= 12) return true;
        else return false;
    },

    //method to verify if the absences is in a correct format
    studentCreationAbsencesValidator(absences){
        if(absences >= 0 && absences <= 220) return true;
        else return false;
    },

    //method which verify if the notes are in acceptable value, but don't care about the name
    studentCreationNotesValidator(notes){
        if (notes.every(value => value[1] >= 0 && value[1] <= 10)) return true;
        else return false;
    }
};


//get path

app.get('/search', (req, res) =>{
    const result = searchStudent(req.query.name);
    res.send(result);
});

function searchStudent(queryName){
    if (isFinite(queryName)) return Array.from(studentsMap.keys());
    else if(studentsMap.has(queryName)) return studentsMap.get(queryName);
    else return false;//add an error
}


app.listen(3001);

//when learn about error handling add the errors
//add a note verification if has medium note, and if doesn't add a form to calculate and add
//add a delete method to remove student
//add a put to uptade the student
//add a patch to change little things in students
//improve all code