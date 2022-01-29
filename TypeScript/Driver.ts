import { Account } from "./Account";

export class Driver extends Account {
    constructor( 
        name: String, 
        document: String,
        email: String,
        password: String) {
        super(name, document, email, password );
    }
}