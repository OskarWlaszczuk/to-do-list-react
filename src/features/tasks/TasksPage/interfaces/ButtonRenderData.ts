import { ReactNode } from "react";

export interface ButtonRenderData {
    clickEventHandler: () => void;
    disabledCondition: boolean;
    content: ReactNode;
}