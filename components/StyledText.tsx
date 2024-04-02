import { Text, TextProps } from "react-native";

export function ExoLight(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "exoLight" }]} />;
}
export function ExoMedium(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "exoMedium" }]} />;
}

export function ExoBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "exoBold" }]} />;
}
