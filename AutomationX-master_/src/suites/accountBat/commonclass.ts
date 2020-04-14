export class commonclass {       
             
    public static emailValidate(email: any) { 
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        if(email!=" " && regex.test(email)) {
            console.log("email defined value -->", email);        
        return email;
        }
    }    
    public static Datecheck(createdAt: any){
        const datepattern = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
        const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
        if (datepattern.test(createdAt))
        //createdAt = new Date(createdAt);
        return createdAt;
    }    
}

