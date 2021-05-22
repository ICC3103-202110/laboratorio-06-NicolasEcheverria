const figlet = require('figlet')

const inquirer = require('inquirer')

function getTitle(){
    return figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'fitted',
                font: 'Nancyj-Improved'
            }
        )
    
}

function getTable(model){
    const {leftValue} = model
    const{leftUnit}=model
    const{rightValue}=model
    const{rightUnit}=model
    return [
        {"Left value": leftValue,'Left unit':leftUnit,"Right value":rightValue,"Right unit":rightUnit},
    ]
}

function inputForm(model){
    const {leftValue} = model
    const message = 'Temperature to convert?'
    return inquirer.prompt([
        {
            name: 'temperatureToConvert',
            type: 'input',
            message: message,
            default: leftValue,
            
        }
    ])
}


function inputForm2(model){
    const {rightValue} = model
    const message = 'Temperature to convert?'
    return inquirer.prompt([
        {
            name: 'temperatureToConvert',
            type: 'input',
            message: message,
            default: rightValue,
            
        }
    ])
}



function inputFormDefault(model){
    const {leftValue} = model
    
    return leftValue
}

function source(model){
    const {leftValue} = model
    const message = 'Left temperature is source?'
    return inquirer.prompt([
        {
            name: 'leftTemperatureIsSource',
            type: 'confirm',
            message: message,
            default: true,
            
        }
    ])
}

            

function listFormUnits(model){
    const {leftUnit} = model
    const message = 'From?'
    return inquirer.prompt([
        {
            name: 'From',
            type: 'list',
            message: message,
            choices:["Celsius","Farenheit","Kelvin"],
            default: leftUnit,
            
        }
    ])
}




function listFormUnits2(model){
    const {rightUnit} = model
    const message = 'To?'
    return inquirer.prompt([
        {
            name: 'To',
            type: 'list',
            message: message,
            choices:["Celsius","Farenheit","Kelvin"],
            default: rightUnit,
            
        }
    ])
}




// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    inputForm2,
    listFormUnits,
    listFormUnits2,
    source,
    inputFormDefault
}


