import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParams } from "../../routes/types";

export type HomeNavigationProps = StackScreenProps<MainStackParams, "Home">;

export type HomeProps = HomeNavigationProps & {};