(function(){
    let style = `<style>
/*change your style here*/
@import url('https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise');
#ts{
    font-family: "Waiting for the Sunrise", cursive;
    text-align: center;
    font-size: 35px;
    color: rgb(0, 255, 255);
    background-color: rgb(84, 84, 84);
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;
}
</style>`;

document.head.insertAdjacentHTML("beforeend", style);
})();


var a = 0 , b
var mess =  ['&#x431;&#x44B;&#x441;&#x442;&#x440;&#x435;&#x435; &#x433;&#x43E;&#x43D;&#x434;&#x43E;&#x43D;', 
'&#x442;&#x44B; &#x441;&#x43B;&#x438;&#x448;&#x43A;&#x43E;&#x43C; &#x43C;&#x435;&#x434;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x439;',
'&#x443; &#x442;&#x435;&#x431;&#x44F; &#x432;&#x441;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x441;&#x44F; ']

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var flag = ++a
    if(flag == 1){
        b = mutation.target.innerText
    }
    else if(b != mutation.target.innerText){
        $('#ts').remove()
        $( "#question" ).before( "<p id='ts'>"+ mess[Math.floor((Math.random()*mess.length))] +"</p>" );
        a = 0
    }
  });
});

mutationObserver.observe(document.getElementsByClassName('line1').item(0), {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
