// Good Luck & Have Fun!
//1. przypisze do zmiennej "logo" obrazek GGC
var logo = document.getElementById('ggc-logo');

//2.doda klasę "active" do obiektu kryjącego się pod zmienną "logo"
logo.classList.add('active');

//3.przypisze do zmiennej "name" element
var name1 = document.querySelector('strong');
name1.innerText = 'Aga Bacior';

//4.przypisze do zmiennej "section2" drugą sekcję z zadaniami
var section2 = document.querySelector('[data-set="2"]');

//5.usunie klasę "hidden" z obiektu kryjącego się pod zmienną "section2".
section2.classList.remove('hidden');

//6.ukryje listę zadań z części pierwszej
var section1 = document.querySelector('[data-set="1"]');
section1.classList.add('hidden');

//7.Doda obrazek na stronę
var img = document.createElement('img');
img.src = './gfx/code.png';
var element1 = document.getElementById('code');
element1.appendChild(img);
element1.style.backgroundColor = '#fff';
element1.firstChild.style.marginLeft = '-510px';

//8.doda na stronę element <button>, który posiada jakiś tekst.

var btn1 = document.createElement('button');
btn1.innerText = 'Kliknij tutaj';
section2.appendChild(btn1);

btn1.addEventListener('click', function(){
	trick();
});

var btn2 = document.createElement('button');
btn2.innerText = 'Kliknij tu';
section2.appendChild(btn2);

btn2.addEventListener('click', function(){
	iamdone();
});


