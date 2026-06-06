//declared the class: user with the private fields role and full name
class User{
#role;
#fullname;
//on the constructor i assgined the values to the fields, included the private ones with the info that comes from the instance
constructor(email,role,name,password){
    this.Email=email
    this.#fullname=name
    this.#role=role
    this.Password=password
}
//login method where i compare the info on the instance with the constructor and display a message if is correct or not 
login(email,password){
    if(email==this.Email&&password==this.Password){
        console.log(`usuario existe bienvenido: ${this.#fullname}`)
    }
    else{
        console.log("usuario incorrecto, intenta de nuevo")
    }
}
//created a method to return the private fields of the user if needed to be called on an instance
get role(){
    return this.#role
}
get fullname(){
    return this.#fullname
}
}
// 2 instance of the class with the data neeeded on the constructor
const usuario=new User("hig124@gmail.com","admin","humberto","password");
const usuario2=new User("user2@gmail.com","tester","gilberto","password");
//example to use the get method
//console.log(usuario.role+" "+usuario.fullname)
//login method used by the instance:
usuario2.login("user2@gmail.com","password")
