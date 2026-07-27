// English content. Full stories: Sonya through Viktor + Ruslan (id 0-12). Rest of menu is translated, stories pending.
(function () {
  const SONYA_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.3-9.3-9.1C1.2 7.6 3 4.3 6.5 4.3c2 0 3.4 1.1 4.1 2.4.2.4.7.4.9 0 .7-1.3 2.1-2.4 4.1-2.4 3.5 0 5.3 3.3 3.8 6.6C19 15.7 12 20 12 20z"/></svg>';

  const CHARACTERS = [
    { id: 0, key: 'sonya',  name: 'Sonya',  gender: 'ж', theme: 'survived a late-term abortion, disability, adoption', color: '#ea8853', icon: SONYA_ICON },
    { id: 1, key: 'nastya', name: 'Claire', gender: 'ж', theme: "survived a genocide/massacre, forgave her family's killers", color: '#e4243b' },
    { id: 2, key: 'liza',   name: 'Rachel',   gender: 'ж', theme: 'abused by someone she trusted; justice and forgiveness', color: '#397ec6' },
    { id: 3, key: 'timur',  name: 'Marcus',  gender: 'м', theme: 'gang leader turned preacher', color: '#e46128' },
    { id: 4, key: 'sergey', name: 'Michael', gender: 'м', theme: 'captivity and torture, PTSD and alcoholism, forgave his torturer', color: '#9ac639' },
    { id: 5, key: 'maksim', name: 'Anthony', gender: 'м', theme: 'corruption and prison, converted through a book, ministry to former inmates', color: '#7539c6' },
    { id: 6, key: 'kristina', name: 'Christine', gender: 'ж', theme: 'lecturer and activist, converted through a years-long friendship with a pastor', color: '#c68039' },
    { id: 7, key: 'polina', name: 'Paige', gender: 'ж', theme: 'suicide attempt, disability, became a pro-life advocate', color: '#ea536e' },
    { id: 8, key: 'marina', name: 'Michelle', gender: 'ж', theme: 'kidnapped and enslaved by traffickers, faith as an anchor', color: '#23dcb7' },
    { id: 9, key: 'alina', name: 'Amber', gender: 'ж', theme: 'addiction and life on the street, recovery through a shelter', color: '#de8d24' },
    { id: 10, key: 'zara', name: 'Leah', gender: 'ж', theme: 'conversion from a Muslim family, risking her life', color: '#c639a0' },
    { id: 11, key: 'viktor', name: 'Nathan', gender: 'м', theme: 'atheist journalist, converted through his own investigation', color: '#397fc6' },
    { id: 12, key: 'ruslan', name: 'Ethan', gender: 'м', theme: 'from a religious family, converted through a years-long argument with a friend', color: '#accd32' },
    { id: 13, key: 'roman', name: 'Derek', gender: 'м', theme: 'drug lord, prison, became a pastor', color: '#e3361c' },
    { id: 14, key: 'anton', name: 'Jake', gender: 'м', theme: 'homeless, heroin addiction', color: '#3939c6' },
    { id: 15, key: 'pavel', name: 'Paul', gender: 'м', theme: 'clinical death and miraculous healing', color: '#e9b74a' },
    { id: 16, key: 'yulia', name: 'Julia', gender: 'ж', theme: 'grew up in a closed religious group, rebuilt her faith after leaving', color: '#3ac66b' },
    { id: 17, key: 'oksana', name: 'Erin', gender: 'ж', theme: 'combat PTSD, alcohol, ministry to fellow veterans', color: '#48ca87' },
    { id: 18, key: 'vika', name: 'Victoria', gender: 'ж', theme: 'domestic abuse, faith as a path to dignity', color: '#de2458' },
    { id: 19, key: 'tanya', name: 'Tara', gender: 'ж', theme: 'psychosis linked to bipolar disorder, faith alongside treatment', color: '#b862d2' },
    { id: 20, key: 'galya', name: 'Gail', gender: 'ж', theme: 'bankruptcy and poverty, trusting God with finances', color: '#c69139' },
    { id: 21, key: 'denis', name: 'Dennis', gender: 'м', theme: 'radical nationalist, converted through a Black pastor', color: '#644f4f' },
    { id: 22, key: 'ignat', name: 'Ian', gender: 'м', theme: 'secret pastor in a country where faith is banned, prison', color: '#d12e79' },
    { id: 23, key: 'artem', name: 'Arthur', gender: 'м', theme: 'bankruptcy after a business collapse, faith and financial recovery', color: '#39c691' },
    { id: 24, key: 'grisha', name: 'Gregory', gender: 'м', theme: 'teenage killing, prison, ministry as a chaplain', color: '#c66c39' },
    { id: 25, key: 'stas', name: 'Stanley', gender: 'м', theme: 'divorce, rebuilding fatherhood through faith', color: '#395fc6' },
    { id: 26, key: 'zhenya', name: 'Jenny', gender: 'ж', theme: 'eating disorder, healing through faith', color: '#d36973' },
    { id: 27, key: 'inna', name: 'Ivy', gender: 'ж', theme: 'miscarriages and infertility, trusting God in grief', color: '#56a5ce' },
    { id: 28, key: 'karina', name: 'Carrie', gender: 'ж', theme: 'sex industry, leaving through non-judgmental ministry', color: '#c63a6b' },
    { id: 29, key: 'darya', name: 'Dana', gender: 'ж', theme: 'athlete at the peak of fame, hidden shame and emptiness', color: '#7bc639' },
    { id: 30, key: 'milana', name: 'Melanie', gender: 'ж', theme: 'cancer diagnosis, peace despite fear', color: '#c75538' },
    { id: 31, key: 'egor', name: 'George', gender: 'м', theme: 'athlete at the peak of fame, the emptiness of success', color: '#3982c6' },
    { id: 32, key: 'vadim', name: 'Vincent', gender: 'м', theme: 'death sentence, repentance before execution', color: '#c63939' },
    { id: 33, key: 'kostya', name: 'Kenneth', gender: 'м', theme: 'blind from birth, music and faith', color: '#8748ca' },
    { id: 34, key: 'marat', name: 'Martin', gender: 'м', theme: 'organized crime, leaving at the cost of everything', color: '#3939c6' },
    { id: 35, key: 'yuriy', name: 'Jordan', gender: 'м', theme: 'war refugee, faith amid losing everything', color: '#7dc639' },
    { id: 36, key: 'olya', name: 'Olivia', gender: 'ж', theme: 'paralysis after an injury, faith amid stillness', color: '#63d29b' },
    { id: 37, key: 'natasha', name: 'Diane', gender: 'ж', theme: 'widowhood, grief and a diary as prayer', color: '#ca4887' },
    { id: 38, key: 'lena', name: 'Megan', gender: 'ж', theme: 'teenage pregnancy, choosing life', color: '#cdb754' },
    { id: 39, key: 'vera', name: 'Faith', gender: 'ж', theme: 'caring for a mother with dementia, love without recognition', color: '#567dce' },
    { id: 40, key: 'alya', name: 'Alyssa', gender: 'ж', theme: 'famous singer, panic behind the mask of success', color: '#c7388e' },
    { id: 41, key: 'nina', name: 'Nadine', gender: 'ж', theme: 'chronic invisible illness, prayer without healing', color: '#48a9ca' },
    { id: 42, key: 'lyuda', name: 'Linda', gender: 'ж', theme: "mother of a child with autism, acceptance in full view of others", color: '#c6973a' },
    { id: 43, key: 'andrey', name: 'Andrew', gender: 'м', theme: 'secret Christian seminar, labor camps for faith', color: '#75c639' },
    { id: 44, key: 'gleb', name: 'Glen', gender: 'м', theme: 'rock musician, fame and addiction', color: '#c6397b' },
    { id: 45, key: 'oleg', name: 'Oliver', gender: 'м', theme: 'widowhood after thirty years of marriage', color: '#32accd' },
    { id: 46, key: 'kirill', name: 'Carl', gender: 'м', theme: 'successful executive, hidden alcoholism', color: '#683ac6' },
    { id: 47, key: 'vlad', name: 'Walter', gender: 'м', theme: 'false conviction, prison, exoneration', color: '#c67539' },
    { id: 48, key: 'kolya', name: 'Nicholas', gender: 'м', theme: 'materialist scientist, honestly investigating faith', color: '#1ca0e3' },
    { id: 49, key: 'bogdan', name: 'Theodore', gender: 'м', theme: 'hostage of an armed group, faith in captivity', color: '#c66839' },
  ];

  const STORIES = {
    sonya: {
      start: 'sonya_intro',
      scenes: {
        sonya_intro: { text: "Sonya was never supposed to survive — she was supposed to die. At seven and a half months of pregnancy, doctors injected a saline solution into the womb: it was meant to burn the baby from the inside and out and induce labor of a stillborn within a day. But the doctor on duty that morning hadn't yet started her shift. Sonya was born alive — with burns no living creature should have survived — and took her first breath entirely on her own.", next: 'sonya_childhood' },
        sonya_childhood: { text: "Sonya spent her first months moving between temporary shelters, until a woman named Tamara took her in — not wealthy, but firm in her faith. Tamara was told: at seventeen months, the girl weighed fourteen kilograms of \"dead weight\" and would likely never walk on her own — cerebral palsy, brain damage from lack of oxygen in the hours before birth. \"Nothing will ever come of her,\" they warned Tamara. She simply worked with the girl three times a day, no days off. By three and a half, Sonya took her first steps — with a walker and leg braces, but on her own.", next: 'sonya_choice1' },
        sonya_choice1: { text: "At fourteen, coming into the kitchen for water, Sonya froze in the doorway: the adults were discussing her, not noticing she was standing right there. \"She was supposed to die,\" someone said matter-of-factly, like talking about the weather. That night, lying awake, Sonya put it all together for the first time: the scars no one had ever properly explained, the limp, the three sessions a day with Tamara — none of it had started with an illness or an accident, but with someone else's decision, made for her.", choices: [
          { label: "Accept it as part of God's plan and start talking about it openly", effects: { faith: 10 }, next: 'sonya_bridgeA' },
          { label: "Bury it deep inside and tell no one", effects: { faith: -10 }, next: 'sonya_bridgeB' },
        ] },
        sonya_bridgeA: { text: "Sonya started talking about her birth — first in her church community, where her voice shook so hard everyone could hear it, then at youth gatherings, then in front of halls full of strangers. Every single time, she was genuinely terrified. Every time, afterward, it got a little easier to carry what she used to carry in silence. A few years later, her biological mother found her — lost, aged, struggling for words, as if she'd rehearsed this meeting a hundred times and still forgot where to start.", next: 'sonya_choice2' },
        sonya_bridgeB: { text: "Sonya learned to smile in a way that kept anyone from asking questions — learned to change the subject the moment a conversation touched her childhood or the scar on her leg. She hid that part of herself so carefully she nearly convinced herself it didn't exist. Years later, when her biological mother found her, Sonya felt not relief but a sharp panic — as if someone had dug up a secret she'd kept buried behind her back.", next: 'sonya_choice2' },
        sonya_choice2: { text: "Her mother stands in front of her — shorter than Sonya had imagined, hands trembling slightly — and says quietly, \"Hello. I'm your mother.\" Between them: thirty-some years, and a decision neither of them ever chose to make. She has to decide, right now, standing in the doorway, what to do with those words.", choices: [
          { label: "Forgive and let go, however hard that is", effects: { faith: 15 }, next: 'sonya_endLight' },
          { label: "Turn away and leave, wanting to hear none of it", effects: { faith: -15 }, next: 'sonya_endDark' },
        ] },
        sonya_endLight: { text: "Sonya forgave — not because it was easy, or because her mother had somehow earned it, but because she decided not to carry someone else's guilt as her own for the rest of her life. Today she visits shelters for troubled teens and tells them what no one was there to tell her: that their life is not a mistake, even if someone once decided otherwise. The end of Sonya's story.", next: null, choices: [] },
        sonya_endDark: { text: "Sonya walked away that day without looking back, and never again answered calls from that number. Years later, she still flinches at the word \"mom\" on other people's playgrounds, and keeps everyone who tries to get close at a distance — safe, but completely alone. The end of Sonya's story.", next: null, choices: [] },
      },
    },
    nastya: {
      start: 'nastya_intro',
      scenes: {
        nastya_intro: { text: "Claire grew up in a small town where everything was simply, warmly ordinary: Sunday Mass, loud family dinners, a father who knew every neighbor by name. When killings along ethnic lines swept the country, all of it vanished within a week. Neighbors hid Claire and seven other women in a cramped space behind a wardrobe — a closet that once held bedding now held eight bodies, as long as no one breathed too deeply or moved.", next: 'nastya_scene2' },
        nastya_scene2: { text: "Claire spent ninety-one days in that closet, hearing through the wall the voices of those hunting her and women like her — sometimes right beside her, once literally on the other side of the wardrobe. The women learned not to make a sound even in their sleep. Over those three months Claire grew so thin her clothes hung off her like a hanger, and instead of counting the days, she repeated to herself the names of relatives she learned, in scraps of news, were being found dead one by one.", next: 'nastya_choice1' },
        nastya_choice1: { text: "In the third week in hiding, Claire caught herself unable to say the words of the prayer \"forgive us as we forgive\" — words she had known by heart since childhood. Inside her was nothing but hatred for the people killing outside, and shame for that hatred.", choices: [
          { label: "Keep praying, even feeling nothing", effects: { faith: 10 }, next: 'nastya_bridgeA' },
          { label: "Stop praying and hold on to hatred alone", effects: { faith: -10 }, next: 'nastya_bridgeB' },
        ] },
        nastya_bridgeA: { text: "Claire repeated the words of the prayer every day, even when they felt like empty sound, not prayer. Reading a scrap of Gospel that had ended up in the closet by candlelight, she suddenly understood: forgiveness isn't a feeling that arrives on its own, but a decision you have to make again each morning. When the massacre ended and the women finally stepped into the light, Claire had almost no family left — just an empty house and a list of names with no one left to carry them.", next: 'nastya_choice2' },
        nastya_bridgeB: { text: "Hatred kept Claire on her feet when everything else — hunger, fear, despair — should have broken her. When the massacre ended, she had almost no family left, and inside her remained only that cold, hard feeling she mistook for strength.", next: 'nastya_choice2' },
        nastya_choice2: { text: "Two years later, Claire runs into a man at the market whom she's certain killed people in her neighborhood — she recognizes him by the scar above his eyebrow, burned into her memory through a crack in the wardrobe. He recognizes her too, and freezes on the spot with a basket of vegetables in his hands, as if it were an ordinary day at an ordinary market.", choices: [
          { label: "Walk up and tell him she forgives him", effects: { faith: 15 }, next: 'nastya_endLight' },
          { label: "Walk past, wishing he'd pay for it too someday", effects: { faith: -15 }, next: 'nastya_endDark' },
        ] },
        nastya_endLight: { text: "Claire walked up and spoke the words of forgiveness, though her throat tightened on every word and her hands shook so badly she clasped them behind her back. It didn't bring her family back or erase the ninety-one days in the dark, but it took from hatred its power over her own life. Today she tells this story around the world — not to be pitied, but so someone else might find that same thing in themselves. The end of Claire's story.", next: null, choices: [] },
        nastya_endDark: { text: "Claire walked past without a word, gripping tight in her fist the same hatred she'd carried all those years. She survived in body, but sometimes, waking in the middle of the night, she still hears the voices behind the wardrobe — and knows she never fully left that closet. The end of Claire's story.", next: null, choices: [] },
      },
    },
    liza: {
      start: 'liza_intro',
      scenes: {
        liza_intro: { text: "From the age of thirteen, Rachel saw a sports doctor the whole family and the whole club trusted — a man with a reputation, awards on his office walls, and a line of parents hoping to enroll their kids with him. Under the guise of medical treatment, he sexually abused her again and again across many sessions, and she stayed silent, certain no one would believe her over him.", next: 'liza_scene2' },
        liza_scene2: { text: "Years later, Rachel had ended her athletic career, gotten married, had children — from the outside, an ordinary, happy life. But at night the same office lighting haunted her dreams, and she noticed she couldn't watch broadcasts of the sport she used to compete in. She told only her husband, in a whisper, years after their wedding — and even then, not everything.", next: 'liza_choice1' },
        liza_choice1: { text: "Sixteen years had passed. Scrolling the news late one night while her husband slept, Rachel came across an article about other girls who had survived the same thing from the same man — almost word for word the same details she had never told anyone in full. She realized: stay silent forever, or be the first to say it out loud, under her own name.", choices: [
          { label: "Come forward publicly, even if it wrecks her standing with the community", effects: { faith: 10 }, next: 'liza_bridgeA' },
          { label: "Stay silent and go on as if nothing happened", effects: { faith: -10 }, next: 'liza_bridgeB' },
        ] },
        liza_bridgeA: { text: "Rachel filed the first report, under her real name, knowing there would be no turning back once it went public — the legal training she'd once gotten for entirely different reasons unexpectedly came in useful for untangling the case herself. Part of the community turned its back on her, calling it a betrayal of a man they had so respected. But she kept preparing her statement for the trial in the evenings after the children fell asleep, telling herself that justice and forgiveness weren't mutually exclusive — and within weeks of her coming forward, the number of other women who found the courage to speak up after her had already climbed into the dozens.", next: 'liza_choice2' },
        liza_bridgeB: { text: "Rachel went on living as before, smiling at community gatherings while hiding inside a weight that only grew heavier with the years. She would see him on the news collecting another award, and every time felt like she was suffocating in her own living room — and a few years later, other women began speaking up on their own, without her.", next: 'liza_choice2' },
        liza_choice2: { text: "When the case finally reaches trial — thanks to her own report, or to the other women who found the courage to speak in her place — Rachel is called to testify. The whole room — journalists, former teammates, the defendant himself — watches her, waiting to hear what she'll say.", choices: [
          { label: "Speak of both justice and forgiving him before God", effects: { faith: 15 }, next: 'liza_endLight' },
          { label: "Say only that she wants him to suffer as she suffered", effects: { faith: -15 }, next: 'liza_endDark' },
        ] },
        liza_endLight: { text: "Rachel said words that surprised the whole room: she demanded the full force of the law — and in the same breath, looking him in the eye, said she forgave him before God. It didn't ease the pain instantly or return the stolen years, but it took from the past the right to decide who she'd become next. The end of Rachel's story.", next: null, choices: [] },
        liza_endDark: { text: "Rachel got the sentence she'd fought for, but the fury she walked out of that courtroom with never let go of her. Years later she still wakes at night with the same feeling she had on the day of the verdict — victory turned out far lonelier than she'd imagined. The end of Rachel's story.", next: null, choices: [] },
      },
    },
    timur: {
      start: 'timur_intro',
      scenes: {
        timur_intro: { text: "By sixteen, Marcus ran one of the most dangerous gangs in the district — people crossed the street the moment they spotted him coming, and that feeling of power was the only thing that drowned out the memory of the home he'd run from at twelve. The only law he recognized was force, and the only family he had was whoever wore the same tattoos.", next: 'timur_scene2' },
        timur_scene2: { text: "Marcus had long since lost count of the fights he'd been in and the people he'd put in the hospital. At night, once the gang scattered, all that was left was an empty yard and a silence with no one left to prove himself to — and in that silence, sometimes, real fear crept in, though Marcus would never have admitted it out loud.", next: 'timur_choice1' },
        timur_choice1: { text: "One day an unfamiliar preacher showed up in the neighborhood — no bodyguards, no fear, as if he had no idea where he'd wandered into — and told Marcus straight to his face that he felt as if God had sent him personally to this exact street corner, to this exact gang, and not some other part of the city. He added that God loved Marcus and would not stop loving him no matter what he did. Marcus answered by hitting him and promising to kill him if he ever came back.", choices: [
          { label: "Go anyway and hear what this preacher has to say", effects: { faith: 10 }, next: 'timur_bridgeA' },
          { label: "Round up the gang and break up his next meeting", effects: { faith: -10 }, next: 'timur_bridgeB' },
        ] },
        timur_bridgeA: { text: "Marcus showed up at the next meeting with half the gang — just to show who ran things, and maybe shut the whole thing down with one word. But listening to the sermon among strangers, he suddenly felt not anger but guilt for everything he'd done — for the first time in years. His feet carried him forward, toward the stage, even as his mind screamed at him to turn around.", next: 'timur_choice2' },
        timur_bridgeB: { text: "Marcus and his crew came to break up the meeting, but the crush and shouting inside the packed hall scattered the gang in every direction before he could do anything. Marcus found himself alone, pressed into a crowd of strangers listening to the very preacher he'd sworn to kill.", next: 'timur_choice2' },
        timur_choice2: { text: "The speaker asks if anyone wants to give their life to God right now, without waiting for tomorrow. Marcus stands there, feeling something far bigger than any street fight he'd ever been part of being decided.", choices: [
          { label: "Step forward and change everything", effects: { faith: 15 }, next: 'timur_endLight' },
          { label: "Turn around and walk back to the street", effects: { faith: -15 }, next: 'timur_endDark' },
        ] },
        timur_endLight: { text: "Marcus stepped forward under the eyes of strangers. That night one life ended and another began — no knife in his belt, no gang at his back, but also without the loneliness that had always hidden behind the power. Years later he wrote a book about it and now goes out to street kids just like he once was — in dozens of countries, not just his old neighborhood — telling them what someone once told him. The end of Marcus's story.", next: null, choices: [] },
        timur_endDark: { text: "Marcus turned around and went back to the street, to the same yard and the same silence that scared him more than any gang. A few years later his name turned up in the news again — no longer as a leader's name, just another line in the district crime report, without a word about who he could have become. The end of Marcus's story.", next: null, choices: [] },
      },
    },
    sergey: {
      start: 'sergey_intro',
      scenes: {
        sergey_intro: { text: "Before the war, Michael had competed at major international meets as one of the country's most promising runners; afterward, he came home from over a year in captivity, where he'd been tortured — his body healed faster than his mind. Waiting for him was a wife who didn't recognize the man who'd come back in place of the one she'd seen off to serve, and nightmares that let go of him not one single night.", next: 'sergey_scene2' },
        sergey_scene2: { text: "By day Michael seemed almost like his old self — joking, going to work, smiling at the neighbors. But the moment the light went out, he was back in the camp: the same guard's voice, the same smell, the same helplessness. He began fearing the dark more than he'd feared it in captivity itself, and admitted it to no one, including himself.", next: 'sergey_choice1' },
        sergey_choice1: { text: "Michael started drinking just to get a little sleep without dreams of the camp, and every month the dose he needed grew. One night he woke up with his hands around his own wife's throat — he'd dreamed he was strangling the guard he privately called Bird. In tears, his wife silently packed her things to leave, without a single word of reproach, which was more frightening than any scream.", choices: [
          { label: "Beg her to stay and promise to quit drinking", effects: { faith: 0 }, next: 'sergey_bridgeCommon' },
          { label: "Let her go without a word, thinking he deserves to be alone", effects: { faith: -5 }, next: 'sergey_bridgeCommon' },
        ] },
        sergey_bridgeCommon: { text: "His wife went to meet a visiting preacher anyway, more out of despair than faith — and came home different: calm, almost glowing, as if she'd finally found what she'd been searching for for years. She asked nothing of Michael, just invited him to come along next time, if he wanted.", choices: [
          { label: "Go with her and listen", effects: { faith: 10 }, next: 'sergey_choice2' },
          { label: "Stay home drinking alone", effects: { faith: -10 }, next: 'sergey_endDark' },
        ] },
        sergey_choice2: { text: "The preacher speaks of war, suffering, and how God asks of a person not strength but faith — simple words that somehow break through what years of therapy never touched. Michael suddenly remembers every promise he made to God back in the camp, when he thought he wouldn't live to see morning.", choices: [
          { label: "Pray honestly for the first time in years and forgive his torturer", effects: { faith: 15 }, next: 'sergey_endLight' },
          { label: "Get up and walk out silently, not ready to forgive", effects: { faith: -15 }, next: 'sergey_endDark' },
        ] },
        sergey_endLight: { text: "That same night, for the first time in years, Michael had no nightmares — no guard's voice, no smell, no helplessness. He wrote a letter to the man he'd called Bird — not to excuse him, but to finally free himself of a weight he'd carried longer than the captivity itself had lasted. His wife stayed, and the nightmares never came back. The end of Michael's story.", next: null, choices: [] },
        sergey_endDark: { text: "The nightmares never let Michael go. In time there was no wife left beside him, no strength left to fight them alone, and the guard's voice grew quieter — simply because Michael had stopped fighting at all. The end of Michael's story.", next: null, choices: [] },
      },
    },
    maksim: {
      start: 'maksim_intro',
      scenes: {
        maksim_intro: { text: "Anthony was the right hand of an influential politician — an adviser who handled the dirtiest business of campaigns and backroom deals without asking unnecessary questions, and once boasted in a small circle that he'd walk over bodies for his patron if it came to that. He took pride in how well he did it. He'd long since stopped asking himself where hardball politics ended and outright criminal conduct began, because that question would have kept him up at night if he ever took it seriously.", next: 'maksim_scene2' },
        maksim_scene2: { text: "At the peak of his career, Anthony had an office two doors down from the country's top officials, the respect of people he'd once feared, and total confidence that the cover-up scheme he was part of would never surface. That confidence collapsed on an ordinary Tuesday, with a single phone call from his own lawyer.", next: 'maksim_choice1' },
        maksim_choice1: { text: "The scheme Anthony was part of unraveled faster than he could put together a defense. Journalists were already printing his name on front pages, the investigation dug deeper by the day, and former partners gave testimony against him one after another to save themselves at the cost of his freedom.", choices: [
          { label: "Admit guilt and take responsibility", effects: { faith: 10 }, next: 'maksim_bridgeA' },
          { label: "Pin it all on subordinates and hold out to the last", effects: { faith: -10 }, next: 'maksim_bridgeB' },
        ] },
        maksim_bridgeA: { text: "Anthony went to the investigator himself and admitted to part of the charges that were, in fact, true — a decision his lawyer called suicidal. It cost him his reputation and part of his sentence for conspiracy, but for the first time in years it lifted a weight he'd carried for months without admitting it even to himself.", next: 'maksim_choice2' },
        maksim_bridgeB: { text: "Anthony held out to the end, shifting blame onto everyone below him in the chain and hiring ever more expensive lawyers. The sentence caught up with him anyway — only now with the added mark of a man who sold out his own people to save himself, and didn't even save himself.", next: 'maksim_choice2' },
        maksim_choice2: { text: "In prison, in a cell built for four, a package arrives for Anthony from an old friend from his past life — the last person he expected to hear from after the verdict. Inside is a worn book about faith with a short handwritten letter. The first pages seem dull and naive — exactly what he'd expect from a book like that.", choices: [
          { label: "Read the book to the end and let himself change", effects: { faith: 15 }, next: 'maksim_endLight' },
          { label: "Toss the book aside and count down the days to release", effects: { faith: -15 }, next: 'maksim_endDark' },
        ] },
        maksim_endLight: { text: "Anthony finished the book in one sleepless night — and by dawn no longer recognized in himself the man he'd been just the day before. When he got out, he didn't go back into power; instead, he founded a prison ministry that grew, over the following decades, into dozens of countries around the world — and it turned out to be far harder, and far more important, than any deal he'd ever made. The end of Anthony's story.", next: null, choices: [] },
        maksim_endDark: { text: "Anthony served his sentence to the day and walked free the same man who'd walked into power years earlier — maybe a little more careful, and considerably more bitter toward his former partners. A couple of years later his name surfaced in the news again, this time in a new case, and the book stayed unread on a shelf in a rented apartment. The end of Anthony's story.", next: null, choices: [] },
      },
    },
    kristina: {
      start: 'kristina_intro',
      scenes: {
        kristina_intro: { text: "Christine taught English literature with tenure and was a respected voice in her city's lesbian community — her public columns had shaped the views of a whole circle of like-minded readers for years. She wrote a scathing piece against a Christian men's movement that was gaining popularity — and never expected that among the hundreds of replies, thrilled and outraged alike, would be a letter from a local pastor that would upend everything she believed.", next: 'kristina_scene2' },
        kristina_scene2: { text: "The letter didn't attack or preach — the pastor simply, genuinely asked how exactly she'd arrived at her views, and suggested they talk about it in person sometime. Christine was about to throw it out with the rest of her mail, but something made her sit down and write a reply instead — still sharp, expecting the correspondence to end right there.", next: 'kristina_choice1' },
        kristina_choice1: { text: "His reply was a simple dinner invitation from the pastor and his wife — no argument attached, no attempt whatsoever to change her mind, as if the debate didn't interest him at all. Christine holds the invitation in her hands and has to decide whether to go to dinner with people whose beliefs she'd just publicly mocked in print.", choices: [
          { label: "Go to dinner out of curiosity, strange as it is", effects: { faith: 10 }, next: 'kristina_bridgeA' },
          { label: "Throw out the letter and write a scathing article about it", effects: { faith: -10 }, next: 'kristina_bridgeB' },
        ] },
        kristina_bridgeA: { text: "Christine went to that dinner — and then another, and another, until these evenings became a steady, unforced practice for almost two years. The pastor and his wife never once tried to out-argue her — they simply listened and kept inviting her back, even when Christine deliberately provoked arguments with sharp questions at their own table. Out of pure stubbornness, she started reading the Bible herself, the way a scholar reads a primary source — hunting for contradictions for a future takedown article.", next: 'kristina_choice2' },
        kristina_bridgeB: { text: "Christine skipped the dinner and instead wrote a scathing column about the letter for her readers, which drew plenty of approving replies from people who agreed with her. But one short, undemanding line from the pastor's letter — \"maybe we could just talk sometime\" — kept nagging at her long after the piece ran, and, hidden from her colleagues, she opened a Bible herself for the first time in years.", next: 'kristina_choice2' },
        kristina_choice2: { text: "Nearly two years into reading — at that shared table on one branch of this story, or alone in the evenings on the other — Christine catches herself mid-lecture, realizing she can no longer honestly defend her old views to her students. Accepting the new ones means losing her tenure, her reputation as an uncompromising fighter, and most of the community she'd called her own for twenty years.", choices: [
          { label: "Accept the faith, even knowing the cost", effects: { faith: 15 }, next: 'kristina_endLight' },
          { label: "Set the Bible aside and go back to her old life", effects: { faith: -15 }, next: 'kristina_endDark' },
        ] },
        kristina_endLight: { text: "Christine accepted the faith — and, just as she'd feared, lost her tenured position and most of the community she'd called her own for twenty years. She herself later called what happened not a graceful spiritual journey but \"a train wreck\" — never finding gentler words for it even years later — after which it finally became possible to build something real from the ground up. The end of Christine's story.", next: null, choices: [] },
        kristina_endDark: { text: "Christine set the Bible aside without finishing it and went back to her old columns and her old certainty in herself. She still writes the pastor and his wife short letters now and then — she just can't explain, even to herself, why she can't fully let go of this strange friendship that asks nothing of her. The end of Christine's story.", next: null, choices: [] },
      },
    },
    polina: {
      start: 'polina_intro',
      scenes: {
        polina_intro: { text: "At sixteen, Paige attempted suicide — not on impulse, but after months of quiet, methodical despair that no one close to her suspected. She survived, but was left in a wheelchair: her body, the one thing that had obeyed her her whole life, didn't obey her this time either, leaving her alive, though paralyzed.", next: 'polina_scene2' },
        polina_scene2: { text: "In her first weeks at the hospital, Paige barely spoke — not to the doctors, not to her parents, who came every day with the same helpless faces. She stared at the ceiling and waited for the pain to pass, both the physical kind and the other kind that had brought her here, but neither one went anywhere. Doctors spoke carefully about years of rehabilitation, making no promises she'd walk again, and Paige had to relearn how to use hands that now obeyed her only some of the time.", next: 'polina_choice1' },
        polina_choice1: { text: "Lying motionless for weeks in the hospital, Paige hears her roommate — an ordinary older woman recovering from surgery — quietly praying aloud every night before sleep, not for show, just out of a lifetime's habit. One day she's invited to join, with no pressure, the way you'd offer someone water.", choices: [
          { label: "Listen, and one day try praying herself", effects: { faith: 10 }, next: 'polina_bridgeA' },
          { label: "Ignore it and grow even angrier at the world", effects: { faith: -10 }, next: 'polina_bridgeB' },
        ] },
        polina_bridgeA: { text: "Paige began praying clumsily, not knowing the right words, just voicing her pain however it came out. For the first time in a long while, something inside grew a little quieter, though her body never obeyed the way it once had, and the wheelchair stayed part of her life.", next: 'polina_choice2' },
        polina_bridgeB: { text: "Paige grew angry at her roommate, at the doctors, at her own body for refusing to die the way she wanted and planned. The anger never left — it only grew, day by day, inside four identical hospital walls.", next: 'polina_choice2' },
        polina_choice2: { text: "Two years after being discharged, already used to the wheelchair, Paige is invited to speak before a state legislative committee looking into access to crisis support for teenagers — to tell it all exactly as it happened, including what she tried to do to herself and why, in front of people who could change the actual rules for thousands of other sixteen-year-olds.", choices: [
          { label: "Agree, and tell it all exactly as it happened", effects: { faith: 15 }, next: 'polina_endLight' },
          { label: "Refuse — let no one know", effects: { faith: -15 }, next: 'polina_endDark' },
        ] },
        polina_endLight: { text: "Paige rolled up to the podium in her wheelchair and told it all without polish, looking every legislator in the eye in turn. Her words made it into the official record of the hearing, and afterward a girl her own age came up to her, shaking, and said she'd thought about the same thing just last week — and changed her mind after hearing Paige's story. Today Paige speaks across the country to youth groups and lawmakers, working to make sure other teenagers in crisis, like she once was at sixteen, get help in time. The end of Paige's story.", next: null, choices: [] },
        polina_endDark: { text: "Paige refused to testify before the committee and went on living, hiding her scars under her clothes and her story under familiar silence. The hearing went ahead without her account, and the proposed measures were never passed that year. The end of Paige's story.", next: null, choices: [] },
      },
    },
    marina: {
      start: 'marina_intro',
      scenes: {
        marina_intro: { text: "Michelle was kidnapped at twenty-one and held in trafficking for nearly twenty years — beatings, being sold from hand to hand, several desperate escapes and just as many recaptures across different cities and even different countries her owners moved her through. She held onto one simple thought, repeating it like a prayer: that one day she would see her children again, the ones left at home the night she was taken.", next: 'marina_scene2' },
        marina_scene2: { text: "Michelle lost count of the cities, countries, and owners she passed through over those years — the names kept changing, but the fear stayed exactly the same. The one thing that never changed was a photo of her children, which she kept sewn into the lining of the one piece of clothing she had left, unfolding it only in the dead of night, when she was certain no one could see it — or take even this last thing from her.", next: 'marina_choice1' },
        marina_choice1: { text: "After yet another brutal punishment for trying to contact home, Michelle is left alone in the dark of a shed and remembers a prayer her grandmother taught her as a child — simple words that had long felt like they belonged to another, now-impossible life.", choices: [
          { label: "Whisper the prayer, even without believing anyone will hear", effects: { faith: 10 }, next: 'marina_bridgeA' },
          { label: "Decide there is no God, since He allows this", effects: { faith: -10 }, next: 'marina_bridgeB' },
        ] },
        marina_bridgeA: { text: "Michelle began repeating that prayer every night — not because she believed, but because she had nothing else left besides the words and the photo in the lining. Slowly the prayer became the one place where she felt like a person with a name, not merchandise.", next: 'marina_choice2' },
        marina_bridgeB: { text: "Michelle stopped praying and held on only to anger and the thought of her children, like the last fuel she had left. The anger gave her strength to keep moving and surviving, but it burned away everything inside her that wasn't pure survival — compassion, tears, the very ability to feel anything besides rage.", next: 'marina_choice2' },
        marina_choice2: { text: "After her release — almost accidental, the result of a raid she only learned about once she'd already been led outside — a social worker, herself a deeply religious woman, offers to take Michelle to church with her. Just to try it; no one is forcing her, and nothing is expected in return.", choices: [
          { label: "Go, and let herself trust again", effects: { faith: 15 }, next: 'marina_endLight' },
          { label: "Refuse — trust cost too much last time", effects: { faith: -15 }, next: 'marina_endDark' },
        ] },
        marina_endLight: { text: "Michelle went. The faith that began as a whisper in the dark of a shed became the foundation of her new life in freedom — today she works a hotline for trafficking victims, helping recognize over the phone the same signs of captivity that once went unnoticed in her, travels to schools and police stations to teach people to spot those signs early, and holds her now-grown children in her arms again, children she had almost given up hope of ever seeing. The end of Michelle's story.", next: null, choices: [] },
        marina_endDark: { text: "Michelle refused and built a new life alone, never fully trusting anyone again, not even her own grown children. She is free in body, but at night she still locks every lock she can find, not just the apartment door. The end of Michelle's story.", next: null, choices: [] },
      },
    },
    alina: {
      start: 'alina_intro',
      scenes: {
        alina_intro: { text: "For years Amber lived between drugs, alcohol, and the street, selling herself for her next fix — a path that began with one party at sixteen and quietly became the only life she remembered. She had long since stopped believing any other life was possible for her, and had lost count of the hospitals where indifferent, exhausted doctors had revived her after an overdose.", next: 'alina_scene2' },
        alina_scene2: { text: "On winter nights Amber sometimes thought about how much time she had left — not with horror, but with the tired indifference of someone who'd long since stopped making plans past the next hit. The only thing that still recalled another possible life was an old photo of herself in her senior year of school, which she still carried, for some reason, in her jacket pocket — though the girl in the photo now felt like a complete stranger from someone else's life.", next: 'alina_choice1' },
        alina_choice1: { text: "A woman from a street mission approaches Amber, not for the first time, with hot coffee and not a single word of judgment — just talking to her like a person, every week, despite Amber having been rude to her before.", choices: [
          { label: "Agree to come to the mission shelter for even one night", effects: { faith: 10 }, next: 'alina_bridgeA' },
          { label: "Wave her off — she's heard promises that meant nothing before", effects: { faith: -10 }, next: 'alina_bridgeB' },
        ] },
        alina_bridgeA: { text: "Amber agreed to come to the mission shelter for one night and stayed a month. At the shelter, for the first time in a long while, nothing was asked of her in return — only a bed, a plate of food, and time to start over, if she wanted it. It was this unconditional care from the shelter's women, who never once asked for anything back, that Amber would later call the first time she physically felt the love of God, rather than just hearing about it in words. The first weeks of sobriety were harder than she'd imagined — withdrawal came in waves at night, and more than once she came within a hair of walking back to her old streets.", next: 'alina_choice2' },
        alina_bridgeB: { text: "Amber waved her off and went back to her usual streets that same night. A couple of weeks later, the same woman found her again on the same corner, with the same hot coffee, without a single word of reproach for turning her down.", next: 'alina_choice2' },
        alina_choice2: { text: "Whether she'd made it through the first brutal weeks of sobriety at the shelter, or simply heard the same invitation again from the coffee woman who never gave up after so many refusals, Amber faces a choice: finally go to a group meeting where she'll have to tell her story out loud to strangers, or go back to where no one asks questions or judges.", choices: [
          { label: "Go, and tell it exactly as it happened", effects: { faith: 15 }, next: 'alina_endLight' },
          { label: "Go back to the street — at least there's no need to explain anything", effects: { faith: -15 }, next: 'alina_endDark' },
        ] },
        alina_endLight: { text: "Amber told her story in a circle of women just like her, and for the first time in years felt no shame — only enormous relief. She trained as a social worker, and today she brews that same hot coffee for other women on the same streets where she once stood herself — not holding out a brochure, but the same patience once shown to her — telling each of them honestly that it was Jesus who lifted the addiction from her, not willpower, which she never had back then at all. The end of Amber's story.", next: null, choices: [] },
        alina_endDark: { text: "Amber went back to the street that same night, as always. The woman with the coffee still looks for her every week, so far without luck, and the old photo from her jacket pocket has long since been lost. The end of Amber's story.", next: null, choices: [] },
      },
    },
    zara: {
      start: 'zara_intro',
      scenes: {
        zara_intro: { text: "Leah grew up in an influential Muslim family, on a large ancestral estate in the foothills that generations of her family had held onto along with homes in two European capitals, where relatives spent part of the year. It all collapsed within a single year: first her parents died, one after the other, then her marriage fell apart — and Leah was left entirely alone among the household staff and distant relatives, in a vast house full of strangers' voices and complete inner emptiness.", next: 'zara_scene2' },
        zara_scene2: { text: "Left alone, Leah began praying as she never had before — simple, almost desperate words into the emptiness of the room: \"If You are there, show me who You are.\" She began having unusually vivid, recurring dreams unlike ordinary ones, and a local Christian woman secretly brought her a Bible, which Leah read in the evenings, hiding the book under her pillow from the household staff — in a country where this isn't technically illegal, but where converting from Islam to Christianity is, in practice, often punished far faster and more harshly than any court ever could. The word \"Father,\" which the book used for God, struck her especially hard and almost defiantly — she'd buried her own father so recently, and least of all expected to say that word again to anyone.", next: 'zara_choice1' },
        zara_choice1: { text: "A relative, stopping by the estate to check on her, happened to notice an unfamiliar book on the nightstand and, frowning, asked directly what it was and why Leah was reading something like that instead of the Quran.", choices: [
          { label: "Tell the truth, whatever it costs", effects: { faith: 10 }, next: 'zara_bridgeA' },
          { label: "Lie and keep it a total secret", effects: { faith: -10 }, next: 'zara_bridgeB' },
        ] },
        zara_bridgeA: { text: "Leah told the truth right there by the bed, bracing for a scandal — and it wasn't long in coming. Word swept through relatives and neighbors across the estate within a matter of weeks, gathering details along the way that had never even happened.", next: 'zara_choice2' },
        zara_bridgeB: { text: "Leah lied, claiming on the spot that the book must have been left behind by one of the foreign guests, and kept reading it in secret at night, putting out the light at the smallest creak of a floorboard outside her bedroom door.", next: 'zara_choice2' },
        zara_choice2: { text: "Word of her faith — whether openly admitted by her or carefully hidden away at night — reached the whole area sooner or later regardless, and soon someone tried to burn her house down at night, thankfully destroying only the veranda, but leaving an unmistakable warning. Through a Christian charity that helps people like her, Leah is offered a chance to leave the country immediately, giving up the ancestral estate, the homes in Europe, and everything she had known her whole life.", choices: [
          { label: "Leave that same autumn, whatever lies ahead", effects: { faith: 15 }, next: 'zara_endLight' },
          { label: "Stay — the fear of losing her only home is stronger", effects: { faith: -15 }, next: 'zara_endDark' },
        ] },
        zara_endLight: { text: "Leah left across the ocean with a single suitcase, leaving behind the house where generations of her family had grown up. In her new home, she wrote a book about what she had lived through, which sold hundreds of thousands of copies in several languages and has spent decades helping others walk a similar path. The end of Leah's story.", next: null, choices: [] },
        zara_endDark: { text: "Leah stayed, choosing to bury her faith so deep that at times she doubted it had ever really happened. The house survived, but she never again opened a Bible in daylight, keeping that winter in her memory as something that seemed to have happened to someone else. The end of Leah's story.", next: null, choices: [] },
      },
    },
    viktor: {
      start: 'viktor_intro',
      scenes: {
        viktor_intro: { text: "Nathan ran the legal desk at a major city newspaper and took pride in never believing a single fact without evidence and cross-referenced sources — that reputation as an unshakeable skeptic mattered to him more than almost any relationship. When his wife suddenly came to faith after several difficult years of marriage, he was absolutely certain he'd apply the same methods he'd used for years to cross-examine witnesses in court, and easily prove to her with facts that she was wrong.", next: 'viktor_scene2' },
        viktor_scene2: { text: "Nathan, used to years of extracting confessions from hardened criminals in the courtroom, started with what he considered an easy warm-up — a quick rundown of the objections to the resurrection he'd heard dozens of times at press gatherings. But every one of these familiar objections, once he actually checked it seriously instead of just repeating it from memory, fell apart at the first serious primary source — and that irritated him far more than he was willing to admit.", next: 'viktor_choice1' },
        viktor_choice1: { text: "Nathan decides to use every skill from his journalism career to methodically, genuinely take his wife's faith apart with evidence, rather than just wave it off over dinner.", choices: [
          { label: "Start a genuinely honest investigation, wherever it leads", effects: { faith: 10 }, next: 'viktor_bridgeA' },
          { label: "Only gather facts that already confirm he's right", effects: { faith: -10 }, next: 'viktor_bridgeB' },
        ] },
        viktor_bridgeA: { text: "For nearly two years, Nathan methodically studied historical documents, interviewed experts, historians, and legal scholars, trying to find even one weak point in the resurrection account — and the deeper he dug as a professional, the harder it became to refute it by the standards of his own field.", next: 'viktor_choice2' },
        viktor_bridgeB: { text: "Nathan hastily put together a folder of objections that satisfied him over breakfast, but it fell apart at the first serious conversation with people who had actually studied the question for years, rather than just repeating the same tired talking points.", next: 'viktor_choice2' },
        viktor_choice2: { text: "After two years of an investigation that started as an attack on his wife's faith, Nathan sits with a conclusion completely at odds with where he began two years earlier — and that discovery frightens him more than any story he has ever broken.", choices: [
          { label: "Accept the conclusions of his own investigation and embrace the faith", effects: { faith: 15 }, next: 'viktor_endLight' },
          { label: "Discard his own conclusions, because changing his mind is too uncomfortable", effects: { faith: -15 }, next: 'viktor_endDark' },
        ] },
        viktor_endLight: { text: "Nathan admitted: staying an atheist after an investigation like that would take more blind faith than becoming a Christian — and his professional integrity could no longer allow that. He left journalism to spend his time explaining to others the same investigation that had upended his own life, and turned his two years of research into a book, written in the same language of legal evidence he had once used for his reporting. The end of Nathan's story.", next: null, choices: [] },
        viktor_endDark: { text: "Nathan tossed the folder with his own conclusions into a desk drawer and kept his old public opinion — just to avoid admitting to his colleagues that he'd been wrong for two years straight. His wife never brought up the subject at dinner again. The end of Nathan's story.", next: null, choices: [] },
      },
    },
    ruslan: {
      start: 'ruslan_intro',
      scenes: {
        ruslan_intro: { text: "Ethan had known the sacred texts by heart since childhood and had spent his whole life preparing to defend his faith — that is what his whole family expected, proud of what a serious child he had grown into. At university he became friends with a Christian, and their friendship quickly turned into a years-long, but always respectful, argument.", next: 'ruslan_scene2' },
        ruslan_scene2: { text: 'The argument went on for years over tea after lectures, never once turning into a quarrel — they respected each other too much to get personal. Ethan knew all the standard answers to the standard questions in advance, but his friend stubbornly refused to ask standard questions, digging far deeper than Ethan was used to answering.', next: 'ruslan_choice1' },
        ruslan_choice1: { text: "After one such conversation, his friend raised a serious historical argument from primary sources that Ethan — for all his preparation — could not find a convincing answer to, and that frightened him far more than any argument before it.", choices: [
          { label: 'See the question through to the end, even if he will not like the answer', effects: { faith: 10 }, next: 'ruslan_bridgeA' },
          { label: 'Close the subject and never raise it with his friend again', effects: { faith: -10 }, next: 'ruslan_bridgeB' },
        ] },
        ruslan_bridgeA: { text: 'For three and a half years Ethan studied the sources of both faiths in the evenings, secretly from most people he knew — not to win the next round of tea-time debate, but to finally, once and for all, learn the truth, however uncomfortable it turned out to be.', next: 'ruslan_choice2' },
        ruslan_bridgeB: { text: 'Ethan avoided the subject for months, finding ever new excuses to postpone meeting his friend. But the question left unanswered kept sounding in his head every time he opened his usual books before bed.', next: 'ruslan_choice2' },
        ruslan_choice2: { text: 'Years into secret study, Ethan arrives at a conclusion that frightens him: he can no longer honestly defend his old faith to himself, let alone to others — and an open conversion will cost him nearly every relationship he has, including his family.', choices: [
          { label: 'Accept what he believes to be true, whatever the cost', effects: { faith: 15 }, next: 'ruslan_endLight' },
          { label: 'Stay in his old faith for the sake of family and friends', effects: { faith: -15 }, next: 'ruslan_endDark' },
        ] },
        ruslan_endLight: { text: 'Ethan made the choice he calls the most painful of his life — and, as he feared, lost nearly everyone he loved within a single year. He spent the time that remained honestly explaining to others the path of doubt and loss he had walked himself. The end of Ethan\'s story.', next: null, choices: [] },
        ruslan_endDark: { text: "Ethan stayed in his old faith, keeping his family and familiar circle of friends, but his friend's question was never honestly answered — just buried deep enough not to keep him up at night. The end of Ethan's story.", next: null, choices: [] },
      },
    },
    roman: {
      start: 'roman_intro',
      scenes: {
        roman_intro: { text: "Derek built his network in Queens and, together with his older brothers, supplied cocaine up and down the Eastern Seaboard, working directly with a Colombian cartel — money, risk, and other people's fear were as normal a part of his life as morning coffee is for other people, until he was set up by one of his own associates, caught by federal agents and turned informant.", next: 'roman_scene2' },
        roman_scene2: { text: "Derek and one of his brothers were pulled over on the highway while delivering product to a client in Manhattan — both tried to run but were caught on the spot, and the car held nearly four million dollars' worth of cocaine. Derek had long sensed this day would come, and the moment of arrest brought not so much fear as a strange, almost relieving feeling: no more waiting.", next: 'roman_choice1' },
        roman_choice1: { text: "The prosecutor initially demands twenty-five years for everything at once. His lawyer, looking away, says there's a real chance to significantly cut the sentence if Derek can convincingly show the court he is genuinely changing — before the trial itself, not after.", choices: [
          { label: 'Look honestly, for the first time, at who he has become', effects: { faith: 10 }, next: 'roman_bridgeA' },
          { label: 'Treat it purely as a tactic for a shorter sentence', effects: { faith: -10 }, next: 'roman_bridgeB' },
        ] },
        roman_bridgeA: { text: "Even before the trial, his older brother, himself newly a believer, began visiting Derek regularly in the detention center, and one day, without any pressure, simply told him about Jesus — not like a preacher on schedule, but like family. Derek started attending the prison chapel services — at first just to kill time between interrogations, but at one of the gatherings, against all expectation, he felt for the first time in his life a real, tangible peace inside, not just a passing lull. He began keeping a short journal in the evenings, trying honestly, for the first time in his life, to reckon day by day how many people and families had been hurt by what he'd built for money.", next: 'roman_choice2' },
        roman_bridgeB: { text: 'Derek dutifully showed up at the services just for show, rehearsing the right words of remorse in front of his cell mirror for the future judge, but nothing genuinely changed inside — only his irritation grew at having to pretend.', next: 'roman_choice2' },
        roman_choice2: { text: "The judge reads out the reduced sentence — three years instead of the original twenty-five, amid hushed whispers in a courtroom where both former customers and the parents of people pulled into his network are sitting. Derek now has those specific years to decide, in action rather than words to a judge, who he'll be when he walks free.", choices: [
          { label: 'Use these years to genuinely become a different person', effects: { faith: 15 }, next: 'roman_endLight' },
          { label: 'Just sit out the sentence and go back to his old connections', effects: { faith: -15 }, next: 'roman_endDark' },
        ] },
        roman_endLight: { text: 'Derek walked out of prison a completely different man and returned to the same city not as a dealer, but as the pastor of a small church in the same neighborhood where he once sold death. Today his church is full of people the whole district used to fear — including, once, himself. The end of Derek\'s story.', next: null, choices: [] },
        roman_endDark: { text: "Derek walked free right on schedule and restored his old connections almost immediately, as if those years behind bars had never happened. They changed little besides the address where his new case summonses are now sent. The end of Derek's story.", next: null, choices: [] },
      },
    },
    anton: {
      start: 'anton_intro',
      scenes: {
        anton_intro: { text: 'Jake ended up homeless and addicted to heroin on the street at twenty-five — it all started innocently enough, with petty street crime and company that seemed fun, and ended with nothing left to lose, including a roof over his head.', next: 'anton_scene2' },
        anton_scene2: { text: "In winter, Jake learned to find the warm subway ventilation grates and to tell which courtyards he could sleep in without risk of being chased off or robbed by his own kind. He had long since stopped counting days and almost stopped considering himself someone for whom any other life was possible.", next: 'anton_choice1' },
        anton_choice1: { text: 'Someone at the homeless shelter Jake only visited to warm up offers him something simple: just come to the evening meeting and listen — no conditions, no pressure to join a program, just come once.', choices: [
          { label: 'Come, because he really has nothing left to lose', effects: { faith: 10 }, next: 'anton_bridgeA' },
          { label: "Refuse — he doesn't believe in anything or anyone anymore", effects: { faith: -10 }, next: 'anton_bridgeB' },
        ] },
        anton_bridgeA: { text: 'Jake came out of pure curiosity and stayed listening far longer than he had planned. At the end he was told simply to give his life to God right there, in the hall — and, without really knowing what that meant, he did exactly that, more out of exhaustion than faith.', next: 'anton_choice2' },
        anton_bridgeB: { text: "Jake refused and spent that night in his usual spot — on the subway grate, with the usual dose, listening to the same meeting he had been invited to sounding faintly somewhere in the distance.", next: 'anton_choice2' },
        anton_choice2: { text: "The next morning Jake's body demands its usual dose of heroin, as it had demanded every morning for years — but something inside him, which he cannot quite explain even to himself, holds him in place for the first time instead of driving him out to find it.", choices: [
          { label: 'Not go looking for the dose, and stay at the shelter', effects: { faith: 15 }, next: 'anton_endLight' },
          { label: 'Go looking for the usual dose, like every morning', effects: { faith: -15 }, next: 'anton_endDark' },
        ] },
        anton_endLight: { text: "Jake did not go looking for the dose — and, against everything he knew about withdrawal from past experience, felt none of the usual agony in his body. He calls it not willpower, which he had never had, but someone else carrying it for him, on that one particular day. The end of Jake's story.", next: null, choices: [] },
        anton_endDark: { text: 'Jake went looking for his usual dose, like any other morning. The homeless shelter remained just another stop on his route, somewhere he sometimes drops by to warm up in winter, nothing more. The end of Jake\'s story.', next: null, choices: [] },
      },
    },
    pavel: {
      start: 'pavel_intro',
      scenes: {
        pavel_intro: { text: 'Paul was diving for lobster off a tropical island when he was stung, one after another, by five deadly jellyfish — a rare, almost impossible occurrence. The venom was enough to kill an ordinary person within four minutes, and at that moment he believed neither in God nor in any life after death.', next: 'pavel_scene2' },
        pavel_scene2: { text: 'Friends on the boat pulled Paul out of the water already convulsing, his skin blackened by burns where the tentacles had touched him. While they waited for the rescue boat, his body began going numb from the feet up, and his consciousness began fading in slow, heavy waves, as if someone were gradually turning off the lights in different rooms of the same house.', next: 'pavel_choice1' },
        pavel_choice1: { text: 'As his body went numb and his consciousness faded completely, Paul unexpectedly and clearly remembers the one Christian in his family — his mother — and her old words that you can call on God even now, in the last second, if you truly want to.', choices: [
          { label: 'Call on God from the depths of his heart, even without truly believing', effects: { faith: 10 }, next: 'pavel_bridgeA' },
          { label: 'Wave the thought off as a dying delirium', effects: { faith: -10 }, next: 'pavel_bridgeB' },
        ] },
        pavel_bridgeA: { text: "Paul called out — not a proper prayer, the rules of which he didn't really know, but simply a cry of despair from the depths of what remained of his consciousness. Moments later, doctors in the ambulance officially pronounced him dead.", next: 'pavel_choice2' },
        pavel_bridgeB: { text: 'Paul dismissed the thought of God as nonsense produced by a dying brain, and simply waited for it to be over. Doctors in the ambulance soon pronounced him dead, exactly as all the signs indicated.', next: 'pavel_choice2' },
        pavel_choice2: { text: 'Twenty minutes later, already in the hospital morgue, on a metal table for bodies under a sheet, Paul unexpectedly and inexplicably comes back to consciousness — alive, completely paralyzed, but alive, to the horror of the orderly who walks into the room.', choices: [
          { label: 'Accept this as a second chance, given for a reason', effects: { faith: 15 }, next: 'pavel_endLight' },
          { label: 'Write it off as a rare medical fluke and forget about it', effects: { faith: -15 }, next: 'pavel_endDark' },
        ] },
        pavel_endLight: { text: "Lying paralyzed, Paul prayed for healing all night and the next morning walked out of the hospital on his own two feet, though every medical prognosis said he should have stayed paralyzed for life. Since then he has traveled to dozens of countries, telling exactly what he saw beyond that line. The end of Paul's story.", next: null, choices: [] },
        pavel_endDark: { text: "Paul wrote off what happened as a rare, unexplainable medical miracle and tried to forget about it as quickly as possible, going back to his old life as a diver. Sometimes at night he still remembers that tunnel of light — and still hasn't decided for himself what to do with that memory. The end of Paul's story.", next: null, choices: [] },
      },
    },
    yulia: {
      start: 'yulia_intro',
      scenes: {
        yulia_intro: { text: "Julia was raised from childhood in a closed religious group where the elders made every decision for her — what to wear, who to be friends with, exactly which literature she could and could not read. Only at thirty, after so many years of obedience, did she finally work up the nerve to ask a question out loud in front of everyone.", next: 'yulia_scene2' },
        yulia_scene2: { text: "All her life until then, Julia had honestly believed that obedience to the organization was faith itself, and tried to be a model member — attending every meeting, taking part in every event, never letting herself doubt out loud, even alone with herself. One Bible translation, bought by chance at an ordinary store, shattered that calm.", next: 'yulia_choice1' },
        yulia_choice1: { text: "At a community meeting, Julia asked in front of everyone why that ordinary store-bought Bible 'was not enough' and their organization's own translation, no different in meaning, was strictly required. The elders reacted with unexpected sharpness, as if she had said something unthinkable.", choices: [
          { label: 'Keep asking questions, even risking being cast out', effects: { faith: 10 }, next: 'yulia_bridgeA' },
          { label: 'Fall silent and never raise the subject again', effects: { faith: -10 }, next: 'yulia_bridgeB' },
        ] },
        yulia_bridgeA: { text: "Julia kept reading and comparing both texts in the evenings, and the more she read, the more clearly she saw the difference between what she had been taught for years and what was actually written, without distortion. Soon she was formally expelled from the community, and along with it, from everyone she had known since childhood, including her parents.", next: 'yulia_choice2' },
        yulia_bridgeB: { text: "Julia fell silent at the elders' first sharp look and kept attending meetings as before, performing her old obedience. But the question she never finished asking took root inside her and never left, poisoning every meeting after that.", next: 'yulia_choice2' },
        yulia_choice2: { text: "Months after being expelled, completely alone, without a single old friend willing to speak to her, Julia stands before an empty rented apartment and an open Bible — and must decide whether to build her faith again from absolute zero, with her own hands, without anyone else's instructions.", choices: [
          { label: "Start over, honestly seeking God rather than the organization's rules", effects: { faith: 15 }, next: 'yulia_endLight' },
          { label: "Decide that faith is not worth it at all, and walk away into unbelief", effects: { faith: -15 }, next: 'yulia_endDark' },
        ] },
        yulia_endLight: { text: "Julia started over — without elders, without anyone else's ready-made rules, just a Bible and her own uncertain prayer. Building faith from zero turned out to be far more frightening than living by ready-made rules her whole life, but she calls it the first faith that was truly her own. The end of Julia's story.", next: null, choices: [] },
        yulia_endDark: { text: "Julia decided that after so many years of other people's rules and one disappointment too costly, it was simpler not to believe in anything at all. The emptiness turned out quieter than the meetings she had grown up with, but also far lonelier than she was ready to admit. The end of Julia's story.", next: null, choices: [] },
      },
    },
    oksana: {
      start: 'oksana_intro',
      scenes: {
        oksana_intro: { text: "Erin came home after ten months in a war zone, where she'd served in combat roles alongside the men of her unit and more than once, treating the wounded under fire, silently repeated a short, desperate prayer — 'God, let me get home alive' — and once home, she did not recognize herself in the mirror: flinching at any slammed door, unable to sleep more than two hours straight, pouring herself a little more every evening just to shut her mind off for a while.", next: 'oksana_scene2' },
        oksana_scene2: { text: "At home, her daughter greeted her with a 'welcome back' drawing that hung on the fridge for just a week before Erin stopped noticing it at all. The neighbors knew her as a quiet, polite woman — no one but her daughter saw how her hands shook at night, when the bottle ran out before sleep did.", next: 'oksana_choice1' },
        oksana_choice1: { text: "Her daughter, who'd barely turned ten, increasingly hid in her room with the door shut whenever her mother came home drunk in the evenings. A neighbor in the building, a quiet believing woman they barely exchanged greetings with, said one day, without any pressure: 'Come to our Easter service, just sit with us, nothing more.'", choices: [
          { label: "Come, at least once, because there's nothing left to lose", effects: { faith: 10 }, next: 'oksana_bridgeA' },
          { label: "Refuse — she doesn't need anyone's pity", effects: { faith: -10 }, next: 'oksana_bridgeB' },
        ] },
        oksana_bridgeA: { text: "Erin came to that Easter service and, to her own surprise, came back again a week later. The service that day was specifically about Christ as a Commander — in language that she, having served nearly a year on the front line, could genuinely understand — and afterward the pastor told her a single sentence she would remember for years to come: 'Now you serve a new Commander in Chief.' Week after week, the church's pastors simply, kindly stayed near her, asking nothing and demanding no explanations — and after months of that steady, entirely undeserved care, the armor she'd spent years building up since her service began to crack, and she chose to speak first herself about things she'd never told even her military psychologist.", next: 'oksana_choice2' },
        oksana_bridgeB: { text: "Erin refused and kept coping alone, as she had learned to during her service. The bottle gradually became more familiar and easier to understand than her own daughter, sitting quietly behind a closed door in the next room.", next: 'oksana_choice2' },
        oksana_choice2: { text: 'Months into regular meetings, Erin is asked to speak to a group of other veterans who, like her, came home completely different people and have stayed silent about it for years.', choices: [
          { label: 'Tell it all honestly, including the bottle and the shame', effects: { faith: 15 }, next: 'oksana_endLight' },
          { label: 'Refuse — it is too personal to share with strangers', effects: { faith: -15 }, next: 'oksana_endDark' },
        ] },
        oksana_endLight: { text: "Erin told it all exactly as it was, including the bottle and the shame in front of her daughter. Today she works with veterans just like herself, helping them walk the path she walked — from a bottle every night to a daughter who finally stopped hiding when her mother comes home. The end of Erin's story.", next: null, choices: [] },
        oksana_endDark: { text: "Erin refused to share and kept coping alone to the end. Her daughter grew up remembering a mother who was always physically there, but truly present only rarely. The end of Erin's story.", next: null, choices: [] },
      },
    },
    vika: {
      start: 'vika_intro',
      scenes: {
        vika_intro: { text: "Victoria was a pastor's wife, and for years explained away her bruises as her own clumsiness — first to herself, then to doctors at checkups, then to her small children, who started asking uncomfortable questions. Leaving a husband who served in ministry meant not just a divorce, but wrecking the whole congregation's standing — and that held her in place harder than any bruise.", next: 'vika_scene2' },
        vika_scene2: { text: "Year after year followed the same circle: a fight, shouting, a blow, tears, apologies, calm again for a few weeks — and then back to the start. With the congregation, and even with part of her own family, Victoria had long since perfected the same story about her own clumsiness, knowing that a pastor's wife complaining of beatings would wreck far more than just her own marriage.", next: 'vika_choice1' },
        vika_choice1: { text: "After one especially brutal night, when she had to explain a bruised cheekbone not to the congregation but to her own child, a friend who happened to see her battered face quietly held out the number for a help center and said: 'Just keep it on you. You don't have to call today.'", choices: [
          { label: 'Keep the number and call when things get truly frightening', effects: { faith: 10 }, next: 'vika_bridgeA' },
          { label: "Throw the number away — she doesn't want to wreck her husband's reputation", effects: { faith: -10 }, next: 'vika_bridgeB' },
        ] },
        vika_bridgeA: { text: "Victoria kept the number, tucked into the lining of her wallet, and one evening finally worked up the nerve to call and leave with the children, knowing this would inevitably mean long years of custody litigation ahead — far longer and more exhausting than she could have imagined while still inside the marriage.", next: 'vika_choice2' },
        vika_bridgeB: { text: "Victoria threw the number away that same evening and stayed, deciding her husband's and the whole congregation's reputation mattered more than her own safety. Her friend, hearing about it, never reproached her with a single word — she simply held out the same number again a few weeks later, rewritten on a separate card.", next: 'vika_choice2' },
        vika_choice2: { text: "In the middle of an exhausting custody battle that clearly threatened to drag on for years, Victoria had to decide whether to keep fighting in court for her children and for the truth of what had happened, or to back down just to make it all end sooner.", choices: [
          { label: 'Keep fighting for her children and the truth, however many years it takes', effects: { faith: 15 }, next: 'vika_endLight' },
          { label: "Back down, just so it's over sooner", effects: { faith: -15 }, next: 'vika_endDark' },
        ] },
        vika_endLight: { text: "Victoria went through a custody battle that stretched on for almost ten years, and through all of it held on to a faith that felt no less real to her than the exhausting fight itself. Today, together with other women like her, she runs a support ministry for believing mothers going through divorce after leaving a marriage like hers — with ready-made materials for preparing for custody hearings, so no one else has to work through all of it again completely alone, the way she once had to. The end of Victoria's story.", next: null, choices: [] },
        vika_endDark: { text: "Victoria backed down in the custody battle before it was over, just to make it end sooner — and for years afterward regretted not having had the strength to see the fight for her children and the truth through to the end. The end of Victoria's story.", next: null, choices: [] },
      },
    },
    tanya: {
      start: 'tanya_intro',
      scenes: {
        tanya_intro: { text: 'Tara had a doctorate in theology and worked as an assistant chaplain at a university — comforting and supporting others as part of her job — when she first heard voices, quiet and almost gentle at first, then demanding and cruel. Doctors called it psychosis linked to bipolar disorder; Tara herself, a doctor of theology by training, spent long months unable to find in her own books where the illness ended and something else began, something with no medical name.', next: 'tanya_scene2' },
        tanya_scene2: { text: "The first of several hospitalizations was especially hard — her colleagues at church didn't know how to act around a chaplain who had suddenly become a patient on a psychiatric ward herself. Many in the congregation were used to seeing Tara as someone who gives comfort, not someone who needs it, and some of them simply vanished from her life, as if the diagnosis were contagious. Even her own theology students had no idea where she had disappeared to during those weeks.", next: 'tanya_choice1' },
        tanya_choice1: { text: 'During her third hospitalization that year, a longtime colleague from the faculty offered to talk with Tara honestly, without comforting theological formulas, about what she was actually feeling right now — not chaplain to chaplain, but simply one suffering person to another.', choices: [
          { label: 'Agree, and for the first time not hide behind her professional role', effects: { faith: 10 }, next: 'tanya_bridgeA' },
          { label: 'Refuse — too strange to end up on the other side herself', effects: { faith: -10 }, next: 'tanya_bridgeB' },
        ] },
        tanya_bridgeA: { text: "To her own surprise, Tara agreed, and the conversation turned out to be nothing about explaining the illness away with faith, or excusing it by faith — just someone, for the first time in a long while, listening to her as a person, not as a chaplain who was supposed to manage on her own. She went back to the same fixed hours of prayer, following the ancient monastic pattern she herself had spent years teaching her students but had long since stopped truly living herself — and the old psalms, with their honest complaints to God, began to sound to her completely different from lines in a textbook.", next: 'tanya_choice2' },
        tanya_bridgeB: { text: 'Tara refused and spent those weeks on the ward in almost total silence, out of habit still comforting the other patients with words she could no longer apply to herself, alone with the voices that the medication muted to a whisper but never fully took away.', next: 'tanya_choice2' },
        tanya_choice2: { text: "Years later, after several more hospitalizations, Tara is offered the chance to write an honest, first-person book about faith and mental illness — not a theological treatise for other people's crises, but an admission that she herself had struggled with exactly this for years, as someone others trusted to comfort them.", choices: [
          { label: "Write it honestly, including the moments when faith didn't offer instant rescue", effects: { faith: 15 }, next: 'tanya_endLight' },
          { label: 'Refuse — too risky to admit weakness in front of the whole congregation', effects: { faith: -15 }, next: 'tanya_endDark' },
        ] },
        tanya_endLight: { text: "Tara wrote the book without embellishment, honestly describing both the voices and the attacks of despair, and how the church sometimes answered her pain with empty comfort instead of real presence beside her. She writes plainly: the bipolar disorder never went away, and hospitalizations sometimes still happen — faith didn't replace the medication and the psychiatrist, but stayed alongside the treatment, not instead of it. The book reached thousands of believers who, for the first time, honestly heard that mental illness and deep faith can coexist in one person at once, without canceling each other out. The end of Tara's story.", next: null, choices: [] },
        tanya_endDark: { text: 'Tara refused to publish the book, deciding that admitting to this particular weakness would cost her professional reputation as a chaplain too much. She kept comforting others on schedule, hiding her own hospitalizations even from her closest colleagues on the faculty. The end of Tara\'s story.', next: null, choices: [] },
      },
    },
    galya: {
      start: 'galya_intro',
      scenes: {
        galya_intro: { text: "Gail and her husband declared bankruptcy after their small family business collapsed in a single year over one failed deal. It got to the point where the house did not even have a refrigerator, and food was kept in an ordinary camping cooler box, refilled with ice at the supermarket every day.", next: 'galya_scene2' },
        galya_scene2: { text: "In the first months after the bankruptcy, Gail tried to keep the kids from noticing the difference — inventing games instead of the usual shopping trips, joking about a 'camping adventure' instead of admitting there wasn't money for a normal dinner. At night, once everyone was asleep, she would stare for a long time at the stack of unpaid bills, not knowing where to even start.", next: 'galya_choice1' },
        galya_choice1: { text: "A woman from church, who happened to learn their real situation from a mutual acquaintance, did not offer a loan — she simply said: 'Come by tomorrow morning, we will sit down together and work through your finances God's way, step by step.'", choices: [
          { label: "Come, even though it is humiliating to admit how bad things are", effects: { faith: 10 }, next: 'galya_bridgeA' },
          { label: 'Refuse — pride will not let her show poverty to outsiders', effects: { faith: -10 }, next: 'galya_bridgeB' },
        ] },
        galya_bridgeA: { text: "Gail came, burning with shame through the entire first hour of the conversation. Every meeting began with prayer, and the plan itself was built around one specific biblical principle — 'give, and it will be given to you' — which Gail read over and over, at first unable to see how to live by it when there seemed to be nothing left to give. Gradually the shame gave way to unexpected relief — it turned out she was not the only family among people she knew going through this, and there was an actual plan she could really follow, not just endure.", next: 'galya_choice2' },
        galya_bridgeB: { text: 'Gail refused the help out of pride and kept coping silently, hiding the debt letters from her husband and children in the back of a drawer, until the stack grew too thick to keep hiding.', next: 'galya_choice2' },
        galya_choice2: { text: 'Two years into painstakingly working through the debt and retraining herself to live within her means, Gail is asked to tell her story to other families in the same situation at a community meeting.', choices: [
          { label: 'Tell it all honestly, including the cooler box of ice', effects: { faith: 15 }, next: 'galya_endLight' },
          { label: 'Refuse — the past is better left in the past', effects: { faith: -15 }, next: 'galya_endDark' },
        ] },
        galya_endLight: { text: "Gail told it all honestly, starting with that very camping cooler box instead of a refrigerator. Today she and her husband run the same course for families going through what they once went through — starting every session with the words 'we did not have a refrigerator either.' The end of Gail's story.", next: null, choices: [] },
        galya_endDark: { text: 'Gail refused to tell her story, and although the debts were eventually paid off, the shame of those years remained a family secret, unspoken even between the two of them behind closed doors. The end of Gail\'s story.', next: null, choices: [] },
      },
    },
    denis: {
      start: 'denis_intro',
      scenes: {
        denis_intro: { text: 'Dennis had risen through the ranks of a radical nationalist group to become one of its leaders — hatred was not a belief for him but a way of life he chose fresh every day, seeing in it, since youth, the only way to matter.', next: 'denis_scene2' },
        denis_scene2: { text: 'Dennis kept two versions of his life: an ordinary job for the paperwork, and a completely different, nocturnal one, with flags and marches, that he actually lived for. He had long since stopped noticing the faces of the people he shouted at during rallies — they were not people to him, but symbols of whatever he was fighting.', next: 'denis_choice1' },
        denis_choice1: { text: 'A pastor of a Black church across town, hearing about Dennis, did not avoid him — instead he found a way to pass along an invitation to talk one on one, no cameras, no witnesses, which struck Dennis as either madness or a trap.', choices: [
          { label: 'Go to the meeting, if only out of curiosity about why the pastor would want this', effects: { faith: 10 }, next: 'denis_bridgeA' },
          { label: 'Ignore the invitation as a trap or a sign of weakness', effects: { faith: -10 }, next: 'denis_bridgeB' },
        ] },
        denis_bridgeA: { text: 'Dennis came expecting an argument, a sermon, or a trap, but the pastor simply talked with him like a person, over a cup of tea — and kept inviting him back, conversation after conversation, month after month, never bringing up the subject first.', next: 'denis_choice2' },
        denis_bridgeB: { text: 'Dennis ignored the invitation, expecting that would be the end of it. But the pastor did not back off and sent another request to meet through a mutual acquaintance — just to talk, no conditions, no recording — and in the end, more out of sheer weariness at refusing again and again than any real interest, Dennis agreed to come, just once.', next: 'denis_choice2' },
        denis_choice2: { text: "After months of conversations kept secret from his movement comrades, Dennis stands before the pastor's congregation, people he once would have despised without a second thought and without seeing any contradiction in it, and must decide whether he is ready to publicly renounce the life he gave years and a reputation to.", choices: [
          { label: 'Step forward and tell it all as it is, in front of everyone', effects: { faith: 15 }, next: 'denis_endLight' },
          { label: 'Leave, not ready for such a public break with the past', effects: { faith: -15 }, next: 'denis_endDark' },
        ] },
        denis_endLight: { text: 'Dennis stepped forward and told it all — who he had been and what he felt now, sparing himself nothing in the telling. He was baptized in the sea to the singing of that same congregation, and today he attends that very church whose members were once, for no reason but their birth, his enemies. The end of Dennis\'s story.', next: null, choices: [] },
        denis_endDark: { text: 'Dennis left that day, not ready to break with the past in front of witnesses and lose his place in the movement that gave him meaning. The pastor keeps staying close and inviting him back, but Dennis himself remains stuck between two worlds, never fully choosing either. The end of Dennis\'s story.', next: null, choices: [] },
      },
    },
    ignat: {
      start: 'ignat_intro',
      scenes: {
        ignat_intro: { text: "Ian secretly led a small house church in a country where merely mentioning the name of Christ in front of strangers could mean a life sentence in a labor camp. His own mother had already been arrested for the same thing years earlier and had never returned.", next: 'ignat_scene2' },
        ignat_scene2: { text: 'Meetings were held once a week, taking turns between different homes, late in the evening, curtains drawn, without a single extra candle burning. Ian knew by heart not only the texts he read aloud, but the face of every person who risked coming — knowing that if he were arrested, those same faces would be first on the investigation\'s list.', next: 'ignat_choice1' },
        ignat_choice1: { text: 'Neighbors began asking questions about the people who occasionally dropped by Ian\'s house in the evenings, too regularly to be casual visitors. One of those who came to the meetings turned out, later, to be an informant reporting on every gathering.', choices: [
          { label: 'Keep holding the meetings, trusting God rather than his own safety', effects: { faith: 10 }, next: 'ignat_bridgeA' },
          { label: 'Stop the meetings and lie low to protect the community', effects: { faith: -10 }, next: 'ignat_bridgeB' },
        ] },
        ignat_bridgeA: { text: 'Ian kept the meetings going, only more carefully — fewer people at a time, different times, coded phrases instead of names spoken aloud. Things got harder for the community, but it kept living and growing, if slower and quieter than before.', next: 'ignat_choice2' },
        ignat_bridgeB: { text: 'Ian stopped the meetings for several months, sending everyone the same short warning. Members scattered to pray alone at home, but the bond between them that had held them together for years began quietly weakening with every week of silence.', next: 'ignat_choice2' },
        ignat_choice2: { text: "Ian is arrested anyway, at night, in a search that lasted several hours. During interrogation, the investigator, in a rather friendly tone, offers him freedom in exchange for just a few names — the people who came to his house in the evenings.", choices: [
          { label: 'Stay silent, whatever the consequences', effects: { faith: 15 }, next: 'ignat_endLight' },
          { label: 'Give the names in exchange for freedom', effects: { faith: -15 }, next: 'ignat_endDark' },
        ] },
        ignat_endLight: { text: "Ian stayed silent through every interrogation the investigator threw at him, and was transferred to a special political camp from which, like his mother years before him, he was never meant to return. Officially, his fate, like hers, remained \"unknown\" to his family. But surviving members of the community and neighbors, quietly passing the story on for decades afterward, remember him as a man who never once gave up a single name and never once bowed to anyone — even facing his own death. The end of Ian's story.", next: null, choices: [] },
        ignat_endDark: { text: 'Ian gave the names and was free within a week — but every name he gave under pressure belonged to someone who had trusted him more than anyone else in the world. Freedom cost him dearly; he simply was not the only one who paid the price — those he named paid it too. The end of Ian\'s story.', next: null, choices: [] },
      },
    },
    artem: {
      start: 'artem_intro',
      scenes: {
        artem_intro: { text: 'Arthur built a business on real-estate loans and, within a few years, became genuinely wealthy — a new house, executive-class cars, recognition in the city\'s business circles — until the market collapsed in a single year, taking everything he had built with it and leaving only debt with interest.', next: 'artem_scene2' },
        artem_scene2: { text: 'In the first months after the crash, Arthur still tried to save at least part of his assets, selling off cars and watches piece by piece just to delay the inevitable reckoning with the banks. At night he recounted the same figures on paper, as if that could change an outcome that had long been obvious.', next: 'artem_choice1' },
        artem_choice1: { text: "The banks demanded repayment of money Arthur no longer had in any form. His wife, looking at the pile of documents on the kitchen table, asked quietly, without reproach: 'What if we started with what's actually ours — not the money?'", choices: [
          { label: 'Honestly look, for the first time, at his life without money as the measure of success', effects: { faith: 10 }, next: 'artem_bridgeA' },
          { label: 'Keep looking for a way to get the money back at any cost', effects: { faith: -10 }, next: 'artem_bridgeB' },
        ] },
        artem_bridgeA: { text: "Arthur started attending a small group at church with his wife, a place he never would have set foot in before — there they talked not about investments or recouping losses, but about what it means to trust God when there is decisively nothing left to trust. In the evenings he himself, for the first time in his life, began reading the Bible in search of answers, comparing what it said about money with everything he'd spent years learning in business school — and it was out of that comparison that his own strikingly simple plan, made of a few concrete steps, gradually took shape, rather than out of any new financial theory.", next: 'artem_choice2' },
        artem_bridgeB: { text: 'Arthur kept chasing new deals, each riskier than the last, trying to win back his losses in one lucky move. Every new attempt ended the same way — deeper in debt, with fewer options for the next step.', next: 'artem_choice2' },
        artem_choice2: { text: 'Years into painstakingly rebuilding his finances step by step, without the old shine but also without the old debts, Arthur is asked to start teaching other people what he ultimately learned about money and faith through his own bitter experience.', choices: [
          { label: 'Start teaching, beginning with the story of his own fall', effects: { faith: 15 }, next: 'artem_endLight' },
          { label: 'Refuse — the past bankruptcy is too shameful to talk about', effects: { faith: -15 }, next: 'artem_endDark' },
        ] },
        artem_endLight: { text: "Arthur started teaching — and the first story he always tells at every session remains the day the bank took everything from him except what actually mattered. Today thousands of people climb out of debt after hearing that very story first. The end of Arthur's story.", next: null, choices: [] },
        artem_endDark: { text: 'Arthur rebuilt his finances through years of hard work, but never spoke of that bankruptcy out loud even with those closest to him — it remained the one subject his household simply did not discuss. The end of Arthur\'s story.', next: null, choices: [] },
      },
    },
    grisha: {
      start: 'grisha_intro',
      scenes: {
        grisha_intro: { text: "By sixteen, Gregory had earned a reputation as the most dangerous teenager in the district — he had already been involved in a killing during a street fight, for which he got more than ten years in an adult penal colony, though he looked younger there than everyone else.", next: 'grisha_scene2' },
        grisha_scene2: { text: 'Gregory spent his first years in the colony proving to everyone around him that his young age did not mean weakness — proof that cost him several fights and stints in solitary. He let no one get close, including the psychologists and counselors sent on schedule.', next: 'grisha_choice1' },
        grisha_choice1: { text: "In the colony, a prison chaplain came every week without a single missed visit, for nearly two years straight, to the same row of cells, including Gregory's, reading a few lines from the Bible aloud through the bars each time and getting the same icy silence in return — but before leaving, he'd still leave his worn copy on the cell floor, and kept coming back no matter what the other guards said about how pointless it was.", choices: [
          { label: 'One day finally answer his question', effects: { faith: 10 }, next: 'grisha_bridgeA' },
          { label: 'Keep staying silent, as always', effects: { faith: -10 }, next: 'grisha_bridgeB' },
        ] },
        grisha_bridgeA: { text: "Gregory answered — first with one short word through the bars, then a sentence, then a whole conversation about something entirely unrelated. At night, once his cellmates were asleep, he'd secretly open the Bible the chaplain had left behind and read a few lines by the light from the corridor, then, for the first time in his life, tried saying something like a prayer — clumsily, under his breath. Months later he spoke aloud for the first time in years about the fight itself and the face of the man he'd taken from the world with a single blow. The chaplain was not surprised or judgmental about the change, just kept coming every week as before, as if it had always been meant to happen.", next: 'grisha_choice2' },
        grisha_bridgeB: { text: 'Gregory kept silent for months on end, but noticed to himself that the chaplain never stopped coming despite the silence — and that persistence alone made him think harder than any words could have.', next: 'grisha_choice2' },
        grisha_choice2: { text: "Over the years that followed — across four different prisons in the country, through nearly twelve years behind bars — Gregory learned the Bible almost by heart and, more than once, sat down by the bars himself next to newly arrived, equally frightened teenagers, repeating to them, word for word, what the chaplain had once said to him. Before his release, Gregory is offered a chance to stay on at the prison church as a volunteer — to go back to the very place he once served time, but now from the other side of the bars, by choice, not by sentence.", choices: [
          { label: 'Stay and devote his life to those walking the path he once walked', effects: { faith: 15 }, next: 'grisha_endLight' },
          { label: 'Leave as far as possible and never look back at the prison', effects: { faith: -15 }, next: 'grisha_endDark' },
        ] },
        grisha_endLight: { text: 'Gregory stayed. More than forty years later he still comes to those same rows of cells that the chaplain once came to visit him in as a teenager — only now from the side of the bars where he himself is needed, every week without fail. The end of Gregory\'s story.', next: null, choices: [] },
        grisha_endDark: { text: 'Gregory left and built a new life as far as possible from anything that reminded him of prison, including his old name and old addresses. He never spoke of the past out loud again — not with anyone, including himself before falling asleep. The end of Gregory\'s story.', next: null, choices: [] },
      },
    },
    stas: {
      start: 'stas_intro',
      scenes: {
        stas_intro: { text: 'Stanley was picked first overall in the draft and spent his early professional years on a clear path to stardom, until injuries and chronic pain led him to painkillers, and from there to alcohol and drugs. Within a few years he had lost his contract, his reputation, and nearly his whole family, and his wife, worn down by endless relapses, was seriously preparing to file for divorce.', next: 'stas_scene2' },
        stas_scene2: { text: "Rock bottom came on one particular night, when Stanley, high on a mix of drugs, showed up at his grandmother's door at two in the morning — twenty pounds thinner, hollow-eyed, hands shaking. He still remembers the look on her face in the doorway — not anger, but something far more frightening: a mix of horror and pity for a man she barely recognized.", next: 'stas_choice1' },
        stas_choice1: { text: "A few days later, having regained a little strength in his grandmother's house, Stanley relapsed again — right there under her roof. She silently waited for him to come out of the room and said only one sentence: 'I can't take this anymore' — and then issued a challenge: surrender not to another rehab program, but directly to God.", choices: [
          { label: 'Accept the challenge, however strange it sounds', effects: { faith: 10 }, next: 'stas_bridgeA' },
          { label: "Brush it off — he'll handle it himself, like always", effects: { faith: -10 }, next: 'stas_bridgeB' },
        ] },
        stas_bridgeA: { text: "Stanley accepted his grandmother's challenge, and that same night, ashamed and desperate, he seriously asked God for the first time in his life to take the addiction away entirely. He braced for the withdrawal he knew almost by heart from experience — but it never came, not that night, not the next day, not a week later, and that absence stunned and frightened him almost more than the addiction itself ever had. From that day he never touched drugs again, and every morning he began reading the Bible with his grandmother day after day, though years later, back in professional sports, he relapsed on alcohol a few times — and each time admitted it honestly to the press instead of hiding it.", next: 'stas_choice2' },
        stas_bridgeB: { text: "Stanley brushed off his grandmother's challenge and kept handling it himself, the way he had for years, only getting worse each time — his wife spent more and more nights at her parents' with the girls, tired of waiting for changes he promised but never actually made.", next: 'stas_choice2' },
        stas_choice2: { text: 'After several months of sobriety and weekly meetings at a small church support group, where the same grandmother drove him every Sunday, his wife agrees to a series of joint sessions with a family counselor — not as a formality before divorce, but as one real last chance to test whether Stanley is willing to change in practice, day by day, not just in moments of inspiration at prayer meetings.', choices: [
          { label: 'Go through counseling honestly, owning his full share of blame', effects: { faith: 15 }, next: 'stas_endLight' },
          { label: 'Go through the motions while staying the same inside', effects: { faith: -15 }, next: 'stas_endDark' },
        ] },
        stas_endLight: { text: "Stanley went through counseling honestly, admitting out loud to his wife for the first time the full extent of what he had done to the family — and in the very first session told the counselor plainly that his sobriety rested not on willpower but on a daily habit of prayer and Bible reading that he never once gave up, even after relapses. The marriage held, and a few years later he returned to professional sports a completely different man, openly and honestly talking about addiction and faith to anyone willing to listen to his story. Today his family has four daughters, and he says honestly that every sober day is a decision that has to be made all over again, every single morning, starting with prayer. The end of Stanley's story.", next: null, choices: [] },
        stas_endDark: { text: 'Stanley went through the motions of counseling but never really changed inside, and within a few months the old habits gradually came back. The marriage fell apart, and his daughters remembered a father who was better at talking beautifully about change on camera than making it happen at home. The end of Stanley\'s story.', next: null, choices: [] },
      },
    },
    zhenya: {
      start: 'zhenya_intro',
      scenes: {
        zhenya_intro: { text: "As a teenager, in the middle of family arguments at the dinner table, Jenny discovered that her own body was the one thing that belonged to her alone, and that it could make her feel strong and untouchable: she began counting every last calorie and losing weight, driving herself down to a dangerously low weight she hid under baggy clothes even from her parents.", next: 'zhenya_scene2' },
        zhenya_scene2: { text: "That teenage episode seemed to pass on its own: Jenny got into university with honors, became a model student, and her parents breathed a sigh of relief, deciding their daughter had simply grown out of a difficult age. But ten years later, while preparing to become a small church's pastor's wife and finishing seminary classes for future pastors' wives, the old habit came back with a vengeance — and, in her own later words, she had never felt more enslaved and, at the very same time, never more certain of her own strength.", next: 'zhenya_choice1' },
        zhenya_choice1: { text: "A doctor at the hospital where she was rushed after collapsing right in the middle of helping her husband prepare Sunday's sermon told her plainly, without softening it: without treatment, her heart could stop any night. Unable to sleep through the hospital hours, Jenny finally opened her own Bible — the same one she had carried through two years of seminary classes but never finished — and started with the book of Revelation.", choices: [
          { label: 'Keep reading, even though the familiar thoughts about food never let go for a minute', effects: { faith: 10 }, next: 'zhenya_bridgeA' },
          { label: "Put the Bible down — faith definitely won't solve a problem with scales", effects: { faith: -10 }, next: 'zhenya_bridgeB' },
        ] },
        zhenya_bridgeA: { text: "Jenny finished Revelation that same night, and something inside her shifted: she suddenly saw that all these years she had clung to control over her own body as the last proof of strength — when in reality it had always been slavery, which she called strength so she would not have to admit it even to herself. Thoughts about food and numbers did not disappear overnight, but for the first time in years Jenny stopped treating them as proof of who she was.", next: 'zhenya_choice2' },
        zhenya_bridgeB: { text: 'Jenny put the Bible down without finishing it, and kept counting calories in the ward just as diligently as at home, only now secretly from the doctors and nurses, hiding leftover food in napkins under her pillow.', next: 'zhenya_choice2' },
        zhenya_choice2: { text: "A year into treatment, relapses, and constant inner struggle — a year she spent either praying for the day she would be able to sit at a table without counting calories in her head, on one branch of this story, or entirely alone with her old habits, on the other — Jenny is invited to a support group where she has to honestly say what is happening inside her head, not just show the doctor a number on the scale.", choices: [
          { label: 'Tell it all, including the thoughts she is ashamed of', effects: { faith: 15 }, next: 'zhenya_endLight' },
          { label: 'Stick to vague phrases so no one sees how serious it really is', effects: { faith: -15 }, next: 'zhenya_endDark' },
        ] },
        zhenya_endLight: { text: "Jenny told it all exactly as it was, including her most shameful thoughts about food and her body, which she had never dared say aloud even to her doctors before. The illness did not retreat in a single day, and her body still carries, years later, the consequences of what she did to herself all those years — but for the first time she stopped fighting it in complete solitude, and stopped calling strength what had actually been slavery. Years later she wrote two books about it under her own name, calling things by their real names without embarrassed euphemisms, and now, together with her pastor husband, she supports women stuck where she recently was. The end of Jenny's story.", next: null, choices: [] },
        zhenya_endDark: { text: 'Jenny stuck to vague phrases at the meeting and left the hospital with a normal weight on paper, but the same quiet war inside her head as before. The end of Jenny\'s story.', next: null, choices: [] },
      },
    },
    inna: {
      start: 'inna_intro',
      scenes: {
        inna_intro: { text: 'Ivy and her husband endured five miscarriages over several years — at different stages, with different doctors and protocols, and each time hope grew thinner and more painful than the last. One of the lost pregnancies, far enough along that she could have picked a name, she privately called Scarlett — just so that child would remain in her life as something more than a date in a medical chart.', next: 'inna_scene2' },
        inna_scene2: { text: "After the second miscarriage, Ivy stopped going to her friends' children's birthday parties — not out of envy, but because smiling there had become physically unbearable. She set up the nursery several times and took it apart just as many times, packing the tiny onesies into a box on the top shelf, and eventually started keeping an open diary about it online, under her own name, with no anonymity.", next: 'inna_choice1' },
        inna_choice1: { text: "After she published an especially raw entry about Scarlett, a friend from church, knowing all her pain without needing the words, did not say the usual 'God is in control' — she just sat down beside her on the kitchen floor and cried with her in silence, asking nothing and offering no rehearsed comfort, then quietly asked before leaving whether she could come by in the evenings just to pray together — not for a new pregnancy, but for Ivy to get through that one night.", choices: [
          { label: 'Let herself truly grieve instead of pretending to be strong', effects: { faith: 10 }, next: 'inna_bridgeA' },
          { label: 'Bury the grief deeper and pretend everything is fine', effects: { faith: -10 }, next: 'inna_bridgeB' },
        ] },
        inna_bridgeA: { text: "For the first time in years, Ivy let herself cry openly, in front of her husband and friends, without shame or apology for the tears, and agreed to those evening prayers — at first just listening to her friend pray, then a few weeks later beginning, out loud, in her own words, to name God alongside Scarlett's name with her. The grief did not shrink, but it stopped being a secret she had to carry entirely alone — and the diary she kept began to be read by hundreds of strangers carrying that exact same pain.", next: 'inna_choice2' },
        inna_bridgeB: { text: "Ivy smiled in public and kept the pain strictly to herself, telling everyone around her she had 'nearly made peace with it,' turning down the evening prayers too — though at night the pain returned, in the same box of onesies on the top shelf, and the online diary remained an unpublished draft.", next: 'inna_choice2' },
        inna_choice2: { text: 'After the fifth miscarriage and another failed protocol, the doctor states plainly, without hopeful qualifiers: a natural pregnancy is extremely unlikely. A publisher who stumbled on her diary offers to turn her private entries into a book for thousands of women with the same story — but that means telling everything, including Scarlett\'s name and those same evening prayers on the kitchen floor, not just to a small circle of friends but to complete strangers.', choices: [
          { label: 'Agree, and turn her private grief into a book for others', effects: { faith: 15 }, next: 'inna_endLight' },
          { label: "Refuse — some things are too personal for strangers' eyes", effects: { faith: -15 }, next: 'inna_endDark' },
        ] },
        inna_endLight: { text: "Ivy agreed and wrote the book, softening nothing for readers' comfort, including the chapter about Scarlett and about learning to pray again on her own kitchen floor. The book reached thousands of women, who read for the first time that grieving an unborn child is not a failure of faith but part of an honest path toward it. Today she still prays every evening with that same friend, and motherhood came not the way she had planned, but it came, truly — through adopting a child who had been left without parents. The end of Ivy's story.", next: null, choices: [] },
        inna_endDark: { text: "Ivy turned down the book, deciding that Scarlett's name and those years of loss should stay within the narrow circle of her family. The diary remained an unpublished draft on an old computer, and the bitterness of those years was something she never let herself fully work through, even with those closest to her. The end of Ivy's story.", next: null, choices: [] },
      },
    },
    karina: {
      start: 'karina_intro',
      scenes: {
        karina_intro: { text: "Carrie had worked at a strip club since she was eighteen — the money was genuinely good, far more than any ordinary job for her age, and she had long since stopped seriously asking herself how she felt about it.", next: 'karina_scene2' },
        karina_scene2: { text: 'Shifts started late in the evening and ended toward morning, and Carrie had long since learned to switch off the part of her that might feel shame — turning it on only in rare moments when she happened to catch sight of old classmates at the mall in daytime.', next: 'karina_choice1' },
        karina_choice1: { text: "A group of women from a local church began coming by the club regularly at night — not with condemnation or pamphlets about sin, but with bags of simple gifts and a note reading 'you are worth more,' addressed to each dancer by name.", choices: [
          { label: 'Take the gift and at least read the note', effects: { faith: 10 }, next: 'karina_bridgeA' },
          { label: "Throw the gift away — she does not need anyone's pity", effects: { faith: -10 }, next: 'karina_bridgeB' },
        ] },
        karina_bridgeA: { text: "Carrie read the note several times that night between sets, careful not to let the other girls in the dressing room notice, and found a short link to a Bible verse at the bottom — after her shift she opened a Bible on her phone for the first time in her life, just to see what it said. That same morning, for the first time ever, she tried praying in her own words — awkwardly, with no memorized phrases, just out loud in an empty apartment. A couple of weeks later she finally texted the number at the bottom — just to find out what these women actually wanted from her and why they kept coming back to the club week after week with nothing in it for themselves.", next: 'karina_choice2' },
        karina_bridgeB: { text: "Carrie threw the gift in the dressing room trash in front of the other girls and kept working as usual, though the short note somehow would not leave her head for several days straight.", next: 'karina_choice2' },
        karina_choice2: { text: 'The ministry offers Carrie concrete help with a new profession, courses, and temporary housing while she gets on her feet — plus weekly meetings with the same group of women, where they always start by reading a few lines of the Bible together and praying before talking about work and money — but that means leaving the club immediately, without the familiar safety net of her old income, which for years had supported not just her but part of her family too.', choices: [
          { label: 'Leave now, trusting that things will somehow work out', effects: { faith: 15 }, next: 'karina_endLight' },
          { label: 'Stay — too risky to trade stable income for promises', effects: { faith: -15 }, next: 'karina_endDark' },
        ] },
        karina_endLight: { text: "Carrie left that same week, packing up her things from the dressing room in one evening without explaining anything to anyone at the club, and for a while she struggled to make ends meet on her new, far more modest salary. She never once missed one of the weekly prayer-and-Bible meetings, even in the hardest months financially — and today she herself meets other girls outside similar clubs, starting every such evening with that same short prayer in her own words that she once received herself. The end of Carrie's story.", next: null, choices: [] },
        karina_endDark: { text: 'Carrie stayed, telling herself the change could wait for a more convenient, less risky moment. That convenient moment never came on its own — the weeks quietly turned into several more years of the same life on the same terms. The end of Carrie\'s story.', next: null, choices: [] },
      },
    },
    darya: {
      start: 'darya_intro',
      scenes: {
        darya_intro: { text: 'Dana was a professional athlete at the peak of her career — medals at international competitions, endorsement deals, a recognizable face on the covers of sports magazines across the country. Underneath the camera-ready smile, she had carried a shame for twenty years that she never fully told anyone about.', next: 'darya_scene2' },
        darya_scene2: { text: 'Dana had long since mastered the art of the perfect interview — answering exactly what journalists and sponsors expected, never straying a word outside the image of the unbreakable champion. At home, behind closed doors, keeping up that role cost her sleepless nights and panic attacks before every major tournament — her body remembered that old abuse better than she was ready to admit, and any unexpected touch during training, even something perfectly ordinary, could pull her back without warning into that same childhood room from twenty years before. Only her coach knew about any of it, and even he not all of it.', next: 'darya_choice1' },
        darya_choice1: { text: 'After another major win, a journalist at the press conference unexpectedly asked, not about technique or rivals, but simply whether she was happy. Dana froze for a second in front of the cameras, not knowing whether to lie as usual or, for the first time in her career, tell the truth.', choices: [
          { label: 'Start gradually being honest, at least with herself, about her pain', effects: { faith: 10 }, next: 'darya_bridgeA' },
          { label: 'Answer with her usual practiced smile', effects: { faith: -10 }, next: 'darya_bridgeB' },
        ] },
        darya_bridgeA: { text: "'No,' Dana answered quietly into the microphone, not giving her usual practiced smile in front of the cameras for the first time in her life. 'Not really.' The room went silent for a second, and she went on to start meeting with the team chaplain once a week — at first just formally, to check a box for the coaching staff, then more and more honestly, saying out loud for the first time what she had hidden behind twenty years of success, even from herself in every locker-room mirror. The chaplain prayed with her before each of those meetings and once told her something she would repeat to herself before every race after that: God had seen her even before her first medal, and had never stopped seeing her through all those years of shame no one else knew about.", next: 'darya_choice2' },
        darya_bridgeB: { text: 'Dana answered with her usual practiced smile, polished by years of training in front of the camera no less than her technique, and went home, as always, hiding an exhaustion no one in the arena even suspected.', next: 'darya_choice2' },
        darya_choice2: { text: 'After retiring from competitive sport, Dana is offered a chance to write a book — not about the wins, medals, and records, but about the exact shame and emptiness that hid behind them all those years, under a coat of press-ready polish.', choices: [
          { label: 'Write it honestly, without softening anything', effects: { faith: 15 }, next: 'darya_endLight' },
          { label: 'Refuse — the image of the invincible athlete is safer than the truth', effects: { faith: -15 }, next: 'darya_endDark' },
        ] },
        darya_endLight: { text: "Dana wrote it honestly, without softening it for the sake of the invincible-champion image she had guarded for two decades. The book spread among fellow athletes across the country, many of whom learned for the first time that they were not the only ones carrying that kind of shame under their own medals and endorsement deals, hiding it as carefully as she once had. She never once skipped her weekly prayer meetings with the team chaplain — the one training routine she never gave up, even after retiring from competition. The end of Dana's story.", next: null, choices: [] },
        darya_endDark: { text: 'Dana turned down the book, and the carefully built image of the invincible champion stayed with her forever — along with a shame that no one outside her coaching staff ever learned about. The end of Dana\'s story.', next: null, choices: [] },
      },
    },
    milana: {
      start: 'milana_intro',
      scenes: {
        milana_intro: { text: "Melanie was thirty-four, the wife of a small church's pastor and mother of four, when the doctor said the words 'stage four' after her breast cancer diagnosis — she barely remembers the rest of the conversation in that office, only staring at the desk lamp over the doctor's shoulder, counting the glints on its base. She had prayed out loud with other people's families almost every week for twenty years straight, and that evening found she could not get out a single word of prayer for herself, no matter how hard she tried.", next: 'milana_scene2' },
        milana_scene2: { text: 'Melanie rode home as usual, looking out the window at the same familiar houses, thinking the world outside looked exactly the same as yesterday, even though an earthquake had just happened inside her. After several months of treatment, still unable to pray in her own words again, she started keeping an open diary about her illness online under her own name — not for sympathy, but because she no longer had the strength to smile at her congregation and pretend everything was fine.', next: 'milana_choice1' },
        milana_choice1: { text: "A nurse friend, among the first to learn the diagnosis, did not offer comfort with empty words about staying positive, but simply asked directly: 'Do you want me to come to every chemo session, just to sit next to you?'", choices: [
          { label: 'Agree — it is frightening to go through this alone', effects: { faith: 10 }, next: 'milana_bridgeA' },
          { label: 'Refuse — she does not want to burden anyone with her illness', effects: { faith: -10 }, next: 'milana_bridgeB' },
        ] },
        milana_bridgeA: { text: "Her friend came to every session, exactly as promised, never missing one, and between IV drips they prayed — sometimes in her friend's own words, which Melanie finally found in herself again after so many weeks of being unable to speak, sometimes just sitting in silence, holding hands under the steady hum of the machines. To Melanie's own surprise, thousands of strangers across the country started reading her diary entries about those hours.", next: 'milana_choice2' },
        milana_bridgeB: { text: 'Melanie went through the chemotherapy alone, hour after hour, under that same steady hum of machines, hiding from everyone, including herself, just how frightened she really was between the injections, and wrote in the diary less and less, crossing out the most honest paragraphs before posting.', next: 'milana_choice2' },
        milana_choice2: { text: "Once Melanie's diary became known across the country, she learns from the news about a terminally ill woman her own age who had publicly set a date to end her life under the euthanasia law. A publisher offers Melanie the chance to write that complete stranger an open letter — an invitation to coffee, not a judgment — knowing millions will inevitably read it, and that her own illness and faith will be on display for the whole country, including people who wish her ill.", choices: [
          { label: 'Write an honest open letter, whatever comes of it', effects: { faith: 15 }, next: 'milana_endLight' },
          { label: 'Stay out of it — too personal to put on public display', effects: { faith: -15 }, next: 'milana_endDark' },
        ] },
        milana_endLight: { text: "Melanie wrote the letter, inviting the stranger for a cup of coffee instead of judging her, and it spread through the national news, sparking a wave of debate across the country. A few months later the illness took its course, but Melanie kept writing her diary until the last weeks and kept praying every evening with that same short prayer she had found in herself again back then, between the IV drips — in it, peace despite fear is a choice made every day, not a one-time decision. The end of Melanie's story.", next: null, choices: [] },
        milana_endDark: { text: "Melanie stayed out of it, deciding a personal illness should not become a subject of national debate. The diary remained known only to a small circle of her congregation, and the decision never brought her peace — she went on living from scan to scan with the same quiet fear she had felt on the day of her diagnosis. The end of Melanie's story.", next: null, choices: [] },
      },
    },
    egor: {
      start: 'egor_intro',
      scenes: {
        egor_intro: { text: "George had achieved everything any athlete dreams of — deals with leading brands, national fame, his own face on posters in every sporting goods store in the country. But every win came home to the same dull emptiness, which neither the money nor the crowds chanting his name ever filled.", next: 'egor_scene2' },
        egor_scene2: { text: 'George had long since gotten used to a schedule mapped out to the minute — training, camps, interviews, more training. Free time scared him more than any opponent, because it was exactly in those pauses that the emptiness became especially hard to ignore, with nothing to distract him from it.', next: 'egor_choice1' },
        egor_choice1: { text: 'After a severe knee injury that nearly ended his career, George found himself, for the first time in years, without sport, without a schedule, without the athlete identity he was used to — just alone with himself within the four walls of a rehab ward.', choices: [
          { label: 'Use this pause to honestly ask who he is without winning', effects: { faith: 10 }, next: 'egor_bridgeA' },
          { label: 'Fight with everything to get back in the game, just to avoid that question', effects: { faith: -10 }, next: 'egor_bridgeB' },
        ] },
        egor_bridgeA: { text: 'For the first time in his career, George started attending a small group of believing athletes his former teammate invited him to — there people talked not about results and records, but about what stays with a person once the results inevitably fade.', next: 'egor_choice2' },
        egor_bridgeB: { text: 'George threw everything into forced rehabilitation, just to get back on the field as fast as possible and leave himself no time for uncomfortable questions. The question of who he was without sport got shelved again, as it had dozens of times before.', next: 'egor_choice2' },
        egor_choice2: { text: 'Calling his wife late one evening after another group meeting, George told her honestly for the first time in his life that he was afraid of the day his career would end for good — and had to decide what to fill that emptiness with in advance, rather than wait for it to swallow him whole.', choices: [
          { label: 'Fully trust faith, not just sport, as his source of meaning', effects: { faith: 15 }, next: 'egor_endLight' },
          { label: 'Keep holding on to sport as his only anchor', effects: { faith: -15 }, next: 'egor_endDark' },
        ] },
        egor_endLight: { text: "George found in faith something that doesn't end along with a career and its contracts. When sport did end a few years later, quietly and unremarkably, the emptiness he'd feared for so many years never showed up in its usual place. The end of George's story.", next: null, choices: [] },
        egor_endDark: { text: 'George kept holding on to sport as his only source of meaning right up to the end of his career. When it did end, the emptiness he had spent years avoiding at any cost caught up with him at full force, leaving him nothing to fill it with. The end of George\'s story.', next: null, choices: [] },
      },
    },
    vadim: {
      start: 'vadim_intro',
      scenes: {
        vadim_intro: { text: 'Vincent received a death sentence for a murder carefully planned for money, not committed in some blackout of the mind, and spent his first years on death row hating the whole world no less than he hated himself for what he had done, refusing lawyers and appeals because he genuinely believed himself undeserving of any mercy.', next: 'vadim_scene2' },
        vadim_scene2: { text: "Vincent's cell was at the end of the corridor holding those sentenced to death — everyone knew each other by name and by the dates set in their sentences, discussing them with the same casualness people outside used to discuss the weather. Vincent had long since stopped considering himself fully alive, having crossed himself off the list of human beings well before the court did.", next: 'vadim_choice1' },
        vadim_choice1: { text: 'A prison chaplain started coming to see Vincent every week without a single missed visit, for years on end, though Vincent silently and pointedly turned his back to the bars and stayed silent the whole visit from first minute to last, hoping the chaplain would eventually get tired of it and stop coming, as every other visitor had.', choices: [
          { label: 'On one of the visits, finally turn around and speak', effects: { faith: 10 }, next: 'vadim_bridgeA' },
          { label: 'Keep ignoring the chaplain to the very end', effects: { faith: -10 }, next: 'vadim_bridgeB' },
        ] },
        vadim_bridgeA: { text: "To his own surprise, Vincent spoke up during one of the visits, not fully understanding himself why it happened just then — and, for the first time in years, said aloud the full name of the man he had killed and the details of that night, which he had never told anyone, not even his own lawyer at the trial. The chaplain simply listened, without interrupting or flinching, and then suggested they read the Bible together, week after week, right through the bars. A few years later, Vincent was baptized right there in the prison.", next: 'vadim_choice2' },
        vadim_bridgeB: { text: "Vincent kept silent at every weekly visit, though he himself could not fully explain why this particular chaplain, unlike every other prison staff member, never stopped coming no matter what.", next: 'vadim_choice2' },
        vadim_choice2: { text: "A few weeks before his scheduled execution date, once every appeal had finally been exhausted, Vincent is given an official chance to write letters — not only to the victim's family, but also to his own brother, whom he himself had once drawn into that fateful night — to say what he should have said long ago but had put off all these years out of fear, shame, and the certainty that forgiveness simply could not exist.", choices: [
          { label: 'Write honest letters with a full confession and a request for forgiveness', effects: { faith: 15 }, next: 'vadim_endLight' },
          { label: 'Not write at all — too late and too shameful', effects: { faith: -15 }, next: 'vadim_endDark' },
        ] },
        vadim_endLight: { text: "Vincent wrote both letters, putting into them a full confession without a single attempt to excuse himself — to the victim's family, asking for forgiveness, and to his own brother, taking on an older brother's guilt for failing to hold him back that night instead of going along with him. After nearly forty years on death row — one of the longest such terms in the country's history — on the day of the execution he asked for the very hymn to be sung that the chaplain had quietly sung to him every week, all those years behind bars. The end of Vincent's story.", next: null, choices: [] },
        vadim_endDark: { text: 'Vincent never wrote the letter, putting it off until a last day that never came in time. On the day of the execution, the chaplain was still there beside him, but Vincent himself passed away without ever saying the one thing he should have said decades earlier. The end of Vincent\'s story.', next: null, choices: [] },
      },
    },
    kostya: {
      start: 'kostya_intro',
      scenes: {
        kostya_intro: { text: "Kenneth was born with eyes that could make out only light and shadow — the outlines of the world, but not faces or letters. In a believing family, he heard his mother reading the Bible aloud and singing psalms every evening from his earliest childhood, and it was those very melodies, before anything else, that he began picking out by ear on the piano at age five, faster than his sighted peers could read the notes. Three years later he began learning music printed in raised dots, reading music with his fingertips before he could read anything else.", next: 'kostya_scene2' },
        kostya_scene2: { text: "At university, studying music therapy, Kenneth took a job working with troubled teenagers — listening to their life stories by ear and, on the spot, right there in the session, turning what he'd heard into a song he played straight from memory. Many of these kids genuinely felt lighter, knowing someone had turned their pain into a melody instead of just listening and nodding.", next: 'kostya_choice1' },
        kostya_choice1: { text: 'After one such session, one of the teenagers asked him straight out: "Can you do that about your own stuff? About what you actually believe?" Kenneth realized that until then he had only been writing songs about other people\'s stories, carefully avoiding any mention on stage of his own faith — which, in those very months, was becoming more and more real to him.', choices: [
          { label: "Start writing honestly about his own faith, not just other people's stories", effects: { faith: 10 }, next: 'kostya_bridgeA' },
          { label: 'Stay in the safe role of an outside music therapist', effects: { faith: -10 }, next: 'kostya_bridgeB' },
        ] },
        kostya_bridgeA: { text: 'Kenneth tried writing his first song in his own voice right there in that same session, with no preparation and no idea what would come of it — and heard in his own voice the same relief he had seen in the teenagers after their songs. He formed a habit of quietly praying to himself every time before he sat down at the instrument, so the right words and notes would come on their own, and more and more often took as his subject not some abstract story but lines straight out of the Bible he had heard from his mother as a child. Over time, these unplanned improvisations of his own at concerts began drawing far more listeners than his carefully rehearsed numbers.', next: 'kostya_choice2' },
        kostya_bridgeB: { text: "Kenneth politely brushed off the teenager's question and stayed in his familiar, safe role — recording other people's stories by ear, saying nothing out loud about his own. Years later he sometimes regretted never finding the nerve that day to play something that was truly his own.", next: 'kostya_choice2' },
        kostya_choice2: { text: 'The organizers of a major concert tour offer Kenneth a contract built entirely around the familiar format of pre-rehearsed numbers with not a single live improvisation — predictable, safe for ticket sales, but without the one real risk: the audience hearing him live, working out the music and words on the spot, with no safety net.', choices: [
          { label: 'Insist on live improvisation in front of the audience, risking failure on stage', effects: { faith: 15 }, next: 'kostya_endLight' },
          { label: 'Agree to the safe, rehearsed format', effects: { faith: -15 }, next: 'kostya_endDark' },
        ] },
        kostya_endLight: { text: 'Kenneth insisted on live improvisation and walked on stage without a single prepared note, composing the music and words right there during the performance, opening every concert with the same quiet prayer he used in rehearsal. For more than forty years now he has toured the country in exactly this format — asking the hall, right in the middle of the performance, what to pray for, and turning those requests, on the spot and unprepared, into a song built on Bible verses — not as some curious "blind phenomenon," but as a musician for whom eyesight and the ability to truly see the person in front of him turned out to be two different things. The end of Kenneth\'s story.', next: null, choices: [] },
        kostya_endDark: { text: "Kenneth agreed to the safe format with no improvisation, and the concerts always went smoothly, following the same script from city to city. He never found out what that risk he chose to turn down might have become. The end of Kenneth's story.", next: null, choices: [] },
      },
    },
    marat: {
      start: 'marat_intro',
      scenes: {
        marat_intro: { text: "Martin was one of the leaders of a mafia clan — not a gang you join, but a clan you're born into and never leave — extortion, schemes with fuel companies, other people's open fear were simply part of an ordinary work week for him for nearly two decades, and the annual turnover of the fuel schemes alone, according to later investigators' estimates, ran into the hundreds of millions.", next: 'marat_scene2' },
        marat_scene2: { text: "Martin followed in his own father's footsteps, a man who for decades had remained one of the key figures in that same organization, and from his youth he saw that path not as a choice but as something taken for granted, like a surname. By thirty-five he had already served more than one prison term and knew full well the unwritten rule of his world: you don't retire from the organization, you only leave it feet first. The one bright spot behind bars was a girl he'd met on a film set — a believer, nothing like anyone he'd known in his old life.", next: 'marat_choice1' },
        marat_choice1: { text: 'In a solitary cell two meters by three, where Martin spent nearly two and a half years straight, a guard once looked through the peephole and asked, "You don\'t look so good. You all right?" Martin snapped at him to go away — but a minute later the guard came back and silently pushed a Bible through the gap in the door, asking for nothing in return.', choices: [
          { label: 'Pick up the Bible and open it in earnest', effects: { faith: 10 }, next: 'marat_bridgeA' },
          { label: 'Throw the Bible into the corner of the cell', effects: { faith: -10 }, next: 'marat_bridgeB' },
        ] },
        marat_bridgeA: { text: 'Martin angrily hurled the Bible against the cell wall, but there was nowhere to go in solitary — and eventually, out of sheer boredom, he picked the book up off the floor and started reading. One line from Proverbs — "when a man\'s ways please the Lord, he makes even his enemies to be at peace with him" — stopped him cold, and he read it over and over. He spent the rest of his months in solitary never letting go of the Bible, and came out of it, in his own words, already a firmly believing man.', next: 'marat_choice2' },
        marat_bridgeB: { text: "Martin threw the Bible into the corner of the cell and decided he'd get by without anyone's handouts — the book lay there untouched for nearly two and a half years of solitary confinement, while thoughts he'd never noticed in himself before began coming on their own, without a single page ever opened.", next: 'marat_choice2' },
        marat_choice2: { text: "Once released, Martin has to make a decision that in his world is never made without a price: officially and openly break with the organization, knowing that his former partners, including men his own father had trusted, would see such a move as betrayal — a betrayal that carries exactly one price, regardless of past service or old ties.", choices: [
          { label: 'Break completely with the organization, whatever it costs', effects: { faith: 15 }, next: 'marat_endLight' },
          { label: 'Stay formally in the business, choosing familiar safety', effects: { faith: -15 }, next: 'marat_endDark' },
        ] },
        marat_endLight: { text: "Martin broke completely with the organization, married that very believer he'd met on the film set, and openly, under his own name, wrote a book about his old life and his conversion. To this day he remains a rare example of someone at his level in the organization who got out of it alive and on his own feet. The end of Martin's story.", next: null, choices: [] },
        marat_endDark: { text: "Martin stayed formally tied to his old partners, choosing familiar, predictable danger over unknown freedom. That Bible was never read, and the chance he'd thrown into the corner of his solitary cell was something he later remembered more often than he cared to admit to himself. The end of Martin's story.", next: null, choices: [] },
      },
    },
    yuriy: {
      start: 'yuriy_intro',
      scenes: {
        yuriy_intro: { text: 'Jordan ran a small theological seminary near the front line when the war reached his own city in a single night. The building he had spent years building as a place to train future pastors ended up inside the shelling zone, and Jordan, like most of his neighbors, lost his own home in the very first weeks.', next: 'yuriy_scene2' },
        yuriy_scene2: { text: "Instead of getting his family out and staying somewhere safe, Jordan, together with several teachers, organized the evacuation of students and their families on rented buses, while he himself went back to the front-line areas with humanitarian aid almost every week. He kept a detailed diary of those months — not for himself, but because he felt that if it wasn't written down, what happened would be forgotten faster than it should be. Power and phone lines would go out for days at a stretch, and some of the entries later had to be reconstructed from memory by candlelight in the basement, which served at once as a bomb shelter and a makeshift classroom for the students who remained.", next: 'yuriy_choice1' },
        yuriy_choice1: { text: "In one small town under nonstop shelling, a group of teenagers who had lost their parents or been separated from them were left without a single adult willing to take responsibility for them in conditions like that. Jordan had to decide right there on the spot whether to take on the care of other people's children in the middle of active fighting.", choices: [
          { label: 'Take the teenagers under his own care, despite the risk', effects: { faith: 10 }, next: 'yuriy_bridgeA' },
          { label: 'Pass them along the volunteer chain and continue on his own route', effects: { faith: -10 }, next: 'yuriy_bridgeB' },
        ] },
        yuriy_bridgeA: { text: "Jordan took the teenagers with him, housing some of them in the surviving wing of the seminary alongside his own family. Five of them stayed in his care for years afterward, while he managed to track down and reunite nearly all the others he'd evacuated along that same route with their relatives.", next: 'yuriy_choice2' },
        yuriy_bridgeB: { text: 'Jordan handed the teenagers over to the next group of volunteers further along the evacuation route and continued on his way as planned, though the question of what became of those particular children kept him up at night for a long time afterward.', next: 'yuriy_choice2' },
        yuriy_choice2: { text: "After two years of nearly nonstop shelling, having lost his home and half of the seminary's former building, Jordan is offered grants and invitations to move the remaining students and the teaching entirely abroad, to safety — rather than continuing to teach and minister under fire on ruined home soil.", choices: [
          { label: 'Stay and continue the ministry on the spot, despite the shelling', effects: { faith: 15 }, next: 'yuriy_endLight' },
          { label: 'Move the seminary abroad for everyone\'s safety', effects: { faith: -15 }, next: 'yuriy_endDark' },
        ] },
        yuriy_endLight: { text: "Jordan stayed and kept running the seminary right there in the ruined city, training new pastors amid sounds that had long since become a familiar background noise for everyone around. He later gathered his diary of those years into a book — not a story of victory, but an honest lament alongside questions to God with no ready answers, and an account of how the hands of strangers, people he had never met, kept turning up again and again exactly when his own strength had run out. The end of Jordan's story.", next: null, choices: [] },
        yuriy_endDark: { text: "Jordan moved the seminary and the remaining students abroad, choosing safety over continuing to minister under fire. Classes resumed in far calmer conditions, but he admits that part of him stayed behind in that ruined city, the one he ultimately left. The end of Jordan's story.", next: null, choices: [] },
      },
    },
    olya: {
      start: 'olya_intro',
      scenes: {
        olya_intro: { text: 'Olivia was seventeen — an avid horseback rider with plans for her senior year ahead of her — when, on an ordinary beach outing with friends, she misjudged the depth, dove into shallow water, and hit her head on the sandy bottom — in that split second her life split cleanly into before and after: she was left paralyzed from the neck down, unable even to call for help.', next: 'olya_scene2' },
        olya_scene2: { text: "Olivia's first months in the hospital blurred into one indistinguishable day — IV drips, machines, doctors' routine phrases about a 'long road of rehabilitation' that clearly meant something else entirely. Friends visited less and less, not knowing what to say to someone who couldn't even turn her head to face them.", next: 'olya_choice1' },
        olya_choice1: { text: "In the hospital room, in the deepest darkness of despair, Olivia arrived at a simple and terrifying thought: if God truly did not exist, the most logical thing would be to end her own life. Lacking even the physical strength for that, she managed a short, desperate prayer toward the ceiling: 'If I can't die, show me how to live.'", choices: [
          { label: 'Keep praying that same prayer every day, searching for an answer', effects: { faith: 10 }, next: 'olya_bridgeA' },
          { label: 'Withdraw into depression and let no one near', effects: { faith: -10 }, next: 'olya_bridgeB' },
        ] },
        olya_bridgeA: { text: "Friends and family began praying for Olivia every day, gathering at her bedside, even when she herself could barely find the strength to believe it mattered. Gradually, step by step, the darkness began to recede — not because her body suddenly healed, but because she stopped being completely alone inside that darkness.", next: 'olya_choice2' },
        olya_bridgeB: { text: 'Olivia shut out everyone who tried to visit, turning to face the wall and spending her days in the dark of the room in complete, voluntary solitude, refusing any conversation about the meaning of what was happening to her.', next: 'olya_choice2' },
        olya_choice2: { text: 'Years into determined rehabilitation, Olivia is offered the chance to become a mentor for other people with disabilities — to speak openly and publicly about her paralysis as part of her own complete story, not just as a tragedy that invites pity.', choices: [
          { label: 'Agree, and turn her story into help for others', effects: { faith: 15 }, next: 'olya_endLight' },
          { label: "Refuse — she's tired of being an example for anyone else", effects: { faith: -15 }, next: 'olya_endDark' },
        ] },
        olya_endLight: { text: 'Olivia agreed. She says her paralysis became the place where she came to know God as closely as she never would have on her own two feet — and today she helps thousands of people with disabilities around the world find that same comfort. The end of Olivia\'s story.', next: null, choices: [] },
        olya_endDark: { text: 'Olivia refused and withdrew into herself completely, never finding a real answer to the one question she asked on that first terrifying night in the hospital. The years passed, and the darkness inside her never fully lifted. The end of Olivia\'s story.', next: null, choices: [] },
      },
    },
    natasha: {
      start: 'natasha_intro',
      scenes: {
        natasha_intro: { text: 'Diane and her husband kept a shared journal of his illness for all three years while cancer slowly but relentlessly took his strength — recording good days and bad, medication doses, brief moments of laughter between treatments. When he finally died, she was left alone with that thick journal and an enormous, frightening question of what to do with the life that remained.', next: 'natasha_scene2' },
        natasha_scene2: { text: "In the first weeks after the funeral, Diane kept automatically doing many of the things she'd done for her husband — buying his favorite tea, leaving space on his side of the bed, not yet daring to change anything in the house. Widow acquaintances warned her it would pass with time, but no one could say exactly how much time that would take.", next: 'natasha_choice1' },
        natasha_choice1: { text: 'Friends and relatives competed to offer different ways to cope with grief — not to dwell on the bad, to distract herself with work, to move on as quickly as possible for her own good. Diane had to decide for herself whether to listen to this entirely well-meaning advice or to grieve her own way, at her own pace.', choices: [
          { label: 'Let herself grieve for as long as it takes, without rushing', effects: { faith: 10 }, next: 'natasha_bridgeA' },
          { label: 'Push the grief down inside and act as if she had already coped', effects: { faith: -10 }, next: 'natasha_bridgeB' },
        ] },
        natasha_bridgeA: { text: 'Diane kept writing the journal, only now about her own grief instead of his illness as before. Every new entry was an honest, unpolished prayer, even when it held far more unanswered questions than any clarity.', next: 'natasha_choice2' },
        natasha_bridgeB: { text: 'Diane put on a careful smile in public just a month after the funeral, pretending to be coping better than she really was, though at night she cried so loudly and for so long that neighbors through the wall sometimes knocked, thinking something new had happened.', next: 'natasha_choice2' },
        natasha_choice2: { text: 'Years after losing her husband, Diane is offered the chance to publish entries from her private journal — to make something intensely intimate, written only for herself, available to other widows going through exactly the same thing right now.', choices: [
          { label: 'Publish it all, including the darkest entries', effects: { faith: 15 }, next: 'natasha_endLight' },
          { label: 'Refuse — some things should stay private', effects: { faith: -15 }, next: 'natasha_endDark' },
        ] },
        natasha_endLight: { text: 'Diane published the journal in full, crossing nothing out even from its hardest entries. Thousands of widows across the country wrote back to her that, for the first time, they felt their own grief was not something shameful to hide, but part of a shared road that did not have to be walked entirely alone. The end of Diane\'s story.', next: null, choices: [] },
        natasha_endDark: { text: 'Diane refused to publish the journal, leaving the worn notebooks in the back of a desk drawer. The grief remained her strictly private burden, shared with no one, for the rest of her own days. The end of Diane\'s story.', next: null, choices: [] },
      },
    },
    lena: {
      start: 'lena_intro',
      scenes: {
        lena_intro: { text: 'Megan was seventeen when two lines on a test taken secretly in a mall bathroom instantly overturned every plan she had made for the next few years of her life. Her first and clearest thought was: abortion was the only realistic way not to wreck her future right now.', next: 'lena_scene2' },
        lena_scene2: { text: "For several days Megan carried the news alone, afraid to say it out loud even to her best friend — rehearsing different versions of a conversation with her parents and cutting herself off mid-sentence each time, unable to find words that didn't sound like a catastrophe.", next: 'lena_choice1' },
        lena_choice1: { text: 'When her friend learned the truth, she took her to a local pregnancy support center, where, instead of the judgment she expected, Megan was calmly offered simply to talk and take a few days to think, rather than make a life-altering decision in a single panicked evening.', choices: [
          { label: 'Give herself time to think instead of deciding everything in a panic', effects: { faith: 10 }, next: 'lena_bridgeA' },
          { label: 'Insist on an immediate decision just to get it over with', effects: { faith: -10 }, next: 'lena_bridgeB' },
        ] },
        lena_bridgeA: { text: 'Megan kept coming to the center for several weeks straight, talking with the support team about all sorts of possible futures and gradually getting used to the idea that a decision did not have to be made in a rush, in a state of panic.', next: 'lena_choice2' },
        lena_bridgeB: { text: 'Megan insisted on an immediate decision at the clinic, already scheduled for the procedure, but at the very last moment, standing in the doorway of the reception area, something inside her made her turn sharply and walk out, never doing what she herself had insisted on just minutes before.', next: 'lena_choice2' },
        lena_choice2: { text: "Her parents, who learned of the pregnancy from her directly, needed to be told what she expected from the conversation ahead — and what Megan feared most of all was not the pregnancy itself, but their judgment.", choices: [
          { label: 'Tell her parents the truth and trust their reaction', effects: { faith: 15 }, next: 'lena_endLight' },
          { label: 'Hide the pregnancy as long as possible, delaying the inevitable conversation', effects: { faith: -15 }, next: 'lena_endDark' },
        ] },
        lena_endLight: { text: 'Megan told her parents the whole truth without holding back. Instead of the anger she expected, they hugged her tightly right there in the kitchen and said they would be there for her, whatever happened next. Today she is raising the son she nearly lost in the panic of that very first evening. The end of Megan\'s story.', next: null, choices: [] },
        lena_endDark: { text: 'Megan hid the pregnancy from her parents until the very last possible moment, and when the truth inevitably came out on its own, the trust between her and her parents was damaged for years to come. The end of Megan\'s story.', next: null, choices: [] },
      },
    },
    vera: {
      start: 'vera_intro',
      scenes: {
        vera_intro: { text: "Faith cared for her own mother, who recognized her a little less with every month — dementia was slowly taking not the body, still fairly strong, but the very personality of a person Faith had genuinely loved her whole life without reservation.", next: 'vera_scene2' },
        vera_scene2: { text: 'Faith kept a special notebook where she wrote down what her mother used to love — which music, which dishes, which stories from her youth she repeated more often than others — in case one day her mother could no longer remember any of it herself, and Faith wanted to remind her of at least an echo of her old life.', next: 'vera_choice1' },
        vera_choice1: { text: 'One day, looking at Faith with a completely blank, unfamiliar gaze, her mother politely asked who she was. Faith had to decide for herself how to respond to this simple question, which now repeated almost every visit without exception.', choices: [
          { label: 'Answer patiently each time, as if for the first time', effects: { faith: 10 }, next: 'vera_bridgeA' },
          { label: 'Allow herself to get angry and pull back emotionally', effects: { faith: -10 }, next: 'vera_bridgeB' },
        ] },
        vera_bridgeA: { text: 'Faith began praying briefly before each visit to the ward — not that her mother would suddenly remember her, but simply for the plain human patience to keep loving someone who could no longer return that love in kind.', next: 'vera_choice2' },
        vera_bridgeB: { text: 'Faith started coming to the nursing home noticeably less often, finding ever new, perfectly respectable reasons to put off the next visit — pulling back emotionally turned out far easier than seeing the same quiet pain, again and again, in the eyes of someone who was now, in effect, a stranger.', next: 'vera_choice2' },
        vera_choice2: { text: "In one of the last truly lucid moments, her mother unexpectedly recognizes Faith and says quietly, 'You come to see me so rarely.' Faith is left with only this one brief moment to finally decide how to spend whatever time remains together.", choices: [
          { label: 'Start coming every day, however much time is left', effects: { faith: 15 }, next: 'vera_endLight' },
          { label: 'Keep pulling back, protecting herself from the pain', effects: { faith: -15 }, next: 'vera_endDark' },
        ] },
        vera_endLight: { text: "Faith began coming to the nursing home every single day, however much time her mother had left. Her mother did not always recognize her face, but Faith says she never did it to be recognized — because real love does not require being remembered in return. The end of Faith's story.", next: null, choices: [] },
        vera_endDark: { text: "Faith kept pulling back emotionally right up to the end of her mother's illness. After the funeral, what haunted her most was not the hard memories of her mother's illness, but precisely those many visits she had so easily put off for later. The end of Faith's story.", next: null, choices: [] },
      },
    },
    alya: {
      start: 'alya_intro',
      scenes: {
        alya_intro: { text: 'Since she was thirteen, Alyssa had been hit from time to time by panic attacks so severe that more than once she hid from classmates in a school bathroom stall, afraid someone would hear her shaking. Years later, already a famous performer with millions of streams, she still hid these attacks from almost everyone around her — the same panic that had come at thirteen was waiting for her backstage at literally every concert.', next: 'alya_scene2' },
        alya_scene2: { text: 'Her team and managers knew Alyssa as a composed, steady artist who could keep her face together in front of any camera — only a handful of people knew about the panic that sometimes literally paralyzed her right before walking on stage. What scared Alyssa was not so much the condition itself as the thought that admitting it publicly would destroy the image she had spent years building.', next: 'alya_choice1' },
        alya_choice1: { text: 'One day, after an especially bad attack right before a show, Alyssa tried pouring what she was feeling straight into the lyrics of a new song, without smoothing over or softening a single line — and had to decide whether to leave that draft in a drawer or actually offer it to her producer for the new album.', choices: [
          { label: 'Offer the song as it is, without prettying it up', effects: { faith: 10 }, next: 'alya_bridgeA' },
          { label: 'Hide the draft and write something safer instead', effects: { faith: -10 }, next: 'alya_bridgeB' },
        ] },
        alya_bridgeA: { text: "Alyssa gave the producer the song exactly as it came out in that moment of panic — about needing God right now, not someday later when things get easier. It came out as a single, hit the top of the charts, and sold a quarter of a million copies — and with it, for the first time publicly, people learned what Alyssa had actually been going through backstage for more than ten years.", next: 'alya_choice2' },
        alya_bridgeB: { text: 'Alyssa hid the honest draft in a drawer and wrote something safer and more predictable for the album instead, without a single hint of the panic that still caught up with her before every concert.', next: 'alya_choice2' },
        alya_choice2: { text: 'Years later — on one branch of this story thanks to the unexpected success of that brutally honest song that became a single, on the other simply because the panic backstage never let go of her and eventually became known against her will, despite all the safer lyrics since — journalists one after another began asking Alyssa directly whether she was managing with prayer alone or had also seen doctors, a question she had never had to answer out loud before.', choices: [
          { label: 'Answer honestly: prayer, therapy, and medication together', effects: { faith: 15 }, next: 'alya_endLight' },
          { label: 'Dodge the question, leaving things as they are, with faith as the only story', effects: { faith: -15 }, next: 'alya_endDark' },
        ] },
        alya_endLight: { text: "Alyssa answered honestly: prayer and faith gave her a community and a framework of meaning, but what actually helped her cope were therapy and medication prescribed by a doctor too — and one does not replace the other. Instead of destroying her image, as she had feared, that admission made her a voice for thousands of fans who, for the first time, heard a famous person say you can sincerely believe in God and still get honest treatment. The end of Alyssa's story.", next: null, choices: [] },
        alya_endDark: { text: "Alyssa dodged the direct question, choosing to leave her public image as it was — faith as the only explanation, without a single word about doctors or medication. The panic attacks never went away over the years, and the honest conversation about them never happened. The end of Alyssa's story.", next: null, choices: [] },
      },
    },
    nina: {
      start: 'nina_intro',
      scenes: {
        nina_intro: { text: "As a child Nadine had polio and, to doctors' surprise, recovered so well that for decades she barely thought about it — until, in adulthood, pain and weakness in those same muscles began coming back, this time with no hope of a new recovery. Post-polio syndrome, as doctors eventually called it, meant that a body which had once already won this battle was now slowly losing it all over again.", next: 'nina_scene2' },
        nina_scene2: { text: "Outwardly Nadine barely changed for years, which made it only harder to explain her growing fatigue and pain to acquaintances and coworkers — from the outside she looked perfectly healthy, so to many her complaints sounded exaggerated. At night, when the pain in her muscles kept sleep away, she often dreamed of a completely healthy body, and every morning's waking brought her right back to the same old exhaustion.", next: 'nina_choice1' },
        nina_choice1: { text: "For years Nadine prayed that God would stop, or at least slow, the decline — and again and again she woke up in the very same body, not a healed one. She had to decide for herself what to do with this prayer going forward, since the answer clearly wasn't coming the way she had asked for it.", choices: [
          { label: 'Keep praying, even as her body stays the same', effects: { faith: 10 }, next: 'nina_bridgeA' },
          { label: 'Stop praying, disillusioned by the lack of an answer', effects: { faith: -10 }, next: 'nina_bridgeB' },
        ] },
        nina_bridgeA: { text: "Nadine kept praying, even though her body stayed the same year after year. Gradually the prayer stopped being a request for healing and became simply a conversation with God about how to live one more day with the pain, rather than in spite of it — she calls it not a change in her body, but a change in the question 'why' itself.", next: 'nina_choice2' },
        nina_bridgeB: { text: 'Nadine stopped praying altogether, worn out from repeating a request that brought no answer year after year. The pain itself grew neither stronger nor weaker from this — she simply no longer had anyone to share it with, even in her own mind.', next: 'nina_choice2' },
        nina_choice2: { text: 'Years into living with the progressive illness, Nadine is offered the chance to write a book — not about the healing that never came, but specifically about the honest, unanswered questions to God inside prolonged suffering — under her own name, without softening anything.', choices: [
          { label: 'Agree and write the book, even though her body was never healed', effects: { faith: 15 }, next: 'nina_endLight' },
          { label: 'Refuse — she barely has strength for herself, let alone others', effects: { faith: -15 }, next: 'nina_endDark' },
        ] },
        nina_endLight: { text: "Nadine agreed and wrote the book about unanswered questions inside a long illness. Her body remained sick, the pain and weakness never went away, but she says she found something that turned out to matter more than healing itself — that a Christian's hope rests not on a guaranteed outcome of prayer, but on the character of the One she prays to. Thousands of readers with invisible chronic illnesses later wrote to her that, for the first time, they didn't feel alone inside their pain. The end of Nadine's story.", next: null, choices: [] },
        nina_endDark: { text: "Nadine refused, deciding she barely had the strength for herself. She kept coping alone, convinced that prayers left unanswered for so many years weren't worth repeating again. The end of Nadine's story.", next: null, choices: [] },
      },
    },
    lyuda: {
      start: 'lyuda_intro',
      scenes: {
        lyuda_intro: { text: "Linda adopted twin boys, Matthew and Daniel, when they were very small, and learned both boys were autistic when they were three, before either of them had ever once called her Mom — the speech therapist stated the diagnosis in an even voice for both brothers at once, while Linda stared at two identical children's chairs in the corner of the office, feeling the picture of their future family she had imagined while bringing both babies home collapse. The doctors warned her right away: each brother's development could go in a completely different direction, and the same methods that worked for one might well not work for the other.", next: 'lyuda_scene2' },
        lyuda_scene2: { text: "In the first year after the double diagnosis, Linda went through seven specialists looking for even one who would say they were wrong about at least one of the brothers, and started a single thick notebook for both sons, where she wrote down every new word either of them said — afraid she'd forget, and between the two of them there were too few words to afford forgetting even one.", next: 'lyuda_choice1' },
        lyuda_choice1: { text: 'At the playground in the park, other mothers would look away and quietly steer their kids aside the moment one brother started rocking and screaming through a meltdown, and the other echoed the scream right after him — something only Linda herself really knew how to handle, and even she not always.', choices: [
          { label: "Keep going to the playground despite everyone's stares", effects: { faith: 10 }, next: 'lyuda_bridgeA' },
          { label: 'Stop leaving the house to avoid the judgment', effects: { faith: -10 }, next: 'lyuda_bridgeB' },
        ] },
        lyuda_bridgeA: { text: 'Linda kept going to that same playground every day, praying briefly to herself before opening the building\'s door — for each son by name, separately, not one shared prayer for both, first for one, then going back for the other, because handling both of them in public at once was even harder. On the hardest evenings she repeated the same Bible verse from a psalm to herself — that both boys had been wonderfully made by God even in the womb, whatever words the doctors used for it. Half a year later, one mother, Susan, turned out not to look away like the rest, but came closer instead and simply asked: "What can I do to help right now, with both of them at once?"', next: 'lyuda_choice2' },
        lyuda_bridgeB: { text: "Linda stopped leaving the house for almost a year, taking both boys out only by car late in the evening, once the playgrounds were already empty. The loneliness of those months turned out heavier than the diagnosis itself — heavier even than any of the stares she'd been hiding from.", next: 'lyuda_choice2' },
        lyuda_choice2: { text: 'The pastor of their church offers to help Linda organize a special Sunday service for families with children with developmental differences — with dimmed lights, quiet music, and a place where both her sons could come exactly as they are, in full view of the whole congregation.', choices: [
          { label: 'Agree and bring her story into the light', effects: { faith: 15 }, next: 'lyuda_endLight' },
          { label: 'Refuse — too many years spent hiding her sons to suddenly show them publicly', effects: { faith: -15 }, next: 'lyuda_endDark' },
        ] },
        lyuda_endLight: { text: "Linda agreed. The service she helped create gathered more than thirty families in its first year, each of whom had spent years hiding at home just as she once had with Matthew and Daniel. Years later, both sons, now grown, found a permanent place for themselves in that same congregation — one greets people at the door before the service, the other helps with the sound system — and both, each in his own way, turned out to be needed by the church far more than anyone could have imagined in the speech therapist's office when they were three. The end of Linda's story.", next: null, choices: [] },
        lyuda_endDark: { text: "Linda refused, frightened of showing her sons in front of the whole congregation. She kept raising both boys apart from everyone, and the notebook with their first words stayed sitting in the desk drawer, never finished. The end of Linda's story.", next: null, choices: [] },
      },
    },
    andrey: {
      start: 'andrey_intro',
      scenes: {
        andrey_intro: { text: 'Andrew led an underground Christian seminar for young people in a country where the mere existence of such a group meant a real sentence in the labor camps. The secret police watched him for months through informants before raiding his home at dawn.', next: 'andrey_scene2' },
        andrey_scene2: { text: 'The seminar met every two weeks in different apartments, disguised as birthdays or ordinary get-togethers — Andrew memorized entire chapters of Scripture by heart, since keeping printed copies at home would have been direct evidence in a search. By twenty-five he had already grown used to living with the constant sense that any new acquaintance might turn out to be an informant.', next: 'andrey_choice1' },
        andrey_choice1: { text: 'During interrogation after the raid, the investigator, in a fairly businesslike tone, offered Andrew immediate freedom in exchange for signing an official renunciation of the organization — one simple signature on a ready-made text instead of long years in a camp.', choices: [
          { label: 'Refuse to sign, whatever the consequences', effects: { faith: 10 }, next: 'andrey_bridgeA' },
          { label: 'Sign, deciding freedom matters more than principle', effects: { faith: -10 }, next: 'andrey_bridgeB' },
        ] },
        andrey_bridgeA: { text: 'Andrew refused to sign anything and received nine years — camps, exile, constant surveillance after release. In the camp, against every logic of caution, he kept holding the same quiet conversations about faith, now with fellow prisoners in the barracks.', next: 'andrey_choice2' },
        andrey_bridgeB: { text: 'Andrew signed the renunciation and walked free that same day on a signed statement, but the feeling that he had betrayed not just the organization and his comrades, but himself, stayed with him far longer than the full sentence would have lasted.', next: 'andrey_choice2' },
        andrey_choice2: { text: 'After release, trusted contacts offer Andrew a choice — secretly leave the country, where he would certainly be persecuted again at the first opportunity, or stay and keep helping people just like himself back in the camps.', choices: [
          { label: 'Stay and keep fighting for those currently in the camps', effects: { faith: 15 }, next: 'andrey_endLight' },
          { label: 'Leave and put the fight behind him for a peaceful life', effects: { faith: -15 }, next: 'andrey_endDark' },
        ] },
        andrey_endLight: { text: 'Andrew stayed and devoted the following decades to helping those who had gone through the camps just as he had — secretly gathering aid for prisoners of conscience broken in body and spirit across the country. The end of Andrew\'s story.', next: null, choices: [] },
        andrey_endDark: { text: 'Andrew secretly left the country, choosing personal peace over continuing a dangerous fight. He genuinely found peace in his new home, but along with it came a question he never honestly asked himself for the rest of his life: how many more times would he have been willing to sign anything for his own freedom. The end of Andrew\'s story.', next: null, choices: [] },
      },
    },
    gleb: {
      start: 'gleb_intro',
      scenes: {
        gleb_intro: { text: 'Glen was the guitarist of a cult rock band at the very peak of world fame — packed stadiums, millions of devoted fans worldwide, and methamphetamine, without a regular dose of which he could no longer physically walk onstage for the next show.', next: 'gleb_scene2' },
        gleb_scene2: { text: 'Between tours, Glen saw his daughter from his first marriage at most once every few months, usually squeezed between interviews and soundchecks — and each time noticed her growing older and less familiar, and himself becoming a stranger to her behind the dressing-room glass.', next: 'gleb_choice1' },
        gleb_choice1: { text: "The daughter he saw so rarely once asked over the phone, in a completely childlike, defenseless voice: 'Dad, do you still love me?' — and something in that simple question instantly broke through the armor Glen had been methodically building over years on tour.", choices: [
          { label: 'Honestly ask for help for the first time, instead of coping alone', effects: { faith: 10 }, next: 'gleb_bridgeA' },
          { label: "Brush it off and write his daughter's question off as childish anxiety", effects: { faith: -10 }, next: 'gleb_bridgeB' },
        ] },
        gleb_bridgeA: { text: 'On his knees right there in a hotel room, seriously for the first time in his life, Glen asked God, if He even existed, to take the addiction away entirely — and felt a change so real and instant that by the very next day he had quit every drug completely, without a single withdrawal symptom, something doctors had never once managed to achieve.', next: 'gleb_choice2' },
        gleb_bridgeB: { text: "Glen irritably brushed off the question and went back to the next show as if nothing had happened, though his daughter's childlike voice kept sounding in his head every time he reached for another dose before walking onstage.", next: 'gleb_choice2' },
        gleb_choice2: { text: "The band is preparing for a massive new world tour that will bring everyone in it more millions, but will inevitably mean going back to the same exhausting life on the road. Glen has to decide right now whether to go with them this time.", choices: [
          { label: 'Leave the band for his daughter and a new life', effects: { faith: 15 }, next: 'gleb_endLight' },
          { label: 'Go on tour, telling himself this time will be different', effects: { faith: -15 }, next: 'gleb_endDark' },
        ] },
        gleb_endLight: { text: 'Glen left the band for good, despite protests from management and fans. The press and some critics called it the end of a promising career, but for his daughter it became the beginning of something far more important — a father who was finally there for good. The end of Glen\'s story.', next: null, choices: [] },
        gleb_endDark: { text: 'Glen went on tour anyway, telling himself he could keep the addiction under control differently this time. By the middle of the tour, everything was back to where it had been — including the same dose before walking onstage, and the same question from his daughter on the phone, still left without an honest answer. The end of Glen\'s story.', next: null, choices: [] },
      },
    },
    oleg: {
      start: 'oleg_intro',
      scenes: {
        oleg_intro: { text: 'Oliver lost three people at once — his wife, his young daughter, and his own mother — when a drunk driver in the oncoming lane slammed into the car carrying his whole family. Oliver himself and the surviving children survived with severe injuries, but the car with four generations of family inside it no longer existed, and neither did the life he had planned to go on living.', next: 'oleg_scene2' },
        oleg_scene2: { text: 'In the first weeks after the crash, Oliver, on crutches and still in a cast, walked through a house crammed full of the belongings of the three who had died at once — his daughter\'s crib, his mother\'s Bible on the kitchen table, his wife\'s jewelry in a box he couldn\'t bring himself to open. Friends and coworkers no longer knew what to even say to him besides a dry "hang in there," and gradually started visiting less and less.', next: 'oleg_choice1' },
        oleg_choice1: { text: "A psychologist he knew gently offered Oliver a simple idea that, in his state, was terrifying: grief on this scale can't be quickly overcome or neatly sidestepped — you have to go all the way into it, or it will grow even larger from the inside.", choices: [
          { label: 'Enter that grief for real, however enormous it is', effects: { faith: 10 }, next: 'oleg_bridgeA' },
          { label: 'Keep the grief at a distance, staying busy with tasks', effects: { faith: -10 }, next: 'oleg_bridgeB' },
        ] },
        oleg_bridgeA: { text: 'Oliver let himself grieve for real, without setting himself any deadline for when it had to end — he cried in front of his surviving children without hiding his tears, and gradually began writing down what he learned each day about a loss of this size, things no one could have explained to him beforehand.', next: 'oleg_choice2' },
        oleg_bridgeB: { text: 'Oliver threw himself headlong into tasks — fixing the car, sorting through paperwork, going back to work early — filling every free minute with something to do, anything rather than being left alone with the silence where three familiar voices used to sound at once.', next: 'oleg_choice2' },
        oleg_choice2: { text: 'Years after the crash, now raising the surviving children alone and having completed a theological education, Oliver is offered a chance to write a book about what he went through — honestly, including the months when he was certain joy would never return to his life in any form, and including his anger at the driver who survived that night.', choices: [
          { label: "Write the book without softening anything for the reader's comfort", effects: { faith: 15 }, next: 'oleg_endLight' },
          { label: 'Refuse — too personal to put in front of the public', effects: { faith: -15 }, next: 'oleg_endDark' },
        ] },
        oleg_endLight: { text: 'Oliver wrote the book without embellishment, honestly naming the grief from that crash for what it was — a catastrophe that had struck three generations of his family at once, not merely a hardship to be quietly "accepted in peace." He came to assert something that surprised many readers: the soul can actually grow through a loss like this, not only in spite of it — and that admission helped thousands of people who had lived through their own catastrophes stop being ashamed that grief doesn\'t run on a schedule. The end of Oliver\'s story.', next: null, choices: [] },
        oleg_endDark: { text: "Oliver turned down the book and kept filling his days with tasks, never once stopping to truly live through what had happened. Years later his children noticed their father could talk about anything at all except the one single day that had actually shaped the rest of their lives. The end of Oliver's story.", next: null, choices: [] },
      },
    },
    kirill: {
      start: 'kirill_intro',
      scenes: {
        kirill_intro: { text: 'Carl was a successful businessman with an impeccable reputation on paper, and a bottle he could no longer make it to lunch without. When alcohol finally got the upper hand over his business and his family, he traveled across the ocean for treatment with one of the most famous psychiatrists of the era, spending nearly a year of his life and a small fortune on the course of therapy.', next: 'kirill_scene2' },
        kirill_scene2: { text: 'A year of treatment brought temporary relief, but just a few months after coming home, Carl started drinking again, worse than before, and went back to see the same doctor a second time, expecting a new program or a new medication. Instead, the celebrated psychiatrist told him something Carl never expected to hear from a man of science: medicine had exhausted its options, and the only chance left was a genuine spiritual conversion, which, on rare occasions, completely turns around hopeless cases exactly like his.', next: 'kirill_choice1' },
        kirill_choice1: { text: 'Coming home with this unexpected diagnosis from a materialist doctor, Carl learned of a small Christian lay group where people openly, out loud, in front of witnesses, confessed their own sins and weaknesses and tried in practice to make right the harm they had done to those close to them.', choices: [
          { label: 'Go to a meeting of the group, however frightening open confession feels', effects: { faith: 10 }, next: 'kirill_bridgeA' },
          { label: 'Dismiss the idea as ridiculous amateur theatrics', effects: { faith: -10 }, next: 'kirill_bridgeB' },
        ] },
        kirill_bridgeA: { text: 'Carl came to a meeting of the group and followed their process in full, however strange it sounded for a man of his standing: he fully surrendered his will to God, admitting out loud that he could not manage on his own; he wrote out a merciless, honest list of his own sins and weaknesses, without softening a single one; he spoke that list aloud in front of witnesses, not just in silence with himself; and he began, one by one, making right the wrongs he had done to specific people during his years of drinking — with money, with apologies, with his time. It was through this, not through willpower alone, that the craving for alcohol that had tormented him for years began to weaken, day after day. He would later call it a genuine spiritual conversion — a deep, real change, not the temporary relief of another round of treatment.', next: 'kirill_choice2' },
        kirill_bridgeB: { text: 'Carl dismissed the suggestion and chose to trust in science and his own willpower alone, though neither one ever helped him stay sober more than a few weeks at a stretch.', next: 'kirill_choice2' },
        kirill_choice2: { text: "Years after that choice, one of Carl's own acquaintances from his old life reaches out to him — a man just as successful, and just as secretly drinking — with a direct question: would Carl agree to tell him, specifically him, openly and in front of witnesses, the whole story of his own fall, and whether anything had truly helped, without a single detail softened.", choices: [
          { label: 'Tell it exactly as it happened, without embellishment, in person and openly', effects: { faith: 15 }, next: 'kirill_endLight' },
          { label: 'Get by with vague generalities, so as not to stir up the past', effects: { faith: -15 }, next: 'kirill_endDark' },
        ] },
        kirill_endLight: { text: "Carl told it exactly as it happened, softening nothing, and that conversation became one link in a chain of similarly candid conversations between men like them, which years later helped lay the groundwork for an entire mutual-help movement for people struggling with addiction — one known worldwide today. The end of Carl's story.", next: null, choices: [] },
        kirill_endDark: { text: "Carl got by with vague generalities and never worked up the nerve to tell his acquaintance the whole truth about his own fall and about what had actually helped, or hadn't. A chance that might have helped one more person passed by, remaining nothing more than a polite conversation behind a closed office door. The end of Carl's story.", next: null, choices: [] },
      },
    },
    vlad: {
      start: 'vlad_intro',
      scenes: {
        vlad_intro: { text: "Walter was sentenced to death for a double murder he never committed — the prosecution's only substantial evidence was ballistics experts who claimed the bullets from the crime scene had been fired from an old revolver found in his own mother's closet, even though that revolver hadn't been fired in years and had long been broken.", next: 'vlad_scene2' },
        vlad_scene2: { text: 'Walter spent his first three years on death row in almost total, agonizing silence, choking on hatred for everyone connected to his case, including himself for failing to prove the obvious. He heard his neighbors down death row executed one after another, and understood that, on paper, he was condemned exactly like they were, despite being completely innocent.', next: 'vlad_choice1' },
        vlad_choice1: { text: 'In his fourth year of imprisonment, Walter decided: either this hatred would eventually kill the last living thing in him, or he would find a way to survive inside his own mind, without waiting for the outcome of appeals that had dragged on for years without a single change.', choices: [
          { label: 'Let something besides hatred into his cell and his mind', effects: { faith: 10 }, next: 'vlad_bridgeA' },
          { label: 'Stay locked in fury and share it with no one', effects: { faith: -10 }, next: 'vlad_bridgeB' },
        ] },
        vlad_bridgeA: { text: 'Walter remembered words his mother had told him as a child: "God can do anything except fail" — and began praying and reading the Bible in his cell every evening, deciding that since the earthly courts kept saying no, again and again, he would hold on to faith that the God he loved would not let him die for something he hadn\'t done. Only after that did he start talking with his neighbors down death row through the bars in the evenings, and eventually became, for many of them, an unspoken source of support — reading aloud, helping write letters home, sitting with them in spirit on what was truly their last night, knowing that for them it really was the last one. Over the following twenty-seven years he saw off fifty-four people, executed just a few meters from his own cell.', next: 'vlad_choice2' },
        vlad_bridgeB: { text: 'Walter finally shut himself away in a cold, dull fury, refusing any conversation with his neighbors down death row. The years went by, the count of those executed near his cell kept growing, and the darkness inside him only thickened with every new appeal denied.', next: 'vlad_choice2' },
        vlad_choice2: { text: "After nearly thirty years of imprisonment, a new team of lawyers pushes to have the ballistics evidence re-examined with the most advanced equipment available, and the result conclusively proves that the bullets from the crime scene could not physically have been fired from the revolver that was found. The supreme court overturns the conviction, and the prosecutor's office, acknowledging the forensic error, declines to retry the case. Walter now has a real choice in how to meet the system that had taken nearly thirty years of his life for nothing.", choices: [
          { label: 'Forgive, without ever giving up the demand for systemic reform', effects: { faith: 15 }, next: 'vlad_endLight' },
          { label: 'Devote the rest of his life to revenge against those who imprisoned him', effects: { faith: -15 }, next: 'vlad_endDark' },
        ] },
        vlad_endLight: { text: "Walter walked free and, to the visible astonishment of the assembled journalists, said outside the courthouse that he forgave the experts whose professional error had cost him thirty years on death row — because the same God who, as he had believed all those years, would not let him die for someone else's crime now, in his own words, left him no choice but forgiveness. Together with the lawyers who had won back his freedom, he wrote a book about what he had lived through, which became an international bestseller and forced a review of dozens of similar cases across the country. The end of Walter's story.", next: null, choices: [] },
        vlad_endDark: { text: "Walter walked free with a single clear goal: to make absolutely everyone connected to his case pay. Freedom of the body never really brought him freedom from the all-consuming fury that now defined, without exception, literally every day that followed. The end of Walter's story.", next: null, choices: [] },
      },
    },
    kolya: {
      start: 'kolya_intro',
      scenes: {
        kolya_intro: { text: 'Nicholas was a materialist scientist with a solid international reputation, deeply convinced that religious faith was a simple psychological crutch for those too afraid to honestly face a cold, meaningless universe with no God at all.', next: 'kolya_scene2' },
        kolya_scene2: { text: 'Nicholas had built his entire scientific career on the principle of accepting no claim without rigorous, verifiable evidence — and secretly took pride in his reputation as the most exacting skeptic in the department, capable of tearing apart any student paper with insufficiently rigorous methodology.', next: 'kolya_choice1' },
        kolya_choice1: { text: 'A colleague at the institute, also a scientist with a solid reputation but a sincere believer, unexpectedly suggested Nicholas examine the classic arguments for God\'s existence using an honest, genuinely scientific method — not as a sermon from a pulpit, but as a rigorous intellectual challenge fully worthy of his own research methods.', choices: [
          { label: 'Accept the challenge and investigate the question as rigorously as any other hypothesis', effects: { faith: 10 }, next: 'kolya_bridgeA' },
          { label: 'Refuse — the question was settled for him as a scientist long ago', effects: { faith: -10 }, next: 'kolya_bridgeB' },
        ] },
        kolya_bridgeA: { text: 'Nicholas spent several years of time free from his main work studying the philosophy of science, cosmology, and historical primary sources, applying exactly the same research rigor he used in his own published work — and the deeper he dug professionally, the less solid ground remained for his old, unconditional certainty.', next: 'kolya_choice2' },
        kolya_bridgeB: { text: 'Nicholas refused to spend time on such an investigation and kept doing his usual science, though sometimes, late at night in an empty lab, he unexpectedly caught himself asking questions he had long considered permanently closed.', next: 'kolya_choice2' },
        kolya_choice2: { text: 'At a major international conference, colleagues traditionally expect Nicholas\'s usual, years-polished lecture on the fundamental incompatibility of rigorous science and religious faith. He has to decide, right before walking up to the podium, whether to voice his changed views publicly, risking a scientific reputation built over decades.', choices: [
          { label: 'Tell the truth about where his own investigation led him', effects: { faith: 15 }, next: 'kolya_endLight' },
          { label: 'Stay silent and preserve his old image for the sake of his career', effects: { faith: -15 }, next: 'kolya_endDark' },
        ] },
        kolya_endLight: { text: 'Nicholas told the truth in front of a full hall of colleagues from around the world, softening nothing for his own comfort. Part of the scientific community pointedly turned away from him after that talk, but he consistently says he chose honesty with himself over a reputation built for decades on silence. The end of Nicholas\'s story.', next: null, choices: [] },
        kolya_endDark: { text: 'Nicholas chose to stay silent at the podium and kept delivering his old lectures as if nothing had changed, carefully hiding his shifted views even from his closest colleagues at the institute. His public image remained perfectly intact — unlike what he actually believed inside. The end of Nicholas\'s story.', next: null, choices: [] },
      },
    },
    bogdan: {
      start: 'bogdan_intro',
      scenes: {
        bogdan_intro: { text: 'Theodore traveled to a war-torn country as a church envoy — to personally negotiate the release of hostages held by an armed group — and less than a day after arriving became one of the hostages himself, held by the very group he had come to negotiate with.', next: 'bogdan_scene2' },
        bogdan_scene2: { text: 'Theodore spent most of the nearly five years that followed — about four of them — in complete solitary isolation, chained in a windowless room, blindfolded every time the guards appeared. With not a single conversation with another prisoner, no books, no clock, he kept count of the days only by the rare meals.', next: 'bogdan_choice1' },
        bogdan_choice1: { text: 'In his second year of solitary confinement, Theodore noticed that his habitual, pleading prayer said aloud — "get me out of here" — left only a sharper sense of abandonment after every repetition, not relief. He had to decide how to keep going: search for some other, more durable way of holding onto faith within himself, or give in to hopelessness.', choices: [
          { label: 'Look for a discipline of hope in his faith, not pleading', effects: { faith: 10 }, next: 'bogdan_bridgeA' },
          { label: 'Sink into despair and stop hoping for anything', effects: { faith: -10 }, next: 'bogdan_bridgeB' },
        ] },
        bogdan_bridgeA: { text: 'Theodore stopped begging God for immediate release and instead, every morning in the dark, repeated the same inner vow to himself: the body could be chained, and the mind could be attacked, but the captors would never get his soul. He held onto this faith not as comfort but as a discipline requiring fresh effort every single day — and in place of prayers of request, he began composing stories in his head and retelling them to himself, so as not to let his mind dissolve completely into the darkness and silence.', next: 'bogdan_choice2' },
        bogdan_bridgeB: { text: 'Theodore gradually sank into deep despair, mechanically counting the days with no real hope that anyone from outside would come to help, or that this captivity would ever truly end at all.', next: 'bogdan_choice2' },
        bogdan_choice2: { text: "After nearly five years of captivity and long negotiations carried out on his behalf by the church organization, Theodore is finally released — emaciated, but alive. Journalists at the foot of the airplane steps back home ask him directly whether he's willing to ever forgive those who held him in chains and darkness for so many years, or whether he intends to demand the harshest possible punishment for them.", choices: [
          { label: 'Say that forgiveness liberates more powerfully than any sentence', effects: { faith: 15 }, next: 'bogdan_endLight' },
          { label: 'Refuse to forgive and demand retribution', effects: { faith: -15 }, next: 'bogdan_endDark' },
        ] },
        bogdan_endLight: { text: "Theodore told the journalists that forgiveness liberates more powerfully than any court sentence — and several years later personally returned to that same country and met with his former captors, in order, in his own words, to finally bury the ghosts of the past. Soon after his release he took charge of a charity helping the homeless, saying that the windowless room had taught him to see in every destitute person the same dignity that had once been taken from him. The end of Theodore's story.", next: null, choices: [] },
        bogdan_endDark: { text: "Theodore refused to forgive his captors and for years openly demanded the harshest possible punishment for them. His body was free, but for a long time inside he remained in that same dark, windowless room he had physically left long before. The end of Theodore's story.", next: null, choices: [] },
      },
    },
  };

  const data = { CHARACTERS, STORIES };
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  else { window.Content = window.Content || {}; window.Content.en = data; }
})();
