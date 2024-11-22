let inputName = document.getElementById('name')
console.log(inputName.placeholder)

function sending_information(){

    let elementsWithId = document.querySelectorAll('.Register-container-left [id]');
    let person = {}
    
    let gender = document.querySelectorAll('.gender div input:checked')
    person['gender'] = gender
    

    console.log(person['passWord'])
    if (person['passWord'] != person['confirm_passWord']){
        alert('confirm password isn\'t match with password')
    }
    else{
        console.log(elementsWithId)
        console.log(person)
    }
}