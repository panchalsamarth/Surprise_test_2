function send()
{
number_1 = document.getElementById("word_1").value;
number_2 = document.getElementById("word_2").value;
actual_answer = parseInt(number_1) * parseInt(number_2);
question_number = "<>" + number_1 + "X" + number_2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
check_button = "<br><br><button class = btn btn-info onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("word_1").vlaue = "";
document.getElementById("word_2").vlaue = "";

}