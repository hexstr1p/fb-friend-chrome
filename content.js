/*
* The original credit for this goes to zhanghan.
* Myself, claudius (or lunete on github), just modified it.
*/

'use strict';

// This get my code runs every 10 ms. So that it can catch any changes happened on the uesr's page.
var myVar = setInterval(function () {myTimer()}, 10);

// This is a hash table to store all the names I have changed.
var changed_names = new Object();

function myTimer() {
	// Change names in chat list
	var friend_names = document.getElementsByClassName('_55lr');

	var index;
	for (index = 0; index < friend_names.length; ++index)  {
		// This makes sure I won't change names that are already on my celebreits list
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		// If I have changed target name before, it should be on the hash table. So a hash table lookup is necessary. If there is a match, I have to change target name to the same as the one in hash table. This is to guarentee consistency.
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}


	}

	/***********************************************************************/

	// Change names in chat window
	friend_names = document.getElementsByClassName('titlebarText');
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}

	/***********************************************************************/

	// Change names in comments
	var temp_names = document.querySelectorAll('span');
	friend_names = [];
	var comments_pattern = new RegExp("\\$author");
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if(comments_pattern.test(temp_names[i].getAttribute('data-reactid'))) {
			friend_names.push(temp_names[i]);
		}
	};

	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
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
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}

	/***********************************************************************/

	// Change names in hovercard!!!!!!
	friend_names = document.getElementsByClassName('ellipsis');
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}

	/***********************************************************************/

	// Change names in profile homepage title
	friend_names = document.getElementsByClassName('_8_2');
	for (index = 0; index < friend_names.length; ++index)  {
		if (celebreties.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * celebreties.length);
			changed_names[friend_names[index].textContent] = celebreties[random_number];
			friend_names[index].textContent = celebreties[random_number];
		}
	}
}

//the names are just from a bunch of video games and other weeaboo stuff I love
//also because I live under a heavy rock and know no celebreties's names
//#noshame
var celebreties = ['Travis Touchdown',
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
