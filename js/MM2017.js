riot.tag2('contact', '<div class="contact cf bg-dijon" onclick="{clickFocus}"> <div class="w-100 w-25-ns bb bn-ns fl overflow-x-auto overflow-x-visible-ns horizontal-flow nowrap ws-normal-ns"> <h3 class="dn db-ns pl3 ttu f6 white fw3">Channels <span class="black-50 ml1">({_.keys(allBlurbs).length})</span></h3> <ul class="list pa0 ma0 mb4-ns dib db-ns"> <li onclick="{changeView.bind(this, \'advice\')}" class="{linkCSS}{currentView == ⁗advice⁗ ? ⁗active⁗ : ⁗⁗}"><span class="white-50 mr1">#</span>advice</li> <li onclick="{changeView.bind(this, \'tech\')}" class="dn db-ns {linkCSS}{currentView == ⁗tech⁗ ? ⁗active⁗ : ⁗⁗}"><span class="white-50 mr1">#</span>tech</li> <li onclick="{changeView.bind(this, \'work\')}" class="{linkCSS}{currentView == ⁗work⁗ ? ⁗active⁗ : ⁗⁗}"><span class="white-50 mr1">#</span>work</li> </ul> <h3 class="dn db-ns pl3 ttu f6 white fw3">Messages <span class="black-50 ml1">(1)</span></h3> <ul class="list pa0 ma0 mb3-ns dib db-ns"> <li onclick="{changeView.bind(this, \'matt\')}" class="{linkCSS}{currentView == ⁗matt⁗ ? ⁗active⁗ : ⁗⁗}">matt</li> </ul> </div> <div class="w-100 w-75-ns fl bl-ns bg-white overflow-auto" riot-style="min-height: {parent.style.height}px;"> <ol class="list pa0 ma0 pt3" if="{currentView != ⁗matt⁗}"> <li each="{blurbs}" class="cf pb1 mb3 bb b--black-20"> <div class="fl dn db-ns pa3 pt0 ma0 relative" style="width: 25%; max-width: 60px"> <img if="{author == ⁗matt⁗}" src="./icons/moi.jpg" class="absolute"> <div if="{author != ⁗matt⁗}" class=""> <i class="db" riot-style="width: 48px; height: 48px; background-color: {getRandomColor()}"></i> </div> </div> <div class="fl w-80 pl3"> <p class="pa0 b ma0 mb2">{author}</p> <p each="{msg, i in messages}" class="pa0 ma0 pb1 mb2 near-black lh-copy"> <rawhtml html="{parseMessage(msg)}"></RawHTML> </p> <p class="pa0 ma0 pb2 mb2 lh-copy" if="{final}"> {final[0]} <a class="link blue ma0 pa0" href="#" onclick="{parent.changeView.bind(parent, \'matt\')}">{final[1]}</a> </p> </div> </li> </ol> <form class="pt3 cf" if="{currentView == ⁗matt⁗}"> <div class="cf pb1 mb4 bb b--black-20"> <div class="fl dn db-ns pa3 pt0 ma0 relative" style="width: 25%; max-width: 60px"> <img src="./icons/moi.jpg" class="absolute"> </div> <div class="fl w-80 pl3"> <p class="pa0 b ma0 mb2">matt</p> <p class="pa0 ma0 pb1 mb2 near-black lh-copy measure">Thanks for reaching out! I\'ll respond to you as soon as I\'m able &mdash; typically in a few days. If you need to reach me sooner, <a class="link blue" target="_blank" href="http://twitter.com/MattMadeiro">send me a tweet</a>. If email is more your thing, however, hit me up <a class="link blue" target="_blank" href="mailto:contact@mattmadeiro.com">right here</a>.</p> </div> </div> </form> </div> </div>', 'contact .link-hover:hover,[riot-tag="contact"] .link-hover:hover,[data-is="contact"] .link-hover:hover{ background-color: rgba(0,0,0,.35); } contact .active,[riot-tag="contact"] .active,[data-is="contact"] .active{ background-color: rgba(0,0,0,.6); } contact .active.link-hover:hover,[riot-tag="contact"] .active.link-hover:hover,[data-is="contact"] .active.link-hover:hover{ background-color: rgba(0,0,0,.6); }', '', function(opts) {

		this.currentView = null;
		this.linkCSS = "dib db-ns link-hover pl3 pr3 pv2 pv1-ns pointer fw3 white ";
		this.blurbs = [];
		this.allBlurbs = {
			"advice": [
				{
					author: "matt",
					messages: ["Questions about travel? Coding? Books? Board games?"]
				},
				{
					author: "you",
					messages: ["I am curious about approximately none of those things."]
				},
				{
					author: "matt",
					messages: ["T-that's fine. I don't know everything, but I know enough to be dangerous."],
					final: ["Want advice on anything? I'd love to meet you!", "Hit me up."]
				},
			],
			"tech": [
				{
					author: "matt",
					messages: ["This site was built with <a target='_blank' class='link blue' href='http://riotjs.com'>RiotJS</a>. (Imagine React, except simpler and less terrifying). Styling is provided by <a target='_blank' class='link blue' href='http://tachyons.io'>tachyons</a>, arguably the best thing that has happened to CSS in recent memory."]
				},
				{
					author: "matt",
					final: ["If you're curious about either one, or curious about how and why I used them to build this awkward, colorful thing, you know what to do.", "Get in touch!"]
				},
			],
			"work": [
				{
					author: "matt",
					messages: ["Hey, thanks for asking!", "As of January 2018, I'm operating my own design studio out of sunny Houston, Texas. If you're curious to know more, please visit my <a href='/' class='link blue'>main site</a>.","I can't stop sweating. Please send coconut water."]
				}
			]
		}

		this.changeView = function(name) {
			this.currentView = name;
			this.blurbs = this.allBlurbs[name];
		}

		this.getRandomColor = function(){
			return randomColor({luminosity: "light"});
		}

		this.parseMessage = function(msg) {
			var link = "<a href='#'>message</a>";
			return msg.replace(/@/g, link);
		}

		this.on('mount', function(){
			this.changeView('advice');
			this.update();
		});

});
riot.tag2('documents', '<article ref="doc" class="documents overflow-y-auto cf bg-white f5 pb3 pb0-l f4-ns lh-copy avenir" if="{article.html && loaded}"> <header class="bb b--black-20 pa3"> <h1 class="mv2 f4 f2-m f1-l lh-title">{article.title}</h1> <time class="f5 gray lh-copy mb4">{article.date}</time> </header> <div class="pa3 measure-wide"> <rawhtml html="{article.html}"></RawHTML> </div> </article> <div class="pa3 tc" if="{!article.html && loaded}"> <h1 class="f2 mv2 lh-title black-90">Article not found. :(</h1> <p class="f5 gray lh-copy"> But don\'t sweat it. <span class="dn-ns">Hit the back button below to return to the full list of articles.</span> <span class="dn di-l">Why not choose one from the list over to the left?</span> </p> </div> <div class="absolute bg-light-gray bt w-100 bw1 b--black db dn-l" style="bottom: 0; left: 0"> <button class="ma0 link f4 db bg-light-gray pv1 br br0 bw1 b--black hover-invert pointer" onclick="{backToList}" style="width: 15%" aria-label="Return to Main Favorites List"> <svg class="db center icon icon-arrow-left" aria-hidden="true"><use xlink:href="#icon-arrow-left"></use></svg> </button> </div>', 'documents button,[riot-tag="documents"] button,[data-is="documents"] button{ border-left-style: none; border-top-style: none; border-bottom-style: none; }', '', function(opts) {

		var tag = this;
		var parent = tag.parent;
		tag.article = {};
		tag.loaded = false;

		tag.backToList = function(e) {
			parent.clickClose(e);
			parent.parent.startApp('writing');
		}

		RiotControl.on('article_loaded', function(title, date, html){
			tag.loaded = true;
			tag.article = {
				title: title,
				date: date,
				html: html
			};
			tag.update();
		});

		tag.on('update', function(){
			parent.refs.container.scrollTop = 0;
		});

		tag.on('unmount', function(){
			RiotControl.off('article_loaded');
		});

});
riot.tag2('favorites', '<div if="{!currentPeep}" class="favorites overflow-y-auto" riot-style="max-height: {parent.style.height}px" ref="list"> <div each="{peeps, char in byLastName}"> <p class="bg-dijon bt bb b--black-80 white pl3 pv1 ma0 f6 fw3">{char}</p> <ul class="list pa0 ma0 cf" style="-webkit-overflow-scrolling: touch;"> <li each="{peep in peeps}" onclick="{parent.showProfile}" class="peep cf w-100 bb b--black-20 pt2 pb2 pointer pl3"> <a class="db no-underline black pv1" href="#favorites">{peep.first} <span class="b">{peep.last}</span></a> </li> </ul> </div> </div> <div class="db cf overflow-y-auto" riot-style="max-height: {parent.style.height}px" if="{currentPeep}"> <article class="bg-white db"> <div class="cf pv2 bb b--light-silver"> <h2 class="f3 pl3 b mb2 pt3 mt0 black-90">{currentPeep.first + ⁗ ⁗ + currentPeep.last}</h2> <a href="http://{currentPeep.website}" target="_blank" class="pl3 pt2 pb3 db link blue fw2 mt2" if="{currentPeep.website != null}">http://{currentPeep.website}</a> <ul class="list ma0 mt1 pb3 pl3" if="{hasSocial()}"> <li class="dib mr3" if="{currentPeep.twitter}"> <a target="_blank" class="link blue f5 db" href="http://twitter.com/{currentPeep.twitter}"> <svg class="icon icon-twitter" aria-labelledby="Twitter"><use xlink:href="#icon-twitter"></use></svg> </a> </li> <li class="dib mr3" if="{currentPeep.instagram}"> <a target="_blank" class="link blue f5 db" href="http://instagram.com/{currentPeep.instagram}"> <svg class="icon icon-instagram" aria-labelledby="Instagram"><use xlink:href="#icon-instagram"></use></svg> </a> </li> <li class="dib mr3" if="{currentPeep.facebook}"> <a target="_blank" class="link blue f5 db" href="http://facebook.com/{currentPeep.facebook}"> <svg class="icon icon-facebook" aria-labelledby="Facebook"><use xlink:href="#icon-facebook"></use></svg> </a> </li> </ul> </div> <div class="cf pt1 pb4"> <h3 class="pl3 mb2 mt3 light-silver fw2 i f6">Notes</h3> <ul class="list pa0 pr3"> <li class="pl3 black-90 lh-copy measure" each="{note, i in [currentPeep.notes]}"><rawhtml html="{note}"></RawHTML></li> </ul> </div> <div class="absolute bg-light-gray bt w-100 bw1 b--black" style="bottom: 0; left: 0"> <button class="ma0 link f4 db bg-light-gray pv1 br br0 bw1 b--black hover-invert pointer" onclick="{backToList}" style="width: 15%" aria-label="Return to Main Favorites List"> <svg class="db center icon icon-arrow-left" aria-hidden="true"><use xlink:href="#icon-arrow-left"></use></svg> </button> </div> </article> </div>', 'favorites .peep:hover,[riot-tag="favorites"] .peep:hover,[data-is="favorites"] .peep:hover{ background-color: #eee; } favorites button,[riot-tag="favorites"] button,[data-is="favorites"] button{ border-left-style: none; border-top-style: none; border-bottom-style: none; }', '', function(opts) {

		var tag = this;
		tag.peeps = [];
		tag.byLastName = {};
		tag.lastnames = [];
		tag.currentPeep = false;
		tag.storedScroll = 0;

		var peeps = [
		  {
		    "first": "David",
		    "last": "Crandall",
		    "website": "crandallography.com",
		    "instagram": "davidcrandall",
		    "twitter": "davidcrandall",
		    "facebook": "davidcrandall",
		    "notes": "David might actually be a unicorn. Despite that (because of it?), he's a genuinely good father, artist, and someone I'm so proud to call friend. One day, he and I will live in the same city. Heads will roll with happiness."
		  },
		  {
		    "first": "Kym",
		    "last": "Pham",
		    "website": "kympham.com",
		    "instagram": "kympham",
		    "twitter": "null",
		    "facebook": "kympham",
		    "notes": "I first met Kym at the inaugural World Domination Summit in Portland, Oregon back in 2011. We shared a mutual fascination for minimalism, bungee jumping, and exploring every other remarkable human being that attended. Years later, her amazing eye—and unending drive for adventure—have lead her to become one of the best things on Instagram. (And, y'know, the world.)"
		  },
		  {
		    "first": "Mark",
		    "last": "Powers",
		    "website": "powerspercussion.com",
		    "instagram": "markpowers",
		    "twitter": "markpowers",
		    "facebook": "markpowers",
		    "notes": "The best damn drummer/<a class='link blue' href='http://www.powerspercussion.com/products/'>children's book author</a> I know, and a genuinely adventurous eater. The days we spent eating our way through Houston are some of my favorite memories of home. Just make sure you ask him about stinky tofu."
		  },
		  {
		    "first": "Chelsea",
		    "last": "Vincent",
		    "website": "chelseavincent.com",
		    "instagram": "cevincen",
		    "twitter": "cevincen",
		    "facebook": "null",
		    "notes": "The most hard-working actor/yogi/badass I know. I've known Chelsea since fourth grade, and even back then I had an inkling she was something remarkable. Her work ethic, to this day, remains unparalleled. Don't ask her about the spare keys, though."
		  },
		  {
		    "first": "Frank",
		    "last": "Chimero",
		    "website": "frankchimero.com",
		    "instagram": "frankchimero",
		    "twitter": "frankchimero",
		    "facebook": "frankchimero",
		    "notes": "Kind of my design idol. I'm only moderately embarrassed to admit that. Have you read his <a href=\"#library\" class='link blue'>book</a>?"
		  },
		  {
		    "first": "Jon",
		    "last": "Gold",
		    "website": "jon.gold",
		    "instagram": "jongold",
		    "twitter": "jongold",
		    "facebook": "jongold",
		    "notes": "One of my favorite follows on Twitter, both for his unending fascination with American patriotism and his super-wonderful home page. (Spoiler alert: it was a fundamental inspiration for my own.)"
		  },
		  {
		    "first": "Rolf",
		    "last": "Potts",
		    "website": "rolfpotts.com",
		    "instagram": "rolfpotts",
		    "twitter": "rolfpotts",
		    "facebook": "rolfpotts",
		    "notes": "His tiny tome to adventure, <a class='link blue' href=\"https://smile.amazon.com/Vagabonding-Uncommon-Guide-Long-Term-Travel/dp/0812992180/ref=sr_1_1?ie=UTF8&qid=1475458070&sr=8-1&keywords=vagabonding\">Vagabonding</a>, was the chief source of motivation for my year-long stay in Southeast Asia. I can't overstate how important this book was to me, and I plan to keep a copy at hand for years to come."
		  },
		  {
		    "first": "Austin",
		    "last": "Kleon",
		    "website": "austinkleon.com",
		    "instagram": "austinkleon",
		    "twitter": "austinkleon",
		    "facebook": "austinkleon",
		    "notes": "My favorite author of \"make shit, and don't feel bad about it.\" I love his no-nonsense approach to art and creativity, and I hope he takes it as a compliment when I say that I plan to steal from him for the rest of my life."
		  },
		  {
		    "first": "Michelle",
		    "last": "Nickolaisen",
		    "website": "bombchelle.com",
		    "instagram": "michelleshock",
		    "twitter": "_ChelleShock",
		    "facebook": "bombchellebiz",
		    "notes": "A writer, entrepreneur, and—in her words!—productivity nerd. On top of all that, though, she's a greatly kind and considerate friend, one of the few people I can honestly say that I'm glad to have met in my years as a Paleo/minimalist/whatever blogger. She can also kick your ass."
		  },
		  {
		    "first": "Trent",
		    "last": "Walton",
		    "website": "trentwalton.com",
		    "instagram": "null",
		    "twitter": "trentwalton",
		    "facebook": "null",
		    "notes": "A tremendous designer, and a huge source of information about typography. I know very little about fonts, still, but what I've gleaned is solely due to his willingness to share with the world wide web. Thanks, Trent."
		  },
		  {
		    "first": "Maggie",
		    "last": "Doyne",
		    "website": "blinknow.org",
		    "instagram": "blinknoworg",
		    "twitter": "blinknow",
		    "facebook": "BlinkNow.org",
		    "notes": "One of the most genuinely caring and selfless human beings I've ever had the pleasure to meet. A genuine inspiration, and the reason I won't forget my 25th birthday anytime soon."
		  },
		  {
		    "first": "Dallas",
		    "last": "Hartwig",
		    "website": "dallashartwig.com",
		    "instagram": "dallashartwig",
		    "twitter": "dallashartwig",
		    "facebook": "mrdallashartwig",
		    "notes": "I'm pretty uncomfortable with how much technology occupies every hour of my day. Dallas is the only author I've encountered who speaks to that exact sentiment, and I'm trying today to take cues from his <a class='link blue' href='http://dallashartwig.com/moresociallessmedia/'>More Social, Less Media</a> movement. He's also a tremendous nature buff, and I am therefore tremendously jelly."
		  },
		  {
		    "first": "Robert",
		    "last": "Florence",
		    "website": "landofexcitement.com",
		    "instagram": "",
		    "twitter": "robertflorence",
		    "facebook": "",
		    "notes": "I blame Robert for a lot of things. He broke my heart when he wrapped his <a class='link blue' href='https://www.rockpapershotgun.com/2016/09/27/cardboard-children-goodbye/#more-401169'>Cardboard Children column</a> over at Rock, Paper Shotgun after six straight years of incredible work. He also hooked me on board games, and my collection continues to grow in the wake of his departure."
		  },
		  {
		    "first": "Quintin",
		    "last": "Smith",
		    "website": "shutupandsitdown.com",
		    "instagram": "",
		    "twitter": "Quinns108",
		    "facebook": "",
		    "notes": "My favorites writer of games is now an integral part of the team over at Shut Up and Sit Down, a site dedicated wholly to bankrupting my wallet with hysterical video reviews of the best board games around. He's also hysterical."
		  },
		  {
		    "first": "Anne",
		    "last": "Lamott",
		    "website": "",
		    "instagram": "",
		    "twitter": "ANNELAMOTT",
		    "facebook": "",
		    "notes": "My writer idol. Her meditation on writing, <em>Bird by Bird</em>, is my favorite on the subject, a warm, richly comedic, and deeply personal introspective on the sort of madness that must possess a person to sit down and try and permanently record their thoughts."
		  },
		  {
		    "first": "Jodi",
		    "last": "Ettenberg",
		    "website": "legalnomads.com",
		    "instagram": "legalnomads",
		    "twitter": "legalnomads",
		    "facebook": "legalnomads",
		    "notes": "Jodi's a former lawyer turned food writer, and one of my favorites at that. There's a lot to admire: her unflinching dedication to traveling alone as a woman for several years going, her unfortunate tendency to be target number one any time a nearby bird decides to poop, and her deep love for soup. We met for a bowl of bun bo hue in Ho Chi Minh, and it stands still as one of my favorite memories from that month in Vietnam. Keep on rocking, Jodi."
		  },
		  {
		    "first": "Emily",
		    "last": "Short",
		    "website": "emshort.wordpress.com",
		    "instagram": "",
		    "twitter": "emshort",
		    "facebook": "",
		    "notes": "My first exposure to interactive fiction came with ADRIFT, a GUI-ified version of traditional IF-making tools. I've long since left that community, but my interest in dynamic fiction and text-based narratives continues still. Emily Short has the distinction of being my favorite gateway to that world: a reflective, measured voice on the development of the medium, with excitement to spare on all that it could offer, and all that it offers today to a staggering array of unique voices."
		  }
		];

		tag.showProfile = function(e) {
			tag.storePosition();
			tag.currentPeep = e.item.peep;
		}

		tag.showList = function(e) {
			tag.currentPeep = false;
		}

		tag.storePosition = function(){
			tag.storedScroll = tag.refs.list.scrollTop;
		}

		tag.hasSocial = function(){
			return tag.currentPeep.twitter || tag.currentPeep.instagram || tag.currentPeep.facebook;
		}

		tag.checkFinal = function(){
			if(tag.currentPeep.twitter && tag.currentPeep.instagram) {
				return '';
			}
			return 'br b--light-silver';
		}

		tag.backToList = function(){
			tag.currentPeep = false;
		}

		tag.on('updated', function(){
			if(!tag.currentPeep && tag.storedScroll) {
				tag.refs.list.scrollTop = tag.storedScroll;
				tag.storedScroll = 0;
			}
		});

        tag.preparePeeps = function(){
        	tag.peeps = _.orderBy(peeps, 'last', 'asc');
        	tag.byLastName = _.groupBy(tag.peeps, function(peep){
        		return peep.last.charAt(0);
        	});
        }

        tag.preparePeeps();

});
riot.tag2('guestbook', '<div class="guestbook" onclick="{clickFocus}"> <div class="bg-white overflow-y-auto" riot-style="max-height: {parent.style.height}px" if="{showingList}"> <div class="tc pv3 bb b--black-80"> <notbutton title="Sign the Guest Book" onclick="{toggleView}"></NotButton> </div> <ul class="list pl0 ma0" ref="messages" if="{messages.length}"> <li each="{messages}" class="bb cf pt3 pt0-ns pl4-ns" riot-style="background-color: {color}"> <div class="pl3 pr3 w-100 fl bl-ns bg-white" style="min-height: 100px"> <p class=""><span class="b f5">{formatOutput(name)}</span><span class="light-silver fw4 ml3 f6">{formatOutput(location)}</span></p> <p class="near-black f6 pb2 pt1 lh-copy measure" style="white-space: pre-wrap">{formatOutput(message)}</p> </div> </li> </ul> <p class="tc pl3 pa0 ma0 mt4 f5 gray" if="{!messages.length}">Nothing here just yet. :(</p> </div> <div if="{!showingList}" class="cf" onclick="{chooseColor}"> <div class="pl3 pv3"> <notbutton title="Back to List" onclick="{toggleView}"></NotButton> </div> <form class="pt3"> <div class="pl3 pr3 pb2 w-100 mb3 "> <label for="author" class="db b mb1 f6 ttu">Name</label> <input onclick="{dontChangeColor}" class="input-reset pv2 ph2 w-100 ba bw1 b--black" type="text" ref="author"> </div> <div class="pl3 pr3 pb2 w-100 mb3 "> <label for="location" class="db b mb1 f6 ttu">Location</label> <input onclick="{dontChangeColor}" class="input-reset pv2 ph2 w-100 ba bw1 b--black" type="text" ref="location"> </div> <div class="pl3 pr3 pb0 pb2-l w-100 mb3 "> <label for="message" class="db b mb1 f6 ttu">Message</label> <textarea onclick="{dontChangeColor}" class="input-reset pv2 ph2 w-100 ba bw1 b--black" ref="message" style="min-height: 120px"></textarea> </div> <div class="pr3 pv3 fr"> <notbutton title="Submit" onclick="{submitForm}"></NotButton> </div> </form> </div> </div>', '', '', function(opts) {

		var tag = this;
		var parent = tag.parent;
		tag.messages = [];
		tag.authorColor = randomColor({luminosity: 'light'});
		tag.showingList = true;

		tag.toggleView = function(e){
			if(typeof e != 'undefined') {
				e.stopPropagation();
			}
			tag.showingList = !tag.showingList;
			if(tag.showingList) {
				parent.refs.container.style.backgroundColor = "#ffffff";
				tag.update();
			}
			else {
				tag.chooseColor();
			}

		}

		tag.formValid = function(){
			return tag.refs.author.value.length > 1 && tag.refs.location.value.length > 1 && tag.refs.message.value.length > 2;
		}

		tag.submitForm = function(e) {
			e.stopPropagation();
			e.preventDefault();
			if(tag.formValid()) {
				var payload = {
					name: tag.escapeInput(tag.refs.author.value),
					location: tag.escapeInput(tag.refs.location.value),
					message: tag.escapeInput(tag.refs.message.value),
					color: tag.authorColor
				}
				firebase.database().ref('guestbook').push().set(payload);
				tag.refs.author.value = '';
				tag.refs.location.value = '';
				tag.refs.message.value = '';
				tag.toggleView();
			}
		}

		tag.escapeInput = function(str) {
			var replaced = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
			return replaced.replace(/,/g, '~');
		}

		tag.formatOutput = function(str) {
			var replaced = str.replace(/~/g, ',');
			return replaced.split("<br />").join("\n\r");
		}

		tag.setScroll = function(){
			tag.output.scrollTop = tag.output.scrollHeight;
		}

		tag.chooseColor = function(){
			tag.authorColor = randomColor({luminosity: 'light'});
			parent.refs.container.style.backgroundColor = tag.authorColor;
			tag.update();
		}

		tag.dontChangeColor = function(e){
			e.stopPropagation();
		}

		tag.on('mount', function(){
			firebase.database().ref('guestbook').on('value', function(snapshot) {
			  var entries = snapshot.val();
			  tag.messages = _.isNull(entries) ? [] : _.values(entries);
			  tag.update();
			});
		});

});
riot.tag2('library', '<div class="library bg-white"> <ul class="list pl0 ma0 overflow-y-auto cf pb4" riot-style="max-height: {parent.style.height}px" name="books"> <li each="{book in books}" class="book w-50 w-third-ns fl"> <a href="{book.amazon}" target="_blank" class="no-underline tc blue db"> <div class="aspect-ratio aspect-ratio--1x1 db mb2"> <img alt="The book cover for {book.name} by {book.author}." riot-src="images/{book.filename}-o.jpg" class="absolute" style="left: 25%; width: 50%; bottom: 0"> </div> <cite class="near-black f6 tc db mb2 link blue">{book.name}</cite> <p class="gray f6 ma0">{book.author}</p> </a> </li> </ul> </div>', '', '', function(opts) {

		var tag = this;
		tag.books = [
		  {
		    "name": "Bird by Bird",
		    "author": "Anne Lamott",
		    "amazon": "http://amzn.to/2dlfw83",
		    "filename": "birdbybird"
		  },
		  {
		    "name": "City of Saints and Madmen",
		    "author": "Jeff VanderMeer",
		    "amazon": "http://amzn.to/2dCzNbb",
		    "filename": "cityofsaints"
		  },
		  {
		    "name": "Letters of Note",
		    "author": "Shaun Usher",
		    "amazon": "http://amzn.to/2cLgRpL",
		    "filename": "lettersofnote"
		  },
		  {
		    "name": "Name of the Wind",
		    "author": "Patrick Rothfuss",
		    "amazon": "http://amzn.to/2dlfgWC",
		    "filename": "nameofthewind"
		  },
		  {
		    "name": "Show Your Work",
		    "author": "Austin Kleon",
		    "amazon": "http://amzn.to/2d7h6Hv",
		    "filename": "showyourwork"
		  },
		  {
		    "name": "Steal Like an Artist",
		    "author": "Austin Kleon",
		    "amazon": "http://amzn.to/2dlgyRf",
		    "filename": "steal"
		  },
		  {
		    "name": "Vagabonding",
		    "author": "Rolf Potts",
		    "amazon": "http://amzn.to/2dCzTQh",
		    "filename": "vagabonding"
		  },
		  {
		    "name": "The Shape of Design",
		    "author": "Frank Chimero",
		    "amazon": "http://shapeofdesignbook.com/",
		    "filename": "chimero"
		  }
		];

});
riot.tag2('madeiros', '<nav class="bg-white bb bw1" ref="nav"> <ul class="list pl0 pv2 ma0"> <li class="dib ml3 ml4-l i f4-ns f5">madeirOS</li> <li class="dib ml4 f6 f5-ns">File</li> <li class="dib ml4 f6 f5-ns">Edit</li> <li class="dib ml4 f6 f5-ns"><a class="link blue" href="#help">Help</a></li> </ul> </nav> <div class="cf absolute w-100 mt3" style="z-index: 1; top: 50px"> <icons items="{icons}"></Icons> </div> <div role="main" class="cf absolute w-100" style="z-index: 5;"> <app each="{openApps}"></App> </div>', '', '', function(opts) {

        var tag = this;
        tag.localZ = 10;
        tag.currentTheme = 1;
        tag.onPhone = false;

        tag.apps = _.valuesIn(opts.apps);
        tag.icons = _.valuesIn(opts.apps);
        _.remove(tag.icons, function(app){
            return _.has(app, 'icon') && !app.icon;
        });
        tag.openApps = [];

        tag.closeApp = function(item) {

            var index = _.indexOf(tag.openApps, item);

            if(index != -1) {
                tag.openApps.splice(index, 1);
                tag.update();
            }

            riot.route('/');

        }
        tag.startApp = function(name) {
            var app = _.find(tag.apps, function(app){
                return app.tagName.toLowerCase() === name;
            });
            if(typeof app != 'undefined') {
                if(_.indexOf(tag.openApps, app) === -1) {
                    app.style.z = tag.getNextZ();
                    if(tag.onPhone) {
                        tag.openApps = [];
                    }
                    tag.openApps.push(app);
                    tag.update();
                }
            }
        }

        tag.getNextZ = function(){
            tag.localZ += 1;
            return tag.localZ;
        }

        tag.calculateWindowDimensions = function(){
            var wWidth = 0, wHeight = 0;
            if( typeof( window.innerWidth ) == 'number' ) {

                wWidth = window.innerWidth;
                wHeight = window.innerHeight;
            }
            else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {

                wWidth = document.documentElement.clientWidth;
                wHeight = document.documentElement.clientHeight;
            }
            else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {

                wWidth = document.body.clientWidth;
                wHeight = document.body.clientHeight;
            }
            return {
                width: wWidth,
                height: wHeight
            }
        }

        tag.checkForPhone = function(){
            tag.mq = window.matchMedia('screen and (min-width: 60em)');
            if(tag.mq.matches) {
                tag.onPhone = false;
            }
            else {
                tag.onPhone = true;
            }
        }

        tag.fetchArticle = function(slug) {
            tag.startApp('documents');
            RiotControl.trigger('load_article', slug);

        }

        tag.setupRoutes = function(){
            riot.route(function(name) {
                tag.startApp(name);
            });
            riot.route('writing/*', function(name){
                tag.startApp('writing');
                tag.fetchArticle(name);
            });
            if(window.location.hash === ''){
                tag.startApp('help');
            }
        }

        tag.on('mount', function(){
            tag.checkForPhone();
            tag.setupRoutes();
            riot.route.start(true);
        });

});


riot.tag2('icons', '<ul role="navigation" class="list pl0 ma0 w-100 w-10-l relative-l fr cf" style="min-width: 150px" each="{apps, i in lists}"> <li class="mb4 fl w-33 tc w-100-l relative-l" each="{apps}"> <a href="#{tagName.toLowerCase()}" class="no-underline pointer dib"> <div class="center mb2" style="width: 75px;"> <img aria-hidden="true" name="img" class="mw-100" riot-src="icons/{tagName}.png"> </div> <p class="black-80 ma0 fw5 f6 pt1">{name}</p> </a> </li> </ul>', '', '', function(opts) {

        var parent = this.parent;
        var tag = this;
        tag.lists = [];
        tag.fullList = [];
        tag.segmented = [];

        tag.prepareLists = function(){
            tag.fullList.push(opts.items);
            tag.segmented.push(_.slice(opts.items, 0, 5));
            tag.segmented.push(_.slice(opts.items, 5, opts.items.length));

            var self = this;
            if(!parent.onPhone) {
                tag.lists = tag.segmented;
            }
            else {
                tag.lists = tag.fullList;
            }
            parent.mq.addListener(function(changed) {
                if(changed.matches) {
                    console.log('use segmented list');
                    self.lists = self.segmented;
                    parent.onPhone = false;
                } else {
                    console.log('use full list');
                    self.lists = self.fullList;
                    parent.onPhone = true;
                }
                self.update();
            });
        }

        tag.on('mount', function(){
            tag.prepareLists();
            tag.update();
        });

});

riot.tag2('app', '<article ref="{tagName.toLowerCase()}" class="{!parent.onPhone ? ⁗mw-400⁗ : \'\'} w-100 w-{style.width}-l bl-l br-l bb-l {draggable ? ⁗bt-l⁗ : \'\'} bw1-l b--black absolute-l" riot-style="z-index: {style.z}; left: {style.left}px; top: {style.top}px; right: {style.right}px; opacity: 0.999999;" onclick="{clickFocus}"> <div class="bg-light-gray bb bw1 b--black header" ref="header" id="{name}"> <div class="cf overflow-hidden"> <div class="fl pv2 w-80 w-90-ns {draggable ? ⁗cursor-move⁗ : \'\'}"> <h2 class="ma0 ml3 normal fw4 f6 f5-ns ttu tracked">{name}</h2> </div> <button class="db bg-light-gray fl w-20 w-10-ns tc pv2 bl bw1 br0 b--black bt-0 br-0 bb-0 hover-invert pointer" onclick="{clickClose}" aria-label="Close {name} Window"> <svg class="center f4-ns f5 db icon icon-cross" aria-hidden="true"> <use xlink:href="#icon-cross"></use> </svg> </button> </div> </div> <div class="{style.additionalClasses} overflow-auto" ref="container" riot-style="min-height: {style.height}px; max-height: {style.maxHeight}px"> <div data-is="{tagName}"></div> </div> </article>', 'app .mw-400,[riot-tag="app"] .mw-400,[data-is="app"] .mw-400{ min-width: 400px; }', '', function(opts) {

        var parent = this.parent;
        var tag = this;

        this.dragging = false;
        this.resized = false;

        this.clickFocus = function(e){
            var curTag = this.refs[this.tagName.toLowerCase()];
            this.style.z = this.parent.getNextZ();
            if(typeof curTag != 'undefined' && _.has(curTag, 'clickFocus')) {
                curTag.clickFocus();
            }
            if(this.tagName.toLowerCase() === 'documents') {
                e.preventUpdate = true;
            }
        }

        this.clickClose = function(e){
            e.stopPropagation();
            e.preventDefault();
            e.preventUpdate = true;
            parent.closeApp(e.item);
        }

        this.calculateAbsolutePosition = function(obj) {
            var curleft = curtop = 0;
            if (obj.offsetParent) {
                do {
                    curleft += obj.offsetLeft;
                    curtop += obj.offsetTop;
                } while (obj = obj.offsetParent);
            }
            return {
                left : curleft,
                top : curtop
            };
        }

        this.handleDrag = function(e) {
            var self = this;

            if(e.which != 1) {
                return;
            }

            this.dragging = true;
            this.style.z = parent.getNextZ();
            var abs = this.calculateAbsolutePosition(e.currentTarget);
            var wDimensions = parent.calculateWindowDimensions();
            var appHeight = this.refs[this.tagName.toLowerCase()].clientHeight;
            var appWidth = this.refs[this.tagName.toLowerCase()].clientWidth;
            document.body.className = 'dragging';
            if(typeof appHeight === 'undefined') {
                var a = this[this.tagName.toLowerCase()];
                appHeight = a[a.length - 1].clientHeight;
                appWidth = a[a.length - 1].clientWidth;
            }

            var offset = {
                left: e.pageX - abs.left,
                top: e.pageY - abs.top + 41
            };

            document.onmouseup = function(){
                self.dragging = false;
                document.body.className = '';
                document.onmousemove = null;
            }

            document.onmousemove = function(e) {

                var x, y, diffX, diffY;
                var prevX = self.style.left, prevY = self.style.top;

                if(!self.dragging) {
                    return;
                }

                if(_.has(e, 'originalEvent')) {
                    x = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX;
                    y = e.originalEvent.touches ?  e.originalEvent.touches[0].pageY : e.pageY;
                } else {
                    x = e.pageX;
                    y = e.pageY;
                }

                x = x - offset.left;
                y = y - offset.top;

                diffX = Math.abs(x - prevX);
                diffY = Math.abs(y - prevY);

                if(diffX >= 200) {
                    return;
                }

                if(x <= 2) {
                    x = 2;
                }
                else if((x + appWidth + 6) >= wDimensions.width) {
                    x = wDimensions.width - appWidth - 6;
                }

                if(y <= 2) {
                    y = 2;
                }
                else if((y + appHeight + 5) >= wDimensions.height - 41) {
                    y = wDimensions.height - appHeight - 47;
                }

                self.style.left = x;
                self.style.top = y;
                self.update();

            }
        }

        this.setDraggable = function() {
            if(TOUCH_ENABLED) {
                this.refs.header.addEventListener('touchstart', this.handleDrag);
            }
            else {
                this.refs.header.addEventListener('mousedown', this.handleDrag);
            }
        }

        tag.setHeight = function(){
            if(parent.onPhone || !tag.draggable) {
                var dimensions = parent.calculateWindowDimensions();
                var navHeight = parent.refs.nav.clientHeight;
                var headerHeight = tag.refs.header.clientHeight;
                tag.style.height = dimensions.height - navHeight - headerHeight - 4;
                tag.style.maxHeight = dimensions.height - navHeight - headerHeight - 4;
                tag.update();
            }
        }

        this.on('mount', function(){
            _.bindAll(this, 'handleDrag');
            if(this.draggable) {
                this.setDraggable();
            }
            setTimeout(tag.setHeight, 5);

        });

});

riot.tag2('help', '<article class="help ph3 pb4"> <p class="near-black pt2 lh-copy"><span class="b">Hi! Welcome to <strong class="unicorn animate i fw4">madeirOS</strong> v1.0.</span> (I\'ve worked hard on this, and I\'m very eager to show you.)</p> <p class="near-black pt1 lh-copy">My name is Matt Madeiro. I\'m a web designer, developer, and <a class="link blue" href="#writing">sometimes-writer</a> based in Austin, Texas. This is all my stuff. I hope you like it! <span class="dn di-ns">Click all the things, and don\'t be afraid to move these windows around, too.</span></p> <p class="near-black pt1 lh-copy dn-ns b">To get started, click the big X button in the upper right.</p> <p class="near-black pt1 lh-copy">(Psst. Don\'t forget to sign the <a class="link blue" href="#guestbook">Guest Book</a> before you leave!)</p> </article>', '', '', function(opts) {
});

riot.tag2('rawhtml', '', '', '', function(opts) {
        this.root.innerHTML = this.opts.html;

        this.on('update', function(){
            this.root.innerHTML = this.opts.html;
        });
});
riot.tag2('memories', '<div class="memories overflow-y-auto cf bg-white" riot-style="max-height: {parent.style.height}px"> <div if="{showWarning}"> <div class="pa3 bg-light-gray ma3"> <p class="ma0 mb3 f6 f5-m f5-l lh-copy b">Pictures are heavy.</p> <p class="ma0 f6 f5-m f5-l lh-copy">This section features {imageCount} of them, totaling <strong>{imageWeight} kilobytes of data</strong>. If you\'re on a cellular connection or have an otherwise limited data plan, you might want to save this section for later. If you\'re rocking wifi, though, you do you.</p> </div> <div class="tc mt4 pv2 db cf"> <notbutton title="Just the Text is Fine, Thanks" onclick="{startTheShow}"></NotButton> </div> <div class="tc mt3 mt4-l db cf"> <notbutton title="Show Me the Photos, Please" onclick="{startWithPictures}"></NotButton> </div> </div> <div if="{!showWarning}" class="cf"> <div class="overflow-x-auto overflow-x-visible-ns horizontal-flow nowrap ws-normal-ns mb3"> <ol class="list ma0 pa0 pb1-ns pt1-ns bb b--black-80"> <li each="{year, i in memoryYears}" class="dib"> <button onclick="{changeYear}" class="db bg-white bn pointer f4 pa3 pv2 no-underline link {year === chosenYear ? ⁗black-80⁗ : ⁗black-30⁗}">{year}</button> </li> </ol> </div> <div if="{chosenYear}"> <article class="pa3 pt2 mb3 bb b--black-20 avenir" each="{memory, i in chosenMemories}"> <h1 class="mv2 f4 f3-m f2-l lh-title">{memory.title}</h1> <time class="f5 gray lh-copy mb4">{formatDate(memory.date)}</time> <p class="f5 f4-m f4-l mt4 lh-copy measure"> <rawhtml html="{memory.desc}"></RawHTML> </p> <img if="{showPictures && memory.imgurl !== ⁗false⁗}" riot-src="images/{memory.imgurl}-o.jpg" class="measure-m measure-l mw-100 mv3"> </article> </div> </div> </div>', '', '', function(opts) {

		var tag = this;
		tag.showWarning = true;
		tag.showPictures = false;
		tag.imageCount = 0;
		tag.imageWeight = 0;
		tag.allImages = [];
		tag.chosenMemories = [];
		tag.memoryYears = [];
		tag.memoriesByYear = {};
		tag.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		tag.chosenYear = false;

		var memories = [
		  {
		    "date": "2014-05-09",
		    "title": "The Big Damn Trip Ends",
		    "imgurl": "false",
		    "imgalt": "",
		    "imgsize": "",
		    "desc": "288 days after this reckless, life-changing journey began, my plane finally touched down in familiar territory: Houston, Texas. I might not know what it looks like, but I'm excited still to begin the next chapter of my life. First, however, I owe my mother several dozen hugs."
		  },
		  {
		    "date": "2014-04-28",
		    "title": "Rode My School Bus",
		    "imgurl": "bus",
		    "imgalt": "A bright yellow school bus with a cheering group of volunteers and Nepalese children in front of it.",
		    "imgsize": 37,
		    "desc": "I rounded out my Big Damn Trip through Asia in the best manner possible: spending an incredible week at the Kopila Valley Children's Home in Surkhet, Nepal. There, amidst the color and commotion of the first week of the school year, I hopped on a familiar yellow school bus and rode along for its first morning route through Surkhet's sleepy streets. Watching the seats crinkle under the weight of dozens of shy, smiling students made for a morning I'll never forget."
		  },
		  {
		    "date": "2014-04-09",
		    "title": "4,130 Meters Above",
		    "imgurl": "annapurna",
		    "imgalt": "Snow-covered peaks as seen from the Annapurna Base Camp.",
		    "imgsize": 66,
		    "desc": "Perched high in the white crags of the Himalaya, the Annapurna Base Camp has quickly--and rightfully--become a rite of passage for Nepali trekkers. My week-long slog there and back forced me to walk uphill six hours daily through sloped farmlands, white rock riverbeds, and slick paths carved into the ice, snow and hail dogging my footsteps through the mountains. Standing at the base camp, blinding white all around, I realized something profound: I'm an idiot. Don't do this in Converse, people. Don't be like Matt."
		  },
		  {
		    "date": "2014-03-09",
		    "title": "Wild Dogs & Dunes",
		    "imgurl": "brothersm",
		    "imgalt": "My brother and myself posing in by the dunes.",
		    "imgsize": 41,
		    "desc": "Slept by the runes of the Thor desert. I woke a little after midnight, choking a little on the camel stench soaked into my blanket. Footsteps filled my ears — soft pads at first, then quiet sniffling. A wild dog came into sight, snout pointed at my group's big pile of backpacks, before loping away on needle-thin legs. My eyes turned back to the stars. I'd never seen them painted in such broad strokes, and for a minute, at least, I forgot to breathe."
		  },
		  {
		    "date": "2013-07-25",
		    "title": "The Big Damn Trip Begins",
		    "imgurl": "tripbegins",
		    "imgalt": "My brother and myself posing in Shangri-la.",
		    "imgsize": 44,
		    "desc": "With my brother beside me, I grabbed a 10kg backpack and set out for a year-long excursion through Southeast Asia. We hit China, Malaysia, Singapore, Indonesia, Vietnam, Laos, Cambodia, Thailand, and India over the course of the journey, making great friends and greater memories all the while. The early plan was to blog the whole experience, keeping family and friends in the loop about our adventures, but the site never materialized. We made a conscious decision, early on, to keep most of the memories to ourselves. That's the antithesis of modern sharing culture, and most certainly didn't boost my Online Blogger Brand, but what we lost in followers, we more than made up for in time spent anywhere but with our screens."
		  },
		  {
		    "date": "2012-12-25",
		    "title": "Bought a School Bus(?)!",
		    "imgurl": "xmas2012",
		    "imgalt": "Matt Madeiro holding a birthday cake with a school bus on top.",
		    "imgsize": 44,
		    "desc": "For my 25th birthday, I decided to do something reckless: give up my birthday and try and raise $25,000 to buy a school bus for the students of Kopila Valley. I still can't believe it worked. I also can't believe we blew straight past to $25K and on to $43,870. <a class='link blue' href='/25'>Read the full story here.</a>"
		  },
		  {
		    "date": "2011-08-09",
		    "title": "My Accidental Acting Debut",
		    "imgurl": "acting",
		    "imgalt": "A screenshot from the music video.",
		    "imgsize": 30,
		    "desc": "On a whim, I attended the filming of Scotty McCreer's debut music video, 'I Love You This Big.' I, uh, didn't know who he was beforehand, but that didn't stop the directors from shoving my plaid-clad self into several <em>pivotal</em> scenes. <a href=\"https://www.youtube.com/watch?v=ZVq8nEHCKd4\">Watch it here</a>, and please pretend that you're impressed."
		  },
		  {
		    "date": "2011-01-10",
		    "title": "Moved to California",
		    "imgurl": "false",
		    "imgalt": "",
		    "imgsize": "",
		    "desc": "Blessed with both restless feet and an amazing friend (with a couch!) in Hollywood, I packed a single backpack and hopped a plane to LA. This simple, strange move kickstarted a year of transformation, laughter, and much debate over who in the hell had the spare keys."
		  },
		  {
		    "date": "1987-12-25",
		    "title": "A Christmas Baby!",
		    "imgurl": "babby",
		    "imgalt": "My mother holding a stocking-clad baby me in her lap.",
		    "imgsize": 13,
		    "desc": "In celebration of my sudden (and safe!) arrival, the doctors slid my tiny baby self into a Christmas stocking before handing me to my mother. 25 years later, this would come back to bite me in the ass."
		  },
		  {
		    "date": "2016-10-01",
		    "title": "Out with the Old, Etc.",
		    "imgurl": "false",
		    "imgalt": "",
		    "imgsize": "",
		    "desc": "The first website I ever built was an awkward Geocities thing, some neon temple of cheat codes and fanfiction splayed at the feet of Pokémon Blue. Two decades have passed, but I'm every bit as goofy as I was back then. The latest incarnation of mattmadeiro.com was built to reflect that, and to capture at least some of the excitement I felt back when the Internet—and its early Wild West interpretation of personal expression—was new."
		  },
		  {
		    "date": "2015-09-07",
		    "title": "The Northern Cascades",
		    "imgurl": "cascades",
		    "imgalt": "A winding path along the crest of the northern Cascade mountain range.",
		    "imgsize": 68,
		    "desc": "Take note: when a park ranger describes as 'grueling,' she's likely not joking around. Twelve miles round-trip yesterday were some of the most difficult of my life, but a fifteen-minute stretch of sunlight in the northern Cascades made the sharp ascent all the more worthwhile."
		  },
		  {
		    "date": "2015-09-01",
		    "title": "Olympic National Park",
		    "imgurl": "olympic",
		    "imgalt": "A photo of a lake inside Olympic National Park.",
		    "imgsize": 80,
		    "desc": "My first proper backcountry hike. I wish I could say that we brought water-proof gloves. I wish I could say that my brother brought a sleeping bag rated for freezing temps. I wish I could say that we didn't completely miss the side snake of a trail to our first camp site and spend a solid two hours wandering through a frozen, biting rain. I wish I could say that we were in any way remotely prepared for a several-day hike along the upper loop trail through Olympic National Park, but here's the truth: it hurt, it sucked, and I would so, so do it again."
		  },
		  {
		    "date": "2015-01-21",
		    "title": "Hello, Meshify!",
		    "imgurl": "false",
		    "imgalt": "",
		    "imgsize": "",
		    "desc": "I submitted the application in my boxers, not thinking I'd receive a phone call from one of the cofounders less than an hour later. He asked if I could come in for an interview. I mentioned I needed to put on pants, but agreed to come in. The rest, as they say, is history.<br/><br/>I'm not a conventional coder. My background is in Professional Writing, and I taught myself HTML, CSS, and Javascript for a simple reason: I'd grown tired of paying other people to build websites. Despite this, I have a natural affection for the fluid web, and my time at Meshify—nearly two years, at this time of writing—have only deepened my love for what is capable inside a browser. In my time here, I've spear-headed the design and development of a brand-new dashboard for the Meshify core product, and I've been tasked time and time again with adding new core features while still maintaining a simple and readable interface. I've learned a tremendous amount, and I'm grateful still that Meshify took a chance in giving me the reins of the front-facing portion of their offerings."
		  },
		  {
		    "date": "2016-09-08",
		    "title": "Colorado Calling",
		    "imgurl": "rmnp",
		    "imgalt": "Miller Lake, situated outside of Estes Park and just past the entrance to the RMNP.",
		    "imgsize": 80,
		    "desc": "Colorado! We stole a few days in Boulder, then a few more in Denver, but the memories linger far outside the city. My favorite moment from the trip might be the simplest: rising around 5am, moving through the darkness out past Estes Park and into the Rocky Mountains proper, then beginning a long, cold hike up to Mills Lake. We passed a half-dozen other hikers in those early hours, and our reward was an unobstructed view of one of the most gorgeous bodies of water I've ever seen. Let the record show that I love mountains more than almost anything."
		  },
		  {
		    "date": "2016-12-28",
		    "title": "Adios, Houston",
		    "imgurl": "false",
		    "imgalt": "",
		    "imgsize": "",
		    "desc": "It's been grand. My next chapter begins just a stone's throw down the interstate, in Austin, TX. I hear it has live music. I also hear it has good food. Most importantly, it has my job, a handful of old friends, and an opportunity to start anew."
		  }
		];

		tag.setScroll = function(){
			tag.output.scrollTop = tag.output.scrollHeight;
		}

		tag.calculateWidth = function(){
			return tag.root.querySelector('.memories').clientWidth + "px";
		}

		tag.formatDate = function(date) {
			var parts = date.split('-');
			var d = new Date(parts[0], parts[1] - 1, parts[2]);
			return tag.monthNames[d.getMonth()] + " " + d.getDate() + ", " + parts[0];
		}

		tag.startWithPictures = function(){
			tag.showPictures = true;
			tag.startTheShow();
		}

		tag.startTheShow = function(){
			tag.showWarning = false;
			tag.update();
		}

		tag.changeYear = function(e) {
			tag.chosenYear = e.item.year;
			tag.chosenMemories = tag.memoriesByYear[e.item.year];
			tag.update();
		}

		tag.prepareMemories = function(){
			var ordered = _.orderBy(memories, 'date', 'asc');
			tag.memoriesByYear = _.groupBy(ordered, function(m){
				return m.date.split('-')[0];
			});
			tag.memoryYears = _.sortBy(_.keys(tag.memoriesByYear), function(year){
				return -1 * parseInt(year);
			});
			tag.chosenYear = tag.memoryYears[0];
			tag.chosenMemories = tag.memoriesByYear[tag.chosenYear];
			tag.chosenMemory = tag.chosenMemories[0];
			tag.allImages = _.map(memories, function(m){
				if(m.imgurl != "false") {
					return m.imgurl;
				}
				return false;
			});
			var weights = _.map(memories, function(m){
				var size = parseInt(m.imgsize);
				if(!_.isNaN(size)) {
					tag.imageCount += 1;
					return size;
				}
				return 0;
			});
			tag.imageWeight = _.sum(weights);
			tag.update();
		}

		tag.prepareMemories();

});
riot.tag2('notbutton', '<button class="ba pa2 ph3 bg-white bw1 b--black tc b f5 pointer hover-invert br0">{opts.title}</button>', '', '', function(opts) {
});
riot.tag2('terminal', '<div class="terminal" onclick="{clickFocus}"> <ul class="list pl0 ma0 b--none overflow-y-auto mw-100 fw2" style="max-height: 230px" ref="output"> <li each="{msg, i in messages}" class="mb2"> <p class="ma0 mb2 mw-80 f6 lh-copy">{msg}</p> </li> </ul> <form id="input" ref="input" class="pl3 pb3 w-100" onsubmit="{submitMSG}" autocomplete="off"> $&nbsp;<input type="text" ref="cmd" class="terminal white w-90 input-reset bg-transparent b--none" onkeydown="{handleKey}" autofocus> </form> </div>', 'terminal .terminal,[riot-tag="terminal"] .terminal,[data-is="terminal"] .terminal{ font: 16px/23px Monaco, Courier, font-monospace; } terminal .blink,[riot-tag="terminal"] .blink,[data-is="terminal"] .blink{ animation: blink-empty 1s infinite; border-right: transparent solid 0.5em; } @keyframes blink-empty { 50% {border-right: 0.5em solid #333;} } terminal input:focus,[riot-tag="terminal"] input:focus,[data-is="terminal"] input:focus{ outline: none; } terminal #input,[riot-tag="terminal"] #input,[data-is="terminal"] #input{ position: absolute; bottom: 0; left: 0; }', '', function(opts) {

		var tag = this;
		tag.messages = ["Hello, world. Type help for more information."];;
		tag.commands = [];
		tag.currentKeys = [];
		tag.konamiKeys = [38,38,40,40,37,39,37,39,66,65];
		tag.currentCommand = 0;

		tag.clickFocus = function(){
			tag.refs.cmd.focus();
		}

		tag.submitMSG = function(e) {
			var val = tag.refs.cmd.value;
			if(val.length > 1) {
				tag.commands.push(val);
				tag.currentCommand = tag.commands.length;
				tag.sendCommand(val.toLowerCase());
				tag.refs.cmd.value = "";
				tag.update();
				tag.setScroll();
			}
			e.preventDefault();
		}

		tag.setScroll = function(){
			tag.refs.output.scrollTop = tag.refs.output.scrollHeight;
		}

		tag.sendCommand = function(cmd) {
			tag.currentKeys = [];
			tag.commands.push(cmd);
			tag.checkCommand(cmd);
		}

		tag.clearMessages = function(){
			tag.messages = [];
			tag.update();
		}

		tag.checkCommand = function(cmd) {

			var result = "";
			switch (cmd) {
				case 'matt madeiro':
					result = "That's me!";
					break;
				case 'xenia kulick':
					result = "<3, princess.";
					break;
				case 'tyler owens':
					result = "You silly bitch.";
					break;
				case 'elyse owens':
					result = "SWEET TEA, MOTHER@#$#@!";
					break;
				case 'chelsea vincent':
					result = "WE DON'T HAVE THE SPARE KEYS!";
					break;
				case 'will decker':
					result = "Stupidly tall.";
					break;
				case 'jason cook':
					result = "Stupid sexy Flanders.";
					break;
				case 'adam madeiro':
					result = "Ah, yes. Mi hermano de Mexico.";
					break;
				case 'cheryle madeiro':
					result = "The best woman I know.";
					break;
				case 'john madeiro':
					result = "A goddamn rockstar and a great father.";
					break;
				case 'maggie doyne':
					result = "The most caring person I know, and a genuine inspiration.";
					break;
				case 'david crandall':
					result = "YOU'RE A UNICORN, HARRY";
					break;
				case 'help':
					result = "Type things! All sorts of things. Some things will say funny things, and others will do funny things. Here's something decidedly unfunny, but still useful: type and enter 'clear' (sans quotes) to wipe this display clean.";
					break;
				case 'ls':
					result = "Writing.exe Tools.exe Terminal.exe GuestBook.exe Library.exe Contact.exe Favorites.exe MysteriousFolder";
					break;
				case 'pwd':
					result = '/MadeirOS/users/guest/home';
					break;
				case 'cd mysteriousfolder':
					result = "Nothing in here...yet.";
					break;

				case 'clear':
					tag.clearMessages();
					result = '';
					break;
				default:
					result = "$ " + cmd + ": command not found";
					break;
			}
			tag.messages.push(result);
		}

		tag.checkKonami = function(e) {
			tag.currentKeys.push(e.keyCode);
			if(tag.currentKeys.length === 10) {
				if(_.isEqual(tag.currentKeys, tag.konamiKeys)) {
					tag.konami();
					tag.currentKeys = [];
				}
				else {
					tag.currentKeys = [];
				}
			}
		}

		tag.konami = function(){
			tag.messages.push("Oh, you.");
			tag.refs.cmd.value = "";
		}

		tag.handleKey = function(e) {

			tag.checkKonami(e);
			if(e.keyCode === 38) {
				tag.currentCommand -= 1;
				if(tag.currentCommand < 0) {
					tag.currentCommand = 0;
				}
				tag.refs.cmd.value = typeof tag.commands[tag.currentCommand] != 'undefined' ? tag.commands[tag.currentCommand] : "";
			}
			else if(e.keyCode === 40) {
				tag.currentCommand += 1;
				if(tag.currentCommand >= tag.commands.length) {
					tag.currentCommand = tag.commands.length - 1;
					tag.refs.cmd.value = "";
					return true;
				}
				tag.refs.cmd.value = typeof tag.commands[tag.currentCommand] != 'undefined' ? tag.commands[tag.currentCommand] : "";
			}
		}

});
riot.tag2('tools', '<div class="tools overflow-y-auto cf bg-white" riot-style="max-height: {parent.style.height}px"> <div each="{tool in tools}"> <ul class="list pl0 ma0 cf"> <li class="tool cf w-100 bb b--black-20 pt3"> <a class="link blue pl3 pv3 b f3 f2-ns mt1 mh0 pa0" href="{tool.link}">{tool.title}</a> <p class="ph3 f5">{tool.desc}</p> <p class="gray f6 pl3">{tool.tech}</p> </li> </ul> </div> </div>', '', '', function(opts) {

		var tag = this;
		tag.tools = [
		  {
		    "title": "CSV.me",
		    "desc": "A small (and simple!) in-browser CSV editor.",
		    "tech": "Riot.js, Tachyons",
		    "link": "http://mattmadeiro.com/csvme"
		  }
		];

});
riot.tag2('writing', '<div class="writing overflow-y-auto cf bg-white" riot-style="max-height: {parent.style.height}px"> <div class="pa3"> <p class="ma0 bg-light-gray pa3 f5 lh-copy">This is a curated list &mdash; not everything I\'ve written, but the words worth keeping.</p> </div> <div each="{year, i in articleYears}"> <p class="bg-dijon bt bb b--black-50 white pl3 pv1 ma0 f6 fw2">{year}</p> <ul class="list pl0 ma0 cf"> <li each="{article in articlesByYear[year]}" class="article cf w-100 pv2 pv0-ns bb b--black-20"> <a class="link blue lh-title fl w-100 w-80-ns mb0 pl3 pr3 pv2 pv3-ns f5" href="#writing/{article.slug}">{article.title}</a> <span class="db fl w-100 w-20-ns pb2 pb0-ns pv3-ns pl3 pl0-ns pr3 light-silver f6 tr-ns">{formatDate(article.date)} {year}</span> </li> </ul> </div> </div>', '', '', function(opts) {

		var tag = this;
		tag.articles = [];
		tag.articleYears = [];
		tag.articlesByYear = {};
		tag.monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		var articles = [
		  {
		    "title": "Why I Don't Read Health Blogs Anymore",
		    "date": "2015-01-15",
		    "slug": "health",
		    "category": "none"
		  },
		  {
		    "title": "How to Live a Life Without Fear",
		    "date": "2014-07-31",
		    "slug": "fear",
		    "category": "The Bigger Picture"
		  },
		  {
		    "title": "The Last Stop on the Road",
		    "date": "2014-04-23",
		    "slug": "last-stop",
		    "category": "The Bigger Picture"
		  },
		  {
		    "title": "10 Truths I Hope I Never Forget",
		    "date": "2013-09-09",
		    "slug": "10-truths",
		    "category": "The Bigger Picture"
		  },
		  {
		    "title": "The Secrets of an Endless Optimist",
		    "date": "2012-07-05",
		    "slug": "optimist",
		    "category": "The Bigger Picture"
		  },
		  {
		    "title": "The One Question That Everyone Asks",
		    "date": "2014-06-10",
		    "slug": "one-question",
		    "category": "The Big Damn Trip"
		  },
		  {
		    "title": "Life Lessons From a Stick of Seaweed",
		    "date": "2013-08-01",
		    "slug": "seaweed",
		    "category": "The Big Damn Trip"
		  },
		  {
		    "title": "To the Guy Who Stole My iPod",
		    "date": "2013-08-22",
		    "slug": "ipod",
		    "category": "Lessons Hard Learned"
		  },
		  {
		    "title": "Am I Ready for This?",
		    "date": "2013-04-13",
		    "slug": "ready",
		    "category": "Lessons Hard Learned"
		  },
		  {
		    "title": "You Pack Your Own Bags",
		    "date": "2013-12-05",
		    "slug": "bags",
		    "category": "The Blue Period"
		  },
		  {
		    "title": "A Few Thoughts on Dying",
		    "date": "2013-09-14",
		    "slug": "dying",
		    "category": "The Blue Period"
		  },
		  {
		    "title": "Why I Might Actually be a Phony",
		    "date": "2013-05-17",
		    "slug": "phony",
		    "category": "The Blue Period"
		  },
		  {
		    "title": "I Met My Brother in Mexico",
		    "date": "2014-07-01",
		    "slug": "mexico",
		    "category": "All in the Family"
		  },
		  {
		    "title": "To My Father",
		    "date": "2013-06-07",
		    "slug": "father",
		    "category": "All in the Family"
		  },
		  {
		    "title": "To My Mother",
		    "date": "2013-05-12",
		    "slug": "mother",
		    "category": "All in the Family"
		  },
		  {
		    "title": "What I Wish I'd Known Before Going to College",
		    "date": "2013-10-30",
		    "slug": "college",
		    "category": "The Days of My Youth"
		  },
		  {
		    "title": "8,000 Miles From Who I Used to Be",
		    "date": "2013-07-08",
		    "slug": "miles",
		    "category": "The Days of My Youth"
		  },
		  {
		    "title": "How to Act Like a Kid Again",
		    "date": "2012-07-18",
		    "slug": "kid",
		    "category": "The Days of My Youth"
		  }
		];

		tag.calculateHeight = function(){
			return 500;
		}

		tag.setScroll = function(){
			tag.output.scrollTop = tag.output.scrollHeight;
		}

		tag.formatDate = function(date) {
			return tag.monthNames[new Date(date).getMonth()];
		}

		tag.prepareArticles = function(){
			tag.articles = _.orderBy(articles, 'date', 'desc');
			tag.articlesByYear = _.groupBy(tag.articles, function(a){
				return a.date.split('-')[0];
			});
			tag.articleYears = _.sortBy(_.keys(tag.articlesByYear), function(year){
				return -1 * parseInt(year);
			});
		}

		tag.prepareArticles();

});
