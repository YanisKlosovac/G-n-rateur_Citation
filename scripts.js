const quotes = [
    // Citations Inspirantes
    {
        quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        quote: "La vie est 10% ce qui vous arrive et 90% comment vous y réagissez.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
        author: "Winston Churchill"
    },
    {
        quote: "Le plus grand secret pour le bonheur, c'est d'être bien avec soi.",
        author: "Bernard Fontenelle"
    },
    {
        quote: "Connais-toi toi-même et tu connaîtras l'univers et les dieux.",
        author: "Socrate"
    },
    {
        quote: "L'essentiel est invisible pour les yeux.",
        author: "Antoine de Saint-Exupéry"
    },

    // Citations Humoristiques
    {
        quote: "L'argent ne fait pas le bonheur. Mais il est plus confortable de pleurer en Mercedes qu'à vélo.",
        author: "Inconnu"
    },
    {
        quote: "Je ne suis pas paresseux, je suis en mode économie d'énergie.",
        author: "Inconnu"
    },
    {
        quote: "Je n'ai pas échoué. J'ai simplement trouvé 10 000 solutions qui ne fonctionnent pas.",
        author: "Thomas Edison"
    },
    {
        quote: "Pourquoi les blondes utilisent-elles du dentifrice pour laver leurs vêtements ? Parce qu'on leur a dit que c'était fait pour les taches.",
        author: "Inconnu"
    },
    {
        quote: "Le cerveau est un organe merveilleux. Il commence à fonctionner dès que vous vous réveillez et ne s'arrête qu'une fois arrivé au bureau.",
        author: "Robert Frost"
    },
    {
        quote: "Je ne veux pas atteindre l'immortalité grâce à mon travail. Je veux atteindre l'immortalité en ne mourant pas.",
        author: "Woody Allen"
    },
    {
        quote: "Il n'y a que deux choses infinies : l'univers et la bêtise humaine... mais pour l'univers, je n'ai pas de certitude absolue.",
        author: "Albert Einstein"
    },
    {
        quote: "Je suis tellement intelligent que parfois je ne comprends pas un mot de ce que je dis.",
        author: "Oscar Wilde"
    },
    {
        quote: "Je ne parle pas aux idiots, ça me fatigue trop.",
        author: "Coco Chanel"
    },
    {
        quote: "Je suis multitâche : je peux écouter, ignorer et oublier en même temps.",
        author: "Inconnu"
    },
    {
        quote: "Les hommes sont comme des toilettes publiques. Soit ils sont occupés, soit ils sont pleins de merde.",
        author: "Inconnu"
    },
    {
        quote: "La différence entre un enfant et un adulte ? Le prix de leurs jouets.",
        author: "Inconnu"
    },
    {
        quote: "Le mariage est la principale cause de divorce.",
        author: "Groucho Marx"
    },
    {
        quote: "Il ne faut jamais remettre à demain ce qu'on peut faire faire par un autre.",
        author: "Inconnu"
    },
    {
        quote: "Je ne suis pas en surpoids. Je suis simplement plus facile à voir.",
        author: "Inconnu"
    },
    {
        quote: "Je suis une personne matinale, mais uniquement entre midi et minuit.",
        author: "Inconnu"
    },
    {
        quote: "J'adore les deadlines. J'aime le bruit qu'elles font en passant.",
        author: "Douglas Adams"
    },
    {
        quote: "Il faut aimer les gens, pas pour soi, mais pour eux.",
        author: "Coluche"
    },
    {
        quote: "L'argent ne fait pas le bonheur. Le bonheur non plus, d'ailleurs.",
        author: "Sacha Guitry"
    },
    {
        quote: "Si tu veux te faire des ennemis, essaie de changer quelque chose.",
        author: "Woodrow Wilson"
    },

    // Citations Romantiques
    {
        quote: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        quote: "Le véritable amour commence là où tu n'attends plus rien en retour.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        quote: "On n'aime pas quelqu'un pour son apparence, ses vêtements ou pour sa voiture de luxe, mais parce qu'il chante une chanson que seul vous pouvez entendre.",
        author: "Oscar Wilde"
    },
    {
        quote: "L'amour est la seule chose qui croît quand on la partage.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        quote: "L'amour ne voit pas avec les yeux, mais avec l'âme.",
        author: "William Shakespeare"
    },
    {
        quote: "Le plus grand bonheur après aimer, c'est de confesser son amour.",
        author: "André Gide"
    },
    {
        quote: "L'amour est composé d'une seule âme habitant deux corps.",
        author: "Aristote"
    },
    {
        quote: "Le vrai amour, c'est quand votre cœur et votre esprit disent la même chose.",
        author: "Leigh Ann Lunsford"
    },
    {
        quote: "Aimer et être aimé, c'est sentir le soleil des deux côtés.",
        author: "David Viscott"
    },
    {
        quote: "L'amour est un acte de foi, et celui qui a peu de foi a aussi peu d'amour.",
        author: "Erich Fromm"
    },
    {
        quote: "L'amour est une amitié enflammée.",
        author: "Jeremy Taylor"
    },
    {
        quote: "L'amour ne consiste pas à se regarder l'un l'autre, mais à regarder ensemble dans la même direction.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        quote: "Le cœur a ses raisons que la raison ne connaît point.",
        author: "Blaise Pascal"
    },
    {
        quote: "Aimer, c'est trouver sa richesse hors de soi.",
        author: "Alain"
    },
    {
        quote: "L'amour est la poésie des sens.",
        author: "Honoré de Balzac"
    },
    {
        quote: "L'amour est un tyran qui n'épargne personne.",
        author: "Pierre Corneille"
    },
    {
        quote: "L'amour est une force sauvage. Quand nous essayons de le maîtriser, il nous détruit.",
        author: "Paulo Coelho"
    },
    {
        quote: "L'amour est une rose, chaque pétale une illusion, chaque épine une réalité.",
        author: "Charles Baudelaire"
    },
    {
        quote: "Le cœur perçoit ce que l'œil ne voit pas.",
        author: "Al-Ghazali"
    },
    {
        quote: "L'amour est une fumée faite de la vapeur des soupirs.",
        author: "William Shakespeare"
    },

    // Citations Informatiques
    {
        quote: "Les logiciels sont comme les cathédrales : d'abord on les bâtit, ensuite on prie.",
        author: "Sam Redwine"
    },
    {
        quote: "Il n'y a que deux industries qui appellent leurs clients des utilisateurs : les dealers de drogue et les développeurs de logiciels.",
        author: "Edward Tufte"
    },
    {
        quote: "L'optimisme est un manque d'information.",
        author: "Heiner Müller"
    },
    {
        quote: "Un ordinateur une fois interconnecté, est un outil de communication fabuleux. Il est aussi un moyen fabuleux pour faire des erreurs.",
        author: "John Romero"
    },
    {
        quote: "L'intelligence artificielle n'est pas un substitut à l'intelligence humaine.",
        author: "Abhijit Naskar"
    },
    {
        quote: "Le logiciel est un gaz : il s'étend jusqu'à ce que les systèmes et les mémoires soient saturés.",
        author: "Nathan Myhrvold"
    },
    {
        quote: "La plupart des bugs dans les logiciels sont créés par des gens qui essaient de faire les choses de manière compliquée.",
        author: "Dennis Ritchie"
    },
    {
        quote: "Les bons codeurs codent, les grands réutilisent.",
        author: "David Heinemeier Hansson"
    },
    {
        quote: "La documentation est comme le sexe. Quand c'est bon, c'est très, très bon. Quand c'est mauvais, c'est mieux que rien.",
        author: "Dick Brandon"
    },
    {
        quote: "Les utilisateurs finaux sont les testeurs bêta involontaires.",
        author: "Inconnu"
    },
    {
        quote: "La seule chose que les ordinateurs font parfaitement, c'est rendre les erreurs plus fréquentes.",
        author: "Inconnu"
    },
    {
        quote: "Un programmeur informatique est quelqu'un qui résout un problème que vous ne saviez pas que vous aviez, d'une manière que vous ne comprenez pas.",
        author: "Inconnu"
    },
    {
        quote: "Le meilleur débogueur jamais créé est entre vos oreilles.",
        author: "Steve McConnell"
    },
    {
        quote: "Avant de coder, réfléchis. Après avoir codé, réfléchis encore.",
        author: "John Woods"
    },
    {
        quote: "Les systèmes informatiques sont faits pour résoudre des problèmes que nous n'aurions pas sans eux.",
        author: "Inconnu"
    },
    {
        quote: "Un bon programmeur est quelqu'un qui regarde les deux côtés avant de traverser une rue à sens unique.",
        author: "Doug Linder"
    },
    {
        quote: "Le vrai pirate informatique n'est pas celui qui pirate des systèmes, mais celui qui les comprend et les améliore.",
        author: "Inconnu"
    },
    {
        quote: "Il n'y a rien de plus effrayant que de voir un bug se produire par intermittence.",
        author: "Inconnu"
    },
    {
        quote: "Le temps de développement d'un logiciel est directement proportionnel au temps de la démonstration à un client.",
        author: "Inconnu"
    },
    {
        quote: "Les commentaires dans le code sont des excuses pour les mauvaises décisions.",
        author: "Inconnu"
    },
    {
        quote: "L'ordinateur est comme un dieu : s'il est en colère, il détruit tout.",
        author: "Inconnu"
    },
    {
        quote: "Les machines font des calculs, les humains les expliquent.",
        author: "Inconnu"
    },
    {
        quote: "Le logiciel est comme une blague : s'il faut l'expliquer, c'est qu'il est mauvais.",
        author: "Inconnu"
    },
    {
        quote: "La programmation aujourd'hui est une course entre les ingénieurs logiciels qui s'efforcent de créer des programmes plus gros et meilleurs, et l'univers qui essaie de produire de plus grands idiots. Jusqu'à présent, l'univers gagne.",
        author: "Rick Cook"
    },
    {
        quote: "La programmation est comme composer de la musique ou écrire de la poésie. Cela implique créativité et discipline.",
        author: "John Romero"
    },
    {
        quote: "Les ordinateurs sont incroyablement rapides, précis et stupides. Les humains sont incroyablement lents, imprécis et brillants. Ensemble, ils sont puissants au-delà de toute imagination.",
        author: "Albert Einstein"
    },
    {
        quote: "Les meilleurs programmes sont écrits pour se faire plaisir et non pour de l'argent.",
        author: "Linus Torvalds"
    },
    {
        quote: "Un langage de programmation est une façon d'instruire un ordinateur à faire quelque chose que vous pourriez faire à la main, mais cela prendrait beaucoup plus de temps.",
        author: "John Carmack"
    },
    {
        quote: "Il y a deux manières d'écrire des programmes sans erreurs ; seulement la troisième fonctionne.",
        author: "Alan J. Perlis"
    },
    {
        quote: "La programmation sans planification est la cause de nombreux bugs.",
        author: "Edsger Dijkstra"
    },
    {
        quote: "Un programmeur est un créateur de mondes pour lesquels il est dieu.",
        author: "Inconnu"
    },
    {
        quote: "Si vous pensez que vos utilisateurs sont trop stupides pour comprendre votre programme, c'est probablement vous qui êtes trop stupide pour le rendre compréhensible.",
        author: "Inconnu"
    },
    {
        quote: "Les ordinateurs font de très bons serviteurs, mais de très mauvais maîtres.",
        author: "Inconnu"
    },
    {
        quote: "La seule chose pire que de recevoir un e-mail avec des erreurs, c'est de ne pas recevoir de réponse du tout.",
        author: "Inconnu"
    },
    {
        quote: "Les logiciels sont comme les bébés : faciles à concevoir, difficiles à porter et à mettre au monde.",
        author: "Inconnu"
    },
    {
        quote: "Le but de la programmation n'est pas de créer des lignes de code, mais de résoudre des problèmes.",
        author: "Inconnu"
    },
    {
        quote: "L'ordinateur a été inventé pour résoudre des problèmes qui n'existaient pas avant son invention.",
        author: "Inconnu"
    },
    {
        quote: "Les ordinateurs sont inutiles. Ils ne peuvent que donner des réponses.",
        author: "Pablo Picasso"
    },
    {
        quote: "Les trois grands vertus des programmeurs sont la paresse, l'impatience et l'orgueil.",
        author: "Larry Wall"
    },
    {
        quote: "Le bon code est son propre meilleur document.",
        author: "Steve McConnell"
    },
    {
        quote: "Le temps de développement d'un logiciel augmente jusqu'à ce que tout le temps disponible soit consommé.",
        author: "Inconnu"
    },
    {
        quote: "Les logiciels modernes sont souvent débogués à un tel point qu'ils peuvent être utilisés par des utilisateurs moyens.",
        author: "Inconnu"
    },
    {
        quote: "Les systèmes informatiques complexes ne fonctionnent pas car ils ont été conçus pour ne pas fonctionner.",
        author: "Inconnu"
    },
    {
        quote: "Si les constructeurs construisaient des bâtiments comme les programmeurs écrivent des programmes, le premier pivert venu détruirait la civilisation.",
        author: "Gerald Weinberg"
    },
    {
        quote: "L'art de programmer consiste à organiser et à maîtriser la complexité.",
        author: "Edsger Dijkstra"
    },
    {
        quote: "L'ordinateur est un excellent serviteur mais un mauvais maître.",
        author: "Inconnu"
    },
    {
        quote: "Le code ne ment pas, les commentaires si.",
        author: "Ron Jeffries"
    },
    {
        quote: "Un bon programmeur est quelqu'un qui regarde les deux côtés avant de traverser une rue à sens unique.",
        author: "Doug Linder"
    },
    {
        quote: "Les erreurs dans le code ne sont pas des bugs, ce sont des fonctionnalités involontaires.",
        author: "Inconnu"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = `"${randomQuote.quote}"`;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;
}

generateQuote();

setInterval(generateQuote, 10000);
