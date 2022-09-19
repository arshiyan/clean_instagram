function sender()
{
    _index=1;
    //_sec = 18000000;
    _sec = (Math.floor(Math.random() * 10000) + 30000);
    setInterval(function () {
    _index++;
    if(_index <= 200) //200 posts
	{
    	     setTimeout(function () { 
    	     
    	       			document.querySelector("a._aa-z:nth-child(2)").click(); // redirect to feed
 							setTimeout(function () {  
						                document.querySelector("article._aatb:nth-child("+ (Math.floor(Math.random() * 9) + 1) +") > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)").click(); //select and click on ... of post 
							                            setTimeout(function () { 
							                                                         document.querySelector("button._a9--:nth-child(1)").click(); //choose delete
							                                        setTimeout(function () { 
							                                                          document.querySelector("button._a9--:nth-child(1)").click(); }, 1000)  //and then delete
							 
							 }, 2000)         //  selector to click delete option
       						 
							 }, 2000) ;
    	        }, 1000)   
	}
    
    }, _sec)
}

sender();
