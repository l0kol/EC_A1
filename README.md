# EC_A1

## Struktura aplikacije
<code>EC_A1
|
├───backend
    ├───controllers
         ├───forum.js
         ├───store.js
         └───user.js
    ├───middleware
         └───authUser.js
    ├───models
          ├───Badge.js
          ├───Device.js
          ├───Element.js
          ├───Post.js
          ├───Product.js
          ├───Reply.js
          ├───Topic.js
          ├───User.js
          └───Wheel.js
    ├───routes
           ├───forum.js
           ├───store.js
           └───user.js
    ├───services
           ├───Post.js
           ├───Reply.js
           └───User.js
    ├───app.js
    └───config.js
|
├───client
    ├───App.js
    ├───App.css
    ├───config.js
    ├───index.css
    ├───index.js
    ├───public
    └───src
        └───components
            ├───PanelDevices.js
            ├───PanelForum.js
            ├───PanelHome.js
            ├───PanelLogin.js
            ├───PanelMain.js
            ├───PanelProfile.js
            ├───PanelRoom.js
            ├───PanelStore.js
            ├───PanelUgodnosti.js
            ├───PanelZrna.js
            ├───Error.js
            └───mixed
                 ├───ForumPosti.js
                 ├───NewPostModal.js
                 └───WheelOfFortune.js
        ├───Context
                 └───context.js
        ├───fonts
        └───images</code>

## Entitete z atributi

<code>User = ({
	name: {
    	required: true,
    	type: String
	},
	age: {
    	required: false,
    	type: Number
	},
	email: {
    	required: true,
    	type: String
	},
	password: {
    	required: true,
    	type: String
	},
	level: {
    	required: false,
    	type: Number
	},
	experience: {
    	required: false,
    	type: Number
	},
	coins: {
    	required: false,
    	type: Number
	},
	streak: {   
    	required: false,
    	type: Number
	},
	streakDate: {
    	required: false,
    	type: Date
	},
	role: {
    	required: false,
    	type: String
	},
})






Device = ({
	name: {
    	required: true,
    	type: String
	},
	purchasedAt: {
    	required: true,
    	type: Date
	},
	userId: {
    	required: true,
    	type: String
	},
    
})

------------------------------------------------------------------------------------------------------------------------

Badge = ({
	name: {
    	required: true,
    	type: String
	},
	purchasedAt: {
    	required: true,
    	type: Date
	},
	userId: {
    	required: true,
    	type: String
	},
    
})

--------------------------------------------------------------------------------------------------------------














Topic = ({
	name: {
    	required: true,
    	type: String
	},
	body: {
    	required: true,
    	type: String
	},
	createdAt: {
    	required: true,
    	type: Date
	},
	userId: {
    	required: true,
    	type: String
	},
})

--------------------------------------------------------------------------------------------------------------------
Post = ({
	title: {
    	required: true,
    	type: String
	},
	content: {
    	required: true,
    	type: String
	},
	createdAt: {
    	required: true,
    	type: Date
	},
	userId: {
    	required: true,
    	type: String
	},
	topic: {
    	required: true,
    	type: String
	}

})




Reply = ({
	postId: {
    	required: true,
    	type: String
	},
	content: {
    	required: true,
    	type: String
	},
	createdAt: {
    	required: true,
    	type: Date
	},
	userId: {
    	required: true,
    	type: String
	},
	upvotes: {
    	required: true,
    	type: Number
	},
	downvotes: {
    	required: true,
    	type: Number
	}
})

--------------------------------------------------------------------------------------------------------------------
Product = ({
	//array of elements
	name: {
    	required: true,
    	type: String
	},
	price: {
    	required: true,
    	type: Number
	},
	createdAt: {
    	required: true,
    	type: Date
	},
	experienceGain: {
    	required: true,
    	type: Number
	},
})

Wheel = ({
	//array of elements
	elements: {
    	required: true,
    	type: Array
	},
	createdAt: {
    	required: true,
    	type: Date
	},
})

--------------------------------------------------------------------------------------------------------------------
Element = ({
	//array of elements
	name: {
    	required: true,
    	type: String
	},
	createdAt: {
    	required: true,
    	type: Date
	},
	wheelId: {
    	required: true,
    	type: String
	},
	value: {
    	required: true,
    	type: Number
	},
})<code>

