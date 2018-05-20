import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 500

const defaultStyle = {
    transition: `background ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
    opacity: 0,
    padding: '10px'
}

const transitionStyles = {
    entering: { opacity: 1, background: 'lightgreen' },
    entered:  { opacity: 0 },
}

const Notification = ({ in: inProp, notification }) =>
    <Transition in={inProp} timeout={duration}>
        {(transitionState) => {
            return(
                <span style={{
                    ...defaultStyle,
                    ...transitionStyles[transitionState]
                }}>
          {notification}
        </span>
            )

        }}
    </Transition>

export default Notification
