export const font = ({ fs, fw, lh }) => `
  font-size: ${fs ? `${fs}px` : '16px'};
  font-weight: ${fw ? fw : 500};
  line-height: ${lh ? Number(lh / fs).toFixed(1) : 1.5};`;

export const flexCenter = ({ fd, fw, ai, jc }) => `
display: flex;
flex-direction: ${fd ? fd : 'row'};
flex-wrap: ${fw ? fw : 'no-wrap'};
align-items:${ai ? ai : 'center'};
justify-content:${jc ? jc : 'center'};
  `;

export const centerBlock = `
  display: block;
  margin: 0 auto;
`;

export const widthHeight = (w, h) => `
  width: ${w}px;
  height: ${h ? `${h}px` : 'auto'} ;
`;
