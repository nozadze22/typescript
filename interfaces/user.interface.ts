export interface User {
    
        _id: string,
        firstName: string,
        lastName: string,
        age: number,
        email: string,
        address: string,
        role : string,
        zipcode: string,
        avatar: string,
        gender: string,
        phone: string,
        verified: boolean,
};

export interface USerRegister extends  Omit<User,"_id" | "role" | "verified"> {
    password: string,
    
}