import { BaseTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
