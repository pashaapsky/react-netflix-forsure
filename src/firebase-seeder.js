export function seedDatabase(firebase) {
    function getUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const piece = (Math.random() * 16) | 0;
            const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
            return elem.toString(16);
        });
    }

    /* Series
      ============================================ */
    // Documentaries
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Социальная дилемма',
        description: 'Эксперты по технологиям бьют тревогу: их творения несут угрозу обществу. Документальная драма рассказывает о пагубном влиянии социальных сетей на жизнь людей.',
        genre: 'documentaries',
        maturity: '18',
        slug: 'social-dilemma',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Black Pink Озаряя небо',
        description: 'Участницы корейской женской группы BLACKPINK рассказывают о трудном пути мечтаний и испытаний, который привел их к головокружительному успеху.',
        genre: 'documentaries',
        maturity: '12',
        slug: 'black-pink',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Американское убийство',
        description: 'Уникальные документальные кадры описывают исчезновение Шеннон Уоттс и ее детей, а также последующие ужасные события.',
        genre: 'documentaries',
        maturity: '12',
        slug: 'american-kill',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Дэвид Аттенборо Жизнь на нашей планете',
        description: 'Знаменитый ведущий вспоминает свою жизнь, рассуждает об истории эволюции, горюет о навсегда утерянных красотах и предлагает задуматься о том, что ждет нас в будущем.',
        genre: 'documentaries',
        maturity: '12',
        slug: 'earth-life',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Ведьмак как создавался сериал',
        description:
            "Погрузитесь в удивительный мир «Ведьмака» и узнайте секреты этого популярного сериала — от создания персонажей до постановки трюков.",
        genre: 'documentaries',
        maturity: '12',
        slug: 'vedmak',
    });

    // Comedies
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Не пытайтесь это повторить How to sell drugs online',
        description:
            'Чтобы вернуть бывшую девушку, ботаник начинает торговать экстази в интернете — и становится одним из крупнейших дилеров в Европе.',
        genre: 'comedies',
        maturity: '15',
        slug: 'dont-repeat',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Сексуальное просвещение',
        description:
            'Благодаря маме-сексологу неуверенный в себе Отис знает ответы на все вопросы о сексе. Поэтому бунтарка Мэйв предлагает ему открыть клинику сексотерапии.',
        genre: 'comedies',
        maturity: '18',
        slug: 'sex-education',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Разочарование',
        description:
            'Принцессу ждут дела, но праздность куда притягательнее. Свободолюбивая Бин изводит короля, наводя хаос со своими дружками — демоном и эльфом.',
        genre: 'comedies',
        maturity: '15',
        slug: 'disenchantment',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Конец xxxго мира',
        description:
            'В этом трагикомическом сериале на основе графического романа юный психопат и бунтарка в поисках приключений отправляются в опасную поездку.',
        genre: 'comedies',
        maturity: '15',
        slug: 'the-end-world',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Рассвет апокалипсиса',
        description:
            'В Лос-Анджелесе разразился апокалипсис. По улицам бродят голодные зомби и вооруженные банды. В этом хаосе Джош пытается отыскать свою девушку — и, конечно, выжить.',
        genre: 'comedies',
        maturity: '15',
        slug: 'day-break',
    });

    // Children
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Свинка пеппа',
        description:
            'Присоединяйтесь к отважной маленькой свинке Пеппе, ее семье и друзьям. Глядя на их приключения, вы поймете, что веселиться и обучаться можно где угодно.',
        genre: 'children',
        maturity: '0',
        slug: 'peppa-pig',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Даша-путешественница',
        description:
            'ДЕВОЧКА ДАША ОБОЖАЕТ ПРИКЛЮЧЕНИЯ И ПУТЕШЕСТВИЯ. КАЖДУЮ СЕРИЮ ОНА ЛЕГКО НАХОДИТ ПОВОД ДЛЯ ТОГО, ЧТОБЫ ВЗЯТЬ СВОИХ ЛУЧШИХ ДРУЗЕЙ  — КАРТУ И РЮКЗАК  — И ОТПРАВИТЬСЯ В ПОХОД.',
        genre: 'children',
        maturity: '0',
        slug: 'dora-the-explorer',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Щенячий патруль',
        description:
            'Приключенческий комедийный сериал, в котором описываются приключения спасательной команды, состоящей из Райдера, умного мальчика, и восьми щенков: Маршала, Крепыша, Гончика, Роки, Зумы, Скай, Эверест, Треккера. Их главная миссия — защита Бухты Приключений и её жителей от всевозможных напастей.',
        genre: 'children',
        maturity: '0',
        slug: 'paw-patrol',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Артур',
        description:
            'Очкастый трубкозуб Артур Рид показывает детям, как справляться с такими детскими травмами и проблемами, как домашнее задание, учителя и хулиганы.',
        genre: 'children',
        maturity: '0',
        slug: 'arthur',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Спанчбоб',
        description:
            'Желтая морская губка по имени Губка Боб Квадратные Штаны живет в городе Бикини Боттом глубоко в Тихом океане.',
        genre: 'children',
        maturity: '0',
        slug: 'spongebob',
    });

    // Crime
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Создание убийцы',
        description: 'Оправданный после почти двух десятилетий тюремного заключения за преступление, которого он не совершал, Стивен Эйвери подал иск против округа Манитовок, штат Висконсин, и нескольких лиц, причастных к его аресту',
        genre: 'crime',
        maturity: '18',
        slug: 'making-a-murderer',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Long Shot',
        description:
            'Невинный мужчина обвиняется в убийстве, который ведет своего адвоката в безумную погоню, чтобы подтвердить свое алиби, используя необработанные кадры из телешоу.',
        genre: 'crime',
        maturity: '18',
        slug: 'long-shot',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Признание убийцы',
        description: 'Генри Ли Лукас был осужденным серийным убийцей в Америке, преступления которого охватывали период с 1960 по 1983 год. Он был признан виновным в убийстве одиннадцати человек и приговорен к смертной казни за убийство Дебры Джексон, хотя в 1998 году его приговор был заменен на пожизненное заключение',
        genre: 'crime',
        maturity: '18',
        slug: 'the-confession-killer',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Невинный человек',
        description: 'Американский документальный документальный телевизионный сериал о преступности, основанный на книге Джона Гришама 2006 года «Невинный человек: убийство и несправедливость в маленьком городе».',
        genre: 'crime',
        maturity: '18',
        slug: 'the-innocent-man',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Лестница',
        description: 'В 2001 году умерла жена писателя Майкла Петерсона, и он утверждал, что она погибла, упав с лестницы в их доме. Однако судмедэксперт установил, что ее избили оружием',
        genre: 'crime',
        maturity: '18',
        slug: 'the-staircase',
    });

    // Feel-good
    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Хорошая будет охота',
        description: 'Уилл Хантинг, гений математики, решает все сложные математические задачи. Когда он сталкивается с эмоциональным кризисом, он обращается за помощью к психиатру д-ру Шону Магуирето, который помогает ему выздороветь.',
        genre: 'feel-good',
        maturity: '12',
        slug: 'good-will-hunting',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Форрест Гамп',
        description: 'Форрест Гамп, человек с низким IQ, идет на службу в армию, где встречает Дэна и Буббу. Однако он не может перестать думать о возлюбленной своего детства Дженни Карран, жизнь которой испорчена.',
        genre: 'feel-good',
        maturity: '12',
        slug: 'forrest-gump',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Юнона',
        description: 'Социальная неудачница Юнона защищает себя едким остроумием, но ее незапланированная беременность заставляет подростка более активно участвовать в жизни приемных родителей своего ребенка, чем она ожидала',
        genre: 'feel-good',
        maturity: '12',
        slug: 'juno',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Полночь в Париже',
        description: 'Гил приезжает со своей невестой и ее семьей в Париж на каникулы, даже когда пытается закончить свой дебютный роман. Его соблазняет город, который переносит его в прошлое, вдали от невесты.',
        genre: 'feel-good',
        maturity: '12',
        slug: 'midnight-in-paris',
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Школа Рока',
        description: 'Дьюи Финн, энтузиаст рока-любителя, хитро берет на себя работу заместителя учителя своего друга. Не имея для этого квалификации, он вместо этого начинает обучать студентов формировать группу',
        genre: 'feel-good',
        maturity: '12',
        slug: 'school-of-rock',
    });

    /* Films
      ============================================ */
    // Drama
    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Престиж',
        description: 'Два друга и коллеги-волшебники становятся заклятыми врагами после внезапной трагедии. Посвятив себя этому соперничеству, они приносят жертвы, приносящие им славу, но с ужасными последствиями',
        genre: 'drama',
        maturity: '15',
        slug: 'the-prestige',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Бойцовский клуб',
        description: 'Недовольный своим капиталистическим образом жизни, бессонница с белыми воротничками создает подпольный бойцовский клуб с Тайлером, неосторожным продавцом мыла. Вскоре проект превращается во что-то зловещее. ',
        genre: 'drama',
        maturity: '15',
        slug: 'fight-club',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Речь королей',
        description: 'Король Георг VI пытается преодолеть проблему заикания с помощью логопеда Лайонела Лога и делает себя достаточно достойным, чтобы вести свою страну через Вторую мировую войну',
        genre: 'drama',
        maturity: '15',
        slug: 'kings-speech',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Ревенант',
        description: 'Хью Гласс, легендарный пограничник, тяжело ранен в результате нападения медведя и брошен своей охотничьей командой. Он использует свои навыки, чтобы выжить и отомстить своему товарищу, который его предал.',
        genre: 'drama',
        maturity: '15',
        slug: 'the-revenant',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Социальная сеть',
        description: 'Марк Цукерберг создает социальную сеть Facebook с помощью своего друга Эдуардо Саверина. Но вскоре череда лжи разрывает их отношения, даже когда Facebook объединяет людей',
        genre: 'drama',
        maturity: '12',
        slug: 'the-social-network',
    });

    // Suspense
    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Остров проклятых',
        description: 'Тедди Дэниэлс и Чак Оул, два маршала США, отправлены в психиатрическую больницу на отдаленном острове для расследования исчезновения пациента, где Тедди раскрывает шокирующую правду об этом месте',
        genre: 'suspense',
        maturity: '15',
        slug: 'shutter-island',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Ушедшая девушка',
        description:
            'Ник Данн обнаруживает, что все внимание СМИ переключилось на него, когда его жена Эми Данн исчезла в день их пятой годовщины свадьбы',
        genre: 'suspense',
        maturity: '15',
        slug: 'gone-girl',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Заключенные',
        description: 'Когда полиции требуется время, чтобы найти дочь Келлера Дувра и ее подругу, он решает пойти на поиски сам. Его отчаяние приближает его к поиску истины, а также ставит под угрозу его собственную жизнь',
        genre: 'suspense',
        maturity: '15',
        slug: 'prisoners',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Семь',
        description: 'Серийный убийца начинает убивать людей согласно семи смертным грехам. Двум сыщикам, одному недавно приехавшему в город, а другому собирающемуся уйти на пенсию, поручено задержать преступника.',
        genre: 'suspense',
        maturity: '15',
        slug: 'seven',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Зодиак',
        description: 'Роберт Грейсмит, карикатурист по профессии, навязчиво думает об убийце Зодиака. Он использует свои способности решать головоломки, чтобы приблизиться к раскрытию личности убийцы.',
        genre: 'suspense',
        maturity: '15',
        slug: 'zodiac',
    });

    // Children
    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Отель Трансильвания',
        description:
            'Дракула, владеющий элитным курортом для монстров, пытается удержать свою дочь от любви к Джонатану, человеку.',
        genre: 'children',
        maturity: '0',
        slug: 'hotel-transylvania',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Гадкий я',
        description: 'Грю, криминальный вдохновитель, берет троих сирот в качестве пешек для совершения крупнейшего ограбления в истории. Его жизнь принимает неожиданный поворот, когда маленькие девочки видят в нем своего потенциального отца.',
        genre: 'children',
        maturity: '0',
        slug: 'despicable-me',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Холодное сердце',
        description: 'Анна отправляется в путешествие с ледяным человеком Кристоффом и его оленем Свеном, чтобы найти свою сестру Эльзу, способную превратить любой объект или человека в лед',
        genre: 'children',
        maturity: '0',
        slug: 'frozen',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Унесенные призраками',
        description: 'В этом анимационном фильме известного японского режиссера Хаяо Миядзаки 10-летняя Тихиро (Руми Хиираги) и ее родители (Такаши Наито, Ясуко Савагути) натыкаются на, казалось бы, заброшенный парк развлечений',
        genre: 'children',
        maturity: '0',
        slug: 'spirited-away',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Вверх',
        description:
            "Карл, старый вдовец, отправляется в приключение в своем летающем доме в поисках Парадайз-Фолс, места, о котором мечтала его жена.",
        genre: 'children',
        maturity: '0',
        slug: 'up',
    });

    // Thriller
    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Джокер',
        description:
            'Вечно одинокий в толпе, неудавшийся комик Артур Флек ищет связи, прогуливаясь по улицам Готэм-сити.',
        genre: 'thriller',
        maturity: '15',
        slug: 'joker',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Тихое место',
        description: 'Семья Эбботов теперь должна столкнуться с ужасами внешнего мира, молча борясь за выживание. Вынужденные отправиться в неизвестность, они понимают, что существа, которые охотятся с помощью звука, - не единственные угрозы, скрывающиеся за песчаной тропой.',
        genre: 'thriller',
        maturity: '15',
        slug: 'a-quiet-place',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Черный лебедь',
        description: 'Нина, балерина, получает шанс сыграть Белого лебедя, принцессу Одетту. Но она обнаруживает, что впадает в безумие, когда Томас, художественный руководитель, решает, что Лили могла бы лучше подходить на эту роль',
        genre: 'thriller',
        maturity: '15',
        slug: 'black-swan',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Ночной бездельник',
        description: 'Луи Блум, мелкий воришка, понимает, что он может зарабатывать деньги, делая фотографии преступных действий, и начинает прибегать к экстремальным методам, чтобы их заполучить',
        genre: 'thriller',
        maturity: '15',
        slug: 'nightcrawler',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Молчание ягнят',
        description: 'Кларис Старлинг, агент ФБР, ищет помощи у Ганнибала Лектера, серийного убийцы-психопата и бывшего психиатра, чтобы задержать другого серийного убийцу, который заявлял о своих жертвах',
        genre: 'thriller',
        maturity: '15',
        slug: 'the-silence-of-the-lambs',
    });

    // Romance
    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Звезда родилась',
        description:
            'Влюбившись в борющегося артиста Элли, Джексон, музыкант, уговаривает ее следовать своим мечтам, в то время как он борется с алкоголизмом и своими личными демонами.',
        genre: 'romance',
        maturity: '15',
        slug: 'a-star-is-born',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Blue Valentine',
        description: 'Дин и Синтия женаты, у них есть дочь, и их брак вот-вот распадется. Оба происходят из неблагополучных семей и изо всех сил пытаются понять свои отношения ',
        genre: 'romance',
        maturity: '15',
        slug: 'blue-valentine',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Ла Ла Ленд',
        description: 'Себастьяна (Райан Гослинг) и Миа (Эмма Стоун) сближает их общее желание заниматься любимым делом. Но по мере роста успеха они сталкиваются с решениями, которые начинаются ... ',
        genre: 'romance',
        maturity: '15',
        slug: 'la-la-land',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Записная книжка',
        description: 'Герцог ежедневно читает историю об Алли и Ноа, двух влюбленных, разделенных судьбой, г-же Гамильтон, старухе, страдающей болезнью Альцгеймера, из своей записной книжки',
        genre: 'romance',
        maturity: '15',
        slug: 'the-notebook',
    });

    firebase.firestore().collection('films').add({
        id: getUUID(),
        title: 'Титаник',
        description: 'Семнадцатилетняя Роуз происходит из аристократической семьи и собирается выйти замуж. Когда она садится на Титаник, она встречает Джека Доусона, художника, и влюбляется в него. ',
        genre: 'romance',
        maturity: '15',
        slug: 'titanic',
    });
}