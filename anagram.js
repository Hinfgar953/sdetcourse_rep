/**
 Validate if 2 wors are anagram
 Anagram:
 word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once
 */

 class anamgram{
    constructor (_word1,_word2){
        this._word1=_word1;
        this._word2=_word2;
    }
    //method to validate if the 2 words received are anagrams or not
    anagramdetector(){
  
    //Separate the characters on the string and create an object with those        
        let _objcharacters1=this._word1.split('');
        let _objcharacters2=this._word2.split('');

    //variable to check the number of characters that exists on the strings    
        let _charExists=0

    //loop to iterate the object created splited by characters    
        for(let i=0;i<=Object.keys(_objcharacters1).length-1;i++){

    //Check if the character on the object iterated exists on the second object and if does sum 1 character to the variable exist  
          if(Object.values(_objcharacters2).includes (Object.values(_objcharacters1)[i])){
            _charExists++
          }
   
        }  
    //if the number of characters that exists on the object and the lenght of both strings is the same is an anagram         
        if(_charExists==Object.keys(_objcharacters1).length ){
            console.log(`${this._word1} and ${this._word2} are anagrams`)
          }
          else
             console.log(`${this._word1} and ${this._word2} are not anagrams`)
         
    }
 }
 //create the instance of the anagram class
 const anag=new anamgram("amor","roa");
 //call the detector method.
 anag.anagramdetector();
 