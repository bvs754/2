

importScripts('sw-toolbox.js');

toolbox.precache([
	"/index.html",       
       "/js/vue.min.js",       
       "/katex/katex.min.js",
       "/katex/katex.min.css",
       "/katex/auto-render.min.js",       
       "/katex/fonts/KaTeX_AMS-Regular.woff",
       "/katex/fonts/KaTeX_Caligraphic-Bold.woff",
       "/katex/fonts/KaTeX_Caligraphic-Regular.woff",
       "/katex/fonts/KaTeX_Fraktur-Bold.woff",
       "/katex/fonts/KaTeX_Fraktur-Regular.woff",
       "/katex/fonts/KaTeX_Main-Bold.woff",
       "/katex/fonts/KaTeX_Main-BoldItalic.woff",
       "/katex/fonts/KaTeX_Main-Italic.woff",
       "/katex/fonts/KaTeX_Main-Regular.woff",
       "/katex/fonts/KaTeX_Math-BoldItalic.woff",
       "/katex/fonts/KaTeX_Math-Italic.woff",
       "/katex/fonts/KaTeX_SansSerif-Bold.woff",
       "/katex/fonts/KaTeX_SansSerif-Italic.woff",
       "/katex/fonts/KaTeX_SansSerif-Regular.woff",
       "/katex/fonts/KaTeX_Script-Regular.woff",
       "/katex/fonts/KaTeX_Size1-Regular.woff",
       "/katex/fonts/KaTeX_Size2-Regular.woff",
       "/katex/fonts/KaTeX_Size3-Regular.woff",
       "/katex/fonts/KaTeX_Size4-Regular.woff",
       "/katex/fonts/KaTeX_Typewriter-Regular.woff",
       "/katex/fonts/KaTeX_AMS-Regular.woff2",
	   "/katex/fonts/KaTeX_Caligraphic-Bold.woff2",
	   "/katex/fonts/KaTeX_Caligraphic-Regular.woff2",
	   "/katex/fonts/KaTeX_Fraktur-Bold.woff2",
	   "/katex/fonts/KaTeX_Fraktur-Regular.woff2",
	   "/katex/fonts/KaTeX_Main-Bold.woff2",
	   "/katex/fonts/KaTeX_Main-BoldItalic.woff2",
	   "/katex/fonts/KaTeX_Main-Italic.woff2",
	   "/katex/fonts/KaTeX_Main-Regular.woff2",
	   "/katex/fonts/KaTeX_Math-BoldItalic.woff2",
	   "/katex/fonts/KaTeX_Math-Italic.woff2",
	   "/katex/fonts/KaTeX_SansSerif-Bold.woff2",
	   "/katex/fonts/KaTeX_SansSerif-Italic.woff2",
	   "/katex/fonts/KaTeX_SansSerif-Regular.woff2",
	   "/katex/fonts/KaTeX_Script-Regular.woff2",
	   "/katex/fonts/KaTeX_Size1-Regular.woff2",
	   "/katex/fonts/KaTeX_Size2-Regular.woff2",
	   "/katex/fonts/KaTeX_Size3-Regular.woff2",
	   "/katex/fonts/KaTeX_Size4-Regular.woff2",
	   "/katex/fonts/KaTeX_Typewriter-Regular.woff2",
       "/katex/fonts/KaTeX_AMS-Regular.ttf",
       "/katex/fonts/KaTeX_Caligraphic-Bold.ttf",
       "/katex/fonts/KaTeX_Caligraphic-Regular.ttf",
       "/katex/fonts/KaTeX_Fraktur-Bold.ttf",
       "/katex/fonts/KaTeX_Fraktur-Regular.ttf",
       "/katex/fonts/KaTeX_Main-Bold.ttf",
       "/katex/fonts/KaTeX_Main-BoldItalic.ttf",
       "/katex/fonts/KaTeX_Main-Italic.ttf",
       "/katex/fonts/KaTeX_Main-Regular.ttf",
       "/katex/fonts/KaTeX_Math-BoldItalic.ttf",
       "/katex/fonts/KaTeX_Math-Italic.ttf",
       "/katex/fonts/KaTeX_SansSerif-Bold.ttf",
       "/katex/fonts/KaTeX_SansSerif-Italic.ttf",
       "/katex/fonts/KaTeX_SansSerif-Regular.ttf",
       "/katex/fonts/KaTeX_Script-Regular.ttf",
       "/katex/fonts/KaTeX_Size1-Regular.ttf",
       "/katex/fonts/KaTeX_Size2-Regular.ttf",
       "/katex/fonts/KaTeX_Size3-Regular.ttf",
       "/katex/fonts/KaTeX_Size4-Regular.ttf",
       "/katex/fonts/KaTeX_Typewriter-Regular.ttf",
       "/css/style2.css",
       "/js/jquery-1.12.4.min.js"
       ]);



toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 10
});
