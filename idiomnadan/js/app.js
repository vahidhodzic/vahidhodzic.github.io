$(document).ready(function() {

function getQuote() {
  var quotes=[{
    idiom: "Prirasti za srce",
    znacenje: "Postati drug",
    upotreba: "Vidjelo se da mu je Stela <span id='idiom_boldovano'>prirasla za srce. </span> <br>(SAMEDIN KADIĆ, Priče strave i užasa (6))"
  }, {

     idiom: "Sliti bokal suza",
     znacenje: "Mnogo plakati",
     upotreba: "Sistem je pao, <span id='idiom_boldovano'>bokal se suza niz lice slio. </span> <br> (SAMEDIN KADIĆ, Pornografija umiranja)"

  }, {

     idiom: "(ne) padati na pamet",
     znacenje: "(ne) pomisliti",
     upotreba: "Na ljude koji imaju žensku djecu i dalje se gleda sa sućuti i simpatijama : ako takvi sjede u kafani za istim stolom, nikome <span id='idiom_boldovano'>ne pada na pamet </span> da ih uznemirava (zašto bez razloga dirati u osinjak), svako zna kakva ih crna muka mori. (SAMEDIN KADIĆ, Zašto živite za sinove kad kod kćerki umirete)"

  }, {
     idiom: "Crna muka",
     znacenje: "Veliko iskušenje",
     upotreba: "Na ljude koji imaju žensku djecu i dalje se gleda sa sućuti i simpatijama: ako takvi sjede u kafani za istim stolom, nikome  <span id='idiom_boldovano'>ne pada na pamet </span> da ih uznemirava (zašto bez razloga dirati u osinjak), svako zna kakva ih <span id='idiom_boldovano'> crna muka </span> mori. <br> (SAMEDIN KADIĆ, Zašto živite za sinove kad kod kćerki umirete"

  }, {
     idiom: "Pamet staje pred nečim",
     znacenje: "Nešto nepojmljivo",
     upotreba: "Pred genocidom <span id='idiom_boldovano'>pamet staje. </span> <br> (SAMEDIN KADIĆ, Teologija genocida)"

  }, {
     idiom: "Iz džepa izvući",
     znacenje: "Nevoljno platiti nešto",
     upotreba: "Odgajatelj, s druge strane, ima narađene kazne u slučaju da mu se spočita nemar, i zato uvijek <span id='idiom_boldovano'> može iz džepa izvući </span> opravdanje: “Davno je mali za to fasovao.” <br>(SAMEDIN KADIĆ, Davno je mali za to fasovao)"
  }, {
     idiom: "Majčin sine (u V)",
     znacenje: "(Iron.)",
     upotreba: "Letio sam, <span id='idiom_boldovano'> majčini sinovi </span>, kao mali zeko preko džamijskog harema vičući ljudima koji su počeli dolaziti na dženazu: “Ust’o Munib!” <br> (SAMEDIN KADIĆ, Ustajanje iz mrtvih)"
  }, {
     idiom: "Razumjeti se u muziku kao ćelavi u šampone",
     znacenje: "Ne poznavati neku materiju",
     upotreba: " Muslimanski su narodi uglavnom bili pametniji od svoje rigorozne uleme koja <span id='idiom_boldovano'>se razumjela u muziku kao ćelavi u šampone. </span> <br> (SAMEDIN KADIĆ, Ne diraj pjevaljku masnim rukama) "

  }, {
     idiom: "Ode u helać",
     znacenje: "Uništeno je nešto",
     upotreba: "Preskoči li dan – ode sve u <span id='idiom_boldovano'> helać. </span> <br> (SAMEDIN KADIĆ, Je li bitak okrugao ili u obliku džointa:"
  }, {
     idiom: "Imati dobro uho",
     znacenje: "Dobro čuti",
     upotreba: "Imao je platu i auto, a ja teme i <span id='idiom_boldovano'>dobro uho. </span> <br>(SAMEDIN KADIĆ, Je li bitak okrugao ili u obliku džointa:"
  }, {
     idiom: "Pretvoriti se u golu vodu",
     znacenje: "Umoriti se",
     upotreba: "Nije šala halvu ispeći, sav se  <span id='idiom_boldovano'>u golu vodu</span> pretvorim, valja miješati kraj šporeta da se umute šećer i ulje. <br>(SAMEDIN KADIĆ, Kako sam batalio bioetiku)"
  }, {
     idiom: "Teći poput kiše",
     znacenje: "Tečno (govoriti,npr.)",
     upotreba: "Njihova imena kotrljala su se raspjevano niz njegov jezik i <span id='idiom_boldovano'>tekla poput kiše. </span> </br> (SAMEDIN KADIĆ, Priče strave i užasa (6):"
  }, {
     idiom: "Skočiti na žulj",
     znacenje: "Iznervirati, isprovocirati",
     upotreba: "Prvo jutro i odmah mu <span id='idiom_boldovano'>skočiše na žulj. </span>  <br> (SAMEDIN KADIĆ, Nije dova vreća cementa da iskrivi leđa)"
  }, {
     idiom: "Drhtati kao list na vjetru",
     znacenje: "Bojati se",
     upotreba: "Na Sudnjem danu, Isa će biti upitan je li on propovijedao ljudima da je sin Božiji, a on će, <span id='idiom_boldovano'>drhteći kao list na vjetru</span>, odgovoriti kako nema pojma o tome. <br>(SAMEDIN KADIĆ, Zašto bi Isus bio više kršćanski nego muslimanski)"
  }, {
     idiom: "Svijet je srušen",
     znacenje: "Uništeno je nešto",
     upotreba: "Ali je hadžijin <span id='idiom_boldovano'>svijet bio srušen.</span> <br> (SAMEDIN KADIĆ, Bezalkoholna piva majka je svakog zla)"
  }, {
     idiom: "Proliti znoj",
     znacenje: "Mnogo se truditi za nešto",
     upotreba: "Ima li smisla pisati o Isusu nakon toliko <span id='idiom_boldovano'>prolivenog</span> teološkog <span id='idiom_boldovano'>znoja</span>: njihova verzija – naša verzija, jeste sin – nije sin, prodali ga Jevreji – nisu ga prodali, jeste razapet – nije razapet, njihova istina – naša istina, mi ovce – oni ovce. <br> (SAMEDIN KADIĆ, Zašto bi Isus bio više kršćanski nego muslimanski)"
  }, {
     idiom: "Leći pod zemlju",
     znacenje: "Umrijeti",
     upotreba: "Pojam prati biće, i kada biće <span id='idiom_boldovano'>legne pod zemlju</span>, pojam ide za njim – s malim zakašnjenjem. <br> (SAMEDIN KADIĆ, Iskonsko dostojanstvo jezika)"
  }, {
     idiom: "Baciti rukavicu",
     znacenje: "Izazivati",
     upotreba: "Uvijek ima neki pametnjaković koji <span id='idiom_boldovano'>baca rukavicu </span> pred hafiza, neko ko želi da iz njega izvuče najbolje, neki biser koji će prvi prodati na čaršiji. <br>(SAMEDIN KADIĆ, Hafiz Junac)"
  }, {
     idiom: "Mozak provri",
     znacenje: "Veoma vruće",
     upotreba: "Mene na hadžu istjerao na ono sunce da zaustavljam taksi, <span id='idiom_boldovano'>mozak mi provri </span>, a on sjedi u hladu i pijucka kolu. <br>(SAMEDIN KADIĆ, Hafiz Junac)"
  }, {
     idiom: "Otkucao je suđeni sahat",
     znacenje: "Došlo je vrijeme smrti nekome",
     upotreba: "Proputovao četiri kontinenta i više od trideset zemalja – vidio izbliza dunjaluk na kojeg niko nikad obruča nije stavio; veliki duhandžija i briljantan vaiz; posjedovao privatnu kolekciju mehaničkih satova na navijanje: tišinu u stanu u Ulici Samardžije, gdje se preselio s Hrida, svako malo narušavala je drugačija zvonjava, sve dok <span id='idiom_boldovano'>nije otkucao suđeni sahat</span> krajem jednog snježnog novembra osamdesetih: na dženazi, tako vele, prvi saf od mećave nije vidio drugi. <br>(SAMEDIN KADIĆ, Hafiz Junac)"
  }, {
     idiom: "Živi mrtvaci",
     znacenje: "Biti duhovno osakaćen",
     upotreba: "Riječ je o <span id='idiom_boldovano'>živim mrtvacima</span> koji su, sablasno povijeni u leđima, čučali u ruševini vlastitog bića, valjda poput muslimana na namaskom sjedenju ili na sedždi ili u nekoj kretnji između ovih dvaju rukni, čekavši da konačno budu položeni u svoj zračni grob. <br>(SAMEDIN KADIĆ, Jevreji su u logorima umirali kao „muslimani“)"
  }, {
     idiom: "Osušiti se kao pritka",
     znacenje: "Mnogo smršati",
     upotreba: "Vaktovi, noćni namaz, oboren pogled, <span id='idiom_boldovano'>osušio se</span> od posta <span id='idiom_boldovano'>kao pritka</span>. <br> (SAMEDIN KADIĆ, Eventualni i izmišljeni grijesi)"
  }, {
     idiom: "Biti vrele krvi",
     znacenje: "Biti temperamentan",
     upotreba: "Grijeh je novorođenih (uvijek revnosnih, uvijek <span id='idiom_boldovano'>vrele krvi </span>) što ne poštuju one koji su predugo na bojištu – samo zato što ne dijele njihov žar. <br> (SAMEDIN KADIĆ, Ljuto kune, a jȁko dovedena)"
  }, {
     idiom: "Ići na živac",
     znacenje: "Nervirati",
     upotreba: "Uvijek <span id='idiom_boldovano'>su</span> mi <span id='idiom_boldovano'>išli na živac</span> neumjereni novorođeni.<br> (SAMEDIN KADIĆ, Ljuto kune, a jȁko dovedena)"
  }, {
     idiom: "Buditi se u goloj vodi",
     znacenje: "Buditi se nakon košmara",
     upotreba: "Naprimjer, sad Čupo priča o avretu – meni, paćeniku iz medrese čija se duša čitavu mladost odricala grijeha za kojim je toliko vapila; meni, paćeniku koji se, poput imama Šafije (ili Tarantina), gubio kada bi ugledao žensko stopalo; meni, koji sam se budio <span id='idiom_boldovano'>u goloj vodi</span> sanjajući prodavačicu patika što je radila blizu medrese, a na podne u Begovu išao drugim putem da je ne sretnem. <br> (SAMEDIN KADIĆ, Ljuto kune, a jȁko dovedena)"
  }, {
     idiom: "Srce hoće da pukne",
     znacenje: "Mnogo žaliti zbog nečeg",
     upotreba: "Susreo je nedavno majku jednog mu rođaka čije <span id='idiom_boldovano'>srce hoće da pukne</span> od tuge za oboljelim sinom. <br>(SAMEDIN KADIĆ, Je li bitak okrugao ili u obliku džointa)"
  }, {
     idiom: "Izroniti iz rijeke",
     znacenje: "",
     upotreba: "Stari je život s gađenjem odbačen, a novi <span id='idiom_boldovano'>izronio iz rijeke</span>, kršten ili ogusuljen, i čist kao dječija duša. <br>(SAMEDIN KADIĆ, Ljuto kune, a jȁko dovedena)"
  }, {
     idiom: "Čist kao dječija duša",
     znacenje: "Biti moralno čist",
     upotreba: "Stari je život s gađenjem odbačen, a novi izronio iz rijeke, kršten ili ogusuljen, i <span id='idiom_boldovano'>čist kao dječija duša</span>. <br> (SAMEDIN KADIĆ, Ljuto kune, a jȁko dovedena)"
  }, {
     idiom: "Glavom i bradom",
     znacenje: "Lično se pojaviti",
     upotreba: "Poslao ju je u maloj flašici <span id='idiom_boldovano'>glavom</span> i još važnije <span id='idiom_boldovano'>bradom</span> sam sultan Abdul-Aziz kao posebnu čast, emanet i atrakciju pobunjenoj pokrajini. <br> (SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "Visiti o dlaci",
     znacenje: "Biti na ivici",
     upotreba: "Šta to pričaš? - našao se zatečen Rasim-efendija (<span id='idiom_boldovano'>visila</span> mu <span id='idiom_boldovano'>je</span> reputacija <span id='idiom_boldovano'>o dlaci</span>), a mladić mu je ponosno odgovorio: – Ukrao sam novac, ali da Poslanikovu dlaku uzmem – tolika bitanga nisam. <br>(SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "Biti bez dlake na jeziku",
     znacenje: "Biti otvoren",
     upotreba: "Tada je ustao jedan mladić (očevici tvrde da je bio romske nacionalnosti, ali ih nećemo uzeti doslovno zbog poznate nepouzdanosti očevidaca) i <span id='idiom_boldovano'>bez dlake na jeziku</span>, kao da je nekakav dugogodišnji moćnik, izjavio: – Nije ukradena Poslanikova dlaka. <br>(SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "(ne) tražiti dlaku u jajetu",
     znacenje: "(ne) biti probirljiv",
     upotreba: "U ta je pobožna vremena sirotinji bila dovoljna dlaka, a sirotinja nikad <span id='idiom_boldovano'>dlaku u jajetu tražila nije</span>. <br>(SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "Ići nekome niz dlaku",
     znacenje: "Govoriti nekome po njegovoj volji",
     upotreba: "Narod se zapleo u praznovjerje, ali mladi Rasim-efendija <span id='idiom_boldovano'>nije želio</span> nikome <span id='idiom_boldovano'>ići niz dlaku</span>. <br> (SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "U dlaku",
     znacenje: "Baš tako;isto",
     upotreba: "Ne smijem potvrditi da je sve <span id='idiom_boldovano'>u dlaku</span> baš ovako <span id='idiom_boldovano'>bilo</span>, ali ako i nije, kad je kome zbog malo pjesničke slobode dlaka s glave zafalila. <br>(SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "Dlaka s glava faliti",
     znacenje: "Proći / ostati nepovrijeđen",
     upotreba: "Ne smijem potvrditi da je sve u dlaku baš ovako bilo, ali ako i nije, kad je kome zbog malo pjesničke slobode <span id='idiom_boldovano'>dlaka s glave zafalila</span>. <br>(SAMEDIN KADIĆ, Povijest jedne izmišljene krađe)"
  }, {
     idiom: "Stajati kao kip",
     znacenje: "Ne biti u mogućnosti nešto poduzeti; biti paraliziran",
     upotreba: "<span id='idiom_boldovano'>Stajao je kao kip</span> i pratio ko će uzeti pive. <br>(SAMEDIN KADIĆ, Bezalkoholna piva majka je svakog zla)"
  }, {
     idiom: "Svijet se ruši",
     znacenje: "Svijet nestaje",
     upotreba: "Znao sam da ako pomisli ili se uvjeri da sam se propio, <span id='idiom_boldovano'>svijet će</span> mu se <span id='idiom_boldovano'>srušiti</span>. <br> (SAMEDIN KADIĆ, Bezalkoholna piva majka je svakog zla)"
  }, {
     idiom: "Biti na ivici smrti",
     znacenje: "Biti na umoru; umirati; nestajati",
     upotreba: "Radi se o živim mrtvacima, ali njihov položaj isključenosti iz političke zajednice ujedno pokazuje da je i takav život, čak i kad je na ivici smrti, politiziran, da je postavljen i određen od politike. <br>(SAMEDIN KADIĆ, Žrtve genocida: sveti ljudi)"
  }, {
     idiom: "Harati kao vukovi po toru",
     znacenje: "Pljačkati",
     upotreba: "Ćaskamo o ovoj predivnoj zemlji po kojoj razbojnici <span id='idiom_boldovano'>haraju kao vukovi po toru</span>; o novinarstvu kao <span id='idiom_boldovano'>traci bez kraja</span>; o paranojama i fobijama u koje ljudi <span id='idiom_boldovano'>srljaju kao ovce na so.</span> <br> (SAMEDIN KADIĆ, Mala vjera i velika izdaja)"
  }, {
     idiom: "Traka bez kraja",
     znacenje: "Beskrajno",
     upotreba: "Ćaskamo o ovoj predivnoj zemlji po kojoj razbojnici haraju kao vukovi po toru; o novinarstvu kao <span id='idiom_boldovano'>traci bez kraja</span>; o paranojama i fobijama u koje ljudi srljaju kao ovce na so. <br>(SAMEDIN KADIĆ, Mala vjera i velika izdaja)"
  }, {
     idiom: "Srljaju kao ovce na so",
     znacenje: "Biti povodljiv",
     upotreba: "Ćaskamo o ovoj predivnoj zemlji po kojoj razbojnici haraju kao vukovi po toru; o novinarstvu kao traci bez kraja; o paranojama i fobijama u koje ljudi <span id='idiom_boldovano'>srljaju kao ovce na so.</span> <br>(SAMEDIN KADIĆ, Mala vjera i velika izdaja)"
  }, {
     idiom: "Jedna jedina",
     znacenje: "Jedna",
     upotreba: "Svi znamo da je kod braće katolika brak sakrament, <span id='idiom_boldovano'>jedna (jedina)</span> žena do Sudnjeg dana, pa sad recite da sekularizam nije preuzeo ovaj model direktno iz religije: “Kad mi ne možemo, nek’ ne može niko!” <br>(SAMEDIN KADIĆ, Nije fer ženu tretirati kao domaću životinju)"
  }, {
     idiom: "Nebo teško kao žaba",
     znacenje: "Oblačno",
     upotreba: "<span id='idiom_boldovano'>Nebo</span> teško, što rekao Ćamil Sijarić, <span id='idiom_boldovano'>kao žaba</span> i sivo kao zec, što opet uporedio Ćamil. <br> (SAMEDIN KADIĆ, Mala vjera i velika izdaja)"
  }, {
     idiom: "Nebo sivo kao zec",
     znacenje: "Oblačno",
     upotreba: "<span id='idiom_boldovano'>Nebo </span> teško, što rekao Ćamil Sijarić, kao žaba i <span id='idiom_boldovano'>sivo kao zec</span>, što opet uporedio Ćamil. <br>(SAMEDIN KADIĆ, Mala vjera i velika izdaja)"
  }, {
     idiom: "Mokar kao miš",
     znacenje: "Mnogo pokisnuti",
     upotreba: "<span id='idiom_boldovano'>Mokar kao miš</span>, čekao sam ispred BBI centra fra Ivana Šarčevića da idemo snimati intervju za potrebe Centra za dijalog Vesatijja. <br> (SAMEDIN KADIĆ, Mala vjera i velika izdaja)"
  }, {
     idiom: "Nositi svoj krst",
     znacenje: "Umijeti podnijeti vlastito iskušenje",
     upotreba: "Ali nije fer aplicirati kršćanski teološki plan na nas nekrštene duše, njihova monogamija – njihov problem, <span id='idiom_boldovano'>neka nose svoj krst</span> − sami su ga izabrali. <br>(SAMEDIN KADIĆ, Nije fer ženu tretirati kao domaću životinju)"
  }, {
     idiom: "Razvlačiti pamet nekome",
     znacenje: "Maltretirati nekoga",
     upotreba: "Navode se sve prednosti višeženstva: muškarci zadovoljavaju svoju potrebu za promiskuitetom (ipak nije riječ o ekonomskoj samoodrživosti već o utilitarnom seksu); muški je ljubavni život neuporedivo zanimljiviji (konkurencija unapređuje bračnu kulturu); nezbrinute žene mogu dobiti bračnu sigurnost (socijalna osviještenost); međuženska trvenja razvodnjavaju napetost prema mužu (<span id='idiom_boldovano'>razvlačenje</span> neprijateljske <span id='idiom_boldovano'>pameti</span>); ako je u nekom društvu velika razlika u broju žena i muškaraca, neke se žene tada ne mogu nikada udati, ni imati potomstvo, i samo poligamija uspostavlja kakvu-takvu pravičnost (rad na demografskom balansu). <br>(SAMEDIN KADIĆ, Nije fer ženu tretirati kao domaću životinju)"

  }, {
     idiom: "Kao bez duše",
     znacenje: "Brzo; instinktivno",
     upotreba: "Izletjeli smo <span id='idiom_boldovano'>kao bez duše</span>. <br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Bijela oholost",
     znacenje: "Rasizam",
     upotreba: "Prilazi mi neka bijela gospođa i započinjemo razgovor o The Color Purple, o paklu kroz koji je prošla crna žena, i bijelom i crnom, i mada se za pakao može učiniti nevažnim koje je boje, mislim da je bijeli bio gori, da je crni bio samo plamičak u jezivoj buktinji <span id='idiom_boldovano'>bijele oholosti.</span> <br>(SAMEDIN KADIĆ, Bijeli, crni, žuti, crveni)"

  }, {
     idiom: "Crn kao ugarak",
     znacenje: "Veoma crno",
     upotreba: "Ruke <span id='idiom_boldovano'>crne kao ugarak</span>, ali nisu bile puno masne. <br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Dići sidro",
     znacenje: "Otići",
     upotreba: "Ostao sam tu još dva mjeseca i onda <span id='idiom_boldovano'>digao sidro</span>.<br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Nebo je palo na nekog",
     znacenje: "Biti u iskušenju",
     upotreba: "<span id='idiom_boldovano'>Nebo je bilo palo</span> na mene. <br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Bijel kao kreč",
     znacenje: "Poblijedjeti",
     upotreba: "Bio sam <span id='idiom_boldovano'>bijel kao kreč</span>, ali jedan od onih ljudi, efendija, učini mi se jednako bijel ili čak bjelji od mene, kao da mejt gasuli mejta. <br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Spavati kao bebe",
     znacenje: "Spavati mirno, spokojno",
     upotreba: "Sad je uvijek dan, sve od akšama (kada šarene noćne ptice lete u život) do zore (kada umorne metropolske prostitutke <span id='idiom_boldovano'>spavaju kao bebe</span> – kako primjećuje Bukowski), a opet, svuda je tama, kako primjećuju Adorno i Horkheimer, i noć koja ne prolazi. <br>(SAMEDIN KADIĆ, Akšamska snoviđenja)"

  }, {
     idiom: "Oblijetati pragove",
     znacenje: "Obilaziti",
     upotreba: "Godinu <span id='idiom_boldovano'>je</span> čitavu <span id='idiom_boldovano'>pragove oblijetao</span>, ali ništa. <br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Povratiti dušu",
     znacenje: "Doći sebi; odahnuti",
     upotreba: "Prvo što sam pomislio bilo je da mu tražim cigaru da <span id='idiom_boldovano'>povratim dušu</span>. <br>(SAMEDIN KADIĆ, Ustajanje iz mrtvih)"

  }, {
     idiom: "Tuga živa",
     znacenje: "Veoma tužno",
     upotreba: "Ma, <span id='idiom_boldovano'>tuga živa</span>. <br>(SAMEDIN KADIĆ, Je li bitak okrugao ili u obliku džointa) "

  }, {
     idiom: "Kovati (opasnu) zavjeru",
     znacenje: "Raditi nešto protiv nekoga",
     upotreba: ": Možda je Bijeli agent FBI-a, a Crni neki špijun koji <span id='idiom_boldovano'>kuje opasnu zavjeru?</span> <br> (SAMEDIN KADIĆ, Bijeli, crni, žuti, crveni) iz mrtvih)"

  }, {
     idiom: "Doći sebi",
     znacenje: "Razhavizati se; vratiti se u normalno stanje",
     upotreba: "Poslije dženaze, kad bi me tablete popustile, <span id='idiom_boldovano'>došao bih sebi</span> i sve mi je izgledalo kao neka odsanjana java. <br> (SAMEDIN KADIĆ, Ustajanje"

  }, {
     idiom: "Suza suzu stiže",
     znacenje: "Veoma mnogo plakati",
     upotreba: "Za dva-tri mjeseca dolazi žena u plaču, <span id='idiom_boldovano'>suza suzu stiže</span>, muž joj umro, a ona želi da joj umetnu one zaleđene spermatozoide. <br>(SAMEDIN KADIĆ, Kako je Adisa naučila šta je karafindl)"

  }, {
     idiom: "Blehnuti kao telad u šarena vrata",
     znacenje: "Gledati bez razumijevanja",
     upotreba: "Ne znam ja to ni reći, to je nauka, da je Crni ovdje, <span id='idiom_boldovano'>blehnuli bi k'o telad u šarena vrata</span>. <br>(SAMEDIN KADIĆ, Kako je Adisa naučila šta je karafindl)"

  }];
    
    var sourceLength = quotes.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    for (var i=0; i<=sourceLength; i++) {
      var newQuoteText = quotes[randomNumber].idiom;
      var newQuoteName = quotes[randomNumber].znacenje;
      var newQuoteUpotreba = quotes[randomNumber].upotreba;
    }
    
    var timeAnimation = 500;
    var idiomContainer = $("#idiomContainer");
      idiomContainer.fadeOut(timeAnimation, function() {
        idiomContainer.html('');
        idiomContainer.append('<p id="idiom">' + newQuoteText + '</p>' + '<p id="znacenje">' + '<span id="znacenje2" style="">Značenje: </span> ' + newQuoteName + '</p>' + '<p id="upotreba">' +'<span style="">Upotreba u kontekstu: </span>' + newQuoteUpotreba + '</p>');
        idiomContainer.fadeIn(timeAnimation);
      }); //end of fadeOut
    } //end of getIdiom
getQuote();
  
$("#quoteButton").click(getQuote);

}); //end of document.ready