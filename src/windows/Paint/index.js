import React, { useRef, useState, useEffect } from 'react';

export default function Paint() {

  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [context, setContext] = useState();

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');
      if (renderCtx) {
        setContext(renderCtx);
      }
    }
  }, [context]);

  const startDrawing = (event) => {
    setDrawing(true);
    draw(event);
  };

  const endDrawing = () => {
    setDrawing(false);
  };

  const draw = (event) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.strokeStyle = 'black';

    context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    context.stroke();

    context.beginPath();
    context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  };

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={480}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseOut={endDrawing}
      onMouseMove={draw}
      style={{ border: '1px solid black', touchAction: 'none' }}
    />
  );
}