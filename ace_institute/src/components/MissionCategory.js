import React, { useState } from 'react';
import MissionCard from './MissionCard';

export default function MissionCategory({ title, missions }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mission-category">
      <div className="category-header" onClick={() => setExpanded(!expanded)}>
        <h2>{title}</h2>
        <span>{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && (
        <div className="mission-list">
          {missions.map((mission, index) => (
            <MissionCard key={index} mission={mission} />
          ))}
        </div>
      )}
    </div>
  );
}
