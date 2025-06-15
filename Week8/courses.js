const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ],
  enrollStudent: function (sectionNum) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (index >= 0) {
      this.sections[index].enrolled++;
      AssignSection(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (index >= 0) {
      this.sections[index].enrolled--;
      AssignSection(this.sections);
    }
  }
};

function NameAndNumber(course) {
  const className = document.querySelector("#courseName");
  const classCode = document.querySelector("#courseCode");
  className.textContent = course.name;
  classCode.textContent = course.code;
}

function template(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function AssignSection(sections) {
  const html = sections.map(template);
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});

NameAndNumber(aCourse);
AssignSection(aCourse.sections);