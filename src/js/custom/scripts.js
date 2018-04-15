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
}

// Opening Component
var Opening = {
	props: ["opening"],
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
				<div class="main-text text-center">Moment of Silence in Preparation for the Service</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Opening Prayer</div>
				<div class="sub-text text-center">{{ opening.prayer }}</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Opening Sentence</div>
				<div class="sub-text text-center">{{ opening.sentence.scripture.reference }} ({{ opening.sentence.assignedTo }})</div>
				<div class="italic text-xs text-center px-12 pt-8">
					“{{ opening.sentence.scripture.text }}”
				</div>
			</div>
		</div>
	`
};

// Hymns Component
var Hymns = {
	props: ["hymns", "hymnsList", "assignedTo"],
	template: `
		<!-- Singing  -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center" v-if="hymns[0].assignedTo != null">
				<div class="main-text text-center">Congregational Singing</div>
				<div class="sub-text text-center">{{ assignedTo }}</div>
			</div>
			<!-- Songs -->
			<div class="">
				<!-- Song -->
				<div class="flex items-center w-full justify-left pt-4" v-for="hymn in hymns">
					<div class="text-5xl pr-4 text-grey-300 hymn">
						<a :href="'https://www.opc.org/' + hymnsList[hymn.number]['link']" target="_blank" class="no-underline" >#{{ hymn.number }}</a>
					</div>
					<div class="flex flex-col">
						<div class="main-text">
							<a :href="'https://www.opc.org/' + hymnsList[hymn.number]['link']" target="_blank">
								{{ hymnsList[hymn.number]['name'] }}
							</a>
						</div>
						<div class="sub-text" v-if="hymns[0].assignedTo != null">{{ hymn.assignedTo }} - Scripture</div>
						<div class="sub-text" v-else>{{ assignedTo }}</div>
					</div>
				</div>
			</div>
		</div>
	`
};

// Teaching Component
var Teaching = {
	props: ["teaching"],
	template: `
		<!-- Teaching  -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">{{ teaching.kind }} - {{ teaching.scripture.reference }}</div>
				<div class="sub-text text-center">{{ teaching.assignedTo }}</div>
				<div class="italic text-sm text-center px-12 pt-4">
					“{{ teaching.scripture.text }}”
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
						<span class="text-sm">{{ prayer.description }}</span><span> - </span><span class="sub-text">{{ prayer.assignedTo }}</span>
					</li>
				</ul>
			</div>
			<div class="italic text-sm text-center px-12 pt-4 w-3/4 text-grey-500">
				Covenanted male heads of households are encouraged to stand and pray for our church, our members, and our families.
			</div>
		</div>
	`
};

// SLBC Component
var SLBC = {
	props: ["slbc"],
	template: `
		<!-- SLBC -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Second London Baptist Confession of 1689</div>
				<div class="sub-text text-center">Chapter {{ slbc.chapter }}: {{ slbc.chapterName }} (Paragraph {{ slbc.paragraph }}) - {{ slbc.assignedTo }}</div>
				<div class="italic text-xs text-center px-12 pt-4">
					In the execution of this power wherewith He is so intrusted, the Lord Jesus calleth out of the world unto Himself, through the ministry of his word, by His Spirit, those that are given unto Him by his Father, that they may walk before Him in all the ways of obedience, which He prescribeth to them in His word. Those thus called, He commandeth to walk together in particular societies, or churches, for their mutual edification, and the due performance of that public worship, which He requireth of them in the world.
				</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<ul class="p-0">
					<li v-for="reference in slbc.references">
						<span class="text-sm">{{ reference.reference }}</span><span> - </span><span class="sub-text">{{ reference.assignedTo }}</span>
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
	props: ["closing"],
	template: `
		<!-- Closing Stuff -->
		<div class="w-full p-8 flex flex-col justify-center items-center">
			<!-- Item -->
			<div class="flex-col justify-center items-center">
				<div class="main-text text-center">Closing Chorus</div>
				<div class="italic text-sm text-center px-12 pt-4 text-grey-500" html="closing.chorus">
				</div>
			</div>
			<!-- Item -->
			<div class="flex-col justify-center items-center pt-4">
				<div class="main-text text-center">Closing Prayer, blessing of fellowship meal</div>
				<div class="sub-text text-center">{{ closing.prayer.assignedTo }}</div>
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
		<div class="w-full flex justify-center">
			<div class="border-b-2 border-grey-50" :class="'w-' + size"></div>
		</div>
	`
};



// Init Vue
var app = new Vue({
	el: "#app",
	data: {
		hymns: window.hymns,
		orderOfWorship: {
			"date": moment().day(7).format("MMMM Do, YYYY"),
			"men": {
				"Steve Hopkins": {
					"pastor": true,
					"singing": true,
				},
				"Don Stubblefield": {
					"pastor": true,
					"singing": false,
				}
			},
			"parts": [
				{
					"type": "church-header",
				},
				{
					"type": "opening",
					"announcements": "Steve Hopkins",
					"prayer": "Josh Glasscock",
					"sentence": {
						"scripture": {
							"reference": "Psalm 81:1",
							"text": "Sing aloud unto God our Strength: make a joyful noise unto the God of Jacob."
						},
					"assignedTo": "Steve Hopkins"
					}
				},
				{
					"type": "hymns",
					"assignedTo": "Eric Bechler",
					"hymns": [
						{
							"number": "400",
							"assignedTo": "Phil Long",
						},
						{
							"number": "216",
							"assignedTo": "Keith Howington",
						}
					]
				},
				{
					"type": "teaching",
					"kind": "Teaching",
					"assignedTo": "Don Stubblefield",
					"scripture": {
						"reference": "Ephesians 5:4",
						"text": "Neither filthiness nor foolish talking"
					}
				},
				{
					"type": "prayer",
					"prayers": [
						{
							"description": "Prayer for the sick ",
							"assignedTo": "Phil Long"
						},
						{
							"description": "Prayer for local, state and national leaders ",
							"assignedTo": "Eric Bechler"
						},
						{
							"description": "Prayer for revival ",
							"assignedTo": "Joshua Glasscock"
						},
						{
							"description": "Prayer for persecuted brethren ",
							"assignedTo": "Keith Howington"
						},
						{
							"description": "Prayer of imprecation ",
							"assignedTo": "Steve Hopkins"
						},
					]
				},
				{
					"type": "hymns",
					"assignedTo": "Phil Long",
					"hymns": [
						{
							"number": "188",
							"assignedTo": null,
						},
					]
				},
				{
					"type": "slbc",
					"assignedTo": "Eric Bechler",
					"chapter": "26",
					"chapterName": "Of the Church",
					"paragraph": "5",
					"references": [
						{
							"reference": "John 10:16",
							"assignedTo": "Phil Long"
						},
						{
							"reference": "John 12:32",
							"assignedTo": "Keith Howington"
						},
						{
							"reference": "Mt. 28:20",
							"assignedTo": "Joshua Glasscock"
						},
						{
							"reference": "Mt. 18:15-20",
							"assignedTo": "Eric Bechler"
						},
					]
				},
				{
					"type": "hymns",
					"assignedTo": "Eric Bechler",
					"hymns": [
						{
							"number": "77",
							"assignedTo": null,
						},
					]
				},	
				{
					"type": "teaching",
					"kind": "Sermon",
					"assignedTo": "Steve Hopkins",
					"scripture": {
						"reference": "2 Peter 2:10-16",
						"text": "(They) shall receive the reward of unrighteousness"
					}
				},
				{
					"type": "supper",
					"leader": "Steve Hopkins",
					"backup": "Don Stubblefield",
				},
				{
					"type": "closing",
					"chorus": "Trust and obey, for there's no other way<br>To be happy in Jesus, but to trust and obey. Amen!",
					"prayer": {
						"assignedTo": "Keith Howington"
					}
				},
			]
		}
	},
	components: {
		'church-header': ChurchHeader,
		opening: Opening,
		hymns: Hymns,
		teaching: Teaching,
		divider: Divider,
		prayer: Prayer,
		slbc: SLBC,
		supper: Supper,
		closing: Closing,
	},
	methods: {
		getDividerSize: function(index) {
			if (this.orderOfWorship.parts[index].type == 'teaching') {
				return 'full'
			} else {
				if (this.orderOfWorship.parts.length != index+1) {
					if (this.orderOfWorship.parts[index+1].type == 'teaching') {
						return 'full'
					} else {
						return '2/3'
					}
				} 
			}
		},
		canShowDivider: function(index) {
			if (this.orderOfWorship.parts.length != index+1 && this.orderOfWorship.parts[index].type != 'church-header') {
				return true
			}
		}
	},
	mounted: function() {
		breakPages()
		setTimeout(function(){ breakPages(); }, 300);
		setTimeout(function(){ breakPages(); }, 600);
		setTimeout(function(){ breakPages(); }, 900);
	}
});