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

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
