var ChurchHeader={props:["date"],template:'\n\t\t\x3c!-- Church Header --\x3e\n\t\t<div class="w-full p-16 flex flex-col justify-center items-center border-b-4 border-grey-50">\n\t\t\t<div class="header-main-text">Burnet Bible Church</div>\n\t\t\t<div class="header-sub-text">The Lord\'s Day - {{ date }}</div>\n\t\t</div>\n\t'},Opening={props:["reference","text"],template:'\n\t\t\x3c!-- Opening Stuff --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">Announcements</div>\n\t\t\t\t<div class="sub-text text-center">Steve Hopkins | Pastor/Elder</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="main-text text-center">Silent Preparation for Commencement of Service</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="main-text text-center">Opening Prayer</div>\n\t\t\t\t<div class="sub-text text-center">{{ assign() }}</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="main-text text-center">Opening Sentence</div>\n\t\t\t\t<div class="sub-text text-center">{{ reference }} (Steve Hopkins)</div>\n\t\t\t\t<div class="italic text-xs text-center px-12 pt-8">\n\t\t\t\t\t“{{ text }}”\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t'},Hymns={props:["hymns","hymnsList"],template:'\n\t\t\x3c!-- Singing  --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pb-4" v-if="hymns.length > 1">\n\t\t\t\t<div class="main-text text-center">Congregational Singing</div>\n\t\t\t\t<div class="sub-text text-center">{{ assign(true) }}</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Songs --\x3e\n\t\t\t<div class="">\n\t\t\t\t\x3c!-- Song --\x3e\n\t\t\t\t<div class="flex items-center w-full justify-left" :class="{\'pt-4\' : index}" v-for="hymn, index in hymns">\n\t\t\t\t\t<div class="text-5xl pr-4 text-grey-300 hymn">\n\t\t\t\t\t\t<a :href="\'https://www.opc.org/\' + hymnsList[hymn][\'link\']" target="_blank" class="no-underline" >#{{ hymn }}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="flex flex-col">\n\t\t\t\t\t\t<div class="main-text">\n\t\t\t\t\t\t\t<a :href="\'https://www.opc.org/\' + hymnsList[hymn][\'link\']" target="_blank">\n\t\t\t\t\t\t\t\t{{ hymnsList[hymn][\'name\'] }}\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="sub-text" v-if="hymns.length > 1">{{ assign() }} - Scripture</div>\n\t\t\t\t\t\t<div class="sub-text" v-else>{{ assign(true) }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t'},Teaching={props:["scripture","title","assignedTo","kind"],template:'\n\t\t\x3c!-- Teaching  --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center border-t-2 border-grey-50">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">{{ kind }} - {{ scripture }}</div>\n\t\t\t\t<div class="sub-text text-center">{{ assignedTo }}</div>\n\t\t\t\t<div class="italic text-sm text-center px-12 pt-4">\n\t\t\t\t\t“{{ title }}”\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t'},Prayer={props:["prayers"],template:'\n\t\t\x3c!-- Prayer Block --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">Corporate Prayer</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<ul class="p-0">\n\t\t\t\t\t<li v-for="prayer in prayers">\n\t\t\t\t\t\t<span class="text-sm">{{ prayer }}</span><span> - </span><span class="sub-text">{{ assign() }}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="italic text-sm text-center px-12 pt-4 w-3/4 text-grey-500">\n\t\t\t\tCovenanted male heads of households are encouraged to stand and pray for our church, our members, and our families.\n\t\t\t</div>\n\t\t</div>\n\t'},CorporateReading={props:["corporateReading"],template:'\n\t\t\x3c!-- Corporate Reading --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">Corporate Reading</div>\n\t\t\t\t<div class="sub-text text-center">{{ corporateReading }} - {{ assign() }}</div>\n\t\t\t</div>\n\t\t</div>\n\t'},SLBC={props:["slbcChapter","slbcParagraph","slbcData"],template:'\n\t\t\x3c!-- SLBC --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">Second London Baptist Confession of 1689</div>\n\t\t\t\t<div class="sub-text text-center">Chapter {{ slbcChapter }}: {{ slbcData.chapters[slbcChapter].title }} (Paragraph {{ slbcParagraph }}) - {{ assign() }}</div>\n\t\t\t\t<div class="italic text-xs text-center px-12 pt-4">\n\t\t\t\t\t{{ slbcData.chapters[slbcChapter].paragraphs[slbcParagraph].text }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<ul class="p-0">\n\t\t\t\t\t<li v-for="reference in slbcData.chapters[slbcChapter].paragraphs[slbcParagraph].citations">\n\t\t\t\t\t\t<span class="text-sm">{{ reference }}</span><span> - </span><span class="sub-text">{{ assign() }}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="italic text-xs text-center px-12 pt-4">\n\t\t\t\t\tMr. Stubblefield will permit two or three of the men, (covenanted heads of households) to speak an exhortation, instruction, or exposition of the foregoing teaching and Scripture proofs, “...that all may learn, and all may be comforted.” (1 Corinthians 14:31)\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t'},Supper={props:["supper"],template:'\n\t\t\x3c!-- Lord\'s Supper --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">The Lord\'s Supper</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="text-sm text-center">Scripture passage in preparation for the Lord\'s Table and giving of thanks</div>\n\t\t\t\t<div class="sub-text text-center">Don Stubblefield</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="text-sm text-center">“And when He had given thanks, He brake it…”</div>\n\t\t\t\t<div class="sub-text text-center">1 Corinthians 11:24a | Steve Hopkins</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4 w-2/3">\n\t\t\t\t<div class="text-sm text-center text-grey-500 italic">Congregation goes forward row by row to receive the elements and share in the Lord\'s Table.</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4 w-2/3">\n\t\t\t\t<div class="text-sm text-center text-grey-500 italic">Congregation returns and is seated, Mr. Stubblefield leads us to "eat of that bread and drink of that cup" together.</div>\n\t\t\t</div>\n\t\t</div>\n\t'},Closing={props:["closingChorus"],template:'\n\t\t\x3c!-- Closing Stuff --\x3e\n\t\t<div class="w-full p-8 flex flex-col justify-center items-center">\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center">\n\t\t\t\t<div class="main-text text-center">Closing Chorus</div>\n\t\t\t\t<div class="italic text-sm text-center px-12 pt-4 text-grey-500">\n\t\t\t\t\t{{ closingChorus }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-4">\n\t\t\t\t<div class="main-text text-center">Closing Prayer, blessing of fellowship meal</div>\n\t\t\t\t<div class="sub-text text-center">{{ assign() }}</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Item --\x3e\n\t\t\t<div class="flex-col justify-center items-center pt-16">\n\t\t\t\t<div class="main-text text-center">Church is dismissed</div>\n\t\t\t</div>\n\t\t</div>\n\t'},Divider={props:["size"],template:'\n\t\t\x3c!-- Divider --\x3e\n\t\t<div class="divider w-full flex justify-center py-2">\n\t\t\t<div class="border-b-2 border-grey-50" :class="\'w-\' + size"></div>\n\t\t</div>\n\t'},Scripture={props:["scriptureIsLoading","returnedScripture"],template:'\n        \x3c!-- Loading Spinner --\x3e\n        <center v-if="scriptureIsLoading" class="py-8"><div class="loading"></div></center>\n        \x3c!-- Start bible output app --\x3e\n        <div class="py-8" id="bible-output" v-else>\n            <ul v-if="returnedScripture.length" id="bible-list" class="list-reset overflow-hidden">\n                \x3c!-- For each passage --\x3e\n                <li v-for="(request, key) in returnedScripture" class="relative">\n                    \x3c!-- For each book in the request --\x3e\n                    <template v-for="(books, key) in request" v-if="!isNaN(key)">\n                        \x3c!-- For book Name in books --\x3e\n                        <template v-for="(book, bookName) in books">\n                            \x3c!-- For each chapter in the book --\x3e\n                            <template v-for="(chapter, chapterNumber, chapterIndex) in book">\n                                \x3c!-- For each verse in the chapter --\x3e\n                                <template v-for="(verse, verseNumber, verseIndex) in chapter">\n\n                                    \x3c!-- Output the verse --\x3e\n                                    <span \n                                        :verse-name="[ bookName + \' \' + (Number(chapterNumber)+1) + \':\' + verseNumber ]"\n                                        :book="[ bookName ]"\n                                        :chapter="[ (Number(chapterNumber)+1) ]"\n                                        :verse="[ verseNumber ]"\n                                        class="verse selection-green"\n                                        ><em v-if="verseIndex > 0" class="selection-green"\n                                        >{{ verseNumber }} </em\n                                        >{{ verse }}\n                                    </span>\n\n                                </template>\n                            </template>\n                        </template>\n                    </template>\n                </li>\n            </ul>\n        </div>\n\t'},app=new Vue({el:"#app",data:{hymns:window.hymns,showPages:!1,assignmentIncrement:0,musicIncrement:0,currentQuestion:1,scriptureSearch:null,openingSentence:null,openingSentenceText:null,donScripture:null,donTitle:null,corporateReading:null,steveScripture:null,steveTitle:null,scriptureIsLoading:!1,returnedScripture:[],selectedHymns:[],newHymn:null,prayerTopics:[],newPrayer:null,slbcChapter:1,slbcParagraph:1,closingChorus:null,slbc:slbc,nextSunday:moment().day(7).format("MMMM Do, YYYY"),nextSundayShort:moment().day(7).format("M-D-YY"),churchProfile:{men:[{name:"Steve Hopkins",canLeadMusic:!1,elder:!0,image:null,attending:!1},{name:"Don Stubblefield",canLeadMusic:!1,elder:!0,image:null,attending:!1},{name:"Eric Bechler",canLeadMusic:!0,elder:!1,image:null,attending:!1},{name:"Russell Tutor",canLeadMusic:!1,elder:!1,image:null,attending:!1},{name:"Phil Long",canLeadMusic:!0,elder:!1,image:null,attending:!1},{name:"Josh Glasscock",canLeadMusic:!1,elder:!1,image:null,attending:!1},{name:"Keith Howington",canLeadMusic:!1,elder:!1,image:null,attending:!1}],prayers:["Prayer for the sick ","Prayer for local, state and national leaders ","Prayer for revival ","Prayer for persecuted brethren ","Prayer of imprecation "]}},components:{"church-header":ChurchHeader,opening:Opening,hymns:Hymns,teaching:Teaching,divider:Divider,prayer:Prayer,"corporate-reading":CorporateReading,slbc:SLBC,supper:Supper,closing:Closing,scripture:Scripture},watch:{scriptureSearch:function(){this.scriptureSearch?this.scriptureIsLoading=!0:this.scriptureIsLoading=!1,this.getScripture()},currentQuestion:function(){this.returnedScripture=[],2==this.currentQuestion?this.scriptureSearch=this.openingSentence:4==this.currentQuestion?this.scriptureSearch=this.donScripture:5==this.currentQuestion?this.scriptureSearch=this.corporateReading:7==this.currentQuestion?this.scriptureSearch=this.steveScripture:9==this.currentQuestion&&Vue.nextTick(function(){this.saveOnline()})}},methods:{shuffle(t){var e,n,s;for(s=t.length-1;s>0;s--)e=Math.floor(Math.random()*(s+1)),n=t[s],t[s]=t[e],t[e]=n;return t},saveOnline:function(){var t=$("#app").html();blob=new Blob([t],{type:"text/plain"}),anchor=document.createElement("a"),anchor.download=this.nextSundayShort+".html",anchor.href=(window.webkitURL||window.URL).createObjectURL(blob),anchor.dataset.downloadurl=["text/plain",anchor.download,anchor.href].join(":"),anchor.click(),$.ajax({url:"http://neifert.xyz/bbc/today/utilities/save.py",type:"post",data:{filename:this.nextSundayShort,file:$("#app").html()},success:function(t){swal("Saved!","Success!","success"),setTimeout(function(){breakPages()},300)},error:function(){swal("Not Saved!","Unable to save online!","error"),setTimeout(function(){breakPages()},300)}})},getDividerSize:function(t){return"teaching"==this.orderOfWorship.parts[t].type?"full":this.orderOfWorship.parts.length!=t+1?"teaching"==this.orderOfWorship.parts[t+1].type?"full":"2/3":void 0},canShowDivider:function(t){if(this.orderOfWorship.parts.length!=t+1&&"church-header"!=this.orderOfWorship.parts[t].type)return!0},addHymn:function(){if(4==this.selectedHymns.length)return swal("You've already added four hymns!"),!1;!isNaN(this.newHymn)&&Number(this.newHymn)<=730&&Number(this.newHymn)>=1?(this.selectedHymns.push(this.newHymn),this.newHymn=null):swal("Please enter JUST a number between 1 and 730")},addPrayer:function(){this.prayerTopics.push(this.newPrayer),this.newPrayer=null},saveAnswerAndContiunue:function(){if(1==this.currentQuestion){if(this.attendingMen.length<1)return swal("Please select at least one man who's attending."),!1}else if(2==this.currentQuestion){if(this.openingSentence=this.scriptureSearch,this.openingSentenceText=$("#bible-output").text().trim(),this.returnedScripture.length<1)return swal("Please enter a valid scripture passage (or wait for the passage to be fetched)."),!1}else if(3==this.currentQuestion){if(this.selectedHymns.length<4)return swal("Please select four hymns."),!1}else if(4==this.currentQuestion){if(this.churchProfile.men[1].attending&&(this.donScripture=this.scriptureSearch,this.returnedScripture.length<1))return swal("Please enter a valid scripture passage (or wait for the passage to be fetched)."),!1}else if(5==this.currentQuestion){if(this.corporateReading=this.scriptureSearch,this.returnedScripture.length<1)return swal("Please enter a valid scripture passage (or wait for the passage to be fetched)."),!1}else if(7==this.currentQuestion&&(this.steveScripture=this.scriptureSearch,this.returnedScripture.length<1))return swal("Please enter a valid scripture passage (or wait for the passage to be fetched)."),!1;this.scriptureSearch=null,this.currentQuestion+=1},getScripture:_.debounce(function(){var t=this,e=t.scriptureSearch;e?(console.log("Getting: "+e),t.scriptureIsLoading=!0,$.ajax({url:"https://read2018.com/utilities/fetch_verses.py",type:"post",data:{requested_selection:e,version:"kjv",timestamp:Date.now()},success:function(e){t.scriptureIsLoading=!1,t.returnedScripture=e}})):t.returnedScripture=[]},1250)},computed:{attendingMen:function(){var t=[];return $.each(this.churchProfile.men,function(e,n){n.attending&&t.push(n)}),this.shuffle(t)},attendingMusicMen:function(){var t=[];return $.each(this.churchProfile.men,function(e,n){n.attending&&n.canLeadMusic&&t.push(n)}),this.shuffle(t)}}});Vue.prototype.assign=function(t=!1,e=!1){if(t)return app.musicIncrement>=app.attendingMusicMen.length-1?app.musicIncrement=0:app.musicIncrement+=1,app.attendingMusicMen[app.musicIncrement].name;for(;e!=app.attendingMen[app.assignmentIncrement].elder;)app.assignmentIncrement>=app.attendingMen.length-1?app.assignmentIncrement=0:app.assignmentIncrement+=1;var n=app.attendingMen[app.assignmentIncrement].name;return app.assignmentIncrement>=app.attendingMen.length-1?app.assignmentIncrement=0:app.assignmentIncrement+=1,n};