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
let social = document.querySelector(".socialimg")
let service = {
    "#service1":{
        "img":"./asset/FALL (3)sm.jpg",
        "headings":"Social Media Ads & Campaigns",
        "content":`
        We specialize in delivering comprehensive social media promotion and growth services designed to help music artists, influencers, and content creators expand their digital presence across major platforms like TikTok, Instagram, and Facebook. Our approach combines data-driven strategy, creative execution, and targeted outreach to ensure real, measurable growth and lasting brand impact.
        On TikTok, we offer a range of services tailored to maximize visibility and engagement. This includes strategic follower, like, and view growth through organic and paid campaigns, as well as TikTok Ads for precise audience targeting. For artists, we provide specialized solutions such as song claiming under verified artist profiles, helping ensure your music is correctly attributed and discoverable. Additionally, we execute influencer campaigns, collaborating with top TikTok creators to feature your sound in viral content—driving both music streams and brand recognition.
        On Instagram, our services are designed to elevate your profile through both engagement growth and sponsored advertising. We focus on increasing real followers, post interactions, and video views, while also running highly-targeted ad campaigns to reach audiences who are most likely to engage with your content or music. These campaigns are optimized to align with your goals—whether that’s building a fanbase, launching a product, or amplifying your latest release.
    For Facebook, we apply a similar dual approach of engagement growth and targeted advertising, helping grow page likes, post engagement, and follower count. Our sponsored ad services ensure your content reaches a curated audience based on demographics, interests, and behavior, maximizing return on investment and brand impact.
Whether you're an emerging artist looking to break through, a content creator aiming to grow your online presence, or a brand seeking real digital traction, our tailored social media strategies are built to drive results, foster engagement, and build long-term visibility in an ever-evolving digital landscape.
        `
    },
    "#service2":{
        "img":"./asset/PLAY - Copy.jpg",
        "heading":"Playlists (Editorial & Curated)",
        "content":"Getting your music on playlists is the fastest way to grow streams and fans. At The Boss Music Distribution & Marketing, we help artists land on both Editorial and Curated playlists.Editorial Playlists → Official playlists by Spotify, Apple Music, Audiomack, Boomplay, etc. (e.g. RapCaviar, Afrobeats Hits). We pitch your songs directly to DSP editors for maximum exposure.Curated Playlists → Managed by influencers, DJs, blogs & brands. We connect your music with the right tastemakers to reach real listeners who engage.With our playlisting service, your track gets visibility, streams, and credibility.Ready to be heard?",
    },
    "#service3":{
       "img":"./asset/hyu.webp",
       "heading":"Music & Lyrics Distribution",
       "content":`At The Boss Music Distribution & Marketing, we make sure your music and lyrics reach the world. We distribute your
       songs to all major streaming platforms and digital stores like Spotify, Apple Music, YouTube Music, Audiomack, Boomplay, Deezer, Tidal, Amazon Music, Shazam, and more — ensuring your music is available globally, properly credited, and earning you royalties.
       We also handle lyrics distribution, making your words appear in sync across platforms like Spotify, Apple Music, Instagram, TikTok, YouTube Music, Boomplay, and Deezer. This lets fans sing along in real time, use your lyrics in short videos, and connect with your music on a deeper level.
       With our combined distribution service, your songs and lyrics are everywhere your fans are listening, watching, and engaging.`,
    },
        "#service4":{
       "img":"",
       "heading":"",
       "content":"",
    },
        "#service5":{
       "img":"",
       "heading":"",
       "content":"",
    },
        "#service6":{
       "img":"",
       "heading":"",
       "content":"",
    },

}

let servicehash = window.location.hash;

heading_content.innerText = service[servicehash]["heading"];
heading_explain.innerText = service[servicehash]["content"];
social.src = service[servicehash]["img"];