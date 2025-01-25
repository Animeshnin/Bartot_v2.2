import {FC, SVGProps} from "react";

declare module "*.svg" {

    const ReactComponent: FC<SVGProps<SVGProps<string>>>;

    export default ReactComponent;
}

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
