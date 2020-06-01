const breakPoints = {
  sm: 320,
  md: 1200,
  lg: 1800,
};

const getMediaQuery = ({ size, body }) => `@media screen and (min-width: ${size}px) { ${body} }`;

export const smSize = body => getMediaQuery({ size: breakPoints.sm, body });

export const mdSize = body => getMediaQuery({ size: breakPoints.md, body });

export const lgSize = body => getMediaQuery({ size: breakPoints.lg, body });

export default {
  smSize,
  mdSize,
  lgSize,
};
