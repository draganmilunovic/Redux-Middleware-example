

const initialState = {
	number:10
}

const reducer = (state=initialState,action) =>{
      
      let currentNumber = {...state};
      
      switch(action.type){
         case "INC_NUM":
           currentNumber.number += action.value;
         break;  
         case "DEC_NUM":
           currentNumber.number -= action.value;
         break;

         default:currentNumber.number = initialState.number;
      }

     return currentNumber;

}

export default reducer;