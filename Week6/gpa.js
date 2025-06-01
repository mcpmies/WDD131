
function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    const gradeArray = grades.split(",");
    const formatGrades = gradeArray.map((grade) => grade.trim().toUpperCase());
    return formatGrades;
}

function lookupGrade(grade) {
    let points = 0;
    switch(grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
    }
    return points;
}

function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    const displayBox = document.querySelector(selector);
    displayBox.innerText = gpa;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
