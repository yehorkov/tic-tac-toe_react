const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
    const handleClick = () => {
      if (cell === '' && !winningMessage) {
        const updatedCells = [...cells];
        updatedCells[id] = go;
        setCells(updatedCells);
  
        setGo(go === 'circle' ? 'cross' : 'circle');
      }
    };
  
    return (
      <div className="square" id={id} onClick={handleClick}>
        <div className={`cell ${cell}`}></div>
      </div>
    );
  };
  
  export default Cell;
  