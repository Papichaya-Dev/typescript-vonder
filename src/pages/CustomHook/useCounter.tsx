import {useState, useCallback, useMemo, useEffect} from 'react'

export const useCounter = () => {
    const[counter, setCounter] = useState<number>(0)

    const increaseCounter = useCallback(
        () => {
            setCounter((prev: number)=> prev + 1)
        },
        [],
    )
    
    const decreaseCounter = useCallback(
        () => {
            setCounter((prev: number)=> prev - 1)
        },
        [],
    )

    const resetValue = useCallback(
        () => {
            setCounter(0);
        },
        [],
    )

    const counterComponent = useMemo(() => {
        return <div>{counter}</div>
    }, [counter])

    useEffect(() => {
        if (counter || counter ===0){
            console.log('counter', counter);
        }
    }, [counter])

    return{counter, setCounter, increaseCounter, decreaseCounter, resetValue, counterComponent}
}