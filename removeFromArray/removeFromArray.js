const removeFromArray = function(Array, ...values) {

        let largoValues = values.length;
        let largoArray =Array.length;

        for (i=0; i<largoArray;i++){

            for(j=0; j<largoValues;j++){
                if(Array[i]===values[j]){
                    let place = Array.indexOf(Array[i]);
                    Array.splice(place,1);
                    i--;
                }
            }
        }

        return Array;
}

module.exports = removeFromArray
