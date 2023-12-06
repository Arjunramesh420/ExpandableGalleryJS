import React from 'react';
// import infras from './path/to/infras-image.jpg';

const App = () => {
  function togglePanel(panel) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((p) => {
      if (p !== panel) {
        p.classList.remove('active');
      }
    });

    panel.classList.toggle('active');
  }

  return (
    <div>
      <div className="container3">
        <div
          className="panel"
          style={{ backgroundImage: `url()` }}
          onClick={(event) => togglePanel(event.target)}
        >
          <h4>Fire</h4>
        </div>

        <div
          className="panel"
          style={{ backgroundImage: `url()` }}
          onClick={(event) => togglePanel(event.target)}
        >
          <h4>Water</h4>
        </div>
        
        <div
          className="panel"
          style={{ backgroundImage: `url()` }}
          onClick={(event) => togglePanel(event.target)}
        >
          <h4>Wind</h4>
        </div>
        
        <div
          className="panel"
          style={{ backgroundImage: `url()` }}
          onClick={(event) => togglePanel(event.target)}
        >
          <h4>Earth</h4>
        </div>
        
        <div
          className="panel"
          style={{ backgroundImage: `url()` }}
          onClick={(event) => togglePanel(event.target)}
        >
          <h4>Space</h4>
        </div>
      </div>
    </div>
  );
};

export default App;

