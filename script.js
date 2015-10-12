var scenarios = {
	"Depression": {
		1: {
			"HasThird": 1,
			"Message": "You and your friend had plans to go to the movies today, but your friend suddenly tells you she has an emergency and can’t go.",
			"ChoiceOne": "Ask someone else",
			"ChoiceTwo": "Go alone",
			"ChoiceThree": "Stay home",
			
		},
		2: {
			"HasEffect": 1,
			"HasFact": 1,
			"Fact": "FACT: People with depression fixate on loneliness.",
			"ResultOne": "You enjoy the movie, but still wonder if your friend just didn’t want to hang out with you.",
			"ResultTwo": "You enjoy the movie, but felt lonely.",
			"ResultThree": "You feel lonely and wonder if your friend just did not want to hang out.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 5,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -10,
			"EffectStatusThree": "Well-Being",
			"EffectThree": -15,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 0,
			"LetterGradeStatusThree": 0,
		},
		3: {
			"HasThird": 1,
			"Message": "You have nothing planned for today.",
			"ChoiceOne": "Go back to bed",
			"ChoiceTwo": "Call a friend to hang out",
			"ChoiceThree": "Go do your homework",
		},
		4: {
			"HasEffect": 1,
			"ResultOne": "FACT: People with depression have low amounts of energy on a daily basis. To make up for this, some of them sleep for as long as 14 hours on days off.",
			"ResultTwo": "Unfortunately for you, everyone else is busy with their own lives.",
			"ResultThree": "It takes you hours to finish your homework. You end up sleeping late and oversleep the next day.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": -5,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -5,
			"EffectStatusThree": "Well-Being",
			"EffectThree": -15,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 0,
			"LetterGradeStatusThree": 1,
		},
		5: {
			"HasThird": 0,
			"Message": "You have gym class today, but you feel exhausted and too weak to exercise.",
			"ChoiceOne": "Try your best to workout",
			"ChoiceTwo": "Don’t try to workout",
		},
		6: {
			"HasEffect": 1,
			"ResultOne": "You manage to get through gym class, however you’re too tired to focus on your school work for the rest of the day.",
			"ResultTwo": "You don't participate in gym class and manage to get the rest your body needs, but your teacher marks points off for your inactivity’.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 5,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": 10,
			"LetterGradeStatusOne": -1,
			"LetterGradeStatusTwo": -1,
		},
		7: {
			"HasThird": 0,
			"Message": "You have a family reunion tonight.",
			"ChoiceOne": "Go to the reunion",
			"ChoiceTwo": "Stay home",
		},
		8: {
			"HasEffect": 1,
			"ResultOne": "Everyone is having a good time, but you can't seem to enjoy yourself. Your family complains that you're bringing down the mood.",
			"ResultTwo": "You really could not find the energy in yourself to go, but your mom doesn't understand and pesters you about your behavior.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": -15,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -10,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 0,
		},
		9: {
			"HasThird": 0,
			"Message": "You are working with a group in school and thought of something to contribute.",
			"ChoiceOne": "State your idea",
			"ChoiceTwo": "Remain silent as it's more comfortable",
		},
		10: {
			"HasEffect": 1,
			"ResultOne": "No one hears you as your voice is overshadowed by everyone else.",
			"ResultTwo": "You are reprimanded by your group for not contributing.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": -10,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -15,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": -1,
		},
		11: {
			"HasThird": 0,
			"Message": "Your best friend notices you've been acting strange lately. He confronts you about it.",
			"ChoiceOne": "Tell him about how you've been having a hard time hadnling your emotions.",
			"ChoiceTwo": "Tell him you're fine.",
        },
		12:{
			"HasEffect": 1,
			"HasFact": 1,
			"Fact": "People with depression, more often than not, don't know why they feel a certain way, they just do.",
			"ResultOne": "You have difficulty expressing yourself properly as you’re unable to gather your thoughts, but you're glad that your friend notices that you've been struggling.",
			"ResultTwo": "Your friend doesn't believe you, but drops the topic. You continue to bottle your emotions and thoughts.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 5,
            "EffectStatusTwo": "Well-Being",
            "EffectTwo": -10,
            "LetterGradeStatusOne": 0,
            "LetterGradeStatusTwo": 0,
        },
        13:{
         	"HasThird": 1,
         	"Message": "You come back home from a tiring day at school. You still have a few hours before you go sleep.",
         	"ChoiceOne": "Play video games.",
         	"ChoiceTwo": "Do your homework.",
         	"ChoiceThree": "Go to sleep.",
        },
        14:{
        	"HasEffect": 1,
        	"HasFact": 1,
        	"Fact": "FACT: Depression extends beyond feeling sad. Insonmia and habits of oversleeping are common in people with depression, which can be very harmful to a person's health.",
        	"ResultOne": "You feel restless despite playing video games. It takes you hours to fall asleep.",
        	"ResultTwo": "You feel restless despite felling exhausted from doing homework. It takes you hours to fall asleep.",
        	"ResultThree": "You end up falling asleep for the entire night, and did not do homework or eating dinner.",
            "EffectStatusOne": "Well-Being",
            "EffectOne": -15,
            "EffectStatusTwo": "Well-Being",
            "EffectTwo": -10,
            "EffectStatusThree": "Well-Being",
            "EffectThree": -10,
            "LetterGradeStatusOne": 0,
            "LetterGradeStatusTwo": 1,
            "LetterGradeStatusThree": -1,
		},
		15:{
			"HasThird": 0,
			"Message": "It's been a while since you've hung out with your friends.",
			"ChoiceOne": "Hang out.",
			"ChoiceTwo": "Don't hang out.",
		},
		16:{
			"HasEffect": 1,
			"ResultOne": "You try to hang out with your friends, but your friends are insenstivie to how you feel and tell you go just be happy.",
			"ResultTwo": "You spend too much time alone and not ehough time interacting with others.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": -10,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -15,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 0,
		},	
		17: {
			"HasThird": 0,
			"Message": "Your family decides to go on a trip to the beach, but you ahve scars from self-harm.",
			"ChoiceOne": "Go and try to have a nice time.",
			"ChoiceTwo": "Insist that you don't want to go.",
		},
		18: {
			"HasEffect": 1,
			"ResultOne": "You feel self-conscious while you are there, but spending time outside with your family helps distract you from your negative thoughts.",
			"ResultTwo": "You end up arguing with your parents about not spending enough time with your family.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 20,
			"EffectStatusTwo": "Well-Being",
			"EffectStatusTwo": -10,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 0,
		},
		19: {
			"HasThird": 0,
			"Message": "While on the internet, you come across a post that describes some symptoms to depression and find yourself relating to some.",
			"ChoiceOne": "You deny the possibility of having depression.",
			"ChoiceTwo": "You consider the possbility of having depression, but don't think of it much and you continue along with your life.",
		},
		20: {
			"HasEffect": 1,
			"HasFact": 1,
			"Fact": "FACT: People with depression, more often than not, will deny or brush the idea of having depression off.",
			"ResultOne": "Your depression worsens as you don't recognize realize that you do have depression.",
			"ResultTwo": "Even though you acknowledge that you might have depression, you don't pay it much mind and let it worsen.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": -10,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -5,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 0, 
		},
		21: {
			"HasThird": 0,
			"Message": "You notice that you haven't been able to concentrate in school lately.",
			"ChoiceOne": "You talk about it with a friend.",
			"ChoiceTwo": "Don't think of it as much.",
		},
		22: {
			"HasEffect": 1,
			"HasFact": 1,
			"Fact": "FACT: 80% of people with major depression who seek help show improvements in their medical condition. However, about two-thirds of people with major depression don't seek help.",
			"ResultOne": "You manage to get some good advice from your friend.",
			"ResultTwo": "Your depression worsens over time.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 10,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -10,
			"LetterGradeStatusOne": 1,
			"LetterGradeStatusTwo": -1,
		},
		23: {
			"HasThird": 0,
			"Message": "Your best friend is absent today and you have no one to sit with in lunch today.",
			"ChoiceOne": "You tell yourself this is a good chance to meet new people.",
			"ChoiceTwo": "Sit alone and try to finish some work.",
		},
		24: {
			"HasEffect": 1,
			"ResultOne": "You fail to make any friends as you’re socially inept. Even so, making an effort is certainly a plus.",
			"ResultTwo": "The familiar sense of lonliness pervades your mind when seeing people enjoy each other's company. However, you manage to finish some work.",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 5,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": -15,
			"LetterGradeStatusOne": 0,
			"LetterGradeStatusTwo": 1,
		},

		25: {
			"HasThird": 0,
			"Message": "Final exams are today, and your parents have planned a trip to Europe in two days.",
			"ChoiceOne": "Skip school and lie to your teacher about leaving a day early for your trip.",
			"ChoiceTwo": "Go to school and get your exams over with despite how anxious you are about them.",
		},

		26: {
			"HasEffect": 1,
			"ResultOne": "You feel relieved despite missing your final exams, and you tell yourself you've been working hard all year and that you need this break.",
			"ResultTwo": "You feel extremely relieved that your exams, regardless whether you do bad or good (you end up doing well).",
			"EffectStatusOne": "Well-Being",
			"EffectOne": 15,
			"EffectStatusTwo": "Well-Being",
			"EffectTwo": 10,
			"LetterGradeStatusOne": -2,
			"LetterGradeStatusTwo": 1,
		},

		27: {
			"HasThird": 0,
			"Message": "Your guidance counselor calls you into her office. She says your friends and family are concnered about you. She talks to you and offers ways to get help.",
			"ChoiceOne": "Refuse help.",
			"ChoiceTwo": "You listen and accept that you have depression and need help.",
		},
		28: {
			"HasEffect": 1,
            "HasFact": 1,
            "Fact": "Your family and friends love and care for you. Not only do they want to see you get better, they also want you to see yourself get better.",
            "ResultOne": "You let yourself succumb to your depression and lose the game.",
            "ResultTwo": "",
            "EffecStatustOne": "Well-Being",
            "EffectsOne": -40,
            "EffectStatusTwo": "Well-Being",
            "EffectTwo": 40,
            "LetterGradeStatusOne": 0,
            "LetterGradeStatusTwo": 0,
		},
	},
}

var placeholder = null;

var scenarioNum = 1;
var intermissionNum = 0;
var wellBeing = 85;

var letterGrade = 4;
var letterArray = ["F", "D", "C", "B", "A", "A+"];

var calendarIndex = 19;
var daysLeft = 14;

var eSO1 = "EffectStatusOne", eSO2 = "EffectStatusTwo", eSO3 = "EffectStatusThree";

function initialize() 
{
	firstScreen = document.getElementById("first");
	secondScreen = document.getElementById("second");

	progressBar = document.getElementById("progressbar");
	wellBeingMeter = document.getElementById("feelings");

	gradeDisplay = document.getElementById("Grade");

	storyText = document.getElementById("give");
	factText = document.getElementById("fact");
	choiceList = document.getElementsByClassName("psuedobuttons");

	calendarDays = document.getElementsByTagName("td");
	deathDays = document.getElementById("Countdown");

	secondScreen.style.display = "none";

	xMark = document.createElement("img");
	xMark.setAttribute("src", "woof.png");

	for (i = 0; i < 11; i++) {
		calendarDays[8+i].appendChild(xMark.cloneNode(true));
	}

	wellBeingMeter.innerHTML = wellBeing;
}

function scenarioChange()
{
	scenarioNum++;
}

function decideDisorder(discord) 
{
	disorder = discord;
	firstScreen.style.display = "none";
	secondScreen.style.display = "block";

	storyText.innerHTML = scenarios[disorder][scenarioNum]["Message"];
	choiceList[0].innerHTML = scenarios[disorder][scenarioNum]["ChoiceOne"];
	choiceList[1].innerHTML = scenarios[disorder][scenarioNum]["ChoiceTwo"];

	if (scenarios[disorder][scenarioNum]["HasThird"] === 1) {
		choiceList[2].style.display = "inline-block";
		choiceList[2].innerHTML = scenarios[disorder][scenarioNum]["ChoiceThree"];
	} else {
		choiceList[2].style.display = "none";
		}

	scenarioChange();
	intermissionNum = 1;

	progressBar.style.width = wellBeing + "%";
	gradeDisplay.innerHTML = letterArray[letterGrade];

	document.getElementById("Illness").innerHTML = disorder;

	deathDays.innerHTML = "Days Left: " + daysLeft;
	daysLeft--;
}

function storyMove(decisionNumber)
{
	deathDays.innerHTML = "Days Left: " + daysLeft;

	switch (intermissionNum) {
		case 0:
			daysLeft--;
			calendarIndex++;
			intermissionNum = 1;

			storyText.innerHTML = scenarios[disorder][scenarioNum]["Message"];
			choiceList[0].innerHTML = scenarios[disorder][scenarioNum]["ChoiceOne"];
			choiceList[1].style.display = "inline-block";
			choiceList[1].innerHTML = scenarios[disorder][scenarioNum]["ChoiceTwo"];

			if (scenarios[disorder][scenarioNum]["HasThird"] === 1) {
				choiceList[2].style.display = "inline-block";
				choiceList[2].innerHTML = scenarios[disorder][scenarioNum]["ChoiceThree"];
			} else {
				choiceList[2].style.display = "none";
				}

			factText.style.display = "none";
		break;

		case 1:
			calendarDays[calendarIndex].appendChild(xMark.cloneNode(true));
			
			intermissionNum = 0;

			choiceList[0].innerHTML = "Continue";
			choiceList[1].style.display = "none";
			choiceList[2].style.display = "none";

			if (scenarios[disorder][scenarioNum]["HasEffect"] === 1) {
				switch (decisionNumber) {
					case 1:
						if (scenarios[disorder][scenarioNum][eSO1] === "Well-Being") {
								wellBeing += scenarios[disorder][scenarioNum]["EffectOne"];
						}

						if (scenarios[disorder][scenarioNum]["LetterGradeStatusOne"] === 1 && letterGrade === 5) {
							console.log("Omega good job!");
						} else if (scenarios[disorder][scenarioNum]["LetterGradeStatusOne"] === -1 && letterGrade === 0) {
							console.log("No rice tonight!");
							} else {
							letterGrade += scenarios[disorder][scenarioNum]["LetterGradeStatusOne"];
								}

						break;

					case 2:
						if (scenarios[disorder][scenarioNum][eSO2] === "Well-Being") {
							wellBeing += scenarios[disorder][scenarioNum]["EffectTwo"];
						}

						if (scenarios[disorder][scenarioNum]["LetterGradeStatusTwo"] === 1 && letterGrade === 5) {
							console.log("Omega good job!");
						} else if (scenarios[disorder][scenarioNum]["LetterGradeStatusTwo"] === -1 && letterGrade === 0) {
							console.log("No rice tonight!");
							} else {
							letterGrade += scenarios[disorder][scenarioNum]["LetterGradeStatusTwo"];
								}

						break;

					case 3:
						if (scenarios[disorder][scenarioNum][eSO3] === "Well-Being") {
							wellBeing += scenarios[disorder][scenarioNum]["EffectThree"];
						}

						if (scenarios[disorder][scenarioNum]["LetterGradeStatusThree"] === 1 && letterGrade === 5) {
							console.log("Omega good job!");
						} else if (scenarios[disorder][scenarioNum]["LetterGradeStatusThree"] === -1 && letterGrade === 0) {
							console.log("No rice tonight!");
							} else {
							letterGrade += scenarios[disorder][scenarioNum]["LetterGradeStatusThree"];
								}

					default:
						placeholder = null;
						break;
				}
			}

			if (decisionNumber === 1) {
				storyText.innerHTML = scenarios[disorder][scenarioNum]["ResultOne"];
			} else if (decisionNumber === 2) {
					storyText.innerHTML = scenarios[disorder][scenarioNum]["ResultTwo"];
				} else {
						storyText.innerHTML = scenarios[disorder][scenarioNum]["ResultThree"];
					}

			if (scenarios[disorder][scenarioNum]["HasFact"] === 1) {
				factText.style.display = "inline-block";
				factText.innerHTML = scenarios[disorder][scenarioNum]["Fact"];
			} else {
					factText.style.display = "none";
				}

		break;

		default:
			//Someone fucked up if this block of code executes.
			document.body.style.display = "none";
			break;
	}

	scenarioChange();
	wellBeingMeter.innerHTML = wellBeing;

	progressBar.style.width = wellBeing + "%";
	gradeDisplay.innerHTML = letterArray[letterGrade];
}