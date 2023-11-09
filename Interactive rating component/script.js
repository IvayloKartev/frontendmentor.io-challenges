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
        const titles = document.getElementById('titles');
        const starlogo = document.getElementById('star');
        const butn = document.getElementById('submit');
        const grades = document.getElementById('grades');
        grades.remove();
        makeInvisible(titles);
        starlogo.remove();
        butn.remove();
        const content = document.getElementById('content');
        content.style.alignItems = "center";
        content.style.justifyContent = "center";
        content.style.gap = "30px"
        const thanksImg = document.getElementById('thanksImg');
        makeVisible(thanksImg);
        const result = document.getElementById('results');
        makeVisible(result);
        const resText = document.getElementById('text-result');
        const resString = String("You selected " + chosenOne + " out of 5");
        resText.innerHTML = resString;
        makeVisible(titles);
        titles.style.textAlign = "center";
        content.appendChild(thanksImg);
        content.appendChild(result);
        content.appendChild(titles);
        const title = document.getElementById('title');
        const text = document.getElementById('text');
        title.innerHTML = "Thank you!";
        content.style.width = "345px";
        text.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    }

    function makeVisible(element) {
        element.style.position = "static";
        element.style.visibility = "visible";
    }
    function makeInvisible(element) {
        element.style.position = "absolute";
        element.style.top = "0";
        element.style.left = "0";
        element.style.visibility = "hidden";
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