import { StyledText } from "./Text.styled.ts";
import { TextProps } from "./Text.interface";

export function Text({
  as,
  underline,
  weight,
  lineHeight,
  size,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingRight,
  paddingTop,
  paddingLeft,
  paddingBottom,
  padding,
  margin,
  lg,
  children,
  color = "primary",
  transform,
  htmlFor,
  id,
}: TextProps) {
  return (
    <StyledText
      id={id}
      htmlFor={htmlFor}
      as={as}
      color={color}
      underline={underline}
      weight={weight}
      lineHeight={lineHeight}
      size={size}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingBottom={paddingBottom}
      padding={padding}
      margin={margin}
      transform={transform}
      lg={lg}
    >
      {children}
    </StyledText>
  );
}
