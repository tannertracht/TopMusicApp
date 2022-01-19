import React from 'react';

interface IToggleTextButtonProps {
  text: string;
  selected: boolean;
  onClick: Function;
}

function ToggleTextButton({text, selected, onClick}: IToggleTextButtonProps) {
  return (
    <div onClick={() => onClick()} style={{ padding: '2vh'}}>
      <button className='toggle-button' style={{ background: "none", border: "none", fontSize: "5vh", color: selected ? "white" : "#0F084B", transition: "all 0.5s" }}>{text}</button>
    </div>
  )
}

export default ToggleTextButton