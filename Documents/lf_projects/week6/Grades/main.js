var input_name;
var input_class;
var input_grade;
var btn_add;
var table_body;
var students = [];

$(document).ready(function() {
    input_name = $('#name');
    input_class = $('#class');
    input_grade = $('#grade');
    btn_add = $('#btn_add');
    table_body = $('#grade_table tbody');
    
    table_body.on('click', '.btn_delete', function() {
        var row_index = $(this).parent().parent().index();
        $(this).parent().parent().remove();
        
        students.splice(row_index, 1);
        $('#average').html(calculateAverage());
        highlightRows();
    });
    
    btn_add.click(function() {
        var name = input_name.val();
        var clasname = input_class.val();
        var grade = input_grade.val();
        
        var row = $('<tr>');
        var column_name = $('<td>').html(name);
        var column_classname = $('<td>').html(clasname);
        var column_grade = $('<td>').html(grade);
        var button_delete = $('<button>').addClass('btn_delete').html('X');
        
        row.append(column_name);
        row.append(column_classname);
        row.append(column_grade.append(button_delete));
        table_body.append(row);
        
        var student = {
            name: name,
            'class': clasname,
            grade: parseFloat(grade)
        }
        students.push(student);
        
        var average = calculateAverage;
        $('#average').html(average);
        highlightRows();
    });
});

function calculateAverage() {
 var sum = 0;
    for (var i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    return sum / students.length;
}

function highlightRows() {
    var highestNum = 0;
    var highestIndex = 0;
    var lowestNum = 999999;
    var lowestIndex = 0;
    
    table_body.find('tr').removeClass('highestRow').removeClass('lowestRow');
    
    for(var i = 0; i < students.length; i++) {
        if(students[i].grade > highestNum) {
            highestIndex = i;
            highestNum = students[i].grade;
        }
    }
    
    $(table_body.find('tr')[highestIndex]).addClass('highestRow');
      
    for(var i = 0; i < students.length; i++) {
        if(students[i].grade < lowestNum) {
            lowestIndex = i;
            lowestNum = students[i].grade;
        }
    }
    
    $(table_body.find('tr')[lowestIndex]).addClass('lowestRow');
}