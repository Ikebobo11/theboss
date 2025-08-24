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
        "heading":"Social Media Promotion & Services",
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
        "content":`
         We offer a complete suite of streaming platform promotion and artist services tailored to maximize visibility, grow listenership, and strengthen your presence across all major digital music platforms. Our services are designed to support both independent and established artists in navigating the complex music landscape by combining playlist pitching, platform advertising, audience growth, and artist verification under one expert-driven strategy.
On Spotify, we provide comprehensive support including playlist promotion and editorial pitching, helping your music land on both curated and algorithmic playlists to boost discovery. Our advertising and growth services utilize Spotify Ads and strategic campaign placements aimed at increasing streams, followers, and chart positioning. In addition, we assist with essential artist services such as Spotify for Artists verification, giving you full control over your profile and access to valuable listener analytics.
For artists on Audiomack, we deliver targeted playlist promotion across both curated and editorial lists to increase reach within the platform’s engaged community. Our growth strategies focus on increasing streams, follower counts, trending potential, and chart appearances, supported by both organic methods and paid advertising. We also handle critical artist support services like account merges—transferring content from auto-generated pages to official profiles—as well as profile authentication and monetization to ensure you’re fully recognized and rewarded for your work.
On Apple Music, we facilitate editorial playlist pitching and curated placements, positioning your music in front of targeted, genre-specific audiences. Our advertising and growth services are structured to drive streams, increase visibility on Apple Music charts, and amplify your brand through sponsored placements. We also assist with artist account claims, enabling full access to your Apple Music for Artists dashboard and performance insights.
For artists targeting the growing African and international markets via Boomplay, we offer curated and editorial playlist promotion, front banner placements, and chart-pushing campaigns designed to increase streams, followers, and overall engagement. Our team manages artist verification and profile claims, ensuring your presence on the platform is authentic and optimized for fan engagement and brand building.
On SoundCloud, our focus is on follower and play growth, driven by data-backed promotional campaigns that expand your reach within one of the largest communities of music creators and listeners. We also handle artist account merges and verification, helping consolidate your catalog and secure your official profile.
Our goal across all platforms is simple: to elevate your music, enhance your visibility, and ensure your presence on every major streaming service is professional, profitable, and built for long-term success. Whether you're launching a debut single or scaling a full catalog, our multi-platform approach ensures your music reaches the right audience, in the right way, at the right time.
        `,
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