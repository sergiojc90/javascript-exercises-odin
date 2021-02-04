const sumAll = function(a,b) {


    if(a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number'){

        return "ERROR";

    }else{
        let sum = 0;

        if (a > b){
            let c = a;
            a = b;
            b = c; 
        }
        for (i = a; i <= b; i++){
            sum += i;    
        }
        return sum;
    }

}

module.exports = sumAll
