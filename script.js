let nameBtn = document.querySelector ('button');
nameBtn.addEventListener('click', showMsg);
nameBtn.addEventListener('click', inputMsg);



function showMsg(){
    alert ("Welcome to Java Script ! please enter your name")

}
function inputMsg()
{
    let name = prompt('Enter your name ');
    nameBtn.textContent = 'Roll num. 1:' + name;
}
