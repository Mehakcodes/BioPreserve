import React, { useEffect } from 'react';
import tableauSoftware from 'tableau-api';
// import { Viz } from 'tableau-api';


const TableauViz = ({ url }) => {
  useEffect(() => {
    const initViz = () => {
      const vizContainer = document.getElementById('tableauViz');
      const options = {
        hideTabs: true,
        width: '100%',
        height: '100%'
      };
      const viz = new tableauSoftware.Viz(vizContainer, url, options);
    };

    initViz();

    return () => {
      // Clean up code if needed
    };
  }, [url]);

  return (
    <div id="tableauViz"></div>
  );
};

export default TableauViz;
