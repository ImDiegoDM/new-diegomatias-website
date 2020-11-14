import ReactDOM from "react-dom";
import React from "react";


export function Modal(props){
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div')
  el.style.cssText = 'position:fixed;left:0;right:0;top:0;bottom:0;'

  React.useEffect(()=>{
    modalRoot.appendChild(el)
    return ()=>{
      modalRoot.removeChild(el)
    }
  },[])

  return ReactDOM.createPortal(
    props.children,
    el
  );
}