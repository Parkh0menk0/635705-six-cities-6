import {NameSpace} from "src/store/root-reducer";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
