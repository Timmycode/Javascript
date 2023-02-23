let students = ["tim", "matt", "elie"];

function findStudentByFirstName(name){
    let smallLetterName = name.toLowerCase();
    for(let i = 0; i < students.length; i++){
        if(students[i].toLowerCase() === smallLetterName){
            return true;
        }
    }
    return false;
}
findStudentByFirstName('elie');
findStudentByFirstName('Elie');
findStudentByFirstName('Janey');
findStudentByFirstName('Janey');
findStudentByFirstName('TIM');
findStudentByFirstName('MMMaaaTTTtttTTT');
