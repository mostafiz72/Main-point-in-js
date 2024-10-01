function submitData(){
    const ageValue = document.getElementById('age');
    const text = ageValue.value;
    const errdata = document.getElementById('error');
    

    try {
        const age = parseInt(text);
        if(isNaN(age) || age < 0){
            throw('Please enter a valid number');
        }
        else if(age < 18){
            throw('Sory you are childrren Childern Not allowed');
        }
        else if(age > 65){
            throw('Old man not allowed');
        }
        errdata.innerHTML ="Your submition has been successfully";
    }
    catch(error){
        errdata.innerHTML = error;
    }
    
}


/// >>>>>>>>>>>>>>>>>>>>>>> What is finnally >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// finally holo amon ekta function ja condition mass korle o show korbe and na korle o show korbe