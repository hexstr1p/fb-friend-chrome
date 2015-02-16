/*
* The original credit and framework for this goes to zhanghan (on github).
* Myself, claudius (or lunete on github), is just modifying it while steadily learning javascript.
*/

'use strict';

// This get my code runs every 10 ms. So that it can catch any changes happened on the uesr's page.
var myVar = setInterval(function() {nameUpdate()}, 10);
	//setInterval is something already in javascript; it executes a function every so many seconds
	//myTimer() hasn't been declared yet, but it will be below -- javascript lets you do weird stuff like that

var changed_names = new Object(); //this is declaring an object called changed_names, it will store all the changed names

function nameUpdate() {
	// Change names in chat list  /********************************/
	var friend_names = document.getElementsByClassName('_55lr');
	//the document. calls on the document object model of html
	//it grabs the elements in the _55lr part of an html page
	//the whole document.getElementsByClassName is a built in part of javascript

	var index;
	for (index = 0; index < friend_names.length; ++index)  {

		// This makes sure it won't change names that are already on the list of cooler ones
		if (handles.indexOf(friend_names[index].textContent) != -1) {
			//.indexOf() returns the position of the first occurance of a specified value in a string
			//.textContent sets or returns the text content of the specified node, and all of its descendants
			continue;
		}

		// If I have changed target name before, it should be on the hash table. So a hash table lookup is necessary. If there is a match, I have to change target name to the same as the one in hash table. This is to guarentee consistency.
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		}
		else {
			var random_number = Math.floor(Math.random() * handles.length);
			changed_names[friend_names[index].textContent] = handles[random_number];
			friend_names[index].textContent = handles[random_number];
		}


	}

	/***********************************************************************/

	// Change names in chat window
	friend_names = document.getElementsByClassName('titlebarText');
	//the respective part of the part that has the chat window
	for (index = 0; index < friend_names.length; ++index)  {
		if (handles.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		}
		else {
			var random_number = Math.floor(Math.random() * handles.length);
			changed_names[friend_names[index].textContent] = handles[random_number];
			friend_names[index].textContent = handles[random_number];
		}
	}

	/***********************************************************************/

	// Change names in comments
	var temp_names = document.querySelectorAll('span');
	friend_names = []; //resetting friend_names here because there is now temp_names
	var comments_pattern = new RegExp("\\$author"); //hits the author line of the comments
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if(comments_pattern.test(temp_names[i].getAttribute('data-reactid'))) {
			//.test() returns true if it finds a match in a string
			//.getAttribtue returns the value of the attribute with the specified name
			friend_names.push(temp_names[i]);
			//.push() adds new items to the end of an array and returns the new length
		}
	};

	//now to actually change them
	for (index = 0; index < friend_names.length; ++index)  {
		if (handles.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		}
		else {
			var random_number = Math.floor(Math.random() * handles.length);
			changed_names[friend_names[index].textContent] = handles[random_number];
			friend_names[index].textContent = handles[random_number];
		}
	}

	/***********************************************************************/

	// Change names in posts
	temp_names = document.querySelectorAll('a');
	friend_names = [];
	var posts_pattern = new RegExp("user.php");
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if((posts_pattern.test(temp_names[i].getAttribute('data-hovercard')))
		&& !temp_names[i].hasAttribute('aria-hidden')) {
			friend_names.push(temp_names[i]);
		}
	};

	for (index = 0; index < friend_names.length; ++index)  {
		if (handles.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		}
		else {
			var random_number = Math.floor(Math.random() * handles.length);
			changed_names[friend_names[index].textContent] = handles[random_number];
			friend_names[index].textContent = handles[random_number];
		}
	}

	/***********************************************************************/

	// Change names in hovercard!!!!!!
	friend_names = document.getElementsByClassName('ellipsis');
	for (index = 0; index < friend_names.length; ++index)  {
		if (handles.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		}
		else {
			var random_number = Math.floor(Math.random() * handles.length);
			changed_names[friend_names[index].textContent] = handles[random_number];
			friend_names[index].textContent = handles[random_number];
		}
	}

	/***********************************************************************/

	// Change names in profile homepage title
	friend_names = document.getElementsByClassName('_8_2');
	for (index = 0; index < friend_names.length; ++index)  {
		if (handles.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		}
		else {
			var random_number = Math.floor(Math.random() * handles.length);
			changed_names[friend_names[index].textContent] = handles[random_number];
			friend_names[index].textContent = handles[random_number];
		}
	}
} //HERE the function nameUpdate() ends

//the names are just from a bunch of video games and other weeaboo stuff I love
//also because I live under a heavy rock and know no celeberties's names
var handles = ['Travis Touchdown',
'Sylvia Christel',
'Henry Cooldown',
'Holly Summers',
'Shinobu Jacobs',
'Skelter Helter',
'Nathan Copeland',
'Kimmy Howell',
'Margaret Moonlight',
'Alice Twilight',
'Thunder Ryu',
'Ruby Rose',
'Weiss Schnee',
'Blake Belladonna',
'Yang Xiao Long',
'Juane Arc',
'Nora Valkyrie',
'Pyrrha Nikos',
'Lie Ren',
'Cardin Winchester',
'Russel Thrush',
'Dove Bronzewing',
'Sky Lark',
'Coco',
'Fox',
'Velvet Scarlatina',
'Yatsuhashi',
'Sun Wukong',
'Scarlet',
'Sage',
'Neptune Vasilias',
'Ozpin',
'Glynda Goodwitch',
'Peter Port',
'Bartholomew Oobleck',
'James Ironwood',
'Penny',
'Zwei',
'Qrow',
'Taiyang Xiao Long',
'Tukson',
'Summer Rose',
'Winter Schee',
'Raven Branwen',
'Roman Torchwick',
'Neo',
'Cinder Fall',
'Mercury Black',
'Emerald Sustrai',
'Hei Xiong',
'Melanie',
'Militades Malachite',
'Adam Taurus',
'Beowulf',
'Ursa',
'Taijitu',
'Goliath',
'Iron Tarkus',
'Solaire of Astora',
'Trusty Patches',
'Oscar of Astora',
'Priscilla',
'Seath',
'Gwyn',
'Gwynevere',
'Gwyndolin',
'Big Hat Logan',
'Ingward',
'Laurentius',
'Quelana',
'Eingyi',
'Petrus of Thorolund',
'Reah of Thorolund',
'Anastacia',
'Frampt',
'Andre',
'Lautrec',
'Oswald of Carim',
'Alvina',
'Shiva of the East',
'Domhnall of Zena',
'Quelaag',
'Quelaan',
'Siegmeyer of Catarina',
'Kaathe',
'Vamos',
'Sieglinde of Catarina',
'Havel the Rock',
'Prince Ricard',
'Maneater Mildred',
'King Jeremiah',
'Paladin Leeroy',
'Witch Beatrice',
'Benhart of Jugo',
'Lenigrast',
'Captain Drummond',
'Creighton the Wanderer',
'Darkdiver Grandahl',
'Lucatiel of Mirrah',
'Licia of Lindeldt',
'Mild-Mannered Pate',
'Venegral',
'Sweet Shalquoir',
'Tichy Gren',
'Gavlan',
'Rosabeth of Melfia',
'Chloanne',
'Straid of Olaphis',
'Ornifex',
'Shanalotte',
'Ostrava of Boletaria',
'Yurt',
'Witch Beatrice',
'Yuria',
'Selen Vinland',
'Garl Vinland',
'Maiden Astraea',
];
