const parser = require('simple-excel-to-json');
const json2xls = require('json2xls');
const fs = require('fs');
const { range } = require('lodash');
const doc = parser.parseXls2Json('./Assignment.xlsx')[0];
// console.log(doc);
doc.sort((a,b) => {
    return b.CGPA - a.CGPA;
});
// for(x in range(doc.length)){
//     console.log(doc[x].CGPA)
// }
// console.log(doc);
let fwt = 0;
let ui = 0;
let it = 0;
let erp = 0;
const elcDoc = doc.map((student) => {
    if(student.OPTION_1 == "Fundamentals of Web Technologies"){
        if(fwt < 50){
            student.ELECTIVE = "Fundamentals of Web Technologies";
            fwt += 1;
        }
        else{
            if(student.OPTION_2 == "User Interface/User Experience (UI/UX) Design" && ui < 50){
                student.ELECTIVE = "User Interface/User Experience (UI/UX) Design";
                ui += 1;
            }
            else if(student.OPTION_2 == "Internet, Technology and Society" && it < 50){
                student.ELECTIVE = "Internet, Technology and Society";
                it += 1;
            }
            else if(student.OPTION_2 == "Enterprise Resource Planning" && erp < 50){
                student.ELECTIVE = "Enterprise Resource Planning";
                erp += 1;
            }
        }
    }
    else if(student.OPTION_1 == "User Interface/User Experience (UI/UX) Design"){
        if(ui < 50){
            student.ELECTIVE = "User Interface/User Experience (UI/UX) Design";
            ui += 1;
        }
        else{
            if(student.OPTION_2 == "Fundamentals of Web Technologies" && fwt < 50){
                student.ELECTIVE = "Fundamentals of Web Technologies";
                fwt += 1;
            }
            else if(student.OPTION_2 == "Internet, Technology and Society" && it < 50){
                student.ELECTIVE = "Internet, Technology and Society";
                it += 1;
            }
            else if(student.OPTION_2 == "Enterprise Resource Planning" && erp < 50){
                student.ELECTIVE = "Enterprise Resource Planning";
                erp += 1;
            }
        }
    }
    else if(student.OPTION_1 == "Internet, Technology and Society" && it < 50){
        student.ELECTIVE = "Internet, Technology and Society";
        it += 1;
    }
    else if(student.OPTION_1 == "Enterprise Resource Planning" && erp < 50){
        student.ELECTIVE = "Enterprise Resource Planning";
        erp += 1;
    }
    return student;
})
// console.log(elcDoc);
const xls = json2xls(elcDoc);

fs.writeFileSync('Elective.xlsx', xls, 'binary');