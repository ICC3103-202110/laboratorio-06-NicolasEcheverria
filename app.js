const {inputForm,listFormUnits,listFormUnits2,source,inputForm2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        
        const sourceValue =await source(model)
        if (sourceValue.leftTemperatureIsSource===true ){
            const leftValue = await inputForm(model)
            const leftUnit=await listFormUnits(model)
            const rightUnit=await listFormUnits2(model)
            console.log(leftValue["temperatureToConvert"],"qweqwe")
            const updatedModel =update(leftValue["temperatureToConvert"],leftUnit['From'],rightUnit['To'],model,1)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
        }
            
        }else{
            
            const rightValue = await inputForm2(model)
            const rightUnit=await listFormUnits(model)
            const leftUnit=await listFormUnits2(model)

            const updatedModel =update(rightValue["temperatureToConvert"],rightUnit['From'],leftUnit['To'],model,2)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }

        
        
        
        
        
    }
}

module.exports = {
    app
}