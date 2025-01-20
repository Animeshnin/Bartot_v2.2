import {FC, SVGProps} from "react";

declare module "*.svg" {

    const ReactComponent: FC<SVGProps<SVGProps<string>>>;

    export default ReactComponent;
}