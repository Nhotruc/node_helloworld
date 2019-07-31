//import storage from 'node-persist';
const storage = require('node-persist')

storage.initSync({
    dir: 'students'
});

function getAllStudents() {
    let students = storage.getItemSync('students');
    if(typeof students === 'undefined'){
        return [];
    }

    return students;
}

function getStudent(studentId) {
    let students = getAllStudents();

    let matchedStudent = null;

    for(let student of students){
        if(student.id == studentId)
        matchedStudent = student;
    }
    return matchedStudent;
}

function addStudent(id,fullname){
    var students = getAllStudents();
     
    students.push({
        id : id,
        fullname : fullname
    });
     
    storage.setItemSync('students', students);
}

function removeStudent(studentId){
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }
     
    storage.setItemSync('students', students);
}

function editStudent(studentId,studentName){
    var students = getAllStudents();
 
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentId){
            students[i].fullname = studentName;
        }
    }
     
    storage.setItemSync('students', students);
}

function showStudents(){
    var students = getAllStudents();
    students.forEach(function(student){
        console.log('Student: ' + student.fullname + ' (' + student.id + ')');
    });
}

// Thêm sinh viên
addStudent(1, 'Cuong');
addStudent(2, 'Kinh');
addStudent(3, 'Chinh');
addStudent(4, 'Quyen');
 
// Hiển thị danh sách sinh viên
showStudents();
