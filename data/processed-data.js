var characters = 
{
  "default":{
    "poses":{
    },
    "name":"Narrator"
  },

  "alice":{
    "poses":{
      "default":"img/VN_chara001_neutral.png",
      "happy":"img/VN_chara001_happy.png"
    },
    "name":"Alice"
  },

  "bobby":{
    "poses":{
      "default":"img/VN_chara002_neutral.png",
      "happy":"img/VN_chara002_happy.png"
    },
    "name":"Bobby"
  }
}; 
 var places = 
{
	"street" : {
		"name":"The street",
    	"image":"img/VN_scene001.png"
    }
}; 
 var story = 
[
	{
		"title": "Start",
		"tags": "",
		"body": "<<place street>>\n{{bobby,happy}} Hi welcome to the <b>demo</b>\n{{bobby}} I'll try to show you some of the features that you can use with this template\n{{bobby}} Can we start?\n[[Yes.|explanation]]\n[[No.|awkward_pause]]",
		"position": {
			"x": 615,
			"y": 109
		},
		"colorID": 0
	},
	{
		"title": "awkward_pause",
		"tags": "",
		"body": "{{bobby}} ...Okay.\n//This is awkward. Why did you say no?\n...\n{{bobby}} ...\n[[...]]\n[[...So, about that secret ending?|secret]] <<random 5>>\n{{bobby}} Can we...\n[[Yeah fine, let's start.|explanation]]\n[[I said no.|awkward_pause]]",
		"position": {
			"x": 928,
			"y": 324
		},
		"colorID": 0
	},
	{
		"title": "explanation",
		"tags": "",
		"body": "{{bobby}} Well there's not much to say honestly.\n{{bobby}} The documentation in README.md should give you most of the information you need.\n{{bobby}} Have you read it?\n[[Yeah it's very well written.|you_lier]]\n[[Not yet.|go_read_it]]\n[[Yes and it sucks. I hated it.|i_know_right]]",
		"position": {
			"x": 615,
			"y": 540
		},
		"colorID": 0
	},
	{
		"title": "i_know_right",
		"tags": "",
		"body": "{{bobby,happy}} Hahaha I don't care, I'm just a character in this story.\n//Well, I care. But yeah, the doc sucks for now. Sorry.\n[[{{bobby}} Anyway...|thanks_bobby]]",
		"position": {
			"x": 856,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "you_lier",
		"tags": "",
		"body": "<<string liedToBobby true>>\n{{bobby}} You don't have to lie to me...\n{{bobby,happy}} I know it sucks, that's why I'm here to provide at least a working example!\n[[{{bobby}} Anyway...|thanks_bobby]]",
		"position": {
			"x": 374,
			"y": 890
		},
		"colorID": 0
	},
	{
		"title": "go_read_it",
		"tags": "",
		"body": "{{bobby,happy}} Then do it now! It's a bit long but there are important things to know.\n{{bobby}} It should give you some advice on how to get started with your own game.\n{{bobby}} I'll just wait here.\n{{bobby}} ...\n[[{{bobby,happy}} Oh, you must be done reading since you're back here!|thanks_bobby]]",
		"position": {
			"x": 611,
			"y": 887
		},
		"colorID": 0
	},
	{
		"title": "thanks_bobby",
		"tags": "",
		"body": "{{bobby}} You can open this story file in your dialogue editor now.\n{{bobby,happy}} And then you should be ready to start working on your own game!\n{{alice}} Who's working on a game?\n{{bobby,happy}} Oh hi, Alice!\n{{alice}} Who are you talking to, Bobby?\n[[{{bobby}} I have no idea, but they're cool.]] <<string liedToBobby != true>>\n[[{{bobby}} I have no idea, but they're cool. Well they lied to me once but it's okay.]] <<string liedToBobby == true>>\n{{alice,happy}} Well good luck, stranger!\n[[{{bobby,happy}} See you soon!|end]]",
		"position": {
			"x": 606,
			"y": 1272
		},
		"colorID": 0
	},
	{
		"title": "secret",
		"tags": "",
		"body": "[[{{bobby,happy}} I'm glad you found it!|end]]",
		"position": {
			"x": 1210,
			"y": 1279
		},
		"colorID": 0
	}
]; 
