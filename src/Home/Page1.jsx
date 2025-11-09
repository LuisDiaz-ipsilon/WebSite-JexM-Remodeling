import React from 'react';
import './static/page1.less';
import photo1 from './static/images/photo1.png';
import photo2 from './static/images/photo2.png';
import photo3 from './static/images/photo3.png';
import photo4 from './static/images/photo4.png';
import photo5 from './static/images/photo5.png';
import photo6 from './static/images/photo6.png';

export default function Page1({onSelectWork}) {
  //const navigate = useNavigate();
  console.log('Prop recibida:', onSelectWork);

  const works = [
    { title: 'The Kitchen Cabinets', image: photo1, component: 'kitchen-cabinets' },
    { title: 'Painting Interior', image: photo2, component: 'painting-interior' },
    { title: 'Ceramic', image: photo3, component: 'ceramic' },
    { title: 'Doors Installment', image: photo4, component: 'doors-installment' },
    { title: 'Baseboards', image: photo5, component: 'baseboards' },
    { title: 'Floors', image: photo6, component: 'floors' },
  ];

  const handleClick = (work) => {
    if (onSelectWork) {
      onSelectWork(work)
    }
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid">
        {works.map((work, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => handleClick(work)}
          >
            <img src={work.image} alt={work.title} />
            <div className="overlay">
              <span className="overlay-text">{work.title}</span>
            </div>
          </div>
        ))}
      </div>

      <aside className="sidebar">
        <h1 className="brand">
          WE ARE <span>EXPERTS</span>
        </h1>
        <h2 className="title">WORKS</h2>
        <ul className="locations">
          {works.map((work) => (
            <li key={work.title} onClick={() => handleClick(work)}>
              {work.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
