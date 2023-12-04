import React from 'react';
import 'primereact/resources/themes/mira/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { OrganizationChart } from 'primereact/organizationchart';
import { edelmiraWhitman, nidiaWhitman, veronicaWhitman, ingridWhitman, soniaWhitman, marlenWhitman } from '../data/familyTreeData';
const FamilyTreeComponent = ({ familyBranch }) => {

  console.log(ingridWhitman)
  
  let familyData;
  switch (familyBranch) {
    case 'edelmiraWhitman':
      familyData = edelmiraWhitman;
      break;
    case 'nidiaWhitman':
      familyData = nidiaWhitman;
      break;
    case 'veronicaWhitman':
      familyData = veronicaWhitman;
      break;
    case 'ingridWhitman':
      familyData = ingridWhitman;
      break;
    case 'soniaWhitman':
      familyData = soniaWhitman;
      break;
    case 'marlenWhitman':
      familyData = marlenWhitman;
      break;
    default:
      familyData = edelmiraWhitman;
      break;
  }

  const style = `
    .node-item {
      color: black;
      text-align: center;
      background-color: #ffffff;
      border-radius: 20px;
      padding: 5px;
      width: 100px; /* Adjust width as needed */
      height: auto; /* Adjust height as needed */
    }
    .node-title {
      font-weight: bold;
      font-size: 12px; /* Adjust font size as needed */
    }
    .custom-node .p-organizationchart-node-content {
      background-color: white;
      border: 1px solid black;
      border-radius: 10px;
      /* Adjust width and padding as needed */
    }
    .organization-chart-container {
      max-width: 100%;
      overflow-y: auto; /* Add vertical scroll */
    }
    p-person {
      background-color: white;
      border: 2px solid black;
      border-radius: 20px;
      width: 150px;
    }
  `;


  const nodeTemplate = (node) => {
    return (
      <div className="node-item">
        <img
          alt={node.label}
          src={node.image}
          className={`h-3 w-3 shadow-md`}
        />
        <div className="node-title">{node.label}</div>
      </div>
    );
  };
 
  if (!familyData) {
    return <div>No family data available.</div>;
  } else {
    return (
      <div className="organization-chart-container">
        <style>{style}</style>
        <OrganizationChart value={familyData} nodeTemplate={nodeTemplate} className="custom-node"/>
      </div>
    );
  }
};

export default FamilyTreeComponent;
