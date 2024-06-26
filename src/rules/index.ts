import { noInlineFunctionParameterTypeAnnotation } from "./noInlineFunctionParameterTypeAnnotation";
import { noMixedExports } from "./noMixedExports";
import { noUsePrefixForNonHook } from "./noUsePrefixForNonHook";

const rules = {
    "no-inline-function-parameter-type-annotation":
        noInlineFunctionParameterTypeAnnotation,
    "no-mixed-exports": noMixedExports,
    "no-use-prefix-for-non-hook": noUsePrefixForNonHook,
};

export { rules };
