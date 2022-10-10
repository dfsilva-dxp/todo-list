import "styled-components";
import { dark } from "styles/theme";

type ThemeType = typeof dark;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
