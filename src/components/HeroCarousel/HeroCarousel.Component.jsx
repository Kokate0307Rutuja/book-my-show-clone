import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
      "genre_ids": [
        14,
        28,
        35
      ],
      "id": 616037,
      "original_language": "en",
      "original_title": "Thor: Love and Thunder",
      "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      "popularity": 1275.141,
      "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date": "2022-07-06",
      "title": "Thor: Love and Thunder",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 4517
    },
      {
        "adult": false,
        "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 663712,
        "original_language": "en",
        "original_title": "Terrifier 2",
        "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        "popularity": 7035.54,
        "poster_path": "/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg",
        "release_date": "2022-10-06",
        "title": "Terrifier 2",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 416
      },
      {
        "adult": false,
        "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genre_ids": [
          28,
          14,
          878
        ],
        "id": 436270,
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "popularity": 3936.982,
        "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
        "release_date": "2022-10-19",
        "title": "Black Adam",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 876
      },
      {
        "adult": false,
        "backdrop_path": "/pGx6O6IwqADOsgmqWzPysmWnOyr.jpg",
        "genre_ids": [
          28,
          14
        ],
        "id": 732459,
        "original_language": "en",
        "original_title": "Blade of the 47 Ronin",
        "overview": "In this sequel to \"47 Ronin,\" a new class of warriors emerges among the Samurai clans to keep a sought-after sword from falling into the wrong hands.",
        "popularity": 3402.012,
        "poster_path": "/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg",
        "release_date": "2022-10-25",
        "title": "Blade of the 47 Ronin",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 40
      },
      
      {
        "adult": false,
        "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        "genre_ids": [
          10751,
          16,
          14,
          10402,
          35,
          12
        ],
        "id": 354912,
        "original_language": "en",
        "original_title": "Coco",
        "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        "popularity": 1532.497,
        "poster_path": "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        "release_date": "2017-10-27",
        "title": "Coco",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 16432
      },
      {
        "adult": false,
        "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
        "genre_ids": [
          27,
          53,
          9648
        ],
        "id": 717728,
        "original_language": "en",
        "original_title": "Jeepers Creepers: Reborn",
        "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        "popularity": 1881.269,
        "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        "release_date": "2022-09-15",
        "title": "Jeepers Creepers: Reborn",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 427
      },
      {
        "adult": false,
        "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
        "genre_ids": [
          53
        ],
        "id": 985939,
        "original_language": "en",
        "original_title": "Fall",
        "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        "popularity": 1714.541,
        "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
        "release_date": "2022-08-11",
        "title": "Fall",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1632
      },
      {
        "adult": false,
        "backdrop_path": "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
        "genre_ids": [
          14,
          35,
          10751
        ],
        "id": 642885,
        "original_language": "en",
        "original_title": "Hocus Pocus 2",
        "overview": "29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
        "popularity": 1745.581,
        "poster_path": "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
        "release_date": "2022-09-27",
        "title": "Hocus Pocus 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1023
      },
      {
        "adult": false,
        "backdrop_path": "/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg",
        "genre_ids": [
          878
        ],
        "id": 575322,
        "original_language": "en",
        "original_title": "Звёздный разум",
        "overview": "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
        "popularity": 1579.057,
        "poster_path": "/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg",
        "release_date": "2022-01-06",
        "title": "Project Gemini",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 148
      },
      {
        "adult": false,
        "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 760161,
        "original_language": "en",
        "original_title": "Orphan: First Kill",
        "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        "popularity": 1666.455,
        "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
        "release_date": "2022-07-27",
        "title": "Orphan: First Kill",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1233
      },
      {
        "adult": false,
        "backdrop_path": "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
        "genre_ids": [
          28,
          12,
          14
        ],
        "id": 960704,
        "original_language": "ja",
        "original_title": "鋼の錬金術師 完結編 最後の錬成",
        "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
        "popularity": 1432.304,
        "poster_path": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
        "release_date": "2022-06-24",
        "title": "Fullmetal Alchemist: The Final Alchemy",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 112
      },
      {
        "adult": false,
        "backdrop_path": "/b2FxWOxe9K7ZZ1uaPOze2RJ1ajq.jpg",
        "genre_ids": [
          27,
          28,
          35
        ],
        "id": 675054,
        "original_language": "es",
        "original_title": "MexZombies",
        "overview": "A group of teenagers must face a zombie apocalypse, and help reestablish order.",
        "popularity": 1988.739,
        "poster_path": "/pTxw4GFE3ZfzJfvuUsPyD5njAuI.jpg",
        "release_date": "2022-10-26",
        "title": "MexZombies",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 42
      },
      {
        "adult": false,
        "backdrop_path": "/mMA2YNddowV8MZtxpbn0a7Yilum.jpg",
        "genre_ids": [
          10752,
          36,
          28,
          18
        ],
        "id": 928123,
        "original_language": "zh",
        "original_title": "长津湖之水门桥",
        "overview": "In the follow-up to \"The Battle At Lake Changjin\", brothers Wu Qianli and Wu Wanli undertake a new task for the People's Volunteer Army, defending a bridge part of the American troops' escape route from the advancing Chinese.",
        "popularity": 1381.165,
        "poster_path": "/ugiL6wIhl1OfPyv1gqLkTe45jLl.jpg",
        "release_date": "2022-02-01",
        "title": "The Battle at Lake Changjin: Water Gate Bridge",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 23
      },
      {
        "adult": false,
        "backdrop_path": "/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg",
        "genre_ids": [
          28,
          35,
          53
        ],
        "id": 718930,
        "original_language": "en",
        "original_title": "Bullet Train",
        "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        "popularity": 1371.757,
        "poster_path": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        "release_date": "2022-07-03",
        "title": "Bullet Train",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2184
      },
      {
        "adult": false,
        "backdrop_path": "/ttkibtcAjoilW1PbTIFy9U9YOdB.jpg",
        "genre_ids": [
          53,
          28
        ],
        "id": 916719,
        "original_language": "en",
        "original_title": "Code Name Banshee",
        "overview": "Caleb, a former government assassin in hiding, who resurfaces when his protégé, the equally deadly killer known as Banshee, discovers a bounty has been placed on Caleb's head.",
        "popularity": 1316.492,
        "poster_path": "/g29dShv0wHJUvif2KPq039imds5.jpg",
        "release_date": "2022-07-01",
        "title": "Code Name Banshee",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 40
      },
      {
        "adult": false,
        "backdrop_path": "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
        "genre_ids": [
          14,
          28,
          18
        ],
        "id": 779782,
        "original_language": "en",
        "original_title": "The School for Good and Evil",
        "overview": "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
        "popularity": 1346.101,
        "poster_path": "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
        "release_date": "2022-10-19",
        "title": "The School for Good and Evil",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 486
      },
      
      {
        "adult": false,
        "backdrop_path": "/60UN7vvcWWggLe0Uz9EFZJx718P.jpg",
        "genre_ids": [
          53
        ],
        "id": 879538,
        "original_language": "en",
        "original_title": "Crawlspace",
        "overview": "After witnessing a brutal murder in a cabin, a man hides in a crawlspace while the killers scour the property for a hidden fortune. As they draw nearer, he must decide if the crawlspace will be his tomb or the battleground in his fight for survival.",
        "popularity": 1254.474,
        "poster_path": "/qEu6qI5sVoIe10gD1BQBqxcNIW2.jpg",
        "release_date": "2022-03-31",
        "title": "Crawlspace",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 62
      },
      {
        "adult": false,
        "backdrop_path": "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 616820,
        "original_language": "en",
        "original_title": "Halloween Ends",
        "overview": "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
        "popularity": 1262.441,
        "poster_path": "/h1FGQ6FRW6kNx4ACxjCJ18ssW3Y.jpg",
        "release_date": "2022-10-12",
        "title": "Halloween Ends",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 868
      },
    
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },


  ]);
  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    //speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;