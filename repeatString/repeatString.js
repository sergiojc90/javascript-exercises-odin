const repeatString = function(string,timesString) {

        let stringAdd = "";

    if (timesString==0){

        stringAdd ='';

    }else if(timesString<0){

        stringAdd = 'ERROR'; 

    }else{
        for(i=1;i <= timesString;i++){
    
            stringAdd+=string;
        }
    }

    
    

    return stringAdd;
}

module.exports = repeatString
