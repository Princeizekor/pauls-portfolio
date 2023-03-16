import React, { useEffect, useRef } from 'react'

function BrowserCursor() {
    const cursorRef = useRef(null)
    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
        const {clientX, clientY} = event;
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientHeight / 2;

        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    }, [])
  return (
    <div className="cursor" ref = {cursorRef}/>
  )
}

export default BrowserCursor