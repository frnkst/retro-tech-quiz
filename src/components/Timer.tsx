import React from "react";

type TimerState = {
  time: number
}

type TimerProps = TimerState;

export class Timer extends React.Component<TimerProps, TimerState> {
  constructor(props: TimerProps) {
    super(props);
    this.state = { time: props.time }
  }

  render() {
    return <><div className="retro-font text-6xl text-yellow-300 m-10">{ formatTime(this.state.time) }</div></>
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state: TimerState) => {
        return { time: state.time - 1 }
      })
    }, 1000)
  }
}

function formatTime(timeInSeconds: number) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds }`
}

