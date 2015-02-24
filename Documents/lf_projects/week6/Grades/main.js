
var target_div = document.getElementById('display_area');
var running_grade_total = 0;
var running_grade_count = 0;
var avg_div = document.createElement('div');
var average = document.createElement('span');

function add_record() {
    var container = document.createElement('div');
    container.className = "container-area";
    
    var student_name = document.createElement('span');
    student_name.textContent = document.getElementById('name_input').value;
    container.appendChild(student_name);
    target_div.appendChild(container);
    
    var class_name = document.createElement('span');
    class_name.textContent = document.getElementById('class_input').value;
    container.appendChild(class_name);
    target_div.appendChild(container);
    
    var grade = document.createElement('span');
    var student_grade_value = document.getElementById('grade_input').value;
    grade.textContent = student_grade_value;
    container.appendChild(grade);
    target_div.appendChild(container);
    
    running_grade_total += parseInt(student_grade_value);
    running_grade_count++;
    
    
    var average_grade = running_grade_total / running_grade_count;
    document.querySelector('#average').innerHTML = "Average is: " + average_grade.toFixed(2);
    
    //average.textContent = "Average: " + average_grade;
    //avg_div.appendChild(average);
    //target_div.appendChild(avg_div);   
}

    

    