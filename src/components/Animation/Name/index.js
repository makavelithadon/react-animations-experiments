import CommonStyledCharacterName from "./styles";

export const styles = CommonStyledCharacterName;

export default function Name({ name: [first, ...rest] }) {
  return `${first.toUpperCase()}${rest.join("")}`;
}
