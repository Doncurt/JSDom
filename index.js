/*using js and a button to append information to a page using inner html could use this to do an api call and append to page */

/*grab the button id by selecting getelemtn*/
var button = document.getElementById('click');

/*sample arrap of 3 items to be posited*/
let clicked_array=['one','two','three']
/*define an anaymous function to handle :*/ 
const click = ()=>{
  for (num in clicked_array){
    /*append element to the div by setting the information iside of it's tags to be <p> num</p> */
    document.getElementById("new").innerHTML+='<p>'+num+'</p>'
  }
}


button.onclick=()=>{
  /*when the button is clicked run the click functions to append to the page*/
  click();
  
}