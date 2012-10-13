/*
 * iconify (for jQuery)
 * version: 1.0 beta (05/09/2012 1:33:48 AM)
 * @requires jQuery v1.2 or later
 *
 * Copyright (c) Moin Uddin (@moinism) moin@ogify.com
 *
 * More at http://moinism.github.com/iconify
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Icons used in the plugin are provided by fatcow and are released under creative commons license.
 *
 * http://fatcow.com/free-icons
 *
 * Usage:
 *
 * Simply initiate it with any element
 * 
 * $("a").iconify();
 *
 * Want it with many elements?
 *
 * $("a,b,span").iconify();
 *
 * But <b> and <span> can't have href attribute!
 * Then, Pass it the attribute :)
 * 
 * $("a,b,span").iconify({ atr : 'src' });	I know you won't put an SRC in <a> or <span>
 *
 * You may,
 *
 * $("a,b,span").iconify({ atr : 'data-whatever' });  and remember it's ATR not ATTR
 *
 */

;(function($, window, undefined){ // To prevent any other plugin from tempering with us.

	$.fn.iconify = function(options) {
		
		var opts = {
			atr : null , // Optional, default to href. This is the attribute of the element to look for.
			dir : 'iconify-assets/' , // Optional, The path of theme and images directory. Do not forget the trailing slash /.
			theme : 'default' // Optional, You may pass any other theme name if you have.
		};
		
		if(options) {
			$.extend(opts, options);
		};
		
		var attrib = opts.atr || 'href'; // If no attribute is passed, we'll play with href.
		
		function title(t,k) { //To set the title of element
			var title = t.attr('title');
			if(title.length > 0) title = title+" | "+k+" file";
			else title = k+" file";
			
			return title;
		}
		
		var ext = []; // Defining the list we want to send our search mission :) ( check the attributes ) for.
		//You may add yours but then you have to add their classes in themes too.
		ext['zip'] = ['zip','rar','gzip','iso','tar','cab','jar','7zip'];
		ext['image'] = ['png','jpg','gif','jpeg','bmp'];
		ext['doc'] = ['doc','docs','docx','ppt','pptx','xls','pdf','txt','rtf','csv'];
		ext['exe'] = ['exe','msi'];
		ext['torrent'] = ['torrent'];
		ext['media'] = ['mp3','mp4','avi','3gp','amr'];
		ext['script'] = ['js','css','class','java'];
		ext['system'] = ['sys','bak','ini','bat','bat','cmd','com','ibt','isx','iss','bin','log','dat'];
		
		
		$("body").append('<link rel="stylesheet" href="'+opts.dir+opts.theme+'.css" type="text/css" media="screen" />');
		
		
		return this.each(function(){
		
		var t = this; // Ummm... call it my lazzines in coding ;)
			
			
			if($(t).attr(attrib) != undefined) // In case you pass it a wrong attribute
			{
				for(klass in ext) { // Let the show begin....
					if($(t).attr(attrib).match(RegExp('\.(' + ext[klass].join('|') + ')$', 'i'))) {
						$(t).addClass('iconify-'+klass).attr('data-iconify','true').attr('title',title($(t),klass));
						
					}
				}
			} 

		});

	};

})(jQuery, window);