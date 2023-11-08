document.addEventListener("DOMContentLoaded", function () {

    const submitButton = document.getElementById('submit');
    const gradeButton1 = document.getElementById('grade1');
    const gradeButton2 = document.getElementById('grade2');
    const gradeButton3 = document.getElementById('grade3');
    const gradeButton4 = document.getElementById('grade4');
    const gradeButton5 = document.getElementById('grade5');
    let chosenOne = 0;
    let chosenButton;

    function afterSubmit(){

    }

    function pressed1(gradeButton, num){
        if(chosenOne === 0){
            gradeButton.className = "grade-activated";
            chosenOne = num;
            chosenButton = gradeButton;
        }
        else {
            gradeButton.className = "grade-activated";
            chosenButton.className = "grade";
            chosenOne = num;
            chosenButton = gradeButton;
        }
    }
    function deactivate(gradeButton){
        gradeButton.className = "grade";
    }
    submitButton.addEventListener("click", afterSubmit);
    gradeButton1.addEventListener("click", function(){
        pressed1(gradeButton1,1);
    });
    gradeButton2.addEventListener("click", function(){
        pressed1(gradeButton2,2);
    });
    gradeButton3.addEventListener("click", function(){
        pressed1(gradeButton3,3);
    });   
    gradeButton4.addEventListener("click", function(){
        pressed1(gradeButton4,4);
    });
    gradeButton5.addEventListener("click", function(){
        pressed1(gradeButton5,5);
    });
})