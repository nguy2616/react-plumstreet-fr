
import { cuisineTypeInterface } from "./cuisineTypeInterface";
import { userInterface } from "./userInterface";

export interface companyInterface {
    id: number, 
    name: string, 
    contacts: Array<userInterface>,
    cuisine_types: Array<cuisineTypeInterface>
}
