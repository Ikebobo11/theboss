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
        "img":"./asset/Yellow Simple Horizontal Your Story.jpg",
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
        "img":"./asset/Yellow Simple Horizontal Your Story (1).jpg",
        "heading":"Streaming Platform Promotion & Services",
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
       "img":"./asset/Yellow Simple Horizontal Your Story (2).jpg",
       "heading":"Global Music Distribution, Music Video Distribution & Artist Services:",
       "content":`
       We provide a complete range of global music distribution, music video distribution, and artist support services designed to ensure your content reaches the widest audience possible, while maintaining the highest standards of professionalism and branding. Whether you're an emerging artist or an established act, our solutions are tailored to help you grow your presence, manage your content efficiently, and build a sustainable music career across all major digital platforms.
       Our music distribution services ensure your music is delivered to every major streaming platform worldwide—including Spotify, Apple Music, Audiomack, Boomplay, Deezer, Amazon Music, and many more—guaranteeing maximum reach and accessibility for your releases. Artists receive full access to a dedicated artist dashboard, allowing them to track real-time performance metrics such as streams, earnings, and audience demographics. We also provide full account setup services, taking care of professional profile creation, branding assets, and metadata management to ensure your presence across all platforms is polished, consistent, and optimized for discovery.
       As part of our content enhancement services, we offer lyrics distribution and creative solutions that help connect your audience to your music on a deeper level. This includes delivering lyrics to platforms like Spotify, Apple Music, Boomplay, Audiomack, and Shazam—so fans can follow along, search your songs easily, and engage more fully with your work. We also provide professional lyric video creation, custom-made for YouTube and social media promotion, as well as industry-standard lyrics writing assistance to elevate your songwriting and presentation.
       In addition, we offer comprehensive music video distribution services, helping you amplify your visual content on a global scale. We can distribute your videos to VEVO, creating an official branded VEVO channel (e.g., ArtistNameVEVO) for maximum credibility and exposure. Your music videos will also be uploaded and managed across platforms such as YouTube, Boomplay, and Apple Music, ensuring they are easily accessible to fans everywhere. Our video channel setup and branding services include professional design and optimization of banners, thumbnails, and profiles to maintain a high-impact, cohesive visual identity.
       Together, these services form an all-in-one infrastructure built to support your success in today’s digital music industry. From seamless global distribution and revenue tracking to content optimization and brand development, we handle the details—so you can focus on your music and your audience.
       `,
    },
        "#service4":{
       "img":"/asset/Yellow Simple Horizontal Your Story (3).jpg",
       "heading":"Uploads on Google Music Blogs, News & Newspaper Publications, PR & Publicity, and Music Blogging",
       "content":`
       We provide premium PR and publicity services designed to amplify your brand, music, or business across trusted media outlets and online platforms. Our services ensure that your story doesn’t just reach people but connects with the right audience, building credibility and influence both locally and internationally.
        Our Google Music Blog uploads place your content on high-ranking blogs and websites that are indexed by Google, giving your releases and announcements stronger visibility in search results. This increases your chances of being discovered organically by fans, industry professionals, and potential collaborators. These blog placements also strengthen your SEO presence, making your name and music appear more frequently across the web.
        In addition, we offer news and newspaper publication services with features in reputable outlets such as Vanguard, Thisday, Business Day, Punch, The Nation, The Guardian, and more. Whether you are an artist, entrepreneur, or creator, these publications give your work credibility, establish your professional image, and allow you to reach a wide demographic of readers who trust these platforms.
        Our PR & publicity strategies are crafted to tell your story in a way that resonates with your target audience. We create compelling press releases, exclusive features, and attention-grabbing stories that highlight your brand’s uniqueness and achievements. By leveraging both traditional media (print, radio, TV) and digital platforms, we ensure that your publicity campaigns create long-lasting impact.
        Alongside this, our music blogging services deliver comprehensive coverage of your projects, singles, albums, and events. Through carefully curated blog posts, reviews, and interviews, we help you connect with the global music community while establishing your presence in niche markets. Music blogging not only introduces your work to new listeners but also creates a digital footprint that strengthens your portfolio and professional standing.
        Analysis & Value:
        Visibility: Blog and news placements push your brand higher on Google search, making it easier for people to discover you.
        Credibility: Features in respected newspapers and outlets build authority and trust.
        Engagement: Blogging and PR create conversations that bring you closer to your audience.
        Longevity: Unlike ads that disappear, blog posts and news articles stay online, serving as long-term assets for your brand.
        Together, these services provide a powerful PR foundation to elevate your career, strengthen your image, and ensure your story reaches a global audience with maximum impact.
       `,
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


// animation

let paragraphs = document.querySelectorAll("p,img,h1");

function fadeInOnScroll() {
  let triggerBottom = window.innerHeight * 0.9; // 90% of viewport height

  paragraphs.forEach(function(p) {
    let pTop = p.getBoundingClientRect().top;

    if (pTop < triggerBottom) {
      p.classList.add("active"); // add class to animate
    }
  });
}

// Listen for scroll
window.addEventListener("scroll", fadeInOnScroll);

// Run on page load too
fadeInOnScroll();


