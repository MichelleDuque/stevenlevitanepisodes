const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

const quotes = [
	{ 
		"quote" : "L.A. Jay - The Critic - S1 E9", 
		"source" : "Written by Steven Levitan" 
	},
	{
		"quote" : "Miserable - The Critic - S1 E4", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "The Love Life and Times of Joe and Helen - Wings - S6 E21", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Remembrance of Flings Past: Part 2 - Wings - S6 E17", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "All's Fare - Wings - S6 E7", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Twisted Sister - Wings - S6 E2", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Call of the Wild	- Wings - S5 E23", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Say Uncle, Carlton - Wings - S5 E15", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Joe Blows: Part 1 - Wings - S5 E7", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Black Eye Affair	- Wings - S5 E6", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Business or Pleasure	- Wings - S5 E4", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Date Package Number Seven - Wings - S4 E22", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "What the Cabbie Saw	- Wings - S4 E12", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Blackout Buggins	- Wings - S4 E4", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Say It Ain't So, Joe	- Wings - S3 E21", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Divorce, American Style - Wings - S3 E13", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "The Late Mrs. Biggins - Wings - S3 E10", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Nothing Personal	- The Larry Sanders Show - S4 E8", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Roseanne's Return - The Larry Sanders Show - S4 E1", 
		"source" : "Teleplay by Steve Levitan"
	},
	{
		"quote" : "Come Lie with Me	- Frasier - S3 E12", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "It's Hard to Say Goodbye If You Won't Leave	- Frasier - S3 E10", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Breaking the Ice	- Frasier - S2 E20", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Seat of Power - Frasier - S2 E11", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "The Dance - Stark Raving Mad - S1 E9", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "The Stalker - Stark Raving Mad - S1 E8", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Pilot - Stark Raving Mad - S1 E1", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Back Issues - Just Shoot Me! - S1 E1", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "In Your Dreams - Just Shoot Me! - S1 E5", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Old Boyfriends - Just Shoot Me! - S2 E3", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "My Dinner with Woody - Just Shoot Me! - S2 E6", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Rescue Me - Just Shoot Me! - S2 E23", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "Future Issues - Just Shoot Me! - S7 E21", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Father and Son Reunion - Greg the Bunny - S1 E8", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Welcome to Sweetknuckle Junction - Greg the Bunny - S1 E1", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Pilot - Back to You - S1 E1", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Something's Up There - Back to You - S1 E7", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Cradle to Grave - Back to You - S1 E8", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Pilot - Modern Family - S1 E1", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "The Incident - Modern Family - S1 E4", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Fifteen Percent - Modern Family - S1 E13", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Fears - Modern Family - S1 E16", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Unplugged - Modern Family - S2 E5", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Caught in the Act - Modern Family - S2 E13", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Boys' Night - Modern Family - S2 E18", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Treehouse - Modern Family - S3 E7", 
		"source" : "Written by Steven Levitan"
	},	
	{
		"quote" : "Send Out the Clowns - Modern Family - S3 E18", 
		"source" : "Written and directed by Steven Levitan"
	},	
	{
		"quote" : "Schooled - Modern Family - S4 E2", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Goodnight Gracie - Modern Family - S4 E24", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "Three Dinners - Modern Family - S5 E13", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "Message Received - Modern Family - S5 E22", 
		"source" : "Written by Steven Levitan"
	},
	{
		"quote" : "Connection Lost - Modern Family - S6 E16", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "Clean Out Your Junk Drawer - Modern Family - S7 E8", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "A Year of Birthdays - Modern Family - S10 E22", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "Finale Part 1 - Modern Family - S11 E17", 
		"source" : "Written and directed by Steven Levitan"
	},
	{
		"quote" : "Hawaii - Modern Family - S1 E23", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "See You Next Fall - Modern Family - S2 E23", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Baby on Board - Modern Family - S3 E24", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Bringing Up Baby	- Modern Family - S4 E1", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "When a Tree Falls - Modern Family - S4 E9", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Best Men - Modern Family - S4 E17", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Wow Factor - Modern Family - S4 E18", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "First Days - Modern Family - S5 E2", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Australia - Modern Family - S5 E20", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Wedding, Part 1 - Modern Family - S5 E23", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Fight or Flight - Modern Family - S6 E15", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "American Skyper - Modern Family - S6 E24", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Party - Modern Family - S7 E18", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Thanksgiving Jamboree - Modern Family - S8 E7", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Graduates - Modern Family - S8 E22", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "In Your Head - Modern Family - S9 E13", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Escape - Modern Family - S9 E21", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Kiss and Tell - Modern Family - S10 E2", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Yips and the Dead - L.A.-Vegas - S1 E2", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Pilot - L.A.-Vegas - S1 E1", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Slow Donnie - Just Shoot Me! - S3 E11", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Odd Couple: Part 1 - Just Shoot Me! - S3 E24", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Odd Couple: Part 2 - Just Shoot Me! - S3 E25", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "Fast Times at Finchmont High - Just Shoot Me! - S4 E24", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "The Grade - Stark Raving Mad - S1 E17", 
		"source" : "Directed by Steven Levitan"
	},
	{
		"quote" : "My Bodyguard - Stark Raving Mad - S1 E13", 
		"source" : "Directed by Steven Levitan"
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});