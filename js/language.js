$(function () {

 var arrLang = {
	'en': {
		'search_placeholder': 'search..',
        'acc':'my account',
        'ouracc':'about us',
        'what_sell':'what to sell',
        'moresearch':'most search',
        'order':'order',
        'wt-ord':'sell',
        'act':'active',
        'an_act':'another active',
        'an_thing':'another thing',
        'tagersite':'tager site',
        'pragra':'here is what you need',
        'visit':'visit us',
        'new':'new',
        'prg1':'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an',
        'use':'what use',
        'prg2':'is simply dummy text of the printing and typesetting industry. Lorem Ipsum h',
        'read_more':'read more',
        'random':'lorem ipsume',
        'cust_revi':'customer reviews',
        'send':'contact us',
        'address':'our address:....',
        'name':'name',
        'emai':'email',
        'message':'message us',
        'sending':'send',
        'copy_right':'copy rights 2017',
        'contents':'contents',
        'lorem':'lorem ibsume loibs',
        'main':'main',
        'subscribe':'subscribe',
        'adds':'adds'
	},
	'ar': {
        'search_placeholder': 'بحث',
        'acc':'حسابي',
        'ouracc':'عن موقعنا',
        'what_sell':'تبيع ايه',
        'moresearch':'الاكثر بحثا',
        'order':'اطلب مخصوص',
        'wt-ord':'تبيع ايه',
        'act':'نشط',
        'an_act':'نشط اخر',
        'an_thing':'شئ اخر',
        'tagersite':'موقع تاجر',
        'pragra':'لك كل ما تتمناه',
        'visit':'زورونا',
        'new':'كل جديد',
        'prg1':'        ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً',
        'use':'ما فائدته ؟',
        'prg2':'  المكتبي وبرامقروء. العديد من برامح النشر المكتبي وبرامح  بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال',
        'read_more':'اقرا المزيد',
        'random':'شكل عشوائي',
        'cust_revi':'اراء العملاء',
        'send':'تواصل معنا',
        'address':' العنوان  على هذا النص، بل ان ',
        'name':'الاسم',
        'emai':'الايميل',
        'message':'الرساله',
        'sending':'ارسال',
        'contents':'محتويات',
        'lorem':'ستاندات اعلام الريشه',
        'main':'الرئيسيه',
        'subscribe':'اشترك',
        'adds':'اعلانات'
	}
}
if($('body').hasClass('en')){
		$(".lang").each(function () {
			$(this).text(arrLang['en'][$(this).attr('key')]);
		});
		$('nav').removeClass('rtl');
//    		$('nav').removeClass('ml-auto');
//		$('nav').addClass('mr-auto');

    		$('footer .row').removeClass('rtl');
        		$('.ending .row').removeClass('rtl');
                $('footer p').css({textIndent:"100px",textAlign:"left"});             
                           
    
 $('.owl-carousel').owlCarousel({
       rtl:false
 });
    
		$('.top-bar').addClass('rtl');
		$('.up').css({
			'position': 'fixed',
			'left': 'unset',
			'right': '30px',
			'bottom': '30px'
		});
		$('ul.lang').css({
			'position' : 'absolute',
			'left': '-50px',
			'right': 'unset'
		});
	} else if($('body').hasClass('ar')){
		$(".lang").each(function () {
			$(this).text(arrLang['ar'][$(this).attr('key')]);
		});
	} 
 //$(function () {

 /* $('.translate').click(function(){
     var lang = $(this).attr('id');
     $('.lang').each(function(index,element){
         $(this).text(arrLang[lang][($this).attr('key')])
     })
 })*/
 
});