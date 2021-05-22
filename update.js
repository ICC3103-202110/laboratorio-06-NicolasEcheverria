const { inputForm } = require("./view")





function update(temp,unit1,unit2,model,source){
    

    if (unit1=="Celsius"&&unit2=="Kelvin"){

        const leftValue2=temp
        const leftUnit2="Celsius"
        const rightValue2=Number(temp)+273.15
        const rightUnit2="Kelvin"
        if (source ==1){
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }
        } else{
            return {
                ...model,
                leftValue:rightValue2 ,
                leftUnit:rightUnit2 ,
                rightValue:leftValue2,
                rightUnit:leftUnit2
            }

        
    
        }
    
        }else if(unit1=="Celsius"&&unit2=="Farenheit"){
            const leftValue2=temp
            const leftUnit2="Celsius"
            const rightValue2=(Number(temp)*(9/5))+32
            const rightUnit2="Farenheit"
            if (source ==1){
            return {
                ...model,
                leftValue:leftValue2 ,
                leftUnit:leftUnit2 ,
                rightValue:rightValue2,
                rightUnit:rightUnit2
            }
            } else{
                return {
                    ...model,
                    leftValue:rightValue2 ,
                    leftUnit:rightUnit2 ,
                    rightValue:leftValue2,
                    rightUnit:leftUnit2
                }

            }

        }else if(unit1=="Kelvin"&&unit2=="Celsius"){
            const leftValue2=temp
            const leftUnit2="Kelvin"
            const rightValue2=Number(temp)-273.15
            const rightUnit2="Celsius"
            if (source ==1){
                return {
                    ...model,
                    leftValue:leftValue2 ,
                    leftUnit:leftUnit2 ,
                    rightValue:rightValue2,
                    rightUnit:rightUnit2
                }
                } else{
                    return {
                        ...model,
                        leftValue:rightValue2 ,
                        leftUnit:rightUnit2 ,
                        rightValue:leftValue2,
                        rightUnit:leftUnit2
                    }
    
                }

        }else if (unit1=="Kelvin"&&unit2=="Farenheit"){
            const leftValue2=temp
            const leftUnit2="Kelvin"
            const rightValue2=Number(temp)*(9/5)-459.67
            const rightUnit2="Farenheit"
            if (source ==1){
                return {
                    ...model,
                    leftValue:leftValue2 ,
                    leftUnit:leftUnit2 ,
                    rightValue:rightValue2,
                    rightUnit:rightUnit2
                }
                } else{
                    return {
                        ...model,
                        leftValue:rightValue2 ,
                        leftUnit:rightUnit2 ,
                        rightValue:leftValue2,
                        rightUnit:leftUnit2
                    }
    
                }

        }else if (unit1=="Farenheit"&&unit2=="Celsius"){
            const leftValue2=temp
            const leftUnit2="Farenheit"
            const rightValue2=(Number(temp)-32)*(5/9)
            const rightUnit2="Celsius"
            if (source ==1){
                return {
                    ...model,
                    leftValue:leftValue2 ,
                    leftUnit:leftUnit2 ,
                    rightValue:rightValue2,
                    rightUnit:rightUnit2
                }
                } else{
                    return {
                        ...model,
                        leftValue:rightValue2 ,
                        leftUnit:rightUnit2 ,
                        rightValue:leftValue2,
                        rightUnit:leftUnit2
                    }
    
                }



        }else if(unit1=="Farenheit"&&unit2=="Kelvin"){
            const leftValue2=temp
            const leftUnit2="Farenheit"
            const rightValue2=(Number(temp)-32)*(5/9)+273.15
            const rightUnit2="Kelvin"
            if (source ==1){
                return {
                    ...model,
                    leftValue:leftValue2 ,
                    leftUnit:leftUnit2 ,
                    rightValue:rightValue2,
                    rightUnit:rightUnit2
                }
                } else{
                    return {
                        ...model,
                        leftValue:rightValue2 ,
                        leftUnit:rightUnit2 ,
                        rightValue:leftValue2,
                        rightUnit:leftUnit2
                    }
    
                }


        }else {
            const leftValue2=temp
            const leftUnit2=unit1
            const rightValue2=temp
            const rightUnit2=unit2
            if (source ==1){
                return {
                    ...model,
                    leftValue:leftValue2 ,
                    leftUnit:leftUnit2 ,
                    rightValue:rightValue2,
                    rightUnit:rightUnit2
                }
                } else{
                    return {
                        ...model,
                        leftValue:rightValue2 ,
                        leftUnit:rightUnit2 ,
                        rightValue:leftValue2,
                        rightUnit:leftUnit2
                    }
    
                }

        }

 


}

module.exports = {
    update
}