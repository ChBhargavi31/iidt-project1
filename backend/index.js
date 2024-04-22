const express =require('express');
const bodyParser=require('body-parser');
const cors=require("cors");

const PORT =3001;

const eventCards=[
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285cda678b1829dc43227a_Art_Circle_AdobeCreativeCloudExpress%20(1).gif" ,
        altText:"The Art Circle",
        title:"The Art Circle" ,
        description:"Standing in a corner alone is not allowed at PHP!Throw the awkwardness out of the window and get ready for some amazing activities,stories, poems and laughter. You can share your thoughts, and listen to interestingstories that others share."  ,
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afac38bbc65b28058d7_Music_therapy_AdobeCreativeCloudExpress.gif" ,
         altText:"Music Therapy",
         title:"Music Therapy", 
         description:"PHP Music Therapy comes with a twist. Yes, there is music and there is singing but not the boring way. You have to sing with all your heart. So, go loud and don't worry about anyone judging you because we'll all join you. Just feel happy with every beat!",
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afab760cc735e363846_Dabba_Party_AdobeCreativeCloudExpress.gif",
        altText:"The Dabba Party",
        title:"The Dabba Party" ,
        description:"Remember school's lunch time when everyone would share their dabbas? We bring back those times at PHP with our exclusive potluck party. Bring your favourite dish to share and end up with a feast!.",
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afa72174b68c65943ac_Friend_AdobeCreativeCloudExpress.gif" ,
        altText:"Find your friend-mate",
        title:"Find your friend-mate" ,
        description:"Our house party vibe can turn strangers into friends in no time. Don't believe? Attend a party and see for yourself. You will find people from different fields whose thoughts and vibes match yours. And our interesting party events will make sure you find one quickly!",
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afaa0603f8505532ca2_Stage_AdobeCreativeCloudExpress.gif" ,
         altText:"Feel The Stage",
         title:"Feel The Stage" ,
         description:"Enjoy the stunning performances of amazing poets, singers, artists and people like you! Yes, it's a people's party and we open the stage for everyone who wants to show their hidden talent. So, leave your hesitation aside and get on the stage!",
    },
    {
        imgURL:"https://assets-global.website-files.com/6224703e7862127338280ea4/62285afa8bc591724b7f8b2c_Party_games_AdobeCreativeCloudExpress.gif" ,
         altText:"P.S. We Love Games",
         title:"P.S. We Love Games" ,
         description:"And trust us, you are going to love them too! There are ice-breakers,hilarious games and then there are games that will keep the good vibes alive! We love surprises and that's why we'll keep the games a surprise. Join us to experience them.",
    },
];

const cityData=[
    {
        city:"hyderabad",
        eventDate:"30-04-2024",
    },
    {
        city:"bengaluru",
        eventDate:"01-05-2024",
    },
    {
        city:"vizag",
        eventDate:"02-05-2024",
    },
];
const app =express();

app.use(bodyParser.json());
app.use(cors());

app.get("/eventCards",(req,res) => {
    res.json(eventCards);
});

app.get("/:city",(req,res)=>{
    let userCity =req.params.city;
    let result= cityData.find((index) => index.city === userCity);
    res.json({message:"you are currently on " + result.eventDate});
});

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});