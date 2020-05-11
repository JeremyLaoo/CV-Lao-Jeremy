export default function(mail = '', action) {
  
    if(action.type == 'saveMail') {
      console.log(action.mail)
      console.log('PAR ICI EMAIL :>> ', action.mail);
      return action.mail;
    } else {
      return mail;
    }
    
  }