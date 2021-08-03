function Sum(Value1, Value2){
    if (Value1 && Value2 > 0){
        return Value1 + Value2
    }else if (Value1 || Value2 < 0){
        return 'One of the values its zero!', Value1 + Value2
    }else{
        return 'Invalid Error. Try Again!'
    }
    }

function Division(Value1, Value2){
    if(Value1 || Value2 <= 0){
        return "Divison Error, you're trying to divide by zero!"
    }
    else{
        return Value1 / Value2
    }
}

function Mult(Value1, Value2){
    if(Value1 || Value2 <= 0){
        return "Division by zero results the same, 0", Value1 * Value2
    }
}

function Sub(Value1, Value2){
    return Value1 - Value2
}



module.exports = {Sum, Division, Mult, Sub};