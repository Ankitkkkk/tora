import React, { useRef, useState, useEffect } from 'react';
import NewConnection from '@/component/home/NewConnection';

function AdjustableSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (e: MouseEvent) => {
    if (isResizing && sidebarRef.current) {
      const newWidth = e.clientX;
      if (newWidth > 200 && newWidth < 600) {
        sidebarRef.current.style.width = `${newWidth}px`;
      }
    }
  };

  // Attach event listeners ONCE when component mounts
  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing]);

  return (
    <div className="min-h-screen overflow-hidden flex">
      <div
        ref={sidebarRef}
        className="relative border-r shadow flex flex-col"
        style={{ width: '300px', height: '100vh' }}
      >
        <div className="p-4">
          Item 1 (Resizable Sidebar)
        </div>

        {/* Drag Handle */}
        <div
          onMouseDown={startResizing}
          className="absolute top-0 right-0 w-2 h-full cursor-col-resize z-10 bg-transparent select-all"
        ></div>
      </div>

      <div className="flex-1 p-6 select-none">
        <NewConnection/>
      </div>
    </div>
  );
}

export default AdjustableSidebar;
