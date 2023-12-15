document.addEventListener('DOMContentLoaded', () => {

    const name = document.getElementsByClassName('textbox')[0];
    const number = document.getElementsByClassName('textbox')[1];
    const month = document.getElementsByClassName('datebox')[0];
    const year = document.getElementsByClassName('datebox')[1];
    const submit = document.getElementById('submit');

    const cname = document.getElementById('cname');
    const cnum = document.getElementById('cnumber');
    const cdate = document.getElementById('cdate');

    let tempNum = String('');

    function changeText(element, text, isNum) {
        if(isNum) {
            tempNum = text;
            
            if(tempNum.length == 4) {
                console.log(tempNum)
                text += " ";
                tempNum = null;
            }
        }
        element.innerHTML = text;
    }

    name.addEventListener('input', () => {
        console.log('kur')
        changeText(cname, name.value, false)
    })
    number.addEventListener('input', () => {
        console.log('kur')
        changeText(cnum, number.value, true)
    })
})