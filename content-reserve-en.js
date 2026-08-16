// Reserve batch — EN translations, all 50 stories (complete, translated from content-reserve-ru.js).
// Mirrors content-reserve-ru.js structure exactly (same scene keys/next/choices/effects); only text,
// choice labels, and character name/theme were translated. Not wired into index.html (see
// content-reserve-ru.js's own header) — preview/review only until approved for the live game.
(function () {
  const CHARACTERS = [
    { id: 0, key: 'tenboom', name: "Kate", gender: 'ж', theme: "saving Jews, concentration camp, forgiveness", color: '#ce3b3b' },
    { id: 1, key: 'wurmbrand', name: "Victor", gender: 'м', theme: "tortured in prison for his faith, persecution", color: '#d85241' },
    { id: 2, key: 'brotherandrew', name: "Gene", gender: 'м', theme: "smuggling Bibles across the Iron Curtain", color: '#e16b47' },
    { id: 3, key: 'bonhoeffer', name: "Tony", gender: 'м', theme: "resisting Nazism, executed for his faith", color: '#d78c60' },
    { id: 4, key: 'liddell', name: "Barry", gender: 'м', theme: "Olympic champion, missionary, Japanese POW camp", color: '#d58234' },
    { id: 5, key: 'elliot', name: "Mary", gender: 'ж', theme: "missionary husband killed by tribe, forgiveness", color: '#df9d3a' },
    { id: 6, key: 'aylward', name: "Annie", gender: 'ж', theme: "missionary in China, rescuing children", color: '#d4b054' },
    { id: 7, key: 'wangmingdao', name: "Mike", gender: 'м', theme: "Chinese pastor, decades in prison", color: '#ddc75a' },
    { id: 8, key: 'watchmannee', name: "Steve", gender: 'м', theme: "Chinese church leader, labor camp", color: '#ddd72c' },
    { id: 9, key: 'wilberforce', name: "Pete", gender: 'м', theme: "member of Parliament, fight to abolish slavery", color: '#c6d147' },
    { id: 10, key: 'asiabibi', name: "Lana", gender: 'ж', theme: "death row on a false accusation", color: '#bedb4d' },
    { id: 11, key: 'meriam', name: "Jane", gender: 'ж', theme: "sentenced to death for her faith, gave birth in prison", color: '#b6e354' },
    { id: 12, key: 'kaylamueller', name: "Rita", gender: 'ж', theme: "hostage of terrorists, died in captivity", color: '#8ece3b' },
    { id: 13, key: 'wangyi', name: "John", gender: 'м', theme: "Chinese pastor, imprisoned for an independent church", color: '#82d841' },
    { id: 14, key: 'zhang', name: "George", gender: 'м', theme: "house church leader, decades in prison", color: '#78e147' },
    { id: 15, key: 'perpetua', name: "Val", gender: 'ж', theme: "early Christian martyr", color: '#78d760' },
    { id: 16, key: 'kimphuc', name: "Toni", gender: 'ж', theme: "war victim, forgiveness", color: '#41d534' },
    { id: 17, key: 'darlene', name: "Nellie", gender: 'ж', theme: "POW camp, sentenced to execution", color: '#3adf3f' },
    { id: 18, key: 'leah', name: "Zoe", gender: 'ж', theme: "kidnapped by militants, refused to renounce her faith", color: '#54d469' },
    { id: 19, key: 'doss', name: "Jerry", gender: 'м', theme: "unarmed combat medic, saved dozens of lives", color: '#5add7f' },
    { id: 20, key: 'wilkerson', name: "Ted", gender: 'м', theme: "ministry to street gangs", color: '#2cdd73' },
    { id: 21, key: 'pullinger', name: "Dina", gender: 'ж', theme: "ministry to addicts in the slums", color: '#47d18f' },
    { id: 22, key: 'baldwin', name: "Matt", gender: 'м', theme: "actor, conversion after tragedy", color: '#4ddba7' },
    { id: 23, key: 'cooper', name: "Simon", gender: 'м', theme: "rock musician, alcoholism", color: '#54e3c2' },
    { id: 24, key: 'pacquiao', name: "Zach", gender: 'м', theme: "boxer, addictions and infidelity", color: '#3bcebd' },
    { id: 25, key: 'franklin', name: "Cole", gender: 'м', theme: "musician, abandoned as a child, addiction", color: '#41d8d8' },
    { id: 26, key: 'lecrae', name: "Jimmy", gender: 'м', theme: "artist, childhood abuse and addiction", color: '#47cfe1' },
    { id: 27, key: 'buchan', name: "Rod", gender: 'м', theme: "farmer turned evangelist", color: '#60bbd7' },
    { id: 28, key: 'lamott', name: "Ella", gender: 'ж', theme: "writer, alcoholism and addiction", color: '#349ad5' },
    { id: 29, key: 'mccorvey', name: "Ivy", gender: 'ж', theme: "face of landmark abortion case, pro-life conversion", color: '#3a8fdf' },
    { id: 30, key: 'cslewis', name: "Theo", gender: 'м', theme: "atheist scholar turned apologist", color: '#5487d4' },
    { id: 31, key: 'muggeridge', name: "Arthur", gender: 'м', theme: "atheist journalist, conversion", color: '#5a7fdd' },
    { id: 32, key: 'mcgrath', name: "Herman", gender: 'м', theme: "atheist scientist turned theologian", color: '#2c4add' },
    { id: 33, key: 'wallace', name: "Nick", gender: 'м', theme: "atheist homicide detective, apologist", color: '#474cd1' },
    { id: 34, key: 'mcdowell', name: "Mark", gender: 'м', theme: "skeptic, childhood abuse, apologist", color: '#594ddb' },
    { id: 35, key: 'gumbel', name: "Daniel", gender: 'м', theme: "atheist lawyer turned priest", color: '#7154e3' },
    { id: 36, key: 'picard', name: "Maya", gender: 'ж', theme: "atheist scientist, conversion", color: '#6a3bce' },
    { id: 37, key: 'cameron', name: "Eli", gender: 'м', theme: "atheist actor, conversion", color: '#8241d8' },
    { id: 38, key: 'ordway', name: "Lily", gender: 'ж', theme: "atheist professor, conversion", color: '#9e47e1' },
    { id: 39, key: 'crosby', name: "Eva", gender: 'ж', theme: "blind from infancy, hymn writer", color: '#b160d7' },
    { id: 40, key: 'vujicic', name: "Tim", gender: 'м', theme: "born without limbs, evangelist", color: '#b534d5' },
    { id: 41, key: 'hamilton', name: "Clara", gender: 'ж', theme: "lost an arm, faith", color: '#d13adf' },
    { id: 42, key: 'donpiper', name: "Sam", gender: 'м', theme: "clinical death, book about heaven", color: '#d454d0' },
    { id: 43, key: 'norton', name: "Jarrod", gender: 'м', theme: "paralyzed by injury", color: '#dd5ac7' },
    { id: 44, key: 'millard', name: "Myron", gender: 'м', theme: "abusive father, reconciliation", color: '#dd2cab' },
    { id: 45, key: 'camp', name: "Steve", gender: 'м', theme: "wife died of cancer", color: '#d1479a' },
    { id: 46, key: 'davis', name: "Rose", gender: 'ж', theme: "missionary, adopted orphans", color: '#db4d92' },
    { id: 47, key: 'baker', name: "Stacy", gender: 'ж', theme: "missionary among the poorest", color: '#e35488' },
    { id: 48, key: 'caine', name: "Claudia", gender: 'ж', theme: "discovered her adoption, fights human trafficking", color: '#ce3b5d' },
    { id: 49, key: 'muller', name: "Cole", gender: 'м', theme: "orphanages built through prayer", color: '#d84152' },
  ];

  const STORIES = {
    tenboom: {
      "start": "tenboom_intro",
      "scenes": {
        "tenboom_intro": {
          "text": "In the Dutch city of Haarlem, Kate's father read a passage from the Bible aloud to the household and the apprentices living with them every morning before breakfast — a habit that never lapsed for years. In that same house above the watchmaker's shop, starting in 1942, the family built a false wall in the upstairs bedroom — a space less than a meter deep where, in the event of a raid, fugitives could hide within seconds. Hundreds of Jews and members of the Resistance passed through that house, hidden and moved on by Kate, her sister Betsy, and their aging father, each day knowing that sheltering even one person meant execution on the spot.",
          "next": "tenboom_scene2"
        },
        "tenboom_scene2": {
          "text": "On the morning of February 28, 1944, the Gestapo burst into the house on a tip from an informant. The interrogator told Kate's father to his face that he could be shot on the spot for hiding Jews — and the eighty-four-year-old calmly answered that it would be an honor to give his life for God's ancient people. Four people were hiding in the secret room at that moment — they stayed there without moving, barely breathing, for forty-seven hours until the search ended; all four survived. Kate, Betsy, and their father were arrested and taken away, and ten days later their father died in prison.",
          "next": "tenboom_choice1"
        },
        "tenboom_choice1": {
          "text": "A few months later the sisters were transferred to Ravensbrück concentration camp, to a barrack so infested with fleas there was no escaping them even at night. Betsy, reading aloud from a Bible hidden under her clothes the apostle Paul's words to \"give thanks in all circumstances,\" suddenly suggested they thank God for the fleas too — and Kate had to decide whether to say the words of thanks out loud along with her, even though it sounded like mockery of their situation.",
          "choices": [
            {
              "label": "Say the thanks out loud with Betsy, even though it seems pointless",
              "effects": {
                "faith": 10
              },
              "next": "tenboom_bridgeA"
            },
            {
              "label": "Refuse to thank God for something so absurd",
              "effects": {
                "faith": -10
              },
              "next": "tenboom_bridgeB"
            }
          ]
        },
        "tenboom_bridgeA": {
          "text": "Kate forced herself to say the words of thanks along with her sister. Only weeks later did they learn the reason the guards never once entered their barrack for surprise inspections the way they did the others: the guards were disgusted by the fleas and avoided the place entirely. Because of that, every evening Kate and Betsy could gather dozens of women around them and openly read aloud from the Bible hidden in a pouch under their clothes — the only place in the whole camp where that was safe.",
          "next": "tenboom_choice2"
        },
        "tenboom_bridgeB": {
          "text": "Kate couldn't bring herself to say the words of thanks and stayed silent, still quietly angry at the pointlessness of it all. She didn't start organizing evening readings in the barrack for the other women, and her own faith in those weeks held together only through mute, exhausted stubbornness — without the quiet, almost impossible sense of peace Betsy later wrote about.",
          "next": "tenboom_choice2"
        },
        "tenboom_choice2": {
          "text": "Betsy died at Ravensbrück in December 1944, and Kate herself was released just days later due to a clerical error — exactly one week before every woman her age in the camp was sent to the gas chambers. Years after the war, giving a lecture on forgiveness in Munich to former camp prisoners, Kate suddenly recognized in the audience the face of one of the cruelest guards from that very barrack where Betsy had died — he came up to her after the talk, held out his hand, and asked her to forgive him.",
          "choices": [
            {
              "label": "Force herself to shake the outstretched hand",
              "effects": {
                "faith": 15
              },
              "next": "tenboom_endLight"
            },
            {
              "label": "Turn away and refuse to take his hand",
              "effects": {
                "faith": -15
              },
              "next": "tenboom_endDark"
            }
          ]
        },
        "tenboom_endLight": {
          "text": "Kate silently prayed: \"Lord, I can't forgive him — give me Your forgiveness,\" and when her arm still wouldn't rise, added more simply: \"Lord, help. I can at least raise my hand — give me the rest.\" She reached out and shook his hand — and in that moment, by her own later account, warmth seemed to flow from her shoulder down through her arm, and her eyes filled with the tears of a forgiveness she couldn't physically find in herself. She traveled to more than sixty countries with this story as what she called \"a tramp for the Lord,\" until her death in 1983, repeating that forgiveness is an act of the will, not a feeling — something you can choose regardless of what your heart is doing. In 1967 Israel's Yad Vashem memorial named her \"Righteous Among the Nations.\" End of Kate's story.",
          "next": null,
          "choices": []
        },
        "tenboom_endDark": {
          "text": "Kate turned away and didn't take his hand, leaving the former guard standing there with his arm still outstretched in the empty hall. Outwardly her life went on as before — lectures, travel, books about the war — but by her own admission years later, that single encounter was one she could never quite shake, finding herself pulled back to that barrack in her mind every time she heard German spoken. End of Kate's story.",
          "next": null,
          "choices": []
        }
      }
    },
    wurmbrand: {
      "start": "wurmbrand_intro",
      "scenes": {
        "wurmbrand_intro": {
          "text": "Victor, Romanian by birth, came to faith in the mid-1930s under unexpected circumstances: hiding with his wife Sabina in a mountain village, they lodged with an elderly German carpenter who had prayed for years that God would bring him even one Jewish person to tell about Christ, since he could no longer travel down from the mountains himself. The old man gave Victor a New Testament; to his own surprise, Victor began reading it — reluctantly at first — and on its pages he personally met Christ for the first time; Sabina came to faith soon after. By 1945, when the Communists took power in Romania, Victor was already pastoring a small congregation in Bucharest.",
          "next": "wurmbrand_scene2"
        },
        "wurmbrand_scene2": {
          "text": "That same year, 1945, the government convened a massive congress of Romanian clergy in the capital — some four thousand priests and pastors were expected to publicly swear loyalty to the new regime and to Stalin personally, broadcast live on national radio. When Sabina heard about it, she told her husband plainly: \"Stand up and wash this shame off the face of Christ\" — let at least one priest in that hall refuse to be ashamed of Him in front of everyone. Victor answered that if he did this, she might end up without a husband; Sabina answered that she didn't need a coward for a husband.",
          "next": "wurmbrand_choice1"
        },
        "wurmbrand_choice1": {
          "text": "When his row's turn came, and the hall was already applauding another routine tribute to Stalin, Victor had to decide whether to stand up and declare live on air that the loyalty of Christians belongs only to the King of kings, not to earthly rulers — or to stay quietly seated with the thousands of other priests.",
          "choices": [
            {
              "label": "Stand up and speak the truth in front of the whole hall and radio audience",
              "effects": {
                "faith": 10
              },
              "next": "wurmbrand_bridgeA"
            },
            {
              "label": "Stay seated in silence, like everyone else",
              "effects": {
                "faith": -10
              },
              "next": "wurmbrand_bridgeB"
            }
          ]
        },
        "wurmbrand_bridgeA": {
          "text": "Victor stood up and delivered a short live speech that Christians owe honor only to God and Christ, not to earthly rulers — the hall froze for a moment, and within seconds the broadcast was cut off on the organizers' orders. From that day he was watched, and three years later, in 1948, he was arrested right on the street on his way to church.",
          "next": "wurmbrand_choice2"
        },
        "wurmbrand_bridgeB": {
          "text": "Victor stayed in his seat with everyone else and took the oath along with the whole hall, telling himself he could serve God more quietly and safely by staying free — though that same night at home he prayed for a long time for forgiveness for words spoken for his own safety rather than out of conviction. He wasn't watched that time, but his sermons grew bolder, and in 1948, when he again refused — this time publicly — to swear loyalty to the new regime, he too was arrested on the street on his way to church.",
          "next": "wurmbrand_choice2"
        },
        "wurmbrand_choice2": {
          "text": "Victor was held in prison for fourteen years in total, three of them in a solitary cell some nine meters underground, without a Bible, paper, or pen. To keep from breaking, he composed and preached a new sermon aloud every day to an imagined congregation, drawing on Scripture he'd memorized, working the main ideas into rhymed lines to help hold onto them. He was tortured and had his bones broken as they demanded he name other believers from his congregation. When the pain became unbearable, he had to decide whether to keep silent about his brothers in the faith or name even one to ease the torture.",
          "choices": [
            {
              "label": "Keep silent, whatever they do to his body",
              "effects": {
                "faith": 15
              },
              "next": "wurmbrand_endLight"
            },
            {
              "label": "Name names to ease the suffering",
              "effects": {
                "faith": -15
              },
              "next": "wurmbrand_endDark"
            }
          ]
        },
        "wurmbrand_endLight": {
          "text": "Victor never named a single name across all fourteen years of imprisonment, still composing sermons for his invisible congregation in the darkness of his cell up to the very last day. He later wrote: \"God will not judge us by how much we suffered, but by how much we managed to love,\" admitting that it was there, under torture, that Christians learned to love even their persecutors. In 1965 foreign Christian organizations bought his family's freedom out of Romania for ten thousand dollars paid to the secret police, and two years later his book \"Tortured for Christ\" was published, becoming a bestseller in dozens of languages; together with Sabina, who had also served three years of forced labor, he founded a ministry helping persecuted Christians worldwide that still exists today. End of Victor's story.",
          "next": null,
          "choices": []
        },
        "wurmbrand_endDark": {
          "text": "Victor named a few people to stop the torture, at least for a while, and within weeks nearly everyone he had named was arrested. The torture didn't stop for him either, and to the pain was added something he had to live with for all his remaining years in prison — a quiet, unspoken feeling that he had betrayed the people who trusted him. End of Victor's story.",
          "next": null,
          "choices": []
        }
      }
    },
    brotherandrew: {
      "start": "brotherandrew_intro",
      "scenes": {
        "brotherandrew_intro": {
          "text": "Gene, a young Dutch missionary, traveled to Warsaw in 1955 for the World Festival of Youth — an event organized by the Communist authorities — and saw with his own eyes how believers behind the Iron Curtain had to hide even a small pocket Bible. Back home, he decided to start driving Scripture into those countries himself, hiding it right in the trunk of an old blue Volkswagen Beetle — convinced from the very start that the only real protection on such a trip wasn't a clever hiding spot but direct trust in God at every single border.",
          "next": "brotherandrew_scene2"
        },
        "brotherandrew_scene2": {
          "text": "Dozens of customs officers and border guards worked the crossings into socialist countries, searching cars thoroughly and at length every time; carrying religious literature meant confiscation and deportation, and for local recipients, prison. Before every border crossing with a trunk full of Bibles lying out in the open rather than hidden, Gene would pull up to the checkpoint with his heart pounding.",
          "next": "brotherandrew_choice1"
        },
        "brotherandrew_choice1": {
          "text": "At one of his first dangerous crossings, while a guard slowly circled the car, Gene had to decide whether to rely on his own caution and rehearsed excuses, or to say out loud, for the first time, the prayer that would become his habit: \"Lord, in my luggage I have Scripture that I want to take to Your children. When You were on earth, You made blind eyes see — now, I pray, make seeing eyes blind to what You don't want them to see.\"",
          "choices": [
            {
              "label": "Say the prayer and trust God completely",
              "effects": {
                "faith": 10
              },
              "next": "brotherandrew_bridgeA"
            },
            {
              "label": "Rely only on his own caution and cover story",
              "effects": {
                "faith": -10
              },
              "next": "brotherandrew_bridgeB"
            }
          ]
        },
        "brotherandrew_bridgeA": {
          "text": "Gene quietly said his prayer, watching the guard look directly at the stack of Bibles lying openly on the back seat — and, to his own astonishment, the man closed the door without lingering and waved him through. That same prayer was repeated hundreds of times at dozens of borders over the years that followed, and Gene came to trust it more than any hiding spot or cover story.",
          "next": "brotherandrew_choice2"
        },
        "brotherandrew_bridgeB": {
          "text": "Gene decided not to risk it on prayers and instead buried part of the Bibles deeper under old suitcases, relying only on his own ingenuity. The guard that time searched long and thoroughly, and Gene stood through the whole inspection in a cold sweat, feeling like he was carrying this load entirely alone, with no certainty at all that he'd get through.",
          "next": "brotherandrew_choice2"
        },
        "brotherandrew_choice2": {
          "text": "Over the following decades Gene smuggled hundreds of thousands of Bibles and Christian literature across the borders of socialist countries, traveling through nearly the entire Soviet bloc and later China and other countries closed to faith. He was offered a choice: settle into some comfortable pulpit in Holland, well-earned rest from the risk, or keep making dangerous border crossings for decades to come, even once it became clear it would never get easier.",
          "choices": [
            {
              "label": "Keep crossing borders for as long as he has the strength",
              "effects": {
                "faith": 15
              },
              "next": "brotherandrew_endLight"
            },
            {
              "label": "Settle down at home and leave the risky trips to others",
              "effects": {
                "faith": -15
              },
              "next": "brotherandrew_endDark"
            }
          ]
        },
        "brotherandrew_endLight": {
          "text": "Gene kept crossing closed borders with Bibles well into old age and founded the ministry Open Doors, which today works in dozens of countries where Christians are persecuted for their faith; in 1981 an operation he organized called \"Pearl\" secretly delivered a million Bibles into China in a single night. His autobiography \"God's Smuggler\" sold more than ten million copies in thirty-five languages; he died in September 2022 in the Netherlands at ninety-four. End of Gene's story.",
          "next": null,
          "choices": []
        },
        "brotherandrew_endDark": {
          "text": "Gene settled into a quiet parish in Holland, handing the dangerous trips off to younger, more willing people, and for the rest of his life would occasionally tell his congregation about that one border crossing after which he decided he'd had enough. The ministry that might have grown out of his own experience was founded years later by someone else, and that short prayer about the guard's blind eyes he never told anyone else about, except a few of the closest members of his small Dutch parish. End of Gene's story.",
          "next": null,
          "choices": []
        }
      }
    },
    bonhoeffer: {
      "start": "bonhoeffer_intro",
      "scenes": {
        "bonhoeffer_intro": {
          "text": "Tony, a German Lutheran pastor and theologian, had openly opposed Nazi attempts to bring the German church under their control since 1933, later joining the Confessing Church movement, which refused to recognize state ideology as higher than the Gospel. Through his brother-in-law he became drawn into a small circle of conspirators inside military intelligence who were planning an assassination attempt on Hitler.",
          "next": "bonhoeffer_scene2"
        },
        "bonhoeffer_scene2": {
          "text": "For years Tony had openly preached about \"costly grace\" — a faith that demands real action and sacrifice from a person, not a comfortable, safe Christianity in name only. But preaching that from a pulpit was one thing, and quite another was deciding whether he was personally willing to bear guilt for taking part in a plot to kill a man, directly breaking the commandment \"you shall not murder,\" in order to stop a machine that was destroying millions of lives.",
          "next": "bonhoeffer_choice1"
        },
        "bonhoeffer_choice1": {
          "text": "At a secret meeting with the other conspirators, Tony had to decide: stay on the sidelines, limiting himself to the role of preacher and man of prayer whose moral standing would remain unstained, or knowingly take on part of the responsibility for the planned killing, accepting what he himself called, in his own books, an unforgivable sin — for the sake of saving many other lives.",
          "choices": [
            {
              "label": "Take on part of the responsibility for the plot to save others",
              "effects": {
                "faith": 10
              },
              "next": "bonhoeffer_bridgeA"
            },
            {
              "label": "Stay on the sidelines, keeping himself unstained",
              "effects": {
                "faith": -10
              },
              "next": "bonhoeffer_bridgeB"
            }
          ]
        },
        "bonhoeffer_bridgeA": {
          "text": "Tony decided to remain within the circle of conspirators, helping pass information and maintain contact between the Resistance inside Germany and the Allies abroad, fully aware that if the plan were discovered, neither his robe nor his reputation would protect him. He later wrote that he had knowingly taken on guilt for this decision, believing that true discipleship sometimes requires not preserving one's own purity, but a willingness to get one's hands dirty for the sake of one's neighbor.",
          "next": "bonhoeffer_choice2"
        },
        "bonhoeffer_bridgeB": {
          "text": "Tony decided to stay out of direct involvement in the plot, limiting himself to the role of preacher and comforter to those who were involved, trying to keep his hands clean of what he himself considered a sin. He kept preaching about \"costly grace\" from the pulpit, but noticed more and more that those words were starting to come easier than they cost him personally. He couldn't stay entirely on the sidelines anyway: as confessor and close friend to several of the conspirators, he remained on the Gestapo's radar — not as a participant, but as someone who simply knew too much.",
          "next": "bonhoeffer_choice2"
        },
        "bonhoeffer_choice2": {
          "text": "In April 1943 the Gestapo arrested Tony on a charge unrelated to the plot directly and imprisoned him in Tegel prison, and after the failed attempt on Hitler's life in July 1944 the connections came fully to light. In April 1945, just weeks before the war's end, he was told a trial was imminent, and with few illusions left about the outcome, he had to decide how to meet these final days — in despair, or at peace.",
          "choices": [
            {
              "label": "Meet the end at peace, as the beginning of real life",
              "effects": {
                "faith": 15
              },
              "next": "bonhoeffer_endLight"
            },
            {
              "label": "Spend his last days in bitterness and despair",
              "effects": {
                "faith": -15
              },
              "next": "bonhoeffer_endDark"
            }
          ]
        },
        "bonhoeffer_endLight": {
          "text": "On the morning of April 9, 1945, Tony was hanged at Flossenbürg concentration camp, just weeks before the camp was liberated by the Allies. The camp doctor who watched him that morning later recalled how Tony, removing his prison clothes, knelt down and prayed fervently to his God. Even earlier, he had written from prison that he was often helped by the thought of those, known and unknown, who were praying for him — and he believed it was to those same prayers that he owed having stayed unharmed for so long. That morning he managed to hold a short communion service for a few fellow prisoners and asked one of them, an Englishman, to pass a message to another prisoner: \"This is the end — for me, the beginning of life.\" His books \"The Cost of Discipleship\" and \"Letters and Papers from Prison\" remain among the most widely read Christian texts about the price of real faith. End of Tony's story.",
          "next": null,
          "choices": []
        },
        "bonhoeffer_endDark": {
          "text": "Tony spent his final weeks before the execution in heavy, withdrawn despair, barely speaking to his fellow prisoners and never once saying anything resembling comfort or hope aloud. On the morning of April 9, 1945, he was executed at Flossenbürg concentration camp along with the other conspirators — just weeks before the camp was liberated — leaving behind not a single encouraging line for those who remained. End of Tony's story.",
          "next": null,
          "choices": []
        }
      }
    },
    liddell: {
      "start": "liddell_intro",
      "scenes": {
        "liddell_intro": {
          "text": "Barry, a Scottish track athlete born in Tianjin to missionary parents, was by age twenty-two considered one of the fastest sprinters in the world and Britain's top favorite in the 100 meters at the 1924 Paris Olympics. He often told friends that he felt God's pleasure every time he ran at the very limit of his strength — running, for him, wasn't a distraction from faith but one of its forms of worship.",
          "next": "liddell_scene2"
        },
        "liddell_scene2": {
          "text": "A few months before the Games, Barry learned the schedule of the qualifying heats: the final of the 100 meters, his signature event, was set for a Sunday. Since childhood he had firmly kept Sunday as a day of rest set apart for God alone, and running on that day was, to him, simply not something he could do — even for an Olympic gold he had been training toward his whole life.",
          "next": "liddell_choice1"
        },
        "liddell_choice1": {
          "text": "News of his possible refusal to run on Sunday set off a storm in the British press — Barry was called a traitor to the team, and one member of the Olympic committee personally tried to convince him to reconsider for the sake of the country. Barry had to decide: line up for the 100 meters on Sunday against his own convictions, or give up his signature event for the sake of his faith, risking coming home with no medal at all.",
          "choices": [
            {
              "label": "Give up the 100 meters for the sake of Sunday rest",
              "effects": {
                "faith": 10
              },
              "next": "liddell_bridgeA"
            },
            {
              "label": "Run the Sunday race anyway, for the sake of the medal",
              "effects": {
                "faith": -10
              },
              "next": "liddell_bridgeB"
            }
          ]
        },
        "liddell_bridgeA": {
          "text": "Barry gave up the 100 meters and instead, in the space of a few months, rebuilt his entire training around the 400 meters — a distance he had never specifically trained for and was not considered a favorite in. Just before the final, one of the team's masseurs handed him a note with a line from the Bible: 'Those who honor me I will honor.' Barry ran the lap in his unconventional style, head thrown back, and set a world record — 47.6 seconds — winning gold in an event that had never really been his.",
          "next": "liddell_choice2"
        },
        "liddell_bridgeB": {
          "text": "Barry, giving in to pressure from the press and the Olympic leadership, ran the 100 meters that Sunday after all. He ran far below his usual level, unable to concentrate, catching himself again and again on the thought that he was breaking something he truly believed in; he won no medal that day, and the decision troubled him for a long time afterward, even though he never admitted it out loud.",
          "next": "liddell_choice2"
        },
        "liddell_choice2": {
          "text": "After the Olympics, Barry returned to China as a missionary and teacher, and in 1943, during the Japanese occupation, he was interned in the Weihsien camp in Shandong province — an overcrowded, half-starved place holding two thousand people, including many children separated from their parents. Every morning by the light of an oil lamp he spent an hour reading the Bible and praying with his roommate, and every evening he led Scripture classes for the internees, going over 1 Corinthians 13 and the Sermon on the Mount again and again. Exhausted and already gravely ill, though he told almost no one, Barry had to decide whether to save his remaining strength and meager rations for himself, or keep sharing his food and organizing lessons and evening readings for the camp's children.",
          "choices": [
            {
              "label": "Keep giving his remaining strength to the camp's children to the end",
              "effects": {
                "faith": 15
              },
              "next": "liddell_endLight"
            },
            {
              "label": "Hold back and step away from his camp duties",
              "effects": {
                "faith": -15
              },
              "next": "liddell_endDark"
            }
          ]
        },
        "liddell_endLight": {
          "text": "Barry kept teaching lessons and organizing games for the children in the camp almost until his final weeks, trying to make sure that even in an internment camp they had something resembling a normal childhood. He died of a brain tumor in February 1945, just months before the camp was liberated, and his last words, spoken to a sister in the faith sitting beside him, were: 'It's complete surrender' — a line from a hymn he loved about unconditional faith. End of Barry's story.",
          "next": null,
          "choices": []
        },
        "liddell_endDark": {
          "text": "Barry, feeling his strength fading, increasingly gave up the lessons and games with the children, choosing to save the little he had left for himself alone. He died of a brain tumor in February 1945, just months before the camp was liberated, and the children he had once taught and played with remembered his final months not for his active presence but for a quiet, withdrawn silence. End of Barry's story.",
          "next": null,
          "choices": []
        }
      }
    },
    elliot: {
      "start": "elliot_intro",
      "scenes": {
        "elliot_intro": {
          "text": "Mary, an American missionary, spent years with her husband Jim preparing for the first peaceful contact with the Waorani — a hard-to-reach people in the jungles of Ecuador who had previously killed almost every outsider who came near their land. Shortly before the landing, Jim wrote in his journal a line that Mary later made the motto of her entire life: he is no fool who gives what he cannot keep to gain what he cannot lose.",
          "next": "elliot_scene2"
        },
        "elliot_scene2": {
          "text": "On January 8, 1956, Jim and four other missionaries landed on a sandbar by the river, trying to make peaceful contact with the tribe — and that same day, all five were killed by the spears of Waorani warriors. Mary, left alone with her ten-month-old daughter Valerie, had to decide how to go on living with this grief, just a couple hundred kilometers from the very tribe that had killed her husband.",
          "next": "elliot_choice1"
        },
        "elliot_choice1": {
          "text": "Two years later, the mission organization offered Mary the chance to move, together with Jim's sister, and live directly among the Waorani — the very tribe whose warriors had killed her husband — to continue the work he had died for. Mary had to decide: accept the offer and settle among her own husband's killers with her small daughter, or refuse and go back somewhere safer.",
          "choices": [
            {
              "label": "Move to live among the tribe that killed her husband",
              "effects": {
                "faith": 10
              },
              "next": "elliot_bridgeA"
            },
            {
              "label": "Refuse, and go somewhere safer",
              "effects": {
                "faith": -10
              },
              "next": "elliot_bridgeB"
            }
          ]
        },
        "elliot_bridgeA": {
          "text": "Mary moved with her small daughter directly into the Waorani village, settling a couple of huts away from people among whom, almost certainly, were some of those who had killed Jim. She lived there for two years, day after day writing down the unfamiliar sounds of their spoken language on paper to create, for the first time in history, a written form of it — and gradually some of those same warriors began coming to her with questions about what her husband had believed, and why he had died.",
          "next": "elliot_choice2"
        },
        "elliot_bridgeB": {
          "text": "Mary turned down the immediate move and stayed with her daughter for several months in a safer place, continuing to work on the Waorani language from notes brought back by other missionaries. But without live contact with native speakers, the work went so slowly that after six months she finally decided to make the very move she had once refused even to consider — only now with far greater fear and far less inner readiness than if she had agreed right away.",
          "next": "elliot_choice2"
        },
        "elliot_choice2": {
          "text": "Years into her work among the tribe, several Waorani warriors, including one who had directly taken part in killing Jim, came to Mary with a question: could they, her husband's killers, still accept the very faith he had died for? Mary remembered that same line from Jim's journal about a man giving what he cannot keep to gain what he cannot lose, and for the first time in years understood that these men's question was a direct, if entirely unexpected, continuation of the very choice her husband had made on that sandbar. Mary had to decide how to answer a man who had admitted he was among those who speared her husband to death.",
          "choices": [
            {
              "label": "Accept him as a brother in the faith, with no thought of revenge",
              "effects": {
                "faith": 15
              },
              "next": "elliot_endLight"
            },
            {
              "label": "Refuse to forgive him and keep her distance",
              "effects": {
                "faith": -15
              },
              "next": "elliot_endDark"
            }
          ]
        },
        "elliot_endLight": {
          "text": "Mary accepted him as a brother in the faith, without a single word of reproach about the past, and carried the translation work through to the end — the New Testament in the Waorani language was fully completed and published in 1992, thirty-six years after Jim's death. Several of the men who had taken part in the killing of the missionaries in 1956 became pastors in their own Waorani congregation, and the tribe itself later dropped the name their neighbors had once called them — 'savages' — taking for themselves their own name, Waorani, 'the people.' End of Mary's story.",
          "next": null,
          "choices": []
        },
        "elliot_endDark": {
          "text": "Mary could not bring herself to accept that warrior's confession as anything more than a formal courtesy, and for the rest of her time among the tribe she kept a pointed distance from Jim's former killers. The translation of the New Testament into the Waorani language remained unfinished during her lifetime. End of Mary's story.",
          "next": null,
          "choices": []
        }
      }
    },
    aylward: {
      "start": "aylward_intro",
      "scenes": {
        "aylward_intro": {
          "text": "Annie, a simple housemaid from London with no formal education, dreamed of becoming a missionary in China, but the missionary society turned her down for lack of proper training. In response she simply prayed: 'Lord Jesus, if You will open the way and show me how, I will go myself' — and decided that since the society wasn't willing to send her, she would go on her own, trusting the rest to prayer. In 1932, on her own modest savings, she bought a ticket on the Trans-Siberian Express and made her way alone, skirting a war zone, to the small Chinese town of Yangcheng.",
          "next": "aylward_scene2"
        },
        "aylward_scene2": {
          "text": "In Yangcheng, Annie and an older missionary opened an inn for mule drivers: every evening, while the mules rested in the courtyard, she told the tired drivers Bible stories, and over time they began stopping there for the night on purpose, just for the stories. She earned so much trust from the local authorities that they appointed her official inspector for the campaign against foot-binding — the cruel custom the empire was in the process of abolishing — and by 1938, when the Japanese army began its advance, she had taken in more than a hundred orphaned children.",
          "next": "aylward_choice1"
        },
        "aylward_choice1": {
          "text": "When Japanese troops closed in on the town, Annie, with a hundred children on her hands, had to decide: stay in the relatively familiar town, risking falling under occupation along with all the children, or lead the whole large group on foot through the mountains to the city of Xi'an, several hard days' journey away, with no food supplies and no guarantee of safety along the road.",
          "choices": [
            {
              "label": "Lead the children through the mountains despite the risk",
              "effects": {
                "faith": 10
              },
              "next": "aylward_bridgeA"
            },
            {
              "label": "Stay in the town, hoping to wait out the occupation",
              "effects": {
                "faith": -10
              },
              "next": "aylward_bridgeB"
            }
          ]
        },
        "aylward_bridgeA": {
          "text": "Annie led the whole column of more than a hundred children on foot through the mountains, sharing the last scraps of food with them and sleeping under the open sky; along the way a Japanese plane strafed the column, and Annie was wounded but kept going. When the exhausted group reached the flooded Yellow River and saw not a single boat on the bank, Annie gathered the children around her and prayed aloud for a way across — and soon a Chinese officer really did appear on the bank with boats, and ferried the whole group to the other side. Twelve days into the journey, the worn-out caravan reached the safety of Xi'an — every child survived.",
          "next": "aylward_choice2"
        },
        "aylward_bridgeB": {
          "text": "Annie decided to stay in the town with the children, hoping the occupying forces would leave the orphanage alone. The first few weeks passed relatively quietly, but once the troops arrived, food supplies to the town nearly stopped, and Annie had to find far riskier and more desperate ways to feed all the children in place than the long trek through the mountains she had turned down.",
          "next": "aylward_choice2"
        },
        "aylward_choice2": {
          "text": "After the war, Annie, her health broken by her wound and years of hardship, could have returned to England to recover in peace, leaving her work in China behind — or stayed in Asia and kept caring for orphans and people in need, knowing her health would never fully return. Looking back on her path later, she admitted she never thought of herself as God's 'first choice' for the work: 'I suppose it should have been an educated man. Maybe he wasn't willing — and God looked down, saw me, and said: well, she's willing,' — and so she saw no reason to stop now, having already said yes back then.",
          "choices": [
            {
              "label": "Stay in Asia and continue her work with orphans",
              "effects": {
                "faith": 15
              },
              "next": "aylward_endLight"
            },
            {
              "label": "Return to England and leave the ministry behind",
              "effects": {
                "faith": -15
              },
              "next": "aylward_endDark"
            }
          ]
        },
        "aylward_endLight": {
          "text": "Annie stayed in Asia, moving on to Taiwan, where she continued caring for orphaned and refugee children until her death in 1970, opening another orphanage there. The story of her trek through the mountains became the basis for the Hollywood film 'The Inn of the Sixth Happiness,' though Annie herself was unhappy with many of the script's inaccuracies and insisted that all her strength on that journey had come not from her own courage, but from a faith that was enough for exactly the next step. End of Annie's story.",
          "next": null,
          "choices": []
        },
        "aylward_endDark": {
          "text": "Annie returned to England to recover her broken health and never went back to Asia to the work she had begun. The children she had once led through the mountains grew up remembering her as the woman who had saved their lives at the cost of one desperate journey, but not as someone who had stayed with them for life. End of Annie's story.",
          "next": null,
          "choices": []
        }
      }
    },
    wangmingdao: {
      "start": "wangmingdao_intro",
      "scenes": {
        "wangmingdao_intro": {
          "text": "Mike, an independent Chinese pastor in Beijing, had for years refused to bring his congregation into the Three-Self Patriotic Movement, an organization controlled by the Communist authorities that required churches to submit their teaching to party ideology. He often repeated to his congregation the apostles' words before the Sanhedrin — that they must obey God rather than men — long before those words stopped being a sermon and became a direct description of his own life. In August 1955 he was arrested for exactly that refusal.",
          "next": "wangmingdao_scene2"
        },
        "wangmingdao_scene2": {
          "text": "Months of interrogation and psychological pressure in prison left Mike utterly exhausted — investigators worked in shifts, never letting him sleep, telling him again and again that all it would take was signing one paper of loyalty to the movement, and he'd be sent home to his family immediately. In the brief hours he did manage to sleep, he silently repeated to himself verses of Scripture he had known by heart since youth — the one thing the investigators couldn't take from him along with his sleep and his peace.",
          "next": "wangmingdao_choice1"
        },
        "wangmingdao_choice1": {
          "text": "At the start of 1956, after nearly six months of this pressure, the investigators once again laid a sheet declaring loyalty to the party's movement, along with a pen, in front of the exhausted Mike. He had to decide: sign the document, abandoning his own convictions, for immediate freedom and a return to his family, or keep refusing, and stay in prison indefinitely.",
          "choices": [
            {
              "label": "Keep refusing to sign, despite his exhaustion",
              "effects": {
                "faith": 10
              },
              "next": "wangmingdao_bridgeA"
            },
            {
              "label": "Sign the document for immediate release",
              "effects": {
                "faith": -10
              },
              "next": "wangmingdao_bridgeB"
            }
          ]
        },
        "wangmingdao_bridgeA": {
          "text": "Mike found the strength to refuse the document again, and was left in his cell for many more months of interrogation. The investigators then changed tactics and began threatening not him but his wife, also held in custody, warning that her health wouldn't hold up in prison much longer if Mike kept being stubborn. Worn down by fear for his wife far more than for himself, after several more months of this pressure he finally signed the declaration of loyalty to the movement, and the two of them were released home.",
          "next": "wangmingdao_choice2"
        },
        "wangmingdao_bridgeB": {
          "text": "Exhausted to his limit by sleepless weeks of interrogation, Mike signed the document and was released home to his wife and congregation, though that same evening, left alone, for the first time in years he couldn't bring himself to pray aloud, not knowing what words to use with God after what he had just done. He kept returning in his mind to the words of the prophet Micah: 'Rejoice not against me, O mine enemy: when I fall, I shall arise... I will bear the indignation of the Lord, because I have sinned against him' — these verses about falling and rising again were the one thing he could hold on to, as the shame stayed with him every single day for the months that followed.",
          "next": "wangmingdao_choice2"
        },
        "wangmingdao_choice2": {
          "text": "A few months after his release, Mike, unable to go on living with the weight of a confession signed under duress, had to decide: publicly renounce that confession before his whole congregation and the authorities, knowing this would almost certainly mean a new arrest and probably a far longer sentence — or leave things as they were and quietly continue his ministry, avoiding the new risk.",
          "choices": [
            {
              "label": "Publicly renounce the forced confession",
              "effects": {
                "faith": 15
              },
              "next": "wangmingdao_endLight"
            },
            {
              "label": "Leave things as they are and not risk it again",
              "effects": {
                "faith": -15
              },
              "next": "wangmingdao_endDark"
            }
          ]
        },
        "wangmingdao_endLight": {
          "text": "Mike publicly renounced the confession he had signed under pressure, telling his congregation it had been a lie wrung out of him by exhaustion, not his true faith. In 1957 he was arrested again, and in 1963 sentenced to life in prison; he was not released until 1979, after more than twenty years behind bars, under pressure from the international community — by then a very old man, but one who had not gone back on his word a second time. End of Mike's story.",
          "next": null,
          "choices": []
        },
        "wangmingdao_endDark": {
          "text": "Mike decided not to risk another arrest and let the forced confession stand as it was, quietly continuing his ministry to his old congregation without any public statement. Some of his congregation gradually began to keep their distance from him, sensing an unspoken compromise behind his silence, and he himself was never fully able to forgive himself, for the rest of his life, for that single signed sheet of paper. End of Mike's story.",
          "next": null,
          "choices": []
        }
      }
    },
    watchmannee: {
      "start": "watchmannee_intro",
      "scenes": {
        "watchmannee_intro": {
          "text": "Steve, who went through a crisis of faith in his youth, once asked God directly in prayer why He was calling him into ministry so early, honestly admitting that he didn't feel he had enough faith for that path. Fasting and praying, he gave himself to God once again — and, by his own later account, three verses of Scripture came to his mind one after another: 'the just shall live by faith,' 'by faith ye stand,' and 'we walk by faith.' Building on that experience, over two decades of preaching and organizational work he grew a network in China of more than five hundred congregations in the 'Little Flock' movement, built around a simple idea he repeated in every sermon: the church belongs to Christ, not to any earthly government, party, or even to its own founder.",
          "next": "watchmannee_scene2"
        },
        "watchmannee_scene2": {
          "text": "By the early 1950s, when the Communist authorities began a campaign against independent religious organizations, Steve's movement was one of the first to come under close watch. Friends and part of the movement's own leadership warned Steve that open gatherings on this scale would inevitably draw the attention of the authorities, and that it would be wiser to quietly scale back public activity until things settled down. But tens of thousands of believers across the country were still counting on his spiritual leadership every week.",
          "next": "watchmannee_choice1"
        },
        "watchmannee_choice1": {
          "text": "In early 1952, when pressure from the authorities became almost unbearable and arrest almost inevitable, Steve had to decide: keep openly leading the movement and holding gatherings as before, or scale back public activity, dissolving the visible structure and going underground for his own safety, and perhaps that of his congregation.",
          "choices": [
            {
              "label": "Keep serving openly, despite the risk of arrest",
              "effects": {
                "faith": 10
              },
              "next": "watchmannee_bridgeA"
            },
            {
              "label": "Scale back and go underground",
              "effects": {
                "faith": -10
              },
              "next": "watchmannee_bridgeB"
            }
          ]
        },
        "watchmannee_bridgeA": {
          "text": "Steve decided not to scale back his ministry, and kept openly preaching and coordinating congregations across the country, knowing arrest was now only a matter of time. A few months later he really was arrested — but by then the movement had grown strong enough at the local level to keep going even after its founder's arrest, even if now underground.",
          "next": "watchmannee_choice2"
        },
        "watchmannee_bridgeB": {
          "text": "Steve decided to scale back his public activity for a while and dissolve the movement's visible structure, hoping to wait out the most dangerous period. Some congregations, left without central leadership, quickly lost touch with one another and began falling apart on their own, never living to see the moment when things would 'settle down' — and the authorities found and arrested Steve himself anyway, just a few months later: going underground delayed the outcome he was trying to avoid, but didn't prevent it.",
          "next": "watchmannee_choice2"
        },
        "watchmannee_choice2": {
          "text": "Steve was arrested in 1952 and never released again for the rest of his life — he spent twenty years in custody, including years of hard labor in a camp, almost entirely cut off from the outside world and with no hope of his sentence being reviewed. His Bible and any religious texts were taken from him in the very first month of his imprisonment, and all he had left to hold on to were the lines of Scripture he had already memorized while free, repeating them to himself through hours of camp labor. Year after year he had to decide anew: keep holding on to a faith he could never publicly profess, or finally let himself break under the weight of years of isolation.",
          "choices": [
            {
              "label": "Keep holding on to his faith in private, all those years",
              "effects": {
                "faith": 15
              },
              "next": "watchmannee_endLight"
            },
            {
              "label": "Let himself break under the weight of the isolation",
              "effects": {
                "faith": -15
              },
              "next": "watchmannee_endDark"
            }
          ]
        },
        "watchmannee_endLight": {
          "text": "By the accounts of the few people who met Steve in his last years of imprisonment, he never once renounced his faith, even in private, despite two decades of near-total isolation. He died in the labor camp on May 30, 1972, at the age of sixty-eight; after his death, a niece going through his few remaining belongings found under his pillow a note in his own handwriting: 'Christ is the Son of God. He died as Redeemer for the sins of mankind and rose from the dead the third day. This is the most important fact in the world. I am dying believing in Christ.' The authorities, who had spread rumors that he renounced his faith before his death, were never able to refute that note; the movement he had founded had by then already outlived its founder and continued to exist in China and beyond. End of Steve's story.",
          "next": null,
          "choices": []
        },
        "watchmannee_endDark": {
          "text": "Long years of isolation gradually broke Steve — by the few accounts that survive from those who crossed paths with him in his final years, he withdrew into a heavy, silent despair, having lost all hope. He died in the labor camp on May 30, 1972, at the age of sixty-eight, and his body was cremated without even notifying his family. End of Steve's story.",
          "next": null,
          "choices": []
        }
      }
    },
    wilberforce: {
      "start": "wilberforce_intro",
      "scenes": {
        "wilberforce_intro": {
          "text": "Pete, a young member of the British Parliament, underwent a deep spiritual conversion at twenty-five and decided that politics, with all its compromises, was incompatible with true faith. He kept a detailed personal diary through those months of spiritual searching; on October 28, 1787, just over a year after his conversion, he wrote there the words that would define the rest of his life: 'God Almighty has set before me two great objects: the suppression of the slave trade and the reformation of manners.' He seriously considered leaving Parliament and devoting the rest of his life to service in the church, far from the backroom deals of Westminster.",
          "next": "wilberforce_scene2"
        },
        "wilberforce_scene2": {
          "text": "Before making a final decision, Pete went for advice to John Newton — a former slave-ship captain who had come to faith and written the famous hymn 'Amazing Grace' after decades spent in the slave trade. Newton knew the slave trade firsthand; two years later he would write to Pete that he believed and hoped the Lord had raised him up for the good of the Church and the good of the whole nation — but already at that first meeting he urged him not to abandon public service.",
          "next": "wilberforce_choice1"
        },
        "wilberforce_choice1": {
          "text": "Newton told Pete directly that God may have placed him in Parliament precisely so he could use that power for the good of the nation, not so he could give it up. Pete had to decide: follow that advice and stay in politics, taking up the fight against the slave trade from inside the system, or leave for quiet, personal ministry, which felt to him spiritually purer.",
          "choices": [
            {
              "label": "Stay in Parliament and take up the fight against the slave trade",
              "effects": {
                "faith": 10
              },
              "next": "wilberforce_bridgeA"
            },
            {
              "label": "Leave politics for quiet, personal ministry",
              "effects": {
                "faith": -10
              },
              "next": "wilberforce_bridgeB"
            }
          ]
        },
        "wilberforce_bridgeA": {
          "text": "Pete stayed in Parliament, and in 1789 introduced a bill to abolish the slave trade for the first time, delivering a multi-hour speech in the House of Commons laying out the trade's cruelty in detail. The bill failed badly, as did nearly every one of his following attempts for close to twenty years running, but Pete introduced it again every year, refusing to treat any single defeat as final.",
          "next": "wilberforce_choice2"
        },
        "wilberforce_bridgeB": {
          "text": "Pete gave up his seat in Parliament for quiet service in a parish, withdrawing completely from national politics. The bills to abolish the slave trade that other, far less committed and persistent members still tried to introduce in those years failed one after another, carrying almost no political weight behind them. After several years of quiet parish life, unable to fully shake Newton's words that God might have placed him in Parliament for a reason, Pete returned to Westminster — years later, and with far less political standing than if he had never left.",
          "next": "wilberforce_choice2"
        },
        "wilberforce_choice2": {
          "text": "By 1807, after long years of public defeats, ridicule, and political pressure from the slave-trading companies, Pete again had to decide whether to introduce the bill one more time — or finally accept that the cause of his whole life was doomed to remain unfulfilled in his own lifetime. In his diary from those years, he kept writing down the same thought: if God really had placed him in Parliament for this fight, then defeat didn't cancel the calling — it only postponed a deadline that wasn't his to set.",
          "choices": [
            {
              "label": "Introduce the bill again, despite two decades of defeat",
              "effects": {
                "faith": 15
              },
              "next": "wilberforce_endLight"
            },
            {
              "label": "Stop trying after so many years of failure",
              "effects": {
                "faith": -15
              },
              "next": "wilberforce_endDark"
            }
          ]
        },
        "wilberforce_endLight": {
          "text": "Pete introduced the bill again, and in 1807 the House of Commons finally passed the law abolishing the slave trade — 283 votes to 16; when the result was announced, the chamber rose in a standing ovation, turning to Pete, who, unable to hold himself together, bowed his head and wept. To a friend sitting beside him he said in that same moment: 'Well, Henry, what shall we abolish next?' He didn't stop there either, spending twenty-six more years fighting for the complete abolition of slavery itself in the British colonies; the law was passed on July 26, 1833, and Pete himself died just three days later, having lived to learn that the work of his whole life was finally done. End of Pete's story.",
          "next": null,
          "choices": []
        },
        "wilberforce_endDark": {
          "text": "After yet another defeat in Parliament — his eighteenth in a row — Pete decided to stop trying, accepting the cause as hopeless within his lifetime. The bill to abolish the slave trade, losing the one persistent voice that had championed it, lost all parliamentary momentum for years to come, and the slave trade continued for decades more without any serious political opposition. End of Pete's story.",
          "next": null,
          "choices": []
        }
      }
    },
    asiabibi: {
      "start": "asiabibi_intro",
      "scenes": {
        "asiabibi_intro": {
          "text": "Lana worked as a field laborer on a farm in the Pakistani village of Ittan Wali, picking berries alongside her Muslim neighbors, a third-generation Christian in a village where her family was one of very few not practicing Islam. One hot day, when her turn came to fetch water from the well, several women refused to drink from the same cup as a Christian, calling the water unclean after she had touched it.",
          "next": "asiabibi_scene2"
        },
        "asiabibi_scene2": {
          "text": "Words escalated into a loud argument right there in the field, and a few days later the neighbors reported to the local mosque that Lana had insulted the Prophet Muhammad during that argument — an accusation Lana categorically denied. Under Pakistan's blasphemy law, such a charge carried the death penalty, and within days Lana was arrested right there on the farm.",
          "next": "asiabibi_choice1"
        },
        "asiabibi_choice1": {
          "text": "Even before the trial, officials repeatedly hinted to Lana that the case could easily be closed if she simply converted to Islam and publicly renounced Christianity — many defendants charged under that same law had avoided a harsh sentence exactly that way. Lana had to decide: agree to convert to save her own life, or remain a Christian and stand trial with a real threat of a death sentence.",
          "choices": [
            {
              "label": "Remain a Christian and stand trial",
              "effects": {
                "faith": 10
              },
              "next": "asiabibi_bridgeA"
            },
            {
              "label": "Agree to convert to Islam to save her life",
              "effects": {
                "faith": -10
              },
              "next": "asiabibi_bridgeB"
            }
          ]
        },
        "asiabibi_bridgeA": {
          "text": "Lana refused to renounce Christianity even under the threat of execution, telling investigators she would not betray her faith to save her body. Even then, as she would say years later, her faith stayed strong, because she knew God was with her, that God never leaves a person alone, that He is always near. In November 2010, the court sentenced her to death by hanging, and she spent the next eight years in solitary confinement awaiting the execution of her sentence.",
          "next": "asiabibi_choice2"
        },
        "asiabibi_bridgeB": {
          "text": "Lana, giving in to pressure and fear of execution, agreed to publicly convert to Islam, and the criminal case against her was formally closed without a trial. But word that the conversion had only been a ploy to save her life spread through the village faster than any official ruling, and within weeks the same neighbors who had started the whole thing with an argument at the well went to the police with a new accusation — hypocrisy, and insulting Islam through the sham conversion itself. The second case landed her in the very same death row as the first, only under a different charge.",
          "next": "asiabibi_choice2"
        },
        "asiabibi_choice2": {
          "text": "After eight years on death row in constant expectation of execution, reading a Bible the prison chaplain secretly brought her on rare visits, Lana saw the same long-beaked bird land on her cell window bars every morning just before dawn, and again every evening — she took the bird as a sign that God was near, even when she couldn't see anyone else around her. In 2018, Lana finally got a chance to have her case reviewed by Pakistan's Supreme Court. Days before the decisive hearing, her lawyers offered her a faster, safer path — quietly agree to deportation without publicity, admitting to part of the charges — instead of pursuing a full, public acquittal that would inevitably enrage Islamist groups across the country.",
          "choices": [
            {
              "label": "Pursue a full, public acquittal",
              "effects": {
                "faith": 15
              },
              "next": "asiabibi_endLight"
            },
            {
              "label": "Agree to a quiet deal without publicity",
              "effects": {
                "faith": -15
              },
              "next": "asiabibi_endDark"
            }
          ]
        },
        "asiabibi_endLight": {
          "text": "Lana insisted on a full review of her case, and in October 2018 Pakistan's Supreme Court fully acquitted her, ruling all the charges fabricated — the decision set off mass protests by Islamists across the country and direct death threats against her. Later, at a press conference in Paris, she would say: 'I was accused because of the name of Jesus, and I knew I would be freed because of the name of Jesus,' calling her release a miracle impossible without God's intervention. In 2019 she received asylum in Canada with her family, and for the first time in nine years was able to openly practice Christianity without fear of arrest. End of Lana's story.",
          "next": null,
          "choices": []
        },
        "asiabibi_endDark": {
          "text": "Lana agreed to a quiet deal without a public review of her case, and was formally released without fanfare. But the blasphemy charge was never officially and fully cleared, and for the rest of her life she was forced to live in hiding, knowing the case could be reopened at any convenient moment. End of Lana's story.",
          "next": null,
          "choices": []
        }
      }
    },
    meriam: {
      "start": "meriam_intro",
      "scenes": {
        "meriam_intro": {
          "text": "Jane grew up in Sudan in the Christian faith — her mother, an Ethiopian Orthodox Christian, raised her alone from early childhood, after her Muslim father left the family. Under Sudanese law, a child of a Muslim father is automatically considered Muslim, regardless of what faith they were actually raised in.",
          "next": "meriam_scene2"
        },
        "meriam_scene2": {
          "text": "Jane married a Christian man while already late in her second pregnancy — but on paper she was formally registered as Muslim, and marrying a Christian turned her, in the eyes of the court, into a defendant on two charges at once: apostasy and 'adultery.' At every preliminary hearing she repeated the same thing — that her mother had raised her Christian from birth, and that a piece of paper couldn't change what she actually believed — long before that sentence became, for her, a matter of life and death. In May 2014, a court in Khartoum sentenced Jane to a hundred lashes and death by hanging.",
          "next": "meriam_choice1"
        },
        "meriam_choice1": {
          "text": "The judge personally offered Jane an easy way out: publicly declare herself Muslim, as the paperwork required, and the sentence would be voided immediately. Jane, eight months pregnant, had to decide: speak the formal words of renunciation to save her own life and the life of her unborn child, or insist that she was a Christian, whatever it cost.",
          "choices": [
            {
              "label": "Insist that she is a Christian, despite the sentence",
              "effects": {
                "faith": 10
              },
              "next": "meriam_bridgeA"
            },
            {
              "label": "Speak the words of renunciation to save herself and her child",
              "effects": {
                "faith": -10
              },
              "next": "meriam_bridgeB"
            }
          ]
        },
        "meriam_bridgeA": {
          "text": "Right there in the courtroom, Jane told the judge: 'I am a Christian, and I was never a Muslim,' presenting her marriage certificate, where her religion was listed as Christian. The judge pronounced the death sentence, and Jane, shackled at the legs, was moved to the prison wing of a hospital, where she was to carry her pregnancy to term while awaiting execution.",
          "next": "meriam_choice2"
        },
        "meriam_bridgeB": {
          "text": "Jane, frightened for the life of her unborn child, spoke the formal words before the court converting to Islam, and the charge against her was immediately dropped. She walked free, but the feeling that at the decisive moment she had renounced her own mother's faith to save herself stayed with her for years to come.",
          "next": "meriam_choice2"
        },
        "meriam_choice2": {
          "text": "Still under the death sentence, Jane gave birth to a daughter right there in the prison wing of the hospital, reportedly with her legs still shackled. To read the Bible, which the authorities wouldn't let her keep openly in her cell, she cut its pages into pieces and hid them in her hair, taking out and reading a few lines at a time in the bathroom — the only place no one could see her. Human rights advocates and foreign embassies launched a large international campaign for her release; Jane herself, meanwhile, had to decide whether to keep giving interviews to foreign journalists about her faith, which raised both the publicity and the personal risk, or go quiet until the process was over, lowering her visibility and, perhaps, the risk.",
          "choices": [
            {
              "label": "Keep speaking openly about her faith to journalists",
              "effects": {
                "faith": 15
              },
              "next": "meriam_endLight"
            },
            {
              "label": "Go quiet until the process is over, to lower her visibility",
              "effects": {
                "faith": -15
              },
              "next": "meriam_endDark"
            }
          ]
        },
        "meriam_endLight": {
          "text": "Jane kept speaking openly about her faith, repeating in interviews that faith meant life itself to her: 'If you don't have faith, you're not alive,' and that even in her cell she could feel people praying for her all over the world. Sudan's appeals court overturned the sentence, citing constitutional freedom of religion, and Jane, along with her newborn daughter and her other children, was released and later moved abroad with her family. Once free, she would say that when people ask her how to pray for persecuted Christians, her answer is: pray that they have access to the Word of God. End of Jane's story.",
          "next": null,
          "choices": []
        },
        "meriam_endDark": {
          "text": "Jane stayed quiet until the process was over, hoping less publicity would lower the risk to her and her children. The case did move more quietly — but also more slowly — and without major international pressure, the appeal dragged on indefinitely, and Jane spent far longer in the prison hospital wing with her newborn daughter than a louder case might have required. End of Jane's story.",
          "next": null,
          "choices": []
        }
      }
    },
    kaylamueller: {
      "start": "kaylamueller_intro",
      "scenes": {
        "kaylamueller_intro": {
          "text": "Rita, a twenty-six-year-old American humanitarian worker, had spent years helping refugees and people affected by conflict — first in India, then in the Palestinian territories, and from 2012 on, Syrian refugees who had fled the civil war into neighboring Turkey.",
          "next": "kaylamueller_scene2"
        },
        "kaylamueller_scene2": {
          "text": "By the summer of 2013, most international humanitarian organizations had already pulled their staff out of the Syrian border regions because of the sharply rising danger of kidnapping by militants. Rita was offered a return to safer Turkey, to keep helping refugees from there, but some of the most vulnerable people she worked with were still inside the country.",
          "next": "kaylamueller_choice1"
        },
        "kaylamueller_choice1": {
          "text": "In August 2013, Rita had to decide whether to go once again to Aleppo, where organizations had almost stopped sending staff because of the danger, to help with the work of a local hospital, or stay in relative safety on the Turkish side of the border, continuing to help from there. In letters to friends she wrote that she prayed not for her own safety, but that God would not let her turn away from people just because helping them had become too dangerous — a prayer that, by that August, was no longer abstract but very concrete.",
          "choices": [
            {
              "label": "Go to Aleppo, despite the growing danger",
              "effects": {
                "faith": 10
              },
              "next": "kaylamueller_bridgeA"
            },
            {
              "label": "Stay safe on the Turkish side of the border",
              "effects": {
                "faith": -10
              },
              "next": "kaylamueller_bridgeB"
            }
          ]
        },
        "kaylamueller_bridgeA": {
          "text": "Rita went to Aleppo to help with the hospital's work, and on her way out she and a Syrian colleague were seized by ISIS militants. The colleague was later released, but Rita was moved between secret holding sites for almost a year and a half, tortured, while her captors demanded a ransom the US government refused to pay.",
          "next": "kaylamueller_choice2"
        },
        "kaylamueller_bridgeB": {
          "text": "Rita stayed on the Turkish side of the border, continuing to help refugees from there without the direct risk that working in Aleppo itself would have meant. But danger found her a different way: a few months later, while she was escorting a group of refugees to one of the border camps, militants raided the camp on Turkish territory itself and took her along with several camp staff — the very kidnapping she had tried to avoid by choosing the path that seemed safer still caught up with her.",
          "next": "kaylamueller_choice2"
        },
        "kaylamueller_choice2": {
          "text": "In captivity, according to fellow hostages later released, Rita was repeatedly tortured and pressured toward despair, told to stop fighting and simply accept her fate; when her captors once claimed she had converted to Islam, she told them directly — no, she hadn't. Other captives released at various times alongside her recalled that even in the darkest periods she found ways to pray aloud for her captors themselves, explaining that she didn't want to let hatred take away the little that remained whole inside her. In one letter smuggled out to her parents, she wrote that she had given herself entirely to the Creator, because there was literally no one else left to trust, and that by the mercy of God and their prayers she felt 'tenderly cradled in freefall.' She had to decide how to describe what strength she had left in her next letter — as despair with no hope left at all, or as a resolve to hold on, whatever happened.",
          "choices": [
            {
              "label": "Write about her resolve to hold on and not give up",
              "effects": {
                "faith": 15
              },
              "next": "kaylamueller_endLight"
            },
            {
              "label": "Let the despair show in the letter",
              "effects": {
                "faith": -15
              },
              "next": "kaylamueller_endDark"
            }
          ]
        },
        "kaylamueller_endLight": {
          "text": "Rita wrote to her parents that she had 'a lot of fight left inside' and that she 'will not give in no matter how long it takes,' asking them to give all their own pain over to God — echoing something she had written to her father even before her captivity: 'I find God in suffering.' In February 2015, the family confirmed her death in captivity after eighteen months of being held; today a foundation set up in her memory supports humanitarian workers continuing her kind of work in conflict zones around the world. End of Rita's story.",
          "next": null,
          "choices": []
        },
        "kaylamueller_endDark": {
          "text": "Witnesses later released from the same captivity recalled that in her final months Rita had almost stopped talking about home and looked increasingly broken, having lost any visible hope. In February 2015, the family confirmed her death in captivity after eighteen months of being held. End of Rita's story.",
          "next": null,
          "choices": []
        }
      }
    },
    wangyi: {
      "start": "wangyi_intro",
      "scenes": {
        "wangyi_intro": {
          "text": "John, a former human-rights lawyer and law professor, was baptized in 2005 and soon became pastor of Early Rain Covenant Church, an independent house church in the city of Chengdu, unregistered with the authorities and outside state control over religion. He now used his legal training not in courtrooms but in sermons — explaining to his congregation that loyalty to Christ as the highest law sometimes inevitably means disagreeing with the laws of the land.",
          "next": "wangyi_scene2"
        },
        "wangyi_scene2": {
          "text": "By 2018, John's congregation had grown to more than eight hundred members, and pressure from the authorities on unregistered churches across the country had noticeably increased: some congregations were shut down, other pastors detained briefly for 'preventive talks.' John understood that sooner or later the same thing would reach his own church.",
          "next": "wangyi_choice1"
        },
        "wangyi_choice1": {
          "text": "Lawyers and some of the senior members urged John to scale back the ministry and, if possible, register the congregation in some simplified form to lower the risk. John had to decide: keep serving openly at the same scale, having already written a personal statement in case of arrest, or make a compromise with the authorities for the safety of the congregation.",
          "choices": [
            {
              "label": "Keep serving openly, having already prepared for arrest",
              "effects": {
                "faith": 10
              },
              "next": "wangyi_bridgeA"
            },
            {
              "label": "Make a compromise with the authorities for the congregation's safety",
              "effects": {
                "faith": -10
              },
              "next": "wangyi_bridgeB"
            }
          ]
        },
        "wangyi_bridgeA": {
          "text": "John had already written a personal statement titled 'My Declaration of Faithful Disobedience,' in which he called Jesus Christ the Son of the eternal living God, his King and King of all the earth, yesterday, today, and forever, writing: let the authorities separate him from his wife and children, destroy his reputation and his life — they are capable of all that — but no one in this world could force him to renounce his faith, change his life, or raise him from the dead. He asked those close to him to publish this text if he were held for more than twenty-four hours. The church continued its ministry at the same open scale.",
          "next": "wangyi_choice2"
        },
        "wangyi_bridgeB": {
          "text": "John listened to the advice and began negotiating with local authorities over a simplified form of registration for the congregation, hoping to lower the risk of the church being shut down. Some congregation members, learning of these negotiations, saw them as too great a concession and gradually began drifting off to other, even less visible house groups, and the congregation itself began losing the unity it had built over years.",
          "next": "wangyi_choice2"
        },
        "wangyi_choice2": {
          "text": "On December 9, 2018, police raided dozens of addresses at once, detaining John along with more than a hundred members of his congregation. In custody, awaiting trial with no contact with the outside world for almost a year, John had to decide: cooperate with the investigation, admitting to some of the charges in exchange for a lighter sentence, or fully deny guilt and insist that his church had broken nothing but the state's own imposed registration rules.",
          "choices": [
            {
              "label": "Fully deny guilt and insist he was right",
              "effects": {
                "faith": 15
              },
              "next": "wangyi_endLight"
            },
            {
              "label": "Admit to part of the charges for a shorter sentence",
              "effects": {
                "faith": -15
              },
              "next": "wangyi_endDark"
            }
          ]
        },
        "wangyi_endLight": {
          "text": "John fully rejected the charges against him throughout the investigation, having explained even before his arrest, in his sermons: Christ's great mission calls for great disobedience, and the goal of that disobedience is not to change this world but to bear witness to another one. On December 30, 2019, a court in Chengdu sentenced him to nine years in prison anyway, on a charge of 'inciting subversion of state power,' but his 'Declaration of Faithful Disobedience,' written in advance, was published and translated into dozens of languages, becoming one of the most quoted texts about the persecution of Christians in modern China. John's wife, Jiang Rong, also detained that same night and held for nearly six months, was able to see him in prison for the first time only in October 2021 — almost three years after his arrest — and continues to tell his story; as of this account, he remains in custody, with his sentence due to end toward the end of this decade. End of John's story.",
          "next": null,
          "choices": []
        },
        "wangyi_endDark": {
          "text": "John agreed to admit to some of the charges, hoping for a lighter sentence. The sentence did turn out somewhat shorter, but the admission itself was used in state media as proof of guilt for the whole Early Rain congregation, and some members, on learning of the admission, felt their pastor had backed down at the decisive moment from exactly what he had called them all to stand for. Early Rain Church, having lost its former unity around its leader's admission, never regained the scale it had held before his arrest. End of John's story.",
          "next": null,
          "choices": []
        }
      }
    },
    zhang: {
      "start": "zhang_intro",
      "scenes": {
        "zhang_intro": {
          "text": "George, founder of one of the largest underground house-church networks in China, spent decades building a movement that brought together millions of believers across the country — and over that same span was arrested six times, spending more than eighteen years behind bars in total. After each release he returned to the same ministry, telling his closest coworkers that the church's task wasn't to survive at any cost, but to remain faithful to the Gospel, even if the price was yet another arrest.",
          "next": "zhang_scene2"
        },
        "zhang_scene2": {
          "text": "By the early 2000s, international Christian organizations had invited George several times to personally speak at overseas mission conferences, to tell in person about the situation of believers in China. The Chinese authorities did not officially recognize the underground churches' right to send representatives abroad, and any such trip was formally considered an illegal border crossing.",
          "next": "zhang_choice1"
        },
        "zhang_choice1": {
          "text": "George had to decide: go to another overseas conference without official permission from the authorities, knowing his previous trips had already drawn the attention of state security, or give up speaking abroad in person and keep leading the network only from inside the country, staying less visible to the authorities. He often reminded his closest coworkers of the apostle Paul's words that for him to live was Christ and to die was gain, and admitted more than once that it was easier to say those words from a pulpit than to make a decision that could lead straight to a prison cell — especially since, after one of his past releases, he had discovered that in every home he was brought to, believers turned out to be praying for him by name, though he had never asked them to, and those strangers' prayers, by his own later account, sustained him through all the years that followed.",
          "choices": [
            {
              "label": "Go to the conference, despite the risk",
              "effects": {
                "faith": 10
              },
              "next": "zhang_bridgeA"
            },
            {
              "label": "Give up the trips and stay less visible",
              "effects": {
                "faith": -10
              },
              "next": "zhang_bridgeB"
            }
          ]
        },
        "zhang_bridgeA": {
          "text": "George went to the international conference after all, personally telling delegates about the scale of the underground movement and the torture detained pastors faced. On his return to China, surveillance on him increased, and in December 2004 he was arrested precisely for those trips abroad.",
          "next": "zhang_choice2"
        },
        "zhang_bridgeB": {
          "text": "George gave up personal appearances abroad, leaving it to other, less visible representatives of the movement to tell the story of the church's situation in China. International awareness of what was happening in the country grew noticeably weaker and less convincing without the personal testimony of the network's own founder, who had personally been through arrests and torture.",
          "next": "zhang_choice2"
        },
        "zhang_choice2": {
          "text": "After his arrest in December 2004, George was held without trial for more than a year and a half, under pressure to publicly name the leaders of other house churches in the network in exchange for lighter charges. George had to decide whether to name those names for his own freedom, or keep silent, knowing that in July 2006 he would most likely be sentenced to real prison time regardless.",
          "choices": [
            {
              "label": "Keep silent and not name any names",
              "effects": {
                "faith": 15
              },
              "next": "zhang_endLight"
            },
            {
              "label": "Name names in exchange for a lighter sentence",
              "effects": {
                "faith": -15
              },
              "next": "zhang_endDark"
            }
          ]
        },
        "zhang_endLight": {
          "text": "George didn't name a single name, and in July 2006 he was sentenced to seven and a half years in prison for 'illegally crossing the border' — the house-church network he had founded continued its work under other leaders, whose names he had never given up. He was released early in September 2011, and returned to ministry an older man, but not a broken one. He later began telling his story with the words: 'My name is Zhang Rongliang, and I am an unashamed follower of Jesus Christ.' End of George's story.",
          "next": null,
          "choices": []
        },
        "zhang_endDark": {
          "text": "Under pressure from the investigation, George named several of the network's leaders in exchange for the promise of a lighter sentence. The people he named were soon arrested too, and the house-church network, having lost several key leaders at once, spent years afterward in a crisis of trust between congregations. End of George's story.",
          "next": null,
          "choices": []
        }
      }
    },
    perpetua: {
      "start": "perpetua_intro",
      "scenes": {
        "perpetua_intro": {
          "text": "Val, a twenty-two-year-old noblewoman from Carthage who had recently given birth to a son, was baptized along with several friends shortly before the authorities launched a new wave of persecution against Christians. In her diary she wrote that even at the moment of her baptism, she had prayed for only one thing — physical endurance, not an easy life — not yet knowing how soon that prayer would be put to the test. Soon the whole group of new converts was arrested and imprisoned to await trial.",
          "next": "perpetua_scene2"
        },
        "perpetua_scene2": {
          "text": "Val's father, not a Christian himself, came to the prison several times, begging his daughter to renounce the new faith, at least formally, to save her life for the sake of the infant son left at home. Between these difficult visits, Val kept praying and singing psalms aloud with the other prisoners in the cell, despite the stifling heat and crowding of the prison — the guards mocked them at first, but over time stopped paying attention, growing used to the singing as just part of prison life. At her brother's request she prayed for a vision that would help her understand what awaited her, and one night, as she wrote in her diary, she dreamed of a bronze ladder of unbelievable height, leading straight up to heaven, and at its foot a dragon, which in the dream she trampled underfoot as she stepped onto the first rung, and climbed to the top. Waking, she told her brother that now she knew: what lay ahead was not freedom, but a struggle she would have to see through to the end. On one visit, her father brought the infant right into the cell and held him out to Val, hoping the sight of her own child would make her change her mind.",
          "next": "perpetua_choice1"
        },
        "perpetua_choice1": {
          "text": "Holding her son in the prison cell, Val had to decide: speak the formal words renouncing her faith so she could return to her child and go on living, or refuse, knowing that refusal almost certainly meant execution and separation from her son forever.",
          "choices": [
            {
              "label": "Refuse to renounce her faith, despite her father's pleading",
              "effects": {
                "faith": 10
              },
              "next": "perpetua_bridgeA"
            },
            {
              "label": "Agree to renounce her faith to return to her son",
              "effects": {
                "faith": -10
              },
              "next": "perpetua_bridgeB"
            }
          ]
        },
        "perpetua_bridgeA": {
          "text": "Val refused to speak the words of renunciation, even holding her own crying son in her arms, and handed him back to her father. Earlier, during one of these same visits, when her father begged her to reconsider, she pointed to a vessel standing nearby and asked him: 'Father, do you see this vessel? Can it be called anything other than what it is?' 'No,' he answered. 'Neither can I call myself anything other than what I am: a Christian,' Val replied. Her father, in despair, kept coming back to her again and again right up to the trial, getting the same answer every time.",
          "next": "perpetua_choice2"
        },
        "perpetua_bridgeB": {
          "text": "Val, unable to bear the sight of her crying child in her arms, agreed to speak the formal words renouncing her faith before an official, though that same night in her cell she quietly asked God's forgiveness for words that, as she herself put it later, she had spoken with her mouth and not her heart. She was sent home to her son, but among the recently baptized friends who had been arrested with her and had not renounced their faith, she was remembered in the years that followed with open regret rather than respect.",
          "next": "perpetua_choice2"
        },
        "perpetua_choice2": {
          "text": "Just before the trial, the governor of Carthage personally offered Val one last chance: make a symbolic sacrifice in honor of the emperor — a simple ritual gesture requiring nothing but an outward act — and all charges would be dropped immediately. Val had to decide whether to make this formal, seemingly harmless gesture to save her life, or refuse this last offer too.",
          "choices": [
            {
              "label": "Refuse to sacrifice to the emperor, despite the death sentence",
              "effects": {
                "faith": 15
              },
              "next": "perpetua_endLight"
            },
            {
              "label": "Make the formal sacrifice to save her life",
              "effects": {
                "faith": -15
              },
              "next": "perpetua_endDark"
            }
          ]
        },
        "perpetua_endLight": {
          "text": "Val refused to make the sacrifice to the emperor, and on March 7, 203, she and the other condemned were led out into the arena of Carthage, where a wild heifer was first set loose on them, and then they were finished off by the sword. According to tradition, the trembling hand of the young gladiator assigned to deliver the final blow missed twice, and Val herself guided his sword to her own throat. The diary she kept in prison — one of the oldest surviving Christian texts, and the earliest known prose work by a woman author — is still read and quoted today, more than eighteen centuries later. End of Val's story.",
          "next": null,
          "choices": []
        },
        "perpetua_endDark": {
          "text": "At the last moment, Val made the formal sacrifice to the emperor, and the charges against her were dropped. She returned home to her son, but the diary she had kept in prison, on what she herself believed at the time was a road to certain execution, breaks off at exactly that decision — and it remains unknown how she herself looked back on that choice in the years she had left. End of Val's story.",
          "next": null,
          "choices": []
        }
      }
    },
    kimphuc: {
      "start": "kimphuc_intro",
      "scenes": {
        "kimphuc_intro": {
          "text": "Toni was nine years old on June 8, 1972, when a napalm airstrike by the South Vietnamese army hit her home village — she ran out onto the road, tearing off her burning clothes, with severe burns over nearly a third of her body, and in that moment a photographer who happened to be nearby took her picture, a photo that would travel around the world.",
          "next": "kimphuc_scene2"
        },
        "kimphuc_scene2": {
          "text": "After many months of treatment and dozens of surgeries, Toni survived, but the following decade passed in constant pain from her burns and growing inner bitterness — she grew up under a Communist government that officially promoted atheism, and her own photograph became a symbol of the war that several governments used for propaganda without ever asking her. In those years she often asked herself whether there was anyone at all who saw her, and not just the famous photo of her face that had traveled the world without a single word from her.",
          "next": "kimphuc_choice1"
        },
        "kimphuc_choice1": {
          "text": "In 1982, ten years after the strike, Toni came across an old Bible in a library in Saigon and began secretly reading it, even though open religious gatherings were still under tight government control in those years. The words of the Gospel of John — 'I am the way, and the truth, and the life; no one comes to the Father except through me' — became the very path she had been looking for, and for the first time in ten years her pain had some direction other than sheer, unexplainable injustice. She had to decide: take the risk and start attending an underground church, despite the possible trouble with the authorities, or limit herself to quiet, unnoticed personal reading at home.",
          "choices": [
            {
              "label": "Take the risk and start attending church",
              "effects": {
                "faith": 10
              },
              "next": "kimphuc_bridgeA"
            },
            {
              "label": "Limit herself to quiet personal reading, without the risk",
              "effects": {
                "faith": -10
              },
              "next": "kimphuc_bridgeB"
            }
          ]
        },
        "kimphuc_bridgeA": {
          "text": "Toni began secretly attending a small underground church in Saigon, risking the attention of the authorities, and on Christmas Eve 1982, at a special church gathering, she made the decision to give her life to Christ. For the first time in ten years of constant physical pain and the status of a 'war symbol' she had never wanted, she felt that the pain didn't have to be carried alone.",
          "next": "kimphuc_choice2"
        },
        "kimphuc_bridgeB": {
          "text": "Toni limited herself to quiet, unnoticed Bible reading at home, not daring to attend public gatherings out of fear of the authorities, though she read those same words about the way, the truth, and the life over and over until she nearly knew them by heart. Her faith remained something strictly personal and almost invisible, even to her own family, for many years, without a community to share the burden with her.",
          "next": "kimphuc_choice2"
        },
        "kimphuc_choice2": {
          "text": "In 1996 in Washington, at the Vietnam Veterans Memorial, Toni unexpectedly came face to face with an American said to have been involved in coordinating the very airstrike on her village twenty-four years earlier. Right there, in front of the cameras and a crowd of veterans, she had to decide: embrace the man and publicly forgive him, or turn away and leave, carrying the full weight of that one unforgiven second with her.",
          "choices": [
            {
              "label": "Embrace him and forgive him right there",
              "effects": {
                "faith": 15
              },
              "next": "kimphuc_endLight"
            },
            {
              "label": "Turn away and leave without forgiving him",
              "effects": {
                "faith": -15
              },
              "next": "kimphuc_endDark"
            }
          ]
        },
        "kimphuc_endLight": {
          "text": "Toni embraced him and said aloud, in front of everyone: 'I'm not angry. I survived. I forgave a long time ago,' and both of them wept in front of the gathered veterans. Decades later, in an essay for American radio, she would say: 'Forgiveness freed me from hatred. I still have many scars on my body and severe pain almost every day, but my heart is cleansed. Napalm is very powerful, but faith, forgiveness, and love are much more powerful.' Since then she has traveled the world for many years telling this story and working with a charitable foundation, named in her honor, that helps children affected by war. End of Toni's story.",
          "next": null,
          "choices": []
        },
        "kimphuc_endDark": {
          "text": "Toni couldn't bring herself to embrace him in that moment and walked away in silence, leaving the man standing alone at the memorial. That one missed encounter kept resurfacing in her interviews for years afterward as a moment she kept returning to in her mind, never quite finding the will to try again. End of Toni's story.",
          "next": null,
          "choices": []
        }
      }
    },
    darlene: {
      "start": "darlene_intro",
      "scenes": {
        "darlene_intro": {
          "text": "Nellie, an American missionary, married the missionary Russell on August 18, 1937, and together they set out to serve in New Guinea, taking with them only the essentials and a whole suitcase of Bibles and devotional literature for the congregation they hoped to build. After the Japanese attack on Pearl Harbor in December 1941, the island fell into the war zone, and the couple, along with other foreign nationals, were detained by the Japanese military authorities.",
          "next": "darlene_scene2"
        },
        "darlene_scene2": {
          "text": "Nellie and Russell were separated and sent to different internment camps, with no right to correspond and almost no hope of learning anything about each other. From May 1943, Nellie was held in the Kampili women's camp; because she spoke English, Dutch, and Indonesian fluently, she was made head of her barracks, and she took up the habit of reading a passage of Scripture aloud every evening and leading a group prayer — a habit that for years became, for the women of that barracks, the one anchor of human dignity and mutual care amid the camp's worsening conditions.",
          "next": "darlene_choice1"
        },
        "darlene_choice1": {
          "text": "In the camp, Nellie was falsely accused of espionage — supposedly passing information to the Allies through coded letters. The interrogator offered her a pre-written confession to sign in exchange for gentler treatment, even though the confession was entirely fabricated. Nellie silently repeated to herself the lines of a psalm about not fearing evil, because the Lord was with her — not because she had stopped being afraid, but because those words were the one solid thing in a room where everything else rested on the interrogator's lies. Nellie had to decide: sign the false confession to end the interrogations, or refuse to sign an outright lie, knowing it would only make the interrogators angrier.",
          "choices": [
            {
              "label": "Refuse to sign the false confession",
              "effects": {
                "faith": 10
              },
              "next": "darlene_bridgeA"
            },
            {
              "label": "Sign the confession to end the interrogations",
              "effects": {
                "faith": -10
              },
              "next": "darlene_bridgeB"
            }
          ]
        },
        "darlene_bridgeA": {
          "text": "Nellie refused to sign the false confession, and the interrogations grew even more brutal — she was tortured and held in a windowless solitary cell. Despite the pain, she kept silently repeating to herself the lines of psalms she knew by heart, the one anchor in the darkness of the cell.",
          "next": "darlene_choice2"
        },
        "darlene_bridgeB": {
          "text": "Nellie, unable to bear the brutality of the interrogations any longer, at some point signed the false confession of espionage she had been offered. The torture did stop for a while after that, but the case against her, now formally backed by her own signature, looked far more serious in the eyes of the Japanese camp command.",
          "next": "darlene_choice2"
        },
        "darlene_choice2": {
          "text": "On the basis of that case, Nellie was sentenced to death by beheading, and given an exact date for the execution. In her final nights before the execution, sitting alone in her cell, she sang hymns aloud and recited psalms from memory, even though the guards had already warned her more than once to be quiet, threatening new punishment for the noise. She had to decide: keep praying and singing aloud despite the guards' threats, or fall silent and spend her last nights in stillness, without risking further punishment.",
          "choices": [
            {
              "label": "Keep praying and singing aloud, despite the guards' threats",
              "effects": {
                "faith": 15
              },
              "next": "darlene_endLight"
            },
            {
              "label": "Fall silent and spend her last nights in stillness",
              "effects": {
                "faith": -15
              },
              "next": "darlene_endDark"
            }
          ]
        },
        "darlene_endLight": {
          "text": "Nellie kept praying and singing aloud at night despite the guards' threats, and, as she later described it, during the interrogations themselves and while awaiting execution, an inexplicable peace washed over her in waves, and her fear of death receded, as if God were filling her with His own presence right there in the cell. On the day of the execution, just as the officer had begun to draw his sword, sudden confusion broke out among the guard detail, and the women were taken back to Kampili instead of being executed, with no explanation given — by one account, with the war's end approaching, the Japanese command decided not to risk the extra international attention. Toward the end of the war, camp commandant Yamaji, until then merciless toward the prisoners, came in person to tell Nellie that her husband Russell had died in another camp. Refusing to give in to hatred toward the man who had held her in custody for years, Nellie asked permission to say a few words to him: 'That is why I do not hate you, Mr. Yamaji. Perhaps God brought me to this place and this time to tell you that He loves you' — the commandant left the room in tears. Nellie later told her story in a book called 'Evidence Not Seen,' its title itself drawn from the biblical words describing faith as assurance of things not seen. End of Nellie's story.",
          "next": null,
          "choices": []
        },
        "darlene_endDark": {
          "text": "Nellie fell silent and spent her final nights before the execution in stillness, without risking further punishment. On the day of the execution, just as the officer had begun to draw his sword, sudden confusion still broke out among the guard detail, and the women were taken back to Kampili instead of being executed — the same deliverance she had, in those silent nights, almost stopped allowing herself to hope for. Russell, her husband, died in captivity in another camp, never living to see his release; she would later remember those few weeks of silence before the execution that never came as the time she had come closest to giving up, without even knowing that deliverance was already close at hand. End of Nellie's story.",
          "next": null,
          "choices": []
        }
      }
    },
    leah: {
      "start": "leah_intro",
      "scenes": {
        "leah_intro": {
          "text": "Zoe was fourteen years old on February 19, 2018, when militants from a splinter faction of the Nigerian terrorist group Boko Haram stormed a girls' school in the town of Dapchi and took away one hundred and ten students, including Zoe — the only Christian in the captured group. Her mother had raised her in the faith from early childhood and often repeated to her the same verse, that God had not given her a spirit of fear but of power, love, and a sound mind — words that Zoe whispered to herself on the night of the kidnapping, over and over, as the militants' bus carried her farther and farther from home.",
          "next": "leah_scene2"
        },
        "leah_scene2": {
          "text": "A few weeks later, the militants announced they would return all the kidnapped girls to their families — on one condition: Zoe had to publicly renounce Christianity and convert to Islam, like the rest of the captives, who had already been forced to formally recite Islamic prayers under threat.",
          "next": "leah_choice1"
        },
        "leah_choice1": {
          "text": "Before releasing the other ninety-nine students, the militants put Zoe to the choice right in front of her classmates: recite the words of conversion to Islam along with everyone else and go home with them, or be the only one who refuses, knowing that she alone would then not be released.",
          "choices": [
            {
              "label": "Refuse to renounce her faith, even if she is left behind alone",
              "effects": {
                "faith": 10
              },
              "next": "leah_bridgeA"
            },
            {
              "label": "Recite the words of conversion with the others, for the sake of release",
              "effects": {
                "faith": -10
              },
              "next": "leah_bridgeB"
            }
          ]
        },
        "leah_bridgeA": {
          "text": "Zoe refused to recite the words of conversion to Islam, and on March 21, 2018, the militants released one hundred and four of her classmates home, leaving Zoe the only captive left from the whole group. Before they said goodbye, she managed to ask her friends being freed to pray for her, as they were loaded into the vehicles and driven away.",
          "next": "leah_choice2"
        },
        "leah_bridgeB": {
          "text": "Unable to bear the thought of her classmates going home without her, Zoe repeated aloud, at the last moment, the words that were demanded of her — and along with the others, she really was made ready for release the next morning. But that evening, one of the commanders announced to her separately: since she was now, in their words, 'one of them,' she no longer needed the way home — she was being kept with the group 'for further instruction in the faith,' like several other newly converted girls from earlier raids. That night, left among strangers with no more hope of a morning bus home, she bitterly regretted the words she had spoken aloud, and resolved to herself that whatever they threatened her with, she would never again pretend she had renounced her faith.",
          "next": "leah_choice2"
        },
        "leah_choice2": {
          "text": "After months, and then years, in captivity, in 2020 Zoe managed to get a short message to her mother through a few released captives: 'Mom, don't worry. I know it isn't easy missing me, but I want to assure you: I'm doing fine where I am. I'm sure I'll see your face again someday. If not here, then there, with our Lord Jesus Christ' — the same faith for which she had once stayed behind, alone, out of the whole group, was still there in her words years later. Her mother, Rebecca, for her part kept repeating in interviews: 'I am so proud of my Zoe, because she has not renounced Christ, and because of that I know God will never leave her' — and kept asking the whole world not to stop praying for her daughter. Zoe herself had to keep deciding the same thing, over and over: keep calling herself a Christian every time the militants asked, or finally say what they wanted to hear, just to end the endless interrogations.",
          "choices": [
            {
              "label": "Keep calling herself a Christian at every interrogation",
              "effects": {
                "faith": 15
              },
              "next": "leah_endLight"
            },
            {
              "label": "Finally say what they want to hear",
              "effects": {
                "faith": -15
              },
              "next": "leah_endDark"
            }
          ]
        },
        "leah_endLight": {
          "text": "By the few accounts that reached the outside world from people released from the same captivity, and by that message passed to her mother, Zoe kept calling herself a Christian at every new interrogation, year after year, refusing to speak the words of conversion demanded of her. By 2021, by available accounts, she had spent more than 1,100 days in captivity; as of the most recent information available when this story was prepared, her fate and whereabouts remained unknown, and she herself remained, by every account, unbroken in the faith for which she had given up her freedom. End of Zoe's story.",
          "next": null,
          "choices": []
        },
        "leah_endDark": {
          "text": "At some point, worn down by the endless interrogations, Zoe, by the few accounts that reached the outside, stopped answering questions about her faith directly, falling silent instead of giving a clear refusal or agreement. That silence did not bring her release — as of the most recent information available when this story was prepared, her fate and whereabouts remained unknown. End of Zoe's story.",
          "next": null,
          "choices": []
        }
      }
    },
    doss: {
      "start": "doss_intro",
      "scenes": {
        "doss_intro": {
          "text": "Jerry, a member of the Seventh-day Adventist Church, had firmly decided even before being drafted that he would never pick up a weapon, even heading to the front — and volunteered for the army specifically as a medic, believing he could save lives without taking them. He repeated the commandment 'thou shalt not kill' to himself not as an abstract principle from a sermon, but as a personal promise made to God long before his draft notice arrived — and saw no reason to go back on it just because a war had started.",
          "next": "doss_scene2"
        },
        "doss_scene2": {
          "text": "In basic training, fellow soldiers and some officers openly mocked Jerry for refusing to carry a weapon, calling him a coward and a burden on the unit; on his very first night in the barracks he knelt by his bunk to pray before sleep, and heavy army boots came flying at him from every side amid his bunkmates' jeers — he didn't stop praying, and kept praying that way every night after, no matter what got thrown his way. His fellow soldiers nicknamed him 'Holy Joe,' and command more than once offered him a choice: either take up a rifle like everyone else, or file for an honorable discharge on grounds of conscience, avoiding the front altogether.",
          "next": "doss_choice1"
        },
        "doss_choice1": {
          "text": "Under pressure from the mockery and the direct threat of a court-martial for insubordination, Jerry had to decide: finally pick up a weapon, as demanded of him, to put an end to the harassment and prove himself fit for service, or keep insisting on his right to serve as an unarmed medic, however inconvenient that was for command. Every night in the barracks, while the others slept, he quietly prayed for the same thing — not that circumstances would change, but that he would have the firmness not to break the promise he had made to God long before the army.",
          "choices": [
            {
              "label": "Keep insisting on serving as an unarmed medic",
              "effects": {
                "faith": 10
              },
              "next": "doss_bridgeA"
            },
            {
              "label": "Take up a weapon to end the pressure and mockery",
              "effects": {
                "faith": -10
              },
              "next": "doss_bridgeB"
            }
          ]
        },
        "doss_bridgeA": {
          "text": "Jerry refused to pick up a weapon, even facing the direct threat of a court-martial, and command eventually recognized his legal right to serve as an unarmed medic. Fellow soldiers who had recently called him a coward stayed wary of him right up until the first real battle, where they would see for themselves what he was really made of.",
          "next": "doss_choice2"
        },
        "doss_bridgeB": {
          "text": "Jerry, unable to bear the constant pressure and mockery any longer, eventually picked up a rifle, as the officers had demanded. The decision weighed on him inwardly, and he took part in training with less and less real commitment, feeling that he had betrayed his own conviction just for a little peace in the barracks.",
          "next": "doss_choice2"
        },
        "doss_choice2": {
          "text": "Between April 29 and May 21, 1945, during the fighting for the Maeda Escarpment on Okinawa, Jerry's unit came under heavy fire and took severe casualties; dozens of wounded were left lying on the bare cliff top under fire while the rest of the unit pulled back. Jerry had to decide: retreat with everyone else and save his own life, or stay alone on the exposed cliff and pull the wounded out one by one, lowering them by rope to the base.",
          "choices": [
            {
              "label": "Stay and pull the wounded out under fire",
              "effects": {
                "faith": 15
              },
              "next": "doss_endLight"
            },
            {
              "label": "Retreat with everyone else and leave the wounded",
              "effects": {
                "faith": -15
              },
              "next": "doss_endDark"
            }
          ]
        },
        "doss_endLight": {
          "text": "Jerry stayed alone on the exposed cliff and, over the course of several hours, lowered wounded soldiers one after another on a makeshift rope harness, each time praying briefly aloud, 'Please, Lord, help me get one more,' before going back out under fire for the next. In total he saved seventy-five men that day and in the weeks of fighting that followed, without ever once picking up a weapon. On October 12, 1945, President Harry Truman personally presented him with the Medal of Honor on the White House lawn — the only conscientious objector to receive that award for the entire Second World War. End of Jerry's story.",
          "next": null,
          "choices": []
        },
        "doss_endDark": {
          "text": "Jerry pulled back off the cliff with the rest of his unit under heavy fire, leaving the wounded where they lay. The position was lost, and some of the wounded left on the cliff did not survive long enough for reinforcements to arrive. Jerry served out the rest of the Okinawa campaign, but the one day he chose to retreat with everyone else he brought up not in war memoirs but only in rare conversations with the people closest to him, always adding that praying that day had been harder for him than on any of the days he stayed under fire unarmed. End of Jerry's story.",
          "next": null,
          "choices": []
        }
      }
    },
    wilkerson: {
      "start": "wilkerson_intro",
      "scenes": {
        "wilkerson_intro": {
          "text": "Ted, a young Pentecostal pastor from the small town of Philipsburg, Pennsylvania, had recently sold the only television in his house and taken up the habit of spending two hours in prayer every evening, asking himself what could actually change in a person's life if you prayed that regularly. In February 1958 he read an article in Life magazine about the trial of seven New York teenagers from a street gang, charged with murder — and felt an overwhelming urge to go to New York and speak with those boys about faith in person. That same night he wrote a short prayer in his journal, asking for even one chance to talk with those teenagers before they were sentenced — with no idea that this impulse would change the rest of his life.",
          "next": "wilkerson_scene2"
        },
        "wilkerson_scene2": {
          "text": "Ted showed up uninvited at the New York courthouse in the middle of the hearing and tried to push through to the accused teenagers with an open Bible in his hands, shouting that he wanted to help them. A court officer dragged him out of the courtroom in front of the press, and the next day one of the city newspapers ran his photo, framing the whole thing as a stunt by a small-town preacher — for a few days, the whole city remembered him exactly that way.",
          "next": "wilkerson_choice1"
        },
        "wilkerson_choice1": {
          "text": "Humiliated and mocked in front of the whole city, Ted had to decide: take a bus home to Pennsylvania and admit the whole street-gang idea had clearly been a mistake, or stay in New York and try, by other means this time, to reach those same teenagers and their gang. He thought back to that late-night prayer in his journal and his habit of two hours of daily prayer, and asked himself whether this had been a genuine calling from God, or just a passing impulse from a small-town pastor who had seen his own photo in a national magazine.",
          "choices": [
            {
              "label": "Stay in New York and try again",
              "effects": {
                "faith": 10
              },
              "next": "wilkerson_bridgeA"
            },
            {
              "label": "Go home, admitting the idea had been a mistake",
              "effects": {
                "faith": -10
              },
              "next": "wilkerson_bridgeB"
            }
          ]
        },
        "wilkerson_bridgeA": {
          "text": "Ted stayed in New York, and instead of the courthouse went straight to the streets of Brooklyn, where he found Nicky Cruz — leader of the Mau Maus gang, feared even by other gangs in the area. Nicky beat him and held a knife to his throat, shouting, 'Come near me again and I'll kill you!' Ted, bleeding, answered that Nicky could cut him into a thousand pieces and scatter them across the street, and every piece would still love him — because Christ loved him, Nicky, just as he was. Over the following weeks Ted kept coming back to the same corners, again and again, repeating the same line to the gang every time: 'Jesus loves you' — no matter how many times he was chased off.",
          "next": "wilkerson_choice2"
        },
        "wilkerson_bridgeB": {
          "text": "Ted, unable to bear the public humiliation in front of the press, took the bus back to Pennsylvania that same day, convinced that his ministry to the city's street gangs was over for good. But just a few days later, unable to settle at home, he went back to New York — not with his old, clear conviction, but more because he simply couldn't let go of the story of those boys from the courthouse — and began walking those same Brooklyn blocks again, only now far more cautiously and with none of his old confidence in success.",
          "next": "wilkerson_choice2"
        },
        "wilkerson_choice2": {
          "text": "On July 12, 1958, at a prayer meeting Ted was holding in Brooklyn, Nicky Cruz and another gang leader, Israel Narvaez, stepped forward in front of everyone and gave their lives to Christ, and within days turned in the gang's weapons to the police themselves. Over the following year, Ted got to know dozens more teenagers from New York's street gangs. He and his brother Don were offered the chance to open a small rehabilitation center for drug-addicted gang teenagers — a risky venture requiring constant funding, with no guarantee of success.",
          "choices": [
            {
              "label": "Open the rehab center, despite all the risks",
              "effects": {
                "faith": 15
              },
              "next": "wilkerson_endLight"
            },
            {
              "label": "Turn down the center as too risky",
              "effects": {
                "faith": -15
              },
              "next": "wilkerson_endDark"
            }
          ]
        },
        "wilkerson_endLight": {
          "text": "Ted, together with his brother Don, founded a rehabilitation program for drug-addicted teenagers in 1958–1959 called Teen Challenge. His book 'The Cross and the Switchblade,' about his ministry to street gangs, sold more than fifteen million copies in over thirty languages, and Teen Challenge itself has since grown into an international network of rehabilitation centers helping people with addictions around the world. End of Ted's story.",
          "next": null,
          "choices": []
        },
        "wilkerson_endDark": {
          "text": "Ted turned down the idea of opening a rehab center, judging the risk too high without guaranteed funding, and went back to ordinary pastoral work in a small parish. The dozens of gang teenagers in New York he had gotten to know were left without the structured program of help he might have offered them. End of Ted's story.",
          "next": null,
          "choices": []
        }
      }
    },
    pullinger: {
      "start": "pullinger_intro",
      "scenes": {
        "pullinger_intro": {
          "text": "Dina, a young Englishwoman with no special missionary training, had felt a call from God to ministry since childhood and expected God to send her to Africa, but after several failed attempts to get there, every door closed one after another. Confused, she turned to her parish priest for advice, and he told her to buy a ticket for the farthest ship she could find, pray along the way, and trust the Lord to show her Himself where to get off. In 1966, at twenty-two, she did exactly that — and stepped off the ship in Hong Kong, deciding on the spot to help the city's poorest districts.",
          "next": "pullinger_scene2"
        },
        "pullinger_scene2": {
          "text": "She soon learned about the Kowloon Walled City — a densely built enclave at the heart of Hong Kong that formally answered to neither British nor Chinese law, ruled by triads, heroin dealers, and opium den operators. Police from both jurisdictions had avoided going in for years; even other missionaries in Hong Kong considered the place too dangerous for a young woman alone, and Dina was offered a teaching job instead, in a far safer part of the city.",
          "next": "pullinger_choice1"
        },
        "pullinger_choice1": {
          "text": "Dina had to decide: settle and begin her ministry right inside the Walled City, among heroin addicts and triad members, with no police protection and no guarantee of her own safety, or take the safer, more predictable job as a teacher in an ordinary part of Hong Kong. She had no special missionary training and no plan for what to do if attacked — only a firm, almost childlike conviction that since God had called her to this particular city, He would also decide what happened to her inside its walls.",
          "choices": [
            {
              "label": "Settle inside the Walled City among the addicts",
              "effects": {
                "faith": 10
              },
              "next": "pullinger_bridgeA"
            },
            {
              "label": "Take the safe teaching job in another district",
              "effects": {
                "faith": -10
              },
              "next": "pullinger_bridgeB"
            }
          ]
        },
        "pullinger_bridgeA": {
          "text": "Dina settled right inside the Walled City, renting a tiny room among the narrow alleys of the enclave that never saw sunlight. At first she simply repeated a line from a psalm to herself as she walked past yet another opium den: 'The Lord is my light and my salvation; whom shall I fear?' Then she met a British Christian couple who helped her experience baptism in the Holy Spirit and receive the gift of praying in other tongues. From then on, Dina walked the alleys of the enclave every day, praying aloud in that language — and before long, gang leaders and heroin dealers themselves started coming to her, asking how they could be saved.",
          "next": "pullinger_choice2"
        },
        "pullinger_bridgeB": {
          "text": "Dina took the safer teaching job in a well-off part of Hong Kong, visiting the Walled City now and then with humanitarian aid, but never living there. Trust from the local residents built up far more slowly than it might have with someone's steady presence among them. She, too, later met the same British Christian couple and experienced baptism in the Holy Spirit with the gift of praying in other tongues — but without a constant presence inside the enclave, that gift remained more an occasional part of her visits than an everyday weapon.",
          "next": "pullinger_choice2"
        },
        "pullinger_choice2": {
          "text": "One of the first heroin addicts Dina tried to help get clean asked her to help him through withdrawal — she had no medication to offer either way. Dina offered him the same thing she herself had learned: accept Christ and repeat the prayer in another tongue every time the pain hit. Dina had to decide: stay by his side day and night, praying aloud with him through the whole agonizing withdrawal, or refer him to a state hospital, where formal medical help was available, but with no personal involvement at all.",
          "choices": [
            {
              "label": "Stay by his side through the whole withdrawal, with no medication",
              "effects": {
                "faith": 15
              },
              "next": "pullinger_endLight"
            },
            {
              "label": "Refer him to a state hospital",
              "effects": {
                "faith": -15
              },
              "next": "pullinger_endDark"
            }
          ]
        },
        "pullinger_endLight": {
          "text": "Dina stayed by his side through the entire withdrawal, praying aloud with him in the language she had received at her baptism in the Holy Spirit — and, by her own account and by the testimony of dozens of other addicts who later went through the same ministry, the symptoms eased noticeably more than they would in an ordinary unaided withdrawal; authorities and doctors later acknowledged, in some cases, an almost complete success rate for this kind of detox without medication. In 1981 she officially founded the charity St. Stephen's Society, with a network of rehabilitation homes for drug addicts, prostitutes, and former gang members that still operates in Hong Kong today. End of Dina's story.",
          "next": null,
          "choices": []
        },
        "pullinger_endDark": {
          "text": "Dina referred him to a state hospital, where he went through formal detox under medical supervision, but without the personal, constant presence she could have offered herself. A few weeks after his discharge he went back to his old habits, and Dina never developed a method of her own for working with addiction, remaining more an observer of what happened in the Walled City than a direct participant in anyone's deliverance from it. End of Dina's story.",
          "next": null,
          "choices": []
        }
      }
    },
    baldwin: {
      "start": "baldwin_intro",
      "scenes": {
        "baldwin_intro": {
          "text": "Matt, a Hollywood actor, spent years living a bohemian life full of parties and carelessness, until his wife Kenya became a Christian under the influence of the Brazilian nanny working in their home — who not only prayed for the whole family but repeatedly said she believed all of them would come to faith one day. Every morning before tending to the children, the nanny quietly read the same chapter from the Bible in Portuguese in the kitchen, and Matt, passing by with his coffee, heard those words for years without ever trying to understand what they meant.",
          "next": "baldwin_scene2"
        },
        "baldwin_scene2": {
          "text": "Kenya invited Matt to church with her for years, but he treated it with polite indifference, considering faith his wife's personal matter. Kenya, meanwhile, prayed on her knees for an hour every morning and read the Bible for another thirty to forty-five minutes morning and evening — and kept this up for an entire year. She never forced the issue and never argued, only once a year calmly repeated that she was still praying for him — the same line the nanny had said years before — and Matt had long since stopped hearing it as anything more than a familiar formula.",
          "next": "baldwin_choice1"
        },
        "baldwin_choice1": {
          "text": "On the morning of September 11, 2001, watching the terrorist attacks in New York on television along with the rest of the country, Matt suddenly thought: if towering buildings could fall, then anything was possible — and if his own wife was already a Christian, and he had spent so many years walking past the Bible he himself kept putting away in a drawer without opening a single line, then maybe Christ really would return tomorrow. He had to decide: take what his wife had been saying for years seriously for the first time, or, as usual, wait out the anxious moment and go back to his old way of life once the news settled down.",
          "choices": [
            {
              "label": "Take his wife's faith seriously for the first time",
              "effects": {
                "faith": 10
              },
              "next": "baldwin_bridgeA"
            },
            {
              "label": "Wait out the anxiety and return to his old life",
              "effects": {
                "faith": -10
              },
              "next": "baldwin_bridgeB"
            }
          ]
        },
        "baldwin_bridgeA": {
          "text": "For the first time in years, Matt went to church with his wife not out of politeness but because he genuinely wanted answers, and began praying himself, in his own words: 'Lord, explain to me what's actually going on.' The sermon that day, as he would say later, sounded as though it had been written just for him.",
          "next": "baldwin_choice2"
        },
        "baldwin_bridgeB": {
          "text": "Matt, as he'd expected, waited out the most anxious weeks after the attacks and tried to return to his old way of life. But he couldn't fully shake the feeling: a few weeks later, coming across his wife in her usual morning prayer on her knees, he found himself kneeling down beside her for the first time in years, without meaning to — not yet ready to truly believe anything, but no longer able to simply brush it off the way he used to.",
          "next": "baldwin_choice2"
        },
        "baldwin_choice2": {
          "text": "In the weeks that followed, Matt had to decide how far this change would go: limit himself to the occasional church visit for the family's peace of mind, or go through full water baptism, publicly declaring the new direction of his life in front of friends and colleagues in the industry, who would almost certainly react with skepticism.",
          "choices": [
            {
              "label": "Go through water baptism publicly",
              "effects": {
                "faith": 15
              },
              "next": "baldwin_endLight"
            },
            {
              "label": "Limit himself to occasional church visits for appearances",
              "effects": {
                "faith": -15
              },
              "next": "baldwin_endDark"
            }
          ]
        },
        "baldwin_endLight": {
          "text": "Within a month of the September 11 attacks, Matt gave his life to Christ, and in the spring of 2002 he was baptized in water, completely changing his way of life — since then he has spoken openly about his faith in interviews and at public events, despite the skepticism of part of his Hollywood circle. End of Matt's story.",
          "next": null,
          "choices": []
        },
        "baldwin_endDark": {
          "text": "Matt limited himself to occasional church visits with his wife, unwilling to take the bigger public step of baptism. The change that had begun that morning of September 11 stayed permanently half-finished, and for a long time afterward he would still recall that sharp feeling he had felt that day, never having seen it through to the end. End of Matt's story.",
          "next": null,
          "choices": []
        }
      }
    },
    cooper: {
      "start": "cooper_intro",
      "scenes": {
        "cooper_intro": {
          "text": "Simon grew up in a family of preachers going back generations: his grandfather served as a pastor for almost seventy-five years and was an apostle in a small church, and his father spent twenty-five years as a pastor and evangelist, taking young Simon along on mission trips to the Apache in Arizona. After launching a rock career under a flashy stage name, Simon spent half a century immersed in a lifestyle of alcohol and scandal-edged theatrics. He later recalled drinking alongside musicians of his generation, many of whom died of overdoses while still young — while he kept drinking, even as the Sunday sermons of his childhood stayed somewhere in the back of his memory, something he retold to friends back then more as a joke than as anything he still believed himself.",
          "next": "cooper_scene2"
        },
        "cooper_scene2": {
          "text": "By the early 1980s, Simon's alcoholism had reached the point that, by his own later account, blood once literally started coming from his eyes, and he barely remembered whole stretches of his life and career, including the recording of one of his own albums. Sheryl, unlike him, had by then been going to church for several years and prayed for him aloud every night, though she rarely said so to his face, not wanting to pressure him. Worn out from living with a man she barely recognized sober, she packed her things, moved to Chicago to be with her family and church, and gave him a plain ultimatum: either he stopped drinking, or she wasn't coming back with the children.",
          "next": "cooper_choice1"
        },
        "cooper_choice1": {
          "text": "Simon had to decide: go through agonizing sobriety without the alcohol he had leaned on for decades, on stage and off, or let his wife and children go and keep living the way he had for the last several years. He remembered his father preaching from the pulpit about the freedom faith gives, and for the first time in his life asked himself whether that freedom was just a nice phrase from someone else's sermons, or something he could actually have himself, if he didn't give up now.",
          "choices": [
            {
              "label": "Go through sobriety for his family",
              "effects": {
                "faith": 10
              },
              "next": "cooper_bridgeA"
            },
            {
              "label": "Let his wife go and continue his old life",
              "effects": {
                "faith": -10
              },
              "next": "cooper_bridgeB"
            }
          ]
        },
        "cooper_bridgeA": {
          "text": "Simon quit drinking and went through a hard stretch of sobriety, leaning on Sheryl's support from a distance and gradually returning to the faith he had known since childhood in a family of preachers. After finishing rehab, he called Sheryl in Chicago and said only two words: 'It's done.' He would later say sobriety had been far harder for him than his entire rock career, full of shocking stage personas.",
          "next": "cooper_choice2"
        },
        "cooper_bridgeB": {
          "text": "Simon couldn't bring himself to quit drinking right away, and Sheryl, as she had warned, left with the children for a while. He spent the following months in the same lifestyle, losing one former bandmate after another to the same disease — until he lost a concert he had no memory of at all, and realized he was losing not just his family but his very ability to perform. Only then, years too late and by a far harder road, did he finally go through the same sobriety he could have chosen right away.",
          "next": "cooper_choice2"
        },
        "cooper_choice2": {
          "text": "Years into his sobriety, Simon had to decide how to handle his faith in public: keep it to himself, protecting his image as the 'king of shock rock,' or openly tell journalists that he went to church every Sunday and read the Bible every day, risking the stage persona he had built over half a century.",
          "choices": [
            {
              "label": "Speak openly about his faith in interviews",
              "effects": {
                "faith": 15
              },
              "next": "cooper_endLight"
            },
            {
              "label": "Keep his faith private for the sake of his stage image",
              "effects": {
                "faith": -15
              },
              "next": "cooper_endDark"
            }
          ]
        },
        "cooper_endLight": {
          "text": "Simon began openly telling journalists about his faith: 'There's never been a rebel like Jesus Christ' — and that there was nothing in Christianity that stopped him from staying a rock star. He kept saying that almost everything he had sung about all those years had really been a story about good and evil — 'don't choose evil' — only he hadn't always understood himself what he was singing about. Sheryl said of her husband in interviews: 'He doesn't have a sponsor, he has a Savior — Jesus Christ.' Today Simon says he reads the Bible every day and goes to church every Sunday, while remaining one of the most recognizable figures in rock music. End of Simon's story.",
          "next": null,
          "choices": []
        },
        "cooper_endDark": {
          "text": "Simon decided to keep his personal faith to himself, protecting his familiar stage image from unwanted press questions. He stayed sober, but the part of his life that touched on faith remained almost invisible even to many fans who had followed his career for years, and on Sundays he still quietly attended church in one particular city, careful never to let it show up in an interview. End of Simon's story.",
          "next": null,
          "choices": []
        }
      }
    },
    pacquiao: {
      "start": "pacquiao_intro",
      "scenes": {
        "pacquiao_intro": {
          "text": "Zach, a Filipino boxer who had risen from extreme poverty to become a national hero and world champion in several weight classes at once, spent years living a life full of gambling, alcohol, and affairs behind his wife Jinky's back. He later admitted it himself: 'On Sundays I went to church, and Monday through Saturday I sat in a bar and drank.' Jinky had long been going to church alone, occasionally leaving an open Bible on the nightstand, turned to the Psalms — Zach would invariably close it and put it away in a drawer, without reading a single line.",
          "next": "pacquiao_scene2"
        },
        "pacquiao_scene2": {
          "text": "After yet another scandal, when Jinky was already seriously talking about leaving the family, Zach decided to spend a few days alone in the forest outside the city, to sort himself out away from the cameras, the managers, and the usual temptations that followed him through his ordinary life. Before leaving, to his own surprise, he took along that same Bible from the nightstand, never admitting to Jinky exactly why he needed it.",
          "next": "pacquiao_choice1"
        },
        "pacquiao_choice1": {
          "text": "Alone in the forest, by himself for the first time in years of nonstop training and public life, Zach had to decide: spend the time in prayer and an honest reckoning with his own life, as the few believing friends he had advised him to, or simply wait out a few quiet days and go back to his old way of life once the scandal blew over.",
          "choices": [
            {
              "label": "Spend the time in honest prayer and self-examination",
              "effects": {
                "faith": 10
              },
              "next": "pacquiao_bridgeA"
            },
            {
              "label": "Just wait out a few quiet days",
              "effects": {
                "faith": -10
              },
              "next": "pacquiao_bridgeB"
            }
          ]
        },
        "pacquiao_bridgeA": {
          "text": "Zach spent several days in solitary prayer, honestly going back over his own affairs, gambling debts, and broken promises to his wife for the first time. It was during those very days, by his own later account, that he had a dream: a forest full of flowers, two angels, and a voice ten times louder than thunder that said, 'My child, my child, why have you strayed from the path?' Zach took this as a direct answer from God to his prayer.",
          "next": "pacquiao_choice2"
        },
        "pacquiao_bridgeB": {
          "text": "Zach simply waited out a few days in the quiet of the forest, not examining anything or praying in any serious way, hoping to just sit out the scandal and return to his old life. But on one of those lonely nights, far from the cameras and the usual noise, an unexpected and sharp wave of shame washed over him for his years of affairs and broken promises — a feeling too much like what his believing friends called the voice of God for him to simply brush it aside.",
          "next": "pacquiao_choice2"
        },
        "pacquiao_choice2": {
          "text": "After what he himself called an encounter with God in the forest — whether in a dream or in the heavy shame that wouldn't leave him at night — Zach began, haltingly and in fits and starts, reading a chapter of the Bible he had once only carried with him unopened. He didn't make a full break with his old habits right away — it took about two more years before he finally and openly gave up gambling and partying for good. He had to decide: carry that slow break through to the end, openly cutting ties with his old habits and rebuilding his relationship with Jinky, or stop halfway, treating what he'd gone through as a beautiful but passing experience.",
          "choices": [
            {
              "label": "Radically break with his old habits for his family's sake",
              "effects": {
                "faith": 15
              },
              "next": "pacquiao_endLight"
            },
            {
              "label": "Treat what happened as a beautiful episode and change nothing",
              "effects": {
                "faith": -15
              },
              "next": "pacquiao_endDark"
            }
          ]
        },
        "pacquiao_endLight": {
          "text": "Zach publicly gave up gambling and drinking, confessed all his past affairs to Jinky, and asked her forgiveness, starting to rebuild the relationship with his family from scratch. 'I'm happy because I found the right path — salvation, being born again,' he said later in an interview. He closed the casinos he had co-owned, began building a five-thousand-seat church called 'Word for the World' in his hometown of General Santos, and started openly professing Christianity in public life, and his marriage to Jinky, which had seemed doomed not long before, survived and grew stronger in the years that followed. He has carried that same Bible from the forest with him to every fight since, saying it reminds him of that evening more precisely than any medal or championship belt. End of Zach's story.",
          "next": null,
          "choices": []
        },
        "pacquiao_endDark": {
          "text": "Zach treated what he had gone through in the forest as a beautiful but passing experience, and soon went back to his old habits — gambling and casual affairs. Jinky, worn down by the repeating cycle of promises and relapses, increasingly began talking about divorce, and Zach himself rarely mentioned that episode in the forest publicly in the years that followed. End of Zach's story.",
          "next": null,
          "choices": []
        }
      }
    },
    franklin: {
      "start": "franklin_intro",
      "scenes": {
        "franklin_intro": {
          "text": "Cole, a future well-known gospel musician, was abandoned by his birth parents in early childhood and raised by a great-aunt who took the place of both parents — a deeply devout woman, from whose voice he first heard gospel music and the Bible even before he learned to read himself. From the age of eight he secretly struggled with an addiction to pornography — a habit he hid from everyone around him for more than twenty years, including his own wife.",
          "next": "franklin_scene2"
        },
        "franklin_scene2": {
          "text": "By the late 1990s, already a well-known gospel artist performing to crowds of thousands and appearing live on Christian television, married to Tammy for more than fifteen years, Cole was still carrying this secret weight, which grew harder and harder to reconcile both with his public image as a man who sang about grace before millions of viewers, and with his role as the faithful husband his wife believed him to be.",
          "next": "franklin_choice1"
        },
        "franklin_choice1": {
          "text": "One night, in a wave of self-disgust, Cole drove to a dumpster and threw away his entire hoarded collection — then came back a few hours later in the middle of the night and dug it back out, hating himself even more for the fact that even this one simple decision was beyond him, though just an hour earlier he had been praying on stage in front of thousands of people for the strength to live by faith. He had to decide: admit he couldn't handle this on his own, and for the first time honestly tell someone about the addiction, or keep fighting it in silence, as he had for more than twenty years.",
          "choices": [
            {
              "label": "Honestly tell someone about the addiction for the first time",
              "effects": {
                "faith": 10
              },
              "next": "franklin_bridgeA"
            },
            {
              "label": "Keep fighting it in silence, as before",
              "effects": {
                "faith": -10
              },
              "next": "franklin_bridgeB"
            }
          ]
        },
        "franklin_bridgeA": {
          "text": "In a hotel room in Los Angeles, during another tour stop, Cole finally told his wife Tammy about his addiction — saying it out loud for the first time in more than twenty years to anyone besides himself: 'Baby, I need to tell you something. I'm struggling with a pornography addiction.' Tammy didn't leave and didn't turn away, but stayed by his side, later saying that trust was exactly what brought them closer together — and together they began the long road to healing.",
          "next": "franklin_choice2"
        },
        "franklin_bridgeB": {
          "text": "Cole hid the collection away again and kept fighting the addiction alone, taking care that no one, including his wife, suspected anything. The weight of the secret kept growing, and the gap between what he sang about on stage and what was actually happening inside him became more and more obvious to him — until one day Tammy herself noticed the change in her husband and asked him directly what was going on. There was no strength left to deny it, and the truth he had planned to carry to his grave came out anyway — just years later, and by a far more painful road than it might have been.",
          "next": "franklin_choice2"
        },
        "franklin_choice2": {
          "text": "Years into working through the addiction together with his wife, Cole had to decide whether to talk about it openly, on a national stage, knowing it would shatter his image as a flawless gospel artist — or keep that part of his life private, known only to those closest to him. He had sung from the stage more than once about grace covering any sin, but singing that for thousands of strangers was one thing, and believing that same grace would hold up his own, most shameful secret, spoken aloud in his own voice, was quite another.",
          "choices": [
            {
              "label": "Write about it openly in his autobiography",
              "effects": {
                "faith": 15
              },
              "next": "franklin_endLight"
            },
            {
              "label": "Keep it private, without telling the public",
              "effects": {
                "faith": -15
              },
              "next": "franklin_endDark"
            }
          ]
        },
        "franklin_endLight": {
          "text": "Cole first spoke publicly about his years-long secret struggle with pornography addiction in 2004 on the CBN television network, and then again in 2005 — with Tammy sitting beside him — before millions of viewers on the Oprah Winfrey Show, deliberately breaking his image as a flawless gospel artist in order to help others battling the same secret. He later wrote about that same past in his own books as well. Many listeners who had spent years hiding a similar addiction inside their own Christian communities felt, for the first time, that they weren't alone in the struggle. End of Cole's story.",
          "next": null,
          "choices": []
        },
        "franklin_endDark": {
          "text": "Cole decided to keep the story of his addiction private, known only to Tammy and those closest to him, never mentioning it publicly. His music career kept growing without a single blemish on his flawless image, but many listeners struggling with a similar hidden addiction in their own lives never learned that they weren't alone in that struggle. End of Cole's story.",
          "next": null,
          "choices": []
        }
      }
    },
    lecrae: {
      "start": "lecrae_intro",
      "scenes": {
        "lecrae_intro": {
          "text": "Jimmy, a future Christian hip-hop artist, was sexually abused by a guardian when he was around seven or eight years old — a trauma he told no one about for years, while it silently turned into promiscuity and near-indiscriminate drug use through his teenage and young adult years.",
          "next": "lecrae_scene2"
        },
        "lecrae_scene2": {
          "text": "By the end of high school, Jimmy had effectively lost control of his own life — school, family relationships, any long-term plans all took a back seat to his usual circle of drugs and casual acquaintances. The grandmother who had raised him for part of his childhood took him to church on Sundays, but those services stuck in his memory more as a boring obligation than as anything capable of touching the pain he never spoke of, even to her. At some point, the people close to him finally talked him into going through a rehab program for his addiction.",
          "next": "lecrae_choice1"
        },
        "lecrae_choice1": {
          "text": "After rehab, still avoiding any talk of the childhood abuse even with doctors, Jimmy enrolled in college. He had to decide: take a real, serious look inside himself for the first time and come to terms with what had happened to him at age seven, by accepting an invitation to a student Christian gathering that his roommate kept inviting him to, or go back to his usual circle of acquaintances, just to avoid facing the painful memories. His roommate never pushed or asked directly what had happened in his childhood — he simply kept repeating the invitation, again and again, with the same calm certainty that there, at that gathering, Jimmy would have a place just as he was, with no need to pretend.",
          "choices": [
            {
              "label": "Go to the Christian gathering and look inside himself",
              "effects": {
                "faith": 10
              },
              "next": "lecrae_bridgeA"
            },
            {
              "label": "Go back to his usual circle of acquaintances",
              "effects": {
                "faith": -10
              },
              "next": "lecrae_bridgeB"
            }
          ]
        },
        "lecrae_bridgeA": {
          "text": "Jimmy went to the student Christian gathering his roommate had invited him to several times, and, to his own surprise, spoke aloud for the first time in years about what had happened to him at age seven. But real change didn't come right away: for almost a year he lived on two fronts, caught between college parties and the Christian community, until a serious car accident made him realize he couldn't keep living that way. It was after the accident, in his own words, that he 'literally broke down from guilt, shame, and remorse' — and that became the real beginning of what he calls his conversion: not a single dramatic event, but a long, gradual process.",
          "next": "lecrae_choice2"
        },
        "lecrae_bridgeB": {
          "text": "Jimmy went back to his usual circle of friends, where no one asked about the past or made him feel uncomfortable. Rehab had helped him deal with the physical addiction for a while, but the childhood trauma remained unspoken, still shaping his choices in relationships and school — until, months later, the same roommate, who had never stopped inviting him, caught Jimmy at a moment when he could no longer hide the pain, and brought him to a gathering that, this time, Jimmy finally chose to attend himself.",
          "next": "lecrae_choice2"
        },
        "lecrae_choice2": {
          "text": "Years later, by then a well-known Christian hip-hop artist with millions of listeners, Jimmy said more than once that the only way to live a better future than his past was to 'cling to God in the present,' rather than try to forget what had happened. He had to decide: write an honest memoir about the abuse he suffered as a child and the years of self-destruction that followed, knowing it would shatter the image of a flawless Christian artist that part of his audience had built up around him — or keep singing about faith without ever calling things by their true names.",
          "choices": [
            {
              "label": "Write an honest memoir about everything he went through",
              "effects": {
                "faith": 15
              },
              "next": "lecrae_endLight"
            },
            {
              "label": "Keep singing about faith without naming things directly",
              "effects": {
                "faith": -15
              },
              "next": "lecrae_endDark"
            }
          ]
        },
        "lecrae_endLight": {
          "text": "Jimmy wrote a candid memoir, 'Unashamed,' describing in detail the abuse he suffered as a child, his years of addiction, and his path to faith, without embellishment or any attempt to appear as a flawless example. 'My prayer is that people would find healing and not be ashamed,' he said later about the decision. The book sold widely and sparked a wave of response from other survivors of similar abuse, who for the first time felt they could speak about it openly. End of Jimmy's story.",
          "next": null,
          "choices": []
        },
        "lecrae_endDark": {
          "text": "Jimmy decided not to speak publicly about the abuse he had suffered, continuing to sing about faith and redemption in general, safe terms that a broad audience could relate to, but without personal detail. Listeners struggling with a similar past in their own lives never learned that the man whose music they had followed for years had been through something very similar. End of Jimmy's story.",
          "next": null,
          "choices": []
        }
      }
    },
    buchan: {
      "start": "buchan_intro",
      "scenes": {
        "buchan_intro": {
          "text": "Rod, a farmer of Scottish descent born in Southern Rhodesia, lost the family farm in Zambia to political upheaval along with the rest of his family, and in 1976 moved onto a plot of land they'd bought in South Africa and named Shalom, hoping to start a new life. The first years in the new place passed in hard, almost unbroken labor, with no religious dimension to life at all.",
          "next": "buchan_scene2"
        },
        "buchan_scene2": {
          "text": "By the late 1970s, Rod's marriage to his wife Jill was going through a rough patch — constant financial worry and exhausting physical labor left little room for anything beyond sheer fatigue. Neighboring farmers, some of them believers, repeatedly invited them to local prayer meetings, and although Rod politely declined for years, citing exhaustion after fieldwork, Jill herself increasingly admitted she wouldn't mind hearing something other than her own worries at the end of yet another draining day.",
          "next": "buchan_choice1"
        },
        "buchan_choice1": {
          "text": "On February 18, 1979, at one of these gatherings in a small Methodist church seven or eight miles from their farm, Rod had to decide: pray seriously, for the first time in his life, together with his wife about his own conversion, admitting in front of his farming neighbors that he needed it, or treat the meeting as an ordinary social visit, listening politely and leaving without any real change. He had spent his whole life considering prayer a matter for women and preachers, not sturdy farmers like himself, and admitting out loud to his neighbors that he needed God no less than rain for his crops cost him more than years of physical labor ever had.",
          "choices": [
            {
              "label": "Pray seriously about his own conversion together with his wife",
              "effects": {
                "faith": 10
              },
              "next": "buchan_bridgeA"
            },
            {
              "label": "Treat the meeting as a formality and change nothing",
              "effects": {
                "faith": -10
              },
              "next": "buchan_bridgeB"
            }
          ]
        },
        "buchan_bridgeA": {
          "text": "Rod, together with Jill, went through a real spiritual conversion that evening: when the call came to step forward and accept Christ, the whole family — all five children along with their parents — went up to the altar. The marriage, which until then had been held together by nothing but exhaustion, began changing almost immediately — both of them relearned how to talk to each other about more than just the farm and money.",
          "next": "buchan_choice2"
        },
        "buchan_bridgeB": {
          "text": "Rod treated the prayer meeting as a formality, politely listening to his neighbors but changing nothing in himself that evening. His marriage to Jill went on being held together by exhaustion and financial worry for a long while yet, and the vague sense that farm work alone wasn't enough for a full life never went away — it simply came back to him a few years later, when the same neighboring pastor, who never stopped inviting them to meetings, finally caught Rod alone, with no one watching, ready at last to admit he needed God no less than rain for his crops.",
          "next": "buchan_choice2"
        },
        "buchan_choice2": {
          "text": "Soon after he truly gave his life to God, Rod felt an inner urge to openly preach to the other farmers in the area — but public preaching meant risking looking strange to people who had known him as someone entirely different. He had to decide whether to step into this unfamiliar role of preacher, or remain the quiet, respected farmer everyone around him knew.",
          "choices": [
            {
              "label": "Start openly preaching to other men",
              "effects": {
                "faith": 15
              },
              "next": "buchan_endLight"
            },
            {
              "label": "Stay a quiet farmer, avoiding the public eye",
              "effects": {
                "faith": -15
              },
              "next": "buchan_endDark"
            }
          ]
        },
        "buchan_endLight": {
          "text": "Rod began preaching openly, and in 1980, together with Jill, officially founded Shalom Ministries. Years later, already a well-known preacher, he was resting in the Mkuze game reserve when, in his own words, he distinctly heard inside himself: \"You're so busy preaching that you're forgetting Me. I want you to cancel your preaching engagements.\" He cancelled every meeting and fell quiet before God for a while — and it was out of that very silence that the idea for the Mighty Men Conference was born: the first men's conference was held in 2004, and by 2010 it was drawing as many as three hundred thousand participants at once. A simple farmer became one of the most well-known evangelists in South Africa. End of Rod's story.",
          "next": null,
          "choices": []
        },
        "buchan_endDark": {
          "text": "Rod decided to remain the quiet, respected farmer his neighbors knew, never working up the nerve to step into public preaching. The inner urge he'd felt after his conversion gradually faded, and Shalom Ministries, along with the conference that might have gathered hundreds of thousands of men, never came to be. End of Rod's story.",
          "next": null,
          "choices": []
        }
      }
    },
    lamott: {
      "start": "lamott_intro",
      "scenes": {
        "lamott_intro": {
          "text": "Ella, the future well-known American writer, grew up in a family that considered religion something outdated and unnecessary for educated people. By the time she was twenty she was already deep into alcohol and drugs, spending nearly thirteen years straight in that state, losing jobs, relationships, and almost any ability to keep her own life under control. One night, in the middle of an especially rough stretch, she suddenly felt as though someone were sitting in the corner of her cramped little bedroom — and she realized it was Jesus, quietly watching her with patience and love. In the days that followed, that sense of presence followed her everywhere, like a small cat tagging along behind her, even though she herself was, at the time, about the last person who would have called herself a believer.",
          "next": "lamott_scene2"
        },
        "lamott_scene2": {
          "text": "During one especially bad stretch of drinking, Ella happened to walk past the small St. Andrew Presbyterian Church in the California town of Marin City and heard a choir singing inside — so beautiful, so unlike anything she'd known in her own life, that she stopped at the door without daring to go in. The congregation was singing a simple line about grace saving even a soul as lost as the one singing — Ella couldn't tell exactly where the singing was coming from, but something in those words, for the first time in years, sounded less like condemnation and more like an invitation.",
          "next": "lamott_choice1"
        },
        "lamott_choice1": {
          "text": "Ella had to decide: go inside the church exactly as she was — exhausted, still drinking, with no confidence at all that she'd be welcome — or walk on by, the way she'd walked past dozens of similar buildings before, telling herself religion wasn't for her.",
          "choices": [
            {
              "label": "Go inside despite her own condition",
              "effects": {
                "faith": 10
              },
              "next": "lamott_bridgeA"
            },
            {
              "label": "Walk on by, as usual",
              "effects": {
                "faith": -10
              },
              "next": "lamott_bridgeB"
            }
          ]
        },
        "lamott_bridgeA": {
          "text": "Ella went inside and sat in the back row, still smelling of yesterday's alcohol, bracing for judgmental looks — but no one said a single reproachful word to her. A few Sundays later, listening to the same choir singing, she finally said to Christ, silently, to herself: \"Okay. You can come in\" — and she started coming back to that same small church again and again, still drinking and using drugs over the following weeks, but no longer able to fully ignore what she'd felt that first time at the door.",
          "next": "lamott_choice2"
        },
        "lamott_bridgeB": {
          "text": "Ella walked past the church that time, the way she'd walked past dozens of similar buildings before, and the drinking went on in the same old pattern for a long while yet. But the choir's singing lodged itself in her memory whether she wanted it to or not, and a few months later, finding herself near the same church again in even worse shape than the first time, she pushed the door open anyway — simply because she had nowhere else left to go.",
          "next": "lamott_choice2"
        },
        "lamott_choice2": {
          "text": "Still attending the same small church but still unable to quit drinking and using drugs on her own, Ella had to decide: tell the congregation honestly, without dressing it up, the full scale of her addiction and ask for help, or keep showing up on Sundays, hiding the real state of things behind a polite churchgoer's smile. For years she had written sharp, ironic prose about everything under the sun and was better than most at hiding, behind her words, whatever she didn't want to show — which was exactly why an honest, unvarnished account of herself was harder for her than any piece of writing had ever been.",
          "choices": [
            {
              "label": "Honestly tell the congregation about her addiction and ask for help",
              "effects": {
                "faith": 15
              },
              "next": "lamott_endLight"
            },
            {
              "label": "Keep hiding the real state of things",
              "effects": {
                "faith": -15
              },
              "next": "lamott_endDark"
            }
          ]
        },
        "lamott_endLight": {
          "text": "Ella honestly told the congregation the full scope of her addiction, and with their support, gradually — not all at once — found real sobriety. Years later she would write: \"I don't think I would be alive today if it weren't for the people of St. Andrew Presbyterian Church\" — and she described the whole unvarnished journey in her memoir \"Traveling Mercies,\" which became a bestseller and one of the most quoted modern books about faith found not in comfort, but at the bottom. End of Ella's story.",
          "next": null,
          "choices": []
        },
        "lamott_endDark": {
          "text": "Ella kept coming to church on Sundays, hiding the true scale of her addiction from the congregation behind a polite smile. Without an honest confession, and without support no one knew she needed, the road to sobriety stretched out far longer and far more painful than it might have been from the start. End of Ella's story.",
          "next": null,
          "choices": []
        }
      }
    },
    mccorvey: {
      "start": "mccorvey_intro",
      "scenes": {
        "mccorvey_intro": {
          "text": "Ivy, working as marketing director at an abortion clinic, had spent years known across the country as \"Jane Roe\" — the plaintiff in the landmark 1973 court case that legalized abortion nationwide. She had long grown used to her status as a symbol of the movement, speaking at rallies and in interviews in defense of abortion rights.",
          "next": "mccorvey_scene2"
        },
        "mccorvey_scene2": {
          "text": "In 1995, next door to the clinic where she worked, an office opened for Operation Rescue, an anti-abortion organization — the very group of activists Ivy had spent years publicly speaking out against. What struck her most wasn't their prayers right at the fence between the two offices, but her friendship with little Emily, the daughter of one of the Operation Rescue staff members — the girl kept climbing through a hole in the fence to come play near Ivy. \"I had been pro-choice for so long that I didn't know how to react to kindness and love,\" she admitted later. Against all expectations, instead of the usual hostility between the two offices, an unexpected, almost friendly rapport gradually developed across that same fence.",
          "next": "mccorvey_choice1"
        },
        "mccorvey_choice1": {
          "text": "The organization's leader, Pastor Flip Benham, repeatedly invited Ivy to talk — not about politics, but about faith. Ivy had to decide: keep her distance from people whose position she had publicly condemned for years, or finally accept the invitation and, for the first time, talk to them honestly, without rehearsed slogans on either side. In more than twenty years of public speaking on the side of the abortion rights movement, she had never once seriously asked herself whether God existed and what He thought of her own life — questions like that simply didn't fit into the political-slogan language she was used to.",
          "choices": [
            {
              "label": "Accept the invitation and talk honestly, without slogans",
              "effects": {
                "faith": 10
              },
              "next": "mccorvey_bridgeA"
            },
            {
              "label": "Keep her distance from people of opposing views",
              "effects": {
                "faith": -10
              },
              "next": "mccorvey_bridgeB"
            }
          ]
        },
        "mccorvey_bridgeA": {
          "text": "Ivy accepted Pastor Flip Benham's invitation and, for the first time in years, talked about faith rather than abortion politics with people she had previously considered her opponents. The conversations went on for weeks, gradually turning from formal chats across a fence into something resembling real friendship.",
          "next": "mccorvey_choice2"
        },
        "mccorvey_bridgeB": {
          "text": "Ivy decided to keep her distance from her new office neighbors, continuing to treat them as ideological opponents despite repeated invitations to talk. But little Emily never asked Ivy about politics and simply kept climbing through the hole in the fence to play — and a few months later, it was that same childlike simplicity, not the pastor's invitations, that finally got Ivy stopping at the fence to talk.",
          "next": "mccorvey_choice2"
        },
        "mccorvey_choice2": {
          "text": "After months of unexpected contact, Ivy had to decide whether she was ready to publicly change sides, in front of an entire country that knew her as a symbol of abortion rights — to convert to Christianity, be baptized, and join the pro-life movement, risking permanently destroying her relationships with old allies and becoming a target for criticism from both ends of the political spectrum.",
          "choices": [
            {
              "label": "Publicly change sides and be baptized",
              "effects": {
                "faith": 15
              },
              "next": "mccorvey_endLight"
            },
            {
              "label": "Stay on her former side despite personal doubts",
              "effects": {
                "faith": -15
              },
              "next": "mccorvey_endDark"
            }
          ]
        },
        "mccorvey_endLight": {
          "text": "Ivy was baptized as an evangelical Christian on August 8, 1995, by Pastor Flip Benham — the baptism, in a backyard swimming pool, was broadcast live on national television — and that same year she publicly announced her switch to pro-life views, triggering shock and a wave of criticism from her former allies in the abortion rights movement. Father Frank Pavone, who received her into the Catholic Church in 1998, stayed by her side for the next twenty-two years, until her death in 2017, when it was he who administered her last anointing and conducted her funeral. End of Ivy's story.",
          "next": null,
          "choices": []
        },
        "mccorvey_endDark": {
          "text": "Ivy, despite her personal doubts after months of contact with her new neighbors, decided to remain in her former public position, unwilling to risk her reputation as a symbol of the abortion rights movement. The inner questions about faith that had begun surfacing in her during those months she chose never to voice publicly for the rest of her life. End of Ivy's story.",
          "next": null,
          "choices": []
        }
      }
    },
    cslewis: {
      "start": "cslewis_intro",
      "scenes": {
        "cslewis_intro": {
          "text": "Theo, a young Oxford don, had been a convinced atheist since his teenage years and had spent years building a philosophical defense of that position, arguing with believing colleagues at every opportunity. He readily repeated the old argument from suffering: if God exists and is all-powerful and good, where does all the pain and evil in the world come from. But two years earlier, in Trinity Term 1929, he had already had his first breaking point: night after night in his college room he felt, in his own later words, \"the steady, unrelenting approach of Him whom I so earnestly desired not to meet,\" and in the end he gave in — got down on his knees and prayed for the first time in his life, admitting that God existed, calling himself the most dejected and reluctant convert in all England. Even after that he still didn't believe for another two years that Jesus Christ was the Son of God, and went on considering the story of Christ one myth among many.",
          "next": "cslewis_scene2"
        },
        "cslewis_scene2": {
          "text": "In the autumn of 1931, two philologist friends invited Theo on a long night walk around the college grounds known as Addison's Walk. The conversation turned to Christianity, and one of the friends began arguing that the myth of the resurrection in Christianity was unique: unlike every other myth of humankind, this one, in his words, \"works on us in the same way as the others, but with one tremendous difference — it really happened\" in actual history. Theo objected with his usual ease, but for the first time noticed that the arguments that had seemed unanswerable to him for years sounded far less certain coming from this particular friend, who knew myth as well as he did himself, than they did in his own lectures.",
          "next": "cslewis_choice1"
        },
        "cslewis_choice1": {
          "text": "Theo had to decide: take the argument seriously and let himself doubt his own longstanding unbelief in Christ right there, in the middle of the night walk, or, as usual, deflect it with his habitual irony and remain in his previous conviction. For years he had taught students the myths of different peoples and knew them better than almost any colleague — and it was precisely that knowledge, the thing he took pride in, that was for the first time turning against him.",
          "choices": [
            {
              "label": "Take the argument seriously and doubt his own unbelief",
              "effects": {
                "faith": 10
              },
              "next": "cslewis_bridgeA"
            },
            {
              "label": "Deflect the argument with irony and keep his conviction",
              "effects": {
                "faith": -10
              },
              "next": "cslewis_bridgeB"
            }
          ]
        },
        "cslewis_bridgeA": {
          "text": "Theo let himself seriously consider what he'd heard and stayed silent the whole way back, feeling for the first time in years that his resistance to Christianity, the thing he'd been so proud of, didn't rest on such solid ground after all. He later called the conversation with his friends on Addison's Walk the night his real spiritual journey began — no longer toward the simple belief in God's existence he'd reached two years earlier, but toward faith in Christ.",
          "next": "cslewis_choice2"
        },
        "cslewis_bridgeB": {
          "text": "Theo, as usual, deflected what he'd heard with his habitual irony, going home still holding his previous conviction. His friends, though, kept trying to return to that conversation in the months that followed, noticing again and again that his old certainty no longer sounded quite as firm as it once had.",
          "next": "cslewis_choice2"
        },
        "cslewis_choice2": {
          "text": "A few weeks after that night walk, during a solitary trip to the zoo in his brother's motorcycle sidecar, Theo had to admit to himself the final choice: either keep calling himself an unbeliever in Christ despite his mounting doubts, or honestly admit that on the way there he still hadn't believed, and on the way back he already had — he'd become a Christian.",
          "choices": [
            {
              "label": "Honestly admit the change that had taken place in him",
              "effects": {
                "faith": 15
              },
              "next": "cslewis_endLight"
            },
            {
              "label": "Keep calling himself an unbeliever despite his doubts",
              "effects": {
                "faith": -15
              },
              "next": "cslewis_endDark"
            }
          ]
        },
        "cslewis_endLight": {
          "text": "Theo later described the moment this way: on the way to the zoo he still didn't believe that Jesus Christ was the Son of God, and on the way back he did, though he could never pinpoint exactly when it happened. He became one of the most influential Christian writers of the twentieth century, author of \"Mere Christianity\" and \"The Chronicles of Narnia,\" and in his sermons and books he returned again and again to both turning-point nights of his life — the night he knelt and acknowledged God's existence, and the night on Addison's Walk when, for him, myth became fact. End of Theo's story.",
          "next": null,
          "choices": []
        },
        "cslewis_endDark": {
          "text": "Theo went on publicly calling himself an unbeliever in Christ for many more months, though privately he was no longer so sure of it. The inner contradiction between his growing doubts and his familiar public image as a convinced skeptic weighed on him more heavily than he was willing to admit even to his closest friends, and the same philologist friends from Addison's Walk kept waiting a long time for an answer to a conversation he never worked up the nerve to continue. End of Theo's story.",
          "next": null,
          "choices": []
        }
      }
    },
    muggeridge: {
      "start": "muggeridge_intro",
      "scenes": {
        "muggeridge_intro": {
          "text": "Arthur, a well-known British journalist and broadcaster, had spent decades building a reputation as a sharp, ironic critic of literally everything — politicians, the church, public institutions — and in 1936 he even wrote a book with the ironic title \"A Convinced Atheist.\" Few knew that as a young man, in 1925, he had written to his father: \"I want God to play tunes through me. He does, but I, the reed, am out of tune\" — an admission he preferred not to bring up in front of a camera, where he liked to repeat that organized religion was one of the most successful jokes humanity had ever played on itself.",
          "next": "muggeridge_scene2"
        },
        "muggeridge_scene2": {
          "text": "In 1969 the BBC assigned Arthur to make a documentary about a nun, little known outside India at the time, who worked among the dying poor on the streets of Calcutta — an assignment he took on without much enthusiasm, as just another routine report. He expected to film a story about showy charity, convenient material for one of his usual ironic remarks, not what actually caught him off guard in the shelters for the dying.",
          "next": "muggeridge_choice1"
        },
        "muggeridge_choice1": {
          "text": "Having filmed the material at the shelters for the dying, where the nun and her sisters of mercy worked every day among the city's most destitute people, Arthur had to decide: let what he'd seen genuinely touch him and his longstanding irony toward faith, or, as usual, edit the material with the professional detachment of a reporter, letting nothing in.",
          "choices": [
            {
              "label": "Let what he saw genuinely touch him",
              "effects": {
                "faith": 10
              },
              "next": "muggeridge_bridgeA"
            },
            {
              "label": "Edit the material with professional detachment",
              "effects": {
                "faith": -10
              },
              "next": "muggeridge_bridgeB"
            }
          ]
        },
        "muggeridge_bridgeA": {
          "text": "Arthur let what he'd seen in the Calcutta shelters genuinely touch him, and the film came out far more personal and warm than his usual ironic reports — colleagues at the BBC noted with surprise a tone in his voice quite unlike him. That film marked the beginning of his own spiritual journey, one that would stretch on for years, toward faith.",
          "next": "muggeridge_choice2"
        },
        "muggeridge_bridgeB": {
          "text": "Arthur edited the material with his usual professional detachment, trying not to let personal impressions color the report, though in the editing room he found himself lingering, every time, on the same shot — the nun quietly praying over a dying man — longer than the purely technical work required. The film came out technically flawless, but for years afterward he thought back to those few days in Calcutta as something he'd chosen not to let in at the very moment it would have mattered most.",
          "next": "muggeridge_choice2"
        },
        "muggeridge_choice2": {
          "text": "By 1982, at seventy-nine, after years of spiritual searching that had begun with that trip to Calcutta, Arthur, together with his wife Kitty, had to decide: formally enter the Catholic Church, publicly changing the image of the ironic skeptic the whole country had known him by for half a century, or stay on the sidelines, keeping his agreement with Christian ideas a private matter he told no one about.",
          "choices": [
            {
              "label": "Formally enter the Catholic Church",
              "effects": {
                "faith": 15
              },
              "next": "muggeridge_endLight"
            },
            {
              "label": "Stay on the sidelines without a public step",
              "effects": {
                "faith": -15
              },
              "next": "muggeridge_endDark"
            }
          ]
        },
        "muggeridge_endLight": {
          "text": "Arthur, together with his wife Kitty, formally became a Catholic in 1982, at seventy-nine, completely overturning the image the public had known him by across half a century of journalism. He described the step as \"a feeling of homecoming, of arriving at last at a place at the table that had been kept empty for me.\" He described his spiritual journey from \"convinced atheist\" to Christian in detail in his book \"Conversion,\" published in 1988. End of Arthur's story.",
          "next": null,
          "choices": []
        },
        "muggeridge_endDark": {
          "text": "Arthur decided to stay on the sidelines, keeping his private, unannounced agreement with the Christian ideas he'd discovered after Calcutta strictly to himself. The public went on knowing him chiefly as an ironic skeptic, never learning of the spiritual change he chose to keep an entirely private matter. End of Arthur's story.",
          "next": null,
          "choices": []
        }
      }
    },
    mcgrath: {
      "start": "mcgrath_intro",
      "scenes": {
        "mcgrath_intro": {
          "text": "Herman, a promising young scientist from Northern Ireland, became drawn to Marxism as a teenager and turned into a convinced atheist — he studied Marx's \"Capital,\" though he admitted later he found it \"stupefyingly boring,\" and was convinced that the rigorous scientific method would sooner or later push faith out of any educated person's life. In October 1971 he entered Oxford to study molecular biophysics, still fully confident in his atheism.",
          "next": "mcgrath_scene2"
        },
        "mcgrath_scene2": {
          "text": "At Oxford, Herman unexpectedly found himself surrounded by students and faculty, quite a few of them serious scientists who combined rigorous scientific work with genuine Christian faith — a combination that, by his former Marxist thinking, should have been logically impossible.",
          "next": "mcgrath_choice1"
        },
        "mcgrath_choice1": {
          "text": "It struck Herman that these people didn't simply believe in spite of science, but offered carefully reasoned arguments that he himself, used to thinking of himself as intellectually honest, couldn't immediately refute. He had to decide: seriously, scientifically, put his own atheistic convictions to the test, reading the same books and hearing the same arguments as his believing classmates, or dismiss it all as an intellectual quirk of gifted but mistaken people.",
          "choices": [
            {
              "label": "Seriously test his own atheistic convictions",
              "effects": {
                "faith": 10
              },
              "next": "mcgrath_bridgeA"
            },
            {
              "label": "Dismiss it as someone else's intellectual quirk",
              "effects": {
                "faith": -10
              },
              "next": "mcgrath_bridgeB"
            }
          ]
        },
        "mcgrath_bridgeA": {
          "text": "Herman seriously, scientifically, began testing his own atheistic views, reading Christian authors and the works of philosophers of science — in particular, those showing the limits of what science itself was even capable of answering — with the same rigor he was used to applying to scientific papers. To his own surprise, the arguments for faith held up to that scrutiny far better than he'd expected: having arrived at Oxford in October 1971 a convinced atheist, he went home for Christmas that same year a Christian.",
          "next": "mcgrath_choice2"
        },
        "mcgrath_bridgeB": {
          "text": "Herman dismissed his believing classmates' arguments as an intellectual quirk of gifted but mistaken people, continuing to call himself an atheist on strictly scientific grounds. The questions his believing classmates had asked him, though, kept surfacing in his thoughts for months afterward, left without an honest answer — and by his second year, unable to shake them off, he finally made himself honestly reread the very books he'd dismissed out of hand before, arriving at faith a few months later than he might have, but essentially by the same path his believing classmates had walked.",
          "next": "mcgrath_choice2"
        },
        "mcgrath_choice2": {
          "text": "Having earned a doctorate in molecular biophysics in 1977 and built a promising scientific career, Herman, who by then had become an ordinary but committed member of a regular parish church, had to decide where to go next: devote himself entirely to laboratory science, leaving faith a private, non-public matter, or go study theology and become an ordained priest, publicly combining his academic degree with holy orders — a choice that struck many of his scientific colleagues as contradictory and strange.",
          "choices": [
            {
              "label": "Go study theology and become a priest",
              "effects": {
                "faith": 15
              },
              "next": "mcgrath_endLight"
            },
            {
              "label": "Stay in science only, leaving faith a private matter",
              "effects": {
                "faith": -15
              },
              "next": "mcgrath_endDark"
            }
          ]
        },
        "mcgrath_endLight": {
          "text": "Herman went to study theology and became an ordained Anglican priest, without ever setting aside his scientific rigor of mind. \"Arriving at Oxford, I suddenly realized the world was bigger than I'd thought, and that made me rethink a great deal,\" he said later of that time. \"Christianity struck me as a religion that offered a better view of the world. It was a very intellectual conversion.\" Today he is one of the best-known Christian apologists, known in particular as a public opponent of the atheist Richard Dawkins, and author of \"The Dawkins Delusion?\", written in response to Dawkins's criticism of religion. End of Herman's story.",
          "next": null,
          "choices": []
        },
        "mcgrath_endDark": {
          "text": "Herman stayed in science alone, keeping his personal faith an entirely private matter that almost none of his colleagues knew about. His scientific career went on to succeed, but that rare voice — a scientist able to speak openly and persuasively about the compatibility of science and faith — never sounded in the public debates of the time. End of Herman's story.",
          "next": null,
          "choices": []
        }
      }
    },
    wallace: {
      "start": "wallace_intro",
      "scenes": {
        "wallace_intro": {
          "text": "Nick, an experienced cold-case homicide detective, had spent his career learning to trust only what could be confirmed by evidence, witness testimony, and rigorous investigative logic. By thirty-five he was a convinced atheist who considered religion a matter of feelings rather than facts, and he often told his colleagues he'd sooner close a case for lack of evidence than believe a single claim without a reliable source.",
          "next": "wallace_scene2"
        },
        "wallace_scene2": {
          "text": "His wife once talked Nick into going to a Sunday sermon, where the pastor mentioned in passing that the four gospel accounts could be compared to the statements of several independent witnesses to the same event — a comparison that, oddly enough, caught the detective's professional interest far more than the sermon itself did.",
          "next": "wallace_choice1"
        },
        "wallace_choice1": {
          "text": "Nick had to decide: seriously apply his own professional skills as an investigator to the gospel texts, as if to a real murder case with several witnesses requiring genuine verification, or dismiss the idea, deciding that religious texts were simply a category that couldn't be checked by the methods of a criminal investigation in principle. After twenty years on the force, he'd grown used to the idea that any case is eventually solved by evidence, not by ready-made conclusions, and part of him resisted applying that same principle to a question he'd spent his whole life considering a matter of faith alone, without proof.",
          "choices": [
            {
              "label": "Apply his investigative skills to examining the gospels",
              "effects": {
                "faith": 10
              },
              "next": "wallace_bridgeA"
            },
            {
              "label": "Dismiss it, considering the texts unverifiable in principle",
              "effects": {
                "faith": -10
              },
              "next": "wallace_bridgeB"
            }
          ]
        },
        "wallace_bridgeA": {
          "text": "Nick began methodically applying to the four gospels the same forensic statement-analysis method he used investigating real cold cases — cross-checking independent statements, looking for contradictions and matching details, assessing the reliability of sources. The longer he analyzed the texts this way, the more convincing their consistency and credibility looked as eyewitness historical testimony.",
          "next": "wallace_choice2"
        },
        "wallace_bridgeB": {
          "text": "Nick dismissed the idea, deciding that religious texts couldn't in principle be checked by the methods of a criminal investigation, and went back to his usual skepticism. But like the unsolved cases that kept nagging at him even after they were officially closed, the thought of the gospels he'd never personally investigated stayed lodged in him like a splinter — and a few weeks later, unable to withstand his own professional curiosity, he took up the same \"investigation\" he'd initially dismissed, simply starting it later and more reluctantly than he might have.",
          "next": "wallace_choice2"
        },
        "wallace_choice2": {
          "text": "After months of his own \"investigation\" into the gospel texts, applying the same strict criteria he was used to relying on in real criminal cases, Nick had to accept the final conclusion his own inquiry had led him to: either call the gospels reliable historical testimony, as his own methodology demanded, or discard his own findings to preserve his previous atheistic worldview.",
          "choices": [
            {
              "label": "Declare the gospels reliable testimony by his own methodology",
              "effects": {
                "faith": 15
              },
              "next": "wallace_endLight"
            },
            {
              "label": "Discard his own findings to preserve his old worldview",
              "effects": {
                "faith": -15
              },
              "next": "wallace_endDark"
            }
          ]
        },
        "wallace_endLight": {
          "text": "Nick, following his own professional criteria for the reliability of witness testimony, declared the gospel texts reliable historical evidence and, following that conclusion, arrived at personal faith. He described his method of investigation in the book \"Cold-Case Christianity\" (2013), later earned a master's degree in theology, and today teaches Christian apologetics to future ministers. End of Nick's story.",
          "next": null,
          "choices": []
        },
        "wallace_endDark": {
          "text": "Nick, at the last moment, discarded his own professional conclusions, unwilling to change his familiar atheistic worldview under the weight of what he himself, as an investigator, recognized as convincing. The inner contradiction between his professional methodology and his personal beliefs went unresolved for years, and colleagues on the force sometimes noticed that it was the unsolved cases — not the solved ones — that seemed to trouble him more than they used to. End of Nick's story.",
          "next": null,
          "choices": []
        }
      }
    },
    mcdowell: {
      "start": "mcdowell_intro",
      "scenes": {
        "mcdowell_intro": {
          "text": "Mark grew up in a home where his father, the local drunk, regularly beat his mother in front of the children — Mark later recalled that kids at school \"made jokes about my dad lying in the ditch drunk,\" and that he \"always thought it was my own fault,\" that he \"wasn't worth being around,\" since his father never once told him \"I love you\" or hugged him. He couldn't picture the preachers who spent years talking about a Heavenly Father as anything other than through the lens of his own, thoroughly unloving father — and, in his own words, he \"shut the door on God,\" burying the bitterness deep inside.",
          "next": "mcdowell_scene2"
        },
        "mcdowell_scene2": {
          "text": "In his college years, as an agnostic, Mark decided to scientifically disprove Christianity once and for all, proving to his believing classmates that the account of Christ's resurrection was nothing more than a later legend with no historical basis. He set off on a trip across Europe and the Middle East to gather historical and legal evidence against the story, considering the resurrection one of the main points he, as an unbeliever, was obligated to refute.",
          "next": "mcdowell_choice1"
        },
        "mcdowell_choice1": {
          "text": "Studying archives, historical sources, and legal arguments about the reliability of the gospel accounts, Mark discovered, with growing inner resistance, that the facts he'd gathered added up not to a refutation but, against all expectation, to confirmation of the historicity of the resurrection. He had to decide: honestly admit where the evidence he himself had collected was leading, or ignore the inconvenient facts for the sake of his original goal of writing a refutation.",
          "choices": [
            {
              "label": "Honestly admit where the evidence he collected was leading",
              "effects": {
                "faith": 10
              },
              "next": "mcdowell_bridgeA"
            },
            {
              "label": "Ignore the facts for the sake of his original goal",
              "effects": {
                "faith": -10
              },
              "next": "mcdowell_bridgeB"
            }
          ]
        },
        "mcdowell_bridgeA": {
          "text": "Mark honestly admitted that the very evidence he'd gathered consistently pointed toward the historicity of the gospel events rather than toward disproving them, as he'd originally planned. On the evening of December 19, 1959, at half past eight, alone, he turned to God for the first time not with a philosophical argument but with an actual prayer, asking to receive Jesus Christ, risen and alive, as Lord of his life. A project conceived as a devastating refutation of Christianity turned into not just an intellectual conclusion but a personal decision, the exact opposite of his original plan.",
          "next": "mcdowell_choice2"
        },
        "mcdowell_bridgeB": {
          "text": "Mark first tried to ignore the facts that were inconvenient for his original goal, spending months selecting only the sources for his planned book that supported his skeptical thesis. But the harder he tried not to notice his own findings, the more obvious it became that his selection was one-sided and unconvincing even to himself — and a few months later, abandoning his original plan for a devastating refutation, he went back, honestly this time, to the same archives and legal evidence he'd once tried to sidestep.",
          "next": "mcdowell_choice2"
        },
        "mcdowell_choice2": {
          "text": "Having come to personal faith against his own original intentions, Mark spent years avoiding thinking back to his alcoholic father, whose violence in his childhood had done so much to shape his distrust of faith. He said it was easier to believe in a resurrection two thousand years ago, proven by other people's historical sources, than to believe his own father was even capable of changing — and it was that more personal faith that demanded far more trust from him. He had to decide: find in himself the strength to forgive his father personally and try to bring him to the same faith he himself had recently found, or leave that painful part of the past closed forever.",
          "choices": [
            {
              "label": "Forgive his father and try to bring him to faith",
              "effects": {
                "faith": 15
              },
              "next": "mcdowell_endLight"
            },
            {
              "label": "Leave that part of the past closed",
              "effects": {
                "faith": -15
              },
              "next": "mcdowell_endDark"
            }
          ]
        },
        "mcdowell_endLight": {
          "text": "Mark found in himself the strength to forgive his father and tell him in person, \"Dad, I love you.\" When his father asked, astonished, how anyone could love a father like him, Mark answered that just six months earlier Jesus had saved him and turned his own hatred into love — and his father answered, \"Son, if God can do in my life what I've seen in yours, I want to give Him the chance,\" and that same evening prayed together with Mark, giving his life to Christ. Mark published the results of his own \"investigation,\" originally conceived as a refutation, in 1972 under the title \"Evidence That Demands a Verdict\" — the book went on to sell more than a million copies. End of Mark's story.",
          "next": null,
          "choices": []
        },
        "mcdowell_endDark": {
          "text": "Mark decided to leave the painful subject of his relationship with his father closed, keeping his new faith a private matter unconnected to the past. His father never heard from his son either forgiveness or the story of the change that had taken place in his life, and the book that came out later passed over that part of Mark's story in complete silence. End of Mark's story.",
          "next": null,
          "choices": []
        }
      }
    },
    gumbel: {
      "start": "gumbel_intro",
      "scenes": {
        "gumbel_intro": {
          "text": "Daniel, a graduate of an elite school and a law student at Cambridge, was a convinced atheist who considered religion a matter for the poorly educated, people unable to withstand serious intellectual scrutiny. On his law entrance exams he took particular pride in his ability to find the weak point in anyone else's argument, and his classmates' religious debates struck him as the easiest target imaginable.",
          "next": "gumbel_scene2"
        },
        "gumbel_scene2": {
          "text": "In his first year at Trinity College, several classmates turned out to be sincere believing Christians, whose calm and conviction irritated Daniel so much that he decided to prove their faith wrong in the most direct way possible — by personally reading the New Testament from beginning to end for the first time in his life, so he could then demolish their arguments with their own text.",
          "next": "gumbel_choice1"
        },
        "gumbel_choice1": {
          "text": "Reading the Gospels page by page looking for weak points for a future argument, Daniel unexpectedly discovered that the text was affecting him quite differently than he'd expected — instead of the contradictions he was looking for, he kept running into words about an inner emptiness of his own, which he'd previously written off as ordinary student fatigue rather than something demanding a response. He had to decide: honestly admit to himself that the reading was changing him, not just arming him with arguments against his friends, or keep reading purely with the cold aim of refutation, refusing to let the text touch him personally.",
          "choices": [
            {
              "label": "Honestly admit that the reading was changing him",
              "effects": {
                "faith": 10
              },
              "next": "gumbel_bridgeA"
            },
            {
              "label": "Keep reading only to refute it, refusing to give in",
              "effects": {
                "faith": -10
              },
              "next": "gumbel_bridgeB"
            }
          ]
        },
        "gumbel_bridgeA": {
          "text": "Daniel honestly admitted that reading the New Testament was changing him far more than he'd been prepared to admit, and let himself take what he'd read seriously instead of simply gathering material for an argument. By the end of his first year he had converted to Christianity himself, to the astonishment of many classmates who'd known him only as a mocking skeptic. \"I was captivated,\" he recalled later. \"It was as if I'd found what I'd been looking for my whole life.\"",
          "next": "gumbel_choice2"
        },
        "gumbel_bridgeB": {
          "text": "Daniel forced himself to finish the New Testament with the sole, cold aim of finding arguments against his friends' faith, deliberately refusing to let the text touch him personally. The formal task got done, but a sense of dissatisfaction with such a deliberately detached reading stayed with him for a long time afterward — and months later, still unable to forget what he'd read, he went back to the same text, this time no longer looking for arguments against his friends, but for an answer for himself.",
          "next": "gumbel_choice2"
        },
        "gumbel_choice2": {
          "text": "After his unexpected conversion, Daniel — who had by then earned his law degree and started a promising career as a barrister — had to decide: give up that promising career for theological training and church ministry, something he'd never previously considered, or stay in law, keeping his new faith a private matter alongside his career.",
          "choices": [
            {
              "label": "Give up his law career for theological training",
              "effects": {
                "faith": 15
              },
              "next": "gumbel_endLight"
            },
            {
              "label": "Stay in law, keeping his faith private",
              "effects": {
                "faith": -15
              },
              "next": "gumbel_endDark"
            }
          ]
        },
        "gumbel_endLight": {
          "text": "In 1982, Daniel gave up a promising career as a barrister for theological training at Oxford and became an ordained Anglican priest. \"Every question I had found an answer — right there, in the Bible,\" he said later of that first reading. From 2005 to 2022 he was vicar of Holy Trinity Brompton in London, where he developed the Alpha course — a program for introducing people to Christianity that has since reached millions of participants worldwide. The course was built on the same simple idea that had started his own story — let people read the text with their own eyes, without anyone else's ready-made conclusions, and see what happens. End of Daniel's story.",
          "next": null,
          "choices": []
        },
        "gumbel_endDark": {
          "text": "Daniel stayed in law, keeping his new faith a private matter alongside his career as a barrister. The course that might have introduced millions of people worldwide to Christianity as accessibly as the New Testament had once unexpectedly changed him stayed unwritten, and he himself would only occasionally, alone with his thoughts, wonder what might have become of that early, discarded sense of change if he'd let himself read it through to the end. End of Daniel's story.",
          "next": null,
          "choices": []
        }
      }
    },
    picard: {
      "start": "picard_intro",
      "scenes": {
        "picard_intro": {
          "text": "Maya, a talented student drawn to the exact sciences, had been a straight-A student since childhood and was convinced that belief in God was for people less gifted than herself; she openly called herself an atheist and was certain that smart people simply had no need of religion. Entering university to study electrical engineering, she had no doubt that serious science and belief in God were incompatible by definition.",
          "next": "picard_scene2"
        },
        "picard_scene2": {
          "text": "Already an adult, working as a babysitter for a neighboring couple — a doctor and his wife — Maya, year after year, got the same invitation from them to come to church together on Sundays, and year after year found an excuse to decline, once even claiming to be sick several times in a row. The neighbors eventually told her plainly that the issue wasn't really about attending church so much as what a person actually believed — and asked whether she'd at least agree to read the Bible herself, with her own eyes.",
          "next": "picard_choice1"
        },
        "picard_choice1": {
          "text": "Maya, who prided herself on never being afraid to put her own hypotheses to the test, had to decide: accept the neighbors' offer and open the most published book in human history, or, as usual, politely deflect and leave her previous certainty untouched. Secretly, even from herself, she understood that for someone used to checking everything personally, the number of times she'd turned down simply reading a book had grown suspiciously large.",
          "choices": [
            {
              "label": "Agree to read the Bible with her own eyes",
              "effects": {
                "faith": 10
              },
              "next": "picard_bridgeA"
            },
            {
              "label": "Politely deflect and leave her certainty untouched",
              "effects": {
                "faith": -10
              },
              "next": "picard_bridgeB"
            }
          ]
        },
        "picard_bridgeA": {
          "text": "Maya agreed and began reading, as the neighbors suggested, the book of Proverbs — one chapter a day for a month. To her surprise, she found there not naive pious slogans but dense, practical wisdom she could apply to her own scientific and everyday life. The reading quietly grew into a question she posed to herself as a genuine experiment: whether to risk actually trusting what she was reading about.",
          "next": "picard_choice2"
        },
        "picard_bridgeB": {
          "text": "Maya politely deflected the reading, citing being busy once again, and her previous certainty that faith was for the less gifted stayed outwardly untouched. The neighbors, though, kept inviting her in the weeks that followed, and she privately admitted to herself that each new refusal felt a little less convincing than the last — and eventually, less out of curiosity than simply to get the persistent invitations to stop, she picked up the same book and began reading it in secret from herself, though noticeably later than she might have.",
          "next": "picard_choice2"
        },
        "picard_choice2": {
          "text": "After a month of reading, already realizing that simple curiosity had turned into something more personal, Maya remembered the philosopher Pascal's argument that believing is the reasonable choice even when in doubt: the believer risks little, and the unbeliever risks everything. She decided to treat this as a genuine scientific experiment and simply try trusting God in practice, rather than remaining a mere observer on the sidelines. She had to decide: carry the experiment through to the end by personally turning to God, or remain an interested but safely neutral observer.",
          "choices": [
            {
              "label": "Carry the experiment through and turn to God",
              "effects": {
                "faith": 15
              },
              "next": "picard_endLight"
            },
            {
              "label": "Remain a neutral observer without a personal step",
              "effects": {
                "faith": -15
              },
              "next": "picard_endDark"
            }
          ]
        },
        "picard_endLight": {
          "text": "Maya decided to carry the experiment through to the end and personally turned to God — and, in her own words, felt as though an invisible weight had lifted from her shoulders, replaced by a peace she'd never known before. Years later she said: \"I used to think I was too smart to believe in God. Now I know: I was an arrogant fool, despising the greatest Mind in the cosmos — the Author of all science, mathematics, art, and everything there is to know.\" She went on to a successful scientific career, became a professor at MIT, a recognized founder of an entirely new scientific field, and one of the founders of a Christian fellowship for graduates at her university. End of Maya's story.",
          "next": null,
          "choices": []
        },
        "picard_endDark": {
          "text": "Maya decided to remain an interested but safely neutral observer, never quite bringing that month of reading to a personal step. She went on to a successful scientific career, became a professor at MIT and a recognized founder of an entirely new scientific field, but the question she had formulated for herself as a scientific experiment stayed unresolved for years to come. End of Maya's story.",
          "next": null,
          "choices": []
        }
      }
    },
    cameron: {
      "start": "cameron_intro",
      "scenes": {
        "cameron_intro": {
          "text": "Eli, a teenage actor who'd become famous for the lead role in a popular TV series, was by seventeen a convinced atheist and openly proud of it in interviews, calling religion a relic of the past. On set he was surrounded, in his own later words, by \"a self-centered logic: that he could be the god of his own world, master of his own fate\" — a thought that struck him at the time as the only reasonable one.",
          "next": "cameron_scene2"
        },
        "cameron_scene2": {
          "text": "One of the actresses on set, a sincere believer, invited Eli to church with her several times, though he always declined, considering it something between politeness and naivety on her part.",
          "next": "cameron_choice1"
        },
        "cameron_choice1": {
          "text": "After yet another refusal, the girl talked Eli into coming just once, promising never to ask again if he didn't like it. He had to decide: attend this single Sunday service out of politeness and never bring up the subject again, or come with real openness, letting himself honestly listen to what was actually being said there.",
          "choices": [
            {
              "label": "Come with real openness to hear the sermon",
              "effects": {
                "faith": 10
              },
              "next": "cameron_bridgeA"
            },
            {
              "label": "Come formally out of politeness, closed off to what he heard",
              "effects": {
                "faith": -10
              },
              "next": "cameron_bridgeB"
            }
          ]
        },
        "cameron_bridgeA": {
          "text": "Eli came to the service with an openness that surprised even himself. He sat in the back row and heard the pastor speak not of \"a big mean cop in the sky\" waiting for an excuse to punish, but of a holy, just, and righteous God who wanted people to turn away from sin and be forgiven. Listening, Eli felt, by his own account, two things at once: a sharp sense of guilt, \"like I had sinned more than anyone else on earth,\" and, at the same time, \"an incredible sense of hope.\" He walked out of the church already a different person, though he still didn't fully understand what exactly had changed.",
          "next": "cameron_choice2"
        },
        "cameron_bridgeB": {
          "text": "Eli came to the service out of politeness, having already privately decided that nothing he heard would touch him, and that day he really did walk out with a clear conscience, telling the girl she never needed to invite him again. But the pastor's words about a holy God and human sinfulness, which he'd tried not to let in at the time, began unexpectedly surfacing in his mind at night in the weeks of filming that followed — at first as random fragments, then more and more insistently, until, to his own surprise, he caught himself picking up a Bible unprompted to reread that very passage about God's holiness, the one he'd thought had passed him by unnoticed.",
          "next": "cameron_choice2"
        },
        "cameron_choice2": {
          "text": "In the following weeks, sensing that something in him really had changed after that church visit, Eli began, on his own, without anyone's invitation, opening the Bible in the evenings after filming — at first out of pure curiosity to find out what exactly had struck him, and then no longer able to stop. He had to decide: publicly, in front of the press and fans who knew him only as a young atheist teen idol, declare his new faith, or quietly work through the changes in himself, without drawing the attention of an industry that depended on his old image.",
          "choices": [
            {
              "label": "Publicly declare his new faith",
              "effects": {
                "faith": 15
              },
              "next": "cameron_endLight"
            },
            {
              "label": "Work through the changes quietly, avoiding attention",
              "effects": {
                "faith": -15
              },
              "next": "cameron_endDark"
            }
          ]
        },
        "cameron_endLight": {
          "text": "Eli decided that the most important decision of his life would be to humble himself and entrust himself to Jesus Christ as Lord of his life — \"to rely on and depend on Him the way I rely on the air I breathe,\" as he later put it — and publicly announced his conversion to Christianity, completely overturning the image the press and fans around the world had known him by. He described his journey from atheist teen idol to convinced Christian in his memoir \"Still Growing,\" and has since carried on active evangelistic ministry, including the \"Way of the Master\" project alongside preacher Ray Comfort. End of Eli's story.",
          "next": null,
          "choices": []
        },
        "cameron_endDark": {
          "text": "Eli decided to work through his own changes quietly, alone, without drawing the attention of the press or an industry used to his old image. The change that had begun after that single church visit remained an inner process, invisible to anyone else, for years to come. End of Eli's story.",
          "next": null,
          "choices": []
        }
      }
    },
    ordway: {
      "start": "ordway_intro",
      "scenes": {
        "ordway_intro": {
          "text": "Lily, a professor of English literature with a doctorate and, on the side, a competitive fencer, grew up convinced that belief in God was nothing more than superstition, unworthy of a serious, educated person at her level of training.",
          "next": "ordway_scene2"
        },
        "ordway_scene2": {
          "text": "One of the few people whose intellectual opinion Lily genuinely respected — her own fencing coach — turned out to be a practicing Christian, and in conversations with him she was surprised to discover that his faith wasn't built on blind acceptance but on the very same literary and philosophical texts she herself had spent years teaching her students.",
          "next": "ordway_choice1"
        },
        "ordway_choice1": {
          "text": "Her friend managed to persuade Lily to read, for the first time, not with professional literary distance but with genuine personal openness, several Christian authors she had previously analyzed purely as examples of the fantasy genre, without ever engaging with the worldview behind them. She had to decide: let herself read these texts as something more than literary material, or keep her usual professional distance. Her friend pointed out that over years of teaching she had broken down hundreds of stories of sacrifice and redemption as literary devices, but had never once asked herself whether those devices moved readers so unfailingly precisely because something genuinely true stood behind them.",
          "choices": [
            {
              "label": "Read these texts with genuine personal openness",
              "effects": {
                "faith": 10
              },
              "next": "ordway_bridgeA"
            },
            {
              "label": "Keep her previous professional distance",
              "effects": {
                "faith": -10
              },
              "next": "ordway_bridgeB"
            }
          ]
        },
        "ordway_bridgeA": {
          "text": "Lily let herself read these texts not as a literature professor assessing genre devices, but as an ordinary person searching for answers to her own questions — and, by her own later account, her imagination felt as though it were being \"baptized\" anew in the very same invented worlds she had spent years analyzing purely as teaching material. For the first time in years of teaching, she opened the Gospel itself — not as a literary source for a lecture on genre, but simply as a text that might have something to say to her personally — and the questions she'd spent years discussing with students at a distance suddenly sounded as though they were addressed directly to her.",
          "next": "ordway_choice2"
        },
        "ordway_bridgeB": {
          "text": "Lily kept her previous professional distance, continuing to read the same texts strictly as a literary scholar assessing style and genre devices, not as someone on a personal spiritual search. She opened the Gospel itself from time to time too, but always with a literary scholar's red pen in hand, marking narrative devices and never once letting herself read even a single chapter simply as a text addressed to her personally. The conversations with her believing friend continued, but each one ran up against the same invisible wall she never let herself cross.",
          "next": "ordway_choice2"
        },
        "ordway_choice2": {
          "text": "After long months of reading and conversations with her friend, Lily reached a point where further doubt no longer called for new arguments but for a personal decision: formally join the Christian church, publicly acknowledging the change in her own views in front of her academic colleagues, where skepticism toward religion was considered almost a professional norm, or remain in the position of an interested but neutral observer.",
          "choices": [
            {
              "label": "Formally join the church, despite her colleagues' skepticism",
              "effects": {
                "faith": 15
              },
              "next": "ordway_endLight"
            },
            {
              "label": "Remain a neutral observer without a personal decision",
              "effects": {
                "faith": -15
              },
              "next": "ordway_endDark"
            }
          ]
        },
        "ordway_endLight": {
          "text": "Lily formally joined the Catholic Church in 2012, in spite of the familiar skepticism toward religion in the academic circles where she worked. She described her journey from convinced atheist to faith in detail in her book \"Not God's Type: An Atheist Academic Lays Down Her Arms,\" which became a notable voice in contemporary Christian apologetics. End of Lily's story.",
          "next": null,
          "choices": []
        },
        "ordway_endDark": {
          "text": "Lily remained an interested but neutral observer, never quite making the final personal step despite months of reading and conversation. Her academic colleagues went on considering her someone with a professional interest in religious literature, never suspecting how close she'd come to a personal decision she never made. End of Lily's story.",
          "next": null,
          "choices": []
        }
      }
    },
    crosby: {
      "start": "crosby_intro",
      "scenes": {
        "crosby_intro": {
          "text": "Eva was born on March 24, 1820, in New York State, and at just six weeks old went blind after improper treatment of her eyes by a poorly qualified \"doctor\" called in to treat a simple cold in place of the family's usual, unavailable physician — a mistake that could never be undone. More than eighty-five years later she said she had never, for a single moment, felt a trace of resentment toward that man.",
          "next": "crosby_scene2"
        },
        "crosby_scene2": {
          "text": "As a child, neighbors and even some relatives treated the blind girl with undisguised pity, expecting her to live a limited life, largely dependent on others' help. At fifteen, Eva enrolled at the New York Institute for the Blind, where she received an education most blind children of her era never had access to.",
          "next": "crosby_choice1"
        },
        "crosby_choice1": {
          "text": "Already as a teenager, Eva had to decide how she would regard her own blindness for the rest of her life: as an unjust loss to grieve and be angry with God over, or — against all apparent logic — find in it something like a gift, one that let her see in a way sighted people never could. A teacher at the institute for the blind once told her that God hadn't made a mistake in creating her blind, and Eva found herself wondering, for the first time, whether she could actually believe that, rather than just repeat it as a comforting phrase.",
          "choices": [
            {
              "label": "Find in her blindness something like a gift",
              "effects": {
                "faith": 10
              },
              "next": "crosby_bridgeA"
            },
            {
              "label": "Consider her blindness an unjust loss and be angry with God",
              "effects": {
                "faith": -10
              },
              "next": "crosby_bridgeB"
            }
          ]
        },
        "crosby_bridgeA": {
          "text": "Eva decided to regard her own blindness not as a loss but as a special gift. She often told people who pitied her: \"Do you know that if, at my birth, I had been permitted to make just one petition, I would have asked to be born blind?\" and, when asked why, she would answer: \"Because when I get to heaven, the first face that shall ever gladden my sight will be the face of my Savior.\" She said that if not for her blindness she would never have gotten such an education or developed such a retentive memory — and that her blindness shielded her from many of the world's cruelties and injustices, ones she would otherwise have seen but been powerless to ease.",
          "next": "crosby_choice2"
        },
        "crosby_bridgeB": {
          "text": "Eva carried a quiet, unspoken resentment toward her own blindness for years, considering what had happened to her simply unjust, without any meaning at all. The same words about God making no mistakes, which others in her position found comforting, sounded to her more like a reproach — a lovely thought, easy to say and nearly impossible to truly feel. That feeling poisoned many moments of her adult life, even as, outwardly, she managed her limitations as well as any sighted peer.",
          "next": "crosby_choice2"
        },
        "crosby_choice2": {
          "text": "Starting around 1864, Eva began to be commissioned to write texts for Christian hymns to already-composed music — work that demanded speed, sometimes several texts a day, which struck many publishers as physically impossible for a blind author. She had to decide: take on this exhausting pace of work, risking that quantity would inevitably come at the cost of quality, or write rarely and carefully, remaining more an occasional than a professional hymn writer. She herself put it this way: \"It may seem a little old-fashioned, always to begin one's work with prayer, but I have made it a rule never to attempt to write a hymn without first asking the good Lord to be my inspiration.\"",
          "choices": [
            {
              "label": "Take on the exhausting pace for the sake of many hymns",
              "effects": {
                "faith": 15
              },
              "next": "crosby_endLight"
            },
            {
              "label": "Write rarely and carefully, avoiding overload",
              "effects": {
                "faith": -15
              },
              "next": "crosby_endDark"
            }
          ]
        },
        "crosby_endLight": {
          "text": "Eva took on this pace of work and, over her lifetime, wrote, by various counts, somewhere between five and a half and nine thousand Christian hymns, publishing many of them under dozens of different pen names so publishers could include several of her texts in a single hymnal without drawing extra attention to it. Among them are \"Blessed Assurance\" and \"Safe in the Arms of Jesus,\" still sung in churches around the world more than a century after her death in 1915 at the age of ninety-four. End of Eva's story.",
          "next": null,
          "choices": []
        },
        "crosby_endDark": {
          "text": "Eva decided to write rarely and carefully, avoiding the exhausting pace publishers offered her, and over her lifetime produced considerably fewer hymns than she might have. Some of them showed particular depth, but most remained known only within a narrow circle, never spreading to churches around the world the way they might have at a different pace of work. End of Eva's story.",
          "next": null,
          "choices": []
        }
      }
    },
    vujicic: {
      "start": "vujicic_intro",
      "scenes": {
        "vujicic_intro": {
          "text": "Tim was born in Melbourne, Australia, on December 4, 1982, with the extremely rare tetra-amelia syndrome — no arms and no legs at all, just one small foot with two fused toes. Doctors couldn't explain the cause of the condition to his parents beforehand — they only learned of it at the moment of birth. Tim's father, the pastor of a small church, locked himself alone in a hospital room the very first night after the birth and prayed for hours, demanding of God an answer for why exactly this had happened; years later he admitted to his son that he never got a real answer — only a peace that came gradually.",
          "next": "vujicic_scene2"
        },
        "vujicic_scene2": {
          "text": "As a child, Tim attended an ordinary school alongside able-bodied classmates thanks to changes in Australian inclusive-education law, but the teasing and constant stares of his classmates drove him into deep depression. At eight he tried for the first time to drown himself in the bathtub, and by ten he was seriously asking his mother whether he could try again.",
          "next": "vujicic_choice1"
        },
        "vujicic_choice1": {
          "text": "His mother, aware of his despair, once read aloud to him the biblical account of a man born blind, whom Christ's disciples asked whose sin — his own or his parents' — had caused the blindness, and heard the answer: no one's, it was simply so that the works of God might be displayed through him. At those words, Tim later recalled, chills ran down his skin that seemed like they shouldn't have been there — as if something inside him had finally begun falling into place. He had to decide: try on those words for his own body and attempt to see in it not a punishment but something else, or go on considering his condition a meaningless, random tragedy with no purpose at all.",
          "choices": [
            {
              "label": "Try to see in his body not a punishment but a different meaning",
              "effects": {
                "faith": 10
              },
              "next": "vujicic_bridgeA"
            },
            {
              "label": "Keep considering his condition a meaningless tragedy",
              "effects": {
                "faith": -10
              },
              "next": "vujicic_bridgeB"
            }
          ]
        },
        "vujicic_bridgeA": {
          "text": "Tim began gradually trying on the words he'd heard from his mother to his own life, wondering whether he'd been born exactly as he was so that something greater than the mere absence of arms and legs could be seen through him. Thoughts of suicide didn't vanish overnight, but for the first time in years he had a question worth staying alive for. He began praying every evening about one and the same thing — not for arms and legs, which he'd asked God for as a small child, but simply for the strength to get through the next day — and years later he admitted that it was these short, almost desperate prayers, more than the one story he'd heard as a child, that gradually pulled him out of that deep depression.",
          "next": "vujicic_choice2"
        },
        "vujicic_bridgeB": {
          "text": "Tim went on considering his condition a meaningless, random tragedy, finding nothing in the story he'd heard that seemed to apply to his own body. He kept trying to pray, as his mother had taught him, but every time the prayers slid into the same bitter question without an answer — why exactly, rather than any search for meaning. His depression deepened in his teenage years, and the question he'd asked his mother at ten kept coming back to him again and again with no coherent answer.",
          "next": "vujicic_choice2"
        },
        "vujicic_choice2": {
          "text": "At twenty-one, Tim graduated from university with a degree in accounting and financial planning — a field offering a stable, predictable office career. He had to decide: take up that stable profession and live an ordinary life, trying to draw as little attention as possible to his own body, or start speaking publicly to schoolchildren and students around the world, talking specifically about his body and his history of depression.",
          "choices": [
            {
              "label": "Start speaking publicly around the world about his story",
              "effects": {
                "faith": 15
              },
              "next": "vujicic_endLight"
            },
            {
              "label": "Take a stable profession, avoiding the public eye",
              "effects": {
                "faith": -15
              },
              "next": "vujicic_endDark"
            }
          ]
        },
        "vujicic_endLight": {
          "text": "Tim began speaking to schoolchildren and students, openly talking about his body, his childhood suicide attempts, and the Bible story that changed how he saw himself. His ministry, Life Without Limbs, has since delivered more than three and a half thousand talks in seventy-eight countries, sometimes to stadium crowds of hundreds of thousands, and he himself became one of the most recognizable Christian speakers in the world, married, and became a father of four. He still sums up his life today in a single line: \"If God can't give you a miracle, He can make you one — for someone else's sake.\" End of Tim's story.",
          "next": null,
          "choices": []
        },
        "vujicic_endDark": {
          "text": "Tim took up the stable profession of accounting, trying to live as inconspicuous and ordinary a life as possible and avoiding any unnecessary attention to his own body. The story of his childhood depression and the single Bible passage that changed how he saw himself remained known only to those closest to him, not to the thousands of schoolchildren around the world who might have heard it from him. End of Tim's story.",
          "next": null,
          "choices": []
        }
      }
    },
    hamilton: {
      "start": "hamilton_intro",
      "scenes": {
        "hamilton_intro": {
          "text": "Clara, a thirteen-year-old Hawaiian surfer already showing serious professional promise, had grown up in a Christian family used to starting the day with prayer right on the beach before the first heat. On October 31, 2003, she was lying on her board in the ocean off Tunnels Beach, waiting for a wave, when a tiger shark more than four meters long attacked her, biting off her left arm at the shoulder.",
          "next": "hamilton_scene2"
        },
        "hamilton_scene2": {
          "text": "Clara was rushed to the hospital, where surgeons fought for her life for several hours because of the massive blood loss. One of the paramedics who helped her on the way to the hospital kept repeating, \"God will never leave you nor forsake you\" — words she remembered for the rest of her life as the first thing that truly held her together in those hours. When she came to, the first thing she asked her parents wasn't about her own arm, but whether God would forgive the shark — a question the adults in the room took more as shock than as something a thirteen-year-old girl actually meant. A few days later, still in her hospital bed, she told her parents out loud that maybe God could use what had happened to her to encourage someone else — and only then did she start wondering not just about survival, but whether she would ever go back into the ocean that had nearly taken her life.",
          "next": "hamilton_choice1"
        },
        "hamilton_choice1": {
          "text": "Doctors and her parents gently suggested Clara not rush the decision to return to the sport, giving herself time to recover psychologically from the trauma. Clara had to decide: get back into the ocean on her board as soon as possible, despite her fear of another attack and her body's unfamiliar new balance without one arm, or take an open-ended pause, as the doctors advised. She remembered a Bible verse she'd learned back in Sunday school — \"I can do all things through Christ who strengthens me\" — and for the first time in her life asked herself whether she believed those words enough to stake her own body on them.",
          "choices": [
            {
              "label": "Get back into the ocean on her board as soon as possible",
              "effects": {
                "faith": 10
              },
              "next": "hamilton_bridgeA"
            },
            {
              "label": "Take an open-ended pause",
              "effects": {
                "faith": -10
              },
              "next": "hamilton_bridgeB"
            }
          ]
        },
        "hamilton_bridgeA": {
          "text": "Clara, relying on the faith she'd professed since she was five, decided to return to the ocean just a month after the attack, relearning how to balance on the board with one arm. The first heats were physically and psychologically brutal, but each time she went back out in the water, a little more of the confidence the shark had nearly taken along with her arm came back to her.",
          "next": "hamilton_choice2"
        },
        "hamilton_bridgeB": {
          "text": "Clara took an open-ended pause, as the doctors advised, trying first to fully recover psychologically from the trauma. The longer the pause lasted, the harder it became to work up the nerve to return — her body's old reflexes now required relearning balance with one arm, and her fear of the ocean only grew stronger over the months away from the water. She almost stopped praying about going back to the ocean, because every time she started such a prayer she caught herself realizing she wasn't really asking for courage, but for the question to somehow just dissolve on its own. In the end she didn't get back on the board until more than a year later, almost by accident, with no decisive turning point — and the years that might have gone into a confident climb in the sport went instead into simply making up for lost time.",
          "next": "hamilton_choice2"
        },
        "hamilton_choice2": {
          "text": "Years of hard training later, Clara, by then a professional athlete, faced a choice ahead of a major international surfing competition: compete on equal terms with able-bodied athletes with no allowances for her disability, publicly risking losing in front of the whole world, or compete only in a special adaptive category, where the risk of a public loss was far lower. Before answering the organizers, she remembered the same Sunday-school verse about the strength Christ gives, and for the first time in a long while prayed not for a result, but for the decision itself to come from faith rather than simply from fear of repeating her old hesitation.",
          "choices": [
            {
              "label": "Compete on equal terms with able-bodied athletes",
              "effects": {
                "faith": 15
              },
              "next": "hamilton_endLight"
            },
            {
              "label": "Compete only in the adaptive category",
              "effects": {
                "faith": -15
              },
              "next": "hamilton_endDark"
            }
          ]
        },
        "hamilton_endLight": {
          "text": "Clara decided to compete on equal terms with able-bodied athletes, with no special allowances, relying on her faith and hard training rather than special conditions. Her story was later told in the memoir \"Soul Surfer,\" which was made into a film of the same name in 2011, and she became a well-known professional surfer and Christian speaker, regularly appearing in churches and on college campuses around the world. Years later she explained what happened just as simply as she had as a girl in her hospital bed: \"Maybe God can use what happened to me to encourage someone else\" — and in the end, that's exactly what happened. End of Clara's story.",
          "next": null,
          "choices": []
        },
        "hamilton_endDark": {
          "text": "Clara decided to compete only in the special adaptive category, avoiding the direct risk of a public loss alongside able-bodied athletes. Her professional career continued within narrower, less visible limits, and the story of her comeback never received the wide attention that might have inspired many other people with similar injuries. End of Clara's story.",
          "next": null,
          "choices": []
        }
      }
    },
    donpiper: {
      "start": "donpiper_intro",
      "scenes": {
        "donpiper_intro": {
          "text": "Sam, a Baptist pastor from Texas, was driving back from a Christian conference on January 18, 1989, crossing a bridge over a river when a head-on collision with a semi-truck completely crushed his car. Arriving paramedics pronounced him dead at the scene and covered his body with a tarp, waiting to transport it to the morgue.",
          "next": "donpiper_scene2"
        },
        "donpiper_scene2": {
          "text": "Another pastor happened to be driving past the accident scene and, learning that a preacher he knew was under the wreckage, insisted on going over to the covered body to pray, despite the paramedics' objections, since they had already officially recorded the death. He wasn't asking for a resurrection — he simply repeated aloud lines from a psalm the two pastors had read together at the conference the day before, unable to find other words in the face of what looked final. The police reluctantly let him stay by the body for a few minutes.",
          "next": "donpiper_choice1"
        },
        "donpiper_choice1": {
          "text": "The pastor, kneeling by the body in the rain, surrounded by skeptical paramedics urging him to hurry up and stop getting in the way of evacuating other victims, had to decide: cut the prayer short under the pressure of the situation, or keep praying insistently and out loud despite the obvious disapproval around him. He wasn't asking for a spectacle or for proof to satisfy the skeptics nearby — he was simply repeating his friend's name to the Lord, the way he would repeat the name of anyone dear to him that no one else was left to care for.",
          "choices": [
            {
              "label": "Keep praying insistently despite the pressure around him",
              "effects": {
                "faith": 10
              },
              "next": "donpiper_bridgeA"
            },
            {
              "label": "Cut the prayer short under the pressure of the situation",
              "effects": {
                "faith": -10
              },
              "next": "donpiper_bridgeB"
            }
          ]
        },
        "donpiper_bridgeA": {
          "text": "The pastor kept praying insistently and out loud over the body, despite the paramedics' obvious disapproval, and at some point, running out of words, quietly began singing the hymn \"What a Friend We Have in Jesus,\" which he and Sam had sung together at the conference the day before. About ninety minutes after the death had been officially recorded, Sam, under the tarp, suddenly stirred and began singing along to the same hymn — the stunned paramedics immediately called for additional help.",
          "next": "donpiper_choice2"
        },
        "donpiper_bridgeB": {
          "text": "The pastor cut the prayer short earlier than he wanted to, under pressure from impatient paramedics hurrying him to clear the area for evacuating other victims. The body under the tarp showed no further signs of life, and it was taken, as officially recorded at the scene, not straight to the cemetery but to the hospital morgue for standard processing. There, on arrival, staff on duty happened to notice faint signs of life — Sam was saved, but without that direct, inexplicable coincidence with the prayer and shared hymn that he would have experienced had the pastor kept praying to the end.",
          "next": "donpiper_choice2"
        },
        "donpiper_choice2": {
          "text": "Coming to in the hospital, Sam spent months in agonizing treatment for multiple fractures and thirty-four operations in a row, and on one of those nights, by his own later admission, hit a genuine emotional and spiritual bottom of despair. It was then that he decided: if he was going to live with this pain going forward, it wouldn't be for his own sake alone, but so that his own trouble could help someone else caught in something similar. He asked for a Bible and, for many days in a row, reread the very passages about heaven he had quoted to his congregation dozens of times before the accident, beginning and ending each reading with a prayer of thanks simply for being able to read at all. He had to decide what to do with the memory of what he'd experienced during those ninety minutes: keep it as a purely personal, unspeakable experience best left unmentioned, or describe it in full, risking the disbelief and mockery of skeptics, in a book for the general public.",
          "choices": [
            {
              "label": "Describe what happened in detail in a book for the public",
              "effects": {
                "faith": 15
              },
              "next": "donpiper_endLight"
            },
            {
              "label": "Keep it as a personal, unspeakable experience",
              "effects": {
                "faith": -15
              },
              "next": "donpiper_endDark"
            }
          ]
        },
        "donpiper_endLight": {
          "text": "Sam decided to describe what he'd experienced in detail, despite the risk of skeptics' disbelief and mockery, and in 2004 his book \"90 Minutes in Heaven\" was published — it became a New York Times bestseller and sold more than six million copies, inspiring countless readers who had survived serious trauma or lost loved ones. Sam kept saying in his sermons for the rest of his life that if that pastor hadn't stayed praying in the rain when everyone around him demanded he leave, neither the book nor this testimony would exist at all. End of Sam's story.",
          "next": null,
          "choices": []
        },
        "donpiper_endDark": {
          "text": "Sam decided to keep what he'd experienced as a purely personal, unspeakable experience, limiting his account to only those closest to him and privately continuing to thank God for the ninety minutes the world never learned about. The book that might have inspired millions of readers around the world who had survived serious trauma remained unwritten. End of Sam's story.",
          "next": null,
          "choices": []
        }
      }
    },
    norton: {
      "start": "norton_intro",
      "scenes": {
        "norton_intro": {
          "text": "Jarrod, a freshman on the American college football team at Luther College, collided with an opponent in October 2010 while trying to physically stop his run with the ball, and in that collision suffered a severe spinal injury: doctors gave him only a three-percent chance of ever feeling movement below the neck again. Already in the ICU, trying to grasp this new reality, he didn't pray for healing — he prayed something else: \"Can You give me even a glimpse of what's ahead? Can You show me how any of this could possibly add up to something good — I'm just trying to understand the point of this pain.\" He repeated that same prayer over and over in the first weeks after the injury, still not knowing the answer.",
          "next": "norton_scene2"
        },
        "norton_scene2": {
          "text": "Jarrod spent the following months at a rehabilitation center, where the program was built around realistic, modest goals — learning to feed himself, not returning to full mobility, which doctors considered practically impossible with such a diagnosis. Jarrod's girlfriend, Emily, decided to stay by his side through the entire rehabilitation, despite the uncertain prognosis, and every night before bed the two of them would together thank God out loud for at least one more day lived — a habit from their college church that the injury hadn't taken away along with movement below his neck.",
          "next": "norton_choice1"
        },
        "norton_choice1": {
          "text": "Jarrod had to decide what goal to set for his rehabilitation: accept the doctors' realistic prognosis and focus on manageable daily-living skills, or, against the statistics and the specialists' opinions, set himself the goal of someday standing and walking even a few steps on his own again. In one of the evening prayers with Emily, he honestly admitted he didn't know whether that miracle was part of God's plan, but he knew for certain he didn't want to spend the rest of his life wondering whether he would have tried to fight for it, if only he'd decided to back then.",
          "choices": [
            {
              "label": "Set the goal of standing and walking a few steps again",
              "effects": {
                "faith": 10
              },
              "next": "norton_bridgeA"
            },
            {
              "label": "Accept the realistic prognosis and set no extra goals",
              "effects": {
                "faith": -10
              },
              "next": "norton_bridgeB"
            }
          ]
        },
        "norton_bridgeA": {
          "text": "Jarrod, against the statistics and the specialists' opinions, set himself the goal of someday standing on his feet again, and together with his physical therapists worked out an exhausting exercise program, repeated day after day, beyond what the standard rehabilitation protocol called for. Before every grueling session, he and Emily prayed out loud right there in the rehab gym, unembarrassed by the other patients — and progress crawled forward agonizingly slowly, but with each month came the first, barely noticeable signs of control over muscles below his neck, which Jarrod privately called nothing less than answered prayer.",
          "next": "norton_choice2"
        },
        "norton_bridgeB": {
          "text": "Jarrod accepted the doctors' realistic prognosis and focused on manageable daily-living skills, not setting himself the goal of walking again. He didn't give up the evening prayers with Emily, but now they held more submission than petition — he thanked God for what he had and asked for help accepting what, it seemed, would never change. His rehabilitation proceeded within the outcome the specialists had predicted, without the unexpected breakthroughs that sometimes happen for patients who set their sights beyond the official prognosis.",
          "next": "norton_choice2"
        },
        "norton_choice2": {
          "text": "By the time of his own graduation in May 2015, after years of grueling training and prayers he and Emily had never given up, Jarrod could take a few unsteady steps with support. The night before the ceremony, he prayed alone for a long time, asking not for a new miracle but for the courage not to hide behind the easier, safer option, if his body would in fact let him take the risk. He had to decide: cross the graduation stage with everyone else in a wheelchair, the simpler and safer choice, or risk walking the few meters to the stage on his own feet, holding Emily's hand, in front of the whole audience.",
          "choices": [
            {
              "label": "Walk to the stage on his own feet in front of everyone",
              "effects": {
                "faith": 15
              },
              "next": "norton_endLight"
            },
            {
              "label": "Ride in the wheelchair, as the simpler, safer choice",
              "effects": {
                "faith": -15
              },
              "next": "norton_endDark"
            }
          ]
        },
        "norton_endLight": {
          "text": "Jarrod worked up the nerve to walk the few meters to the graduation stage on his own feet, holding Emily's hand — video of the moment drew more than three hundred million views worldwide and became the basis for the documentary \"7 Yards: The Chris Norton Story.\" At his own wedding, he walked not just a few meters to a stage but the entire aisle to the altar beside Emily on his own feet. A few years later the couple decided to bring foster children into their family, asking themselves just one question: \"What if we'd said no?\" — and within just three months they adopted five girls. Jarrod explains this step with a single line that, for him, became the continuation of that very prayer from the ICU: \"God's plans are always bigger and better than our own — we can't wait to see how He uses us next.\" End of Jarrod's story.",
          "next": null,
          "choices": []
        },
        "norton_endDark": {
          "text": "Jarrod decided to cross the graduation stage in a wheelchair, the safer and simpler choice after years of grueling rehabilitation. The moment passed unnoticed by anyone outside his circle, and the story that might have inspired millions of people around the world remained known only to his own family and close friends. He didn't give up those evening prayers with Emily even after rehabilitation, though he admitted later that in those years they sounded more like habit than like a conversation with Someone who was actually listening. End of Jarrod's story.",
          "next": null,
          "choices": []
        }
      }
    },
    millard: {
      "start": "millard_intro",
      "scenes": {
        "millard_intro": {
          "text": "Myron, the future musician of the band MercyMe, grew up with a father nicknamed Bub — once a Texas high-school football star, whose life changed after a serious truck accident and an eight-week coma. After the accident his father grew violent and regularly beat Myron all the way through high school, and on Sundays the whole family would still go to church, where his father sang in the choir as though nothing had happened at home the night before — that split Myron remembered for the rest of his life, long before he had a word for it: hypocrisy.",
          "next": "millard_scene2"
        },
        "millard_scene2": {
          "text": "Myron grew up trying to spend as little time at home as possible, gradually building a music career far away from his father, whose relationship with him never healed after years of abuse. As a young man he prayed for the same thing more than once — not for God to punish his father, but for the ability to someday forgive him, even though he himself didn't believe such forgiveness was even possible. When his father fell seriously ill and doctors said he didn't have long to live, Myron had to decide how to spend the time that was left.",
          "next": "millard_choice1"
        },
        "millard_choice1": {
          "text": "Myron had to decide: go to his dying father and try to forgive him for years of beatings, risking facing again the very man who had caused him so much pain as a child, or keep his distance, letting his father die with no reconciliation between them at all. He remembered the words about forgiving seventy times seven that he'd heard as a child in church, but hearing them from a pulpit was one thing, and applying them to his own father was something else entirely.",
          "choices": [
            {
              "label": "Go to his father and try to forgive him",
              "effects": {
                "faith": 10
              },
              "next": "millard_bridgeA"
            },
            {
              "label": "Keep his distance, without pursuing reconciliation",
              "effects": {
                "faith": -10
              },
              "next": "millard_bridgeB"
            }
          ]
        },
        "millard_bridgeA": {
          "text": "Myron went to his dying father and, working through years of pain, forgave him for the years of beatings, spending the last months of his father's life by his side. To Myron's surprise, his father came to faith during that time too, changing completely before he died — a reconciliation Myron never expected to get. He later summed it up in one line: \"My dad was a monster — and I watched, with my own eyes, God change him.\" By the time of his death, his father had become, in Myron's words, not just his best friend but the most God-fearing man he'd ever known.",
          "next": "millard_choice2"
        },
        "millard_bridgeB": {
          "text": "Myron decided to keep his distance, letting his father die without any personal reconciliation between them. Years later he admitted the decision left behind an unhealed wound that surfaced at the most unexpected moments of his adult life.",
          "next": "millard_choice2"
        },
        "millard_choice2": {
          "text": "After his father's death in 1991, Myron stood at the graveside with his family, and his grandmother quietly said one line: \"I can only imagine what Bub is seeing right now.\" Those words stuck in his head for years afterward. Trying to work out in prayer the unexpected conversion of a man who had beaten him for years, Myron had to decide what to do with the story in his own songwriting: write a song directly based on his grandmother's words at the graveside and his own thoughts about heaven, risking publicly exposing the most painful part of his personal history to millions of listeners, or leave the subject entirely private, never bringing it to the stage.",
          "choices": [
            {
              "label": "Write a song based on the reconciliation he experienced",
              "effects": {
                "faith": 15
              },
              "next": "millard_endLight"
            },
            {
              "label": "Leave the subject private, never bring it to the stage",
              "effects": {
                "faith": -15
              },
              "next": "millard_endDark"
            }
          ]
        },
        "millard_endLight": {
          "text": "Myron wrote the song \"I Can Only Imagine,\" basing it on his grandmother's words at his father's graveside — by his own account, the lyrics came together almost immediately, in a matter of minutes. The song sold more than two million copies and became one of the most recognizable Christian songs of its generation, and in 2018 a full-length film was made based on the story. End of Myron's story.",
          "next": null,
          "choices": []
        },
        "millard_endDark": {
          "text": "Myron decided to leave the story of his relationship with his father entirely private, never turning it into material for a song. His music career continued along familiar themes, but the one song that could have moved millions of listeners with that same story remained unwritten, and Myron himself went on praying for a long time for the same forgiveness he'd prayed for as a young man, no longer sure whether he'd truly forgiven his father or had simply stopped talking about him out loud. End of Myron's story.",
          "next": null,
          "choices": []
        }
      }
    },
    camp: {
      "start": "camp_intro",
      "scenes": {
        "camp_intro": {
          "text": "Steve, a young Christian musician, met Melissa at a Christian college — she was already battling stage-three ovarian cancer, but shortly before the wedding doctors declared her completely healthy, and in the fall of 2000 they married, full of hope for a long life together. At the wedding they sang each other lines from a psalm about the Lord being their light and salvation, and the whole church would later remember how effortlessly, how untouched by any shadow, those words sounded that day.",
          "next": "camp_scene2"
        },
        "camp_scene2": {
          "text": "Right after the honeymoon, Melissa's cancer came back and spread rapidly through her body — doctors said there was now almost no chance of recovery. When Melissa learned this, she kept repeating the same line to Steve: \"If even one person gives their life to Christ because of what I'm going through, it will have been worth it.\" Friends from church came to pray with them almost every evening, and Steve later admitted that it was in those months that he first truly understood the difference between the faith that's easy to sing about from a stage and the faith you have to hold onto when a prayer for healing seems to go unanswered. Steve, married only a few weeks, had to decide how to spend the time left with his wife, knowing it might be measured in weeks.",
          "next": "camp_choice1"
        },
        "camp_choice1": {
          "text": "Steve had to decide: spend the remaining months beside Melissa in open, honest prayer for a miraculous healing, holding on to hope until the very last day, or brace himself inwardly ahead of time for the inevitable outcome, to make the loss easier to bear when it came. He couldn't find in Scripture a direct promise that prayer would necessarily heal her particular body, and it was that very uncertainty that tormented him more than the diagnosis itself — because bracing for the worst ahead of time meant risking his faith just as much as continuing to hope did.",
          "choices": [
            {
              "label": "Pray for a miracle until the very last day",
              "effects": {
                "faith": 10
              },
              "next": "camp_bridgeA"
            },
            {
              "label": "Brace himself inwardly for the inevitable outcome",
              "effects": {
                "faith": -10
              },
              "next": "camp_bridgeB"
            }
          ]
        },
        "camp_bridgeA": {
          "text": "Steve kept praying for a miraculous healing beside Melissa all the way to the last day, refusing to prepare himself inwardly for the worst ahead of time. Melissa died on February 5, 2001, just three and a half months after the wedding, spending her final minutes in worship and praise of the Lord rather than in fear — the prayer for physical healing wasn't answered the way Steve had hoped, but his faith itself, by his own later account, never once wavered in those final months.",
          "next": "camp_choice2"
        },
        "camp_bridgeB": {
          "text": "Steve braced himself inwardly for the inevitable outcome ahead of time, trying to prepare emotionally for the loss before it happened. Melissa died on February 5, 2001, just three and a half months after the wedding, and Steve later admitted that this advance resignation didn't so much ease his grief as rob him of what could have been his last weeks of full, hope-filled closeness with his wife.",
          "next": "camp_choice2"
        },
        "camp_choice2": {
          "text": "After Melissa's death, Steve spent a long time crying out to God with the question \"why,\" even though he'd promised himself never to ask it — and one day, as he later told it, he heard a clear answer inside himself: \"Steve, I don't always want you to know why — because I want you to have a testimony of walking by faith.\" He had to decide what to do with the music he'd written during those months: keep the songs as a private diary of grief, never showing them to anyone, or release them to the public, knowing he'd have to publicly relive that loss again and again at every concert for the rest of his career.",
          "choices": [
            {
              "label": "Release the songs to the public",
              "effects": {
                "faith": 15
              },
              "next": "camp_endLight"
            },
            {
              "label": "Keep the songs a private, unshown diary",
              "effects": {
                "faith": -15
              },
              "next": "camp_endDark"
            }
          ]
        },
        "camp_endLight": {
          "text": "Steve released the songs he'd written during the months of illness and after Melissa's death, including the title track \"I Still Believe\" and \"Walk by Faith,\" written back on their honeymoon — they became some of the most recognizable songs in Christian music, helping thousands of listeners going through their own grief and loss. Years later, a listener told Steve that \"Walk by Faith\" was the last song her dying friend ever heard before she passed. In 2020 a full-length film based on the story was made, starring KJ Apa and Britt Robertson. End of Steve's story.",
          "next": null,
          "choices": []
        },
        "camp_endDark": {
          "text": "Steve kept the songs he wrote during those months as a private diary of grief, never showing them to the public. Music that could have comforted thousands of listeners going through their own loss stayed in a drawer, known only to himself. End of Steve's story.",
          "next": null,
          "choices": []
        }
      }
    },
    davis: {
      "start": "davis_intro",
      "scenes": {
        "davis_intro": {
          "text": "Rose, an eighteen-year-old American high school graduate with bright prospects of admission to a top university back home, went on a short volunteer trip to Uganda — and, against her own plans, decided to stay far longer than intended. She'd grown up in a believing family and had heard the biblical command to care for widows and orphans since childhood, but it was only in Uganda, holding an actual hungry child in her arms for the first time, that she felt the difference between simply believing those words and actually living them.",
          "next": "davis_scene2"
        },
        "davis_scene2": {
          "text": "Rose's parents and friends, once she was back home after that first trip, expected her to enroll in college that fall along with the rest of her classmates, just as she'd always planned. Instead, Rose found herself thinking more and more about the specific children she'd met in Uganda — many of them with no one to feed or teach them each day.",
          "next": "davis_choice1"
        },
        "davis_choice1": {
          "text": "Rose had to decide: give up the university place her parents and whole family were counting on and go back to Uganda indefinitely, or follow the expected, familiar path and enroll in college with her peers. She prayed not for God to confirm a decision she'd already made, but simply for the courage to admit what He actually wanted from her, even if the answer turned out to be inconvenient for her whole family. \"It feels like You're asking me to be completely, completely, completely Yours,\" she wrote later about that inner struggle.",
          "choices": [
            {
              "label": "Give up college and return to Uganda",
              "effects": {
                "faith": 10
              },
              "next": "davis_bridgeA"
            },
            {
              "label": "Enroll in college, as her parents expected",
              "effects": {
                "faith": -10
              },
              "next": "davis_bridgeB"
            }
          ]
        },
        "davis_bridgeA": {
          "text": "Rose gave up her place at college, to her parents' deep concern, and went back to Uganda — no longer as a short-term volunteer, but as someone planning to stay for the long haul. In 2008 she officially founded Amazima Ministries — the name itself means \"truth\" in Luganda — beginning with feeding and educating a few dozen children in her own neighborhood.",
          "next": "davis_choice2"
        },
        "davis_bridgeB": {
          "text": "Rose followed the path expected of her and enrolled in college with her peers, trying to leave Uganda behind as a vivid but finished adventure of her youth. But the faces of the specific children she'd met on that first trip wouldn't leave her alone through her whole first semester, and by winter break she had already decided to withdraw from school and return to Uganda — the same road, just a few months later and with far more doubt about the wisdom of the delay.",
          "next": "davis_choice2"
        },
        "davis_choice2": {
          "text": "By twenty-three, having lived in Uganda for several years and now running a growing ministry that had begun with that youthful prayer about specific children, Rose faced another decision: formally adopt several orphaned girls she knew personally, taking on full legal and parental responsibility at twenty-three, unmarried, or keep helping them as a volunteer caregiver without formal adoption.",
          "choices": [
            {
              "label": "Formally adopt the orphaned girls",
              "effects": {
                "faith": 15
              },
              "next": "davis_endLight"
            },
            {
              "label": "Keep helping without formal adoption",
              "effects": {
                "faith": -15
              },
              "next": "davis_endDark"
            }
          ]
        },
        "davis_endLight": {
          "text": "Rose officially adopted thirteen orphaned girls by the time she was twenty-three, taking on full parental responsibility on her own. She told her story in the book \"Kisses from Katie,\" which became a New York Times bestseller, and in 2015 she married missionary Benji, continuing to run Amazima Ministries, which today cares for thousands of children in Uganda. Rose summed up what happened to her in one line: \"Jesus wrecked my life — shattered it to pieces — and put it back together, so much more beautiful.\" End of Rose's story.",
          "next": null,
          "choices": []
        },
        "davis_endDark": {
          "text": "Rose continued helping the girls as a volunteer caregiver without formalizing an adoption, which left their legal status uncertain for years to come. The ministry kept growing, but without the personal, permanent responsibility that formal adoption could have given, the fate of those specific children remained more vulnerable to possible changes. End of Rose's story.",
          "next": null,
          "choices": []
        }
      }
    },
    baker: {
      "start": "baker_intro",
      "scenes": {
        "baker_intro": {
          "text": "Stacy married Roland, a third-generation missionary, in 1980, and together they founded a small ministry helping needy children in various countries — but for decades they searched for the place where their work would be needed most. As a young woman, Stacy had prayed one short prayer that she went on repeating for the rest of her life: show her the most destitute children on earth, and give her the strength to stay with exactly them, rather than with those who would be easier and safer to help.",
          "next": "baker_scene2"
        },
        "baker_scene2": {
          "text": "In the mid-1990s, Mozambique was considered the poorest country in the world after a long civil war that had destroyed nearly all its infrastructure. Stacy and Roland were offered several more comfortable, safer places for ministry, where infrastructure and supplies were far more reliable, but Stacy kept returning in her mind to that childhood prayer and to the line from the Gospel that whatever is done for one of the least of these is done for Christ Himself.",
          "next": "baker_choice1"
        },
        "baker_choice1": {
          "text": "Stacy had to decide: move specifically to Mozambique, the poorest and most war-shattered country of all the options offered, where there was almost no infrastructure even for basic survival, or choose a more prosperous country, where organizing a ministry would be far simpler and safer. Roland reminded her of that same childhood prayer, and they both agreed that having spent years asking God to show them the place of greatest need, it would be strange to flinch now from His answer just because it turned out to be the hardest one of all.",
          "choices": [
            {
              "label": "Move to Mozambique despite the shattered infrastructure",
              "effects": {
                "faith": 10
              },
              "next": "baker_bridgeA"
            },
            {
              "label": "Choose a more prosperous, safer country",
              "effects": {
                "faith": -10
              },
              "next": "baker_bridgeB"
            }
          ]
        },
        "baker_bridgeA": {
          "text": "Stacy and Roland moved to Mozambique in 1995 and focused their ministry on the Makua people, one of the poorest ethnic groups in the country, barely reached by Christian mission before. The first months were so grueling, without even reliable drinking water, that by the following summer Stacy was physically exhausted and came down with double pneumonia. In the summer of 1996, on her way to a prayer conference in Toronto, she prayed one short line: \"Lord, if You don't touch me now, I'm ready to give it all up and go work in an ordinary store\"; a stranger prayed over her there, and Stacy returned to Mozambique healed and, by her own account, having seen God closer than at any other point in her life.",
          "next": "baker_choice2"
        },
        "baker_bridgeB": {
          "text": "Stacy and Roland seriously considered the more prosperous, safer country, where the logistics would have been far simpler to manage. But no open doors or invitations ever came from there, and the one real offer — a war-shattered orphanage in Maputo — kept bringing them back to that same Mozambique, only now without the deliberate step of faith that might have been its foundation, arriving there instead mostly for lack of other options.",
          "next": "baker_choice2"
        },
        "baker_choice2": {
          "text": "Years into working among Mozambique's poorest population, as the ministry began growing and demanding more and more resources, Stacy had to decide: keep expanding the ministry deeper into the country's most remote and dangerous rural areas, places no one had dared go before, or settle down and stabilize the work already established in more accessible urban areas. She remembered once complaining to Christ in prayer that it was physically impossible to feed all the children, and hearing in reply: \"There will always be enough, because I died for them\" — a promise she now had to either put to the test in the hardest places or leave untested.",
          "choices": [
            {
              "label": "Keep expanding into the most remote areas",
              "effects": {
                "faith": 15
              },
              "next": "baker_endLight"
            },
            {
              "label": "Settle in the already-established urban areas",
              "effects": {
                "faith": -15
              },
              "next": "baker_endDark"
            }
          ]
        },
        "baker_endLight": {
          "text": "Stacy went on expanding the ministry deep into Mozambique's most remote rural areas, places almost no one had reached before. Today the organization she and Roland founded, Iris Global, has more than four thousand missionaries and staff in thirty-eight countries and feeds around thirty thousand people in need every day around the world. End of Stacy's story.",
          "next": null,
          "choices": []
        },
        "baker_endDark": {
          "text": "Stacy decided to settle down and stabilize the work in the already-established urban areas, choosing not to risk expanding into the most remote and dangerous rural territories. The ministry stayed stable and useful to those it already reached, but thousands of people in the country's most remote and needy regions were left without the help they might otherwise have received. End of Stacy's story.",
          "next": null,
          "choices": []
        }
      }
    },
    caine: {
      "start": "caine_intro",
      "scenes": {
        "caine_intro": {
          "text": "Claudia was thirty-three when she happened to learn she'd been adopted as an infant — the parents who raised her had never told her before, and the circumstances of her birth, including the identity of her biological parents, remained almost entirely unknown to her. A believer since childhood, she'd heard many times in church that every person is not an accident but a design, but it was this discovery that first made her seriously wonder whether that design extended to her own, so tangled, origins as well. She later said of that moment: \"It took as much faith to trust that adoption document as it takes to trust the truth of who I am in Christ — and what I chose to trust in that moment would determine the outcome of my entire life.\"",
          "next": "caine_scene2"
        },
        "caine_scene2": {
          "text": "On top of this discovery, Claudia had suffered sexual abuse from early childhood until she was fifteen — trauma she stayed silent about for decades, trying to build an outwardly successful adult life over that unspoken pain. Learning about her adoption at thirty-three stirred up everything she had kept buried for years.",
          "next": "caine_choice1"
        },
        "caine_choice1": {
          "text": "Claudia had to decide: for the first time in her life, seriously work through both the circumstances of her own origins and the abuse she'd suffered, seeking help and speaking openly about it with the people closest to her, or keep both subjects closed the way she had for all thirty-three years before. She prayed not for the pain to simply disappear on its own, but for the courage to finally speak it out loud to her husband Nick for the first time, knowing that naming it wasn't the same as living through it again.",
          "choices": [
            {
              "label": "Seriously face the past for the first time and speak openly about it",
              "effects": {
                "faith": 10
              },
              "next": "caine_bridgeA"
            },
            {
              "label": "Keep these subjects closed, as before",
              "effects": {
                "faith": -10
              },
              "next": "caine_bridgeB"
            }
          ]
        },
        "caine_bridgeA": {
          "text": "Claudia, for the first time in her life, began speaking openly about the abuse she'd suffered and the circumstances of her own origins with the people closest to her, including her husband Nick. Alongside that, she took up memorizing Bible verses one after another — a simple practice that, by her own later account, gradually rewrote what she'd grown used to believing about herself. The process was agonizingly difficult, but for the first time in three decades she stopped carrying that weight entirely alone.",
          "next": "caine_choice2"
        },
        "caine_bridgeB": {
          "text": "Claudia decided to keep both subjects closed, the way she had for all the years before, continuing to maintain an outwardly successful image of adult life. The unspoken pain went on shaping her decisions and relationships in ways she herself couldn't always fully recognize.",
          "next": "caine_choice2"
        },
        "caine_choice2": {
          "text": "Years later, learning that countless women around the world experience a far more direct and systematic form of that same abuse — human trafficking and sexual exploitation — Claudia kept returning to the same thought from her own notes of that time: \"God can take the mess of our past and turn it into a message; He takes our trials and turns them into a testimony.\" She had to decide: found, together with her husband, an entire international organization to fight this problem, taking on an enormous organizational and emotional burden, or limit herself to her own personal healing, without scaling the subject up to public advocacy.",
          "choices": [
            {
              "label": "Found an international organization against human trafficking",
              "effects": {
                "faith": 15
              },
              "next": "caine_endLight"
            },
            {
              "label": "Limit herself to personal healing, without public advocacy",
              "effects": {
                "faith": -15
              },
              "next": "caine_endDark"
            }
          ]
        },
        "caine_endLight": {
          "text": "Claudia, together with her husband Nick, founded The A21 Campaign in 2008 to fight human trafficking worldwide — today the organization works in dozens of countries, helping victims of exploitation find freedom and restoration. Claudia herself puts it this way: \"Isn't that just like God — to take a nameless, unwanted, wounded, and adopted child and say: I'm not just going to save you, I'm going to use you to open the prison doors for those still in bondage, and set them free.\" End of Claudia's story.",
          "next": null,
          "choices": []
        },
        "caine_endDark": {
          "text": "Claudia limited herself to her own personal healing, without scaling her experience up into a public organization. Women around the world experiencing human trafficking and sexual exploitation were left without the specific, large-scale help an organization that was never founded might have offered them. End of Claudia's story.",
          "next": null,
          "choices": []
        }
      }
    },
    muller: {
      "start": "muller_intro",
      "scenes": {
        "muller_intro": {
          "text": "Cole, a preacher of German descent who had himself come to faith at a prayer meeting in November 1825 — in his own words, \"that evening God began a work of grace\" in his life — moved to Bristol, England, in the early nineteenth century and decided to open an orphanage for the city's homeless children. After his conversion he sold off nearly his entire secular library of more than three hundred books, keeping only the Bible as his main reading, and decided to run the orphanage on an unusual principle: never directly ask anyone for money, neither private individuals nor charitable organizations, relying entirely on prayer. He rested on the biblical promise that God knows our needs before we ask, and wanted to show, by his own lived experience, to a skeptical age, that this promise could be tested literally, not merely quoted from a pulpit.",
          "next": "muller_scene2"
        },
        "muller_scene2": {
          "text": "Friends and fellow preachers considered the idea a dangerous gamble — without fundraising campaigns, without direct requests for donations, supporting a growing orphanage with dozens, and later hundreds, of children seemed practically impossible. Cole held himself to the principle not just in word: he made it a rule to read the Bible daily and systematically, saying that for every page of other reading he read ten pages of Scripture. He wrote in his journal in December 1835 that he wanted to prove God's faithfulness precisely by completely refusing to appeal to people directly.",
          "next": "muller_choice1"
        },
        "muller_choice1": {
          "text": "One morning the orphanage's pantry turned up completely empty — not a crumb of food for several dozen children waiting for breakfast. Cole had to decide: sit down with the children at the empty table and thank God out loud anyway for food that wasn't physically there yet, as his own principle of never asking directly demanded, or make an exception that morning and personally appeal for urgent help to wealthy acquaintances in the city.",
          "choices": [
            {
              "label": "Sit at the empty table and thank God anyway",
              "effects": {
                "faith": 10
              },
              "next": "muller_bridgeA"
            },
            {
              "label": "Make an exception and personally ask for urgent help",
              "effects": {
                "faith": -10
              },
              "next": "muller_bridgeB"
            }
          ]
        },
        "muller_bridgeA": {
          "text": "Cole sat the children down at the empty table and thanked God out loud for the breakfast that wasn't physically in front of them yet, refusing to break his own principle even in such a dire situation. Before he'd finished the prayer, there was a knock at the door — the local milkman, whose cart had broken down right outside the orphanage gate, would rather give the children the milk than let it spoil while the wheel was being fixed.",
          "next": "muller_choice2"
        },
        "muller_bridgeB": {
          "text": "Cole made an exception to his own principle that morning and personally appealed to wealthy acquaintances in the city for urgent help, explaining how critical the orphanage's situation had become. Help arrived that same day, but Cole later admitted that this one instance of asking directly left him with a vague sense that the proof he wanted to build his life around had turned out, this time, a little less pure.",
          "next": "muller_choice2"
        },
        "muller_choice2": {
          "text": "Over decades of running the orphanage, Cole faced the central question of his entire life: keep following the same principle of never directly asking for donations for all his remaining years of ministry, regardless of the growing number of children and growing expenses, or, at some point, for the sake of stability and predictability, switch to an ordinary fundraising model, the way almost every other orphanage of the time did.",
          "choices": [
            {
              "label": "Keep the principle of never asking directly until the end of his life",
              "effects": {
                "faith": 15
              },
              "next": "muller_endLight"
            },
            {
              "label": "Switch to an ordinary fundraising model for stability",
              "effects": {
                "faith": -15
              },
              "next": "muller_endDark"
            }
          ]
        },
        "muller_endLight": {
          "text": "Cole kept to the principle of never directly asking for donations all the way to the end of his life, building five separate orphan houses in Bristol over the years and caring, in total, for more than ten thousand orphaned children. For the last sixty-eight years of his ministry he took no personal salary at all, relying on the same trust with which he'd begun in 1835. He summed up his own life in his autobiography with one line: \"I have joyfully dedicated my whole life to one purpose — to show, by deeds, what can be achieved through prayer and faith.\" End of Cole's story.",
          "next": null,
          "choices": []
        },
        "muller_endDark": {
          "text": "Cole, at some point, switched to an ordinary charitable fundraising model for the sake of greater stability for the growing orphanage. Funding did indeed become more predictable, but the unique principle that might have become the most compelling proof of his own faith to a skeptical age remained an unfinished experiment, cut short partway through. End of Cole's story.",
          "next": null,
          "choices": []
        }
      }
    },
  };

  const data = { CHARACTERS, STORIES };
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  else { window.Content = window.Content || {}; window.Content.reserve = data; }
})();
