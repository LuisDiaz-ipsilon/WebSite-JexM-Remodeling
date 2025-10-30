import React from 'react';
import './static/page1.less';
import photo1 from './static/images/photo1.png';
import photo2 from './static/images/photo2.png';
import photo3 from './static/images/photo3.png';
import photo4 from './static/images/photo4.png';
import photo5 from './static/images/photo5.png';
import photo6 from './static/images/photo6.png';

export default function Page1() {
  //const navigate = useNavigate();

  const topics = [
    { title: 'The Kitchen Cabinets', image: photo1 },
    { title: 'Painting Interior', image: photo2 },
    { title: 'Ceramic', image: photo3 },
    { title: 'Doors Installment', image: photo4 },
    { title: 'Baseboards', image: photo5 },
    { title: 'Floors', image: photo6 },
  ];

  const handleClick = (topic) => {
    console.log('Redirigir');
    //navigate(`/topic/${encodeURIComponent(topic.title)}`);
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid">
        {topics.map((topic, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => handleClick(topic)}
          >
            <img src={topic.image} alt={topic.title} />
            <div className="overlay">
              <span className="overlay-text">{topic.title}</span>
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
          {topics.map((topic) => (
            <li key={topic.title} onClick={() => handleClick(topic)}>
              {topic.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
