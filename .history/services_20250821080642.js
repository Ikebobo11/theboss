let hidela = document.querySelector(".hidela")
let hidelb = document.querySelector(".hidelb")
let menudiv = document.querySelector(".menudiv")
function menushow(){
    hidelb.style.display = "block"
    hidela.style.display = "none"
    menudiv.style.display ="block"
}
hidela.addEventListener("click",menushow)

function menuhide(){
    hidelb.style.display = "none"
    hidela.style.display = "block"
    menudiv.style.display ="none"
}
hidelb.addEventListener("click",menuhide)

// service explain js

let heading_content = document.querySelector(".heading_content")
let heading_explain = document.querySelector(".heading_explain")
let social = document.querySelector(".social")
let service = {
    "#service1":{
        "img":"./asset/social media show.jpg",
        "heading":"Social Media Ads & Campaigns",
        "content":"At The Boss Music Distribution & Marketing, we focus on getting your music heard by the right people through powerful social media promotion. Our ads strategy uses platforms like Facebook, Instagram, TikTok, and YouTube to place your music directly in front of potential fans. With eye-catching visuals, engaging copy, and smart targeting, we make sure your songs don’t just get seen — they get remembered. Beyond ads, we run full social media campaigns that create momentum around your music brand. From planned content schedules, fan engagement posts, and influencer collaborations, to release countdowns and interactive promotions, we help you build consistent hype. Our approach combines paid advertising with organic engagement, ensuring that every campaign not only boosts your numbers but also grows a real, loyal fanbase that supports your journey long-term."
    },
    "#service2":{
        "img":"",
        "heading":"Playlists (Editorial & Curated)",
        "content":"Getting your music on playlists is the fastest way to grow streams and fans. At The Boss Music Distribution & Marketing, we help artists land on both Editorial and Curated playlists.Editorial Playlists → Official playlists by Spotify, Apple Music, Audiomack, Boomplay, etc. (e.g. RapCaviar, Afrobeats Hits). We pitch your songs directly to DSP editors for maximum exposure.Curated Playlists → Managed by influencers, DJs, blogs & brands. We connect your music with the right tastemakers to reach real listeners who engage.With our playlisting service, your track gets visibility, streams, and credibility.Ready to be heard?",
    }
}

let servicehash = window.location.hash;

heading_content.innerText = service[servicehash]["heading"];
heading_explain.innerText = service[servicehash]["h"]