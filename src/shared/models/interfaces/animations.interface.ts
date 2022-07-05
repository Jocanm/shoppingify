import { AnimationControls, TargetAndTransition, VariantLabels } from "framer-motion";

type CustomAnimate = boolean | VariantLabels | AnimationControls | TargetAndTransition | undefined

export interface IAnimation {
    [key: string]: CustomAnimate;
}