var Tokenizer = require('tokenize-text');
var tokenize = new Tokenizer();
var STOPWORDS = ["ad","al","allo","ai","agli","all","agl","alla","alle","con","col","coi","da","dal","dallo","dai","dagli","dall","dagl","dalla","dalle","di","del","dello","dei","degli","dell","degl","della","delle","in","nel","nello","nei","negli","nell","negl","nella","nelle","su","sul","sullo","sui","sugli","sull","sugl","sulla","sulle","per","tra","contro","io","tu","lui","lei","noi","voi","loro","mio","mia","miei","mie","tuo","tua","tuoi","tue","suo","sua","suoi","sue","nostro","nostra","nostri","nostre","vostro","vostra","vostri","vostre","mi","ti","ci","vi","lo","la","li","le","gli","ne","il","un","uno","una","ma","ed","se","perché","anche","come","dov","dove","che","chi","cui","non","più","quale","quanto","quanti","quanta","quante","quello","quelli","quella","quelle","questo","questi","questa","queste","si","tutto","tutti","a","c","e","i","l","o","ho","hai","ha","abbiamo","avete","hanno","abbia","abbiate","abbiano","avrò","avrai","avrà","avremo","avrete","avranno","avrei","avresti","avrebbe","avremmo","avreste","avrebbero","avevo","avevi","aveva","avevamo","avevate","avevano","ebbi","avesti","ebbe","avemmo","aveste","ebbero","avessi","avesse","avessimo","avessero","avendo","avuto","avuta","avuti","avute","sono","sei","è","siamo","siete","sia","siate","siano","sarò","sarai","sarà","saremo","sarete","saranno","sarei","saresti","sarebbe","saremmo","sareste","sarebbero","ero","eri","era","eravamo","eravate","erano","fui","fosti","fu","fummo","foste","furono","fossi","fosse","fossimo","fossero","essendo","faccio","fai","facciamo","fanno","faccia","facciate","facciano","farò","farai","farà","faremo","farete","faranno","farei","faresti","farebbe","faremmo","fareste","farebbero","facevo","facevi","faceva","facevamo","facevate","facevano","feci","facesti","fece","facemmo","faceste","fecero","facessi","facesse","facessimo","facessero","facendo","sto","stai","sta","stiamo","stanno","stia","stiate","stiano","starò","starai","starà","staremo","starete","staranno","starei","staresti","starebbe","staremmo","stareste","starebbero","stavo","stavi","stava","stavamo","stavate","stavano","stetti","stesti","stette","stemmo","steste","stettero","stessi","stesse","stessimo","stessero","stando"]
var STOPWORDS_AM = ["i","me","my","myself","we","our","ours","ourselves","you","you're","you've","you'll","you'd","your","yours","yourself","yourselves","he","him","his","himself","she","she's","her","hers","herself","it","it's","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","that'll","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","don't","should","should've","now","d","ll","m","o","re","ve","y","ain","aren","aren't","couldn","couldn't","didn","didn't","doesn","doesn't","hadn","hadn't","hasn","hasn't","haven","haven't","isn","isn't","ma","mightn","mightn't","mustn","mustn't","needn","needn't","shan","shan't","shouldn","shouldn't","wasn","wasn't","weren","weren't","won","won't","wouldn","wouldn't"]
var TOP1000IT = ["non","di","che","è","e","la","il","un","a","per","in","una","mi","sono","ho","ma","l'","lo","ha","le","si","ti","i","con","cosa","se","io","come","da","ci","no","questo","qui","e'","hai","sei","del","bene","tu","sì","me","più","al","mio","c'","perché","lei","solo","te","era","gli","tutto","della","così","mia","ne","questa","fare","quando","ora","fatto","essere","so","mai","chi","o","alla","tutti","molto","dei","anche","detto","quello","va","niente","grazie","lui","voglio","abbiamo","stato","nel","suo","dove","posso","oh","prima","allora","siamo","d'","uno","un'","sua","tuo","hanno","noi","sta","fa","due","vuoi","ancora","qualcosa","vero","casa","sia","su","tua","sempre","forse","dire","vi","loro","i'","altro","sai","stai","devo","quella","vita","quel","delle","tempo","andare","certo","poi","nella","uomo","signore","ad","po'","può","credo","voi","già","adesso","andiamo","anni","all'","visto","fuori","proprio","parte","davvero","vuole","li","dell'","sto","quanto","volta","via","sul","é","dio","sarà","dopo","senza","cose","nessuno","fai","giorno","ed","meglio","padre","puoi","ciao","cos'","devi","ecco","qualcuno","dal","lavoro","sa","ai","vedere","ogni","ii","troppo","posto","cui","tanto","male","dai","ce","bisogno","signor","beh","perchè","vieni","alle","dalla","stata","tra","vai","ehi","miei","amico","dice","sarebbe","avete","altra","deve","sulla","qualche","sembra","gente","dobbiamo","modo","tre","momento","prego","parlare","mamma","guarda","signora","grande","lì","madre","possiamo","avanti","avere","successo","ero","donna","nuovo","ah","faccio","aveva","nostro","degli","questi","siete","forza","piace","bella","dov'","soldi","avevo","favore","fosse","altri","dispiace","subito","dentro","oggi","accordo","tutta","faccia","nome","ok","notte","queste","figlio","mondo","nostra","sapere","vado","tutte","aspetta","amare","moglie","sicuro","suoi","penso","paura","idea","testa","papà","giusto","eh","vorrei","senti","presto","uomini","ll","basta","potrebbe","stesso","avuto","porta","erano","stare","buona","quindi","farlo","appena","abbia","ragione","sentito","ragazzi","domani","ragazza","ragazzo","insieme","sotto","volevo","pronto","nei","ciò","volte","capito","succede","preso","facendo","piacere","morto","tuoi","capitano","letto","storia","caso","trovato","amici","venire","dico","capisco","problema","fino","tipo","là","qua","pensi","aver","giorni","cazzo","okay","nulla","bello","persone","buon","terra","ia","dato","secondo","film","nell'","mano","facciamo","vediamo","vedo","stanno","avrei","prendere","dici","serve","morte","meno","città","occhi","fine","sig","ê","tesoro","scusi","primo","credi","salve","nave","stiamo","sera","piano","sento","macchina","vostro","mani","neanche","dall'","dottore","quale","abbastanza","tardi","bel","cuore","famiglia","far","stati","aiuto","diavolo","nostri","col","quasi","polizia","capo","avrebbe","quei","mie","tornare","però","contro","viene","mentre","scusa","sola","spero","quelle","trovare","giro","anch'","guerra","sue","bambino","strada","vecchio","fratello","acqua","stasera","pensavo","chiama","persona","vedi","fu","anno","vostra","veramente","finito","marito","minuti","giù","donne","bravo","bambini","ricordi","quelli","state","ore","stavo","dovuto","nemmeno","venuto","indietro","stessa","importa","nessun","punto","invece","perso","possibile","ucciso","forte","pensato","dovrebbe","pensa","poco","parla","farò","cercando","l","verità","andato","quell'","re","fanno","potrei","importante","quest'","amo","chiesto","cosi","nelle","felice","piedi","merda","piccolo","prendi","dietro","sapevo","buongiorno","passato","dollari","com'","pure","pensare","cinque","vicino","uscire","conosco","verso","altre","quattro","morire","sangue","john","eri","almeno","dica","lascia","vivere","colpa","portato","entrare","ricordo","pace","roba","jack","migliore","fate","difficile","settimana","ultima","dovrei","fatta","conto","stanza","fra","comunque","sentire","numero","parlato","mente","messo","strano","fortuna","perdere","tue","né","figlia","molti","volete","dottor","parola","signori","andata","vista","vede","nessuna","finché","dare","dammi","mr","mesi","fuoco","voleva","mangiare","lasciato","figli","serio","paese","farà","capire","mezzo","prova","cara","perche'","cane","dimmi","fossi","senso","james","riesco","ieri","possa","potuto","scuola","s","possono","lavorare","significa","resto","vada","piccola","pare","bere","ben","cena","giovane","problemi","quanti","gran","attimo","ascolta","agli","dovresti","corpo","musica","gioco","qual","aria","sarò","farmi","magari","davanti","new","chiamo","genere","libro","domanda","chiamato","passare","dalle","campo","lungo","torna","paio","stava","finita","saranno","vogliono","hey","cielo","parole","auto","sorella","nuova","stia","signorina","festa","spiace","sopra","bisogna","vuol","telefono","affari","facile","parlando","caro","sui","pronti","restare","attenzione","crede","nostre","controllo","molte","unica","dovremmo","farti","soltanto","piu'","buono","puttana","vivo","sappiamo","luce","generale","qualsiasi","vogliamo","ultimo","dicono","benissimo","harry","foto","unico","onore","ragazze","scritto","andate","tieni","siano","ufficio","entra","chiedo","coraggio","andando","venga","dieci","credevo","voglia","potremmo","esatto","credere","tratta","eravamo","arrivato","bambina","pistola","voce","dormire","lasci","avessi","chiaro","aspetto","squadra","attento","cerca","ordine","joey","arrivederci","arriva","armi","sulle","ormai","maggiore","fretta","sarai","sacco","fatti","york","parli","colpo","sarei","m'","caffè","capisci","dicendo","vostri","camera","alcuni","cercare","arrivo","aspettare","situazione","faremo","deciso","esattamente","dev'","addio","scena","inglese","perfetto","potete","fammi","alto","dello","prendo","conosci","be'","sapete","pazzo","chiami","tornato","sicura","lasciare","capelli","potere","avevi","morti","avrà","fantastico","matrimonio","passo","portare","aspetti","torno","arrivare","guai","trova","motivo","resta","inizio","smettila","diventare","potresti","n'","voluto","vanno","disse","morta","de","bagno","zio","futuro","sbagliato","guardi","cosi'","sicurezza","pezzo","devono","venuta","allo","tenente","silenzio","porto","uccidere","odio","sull'","giocare","lontano","durante","segreto","sole","mettere","venite","dirmi","sistema","viaggio","causa","r","comandante","settimane","semplice","minuto","divertente","avresti","grandi","presidente","bocca","permesso","vecchia","culo","sogno","glielo","c","guardare","probabilmente","vengo","lasciami","ie","negli","do","fermo","zitto","vera","tante","ln","colonnello","stupido","cristo","conosce","fame","cura","prigione","finire","farai","d","buonanotte","tom","prossima","brava","specie","prende","piacerebbe","circa","funziona","dovete","brutto","vattene","sente","cavallo","peccato","mattina","consiglio","cambiare","saperlo","usare","naturalmente","continua","scelta","possibilità","spesso","dà","dirti","piuttosto","trovo","fondo","ricorda","guardate","ospedale","qualunque","maria","andrà","legge","agente","oltre","avesse","servizio","tanti","messaggio","giornata","faceva","energia","incredibile","sala","mandato","chiamare","doveva","libero","aereo","ricevuto","porti","preoccuparti","uh","finalmente","quali","stronzo","mostro","sette","pronta","metti","henry","programma","poteva","parti","saputo","partita","gentile","poter","freddo","s'","piacciono","clark","vederti","domande","peggio","sanno","genitori","amica","solito","anima","terribile","buonasera","oro","occhio","si'","radio","quante","pieno","rapporto","avrai","alcune","provare","carino","scoperto","america","denaro","compagnia","interessante","avvocato","t'","vestito","ottimo","avevano","esercito","vestiti","treno","succedendo","mese","impossibile","chiunque","vale","nello","milioni","cibo","tempi","jim","piu","laggiù","intorno","servono","chiave","coi","diritto","dimenticato","ve","natale","calma","altrimenti","t","miss","provato","dirlo","cinema","chiedere","ritardo","realtà","mare","maestro","tv","pagare","pianeta","fronte","addosso","entrambi","dia","cambiato","interessa","assolutamente","risposta","rispetto","pena","gesù","michael","incontro","cercato","occhiata","pensando","cioè","the","notizie","sorpresa","bastardo","salute","lettera","incidente","grosso","soli","mica","sembrava","grado","aiutare","sinistra","dovevo","contento","canzone","sapeva","santo","verrà","saremo","speciale","diceva","posizione","gruppo","giuro"
]

browser.browserAction.onClicked.addListener((tab) => {
    console.log(tab.url);
    browser.tabs.query({ currentWindow: true, active: true}).then(sendMessageToTabs).catch(onError);
});

function sendMessageToTabs(tabsData){
    browser.tabs.sendMessage(tabsData[0]['id'], {"func": "text"});
}

browser.runtime.onMessage.addListener(sendColorWords);

function sendColorWords(payload, sender){
	//console.log('text is ', payload);
	var text = payload['text'];
	var offset_tokens = tokenize.words()(text);
	//console.log('tokens are', tokens);
	var tokens = offset_tokens.map(x => x['value']);
    var tokens_nonums = tokens.filter(x => (!/[^a-zA-ZÀ-ÿ]/.test(x)));
    console.log("tokens_nonums",tokens_nonums);
    var tokens_noproper = removeProperNouns(tokens_nonums);
    console.log("tokens_noproper",tokens_noproper);
    var clean_tokens = filterStopWords(tokens_noproper.map(x => x.toLowerCase()));
	console.log("clean_tokens",clean_tokens);
	var counts = createCounts(clean_tokens);
    console.log("counds",counts);
	var sorted_counts = sortedDict(counts);
    console.log("sorted_counts",sorted_counts);
	var words = atLeast3Occur(sorted_counts);
    console.log("words",words);
	console.log('sender is ' , sender);
//	var words = ['Donald', 'figlio'];
    browser.tabs.sendMessage(sender['tab']['id'], words.slice(0,100));
}

function filterStopWords(words){
	return words.filter(x => !(STOPWORDS.includes(x)|STOPWORDS_AM.includes(x)|TOP1000IT.includes(x)|x.length < 3));
}

function createCounts(arr){
	var counts = {};

	for (var i = 0; i < arr.length; i++) {
	  var num = arr[i];
	  counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	return counts;
}

function removeProperNouns(tokens){
    var fracts = {};

    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i].toLowerCase();
        var first = tokens[i][0];
        if(first == first.toUpperCase()){
            fracts[word] = fracts[word] ? add1both(fracts[word]) : new Array(1, 1);
        }else {
            fracts[word] = fracts[word] ? add1one(fracts[word]) : new Array(0, 1);
        }
    }

    // return only keys of fracts with fract < 0.9
    tokens_no_props = new Array();
    for (var key in fracts){
        if( fracts[key][0]/fracts[key][1] < 0.9){
            tokens_no_props.push(key);
        }
    }
    return tokens.filter(x => tokens_no_props.includes(x.toLowerCase()));
}

function add1both(array2){
    return [array2[0] + 1, array2[1] +1];
}

function add1one(array2){
    return [array2[0], array2[1] +1];
}

function sortedDict(dict){
	var sortable = [];
	for (var key in dict) {
		sortable.push([key, dict[key]]);
	}
	sortable.sort(function(a, b) {
		return b[1] - a[1];
	});
	return sortable;
}

function atLeast3Occur(sorted_counts){
	return sorted_counts.filter(x => x[1] > 2).map(x => x[0]);
}
