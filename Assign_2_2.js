function calculateGrade() {
    var score1 = document.getElementById('score1').value;
    var score2 = document.getElementById('score2').value;
    var score3 = document.getElementById('score3').value;
    var score4 = document.getElementById('score4').value;
    var score5 = document.getElementById('score5').value;
  
    var averageScore = (parseFloat(score1) + parseFloat(score2) + parseFloat(score3) + parseFloat(score4)+parseFloat(score5)) / 5;
  
    if (averageScore >= 90 && averageScore <= 100) {
      document.getElementById('grade').innerHTML = 'A';
    } else if (averageScore >= 80) {
      document.getElementById('grade').innerHTML = 'B';
    } else if (averageScore >= 70) {
      document.getElementById('grade').innerHTML = 'C';
    } else if (averageScore >= 60) {
      document.getElementById('grade').innerHTML = 'D';
    } else {
      document.getElementById('grade').innerHTML = 'F';
    }
  
    if(averageScore>=60){
      document.getElementById('Declaration').innerHTML = 'PASS';
    }
    else{
      document.getElementById('Declaration').innerHTML = 'FAIL';
    }
  }