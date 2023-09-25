//Immediatly invoked function expression

(function chai(){
    console.log("DB Connected")
})();

(function chayos(name){
    console.log(`DB Connected ${name}`)
})("for Chayos");