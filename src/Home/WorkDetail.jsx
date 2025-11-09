import React from 'react';
import './static/workDetail.less';
import photo1 from './static/images/photo1.png';
import photo2 from './static/images/photo2.png';
import photo3 from './static/images/photo3.png';
import photo4 from './static/images/photo4.png';
import photo5 from './static/images/photo5.png';
import photo6 from './static/images/photo6.png';


export default function WorkDetail({ work, onBack }) {
  if (!work) return null;

  const workData = {
    'kitchen-cabinets': {
      text: 'Elegant custom-built cabinets combining style and functionality.',
      images: [photo1, photo2],
    },
    'painting-interior': {
      text: 'High-quality finishes and clean color palettes for modern homes.',
      images: [photo3, photo4],
    },
  };

  const detail = workData[work.component] || { text: '', images: [] };

  return (
    <div className="work-detail">
      <button className="back-button" onClick={onBack}>← Back</button>

      <h1 className="work-title">{work.title}</h1>
      <p className="work-text">{detail.text}</p>

      <div className="work-gallery">
        {detail.images.map((img, i) => (
          <img key={i} src={img} alt={`${work.title}-${i}`} />
        ))}
      </div>
    </div>
  );
}
