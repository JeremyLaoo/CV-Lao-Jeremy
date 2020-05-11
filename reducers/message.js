export default function(text = '', action) {
  
    if(action.type == 'saveMsg') {
      console.log(action.text)
      console.log('PAR ICI text :>> ', action.text);
      return action.text;
    } else {
      return text;
    }
    
  }