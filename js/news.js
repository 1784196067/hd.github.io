$(function(){
			var i = parseInt(Math.random() * (6-1) + 1);
			src = "url(images/bottom" + i + ".png)"; 
			$("li[id^=middle]").css('background-image', src);

/*
		var callback = function(records) {
    		records.map(function(record) {
        		var img = record.target;
        		var tract = document.getElementById('news_header');
        		var left = img.css('left');
        		tract.css('width', left+200);
        		tract.css('border-bottom', '1px solid gray');
    		});
		};
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if(!!MutationObserver){
            	var obs = new MutationObserver(callback);
            	var obj = document.getElementById('cute');
             	obs.observe(obj, {'attributes': true, 'attributesFilter': ['left']});
            }else{
            	alert("浏览器不支持MutationObserver！");
            }
 */	        
 		var obj = document.getElementById('cute');
		obj.addEventListener('webkitAnimationStart', function(){
 			var tract = $('#news_header');
        	var left = $(this).css('left');
        	tract.css('width', left+200);
        	tract.css('border-bottom', '1px solid pink');
 		})   
 		obj.addEventListener('webkitAnimationIteration', function(){
 			var tract = $('#news_header');
        	tract.css('border-bottom', '1px solid green');
 		})  
 		obj.addEventListener('webkitAnimationEnd', function(){
 			var tract = $('#news_header');
        	tract.css('border-bottom', '1px solid orange');
 		})   
		})
