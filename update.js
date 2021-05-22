const { inputForm } = require("./view")





function update(temp,unit1,unit2,model){
    
    const {leftValue} = model
    const{leftUnit}=model
    const{rightValue}=model
    const{rightUnit}=model
    const leftValue2=0
    const leftUnit2="celsiuss"
    const rightValue2=0
    const rightUnit2="kelvinn"
    if (unit1=="Celsius"&&unit2=="Kelvin"){
        console.log("aaa")
        console.log(temp)
        const leftValue2=temp
        const leftUnit2="Celsius"
        const rightValue2=Number(temp)+273.15
        const rightUnit2="Kelvin"
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }
    
    }else if(unit1=="Celsius"&&unit2=="Farenheit"){
        const leftValue2=temp
        const leftUnit2="Celsius"
        const rightValue2=(Number(temp)*(9/5))+32
        const rightUnit2="Farenheit"
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }

    }else if(unit1=="Kelvin"&&unit2=="Celsius"){
        const leftValue2=temp
        const leftUnit2="Kelvin"
        const rightValue2=Number(temp)-273.15
        const rightUnit2="Celsius"
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }

    }else if (unit1=="Kelvin"&&unit2=="Farenheit"){
        const leftValue2=temp
        const leftUnit2="Kelvin"
        const rightValue2=Number(temp)*(9/5)-459.67
        const rightUnit2="Farenheit"
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }

    }else if (unit1=="Farenheit"&&unit2=="Celsius"){
        const leftValue2=temp
        const leftUnit2="Farenheit"
        const rightValue2=(Number(temp)-32)*(5/9)
        const rightUnit2="Celsius"
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }



    }else if(unit1=="Farenheit"&&unit2=="Kelvin"){
        const leftValue2=temp
        const leftUnit2="Farenheit"
        const rightValue2=(Number(temp)-32)*(5/9)+273.15
        const rightUnit2="Kelvin"
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }


    }else {
        const leftValue2=temp
        const leftUnit2=unit1
        const rightValue2=temp
        const rightUnit2=unit2
        return {
            ...model,
            leftValue:leftValue2 ,
            leftUnit:leftUnit2 ,
            rightValue:rightValue2,
            rightUnit:rightUnit2
        }

    }

 


}

module.exports = {
    update
}