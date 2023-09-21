
const initialCounter = 1

function CounterReduce(state = initialCounter , action){

    if(action.type == 'increment'){
        state = state + 1
    }

    return state
}

export default CounterReduce