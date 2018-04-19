// Header Component
var ChurchHeader = {
	props: ["date"],
	template: `
		<!-- Church Header -->
		<div class="w-full p-16 flex flex-col justify-center items-center border-b-4 border-grey-50">
			<div class="header-main-text">Burnet Bible Church</div>
			<div class="header-sub-text">The Lord's Day - {{ date }}</div>
		</div>
	`

	// Opening Component
};var Opening = {
	props: ["reference", "text"],
	template: `
		<!-- Opening Stuff -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Announcements</div>
				<div class="sub-text text-center">Steve Hopkins | Pastor/Elder</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Silent Preparation for Commencement of Service</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Opening Prayer</div>
				<div class="sub-text text-center">{{ assign() }}</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Opening Sentence</div>
				<div class="sub-text text-center">{{ reference }} (Steve Hopkins)</div>
				<div class="italic text-xs text-center px-12 pt-8">
					“{{ text }}”
				</div>
			</div>
		</div>
	`
};

// Hymns Component
var Hymns = {
	props: ["hymns", "hymnsList"],
	template: `
		<!-- Singing  -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center pb-4" v-if="hymns.length > 1">
				<div class="main-text text-center">Congregational Singing</div>
				<div class="sub-text text-center">{{ assign(true) }}</div>
			</div>
			<!-- Songs -->
			<div class="">
				<!-- Song -->
				<div class="flex items-center w-full justify-left" :class="{'pt-4' : index}" v-for="hymn, index in hymns">
					<div class="text-5xl pr-4 text-grey-300 hymn">
						<a :href="'https://www.opc.org/' + hymnsList[hymn]['link']" target="_blank" class="no-underline" >#{{ hymn }}</a>
					</div>
					<div class="flex flex-col">
						<div class="main-text">
							<a :href="'https://www.opc.org/' + hymnsList[hymn]['link']" target="_blank">
								{{ hymnsList[hymn]['name'] }}
							</a>
						</div>
						<div class="sub-text" v-if="hymns.length > 1">{{ assign() }} - Scripture</div>
						<div class="sub-text" v-else>{{ assign(true) }}</div>
					</div>
				</div>
			</div>
		</div>
	`
};

// Teaching Component
var Teaching = {
	props: ["scripture", "title", "assignedTo", "kind"],
	template: `
		<!-- Teaching  -->
		<div class="w-full p-8 flex flex-col justify-center items-center border-t-2 border-grey-50">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">{{ kind }} - {{ scripture }}</div>
				<div class="sub-text text-center">{{ assignedTo }}</div>
				<div class="italic text-sm text-center px-12 pt-4">
					“{{ title }}”
				</div>
			</div>
		</div>
	`
};

// Prayer Component
var Prayer = {
	props: ["prayers"],
	template: `
		<!-- Prayer Block -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Corporate Prayer</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<ul class="p-0">
					<li v-for="prayer in prayers">
						<span class="text-sm">{{ prayer }}</span><span> - </span><span class="sub-text">{{ assign() }}</span>
					</li>
				</ul>
			</div>
			<div class="italic text-sm text-center px-12 pt-4 w-3/4 text-grey-500">
				Covenanted male heads of households are encouraged to stand and pray for our church, our members, and our families.
			</div>
		</div>
	`
};

// Corporate Reading
var CorporateReading = {
	props: ["corporateReading"],
	template: `
		<!-- Corporate Reading -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Corporate Reading</div>
				<div class="sub-text text-center">{{ corporateReading }} - {{ assign() }}</div>
			</div>
		</div>
	`
};

// SLBC Component
var SLBC = {
	props: ["slbcChapter", "slbcParagraph", "slbcData"],
	template: `
		<!-- SLBC -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Second London Baptist Confession of 1689</div>
				<div class="sub-text text-center">Chapter {{ slbcChapter }}: {{ slbcData.chapters[slbcChapter].title }} (Paragraph {{ slbcParagraph }}) - {{ assign() }}</div>
				<div class="italic text-xs text-center px-12 pt-4">
					{{ slbcData.chapters[slbcChapter].paragraphs[slbcParagraph].text }}
				</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<ul class="p-0">
					<li v-for="reference in slbcData.chapters[slbcChapter].paragraphs[slbcParagraph].citations">
						<span class="text-sm">{{ reference }}</span><span> - </span><span class="sub-text">{{ assign() }}</span>
					</li>
				</ul>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="italic text-xs text-center px-12 pt-4">
					Mr. Stubblefield will permit two or three of the men, (covenanted heads of households) to speak an exhortation, instruction, or exposition of the foregoing teaching and Scripture proofs, “...that all may learn, and all may be comforted.” (1 Corinthians 14:31)
				</div>
			</div>
		</div>
	`
};

// Lord's Supper Component
var Supper = {
	props: ["supper"],
	template: `
		<!-- Lord's Supper -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">The Lord's Supper</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="text-sm text-center">Scripture passage in preparation for the Lord's Table and giving of thanks</div>
				<div class="sub-text text-center">Don Stubblefield</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="text-sm text-center">“And when He had given thanks, He brake it…”</div>
				<div class="sub-text text-center">1 Corinthians 11:24a | Steve Hopkins</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4 w-2/3">
				<div class="text-sm text-center text-grey-500 italic">Congregation goes forward row by row to receive the elements and share in the Lord's Table.</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4 w-2/3">
				<div class="text-sm text-center text-grey-500 italic">Congregation returns and is seated, Mr. Stubblefield leads us to "eat of that bread and drink of that cup" together.</div>
			</div>
		</div>
	`
};

// Closing
var Closing = {
	props: ["closingChorus"],
	template: `
		<!-- Closing Stuff -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Closing Chorus</div>
				<div class="italic text-sm text-center px-12 pt-4 text-grey-500">
					{{ closingChorus }}
				</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Closing Prayer, blessing of fellowship meal</div>
				<div class="sub-text text-center">{{ assign() }}</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-16">
				<div class="main-text text-center">Church is dismissed</div>
			</div>
		</div>
	`
};

// Divider
var Divider = {
	props: ["size"],
	template: `
		<!-- Divider -->
		<div class="divider w-full flex justify-center py-2">
			<div class="border-b-2 border-grey-50" :class="'w-' + size"></div>
		</div>
	`
};

// Scripture
var Scripture = {
	props: ["scriptureIsLoading", "returnedScripture"],
	template: `
        <!-- Loading Spinner -->
        <center v-if="scriptureIsLoading" class="py-8"><div class="loading"></div></center>
        <!-- Start bible output app -->
        <div class="py-8" id="bible-output" v-else>
            <ul v-if="returnedScripture.length" id="bible-list" class="list-reset overflow-hidden">
                <!-- For each passage -->
                <li v-for="(request, key) in returnedScripture" class="relative">
                    <!-- For each book in the request -->
                    <template v-for="(books, key) in request" v-if="!isNaN(key)">
                        <!-- For book Name in books -->
                        <template v-for="(book, bookName) in books">
                            <!-- For each chapter in the book -->
                            <template v-for="(chapter, chapterNumber, chapterIndex) in book">
                                <!-- For each verse in the chapter -->
                                <template v-for="(verse, verseNumber, verseIndex) in chapter">

                                    <!-- Output the verse -->
                                    <span 
                                        :verse-name="[ bookName + ' ' + (Number(chapterNumber)+1) + ':' + verseNumber ]"
                                        :book="[ bookName ]"
                                        :chapter="[ (Number(chapterNumber)+1) ]"
                                        :verse="[ verseNumber ]"
                                        class="verse selection-green"
                                        ><em v-if="verseIndex > 0" class="selection-green"
                                        >{{ verseNumber }} </em
                                        >{{ verse }}
                                    </span>

                                </template>
                            </template>
                        </template>
                    </template>
                </li>
            </ul>
        </div>
	`
};

// Init Vue
var app = new Vue({
	el: "#app",
	data: {
		hymns: window.hymns,
		showPages: false,
		assignmentIncrement: 0,
		musicIncrement: 0,
		currentQuestion: 1,
		scriptureSearch: null,
		openingSentence: null,
		openingSentenceText: null,
		donScripture: null,
		donTitle: null,
		corporateReading: null,
		steveScripture: null,
		steveTitle: null,
		scriptureIsLoading: false,
		returnedScripture: [],
		selectedHymns: [],
		newHymn: null,
		prayerTopics: [],
		newPrayer: null,
		slbcChapter: 1,
		slbcParagraph: 1,
		closingChorus: null,
		slbc: slbc,
		nextSunday: moment().day(7).format("MMMM Do, YYYY"),
		churchProfile: {
			"men": [{
				"name": "Steve Hopkins",
				"canLeadMusic": false,
				"elder": true,
				"image": null,
				'attending': false
			}, {
				"name": "Don Stubblefield",
				"canLeadMusic": false,
				"elder": true,
				"image": null,
				'attending': false
			}, {
				"name": "Eric Bechler",
				"canLeadMusic": true,
				"elder": false,
				"image": null,
				'attending': false
			}, {
				"name": "Phil Long",
				"canLeadMusic": true,
				"elder": false,
				"image": null,
				'attending': false
			}, {
				"name": "Josh Glasscock",
				"canLeadMusic": false,
				"elder": false,
				"image": null,
				'attending': false
			}, {
				"name": "Keith Howington",
				"canLeadMusic": false,
				"elder": false,
				"image": null,
				'attending': false
			}],
			"prayers": ["Prayer for the sick ", "Prayer for local, state and national leaders ", "Prayer for revival ", "Prayer for persecuted brethren ", "Prayer of imprecation "]
		}
	},
	components: {
		'church-header': ChurchHeader,
		opening: Opening,
		hymns: Hymns,
		teaching: Teaching,
		divider: Divider,
		prayer: Prayer,
		'corporate-reading': CorporateReading,
		slbc: SLBC,
		supper: Supper,
		closing: Closing,
		scripture: Scripture
	},
	watch: {
		// whenever question changes, this function will run
		scriptureSearch: function () {
			if (this.scriptureSearch) {
				this.scriptureIsLoading = true;
			} else {
				this.scriptureIsLoading = false;
			}
			this.getScripture();
		},
		currentQuestion: function () {
			Vue.nextTick(function () {
				breakPages();
			});
		},
		currentQuestion: function () {
			// Here we're going to redefine the scripture search based on what question is selected...
			this.returnedScripture = [];

			// If it's the second question, opening sentence
			if (this.currentQuestion == 2) {
				this.scriptureSearch = this.openingSentence;
				// If it's the 4th question, it's Don's Scripture
			} else if (this.currentQuestion == 4) {
				this.scriptureSearch = this.donScripture;
				// If it's the 6th question, it's Corporate Reading
			} else if (this.currentQuestion == 5) {
				this.scriptureSearch = this.corporateReading;
				// If it's the 8th question, it's Steve's Scripture
			} else if (this.currentQuestion == 7) {
				this.scriptureSearch = this.steveScripture;
			} else if (this.currentQuestion == 9) {
				Vue.nextTick(function () {
					setTimeout(function () {
						breakPages();
					}, 300);
				});
			}
		}
	},
	methods: {
		shuffle(a) {
			var j, x, i;
			for (i = a.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = a[i];
				a[i] = a[j];
				a[j] = x;
			}
			return a;
		},
		getDividerSize: function (index) {
			if (this.orderOfWorship.parts[index].type == 'teaching') {
				return 'full';
			} else {
				if (this.orderOfWorship.parts.length != index + 1) {
					if (this.orderOfWorship.parts[index + 1].type == 'teaching') {
						return 'full';
					} else {
						return '2/3';
					}
				}
			}
		},
		canShowDivider: function (index) {
			if (this.orderOfWorship.parts.length != index + 1 && this.orderOfWorship.parts[index].type != 'church-header') {
				return true;
			}
		},
		addHymn: function () {
			if (this.selectedHymns.length == 4) {
				swal("You've already added four hymns!");
				return false;
			}
			if (!isNaN(this.newHymn) && Number(this.newHymn) <= 730 && Number(this.newHymn) >= 1) {
				this.selectedHymns.push(this.newHymn);
				this.newHymn = null;
			} else {
				swal("Please enter JUST a number between 1 and 730");
			}
		},
		addPrayer: function () {
			this.prayerTopics.push(this.newPrayer);
			this.newPrayer = null;
		},
		// Here we kind of do some validation...
		saveAnswerAndContiunue: function () {

			// If it's the first question, it's asking who's attending
			if (this.currentQuestion == 1) {
				// If nobody is attending...
				if (this.attendingMen.length < 1) {
					swal("Please select at least one man who's attending.");
					return false;
				}
				// If it's the second question, opening sentence
			} else if (this.currentQuestion == 2) {
				this.openingSentence = this.scriptureSearch;
				this.openingSentenceText = $("#bible-output").text().trim();
				if (this.returnedScripture.length < 1) {
					swal("Please enter a valid scripture passage (or wait for the passage to be fetched).");
					return false;
				}
				// If it's the third question, hymns
			} else if (this.currentQuestion == 3) {
				// If less than four hymns are selected...
				if (this.selectedHymns.length < 4) {
					swal("Please select four hymns.");
					return false;
				}
				// If it's the 4th question, it's Don's Scripture
			} else if (this.currentQuestion == 4) {
				// If Don is actually coming...
				if (this.churchProfile.men[1].attending) {
					this.donScripture = this.scriptureSearch;
					// this.donScriptureText = $("#bible-output").text().trim()
					if (this.returnedScripture.length < 1) {
						swal("Please enter a valid scripture passage (or wait for the passage to be fetched).");
						return false;
					}
				}
				// If it's the 6th question, it's Corporate Reading
			} else if (this.currentQuestion == 5) {
				this.corporateReading = this.scriptureSearch;
				if (this.returnedScripture.length < 1) {
					swal("Please enter a valid scripture passage (or wait for the passage to be fetched).");
					return false;
				}
				// If it's the 8th question, it's Steve's Scripture
			} else if (this.currentQuestion == 7) {
				this.steveScripture = this.scriptureSearch;
				// this.steveScriptureText = $("#bible-output").text().trim()
				if (this.returnedScripture.length < 1) {
					swal("Please enter a valid scripture passage (or wait for the passage to be fetched).");
					return false;
				}
			}

			this.scriptureSearch = null;
			this.currentQuestion += 1;
		},
		getScripture: _.debounce(function () {
			// Define the vue object
			var vm = this;
			var ref = vm.scriptureSearch;
			// If there's actually a search...
			if (ref) {

				console.log("Getting: " + ref);
				// Make the loader appear
				vm.scriptureIsLoading = true;
				// Query the script for the verse
				$.ajax({
					url: "https://read2018.com/utilities/fetch_verses.py",
					type: "post",
					data: {
						"requested_selection": ref,
						"version": "kjv",
						"timestamp": Date.now()
					},
					success: function (response) {
						// Hide the loader
						vm.scriptureIsLoading = false;
						// Only update if it's the latest request
						// Update Vue
						vm.returnedScripture = response;
					}
				});
				// If there was no search...
			} else {
				vm.returnedScripture = [];
			}
		},
		// This is the number of milliseconds we wait for the
		// user to stop typing.
		1250)
	},
	computed: {
		attendingMen: function () {
			var attendingMen = [];
			$.each(this.churchProfile.men, function (key, man) {
				if (man.attending) {
					attendingMen.push(man);
				}
			});
			return this.shuffle(attendingMen);
		},
		attendingMusicMen: function () {
			var attendingMusicMen = [];
			$.each(this.churchProfile.men, function (key, man) {
				if (man.attending && man.canLeadMusic) {
					attendingMusicMen.push(man);
				}
			});
			return this.shuffle(attendingMusicMen);
		}
	}
});

// Make this a global function
Vue.prototype.assign = function (music = false) {

	if (music) {
		if (app.musicIncrement >= app.attendingMusicMen.length - 1) {
			app.musicIncrement = 0;
		} else {
			app.musicIncrement += 1;
		}
		return app.attendingMusicMen[app.musicIncrement]['name'];
	} else {

		if (app.assignmentIncrement >= app.attendingMen.length - 1) {
			app.assignmentIncrement = 0;
		} else {
			app.assignmentIncrement += 1;
		}
		return app.attendingMen[app.assignmentIncrement]['name'];
	}
};