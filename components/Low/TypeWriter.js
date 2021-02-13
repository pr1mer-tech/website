import { useState, useEffect } from "react";

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 100,
}

export default function TypeWriter({ messages, heading }) {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs)
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState(cs => ({
          ...cs,
          isDeleting: true
        }))
      }, 2000);
    } else if (state.isDeleting && state.text === "") {
      setState(cs => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages)
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <>
    { heading }&nbsp;
    <span>{state.text}</span>
    <span id="cursor" />
    <style jsx>{`
    #cursor {
        border-left: .1em solid #000;
        animation: blink .7s steps(1) infinite;
    }
    
    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }
    `}</style>
    </>
  );
}