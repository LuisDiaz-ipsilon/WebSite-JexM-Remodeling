import React from 'react';
import './static/page1.less';
import photo1 from './static/images/photo1.png';
import photo2 from './static/images/photo2.png';
import photo3 from './static/images/photo3.png';
import photo4 from './static/images/photo4.png';
import photo5 from './static/images/photo5.png';
import photo6 from './static/images/photo6.png';


export default function Page1() {
  const topics = [
    'The kitchen cabinets', 'Painting Interior', 'Ceramic', 'Doors installment',
    'Baseborads',
  ];

  const images = [photo1, photo2, photo3, photo4, photo5, photo6];
  

  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`scene-${i}`} />
          </div>
        ))}
      </div>

      <aside className="sidebar">
        <h1 className="brand">WE ARE   <span>EXPERTS</span></h1>
        <h2 className="title">WORKS</h2>
        <ul className="locations">
          {topics.map((loc) => (
            <li key={loc}>{loc}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
