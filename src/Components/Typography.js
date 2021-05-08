import styled, { css } from "styled-components";

const Typography = ({ variant, children, className }) => {
  const variants = {
    h1: <h1 className={className}>{children}</h1>,
    h2: <h2 className={className}>{children}</h2>,
    h3: <h3 className={className}>{children}</h3>,
    h4: <h4 className={className}>{children}</h4>,
    h5: <h5 className={className}>{children}</h5>,
    h6: <h6 className={className}>{children}</h6>,
    body: <p className={className}>{children}</p>,
    small: <p className={className}>{children}</p>,
  };

  return variants[variant];
};

const variantToFontSize = (variant) => {
  const variants = ["small", "body", "h6", "h5", "h4", "h3", "h2", "h1"];
  const index = variants.indexOf(variant);

  if (index === -1) throw new Error("wrong variant");
  return `${1 + (index - 1) * 0.3}rem`;
};

const StyledTypography = styled(Typography)`
  font-size: ${({ variant, fontSize, paragraph }) =>
    fontSize ? fontSize : variantToFontSize(variant)};
  ${({ paragraph, variant }) =>
    !!paragraph && "margin-bottom:" + variantToFontSize(variant)}
`;

export default StyledTypography;
