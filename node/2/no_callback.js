
function start(a,b){
  //console.log('a is '+typeof a);
  //console.log('b is '+typeof b);
 
 console.log('in start =='+a);
  
  function longFn(){
     a++;
    //b(a);
  }
    console.log(a);  
  setTimeout(longFn,1000);

}


function middle(a){
  a++;
 console.log('in middle =='+a);
}

function caller(a){
 start(a);//,middle) ;
   a++;
  middle(a);
return 'completed';
}

caller(3);
