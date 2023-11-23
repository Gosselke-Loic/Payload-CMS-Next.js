import * as Globals from "../globalsModels/index";

type Data = Globals.GlobalHomepage | Globals.GlobalLogin | Globals.GlobalRegister;
type Error = string;

export type GlobalApiResponse = Data | Error;