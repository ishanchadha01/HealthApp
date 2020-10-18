class Patient {
    userID: string;
    password: string;
    name: string;
    email: string;
    number: number;
    ssn: number;
    primaryholder: string;
    provider: string;
    policynumber: number;
    groupnumnber: number;
    appointmentdate: string;
    appointmenttime: number;
    information: string;
    constructor() {
        this.userID = "S22";
        this.password = "Passowrd";
        this.name = "Sam";
        this.email = "sam@yahoo.com";
        this.number = 7708009000;
        this.ssn = 1231233211;
        this.primaryholder = "Care";
        this.provider = "provider";
        this.policynumber = 12345;
        this.groupnumnber = 12345;
        this.appointmentdate = "3/4/14";
        this.appointmenttime = 545;
        this.information = "information";
    }
    
}
export default Patient;