// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef, MutableRefObject } from 'react'

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback: MutableRefObject<any> = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}
