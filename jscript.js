function button(PricePerPerson){
    var numOfPersons=prompt("Enter the number of person: ");

    if(numOfPersons !=null){
        total=numOfPersons*PricePerPerson;
        alert(`Total cost for ${numOfPersons} person is ${total}`);
    }
    
}

function buttonr(route){
    if(route==1){
        alert("Bus route : Colombo to Kandy");
    }
    else if(route==2){
        alert("Bus route : Colombo to Galle");
    }
    else if(route==3){
        alert("Bus route : Colombo to Jaffna");
    }
}