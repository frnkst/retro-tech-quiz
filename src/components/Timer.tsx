import React from 'react'

type TimerState = {
    time: number
}

type TimerProps = TimerState

export class Timer extends React.Component<TimerProps, TimerState> {
    private interval: any

    constructor(props: TimerProps) {
        super(props)
        this.state = { time: props.time }
    }

    render() {
        return (
            <>
                <div className="retro-font md:text-6xl sm:text-3xl text-yellow-300 m-10">
                    {formatTime(this.state.time)}
                </div>
            </>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.time === 1) {
                clearInterval(this.interval)
            }

            this.setState((state: TimerState) => {
                return { time: state.time - 1 }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

function formatTime(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes < 10 ? '0' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
    }`
}
