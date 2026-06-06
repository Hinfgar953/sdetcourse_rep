/**
 * determine if a word/phrase is a palindrome
 Palindrome: any word, phrase, number, or sequence of symbols that reads the same backward as forward. 
 *
 */
//create the class "palindrome" that receives a string
class palindrom{
constructor(word){
this.word=word;
}
//created the method palindromeverification where the process to verify the phare/word is executed
palindromverification(){
//declared the objets: _objword where i converted the phrase to an object and _objauxiliar where i will store the phrase reverted
let _objword=this.word.split('');
let _objauxiliar=[];
//declared an auxiliar variable to store the lenght of the word so i can use that as an index to store the values on the new object with the reversed string
let _lenghtaux=Object.keys(_objword).length;
//iterate on the elements of the object with the string and decrement the auxiliar variale so for example i can say: the first index on my new object will be the last index on the original string
for(let i=0;i<=Object.keys(_objword).length-1;i++)
{
_lenghtaux--;
_objauxiliar[i]=_objword[_lenghtaux];

}
//converted again the object on a string and replaced the spaces (,) etc so is easier to compare "oso" with "oso" instead of o,s,o or so.
let joinedstr=_objauxiliar.join()
let compare =joinedstr.replace(/[\W_]/g, "").toLowerCase();
    
if(compare===this.word.replace(/[\W_]/g, "").toLowerCase()){
    console.log(`${compare} is a palindrome`)
}

}

}
//instiate the class with the object palindrome and called the method palindrome verification
palindromo = new palindrom("amad a la dama");
palindromo.palindromverification();