import { atom } from "recoil";
import { WINDOW_OBJ } from "../constants";

export const windowObj = atom({
    key: "windowObj",
    default: WINDOW_OBJ,
});