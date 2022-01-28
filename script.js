
const changeUserBtn = document.querySelector("#changeUserBtn")
const addFavoriteReadBtn = document.querySelector("#addFavoriteReadBtn");
const addFavoriteMovieBtn = document.querySelector("#addFavoriteMovieBtn");
const addToReadBtn = document.querySelector("#addToReadBtn");
const addToWatchBtn = document.querySelector("#addToWatchBtn");
const viewBox = document.querySelector('.viewBox');
const favoriteReadsList = document.querySelector('#favoriteReads');
const favoriteMoviesList = document.querySelector('#favoriteMovies');
const toReadList = document.querySelector('#toRead');
const toWatchList = document.querySelector('#toWatch');

addFavoriteReadBtn.addEventListener('click', addFavoriteReadForm);
addToReadBtn.addEventListener('click', addToReadForm);
addFavoriteMovieBtn.addEventListener('click', addFavoriteMovieForm);
addToWatchBtn.addEventListener('click', addToWatchForm);
changeUserBtn.addEventListener('click', () => alert(`until this project goes live, `+
	`the "logout"feature\nis unavailable and user ebs will serve as the demo.`));

let favoriteReads = [];
let favoriteMovies = [];
let toRead = [];
let toWatch = [];


function addFavoriteReadForm(){

	form = new BookForm();

	form.formTitle.textContent = 'Add to Favorite Reads List';

	let addFavoriteReadBtn = document.createElement('button');
	addFavoriteReadBtn.textContent = 'Add to Favorite Reads';
	addFavoriteReadBtn.addEventListener('click', function() {addFavoriteRead(form)});
	form.formBtnCointainer.appendChild(addFavoriteReadBtn)

	viewBox.textContent = '';
	viewBox.appendChild(form.form);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';
}

function addToReadForm() {

	form = new BookForm();

	form.formTitle.textContent = 'Add to Reading List';

	let addToReadBtn = document.createElement('button');
	addToReadBtn.textContent = 'Add to Reading List';
	addToReadBtn.addEventListener('click', function() {addToRead(form)});
	form.formBtnCointainer.appendChild(addToReadBtn)

	viewBox.textContent = '';
	viewBox.appendChild(form.form);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';
}

function BookForm() {

	this.form = document.createElement('div');
	this.form.classList.add('formContainer');

	this.formTitle = document.createElement('div');
	this.formTitle.setAttribute('id','formTitle');
	this.form.appendChild(this.formTitle);

	this.titleLabel = document.createElement('label');
	this.titleLabel.setAttribute('for','titleInput');
	this.titleLabel.textContent = 'Title of Book: ';
	this.titleInput = document.createElement('input');
	this.titleInput.setAttribute('id','titleInput');
	this.titleInput.setAttribute('placeholder','title ...');
	this.form.appendChild(this.titleLabel);
	this.form.appendChild(this.titleInput);

	this.authorLabel = document.createElement('label');
	this.authorLabel.setAttribute('for','directorInput');
	this.authorLabel.textContent = 'Authored By: ';
	this.authorInput = document.createElement('input');
	this.authorInput.setAttribute('id','authorInput')
	this.authorInput.setAttribute('placeholder','author ...');
	this.form.appendChild(this.authorLabel);
	this.form.appendChild(this.authorInput);

	this.pagesLabel = document.createElement('label');
	this.pagesLabel.setAttribute('for','pagesInput');
	this.pagesLabel.textContent = 'Pages: ';
	this.pagesInput = document.createElement('input');
	this.pagesInput.setAttribute('id','pagesInput');
	this.pagesInput.setAttribute('placeholder','book page count ....');
	this.form.appendChild(this.pagesLabel);
	this.form.appendChild(this.pagesInput);

	this.yearLabel = document.createElement('label');
	this.yearLabel.setAttribute('for','yearInput');
	this.yearLabel.textContent = 'Year Published: ';
	this.yearInput = document.createElement('input');
	this.yearInput.setAttribute('id','yearInput');
	this.yearInput.setAttribute('placeholder','year ... ');
	this.form.appendChild(this.yearLabel);
	this.form.appendChild(this.yearInput);

	this.commentaryLabel = document.createElement('label');
	this.commentaryLabel.setAttribute('for','commentaryInput');
	this.commentaryLabel.textContent = 'Commentary: ';
	this.commentaryInput = document.createElement('textarea');
	this.commentaryInput.setAttribute('id','commentaryInput');
	this.commentaryInput.setAttribute('rows','12');
	this.commentaryInput.setAttribute('cols','60');
	this.commentaryInput.setAttribute('placeholder','tell us about this book ...');
	this.form.appendChild(this.commentaryLabel);
	this.form.appendChild(this.commentaryInput);

	this.formBtnCointainer = document.createElement('div');
	this.formBtnCointainer.classList.add('btnCointainer');
	this.cancelBtn = document.createElement('button');
	this.cancelBtn.textContent = 'CANCEL';
	this.cancelBtn.addEventListener('click', resetViewBox);
	this.formBtnCointainer.appendChild(this.cancelBtn);
	this.form.appendChild(this.formBtnCointainer);

}

function addFavoriteMovieForm() {
	form = new MovieForm();

	form.formTitle.textContent = 'Add to Favorite Movies';

	let addFavoriteMovieBtn = document.createElement('button');
	addFavoriteMovieBtn.textContent = 'Add to Favorite Movies';
	addFavoriteMovieBtn.addEventListener('click', function() {addFavoriteMovie(form)});
	form.formBtnCointainer.appendChild(addFavoriteMovieBtn)

	viewBox.textContent = '';
	viewBox.appendChild(form.form);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';
}


function addToWatchForm() {
	form = new MovieForm();

	form.formTitle.textContent = 'Add Movie to Watch List';

	let addToWatchBtn = document.createElement('button');
	addToWatchBtn.textContent = 'Add to Watch List';
	addToWatchBtn.addEventListener('click', function() {addToWatch(form)});
	form.formBtnCointainer.appendChild(addToWatchBtn)

	viewBox.textContent = '';
	viewBox.appendChild(form.form);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';
}

function MovieForm() {

	this.form = document.createElement('div');
	this.form.classList.add('formContainer');

	this.formTitle = document.createElement('div');
	this.formTitle.setAttribute('id','formTitle')
	this.form.appendChild(this.formTitle);

	this.titleLabel = document.createElement('label');
	this.titleLabel.setAttribute('for','titleInput');
	this.titleLabel.textContent = 'Title of Movie: ';
	this.titleInput = document.createElement('input');
	this.titleInput.setAttribute('id','titleInput');
	this.titleInput.setAttribute('placeholder','title ...');
	this.form.appendChild(this.titleLabel);
	this.form.appendChild(this.titleInput);

	this.directorLabel = document.createElement('label');
	this.directorLabel.setAttribute('for','directorInput')
	this.directorLabel.textContent = 'Directed By: ';
	this.directorInput = document.createElement('input');
	this.directorInput.setAttribute('id','directorInput')
	this.directorInput.setAttribute('placeholder','director ...')
	this.form.appendChild(this.directorLabel);
	this.form.appendChild(this.directorInput);

	this.yearLabel = document.createElement('label');
	this.yearLabel.setAttribute('for','yearInput')
	this.yearLabel.textContent = 'Year Released: ';
	this.yearInput = document.createElement('input');
	this.yearInput.setAttribute('id','yearInput')
	this.yearInput.setAttribute('placeholder','year ...')
	this.form.appendChild(this.yearLabel);
	this.form.appendChild(this.yearInput);

	this.commentaryLabel = document.createElement('label');
	this.commentaryLabel.setAttribute('for','commentaryInput')
	this.commentaryLabel.textContent = 'Commentary: ';
	this.commentaryInput = document.createElement('textarea');
	this.commentaryInput.setAttribute('id','commentaryInput')
	this.commentaryInput.setAttribute('rows','12');
	this.commentaryInput.setAttribute('cols','60');
	this.commentaryInput.setAttribute('placeholder','tell us about this movie ...');
	this.form.appendChild(this.commentaryLabel);
	this.form.appendChild(this.commentaryInput);

	this.formBtnCointainer = document.createElement('div');
	this.formBtnCointainer.classList.add('btnCointainer');
	this.cancelBtn = document.createElement('button');
	this.cancelBtn.textContent = 'CANCEL';
	this.cancelBtn.addEventListener('click', resetViewBox);
	this.formBtnCointainer.appendChild(this.cancelBtn);
	this.form.appendChild(this.formBtnCointainer);

}


function addToRead(form) {
  title = form.titleInput.value;
  author = form.authorInput.value;
  pages = form.pagesInput.value;
  year = form.yearInput.value;
  commentary = form.commentaryInput.value;
  read = 'no';

  movie = new Book (title, author, pages, year, commentary, read);
  toRead.push(movie);
  displayListItems();
  resetViewBox();

  alert('your entry has been added');
}

function addToWatch (form) {

  title = form.titleInput.value;
  director = form.directorInput.value;
  year = form.yearInput.value;
  commentary = form.commentaryInput.value;
  watched = 'no';

  movie = new Movie (title, director, year, commentary, watched);
  toWatch.push(movie);
  displayListItems();
  resetViewBox()

  alert('your entry has been added');
}

function addFavoriteMovie (form) {

  title = form.titleInput.value;
  director = form.directorInput.value;
  year = form.yearInput.value;
  commentary = form.commentaryInput.value;
  watched = 'yes';

  movie = new Movie (title,director, year, commentary, watched);
  favoriteMovies.push(movie);
  displayListItems();
  resetViewBox();

  alert('your entry has been added');
}


function Movie (title, director, year, commentary, watched) {

	this.title = title;
	this.director = director;
	this.year = year;
	this.commentary = commentary;
	this.watched = watched
}

function Book (title, author, pages, year, commentary, read) {

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.year = year;
	this.commentary = commentary;
	this.read = read;
}

function addFavoriteRead (form) {
  
  title = form.titleInput.value;
  author = form.authorInput.value;
  pages = form.pagesInput.value;
  year = form.yearInput.value;
  commentary = form.commentaryInput.value;
  read = 'yes';

  movie = new Book (title, author, pages, year, commentary, read);
  favoriteReads.push(movie);
  displayListItems();
  resetViewBox()

  alert('your entry has been added');
}


function displayListItems() {

	favoriteReadsList.textContent = '';
	favoriteReads.forEach(book => {
	item = document.createElement('button');
	item.setAttribute('tabindex','0');
	item.addEventListener('click', function () {displayBook(book)});
	item.textContent = book.title;
	favoriteReadsList.appendChild(item)
	});

	favoriteMoviesList.textContent = '';
	favoriteMovies.forEach(movie => {
	item = document.createElement('button');
	item.setAttribute('tabindex','0');
	item.addEventListener('click', function () {displayMovie(movie)});
	item.textContent = movie.title;
	favoriteMoviesList.appendChild(item)
	});

	toWatchList.textContent = '';
	toWatch.forEach(movie => {
	item = document.createElement('button');
	item.setAttribute('tabindex','0');
	item.addEventListener('click', function () {displayMovie(movie)});
	item.textContent = movie.title;
	toWatchList.appendChild(item)
	});

	toReadList.textContent = '';
	toRead.forEach(book => {
	item = document.createElement('button');
	item.setAttribute('tabindex','0');
	item.addEventListener('click', function () {displayBook(book)});
	item.textContent = book.title;
	toReadList.appendChild(item)
	});

}

function displayMovie(movie) {

	display = document.createElement('div');
	
	title = document.createElement('p');
	title.classList.add('displayTitle');
	title.textContent = movie.title
	display.appendChild(title)

	director = document.createElement('p');
	director.textContent = `Directed by ${movie.director}`;
	display.appendChild(director);

	year = document.createElement('p');
	year.textContent = `Year Released: ${movie.year}`;
	display.appendChild(year);

	commentary = document.createElement('p');
	commentary.textContent = `${movie.commentary}`;
	display.appendChild(commentary);

	btnCointainer = document.createElement('div');
	btnCointainer.classList.add('btnCointainer');
	
	removeBtn = document.createElement('button');
	removeBtn.textContent = 'Remove this Movie';
	removeBtn.addEventListener('click', function() {removeMovie(movie)});
	btnCointainer.appendChild(removeBtn);

	editBtn = document.createElement('button');
	editBtn.textContent = 'edit entry';
	editBtn.addEventListener('click', function() {editMovie(movie)});
	btnCointainer.appendChild(editBtn);

	if (movie.watched === 'no') {
		moveToFavoriteBtn = document.createElement('button');
		moveToFavoriteBtn.textContent = 'Move to Favorite Movies';
		moveToFavoriteBtn.addEventListener('click', function() {moveToFavMovies(movie)});
		btnCointainer.appendChild(moveToFavoriteBtn);

	};

	viewBox.textContent = '';

	viewBox.appendChild(display);
	viewBox.appendChild(btnCointainer);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';



}

function displayBook(book) {

	display = document.createElement('div');
	
	title = document.createElement('p');
	title.classList.add('displayTitle');
	title.textContent = book.title
	display.appendChild(title)

	author = document.createElement('p');
	author.textContent = `Written by ${book.author}`;
	display.appendChild(author);

	pages = document.createElement('p');
	pages.textContent = `${book.pages} pages`
	display.appendChild(pages);

	year = document.createElement('p');
	year.textContent = `Year Published: ${book.year}`;
	display.appendChild(year);

	commentary = document.createElement('p');
	commentary.textContent = `${book.commentary}`;
	display.appendChild(commentary);

	btnCointainer = document.createElement('div');
	btnCointainer.classList.add('btnCointainer');
	
	removeBtn = document.createElement('button');
	removeBtn.textContent = 'Remove this Book';
	removeBtn.addEventListener('click', function() {removeBook(book)});
	btnCointainer.appendChild(removeBtn);

	editBtn = document.createElement('button');
	editBtn.textContent = 'edit entry';
	editBtn.addEventListener('click', function() {editBook(book)});
	btnCointainer.appendChild(editBtn);

	if (book.read === 'no') {
		moveToFavoriteBtn = document.createElement('button');
		moveToFavoriteBtn.textContent = 'Move to Favorite Reads';
		moveToFavoriteBtn.addEventListener('click', function() {moveToFavReads(book)});
		btnCointainer.appendChild(moveToFavoriteBtn);
	};


	viewBox.textContent = '';

	viewBox.appendChild(display);
	viewBox.appendChild(btnCointainer);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';

}


function removeBook(book) {

	confirmation = confirm('are you sure you want to remove this book?');
	if (confirmation !== true) {
		return;
	}

	if (book.read === 'yes') {
		index = favoriteReads.findIndex((item) => item.title === book.title);
		favoriteReads.splice(index, 1);
	
	} else {
		index = toRead.findIndex((item) => item.title === book.title);
		toRead.splice(index, 1);
	}

	resetViewBox();
	displayListItems();
}

function removeMovie(movie) {

	confirmation = confirm('are you sure you want to remove this movie?');
	if (confirmation !== true) {
		return;
	}

	if (movie.watched === 'yes') {
		index = favoriteMovies.findIndex((item) => item.title === movie.title);
		favoriteMovies.splice(index, 1);
	
	} else {
		index = toWatch.findIndex((item) => item.title === movie.title);
		toWatch.splice(index, 1);
	}

	resetViewBox();
	displayListItems();
}

function moveToFavMovies(movie) {

	confirmation = confirm('are you sure you want to move this movie to Favorite Movies?'+
		'\nit will be removed from the To Watch List.');
	if (confirmation !== true) {
		return;
	}

	movie.watched = 'yes';
	index = toWatch.findIndex((item) => item.title === movie.title);
	favoriteMovies.push(toWatch[index]);
	toWatch.splice(index, 1);
	displayListItems();
	resetViewBox();
}

function moveToFavReads(book) {

	confirmation = confirm('are you sure you want to move this book to Favorite Reads?'+
		'\nit will be removed from the To Read List.');
	if (confirmation !== true) {
		return;
	}

	book.read = 'yes';
	index = toRead.findIndex((item) => item.title === book.title);
	favoriteReads.push(toRead[index]);
	toRead.splice(index, 1);
	displayListItems();
	resetViewBox();
}	

function resetViewBox() {

	viewBox.textContent = '~ View Box ~';
	viewBox.style.height = '500px';
	viewBox.style.width = '900px';
}

function editBook(book) {

	form = new BookForm();

	form.formTitle.textContent = `EDIT: ${book.title}`;

	form.titleInput.value = book.title;
	form.authorInput.value = book.author;
	form.pagesInput.value = book.pages;
	form.yearInput.value = book.year;
	form.commentaryInput.value = book.commentary;

	confirmBtn = document.createElement('button');
	confirmBtn.textContent = 'Confirm Changes';
	confirmBtn.addEventListener('click', function() {confirmBookEdit(form, book)});
	form.formBtnCointainer.appendChild(confirmBtn);

	viewBox.textContent = '';
	viewBox.appendChild(form.form);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';

}

function editMovie(movie) {

	form = new MovieForm();

	form.formTitle.textContent = `EDIT: ${movie.title}`;

	form.titleInput.value = movie.title;
	form.directorInput.value = movie.director;
	form.yearInput.value = movie.year;
	form.commentaryInput.value = movie.commentary;

	confirmBtn = document.createElement('button');
	confirmBtn.textContent = 'Confirm Changes';
	confirmBtn.addEventListener('click', function() {confirmMovieEdit(form, movie)});
	form.formBtnCointainer.appendChild(confirmBtn);

	viewBox.textContent = '';
	viewBox.appendChild(form.form);
	viewBox.style.height = 'auto';
	viewBox.style.width = 'auto';

}

function confirmMovieEdit(form, movie) {

	movie.title = form.titleInput.value;
	movie.director = form.directorInput.value;
	movie.year = form.yearInput.value;
	movie.commentary = form.commentaryInput.value;

	viewBox.textContent = '';
	displayMovie(movie);
}

function confirmBookEdit(form, book) {

	book.title = form.titleInput.value;
	book.author = form.authorInput.value;
	book.year = form.yearInput.value;
	book.commentary = form.commentaryInput.value;

	viewBox.textContent = '';
	displayBook(book);
}

///////////////////////// HARD CODED BOOK AND MOVIE ENTRIES ////////////////////////



MementoCommentary = `Leonard (Guy Pearce) is tracking down the man who raped and murdered his wife. The difficulty, however, of locating his wife's killer is compounded by the fact that he suffers from a rare, untreatable form of memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.`;
MMFRcommentary = `With the world becoming a desert wasteland following a societal collapse from warfare over resources, a survivor named Max Rockatansky is captured and taken to Immortan Joe's Citadel by the War Boys, an army led by Joe. Max is imprisoned and used as a "blood bag" for a sick War Boy called Nux. Meanwhile, Imperator Furiosa, one of Joe's lieutenants, is sent in her armoured "War Rig" to extract gasoline and ammunition. When Joe realises that his five wives are fleeing with her, he leads his army in pursuit of Furiosa, calling on the aid of nearby Gas Town and the Bullet Farm.`;
TUAcommentary = `Since its publication in 1977, The Unsettling of America has been recognized as a classic of American letters. In it, Wendell Berry argues that good farming is a cultural and spiritual discipline. Today’s agribusiness, however, takes farming out of its cultural context and away from families. As a result, we as a nation are more estranged from the land―from the intimate knowledge, love, and care of it.

Sadly, his arguments and observations are more relevant than ever. Although “this book has not had the happy fate of being proved wrong,” Berry writes, there are people working “to make something comely and enduring of our life on this earth.” Wendell Berry is one of those people, writing and working, as ever, with passion, eloquence, and conviction.`;

DNUcommentary = `Physician and biochemist Cate Shanahan, MD, examined diets around the world known to help people live longer, healthier lives - diets like the Mediterranean, Okinawa, and Blue Zone - and identified the four common nutritional habits, developed over millennia, that unfailingly produce strong, healthy, intelligent children and active, vital elders generation after generation. These four nutritional strategies - fresh food, fermented and sprouted foods, meat cooked on the bone, and organ meats - form the basis of what Dr. Cate calls the Human Diet.

Rooted in her experience as an elite athlete who used traditional foods to cure her own debilitating injuries, and combining her research with the latest discoveries in the field of epigenetics, Dr. Cate shows how all calories are not created equal; food is information that directs our cellular growth. Our family history does not determine our destiny: What you eat and how you live can alter your DNA in ways that affect your health and the health of your future children.`;

TMcommentary = `The Metamorphosis is a novella by Franz Kafka, first published in 1915. It has been cited as one of the seminal works of fiction of the 20th century and is studied in colleges and universities across the Western world. The story begins with a traveling salesman, Gregor Samsa, waking to find himself transformed (metamorphosed) into a large, monstrous insect-like creature. The cause of Samsa's transformation is never revealed, and Kafka himself never gave an explanation. The rest of Kafka's novella deals with Gregor's attempts to adjust to his new condition as he deals with being burdensome to his parents and sister, who are repulsed by the horrible, verminous creature Gregor has become.`;

SScommentary = `In this fascinating document, one of Japan's best known-and controversial-writers created what might be termed a new literary form. It is new because it combines elements of many existing types of writing, yet in the end fits into none of them.

At one level, it may be read as an account of how a puny, bookish boy discovered the importance of his own physical being; the "sun and steel" of the title are themselves symbols respectively of the cult of the open air and the weights used in bodybuilding. At another level, it is a discussion by a
major novelist of the relation between action and art, and his own highly polished art in particular. More personally, it is an account of one individual's search for identity and self-integration. Or again, the work could be seen as a demonstration of how an intensely individual preoccupation can
be developed into a profound philosophy of life.

All these elements are woven together by Mishima's complex yet polished and supple style. The confession and the self-analysis, the philosophy and the poetry combine in the end to create something that is in itself perfect and self-sufficient. It is a piece of literature that is as carefully
fashioned as Mishima's novels, and at the same time provides an indispensable key to the understanding of them as art.

The road Mishima took to salvation is a highly personal one. Yet here, ultimately, one detects the unmistakable tones of a self transcending the particular and attaining to a poetic vision of the universal. The book is therefore a moving document, and is highly significant as a pointer to the future
development of one of the most interesting novelists of modern times.`;

TGPHcommentary = `With this stunning collection of Hafiz’s most intimate poems, Ladinsky has succeeded brilliantly in presenting the essence of one of Islam’s greatest poetic and religious voices. Each line of The Gift imparts the wonderful qualities of this master Sufi poet and spiritual teacher: encouragement, an audacious love that touches lives, profound knowledge, generosity, and a sweet, playful genius unparalleled in world literature.`;


let MMFR = new Movie('Mad Max Fury Road', 'George Miller', '2015', MMFRcommentary, 'yes');
favoriteMovies.push(MMFR);

let ROK = new Movie('Lord of The Rings: Return of the King', 'Peter Jackson', '2003', 'the best LOTR movie', 'yes');
favoriteMovies.push(ROK);

let Memento = new Movie('Memento','David Julyan', '2001', MementoCommentary,'no');
toWatch.push(Memento);

let TGPH = new Book('The Gift: Poems by Hafiz', 'Daniel Ladisnky', '333','1999', TGPHcommentary,'yes');
favoriteReads.push(TGPH);

let TUA = new Book('The Unsettling of America','Wendell Berry','234','1977',TUAcommentary,'no');
toRead.push(TUA);

let DN = new Book('Deep Nutrition', 'Catherine Shanahan', '512','2017', DNUcommentary,'no');
toRead.push(DN);

let TM = new Book('The Metamorphosis', 'Franz Kafka', '100', '1915',TMcommentary, 'no');
toRead.push(TM);

let SS = new Book('Sun and Steel', 'Yukio Mishima', '108', '1968',SScommentary, 'no');
toRead.push(SS);


displayListItems();