var planets = ['Mercury','Venus','Earth','Mars','Jupeter','Saturn','Uranus','Neptune','Pluto'];
var translations = ['translate(1650px, -550px) scale(8.5)','translate(1720px, -350px) scale(8)',
 'translate(1450px, 0px) scale(5.2)','translate(940px, -420px) scale(3.75)','translate(685px, -370px) scale(2)',
 'translate(250px, -80px) scale(1.3)','translate(65px, -40px) scale(4)','translate(-80px, -500px) scale(6)',
 'translate(-130px, -180px) scale(6)'];
planets.forEach(function(planet, index) {
  var element = document.querySelector('.' + planet);
  element.style.transition = 'transform 3.7s';
  element.addEventListener('click', (function() {
    var isClicked = false;
    return function() {
      if (!isClicked) {
        this.style.transform = translations[index];
        this.style.zIndex = '999';
        isClicked = true;
      } else {
        this.style.transform = '';
        this.style.zIndex = '';
        isClicked = false;
}};})());});
var overlay = document.querySelector('.overlay');
planets.forEach(function(planet, index){
  var element = document.querySelector('.' + planet);
  element.style.transition ='transform 3.5s';
  element.addEventListener('click', (function(){
    var isClicked = false;
    return function(){
      if (!isClicked){
        this.style.transform = translations[index];
        this.style.zIndex = '800';
        overlay.classList.add('active');
        isClicked = true;
      } else{
        this.style.transform = '';
        this.style.zIndex = '';
        overlay.classList.remove('active');
        isClicked = false;
}};})());});

var text = document.querySelector('.text');
var texts = ['<b>Mercury : عطارد</b></br><b>عطارد کوچک‌ترین سیاره منظومه شمسی است و نزدیک‌ترین سیاره به خورشید قرار دارد. سرعت عطارد بسیار بالاست، به طوری که هر ۸۸ روز، یک بار دور خوردشید میچرخد. از این رو، عطارد گریزپا است و به همین دلیل ایرانیان باستان آن را (تیر) نامیده‌اند</b><br><b>سطح عطارد پر از سنگ‌ و خشکی است. عطارد دارای دمای بسیار بالا در روز و بسیار پایین در شب است. عطارد قمر ندارد و سطح رو به خورشید آن بسیار داغ و رویه‌ی پشت به خورشید آن بسیار سرد است</b><br><b>عطارد گسترده‌ترین تغییرات دمایی را نسبت به سایر سیاره‌های منظومه‌ی شمسی تجربه می‌کند. دمای سطح در روز به حدود 427  درجه‌ی سلسیوس می‌رسد، در حالی که در شب، دما به 180 درجه‌ی سلسیوس زیر صفر کاهش می‌یابد. دمای میانگین سیاره‌ی عطارد حدود 167 درجه‌ی سلسیوس است. </b><br><b>عطارد دارای جَو رقیق است.  ترکیب جو عطارد شامل ملکول‌های اکسیژن(O₂ )، سدیم(Na)، هیدروژن(H₂)، هلیوم(He) و مقدار ناچیزی آرگون(Ar)، نیتروژن(N₂)، کربن دی‌اکسید(CO₂)، بخار آب(O₂)، گزنون(Xe)، کریپتون(Kr) و نئون(Ne) است</b><br><b>چرخش عطارد با گرفتاری در قفل جزر و مدی و رزنانس مداری ۳:۲ با خورشید، در سامانه خورشیدی، یک چرخش سیاره‌ای بی‌همتاست. این سیاره به ازای هر دو بار گردش به دور خورشید، دقیقاً سه‌بار به دور خود می‌چرخد . پس در این سیاره هر دو سال ،سه روز آن سیاره می‌باشد. </b><br><b>گرانش عطارد با واحد نیوتن نشان داده می‌شود. این نیروی گرانشی که عطارد به آن دچار است، حدود 3.7  نیوتن بر کیلوگرم است. این مقدار نیروی گرانشی کمتر از نیروی گرانشی در سطح زمین است. </b>',
  
'<i>Venus : زهره(ونوس یا ناهید)</i><br><i>سیاره ونوس، که در فارسی به آن بیدُخت و بیلفت نیز گفته می‌شود، دومین سیاره و نزدیکترین همسایه سیاره‌ای ما است. ونوس از نظر ساختار و اندازه، مشابه زمین است و در جهت مخالف بیشتر سیارات، به آرامی می‌چرخد.</i><br><i>ونوس سیاره‌ای است که فاقد اقیانوس است و توسط جو بسیار سنگینی احاطه شده است که بیشتر از دی اکسید کربن و تقریباً از بخار آب تشکیل نشده است. در سطح ونوس فشار جو 92 برابر بیشتر از سیاره ی ماست. این بدان معنی است که یک فرد عادی نمی تواند یک دقیقه روی سطح این سیاره دوام بیاورد. ابرها از سولفوریک اسید تشکیل شده‌اند. </i><br><i>زهره یکی از دو سیاره‌ای است که از شرق به غرب می‌چرخد و فقط این خاصیت در زهره و اورانوس قابل مشاهده است. </i><br><i>یک روز ونوس معادل 243 روز زمینی است و طولانی‌ترین شبانه‌روز را به نام خود ثبت کرده است. نکته ی جالب این است که یک روز این سیاره از یک سال آن طولانی‌تر است.</i><br><i>تقریباً تمام دانش موجود در مورد ونوس از طریق فضاپیماهایی بدست آمده است که قادر به پایین آمدن از آن جو متراکم حامل کاوشگرها هستند. از سال 2013، 46 بار ماموریت به این سیاره سوزان انجام شده است .</i><br><i></i>',

'<u>Earth : زمین</u><br><u></u>',

'<s>Mars : مریخ(بهرام)</s><br><s></s>',

'<small>Jupeter : مشتری(هرمز)</small><br><small></small>',

'<big>Saturn : زحل(کیوان)</big><br><big></big>',

'<em>Uranus : اورانوس</em><br><em></em>',

'<strong>Neptune : نپتون</strong><br><strong></strong>',

'<mark>Pluto</mark><br><mark></mark>'];

planets.forEach(function(planet, index){
  var element = document.querySelector('.' + planet);
  element.style.transition = 'transform 5s';
  element.addEventListener('click', (function(){
    var isClicked = false;
    return function(){
      if (!isClicked){
        this.style.transform = translations[index];
        this.style.zIndex = '999999';
        text.innerHTML = texts[index]; // تغییر اینجا
        text.style.visibility = 'visible';
        text.style.zIndex = '1000000';
        isClicked = true;
      } else{
        this.style.transform = '';
        this.style.zIndex = '';
        text.style.visibility = 'hidden';
        text.style.zIndex = '';
        isClicked = false;
}};})());});
