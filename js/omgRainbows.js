/**
*   Simple module to create a rainbow
*   I actually just implemented Jquery so I didn't have to right the extend support in vanilla
*/
var omgRainbows = (function($jq){

    var colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
        opts = {},
        $rainbowView,
        $rainbowTemp = Handlebars.getTemplate('rainbows');

    function init(options){
        opts = $jq.extend(opts,options);
        $rainbowView = document.querySelector(opts.container);
        flicker();
    }

    function render(tempArr){
       $rainbowView.innerHTML = $rainbowTemp({colors : tempArr});
    }

    function flicker(){
        render(Shuffle(colorList));
        setTimeout(function(){flicker()}, opts.delay)
    }

    /**
    *  Fisher-Yates algorithm
    */
    function Shuffle(o) {
    	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
    };

    return{
        init : init
    }

})(jQuery);