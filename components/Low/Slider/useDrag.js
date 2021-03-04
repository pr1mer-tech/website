import { useCurrentState } from '@geist-ui/react';
import { useEffect, useRef } from 'react';


const useDrag = (elementRef, draggingHandler = () => {}, dragStartHandler = () => {}, dragEndHandler = () => {}) => {
  const onDragging = useRef(false);
  const [, setStartX, startXRef] = useCurrentState(0);
  const [, setCurrentX, currentXRef] = useCurrentState(0);

  const getCustomEvent = () => ({
    startX: startXRef.current,
    currentX: currentXRef.current
  });

  const elementMouseDownHandler = event => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    onDragging.current = true;
    if (!elementRef || !elementRef.current) return;
    setStartX(elementRef.current.getBoundingClientRect().x);
    dragStartHandler(getCustomEvent());
  };

  const globalDraggingHandler = event => {
    if (!onDragging.current) return;

    if (event.type === 'touchmove') {
      setCurrentX(event.changedTouches[0].clientX);
    } else {
      setCurrentX(event.clientX);
    }

    draggingHandler(getCustomEvent());
  };

  const globalDragEndHandler = () => {
    if (!onDragging.current) return;
    onDragging.current = false;
    dragEndHandler(getCustomEvent());
  };

  useEffect(() => {
    if (!elementRef || !elementRef.current) return;
    elementRef.current.addEventListener('mousedown', elementMouseDownHandler);
    elementRef.current.addEventListener('touchstart', elementMouseDownHandler);
    window.addEventListener('mousemove', globalDraggingHandler);
    window.addEventListener('touchmove', globalDraggingHandler);
    window.addEventListener('mouseup', globalDragEndHandler);
    window.addEventListener('touchend', globalDragEndHandler);
    return () => {
      window.removeEventListener('mousemove', globalDraggingHandler);
      window.removeEventListener('touchmove', globalDraggingHandler);
      window.removeEventListener('mouseup', globalDragEndHandler);
      window.removeEventListener('touchend', globalDragEndHandler);
      if (!elementRef || !elementRef.current) return;
      elementRef.current.removeEventListener('mousedown', elementMouseDownHandler);
      elementRef.current.removeEventListener('touchstart', elementMouseDownHandler);
    };
  }, [elementRef]);
};

export default useDrag;