import { Message } from 'element-ui'
class Util {
   constructor(){
    //    this.message = message;
    //    this.type = type;
   };
    toast(message, type){
        Message.closeAll();
        Message(
            {
                message: message,
                type: type
            }
         )
    }
    setItem(name , value){
        localStorage.setItem(name, value)
    }
    getItem(name){
       return localStorage.getItem(name)
    }
    getObject(name){
       return JSON.parse(sessionStorage[name] || '{}')
    }
    setObject(name, value){
        sessionStorage[name] = JSON.stringify(value)
    }
    delitem(name){
        localStorage.removeItem(name)
    }
}
export default  Util