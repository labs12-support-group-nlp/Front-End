import axios from 'axios';

export const MODEL_URL = 'http://nlpsgf-env.a3pandx5ib.us-east-2.elasticbeanstalk.com/';
export const DEV_URL = 'http://127.0.0.1:8080/'
export const PROD_URL = 'https://nlpsgf-env.a3pandx5ib.us-east-2.elasticbeanstalk.com/'
export const PROD_URL_2 = 'https://sg-env.mryhsx55ye.us-east-2.elasticbeanstalk.com/'


export function fetchGroups() {
    axios.get(MODEL_URL)
    .then(response => response.json())
    .then(json => console.log(json))
  }

export default function getSubredditInfo (name){
  return groups_info[name]
}

 const groups_info = {'offmychest': [1350185,
  "A mutually supportive community where deeply emotional things you can't tell people you know can be told. Whether it's long-standing baggage, happy thoughts, or recent trauma, posting it here may provide some relief. We'll listen, and if you want, we'll talk. We aim to keep this a safe space."],
 'add': [3812, ''],
 'cripplingalcoholism': [36598, ''],
 'disorder': [216, ''],
 'Health': [575407, 'Health, a place to discuss health news '],
 'leaves': [92150,
  "This is a support and recovery community for practical discussions about how to quit pot, weed, cannabis, edibles, BHO, shatter, or whatever THC-related product you're using, and support in staying stopped."],
 'MenGetRapedToo': [1973,
  'This is a subreddit for men and boys who have experienced sexual violence of any kind — and for their family or friends who may be in need of advice or guidance.We aim to provide support. We also aim to spread awareness that a great many men experience rape and sexual assault, and there is nothing wrong with them speaking about it. This is a hate-free subreddit. Any abusive or negative comments will be taken down, and the poster will be blocked. '],
 'rapecounseling': [11693, ''],
 'addiction': [20234, ''],
 'ADHD': [410253,
  "A place where people with ADHD and their loved ones can interact with each other exchanging stories, struggles, and strategies. Weekly threads to plan and notice the positive in our lives. Many of the 400k+ users express they 'feel at home' and 'finally found a place where people understand them'."],
 'Advice': [251177,
  "This is a place where you can ask for advice on any subject. Everybody has issues that they run into, and everyone needs advice every now and again. This is Reddit's very own solution-hub."],
 'affirmations': [5196, ''],
 'afterthesilence': [964,
  'Moving forward and how to do it. We do not use trigger warnings as this entire sub is full of triggering content. Please view with caution.  '],
 'Agoraphobia': [5310,
  'This is a community of people who are affected by, supportive of, or interested in Agoraphobia. '],
 'AlAnon': [14250,
  'Subreddit for discussion of recovery in [Al-Anon](http://www.al-anon.alateen.org/).'],
 'alcoholicsanonymous': [13168, ''],
 'alcoholism': [20631,
  "Information and support for those affected by alcoholism. If you are concerned about alcohol's effect on your life or a loved one's life, please feel welcome. "],
 'Anger': [14277,
  'Anger, an affliction that is often misunderstood, leaves those who suffer from it in a limbo of social unacceptance. Find the support you need here.'],
 'Antipsychiatry': [2902,
  'r/Antipsychiatry is a survivor-friendly community for discussion and counterprogramming against psychiatry and the mental health industrial complex. We think that mental health is generally morality disguised as illness, not actual science.'],
 'Anxiety': [250812,
  'Discussion and support for sufferers and loved ones of any anxiety disorder.'],
 'Anxietyhelp': [13736,
  'Scientific articles, YouTube videos, Blog Posts, and more that are geared towards the anxiety management and healing.'],
 'anxietysuccess': [3350,
  'A subreddit that focuses on anxiety-related success stories and breakthroughs, and posting helpful resources for people with anxiety.'],
 'anxietysupporters': [845, ''],
 'AskDocs': [108986,
  '**Having a medical issue?**Ask a doctor or medical professional on reddit! All flaired medical professionals on this subreddit are verified by the mods.'],
 'aspergers': [51657,
  "For safe and helpful conversation with people who have Asperger's Syndrome or live with someone who does. We also welcome people with other autism spectrum conditions."],
 'AspiePartners': [2482,
  'For a positive, safe, helpful, and productive conversation with partners and/or spouses of adults with Aspergers, or Aspies with NT partners/spouses. The intent of this group is to find positive ground to nurture and grow relationships between NT/AS persons, regardless of gender, race, creed, sexuality, or religion.'],
 'AtheistTwelveSteppers': [2215,
  'A place for atheists and agnostics to discuss the 12 steps'],
 'behavior': [1332, ''],
 'behaviortherapy': [676, ''],
 'bingeeating': [1134,
  'A subreddit for those trapped in the binge eating maze. Share stories, questions, advice, studies, or anything else related to binge-eating."It is a man\'s own mind, not his enemy or foe, that lures him to evil ways."'],
 'BipolarReddit': [29905,
  'A Reddit to share information about who you are, how you think, and what helps you cope in life.'],
 'BodyAcceptance': [26466,
  'We are often bombarded with the "ideal body." We all have a lack of perfection and we all deserve to feel good about ourselves and comfortable in our skin, without the demands that we need to change it.'],
 'BPD': [55198,
  'A place for those who have Borderline Personality Disorder, their family members and friends, and anyone else who is interested in learning more about the disorder.'],
 'bulimia': [4732,
  'A subreddit dedicated to supporting those struggling with bulimia.'],
 'CompulsiveSkinPicking': [22829,
  'A place for people with Compulsive Skin Picking (CSP; An Obsessive-Compulsive Spectrum Disorder sometimes also referred to as Dermatillomania and commonly associated with Body Dysmorphic Disorder (BDD)), their families, friends, and therapists who treat this condition to come together and exchange news about treatments, current events, and personal experiences.'],
 'dbtselfhelp': [9610,
  'DBT Self help is for those who have taken, who are taking or who want to learn DBT skills with others in a non judgmental and educational format.  '],
 'depression': [479511,
  'Peer support for anyone struggling with depression, the mental illness.'],
 'depressionregimens': [15922,
  'r/depressionregimens is a sub for redditors with depression and anxiety who are looking to be part of a constructive community dedicated towards improvement, with a focus on safe and researched substances.'],
 'disability': [13559,
  'News, resources and perspectives pertaining to individuals with disabilities.'],
 'distractit': [919,
  'This is a subreddit full of ideas for distractions/book or workbook recommendations/community activities or games/recommendations for distraction strategies for those who suffer from self-harm, depression, anxiety, etc. '],
 'domesticviolence': [6119,
  'Information and support for victims, survivors, their friends and family.'],
 'downsyndrome': [1849,
  "A community for all things relating to Down syndrome.  Let's keep this place positive.  Hateful or disrespectful submissions or comments will be removed."],
 'DysmorphicDisorder': [1657, ''],
 'eating_disorders': [4438,
  'This subreddit is intended as an uncensored, non-judgmental place for all eating disorder-related content. '],
 'EatingDisorders': [22564,
  '## For Awareness, Information, and Questions about Recovering from EDs. We are a pro-recovery site, and only allow approved posts. '],
 'emetophobia': [3690,
  'For sufferers of emetophobia to have discussions, post advice, and support each other.'],
 'EOOD': [52999,
  'Exercise Out Of DepressionA movement to provide information and support to those who would like to take up an active lifestyle, who may suffer from depression, anxiety, eating disorders, confidence or self image issues. We are friendly and helpful, and we are not here to judge.'],
 'ForeverAlone': [109136,
  'A subreddit for Forever Alone.lonelydepressedsadanxiety'],
 'fuckeatingdisorders': [8818,
  "Eating disorders have many misconceptions, and part of that is because those who have it hide it since those who don't have it don't understand it because no one talks about it. FED is here to confront eating disorders and provide a place for anyone to ask questions. "],
 'GetMotivated': [14577047,
  'Welcome to /r/GetMotivated! We’re glad you made it. This is the subreddit that will help you finally get up and do what you *know* you need to do. It’s the subreddit to give and receive motivation through pictures, videos, text, music, AMA’s, personal stories, and anything and everything that you find particularly motivating and/or inspiring.So browse around, ask questions, give advice, form/join a support group. But don’t spend too much time here; you’ve got *better* things to do.'],
 'getting_over_it': [24884,
  'Supporting each other in conquering depression, anxiety, trauma, doubt, and apathy. A positive community dedicated to overcoming our problems.'],
 'GFD': [11351,
  'Gamers Fighting Depression [GFD] is a supportive community for gamers of all platforms, modes, and styles who have or are suffering from mental health issues, and welcome those who empathize and understand how difficult it can be.  '],
 'HaveHope': [279,
  "Sometimes, it seems like we will never be OK again.  We can't remember the last time we weren't struggling and it seems we've exhausted all our options.   Many people have felt just like this, but then found a recovery that they never thought possible. We become inspired and hopeful by knowing that others have overcome what at one time seemed insurmountable.  Please, help others! Share your story!"],
 'HealthAnxiety': [13487,
  "A home for those with health anxiety/hypochondria. You're not alone!"],
 'helpmecope': [4064,
  "This subreddit is intended for people to talk about ways they have been able to cope with life's stressors, people to request ways to cope, and lists of tools, exercises, and interventions to help cope. Coping skills, techniques, and strategies."],
 'itgetsbetter': [2009, ''],
 'mentalhealth': [95543,
  'The Mental Health subreddit is the central forum to discuss, vent, support and share information about mental health, illness and wellness. This sub is moderated by the South Asian Mental Health Alliance (SAMHAA), a non-profit society dedicated to mental health stigma reduction through skill development and community building.  '],
 'mentalillness': [11082, 'A place on reddit to discuss mental illness'],
 'mentalpod': [1235, 'The Mental Illness Happy Hour'],
 'mixednuts': [1471,
  "A place to decompress, relax, and socialize. We're not just our problems :). Family members welcome too."],
 'MMFB': [23933,
  "Has something terrible happened in your life? Are things just not going your way? Have you lost a loved one? Many people have some great stories to tell about some not-so-great occurrences in their lives. This is the place to talk about it. Don't go through it alone! Talk amongst fellow Redditors who would be happy to help."],
 'MSTsurvivors': [85,
  "If you've experienced MST (military sexual trauma) and are in need of support, this is your community! This is a place where you can meet others who have gone through what you've experienced. If you are in need of therapy, or are hesitant to file a claim for disability we can try to help calm your fears. "],
 'needadvice': [232815,
  "We set the sub to private, when there are no mods available.  We'll be open again in a few hours."],
 'Needafriend': [92191,
  'Are you looking for a new friend or a kind voice? This is a subreddit for people looking to make strictly platonic friends from nearby or around the world. You are welcome to post and talk, private message others, discuss and share in a supportive manner.'],
 'neurodiversity': [5361,
  'A place for the social and political discussion of psychological differences.'],
 'NoFap': [432860,
  'We host rebooting challenges in which participants ("Fapstronauts") abstain from pornography and masturbation for a period of time. Whether your goal is casual participation in a monthly challenge as a test of self-control, or whether excessive masturbation or pornography has become a problem in your life and you want to quit for a longer period of time, you will find a supportive community and plenty of resources here.'],
 'nosurf': [44031,
  'NoSurf is a community of people who are focused on becoming more productive and wasting less time mindlessly surfing the internet. https://nosurf.org/'],
 'OCD': [36223,
  'A subreddit dedicated to discussion, articles, and images regarding OCD.'],
 'OCPD': [1557, ''],
 'OpiatesRecovery': [17859,
  'We are a group of people dedicated to helping each other kick the habit.'],
 'PanicParty': [2871, ''],
 'Phobia': [1573,
  'The community for discussion of phobias and ways to treat them.Phobia /ˈfōbēə/ *An irrational, intense and persistent fear of certain situations, activities, things, animals, or people.*'],
 'PsychiatricFreedom': [834,
  "**Warning content of the sub +18**r/PsychiatricFreedom is a supportive community focusing on personal choice over one's own mental health care, including the choice to end one's life, and psychiatric reform."],
 'Psychiatry': [17200,
  "We're a community created to discuss psychiatry, medicine, and associated fields. We are not a subreddit to seek mental health treatment advice."],
 'psychology': [465764,
  'A Reddit community for sharing and discussing science-based psychological material.'],
 'psychopathology': [3557,
  'Psychopathology: the systematic and scientific study of the manifestations, causes, classification, course, prevention, and treatment of mental disorders.'],
 'psychotherapy': [31120,
  'This is a place where mental health professionals and students can share and discuss topics related to psychotherapy.  We encourage discussion of therapeutic techniques, information related to careers in therapy, and dissection of case studies.  We invite links that contribute to this subreddit; such links may include information related to practice, therapeutic approaches, and new research.'],
 'psychotic_features': [617,
  "Some of us Bipolars and Depressives (and others I'm sure) may have heard a voice or believed things that may have not been rational or true. This is a place to talk a little about it without judgement."],
 'psychoticreddit': [2220, ''],
 'ptsd': [24428,
  'We are a supportive, respectful community for discussion and links of interest for people who have PTSD or have friends, family members, or partners with PTSD.'],
 'quittingkratom': [8199,
  'The purpose of this Forum is to give and receive information and support regarding quitting Kratom, Kratom withdrawal and recovery.'],
 'rape': [10718, ''],
 'reasonstolive': [2400,
  'A community to share our personal reasons for living, from the little things that bring joy to our days to the big things that make the whole struggle worthwhile.'],
 'rehabtherapy': [3119, ''],
 'sad': [26921, ''],
 'schizoaffective': [3820, ''],
 'schizophrenia': [20581,
  'Welcome! This is a community meant for a discussion of schizophrenia spectrum disorders, and related issues. Feel free to post, discuss, or just lurk. There is no judgement in this place: we are here for each other. Please refrain from self-diagnosis, diagnosing others, or advising specific medical treatments.'],
 'secondary_survivors': [1929,
  'As much as /r/rapecounseling is a great resource, sometimes there are questions/discussions that are valuable to those who love a victim of sexual abuse that might be triggering or difficult for the victims themselves. Additionally, the issues that "secondary survivors" face are different from those of the direct victims. **This sub is a safe place for all those struggling with the knowledge that their loved one was sexually assaulted, where we can share advice, support and coping strategies.**'],
 'selfharm': [25397,
  'A subreddit for self-harmers to relate to each other, ask questions, and build up a community.'],
 'selfhelp': [37913, ''],
 'siblingsupport': [396,
  'Sibling Support is a community for siblings of people with special needs to discuss relevant issues and experiences. '],
 'slp': [10676,
  'A community of Speech-Language Pathologists (SLPs), Speech Therapists (STs), Speech-Language Therapists (SLTs), Clinical Fellowship Clinicians (SLP-CFs), Speech-Language Pathology Assistants (SLPAs), graduate students, graduate clinicians, and undergraduate students. We discuss therapy ideas, share stories, share informative links, and give general advice through our personal experience and research.'],
 'SMARTRecovery': [3096,
  'SMART Recovery - Self Management for Addiction RecoverySMART Recovery is the leading self-empowering addiction recovery support group. Our participants learn tools for addiction recovery based on the latest scientific research and participate in a world-wide community which includes free, self-empowering, science-based mutual help groups.'],
 'socialanxiety': [165616,
  "Feel nervous and/or shy in social situations? Whether it's approaching someone you're attracted to or if it's giving a presentation in class, everyone gets a little nervous at times. You may have social anxiety however, if you feel like throughout your day you're bombarded by anxious thoughts/feelings during social situations that otherwise seem so effortless for most people.Welcome to the club. This is a community to share strategies and learn from others!"],
 'socialskills': [893633,
  'A place to share your favorite social skills tips, ask for advice, or offer encouragement to others on their social skills journey. Welcome aboard!'],
 'socialwork': [20830,
  'This community is for social workers and those interested in social work! It is a place to ask for advice, share your frustrations, receive support, and anything else you want related to social work.'],
 'socialworkresources': [1074,
  'This thread is dedicated to introducing resources to those who may be in need.   The idea is to use the resource to ameliorate your situation and then to pass on the information to someone else when things have improved.    The resources will mostly be based in the U.S. however submissions will be accepted from anywhere that people need help with a link on how to obtain services.'],
 'StopDipping': [963, ''],
 'stopdrinking': [167989,
  "This subreddit is a place to motivate each other to control or stop drinking. We welcome anyone who wishes to join in by asking for advice, sharing our experiences and stories, or just encouraging someone who is trying to quit or cut down. Please post only when sober, you're welcome to read in the meanwhile."],
 'stopgaming': [24401,
  "Whatever your reasons for wanting to quit gaming of any sort, come on in.Mostly about video games, but we're not judgmental."],
 'StopSelfHarm': [9097, ''],
 'stopsmoking': [86053,
  'This reddit is a place for redditors to motivate each other to quit smoking. We welcome anyone who wishes to join in by asking or giving advice, sharing stories, or just encouraging someone who is trying to quit.'],
 'SuicideWatch': [131575, ''],
 'survivorsofabuse': [9692,
  "This is a subreddit designed to give a place for survivors of all abuse to come together to share their stories, vent, and to assist one another in healing. We want to celebrate success, give acceptance, and support one another. The only rule is to respect one another, and understand how very difficult it is to expose such a vulnerable part of one's life. This will be a *safe place.*"],
 'swami': [25, 'Support for people whose spouse has a mental illness. '],
 'Teetotal': [2645,
  'Teetotal: A subreddit for people who don\'t drink, smoke, or use drugs but also don\'t necessarily identify as "straight edge." Their reasons can be religious, personal, or they can have no reason at all. We\'re all here to make everyone feel a little less lonely.'],
 'TheMixedNuts': [3124,
  "A relaxed, safe space to embrace our craziness. It can sometimes be difficult to discuss mental illness with those who don't live it and more often than not, people tiptoe around us. This is an open space for us to laugh, cry, question, vent, rant about the things that make us different."],
 'tOCD': [63,
  '/r/tOCD is for people with transgender OCD who are afraid of being transgender.  It is not for people who are actually transgender but we can help anyone who is questioning to determine whether they are transgender or not.  If you are transgender then you should go to a relevant subreddit for better advice. '],
 'Tourettes': [3414,
  'Welcome to r/tourettes! This is a place for people that have Tourettes can come and chat, talk/complain about tics, and release some stress!'],
 'traumatoolbox': [3406,
  'A place to seek or share coping strategies, resources, art, music, videos, and other survivor tools. Strategies shared here will directly address ways to manage trauma symptoms like flashbacks, hypervigilance, insomnia, anxiety, and other types of triggers. '],
 'Trichsters': [6687, ''],
 'TwoXADHD': [6030,
  'A place for women with ADHD to connect, share, and support.'],
 'uniqueminds': [574,
  'The Alliance of Unique Minds is a subreddit dedicated to the appreciation of "different kinds of minds", with a focus on the reduction of stigma and injustice toward those with mental conditions, access to supportive and effective treatment to relieve suffering, and a recognition of the value of neurodiversity for society. This is a place that takes seriously the idea that human mental suffering is the problem, and not the sufferers themselves.'],
 'whatsbotheringyou': [7930,
  "We're a subreddit that you can talk to about anything that makes you unhappy or bothers you. You talk. We'll listen."]}

export const group_url = {'offmychest': 'https://www.reddit.com/r/offmychest/',
 'add': 'https://www.reddit.com/r/add/',
 'cripplingalcoholism': 'https://www.reddit.com/r/cripplingalcoholism/',
 'disorder': 'https://www.reddit.com/r/disorder/',
 'Health': 'https://www.reddit.com/r/Health/',
 'HelathProject': 'https://www.reddit.com/r/HelathProject/',
 'leaves': 'https://www.reddit.com/r/leaves/',
 'MenGetRapedToo': 'https://www.reddit.com/r/MenGetRapedToo/',
 'rapecounseling': 'https://www.reddit.com/r/rapecounseling/',
 'CupsofTea': 'https://www.reddit.com/r/CupsofTea/',
 'addiction': 'https://www.reddit.com/r/addiction/',
 'ADHD': 'https://www.reddit.com/r/ADHD/',
 'Advice': 'https://www.reddit.com/r/Advice/',
 'affirmations': 'https://www.reddit.com/r/affirmations/',
 'afterthesilence': 'https://www.reddit.com/r/afterthesilence/',
 'Agoraphobia': 'https://www.reddit.com/r/Agoraphobia/',
 'AlAnon': 'https://www.reddit.com/r/AlAnon/',
 'alcoholicsanonymous': 'https://www.reddit.com/r/alcoholicsanonymous/',
 'alcoholism': 'https://www.reddit.com/r/alcoholism/',
 'Anger': 'https://www.reddit.com/r/Anger/',
 'Antipsychiatry': 'https://www.reddit.com/r/Antipsychiatry/',
 'Anxiety': 'https://www.reddit.com/r/Anxiety/',
 'Anxietyhelp': 'https://www.reddit.com/r/Anxietyhelp/',
 'anxietysuccess': 'https://www.reddit.com/r/anxietysuccess/',
 'anxietysupporters': 'https://www.reddit.com/r/anxietysupporters/',
 'AskDocs': 'https://www.reddit.com/r/AskDocs/',
 'aspergers': 'https://www.reddit.com/r/aspergers/',
 'AspiePartners': 'https://www.reddit.com/r/AspiePartners/',
 'AtheistTwelveSteppers': 'https://www.reddit.com/r/AtheistTwelveSteppers/',
 'behavior': 'https://www.reddit.com/r/behavior/',
 'behaviortherapy': 'https://www.reddit.com/r/behaviortherapy/',
 'bingeeating': 'https://www.reddit.com/r/bingeeating/',
 'BipolarReddit': 'https://www.reddit.com/r/BipolarReddit/',
 'BipolaSOs': 'https://www.reddit.com/r/BipolaSOs/',
 'BodyAcceptance': 'https://www.reddit.com/r/BodyAcceptance/',
 'BPD': 'https://www.reddit.com/r/BPD/',
 'bulimia': 'https://www.reddit.com/r/bulimia/',
 'CompulsiveSkinPicking': 'https://www.reddit.com/r/CompulsiveSkinPicking/',
 'dbtselfhelp': 'https://www.reddit.com/r/dbtselfhelp/',
 'depression': 'https://www.reddit.com/r/depression/',
 'depressionregimens': 'https://www.reddit.com/r/depressionregimens/',
 'disability': 'https://www.reddit.com/r/disability/',
 'distractit': 'https://www.reddit.com/r/distractit/',
 'domesticviolence': 'https://www.reddit.com/r/domesticviolence/',
 'downsyndrome': 'https://www.reddit.com/r/downsyndrome/',
 'DysmorphicDisorder': 'https://www.reddit.com/r/DysmorphicDisorder/',
 'eating_disorders': 'https://www.reddit.com/r/eating_disorders/',
 'EastingDisorderHope': 'https://www.reddit.com/r/EastingDisorderHope/',
 'EatingDisorders': 'https://www.reddit.com/r/EatingDisorders/',
 'emetophobia': 'https://www.reddit.com/r/emetophobia/',
 'EOOD': 'https://www.reddit.com/r/EOOD/',
 'ForeverAlone': 'https://www.reddit.com/r/ForeverAlone/',
 'fuckeatingdisorders': 'https://www.reddit.com/r/fuckeatingdisorders/',
 'GetMotivated': 'https://www.reddit.com/r/GetMotivated/',
 'getting_over_it': 'https://www.reddit.com/r/getting_over_it/',
 'GFD': 'https://www.reddit.com/r/GFD/',
 'HaveHope': 'https://www.reddit.com/r/HaveHope/',
 'HealthAnxiety': 'https://www.reddit.com/r/HealthAnxiety/',
 'helpmecope': 'https://www.reddit.com/r/helpmecope/',
 'itgetsbetter': 'https://www.reddit.com/r/itgetsbetter/',
 'mentalhealth': 'https://www.reddit.com/r/mentalhealth/',
 'mentalillness': 'https://www.reddit.com/r/mentalillness/',
 'mentalpod': 'https://www.reddit.com/r/mentalpod/',
 'mixednuts': 'https://www.reddit.com/r/mixednuts/',
 'MMFB': 'https://www.reddit.com/r/MMFB/',
 'MSTsurvivors': 'https://www.reddit.com/r/MSTsurvivors/',
 'needadvice': 'https://www.reddit.com/r/needadvice/',
 'Needafriend': 'https://www.reddit.com/r/Needafriend/',
 'neurodiversity': 'https://www.reddit.com/r/neurodiversity/',
 'NoFap': 'https://www.reddit.com/r/NoFap/',
 'nosurf': 'https://www.reddit.com/r/nosurf/',
 'OCD': 'https://www.reddit.com/r/OCD/',
 'OCPD': 'https://www.reddit.com/r/OCPD/',
 'OpiatesRecovery': 'https://www.reddit.com/r/OpiatesRecovery/',
 'PanicParty': 'https://www.reddit.com/r/PanicParty/',
 'Phobia': 'https://www.reddit.com/r/Phobia/',
 'PsychiatricFreedom': 'https://www.reddit.com/r/PsychiatricFreedom/',
 'Psychiatry': 'https://www.reddit.com/r/Psychiatry/',
 'psychology': 'https://www.reddit.com/r/psychology/',
 'psychopathology': 'https://www.reddit.com/r/psychopathology/',
 'psychotherapy': 'https://www.reddit.com/r/psychotherapy/',
 'psychotic_features': 'https://www.reddit.com/r/psychotic_features/',
 'psychoticreddit': 'https://www.reddit.com/r/psychoticreddit/',
 'ptsd': 'https://www.reddit.com/r/ptsd/',
 'quittingkratom': 'https://www.reddit.com/r/quittingkratom/',
 'rape': 'https://www.reddit.com/r/rape/',
 'reasonstolive': 'https://www.reddit.com/r/reasonstolive/',
 'rehabtherapy': 'https://www.reddit.com/r/rehabtherapy/',
 'sad': 'https://www.reddit.com/r/sad/',
 'schizoaffective': 'https://www.reddit.com/r/schizoaffective/',
 'schizophrenia': 'https://www.reddit.com/r/schizophrenia/',
 'secondary_survivors': 'https://www.reddit.com/r/secondary_survivors/',
 'selfharm': 'https://www.reddit.com/r/selfharm/',
 'SelfHarmCommunity': 'https://www.reddit.com/r/SelfHarmCommunity/',
 'selfhelp': 'https://www.reddit.com/r/selfhelp/',
 'siblingsupport': 'https://www.reddit.com/r/siblingsupport/',
 'slp': 'https://www.reddit.com/r/slp/',
 'SMARTRecovery': 'https://www.reddit.com/r/SMARTRecovery/',
 'socialanxiety': 'https://www.reddit.com/r/socialanxiety/',
 'socialskills': 'https://www.reddit.com/r/socialskills/',
 'socialwork': 'https://www.reddit.com/r/socialwork/',
 'socialworkresources': 'https://www.reddit.com/r/socialworkresources/',
 'speciaed': 'https://www.reddit.com/r/speciaed/',
 'StopDipping': 'https://www.reddit.com/r/StopDipping/',
 'stopdrinking': 'https://www.reddit.com/r/stopdrinking/',
 'stopgaming': 'https://www.reddit.com/r/stopgaming/',
 'StopSelfHarm': 'https://www.reddit.com/r/StopSelfHarm/',
 'stopsmoking': 'https://www.reddit.com/r/stopsmoking/',
 'SuicideWatch': 'https://www.reddit.com/r/SuicideWatch/',
 'survivorsofabuse': 'https://www.reddit.com/r/survivorsofabuse/',
 'swami': 'https://www.reddit.com/r/swami/',
 'Teetotal': 'https://www.reddit.com/r/Teetotal/',
 'TheMixedNuts': 'https://www.reddit.com/r/TheMixedNuts/',
 'tOCD': 'https://www.reddit.com/r/tOCD/',
 'Tourettes': 'https://www.reddit.com/r/Tourettes/',
 'traumatoolbox': 'https://www.reddit.com/r/traumatoolbox/',
 'Trichsters': 'https://www.reddit.com/r/Trichsters/',
 'TwoXADHD': 'https://www.reddit.com/r/TwoXADHD/',
 'uniqueminds': 'https://www.reddit.com/r/uniqueminds/',
 'whatsbotheringyou': 'https://www.reddit.com/r/whatsbotheringyou/'}


const subreddits_mental_illness = [
    'offmychest',
    'add',
    'cripplingalcoholism',
    'disorder',
    'Health',
    'HelathProject',
    'leaves',
    'MenGetRapedToo',
    'rapecounseling',
    'CupsofTea',
    'addiction',
    'ADHD',
    'Advice',
    'affirmations',
    'afterthesilence',
    'Agoraphobia',
    'AlAnon',
    'alcoholicsanonymous',
    'alcoholism',
    'Anger',
    'Antipsychiatry',
    'Anxiety',
    'Anxietyhelp',
    'anxietysuccess',
    'anxietysupporters',
    'AskDocs',
    'aspergers',
    'AspiePartners',
    'AtheistTwelveSteppers',
    'behavior',
    'behaviortherapy',
    'bingeeating',
    'BipolarReddit',
    'BipolaSOs',
    'BodyAcceptance',
    'BPD',
    'bulimia',
    'CompulsiveSkinPicking',
    'dbtselfhelp',
    'depression',
    'depressionregimens',
    'disability',
    'distractit',
    'domesticviolence',
    'downsyndrome',
    'DysmorphicDisorder',
    'eating_disorders',
    'EastingDisorderHope',
    'EatingDisorders',
    'emetophobia',
    'EOOD',
    'ForeverAlone',
    'fuckeatingdisorders',
    'GetMotivated',
    'getting_over_it',
    'GFD',
    'HaveHope',
    'HealthAnxiety',
    'helpmecope',
    'itgetsbetter',
    'leaves',
    'mentalhealth',
    'mentalillness',
    'mentalpod',
    'mixednuts',
    'MMFB',
    'MSTsurvivors',
    'needadvice',
    'Needafriend',
    'neurodiversity',
    'NoFap',
    'nosurf',
    'OCD',
    'OCPD',
    'OpiatesRecovery',
    'PanicParty',
    'Phobia',
    'PsychiatricFreedom',
    'Psychiatry',
    'psychology',
    'psychopathology',
    'psychotherapy',
    'psychotic_features',
    'psychoticreddit',
    'ptsd',
    'quittingkratom',
    'rape',
    'rapecounseling',
    'reasonstolive',
    'rehabtherapy',
    'sad',
    'schizoaffective',
    'schizophrenia',
    'secondary_survivors',
    'selfharm',
    'SelfHarmCommunity',
    'selfhelp',
    'siblingsupport',
    'slp',
    'SMARTRecovery',
    'socialanxiety',
    'socialskills',
    'socialwork',
    'socialworkresources',
    'speciaed',
    'StopDipping',
    'stopdrinking',
    'stopgaming',
    'StopSelfHarm',
    'stopsmoking',
    'SuicideWatch',
    'survivorsofabuse',
    'swami',
    'Teetotal',
    'TheMixedNuts',
    'tOCD',
    'Tourettes',
    'traumatoolbox',
    'Trichsters',
    'TwoXADHD',
    'uniqueminds',
    'whatsbotheringyou'
]





