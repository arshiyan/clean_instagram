function sender()
{
    _index=1;
    //_sec = 18000000;
    _sec = 10000;
    setInterval(function () {
    _index++;
    if(_index <= 200) //200 posts
	{
    	     setTimeout(function () { 
    	       			document.querySelector("#react-root > section > main > div > div._2z6nI > article > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > a").click();
 							setTimeout(function () {  
						 document.querySelector("#react-root > section > main > div > div > article > div.MEAGs > button").click(); 
							 setTimeout(function () { 
							 
							 document.querySelector("body > div.RnEpo.Yx5HN > div > div > div > div > button.aOOlW.-Cab_").click(); 
							 setTimeout(function () { document.querySelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_').click(); }, 1000)  
							 
							 }, 2000)         //  selector to click delete option
       						 
							 }, 2000) ;
    	        }, 1000)   
	}
    
    }, _sec)
}

sender();
