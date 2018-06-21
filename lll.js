function convertToRoman(num) {
  let romanNum = "";
  let romanOne = "I";
  let romanFive = "V";
  let romanTen = "X";
  let romanFifty = "L";
  let romanHund = "C";
  let romanFiveHund = "D";
  let romanThousend = "M";
 
 
    /*from 100 and bigger*/
    if (num >=1000){
          for (let i =1;i <=Math.floor(num/1000);i++){
              romanNum = romanNum + romanThousend;
             } 
         } else if (num ==900){
             romanNum = romanNum + romanHund + romanThousend;}
             else if (num <900 && num >=500){
             romanNum = romanNum + romanFiveHund;}
               else if (num >=100 && num <400){
                   for (let i =1;i <=Math.floor(num/100);i++){
               romanNum = romanNum + romanHund;}
             }
                 else if (num >=400 && num >500){
                     romanNum = romanNum + romanHund + romanFiveHund;}
                 
      
  
 
   /*from 10 to 100*/
 
 
  
 
  return  romanNum ;
 
 
     /*from 10000 to 100000*/
  
  
  
  
  
 
 }
 
 convertToRoman(36);