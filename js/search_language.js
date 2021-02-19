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
        'send':'contact us',
        'an_act':'another active',
        'an_thing':'another thing',
        'prg1':'is simply dummy text of the printing...',
        'cust_revi':'customer reviews',
        'copy_right':'copy rights 2017',
        'contents':'contents',
        'lorem':'lorem ibsume loibs',
        'main':'main',
        'subscribe':'subscribe',
        'adds':'adds',
        'date':'date',
        'depart':'departments',
        'search_by':'search by',
        'items':'lorem ipsumes for..',
        'card_title':'card title',
        'updateTime':'last update 3 mins ago.'
        
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
        'send':'تواصل معنا',
//        'prg1':'ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص..',
        'cust_revi':'اراء العملاء',
        'contents':'محتويات',
        'lorem':'ستاندات اعلام الريشه',
        'main':'الرئيسيه',
        'subscribe':'اشترك',
        'adds':'اعلانات',
        'date':'تاريخ',
        'depart':'الاقسام',
        'search_by':'بحث ب',
        'items':'اعلانات التيلفزيون',
        'card_title':'لوريم ابسيوم',
        'updateTime':'تحديث من 3 دقائق'
	}
}
if($('body').hasClass('en')){
		$(".lang").each(function () {
			$(this).text(arrLang['en'][$(this).attr('key')]);
		});
		$('nav').removeClass('rtl');
    		$('footer .row').removeClass('rtl');
        		$('div .row').removeClass('rtl');
//    $('nav').removeClass('ml-auto');
//		$('nav').addClass('mr-auto');
                $('footer p').css({textIndent:"100px",textAlign:"left"});             


    
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

});