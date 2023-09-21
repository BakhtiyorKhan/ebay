import {configureStore} from '@reduxjs/toolkit'
import CounterReduce from './CouterReducer/CounterReduce'


let store = configureStore({
    reducer: {
        CounterReduce,
    }
})

export default store;