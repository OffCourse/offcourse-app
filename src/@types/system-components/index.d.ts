declare module "system-components" {
  import { FunctionComponent } from "react";
  export default function system(
    systemProps: {},
    second?: string | ((props: any) => {}),
    ...args: string[]
  ): FunctionComponent;
}
