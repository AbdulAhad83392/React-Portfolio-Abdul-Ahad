import React from 'react';

export default function Main() {
    const articles = [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Geoffrey Seiler, The Motley Fool",
            "title": "Nvidia's CEO Says Demand for Its New Chips Is \"Insane.\" Is It Time to Buy the Stock?",
            "description": "Why demand for Nvidia's GPUs is likely to remain robust for the foreseeable future.",
            "url": "https://finance.yahoo.com/news/nvidias-ceo-says-demand-chips-111500464.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-10-06T11:15:00Z",
            "content": "Nvidia(NASDAQ: NVDA) has been one of the best performing stocks the past few years, as demand has skyrocketed for its graphics processing units that help build out artificial intelligence (AI) infras… [+5972 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "Nvidia, Microsoft, SoftBank, and Cathie Wood's Ark Invest Are Betting Big on This AI Startup",
            "description": "OpenAI was founded in 2015 by a team of researchers and entrepreneurs which included Sam Altman, Peter Thiel, and Tesla Chief Executive Offficer Elon Musk. It was established as a not-for-profit research organization with a mission to develop artificial intel…",
            "url": "https://biztoc.com/x/dec6666e94295bab",
            "urlToImage": "https://biztoc.com/cdn/dec6666e94295bab_s.webp",
            "publishedAt": "2024-10-06T11:11:31Z",
            "content": "OpenAI was founded in 2015 by a team of researchers and entrepreneurs which included Sam Altman, Peter Thiel, and Tesla Chief Executive Offficer Elon Musk. It was established as a not-for-profit rese… [+132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investopedia"
            },
            "author": "Terry Lane",
            "title": "What To Expect in the Markets This Week",
            "description": "Coming up: Big bank earnings, Tesla robotaxi event, CPI inflation, Federal Reserve officials' remarks and meeting minutes, consumer credit",
            "url": "https://www.investopedia.com/what-to-expect-in-the-markets-this-week-oct-7-2024-8722570",
            "urlToImage": "https://www.investopedia.com/thmb/bl7IbhLvl1S4Vo1Qjx7qW-pYfSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_JPMorganChaseHQ_GettyImages-548207569-0e2f2f6c1cae462fbf5deeb0076d4998.jpg",
            "publishedAt": "2024-10-06T11:00:00Z",
            "content": "<ul><li>JPMorgan Chase, Wells Fargo, and BlackRock earnings are on tap for this week, as well as quarterly financial reports from Delta Air Lines and PepsiCo.</li><li>Tesla is expected to show off it… [+5751 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Bill Stone, Contributor, \n Bill Stone, Contributor\n https://www.forbes.com/sites/bill_stone/",
            "title": "Robust Job Gains Remove Recession Fears",
            "description": "The jobs report removed recession fears but slowed the path of rate cuts and sent yields higher. CPI and earnings season are the significant milestones this week.",
            "url": "https://www.forbes.com/sites/bill_stone/2024/10/06/robust-job-gains-remove-recession-fears/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67019ccf3b655c8c44757739/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-10-06T11:00:00Z",
            "content": "The jobs report was so broadly strong that it signaled the end of the recent labor market cooling ... [+] trend.\r\ngetty\r\nThe September jobs report on Friday put to rest any fears that the labor marke… [+4253 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "‘It’s Bunk’—Legend Of Bitcoin’s Mystery Creator Satoshi Nakamoto Suddenly Deepens As Price Braces For A Bombshell",
            "description": "A new documentary out this coming week is claiming to have solved the biggest mystery on the internet—who created bitcoin?",
            "url": "https://www.forbes.com/sites/digital-assets/2024/10/06/its-bunk-legend-of-bitcoins-mystery-creator-satoshi-nakamoto-suddenly-deepens-as-price-braces-for-a-bombshell/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/651aab55b9e97320bd806012/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-10-06T10:45:16Z",
            "content": "Bitcoin'sBitcoin\r\n mysterious creator Satoshi Nakamotowho disappeared in 2011has become one of the most fascinating legends of the modern age.\r\nUnlock over $3,000 in perks including unparalleled acce… [+4476 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cnbeta.com.tw"
            },
            "author": null,
            "title": "理想高速充电桩为何“敞开门做生意”？工作人员：通知要求开放",
            "description": "10月6日，此前，“理想高速充电桩被其他品牌车辆抢占”相关话题受到网络热议。有博主称：“补能高峰时段，也不提供本品牌车主的倾斜政策就对车主的体验有很大影响。”另有博主称：“支持理想汽车在高峰时加入倾斜性保护策略，不然自建价值减弱很多。”\r\n\n对此，凤凰网科技就自家高速充电桩为何不对其他品牌车辆暂停服务等问题，询问到理想汽车负责充电网络相关问题的员工。对方表示，“这是接到相关通知，需要对三方车型进行开放。”在被追问城区充电桩是否也有开放要求时，对方表示，“城区也有类似的情况。”凤凰网科技查询了解到，在2023年06…",
            "url": "https://www.cnbeta.com.tw/articles/tech/1448183.htm",
            "urlToImage": "https://static.cnbetacdn.com/article/2024/1006/4f57128195e5f7f.jpg",
            "publishedAt": "2024-10-06T10:35:12Z",
            "content": "iPhone 16 Pro MaxGalaxy S24 Ultra\r\n2024-10-06 420"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Anthony Di Pizio, The Motley Fool",
            "title": "Nvidia, Microsoft, SoftBank, and Cathie Wood's Ark Invest Are Betting Big on This AI Startup",
            "description": "OpenAI just closed one of the largest private funding rounds in American history.",
            "url": "https://finance.yahoo.com/news/nvidia-microsoft-softbank-cathie-woods-102300615.html/",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
            "publishedAt": "2024-10-06T10:23:00Z",
            "content": "OpenAI was founded in 2015 by a team of researchers and entrepreneurs which included Sam Altman, Peter Thiel, and Tesla Chief Executive Offficer Elon Musk. It was established as a not-for-profit rese… [+7125 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilfattoquotidiano.it"
            },
            "author": "F. Q.",
            "title": "Mark Zuckerberg prende la rincorsa e supera Jeff Bezos, conquistando il titolo di secondo “Paperone” a livello mondiale. Al vertice c’è solo Elon Musk al comando",
            "description": "L’amministratore delegato di Meta vale 210,7 miliardi di dollari contro i 209,2 del fondatore di Amazon\nL'articolo Mark Zuckerberg prende la rincorsa e supera Jeff Bezos, conquistando il titolo di secondo “Paperone” a livello mondiale. Al vertice c’è solo Elo…",
            "url": "https://www.ilfattoquotidiano.it/2024/10/06/mark-zuckerberg-prende-la-rincorsa-e-supera-jeff-bezos-conquistando-il-titolo-di-secondo-paperone-a-livello-mondiale-al-vertice-ce-solo-elon-musk-al-comando/7719948/",
            "urlToImage": "https://st.ilfattoquotidiano.it/wp-content/uploads/2024/08/27/2808-nazioeco15_a01451345ph02_31514-1200x630.jpg",
            "publishedAt": "2024-10-06T10:08:53Z",
            "content": "Cambiamenti nella classifica dei ricchi del mondo. Secondo Bloomberg Billionaires Index, Mark Zuckerberg supera Jeff Bezos e conquista il titolo di secondo paperone alle spalle solo di Elon Musk. Lam… [+1881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Begeek.fr"
            },
            "author": "Benjamin",
            "title": "La SEC enquête sur les pratiques commerciales de Fisker",
            "description": "Quatre mois après avoir déposé le bilan, la start-up de véhicules électriques a reçu plusieurs assignations de la part de la Securities and Exchange Commission (SEC).",
            "url": "https://www.begeek.fr/la-sec-enquete-sur-les-pratiques-commerciales-de-fisker-404960",
            "urlToImage": "https://www.begeek.fr/wp-content/uploads/2024/10/Fisker.jpg",
            "publishedAt": "2024-10-06T10:00:25Z",
            "content": "Quatre mois après avoir déposé le bilan, la start-up de véhicules électriques a reçu plusieurs assignations de la part de la Securities and Exchange Commission (SEC).\r\nTl;dr\r\n<ul><li>La startup Fiske… [+1972 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Peter Green",
            "title": "Sunday Reads: America's electric car divide",
            "description": "Hello, Quartz members, and welcome to Sunday Reads!Read more...",
            "url": "https://qz.com/emails/quartz-obsession/1851664833/electric-cars-evs-us-politics-banks-fintechs",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/49360fbe8022a3b5e1f95c46ff4d9bde.jpg",
            "publishedAt": "2024-10-06T10:00:00Z",
            "content": "Hello, Quartz members, and welcome to Sunday Reads!\r\nTim Walz and JD Vance held a vice presidential debate, 45,000 dockworkers walked off the job from Maine to Texas but quickly came back, and the da… [+2850 chars]"
        },
        {
            "source": {
                "id": "liberation",
                "name": "Libération"
            },
            "author": "LIBERATION, AFP",
            "title": "De retour à Butler, où on a tenté de l’assassiner en juillet, Donald Trump assure qu’il n’abandonnera «jamais»",
            "description": "Le candidat républicain à la présidentielle américaine organisait samedi un meeting sous haute surveillance dans la ville de Pennsylvanie où un homme avait tenté de l’abattre, le 13 juillet.",
            "url": "https://www.liberation.fr/international/amerique/de-retour-a-butler-ou-on-a-tente-de-lassassiner-en-juillet-donald-trump-assure-quil-nabandonnera-jamais-20241006_H2FLCXF46ZDDBITALKGEOACKWU/",
            "urlToImage": "https://www.liberation.fr/resizer/9ukvuWoIZ1K1_egjxJHCW4SlduY=/1200x630/filters:format(jpg):quality(70):focal(4424x2965:4434x2975)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/O7RLWFW7MVA4DMUJDLI6EVWLEU.jpg",
            "publishedAt": "2024-10-06T09:52:56Z",
            "content": "De retour sur les lieux de la tentative dassassinat. Donald Trump est revenu samedi à Butler, où il avait réchappé de peu à la mort le 13 juillet dernier. Devant plusieurs milliers de personnes rasse… [+1997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digi24.ro"
            },
            "author": "Iulian Bîrzoi",
            "title": "Elon Musk, dezinformare cu privire la scrutinul din SUA. El susține că democrații vor „elimina” alegerile",
            "description": "Vorbind la mitingul fostului președinte din Butler, Pennsylvania - unde republicanul a fost aproape asasinat în iulie - CEO-ul X și Tesla a avertizat că „acestea vor fi ultimele alegeri” dacă candidatul republicanilor Donald Trump nu câștigă.",
            "url": "https://www.digi24.ro/stiri/externe/elon-musk-dezinformare-cu-privire-la-scrutinul-din-sua-el-sustine-ca-democratii-vor-elimina-alegerile-2957633",
            "urlToImage": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA4dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjQl/MkYxMCUyRjA2JTJGMjA5NTU2MF8yMDk1/NTYwX3Byb2ZpbWVkaWEtMDkxNjkzNDI2/MC5qcGcmdz0xMjAwJmg9NjMwJnpjPTEm/aGFzaD04NGE2OTVlZGM0MWRjNjczMDE2NmJmOTBlYWFlNDNhMQ==.thumb.jpg",
            "publishedAt": "2024-10-06T09:50:45Z",
            "content": "Vorbind la mitingul fostului preedinte din Butler, Pennsylvania - unde republicanul a fost aproape asasinat în iulie - CEO-ul X i Tesla a avertizat c acestea vor fi ultimele alegeri dac candidatul re… [+2078 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Tesla Robotaxi Buzz Soars Ahead Of Thursday Event, Rivian Seeks DOE Loan For Georgia Plant, Nikola Thumps Estimates And More: Biggest EV Stories Of The Week",
            "description": "Tesla Robotaxi Buzz Soars Ahead Of Thursday Event, Rivian Seeks DOE Loan For Georgia Plant, Nikola Thumps Estimates And More: Biggest EV Stories Of The Week Benzinga\nTesla Third Quarter 2024 Production, Deliveries & Deployments Tesla Investor Relations\nTesla …",
            "url": "https://biztoc.com/x/99ac846d2d835068",
            "urlToImage": "https://biztoc.com/cdn/803/og.png",
            "publishedAt": "2024-10-06T09:31:33Z",
            "content": "Tesla Robotaxi Buzz Soars Ahead Of Thursday Event, Rivian Seeks DOE Loan For Georgia Plant, Nikola Thumps Estimates And More: Biggest EV Stories Of The Week BenzingaTesla Third Quarter 2024 Productio… [+138 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilpost.it"
            },
            "author": null,
            "title": "I 100 anni della radio in Italia",
            "description": "Nacque il 6 ottobre del 1924, quando andò in onda la prima trasmissione, un concerto di musica classica",
            "url": "https://www.ilpost.it/2024/10/06/100-anni-radio-italia-prima-trasmissione/",
            "urlToImage": "https://www.ilpost.it/wp-content/uploads/2024/10/06/1728201478-h_00581199.jpg",
            "publishedAt": "2024-10-06T09:27:49Z",
            "content": "Alle 21 del 6 ottobre del 1924 venne trasmessa per la prima volta in Italia una trasmissione radiofonica. Era un lunedì e da uno studio di piazza del Popolo a Roma fu trasmesso via radio un concerto … [+5386 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-10-06T09:25:01Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Huffingtonpost.es"
            },
            "author": "Redacción HuffPost / Europa Press",
            "title": "Elon Musk respalda a Trump en un mitin en Butler, lugar en el que sufrió el intento de asesinato",
            "description": "<![CDATA[<p>El expresidente y candidato republicano a la Casa Blanca, Donald Trump, ha reunido este sábado a sus seguidores en un mitin celebrado en Butler, la ciudad del estado de Pensilvania donde el pasado julio sobrevivió a un intento de asesinato, result…",
            "url": "https://www.huffingtonpost.es/global/elon-musk-respalda-trump-mitin-butler-lugar-sufrio-intento-asesinato.html",
            "urlToImage": "https://img.huffingtonpost.es/files/og_thumbnail/uploads/2024/10/06/donald-trump-y-elon-musk.jpeg",
            "publishedAt": "2024-10-06T09:20:17Z",
            "content": "El expresidente y candidato republicano a la Casa Blanca, Donald Trump, ha reunido este sábado a sus seguidores en un mitin celebrado en Butler, la ciudad del estado de Pensilvania donde el pasado ju… [+3679 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "Musk leaps onto stage at Trump rally (VIDEO)",
            "description": "Elon Musk has joined Trump at a Pennsylvania rally, endorsing the Republican as the champion of democracy Read Full Article at RT.com",
            "url": "https://www.rt.com/news/605318-musk-leap-trump-rally/",
            "urlToImage": "https://mf.b37mrtl.ru/files/2024.10/article/67024f492030274f1e2e1e92.jpg",
            "publishedAt": "2024-10-06T09:17:26Z",
            "content": "Tesla and SpaceX CEO Elon Musk has made an appearance at a Donald Trump rally, endorsing the Republican presidential nominee as the only one who can save democracy in the US.\r\nAddressing an excited c… [+2067 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techmeme.com"
            },
            "author": null,
            "title": "Some ride-hailing drivers are using Teslas with FSD as makeshift robotaxis, saying it lets them work longer hours by reducing stress, amid safety concerns (Reuters)",
            "description": "Reuters:\nSome ride-hailing drivers are using Teslas with FSD as makeshift robotaxis, saying it lets them work longer hours by reducing stress, amid safety concerns  —  A self-driving Tesla carrying a passenger for Uber (UBER.N) rammed into an SUV at an inters…",
            "url": "https://www.techmeme.com/241006/p3",
            "urlToImage": "https://www.reuters.com/resizer/v2/OA6HL7QDLROFLFE6IUAZYG4NYE.jpg?auth=c859990f77e132d4493b2f24b59a9f00f2ed318a504a2938365382e78ec047df&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-10-06T09:05:04Z",
            "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 5:05 AM ET, October 6, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo vi… [+69 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Vinamrata Chaturvedi",
            "title": "Nvidia's AI summit, Tesla's robotaxi, Amazon Prime Day, inflation: What to watch in the markets this week",
            "description": "Last week closed on a positive note, with two key developments easing concerns about the economy. A strong jobs report helped calm fears of a weakening labor market, while the resolution of the dockworkers’ strike alleviated worries about supply chain disrupt…",
            "url": "https://qz.com/nvidia-ai-tesla-robotaxi-amazon-prime-day-stock-market-1851665454",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ca55d729a7ddd173ac7fda7cbc50e73d.jpg",
            "publishedAt": "2024-10-06T09:00:00Z",
            "content": "In This Story\r\nLast week closed on a positive note, with two key developments easing concerns about the economy. A strong jobs report helped calm fears of a weakening labor market, while the resoluti… [+3276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "newsweek.com",
            "title": "Elon Musk's Appearance at Donald Trump Rally Mocked: 'Cringing'",
            "description": "A number of Donald Trump critics have mocked Elon Musk over his appearance alongside the former president at a Pennsylvania rally.\nMusk, the billionaire owner of X, formerly Twitter, and CEO of SpaceX and Tesla, joined Trump onstage in Butler on Saturday to s…",
            "url": "https://biztoc.com/x/b9b3c2e27e065772",
            "urlToImage": "https://biztoc.com/cdn/b9b3c2e27e065772_s.webp",
            "publishedAt": "2024-10-06T08:57:59Z",
            "content": "A number of Donald Trump critics have mocked Elon Musk over his appearance alongside the former president at a Pennsylvania rally.Musk, the billionaire owner of X, formerly Twitter, and CEO of SpaceX… [+131 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Ewan Palmer",
            "title": "Elon Musk's Appearance at Donald Trump Rally Mocked: 'Cringing'",
            "description": "The billionaire tech mogul joined the former president onstage in Butler, Pennsylvania, on Saturday.",
            "url": "https://www.newsweek.com/elon-musk-donald-trump-rally-butler-pennsylvania-1964473",
            "urlToImage": "https://d.newsweek.com/en/full/2488443/elon-musk-donald-trump.jpg",
            "publishedAt": "2024-10-06T08:57:14Z",
            "content": "A number of Donald Trump critics have mocked Elon Musk over his appearance alongside the former president at a Pennsylvania rally.\r\nMusk, the billionaire owner of X, formerly Twitter, and CEO of Spac… [+4009 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Securityaffairs.com"
            },
            "author": "Pierluigi Paganini",
            "title": "Google Pixel 9 supports new security features to mitigate baseband attacks",
            "description": "Google announced that its Pixel 9 has implemented new security features, and it supports measures to mitigate baseband attacks. Pixel phones are known for their strong security features, particularly in protecting the cellular baseband, which is the processor…",
            "url": "https://securityaffairs.com/169402/security/google-pixel-9-mitigates-baseband-attacks.html",
            "urlToImage": "https://securityaffairs.com/wp-content/uploads/2014/12/ss7-surveillance.jpg",
            "publishedAt": "2024-10-06T08:44:36Z",
            "content": "Google Pixel 9 supports new security features to mitigate baseband attacks\r\n | WordPress LiteSpeed Cache plugin flaw could allow site takeover\r\n | Apple iOS 18.0.1 and iPadOS 18.0.1 fix media session… [+106429 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Observador.pt"
            },
            "author": "Alfredo Lavrador",
            "title": "Setembro. Tesla liderou nos BEV, Mercedes nos PHEV",
            "description": "Os portugueses revelaram as suas preferências entre os modelos que usam baterias recarregáveis e, em Setembro, a maioria optou pelos eléctricos da Tesla e pelos modelos híbridos plug-in da Mercedes.",
            "url": "https://observador.pt/2024/10/06/setembro-tesla-liderou-nos-bev-mercedes-nos-phev/",
            "urlToImage": "https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1280%3A719%3Anowe%3A0%3A66%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2024%2F10%2F05200540%2Fionity-cars-charging.jpg",
            "publishedAt": "2024-10-06T08:43:29Z",
            "content": "Entre os veículos equipados com baterias recarregáveis, o que inclui eléctricos (BEV) e híbridos plug-in (PHEV), o mercado nacional absorveu em Setembro um total de 8989 unidades, com os modelos BEV … [+3450 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nuevatribuna.es"
            },
            "author": "IGC",
            "title": "Recogida de firmas para exigir un tratado vinculante que mantenga bajo control el poder corporativo",
            "description": "Necesitamos tu ayuda para seguir informando \n Colabora con Nuevatribuna \n \n\n La Confederación Sindical Internacional (CSI) ha lanzado una campaña de recogida d firmas para exigir la aprobación a nivel mundial de un tratado...",
            "url": "https://www.nuevatribuna.es/articulo/global/recogida-firmas-exigir-tratado-vinculante-poder-corporativo/20241006104159231216.html",
            "urlToImage": "https://www.nuevatribuna.es/media/nuevatribuna/images/2024/10/06/2024100610383431378.jpg",
            "publishedAt": "2024-10-06T08:41:59Z",
            "content": "La Confederación Sindical Internacional (CSI) ha lanzado una campaña de recogida d firmas para exigir la aprobación a nivel mundial de un tratado vinculante sobre el poder corporativo que aborde el i… [+1222 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nzz.ch"
            },
            "author": "Deutsche Presse-Agentur (DPA)",
            "title": "Trump macht Wahlkampf am Ort des Attentats – gemeinsam mit Elon Musk",
            "description": "Mitte Juli schoss ein Attentäter bei einem Wahlkampfauftritt in Butler auf Präsidentschaftskandidat Donald Trump. Nun kehrt Trump für eine Wahlkampfveranstaltung dorthin zurück.",
            "url": "https://www.nzz.ch/international/trump-macht-wahlkampf-am-ort-des-attentats-gemeinsam-mit-elon-musk-ld.1851687",
            "urlToImage": "https://img.nzz.ch/2024/10/06/2785dbcf-2be4-4476-9196-432f5b7a6629.jpeg?width=1200&height=674&fit=bounds&quality=75&auto=webp&crop=3000,1687,x0,y156&wmark=nzz",
            "publishedAt": "2024-10-06T08:39:19Z",
            "content": "Donald Trump erhielt auf der Wahlkampfveranstaltung am Samstag (5. 10.) Unterstützung von Elon Musk.\r\n(dpa) US-Präsidentschaftskandidat Donald Trump ist knapp drei Monate nach dem Attentat an den Ort… [+3480 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Brooke Crothers, Contributor, \n Brooke Crothers, Contributor\n https://www.forbes.com/sites/brookecrothers/",
            "title": "Tesla Model 3 Standard Range Still Exists And Has Killer Lease Deal",
            "description": "Tesla has streamlined the Model 3 lineup but still offers a great lease deal on the Standard Range trim.",
            "url": "https://www.forbes.com/sites/brookecrothers/2024/10/06/tesla-model-3-standard-range-still-exists-and-has-killer-lease-deal/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/662d4351769537a692185759/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-10-06T08:34:22Z",
            "content": "LONDON, ENGLAND - MARCH 28: A Tesla Model 3 fully electric EV car is displayed during the Everything ... [+] Electric London 2024 at ExCel on March 28, 2024 in London, England. The show, designed to … [+2729 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gazeta.ru"
            },
            "author": "Газета.Ru",
            "title": "Илон Маск стал героем мемов после выступления на предвыборном митинге Трампа",
            "description": "В соцсетях начали активно распространяться мемы с прыжком американского бизнесмена, основателя компаний Space X и Tesla Илона Маска в ходе выступления на предвыборном митинге Дональда Трампа в Батлере.\n\nНа запечатленном кадре ...",
            "url": "https://www.gazeta.ru/business/news/2024/10/06/24087283.shtml",
            "urlToImage": "https://img.gazeta.ru/files3/743/19859743/00093939399393939-pic_32ratio_900x600-900x600-82445.jpg",
            "publishedAt": "2024-10-06T08:33:30Z",
            "content": ", Space X Tesla      .\r\n. - :        « », ,     «»   . ,     .\r\n 5  6     ( ),     .   Associated Press,         - .       « ».\r\n,   , « ».   Space X Tesla   , « ».   , « » « ».\r\n,  ."
        },
        {
            "source": {
                "id": null,
                "name": "Adevarul.ro"
            },
            "author": "Teodora Marinescu",
            "title": "Donald Trump își face campanie electorală în locul tentativei de asasinat. La eveniment a fost prezent și prietenul lui, Elon Musk",
            "description": "Candidatul republican la președinție, Donald Trump, s-a întors sâmbătă la locul rural din Pennsylvania unde a fost aproape asasinat, adunând o mare mulțime în acest stat-cheie cu o lună înainte de alegerile din 5 noiembrie.",
            "url": "https://adevarul.ro/stiri-externe/sua/donald-trump-isi-face-campanie-electorala-in-locul-2392762.html",
            "urlToImage": "https://cdn.adh.reperio.news/image-4/4e604a73-b77b-4415-a982-a2e905695ae8/index.jpeg?p=f%3Djpeg%26w%3D1200%26h%3D630%26r%3Dcover%26c%3D0%252C0%252C1%252C0.614",
            "publishedAt": "2024-10-06T08:22:22Z",
            "content": "Candidatul republican la preedinie, Donald Trump, s-a întors sâmbt la locul rural din Pennsylvania unde a fost aproape asasinat, adunând o mare mulime în acest stat-cheie cu o lun înainte de alegeril… [+2214 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-10-06T08:15:43Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Independent.ie"
            },
            "author": "Meg Kinnard",
            "title": "Elon Musk makes first appearance at Trump rally with dire words",
            "description": "Billionaire tech executive Elon Musk cast the upcoming presidential election in dire terms during a Saturday appearance with Donald Trump, calling the Republican presidential nominee the only candidate “to preserve democracy in America.”",
            "url": "https://www.independent.ie/world-news/north-america/elon-musk-makes-first-appearance-at-trump-rally-with-dire-words/a691497611.html",
            "urlToImage": "https://focus.independent.ie/thumbor/BlLyj3PADgJOmQ4FA6ebOE_xu6c=/0x0:3238x2158/629x0/prod-mh-ireland/aac7c727-2eb6-4744-9823-b8930da40628/1acf72d8-24a4-4844-aebf-30f367961158/aac7c727-2eb6-4744-9823-b8930da40628.jpg",
            "publishedAt": "2024-10-06T08:14:00Z",
            "content": "Mr Trump urged his supporters to deliver victory in his return to scene of first assassination attempt\r\nBillionaire tech executive Elon Musk cast the upcoming presidential election in dire terms duri… [+317 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Jornada.com.mx"
            },
            "author": "DEMOS, Desarrollo de Medios, S.A. de C.V.",
            "title": "Trump presidió un nuevo mitin en el sitio donde sufrió atentado",
            "description": "Butler. Simpatizantes de Donald Trump volvieron ayer a darse cita en la ciudad donde el candidato republicano sufrió un atentado en julio, que le dejó una herida en la oreja.",
            "url": "https://www.jornada.com.mx/2024/10/06/mundo/019n2mun",
            "urlToImage": "https://www.jornada.com.mx/2024/10/06/fotos/019n2mun-1.jpg",
            "publishedAt": "2024-10-06T08:13:39Z",
            "content": "Periódico La JornadaDomingo 6 de octubre de 2024, p. 19\r\nButler. Simpatizantes de Donald Trump volvieron ayer a darse cita en la ciudad donde el candidato republicano sufrió un atentado en julio, que… [+2143 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eldiario.es"
            },
            "author": "Antònia Crespí Ferrer",
            "title": "Trump vuelve a Butler para avivar la energía que lo impulsó después del primer atentado",
            "description": "Elon Musk ha asistido al mitin del expresidente y ha agitado los bulos electorales: “Si no votamos estas serán las últimas elecciones”\r\nEl día que Trump se inspiró en 'La Purga' como receta para combatir la delincuencia en EEUU\n\r\n\n Doce semanas después de que…",
            "url": "https://www.eldiario.es/internacional/trump-vuelve-butler-avivar-energia-impulso-despues-primer-atentado_1_11710301.html",
            "urlToImage": "https://static.eldiario.es/clip/60f48a6c-e1c5-4b8d-a3e4-258e213bcb6c_facebook-watermarked-aspect-ratio_default_0.jpg",
            "publishedAt": "2024-10-06T08:07:43Z",
            "content": "Doce semanas después de que Thomas Crooks apretara el gatillo de su rifle y 31 días antes de las elecciones, Donald Trump ha vuelto este sábado a Butler. Nada más subirse al escenario, ha empezado a … [+7696 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vz.ru"
            },
            "author": null,
            "title": "Экономика: Торговая война с Китаем ставит под удар всю европейскую экономику",
            "description": "Европа отчаянно защищается от наплыва дешевых китайских электромобилей и готова, как заявляется, вступить в «экономическую холодную войну» с КНР. Парадокс в том, что в результате ставится под удар промышленность самых развитых европейских стран. У Китая в это…",
            "url": "https://vz.ru/economy/2024/10/6/1290755.html",
            "urlToImage": "https://img.vz.ru/upimg/soc/soc_1290755.png",
            "publishedAt": "2024-10-06T08:01:27Z",
            "content": ". 10 -, - , - 12. , 15 -. . \r\n : 30 , . , . , . .\r\n 10% . . . BYD 17,4%, Geely - 19,9%, SAIC - 35,3%. , , , 20,8%.\r\n . - « ». \r\n . . , , . , .\r\n ?  « » . 2035 . , . , .\r\n . 2023 . .\r\n, , 3% 20%. (BYD… [+382 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Nitin Pai",
            "title": "Nitin Pai: A space monopoly would be bad for the world",
            "description": "SpaceX’s dominance of satellite communication is a problem that should concern every country. The world must act to ensure that space remains humanity’s common resource and that the market for satellite communication is competitive.",
            "url": "https://www.livemint.com/opinion/online-views/space-monopoly-starlink-elon-musk-spacex-global-space-policy-competition-law-space-sector-antitrust-regulation-satellite-11728199993409.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/10/06/1600x900/US-UNITED-AIRLINES-TO-OUTFIT-ENTIRE-FLEET-WITH-STA_1728200687123_1728200687575.jpg",
            "publishedAt": "2024-10-06T08:00:02Z",
            "content": "When the man who runs Tesla, SpaceX and social media platform X announced last month that his company now constitutes roughly 2/3 of all active Earth satellites,\" my instinctive reaction was one of s… [+5049 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Knack.be"
            },
            "author": "Der Spiegel",
            "title": "Vechten tegen de biologische veroudering: ‘Lang leven is als topsport’",
            "description": "Onderzoekers hebben ontdekt hoe ze iemands echte biologische leeftijd kunnen meten en vertragen. Met die kennis en alle mogelijke hightech vecht een miljonair uit Silicon Valley tegen de dood. Maar er zijn ook eenvoudigere manieren.\nThe post Vechten tegen de …",
            "url": "https://www.knack.be/nieuws/gezondheid/vechten-tegen-je-biologische-veroudering-lang-leven-is-als-topsport/",
            "urlToImage": "https://img.static-rmg.be/a/view/q75/w1600/h836/f45.97,52.50/6625574/unnamed-file-10-jpg.jpg",
            "publishedAt": "2024-10-06T08:00:00Z",
            "content": "Onderzoekers hebben ontdekt hoe ze iemands echte biologische leeftijd kunnen meten en vertragen. Met die kennis en alle mogelijke hightech vecht een miljonair uit Silicon Valley tegen de dood. Maar e… [+17088 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Javier Gómara",
            "title": "Todavía hay esperanzas para las baterías de Tesla, un informe desvela datos muy prometedores",
            "description": "Si bien para Tesla su enfoque principal siempre han sido los coches eléctricos, la compañía está virando más hacia la tecnología de la inteligencia artificial y la robótica. Un nuevo informe americano recoge que los ingenieros de Austin también han estado muy…",
            "url": "https://www.hibridosyelectricos.com/coches/todavia-hay-esperanzas-baterias-tesla-informe-desvela-datos-muy-prometedores_76272_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/81/57/48/tesla_17_2000x1126.jpeg",
            "publishedAt": "2024-10-06T08:00:00Z",
            "content": "Si bien para Tesla su enfoque principal siempre han sido los coches eléctricos, la compañía está virando más hacia la tecnología de la inteligencia artificial y la robótica. Un nuevo informe american… [+3156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mail.ru"
            },
            "author": "Иван Лебедянский",
            "title": "Маск предсказал будущее США, если Трамп проиграет на выборах",
            "description": "Американский предприниматель Илон Маск предсказал будущее США, если кандидат на пост главы государства от Республиканской партии Дональд Трамп проиграет на предстоящих выборах. Об этом генеральный директор Tesla рассказал в социальной сети X.",
            "url": "https://news.mail.ru/politics/63096610/",
            "urlToImage": "https://resizer.mail.ru/p/f717ceaf-29d7-5648-9873-78bfb567e2c7/op:15/logo:bottom:news.png/AQAGY9bV6TQ1RttcqJzkjP0yKaVM1vAf_tJ18e7QpV1tta_AWeomE7BS5Flv1Pul4LdzNbNBQ71Iav8Maz8WcZTOxQM.jpg",
            "publishedAt": "2024-10-06T07:56:48Z",
            "content": "5  6    ( ),    .   .   Associated Press,  -     -    ."
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "Marcus Theurer",
            "title": "So will Elon Musk im Rennen der Roboter-Taxis aufholen",
            "description": "Tesla-Chef Elon Musk stellt  in wenigen Tagen sein selbstfahrendes „Cybercab“ vor. Die Konkurrenz ist schon weiter – nur nicht in Europa.",
            "url": "https://www.faz.net/aktuell/wirtschaft/auto-verkehr/so-will-elon-musk-im-rennen-der-roboter-taxis-aufholen-110026978.html",
            "urlToImage": "https://media1.faz.net/ppmedia/aktuell/2616905733/1.10026817/facebook_teaser/elon-musk-verspricht-schon.jpg",
            "publishedAt": "2024-10-06T07:53:49Z",
            "content": "Aber kann Tesla die Versprechungen Musks wirklich einlösen? Die große Tesla-Show steigt jedenfalls an einem Ort, an dem es sonst mehr um Fiktion und Imagination als um Realität geht: in den Filmstudi… [+9201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.abc.es"
            },
            "author": "(abc)",
            "title": "Elon Musk da el salto a la política: «Trump debe ganar para preservar la democracia en EE.UU.»",
            "description": "La reacción más decidida al intento de asesinato de Donald Trump del pasado 13 de julio la firmó Elon Musk . Pocos minutos después de que el expresidente se librara de la muerte de milagro, el líder de gigantes empresariales como Tesla o SpaceX anunció en X, …",
            "url": "https://www.abc.es/internacional/elon-musk-salto-politica-trump-debe-ganar-20241006095005-nt.html",
            "urlToImage": "https://s1.abcstatics.com/abc/www/multimedia/internacional/2024/10/06/musk-kDpC--1024x512@diario_abc.jpg",
            "publishedAt": "2024-10-06T07:50:06Z",
            "content": "La reacción más decidida al intento de asesinato de Donald Trump del pasado 13 de julio la firmó Elon Musk. Pocos minutos después de que el expresidente se librara de la muerte de milagro, el líder d… [+2663 chars]"
        },
        {
            "source": {
                "id": "focus",
                "name": "Focus"
            },
            "author": "FOCUS online",
            "title": "Bei Wahlkampfveranstaltung - Elon Musk springt bei Trump-Rally auf Bühne: „Kämpft, kämpft, kämpft!“,",
            "description": "Bei der letzten Wahlkampfveranstaltung von Donald Trump war auch Elon Musk dabei. Der Milliardär sprang auf der Bühne und rief energisch zum Support des verurteilten Ex-Präsidenten auf.",
            "url": "https://www.focus.de/politik/ausland/elon-musk-springt-bei-trump-rally-auf-buehne-kaempft-kaempft-kaempft_d3f8a284-dd6f-44b0-8d55-7bd99245d82f.html",
            "urlToImage": "https://quadro.burda-forward.de/ctf/eceba5fc-8723-41ed-b6c0-00ed126f6ecd.9e988e98-c6c3-4fe1-932c-437f0213e74a.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%282988%2C1795%29&hash=20fed22f25aea53f8c407b1c6f9288859d3eece4c54c814c7aeed85b74a715c8",
            "publishedAt": "2024-10-06T07:47:00Z",
            "content": "Elon Musk sprang energisch auf die Bühne und rief Kämpft, kämpft, kämpft!, als er sich Donald Trump bei einer Kundgebung in Butler anschloss. Der Tesla-Chef lobte den Mut des ehemaligen Präsidenten, … [+2379 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Meduza"
            },
            "author": null,
            "title": "Маск впервые выступил на предвыборном митинге Трампа",
            "description": "Глава Tesla и SpaseX Илон Маск, поддерживающий кандидата в президенты США от Республиканской партии Дональда Трампа, впервые появился на предвыборном митинге Трампа 5 октября, сообщает Associated Press.",
            "url": "https://meduza.io/news/2024/10/06/mask-vpervye-vystupil-na-predvybornom-mitinge-trampa",
            "urlToImage": "https://meduza.io/imgly/share/1728200549/news/2024/10/06/mask-vpervye-vystupil-na-predvybornom-mitinge-trampa",
            "publishedAt": "2024-10-06T07:42:29Z",
            "content": "Tesla  SpaseX ,     ,   5 , Associated Press.\r\n      , ,     13 . ,    , , «  ,   ».\r\n  , «  ».   , « »,  .\r\n      «Make America Great Again».\r\n,  4 .   ,     Bloomberg,    .   ,       .\r\n  . , .    … [+20 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elperiodico.com"
            },
            "author": "Idoya Noain",
            "title": "Musk, en Butler: \"Trump debe ganar para preservar la democracia en EEUU\"",
            "description": "Tras el primer atentado contra Donald Trump el 13 de julio Elon Musk, el hombre más rico del mundo, decidió dar su apoyo pleno al candidato republicano en las elecciones en que intenta volver a la Casa Blanca y e stableció un supercomité de Acción Política qu…",
            "url": "https://www.elperiodico.com/es/internacional/20241006/elon-musk-butler-trump-debe-ganar-preservar-democracia-eeuu-108974454",
            "urlToImage": "https://estaticos-cdn.prensaiberica.es/clip/0ece5ca7-b72d-4f8b-8de7-c27fc7336e27_16-9-discover-aspect-ratio_default_0.jpg",
            "publishedAt": "2024-10-06T07:41:14Z",
            "content": "Tras el primer atentado contra Donald Trump el 13 de julio Elon Musk, el hombre más rico del mundo, decidió dar su \"apoyo pleno\" al candidato republicano en las elecciones en que intenta volver a la … [+3052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eleconomista.es"
            },
            "author": "elEconomista.es",
            "title": "Trump denuncia que tiene \"un enemigo interno\", pero ve \"la victoria más cerca que nunca\"",
            "description": "El expresidente y candidato republicano a la Casa Blanca, Donald Trump, ha reunido este sábado a sus seguidores en un mitin celebrado en Butler, la ciudad del estado de Pensilvania donde el pasado julio sobrevivió a un intento de asesinato, resultando herido …",
            "url": "https://www.eleconomista.es/actualidad/noticias/13019789/10/24/trump-denuncia-que-tiene-un-enemigo-interno-pero-ve-la-victoria-mas-cerca-que-nunca.html",
            "urlToImage": "https://s03.s3c.es/imag/_v0/1200x655/e/5/7/tru.jpg",
            "publishedAt": "2024-10-06T07:41:05Z",
            "content": "El expresidente y candidato republicano a la Casa Blanca, Donald Trump, ha reunido este sábado a sus seguidores en un mitin celebrado en Butler, la ciudad del estado de Pensilvania donde el pasado ju… [+3602 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gazeta.ru"
            },
            "author": "Газета.Ru",
            "title": "Маск предсказал будущее США, если Трамп проиграет на выборах",
            "description": "Американский предприниматель Илон Маск предсказал будущее США, если кандидат на пост главы государства от Республиканской партии Дональд Трамп проиграет на предстоящих выборах. Об этом генеральный директор Tesla рассказал в социальной сети ...",
            "url": "https://www.gazeta.ru/politics/news/2024/10/06/24087037.shtml",
            "urlToImage": "https://img.gazeta.ru/files3/712/17557712/2-pic_32ratio_900x600-900x600-83379.jpg",
            "publishedAt": "2024-10-06T07:36:34Z",
            "content": ",     . Tesla   X.\r\n« , «» , ! », — .\r\n 5  6   ( ),    .   .   Associated Press,  -   -  .\r\n   . , ,  .\r\n5  2024 .\r\n  ."
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-10-06T07:30:50Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.e15.cz"
            },
            "author": "Roman Šitner",
            "title": "Automobilky se obávají příštího roku. Musí stlačit spotřebu aut pod čtyři litry",
            "description": "Průměrná spotřeba aut nových aut v Evropské unii by měla příští rok odpovídat ekvivalentu 3,9 litru benzínu nebo 3,5 litru nafty. Právě to se skrývá pod cílem 93,6 gramu oxidu uhličitého na kilometr jízdy. Pokut to automobilky nesplní, budou muset platit poku…",
            "url": "https://www.e15.cz/byznys/prumysl-a-energetika/automobilky-se-obavaji-pristiho-roku-musi-stlacit-spotrebu-aut-pod-ctyri-litry-1419104",
            "urlToImage": "https://1884403144.rsc.cdn77.org/foto/automobilka-automobily-automobilovy-prumysl/MTIwMHg2MzAvZmlsdGVyczpub191cHNjYWxlKDEpOndhdGVybWFyayhodHRwczovL2ltZy5jbmNlbnRlci5jei9kaXN0L2Fzc2V0cy9lMTUvd2F0ZXJtYXJrLWUxNS5wbmcsLTEwLDEwLDApL2ltZw/9213977.jpg?v=0&st=HFXxli1kPqRyOwb8x9yrd_KFa3EQwStQk-XQ7oR-k7Y&ts=1600812000&e=0",
            "publishedAt": "2024-10-06T07:30:00Z",
            "content": "Taková je alespo teorie. Ta by sama o sob znamenala, e pokud by napíklad koda prodávala jen octavii 1.5 TSI s papírovou spotebou 5,5 litru benzínu na sto, musela by za kadou platit pokutu v pepotu 70… [+6507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "5 big analyst AI moves: JPMorgan sees significant downside risk in Tesla stock",
            "description": "5 big analyst AI moves: JPMorgan sees significant downside risk in Tesla stock",
            "url": "https://www.investing.com/news/stock-market-news/5-big-analyst-ai-moves-jpmorgan-sees-significant-downside-risk-in-tesla-stock-3650169",
            "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEJ9704D_L.jpg",
            "publishedAt": "2024-10-06T07:25:05Z",
            "content": "Investing.com -- Here are the biggest analyst moves in the area of artificial intelligence (AI) for this week.\r\nInvestingPro subscribers always get first dibs on market-moving AI analyst comments. Up… [+10065 chars]"
        },
        {
            "source": {
                "id": "il-sole-24-ore",
                "name": "Il Sole 24 Ore"
            },
            "author": null,
            "title": "Elezioni Usa, Trump e Musk insieme a Butler",
            "description": "Il candidato repubblicano torna in Pennsylvania, dove era scampato a un’attentato a luglio; con lui, per la prima volta sul palco, il Ceo di X e Tesla",
            "url": "https://www.ilsole24ore.com/art/elezioni-usa-trump-e-musk-insieme-butler-AG29weP",
            "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2024/10/07/Immagini/Ritagli/AFP_36JD9UU-U73505072754fRA-1440x752@IlSole24Ore-Web.jpg?r=1170x507",
            "publishedAt": "2024-10-06T07:11:13Z",
            "content": "Ascolta la versione audio dell'articolo\r\n2' di lettura\r\nSabato 5 ottobre, Donald Trump è tornato a Butler, Pennsylvania, per la prima volta da quando il 13 luglio era scampato a un attentato. Tra imp… [+1966 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "JDN"
            },
            "author": "Guillaume Renouard",
            "title": "Malgré le buzz, OpenAI perd toujours énormément d'argent",
            "description": "La société dirigée par Sam Altman, qui s'est rendue célèbre avec le lancement de ChatGPT, devrait perdre 5 milliards de dollars en 2024, soit la majeure partie de sa dernière levée de fonds.",
            "url": "https://www.journaldunet.com/economie/services/1534745-malgre-le-buzz-openai-perd-toujours-enormement-d-argent/",
            "urlToImage": "https://img-0.journaldunet.com/IJUvkaLyEq07DSelI_dhQe8yo_w=/1500x/smart/40091fb5e2aa4165a25de19933c88830/ccmcms-jdn/39510242.jpeg",
            "publishedAt": "2024-10-06T07:00:12Z",
            "content": "La société dirigée par Sam Altman, qui s'est rendue célèbre avec le lancement de ChatGPT, devrait perdre 5 milliards de dollars en 2024, soit la majeure partie de sa dernière levée de fonds. \r\nLa mac… [+6912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Drive.com.au"
            },
            "author": "Zane Dobie",
            "title": "‘I’ve done 60,000km in a Tesla Model Y – these were the highs and lows’",
            "description": "These Australian Model Y owners have driven an impressive 60,000km in just two years –...",
            "url": "https://www.drive.com.au/caradvice/honest-tesla-model-y-review/",
            "urlToImage": "https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0c21165f-3ea7-505a-8dc8-c04ea0150000",
            "publishedAt": "2024-10-06T07:00:00Z",
            "content": "We treat the Model Y as we would a petrol-powered car, taking it on road trips to Melbourne, Brisbane, Orange, Mudgee, the Hunter Valley, and everywhere else. We like to make it a challenge to use on… [+84 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fontanka.ru"
            },
            "author": "Женя Авербах",
            "title": "Трамп выступил в Батлере, где на него было совершено покушение. Во время митинга на сцену выпрыгнул Илон Маск",
            "description": "Кандидат в президенты США от Республиканской партии Дональд Трамп выступил на предвыборном митинге в городе Батлер в Пенсильвании, где на него ранее было совершено покушение.",
            "url": "https://www.fontanka.ru/2024/10/06/74177582/",
            "urlToImage": "https://www.fontanka.ru/html-to-img/image?hash=BWa-52k2I6at62-hJATLcA&ts=1728197535&url=https%3A%2F%2Fwww.fontanka.ru%2Fog-image%2Farticle-id5887732%2F&width=1200",
            "publishedAt": "2024-10-06T07:00:00Z",
            "content": ", . 6 The Associated Press (AP). \r\n45- , . . \r\n , - , , , SpaceX Tesla Motors, : «MAGA»  «Make America great again» .\r\n« ,   » («As you can see I am not just MAGA  I am Dark MAGA»),  .\r\n«   , », , , … [+138 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Donald Trump returns to Butler: Elon Musk dances and delivers 'dark MAGA' punchlines; All you need to know",
            "description": "US Presidential Election 2024: Elon Musk made a notable appearance at a Donald Trump rally in Butler, Pennsylvania, marking his public support for the former president as the 2024 election approaches. Musk expressed concerns about the future of American freed…",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/donald-trump-returns-to-butler-elon-musk-dances-and-delivers-dark-maga-punchlines-all-you-need-to-know/articleshow/113981077.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-113981157,width-1200,height-630,imgsize-1107994,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-10-06T06:56:52Z",
            "content": "Elon Musk, the billionaire CEO of Tesla and SpaceX, made a striking entrance at a Donald Trump rally on Saturday in Butler, Pennsylvania. This event marked Musks first public appearance with the form… [+3191 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eleconomista.es"
            },
            "author": "elEconomista.es",
            "title": "Los mercados encaran el trimestre con alzas moderadas y atentos a los riesgos geopolíticos",
            "description": "Los mercados afrontan la última recta del año con un potencial moderado de subidas, con tipos de interés a la baja y descartada una recesión económica, pero en un escenario no exento de riesgos por los conflictos geopolíticos y las elecciones de noviembre en …",
            "url": "https://www.eleconomista.es/mercados-cotizaciones/noticias/13019763/10/24/los-mercados-encaran-el-trimestre-con-alzas-moderadas-y-atentos-a-los-riesgos-geopoliticos.html",
            "urlToImage": "https://s03.s3c.es/imag/_v0/1200x655/3/6/a/bolsa-renta-variable-subidas-mercados-char-flecha-verde-getty-1200.jpg",
            "publishedAt": "2024-10-06T06:51:03Z",
            "content": "Los mercados afrontan la última recta del año con un potencial moderado de subidas, con tipos de interés a la baja y descartada una recesión económica, pero en un escenario no exento de riesgos por l… [+4999 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Trump und Musk treten gemeinsam bei Wahlkampfveranstaltung auf",
            "description": "Vor drei Monaten wurde in Pennsylvania ein Attentat auf den republikanischen Präsidentschaftskandidaten Trump verübt. Nun kehrte er nach Butler zurück, um Wahlkampf zu machen. Diesmal als Unterstützer mit dabei: Tech-Milliardär Musk.",
            "url": "https://www.tagesschau.de/ausland/uswahl/usa-trump-musk-100.html",
            "urlToImage": "https://images.tagesschau.de/image/f5ea49ed-bf73-4e81-80b1-5c0bde3aa57a/AAABkl9Mv24/AAABkZLhkrw/16x9-1280/musk-trump-104.jpg",
            "publishedAt": "2024-10-06T06:33:20Z",
            "content": "Stand: 06.10.2024 08:33 Uhr\r\nDrei Monate zuvor war in Pennsylvania ein Attentat auf ihn verübt worden. Nun kehrte der republikanische Präsidentschaftskandidat Trump dorthin zurück, um Wahlkampf zu ma… [+2846 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilpost.it"
            },
            "author": null,
            "title": "Donald Trump è tornato a fare un comizio a Butler",
            "description": "In Pennsylvania, dove aveva subìto un attentato a luglio: con lui questa volta c'era anche Elon Musk",
            "url": "https://www.ilpost.it/2024/10/06/donald-trump-comizio-butler-elon-musk/",
            "urlToImage": "https://www.ilpost.it/wp-content/uploads/2024/10/06/1728193167-AP24279825715038.jpg",
            "publishedAt": "2024-10-06T06:31:15Z",
            "content": "Sabato il candidato Repubblicano alla presidenza degli Stati Uniti Donald Trump è tornato a fare un comizio a Butler, in Pennsylvania, dove il 13 luglio aveva subìto un attentato durante un evento de… [+3036 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "dh.be"
            },
            "author": "AFP -",
            "title": "\"On travaille dur à Dubaï alors on a besoin de se relaxer\": face à l'envolée des températures, Dubaï adopte les plages de nuit",
            "description": "Une foule de baigneurs, des châteaux de sable, des canoës-kayaks au large... Difficile de croire qu'il est 23 heures passées sur cette plage publique de Dubaï, aux Emirats arabes unis, où l'été dure près de six mois. ...",
            "url": "https://www.dhnet.be/actu/monde/2024/10/06/on-travaille-dur-a-dubai-alors-on-a-besoin-de-se-relaxer-face-a-lenvolee-des-temperatures-dubai-adopte-les-plages-de-nuit-QF6AFV5CIFFRLPPNLZEGZXO4CM/",
            "urlToImage": "https://www.dhnet.be/resizer/v2/OJ7DTP27CJA7TAGNQEL3BIY6P4.jpg?auth=e2d964bff9de592b7e6518584f605cc9131d0d1da71d5dfc7b6803e1fa759152&width=1200&height=630&quality=85&focal=3958%2C2639&watermark=https%3A%2F%2Fcloudfront-eu-central-1.images.arcpublishing.com%2Fipmgroup%2FDZNGDE46VVGXRGHD3TEI5RB3GM.png%3A100%3A0%2C559",
            "publishedAt": "2024-10-06T06:29:34Z",
            "content": "\"Les températures baissent un peu le soir\", c'est \"génial\", dit Mohammed, un expatrié pakistanais de 32 ans, venu profiter de la mer avec ses deux enfants sans devoir endurer le soleil brulant entre … [+3577 chars]"
        },
        {
            "source": {
                "id": "der-tagesspiegel",
                "name": "Der Tagesspiegel"
            },
            "author": "Der Tagesspiegel",
            "title": "Mit Auftritt von Elon Musk: Trump schwört Anhänger am Ort des Attentats auf Wahlsieg ein",
            "description": "Mitte Juli schoss ein Attentäter bei einem Wahlkampfauftritt im Ort Butler auf Trump. Nun kehrt der Ex-Präsident genau dorthin zurück und hat den Inhaber der Plattform X gleich mitgebracht.",
            "url": "https://www.tagesspiegel.de/internationales/mit-auftritt-von-elon-musk-trump-schwort-anhanger-am-ort-des-attentats-auf-wahlsieg-ein-12488060.html",
            "urlToImage": "https://www.tagesspiegel.de/images/12488069/alternates/BASE_16_9_W1400/1728195508000/republican-presidential-nominee-donald-trump-holds-a-rally-at-site-of-first-assassination-attempt.jpeg",
            "publishedAt": "2024-10-06T06:19:06Z",
            "content": "US-Präsidentschaftskandidat Donald Trump ist knapp drei Monate nach dem Attentat auf ihn an den Ort des Geschehens im Bundesstaat Pennsylvania zurückgekehrt, um Wahlkampf zu machen. Bei einer großen … [+4321 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Diepresse.com"
            },
            "author": "Die Presse",
            "title": "Trump spricht am Anschlagsort hinter Panzerglas - Überraschungsgast ist Elon Musk",
            "description": "Donald Trump macht Wahlkampf auf der Bühne, auf der drei Monate zuvor auf ihn geschossen wurde. Das „bösartige Monster“ habe sein Ziel verfehlt. Elon Musk sprach von der „wichtigsten Wahl unseres Lebens“. Wenn Trump nicht gewinne, sei es die letzte.",
            "url": "https://www.diepresse.com/18936190/trump-spricht-am-anschlagsort-hinter-panzerglas-ueberraschungsgast-ist-elon-musk",
            "urlToImage": "https://img.diepresse.com/public/incoming/bgkqn5-USA-ELECTIONTRUMP/alternates/DPR_SOCIAL_NACHRICHTEN/USA-ELECTIONTRUMP",
            "publishedAt": "2024-10-06T06:15:10Z",
            "content": "Donald Trump macht Wahlkampf auf der Bühne, auf der drei Monate zuvor auf ihn geschossen wurde. Das bösartige Monster habe sein Ziel verfehlt. Elon Musk sprach von der wichtigsten Wahl unseres Lebens… [+4115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Berliner Morgenpost"
            },
            "author": "Dirk Hautkapp",
            "title": "Trump-Show mit Elon Musk: 50.000 Fans feiern ihn als Märtyrer",
            "description": "Der Präsidentschaftskandidat inszeniert sich am Schauplatz seines Attentats als unbesiegbarer Held. Elon Musk ist sein eifrigster Groupie.",
            "url": "https://www.morgenpost.de/politik/article407405232/trump-show-mit-musk-50000-fans-feiern-ihn-als-maertyrer.html",
            "urlToImage": "https://img.sparknews.funkemedien.de/407405215/407405215_1728195076_v16_9_1600.jpeg",
            "publishedAt": "2024-10-06T06:05:49Z",
            "content": "Washington/Butler. Der Präsidentschaftskandidat inszeniert sich am Schauplatz seines Attentats als unbesiegbarer Held. Elon Musk ist sein eifrigster Groupie.\r\nZuschauerzahlen bei politischen Kundgebu… [+6031 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "André Westphal",
            "title": "Immer wieder sonntags KW 40: Strafzölle auf chinesische E-Autos, Amazon bringt neues Fire HD 8 und mehr",
            "description": "Einen schönen Sonntagmorgen wünsche ich zunächst einmal allen Lesern. Das gilt doppelt für die Frühaufsteher, die direkt um 8 Uhr in diesen Post hereinschauen. In dieser Woche hat es natürlich wieder einige interessante Tech-News gegeben, zu denen ich euch in…",
            "url": "https://stadt-bremerhaven.de/immer-wieder-sonntags-kw-40-strafzoelle-auf-chinesische-e-autos-amazon-bringt-neues-fire-hd-8-und-mehr/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg",
            "publishedAt": "2024-10-06T06:00:08Z",
            "content": "Einen schönen Sonntagmorgen wünsche ich zunächst einmal allen Lesern. Das gilt doppelt für die Frühaufsteher, die direkt um 8 Uhr in diesen Post hereinschauen. In dieser Woche hat es natürlich wieder… [+3602 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Alberto Pérez",
            "title": "Nuevas pistas respaldan el regreso del histórico Ford Fiesta como coche eléctrico, aunque no será pronto",
            "description": "El Ford Fiesta ha marcado un hito en el sector de la automoción durante sus años de producción. Durante casi 50 años, el pequeño utilitario norteamericano ha sabido vender más de 22 millones de unidades, lo que puede considerarse con facilidad como un éxito h…",
            "url": "https://www.hibridosyelectricos.com/coches/nuevas-pistas-respaldan-regreso-historico-ford-fiesta-como-coche-electrico-aunque-no-sera-pronto_76223_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/81/26/94/ford-fiesta-1_17_2000x1126.jpeg",
            "publishedAt": "2024-10-06T06:00:00Z",
            "content": "El Ford Fiesta ha marcado un hito en el sector de la automoción durante sus años de producción. Durante casi 50 años, el pequeño utilitario norteamericano ha sabido vender más de 22 millones de unida… [+3000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Frode Wikesjö",
            "title": "Dödsorssak för spionvalen fastställd",
            "description": "Sannolikt bakterieinfektion\n\n\n\n\n\n\n\n\n\n\nFör några veckor sedan skrev vi om den uppmärksammade valen Hvaldimir, som hade dött. Valen, som en gång i tiden anklagades för att vara en spionval åt Ryssland, dog inte av något balkongfall. Den slutgiltiga obduktionsra…",
            "url": "https://feber.se/vetenskap/dodsorssak-for-spionvalen-faststalld/472604/",
            "urlToImage": "https://i.ytimg.com/vi/216IY_PgDNY/hqdefault.jpg",
            "publishedAt": "2024-10-06T06:00:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+10456 chars]"
        },
        {
            "source": {
                "id": "aftenposten",
                "name": "Aftenposten"
            },
            "author": "NTB-AFP",
            "title": "Trump tilbake der han ble skutt. Kaller attentatmann et ondskapsfullt monster.",
            "description": "Republikanernes presidentkandidat Donald Trump var lørdag tilbake i Butler, byen i Pennsylvania der han ble skutt mot på et valgkampmøte i sommer.",
            "url": "https://www.aftenposten.no/verden/i/MnjQWK/donald-trump-tilbake-der-han-ble-skutt-kaller-attentatmannen-for-et-undskapsfullt-monster",
            "urlToImage": "https://premium.vgc.no/v2/images/6c8808ce-78fd-4103-824e-41f0519bd012?fit=crop&format=auto&h=1368&w=2048&s=01945c1bbe2a1b876d92fb980e2afe373a16741b",
            "publishedAt": "2024-10-06T05:34:30Z",
            "content": "Republikanernes presidentkandidat Donald Trump var lørdag tilbake i Butler, byen i Pennsylvania der han ble skutt mot på et valgkampmøte i sommer.\r\nDonald Trump inntok lørdag talerstolen i Butler i P… [+4737 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Javier Gómara",
            "title": "Una prueba independiente confirma que el FSD de Tesla es mucho más limitado de lo que Musk quiere hacernos creer",
            "description": "Tras dominar la industria del coche eléctrico, el objetivo de Tesla, y de su máximo responsable, Elon Musk, es convertir a la compañía en la más puntera y avanzada en cuestiones de conducción autónoma. Los ingenieros americanos están desarrollando los concept…",
            "url": "https://www.hibridosyelectricos.com/coches/tesla-prueba-real-funcionamiento-paquete-fsd_76219_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/81/25/02/autopilot-tesla_17_2000x1126.jpeg",
            "publishedAt": "2024-10-06T05:30:00Z",
            "content": "Tras dominar la industria del coche eléctrico, el objetivo de Tesla, y de su máximo responsable, Elon Musk, es convertir a la compañía en la más puntera y avanzada en cuestiones de conducción autónom… [+3197 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk, AI and start of earnings season will jolt markets",
            "description": "Elon Musk attracts a lot of attention. The CEO of Tesla (TSLA) has emerged as a hyperactive entrepreneur with a reputation built on the success of the electric car company he built, Space X and other ventures. \nThis week, Musk and Tesla will be a center of at…",
            "url": "https://biztoc.com/x/22e1ce1ea939233d",
            "urlToImage": "https://biztoc.com/cdn/22e1ce1ea939233d_s.webp",
            "publishedAt": "2024-10-06T05:16:40Z",
            "content": "Elon Musk attracts a lot of attention. The CEO of Tesla (TSLA) has emerged as a hyperactive entrepreneur with a reputation built on the success of the electric car company he built, Space X and other… [+135 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.dn.se"
            },
            "author": "Marianne Björklund",
            "title": "I Kina får elbilar köras alla dagar i veckan",
            "description": "PEKING. Omställningen till elbilar i Kina går i ett rasande tempo. Skiftet är dirigerat från högsta ledningen i kommunistpartiet som öst bidrag över elbilsindustrin med grön omställning som skäl. Men det är inte oro för klimatförändringar som får de kinesiska…",
            "url": "https://www.dn.se/ekonomi/i-kina-far-elbilar-koras-alla-dagar-i-veckan/",
            "urlToImage": "https://static.bonniernews.se/gcs/bilder/dn-mly/58d2c6ed-d614-4390-88cd-5a8a52fdfba7.jpeg?interpolation=lanczos-none&fit=around%7C1024:576&crop=1024:h;center,top&output-quality=80",
            "publishedAt": "2024-10-06T05:08:47Z",
            "content": "Länge satte sig Da Yi bakom ratten på en gammal Ford när han på helgerna lämnade storstadens brus för att hitta något lugnt ställe att fiska på. Nu är han i full färd med att ladda sin nya bil, en hy… [+4170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freshnewsasia.com"
            },
            "author": "Tharith",
            "title": "ក្រុមហ៊ុន Waymo នឹងពង្រីកសេវាកម្មរថយន្តឈ្នួល បើកបរដោយស្វ័យប្រវត្តិ ជាមួយនឹងការប្រើប្រាស់រថយន្តអគ្គិសនី របស់ក្រុមហ៊ុន Hyundai",
            "description": "ក្រុមហ៊ុន Waymo នឹងពង្រីកសេវាកម្មរថយន្តឈ្នួល បើកបរដោយស្វ័យប្រវត្តិ ជាមួយនឹងការប្រើប្រាស់រថយន្តអគ្គិសនី របស់ក្រុមហ៊ុន Hyundaifreshnewsasia.com",
            "url": "https://freshnewsasia.com/index.php/en/business/360226-2024-10-06-04-01-22.html",
            "urlToImage": "https://image.freshnewsasia.com/2021/id-025/fn-2024-10-06-11-01-41-0.png",
            "publishedAt": "2024-10-06T05:06:19Z",
            "content": "() Waymo Alphabet Hyundai Motor (Robotaxi) Waymo Reuters \r\n SUVs IONIQ 5 Georgia Hyundai Waymo \r\nWaymo \r\n Hyundai Elon Musk Tesla \r\nWaymo I-PACE Jaguar Land Rover Tata Motors \r\n Waymo Zeekr Geely \r\n … [+24 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wattsupwiththat.com"
            },
            "author": "Guest Blogger",
            "title": "Why Are Well-Off EV Owners Charged Half as Much as Poor Pensioners for Off-Peak Electricity?",
            "description": "In any case, here is an even greater mystery: why are people who are sat shivering at home in poorly insulated, under-heated social housing paying about twice as much per kWh for off-peak electricity as EV owners, swanning about in their £65,000 Teslas?",
            "url": "https://wattsupwiththat.com/2024/10/05/why-are-well-off-ev-owners-charged-half-as-much-as-poor-pensioners-for-off-peak-electricity/",
            "urlToImage": "https://i0.wp.com/wattsupwiththat.com/wp-content/uploads/2024/10/223537291_twitter-post_normal_none.webp?fit=1024%2C512&ssl=1",
            "publishedAt": "2024-10-06T05:00:00Z",
            "content": "From THE DAILY SCEPTIC\r\nby Nick Rendell\r\nThe surprise is not whether the dog plays the piano well or poorly but that it plays it at all! Dr. Johnson might well have applied this aphorism to Rachel Re… [+6197 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "James Morris",
            "title": "MG Cyberster brings open-top fun to electric cars at last",
            "description": "Fortune took a hands-on drive of this much-hyped EV in the Scottish highlands and the potholed streets of London.",
            "url": "https://fortune.com/europe/2024/10/06/mg-cyberster-review-brings-open-top-fun-to-electric-cars-at-last/",
            "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/10/MGCybersterJune2024Edit-47-e1728046790233.jpg?resize=1200,600",
            "publishedAt": "2024-10-06T05:00:00Z",
            "content": "But, until now, one format has been conspicuously absent the open-top sports car. Now finally there is an all-electric convertible, and it comes from a brand that made its name with roadsters. Britai… [+8518 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.dr.dk"
            },
            "author": null,
            "title": "Trump vendte retur til gerningsstedet: Her er tre nedslag fra nattens vælgermøde",
            "description": "I juli blev han forsøgt dræbt i Butler. I nat var Trump tilbage til vælgermøde.",
            "url": "https://www.dr.dk/nyheder/udland/valg-i-usa/trump-vendte-retur-til-gerningsstedet-her-er-de-tre-vigtigste-nedslag-fra",
            "urlToImage": "https://asset.dr.dk/imagescaler01/https%3A%2F%2Fwww.dr.dk%2Fimages%2Fother%2F2024%2F10%2F06%2Fscanpix-20241006-023658-4.jpg&w=1200",
            "publishedAt": "2024-10-06T04:55:00Z",
            "content": "Valget om at vende retur til Butler var dog ikke kun for at hylde de afdøde, siger Anne Alling, der er USA-reporter for DR.\r\n- Han ville underbygge den opfattelse, der hersker blandt mange af hans st… [+995 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gazeta.pl"
            },
            "author": "Alexandra Jarecka, Deutsche Welle",
            "title": "Strach przed odwetem po decyzji Unii Europejskiej. Będzie skok cen aut elektrycznych",
            "description": "Od listopada mają obowiązywać cła karne na samochody elektryczne z Chin. Niemieccy dealerzy samochodów obawiają się konsekwencji dla rodzimego rynku.",
            "url": "https://next.gazeta.pl/next/7,168930,31362566,strach-przed-odwetem-po-decyzji-unii-europejskiej-bedzie-skok.html",
            "urlToImage": "https://bi.im-g.pl/im/67/e8/1d/z31362663IER,Auto-elektryczne---zdjecie-ilustracyjne.jpg",
            "publishedAt": "2024-10-06T04:51:00Z",
            "content": "Po planowanym wprowadzeniu przez Brukselę ceł karnych na samochody elektryczne z Chin, Centralny Związek Niemieckiego Przemysłu Motoryzacyjnego (ZdK) oczekuje negatywnych konsekwencji dla handlu samo… [+2209 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Politiken.dk"
            },
            "author": null,
            "title": "Trump hev Musk med på scenen, da han vendte tilbage til stedet, hvor han blev skudt",
            "description": "Vinder Donald Trump ikke præsidentvalget, kan valget blive det sidste, sagde Elon Musk under Trump-vælgermøde.",
            "url": "https://politiken.dk/internationalt/int_usa/art10103379/Trump-hev-Musk-med-p%C3%A5-scenen-da-han-vendte-tilbage-til-stedet-hvor-han-blev-skudt",
            "urlToImage": "https://politiken.dk/incoming/img10103405.btmamd/ORIGINALS/original_750/US-REPUBLICAN-PRESIDENTIAL-CANDIDATE-FORMER-PRESIDENT-TRUMP-HOLD",
            "publishedAt": "2024-10-06T04:43:34Z",
            "content": "Gem artiklen\r\nGemt\r\nLæst\r\nRepublikanernes præsidentkandidat Donald Trump var lørdag tilbage til byen Butler i delstaten Pennsylvania, hvor han i juli blev udsat for et attentat under et vælgermøde.\r\n… [+3158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Elon Musk And Trump Address Thousands At Site Of Failed Assassination Attempt, Take Aim At Biden's Leadership: 'We Had One President Who Couldn't Climb A Flight Of Stairs'",
            "description": "Elon Musk, the CEO of X and Tesla Inc., joined former President Donald Trump at a rally in Butler, Pennsylvania, to criticize the Democratic Party.\nWhat Happened: Musk shared the stage with former President Trump at his rally on Saturday. Musk made accusation…",
            "url": "https://biztoc.com/x/4404bbef8a49c0e7",
            "urlToImage": "https://biztoc.com/cdn/4404bbef8a49c0e7_s.webp",
            "publishedAt": "2024-10-06T04:43:10Z",
            "content": "Elon Musk, the CEO of X and Tesla Inc., joined former President Donald Trump at a rally in Butler, Pennsylvania, to criticize the Democratic Party.What Happened: Musk shared the stage with former Pre… [+137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digi24.ro"
            },
            "author": "Monica Bonea",
            "title": "Donald Trump a revenit la locul tentativei de asasinat, în Pennsylvania: „Nu voi ceda”. La miting a fost prezent şi Elon Musk",
            "description": "Candidatul republican la preşedinţie Donald Trump a revenit, sâmbătă, la Butler, în Pennsylvania, unde a fost victima unei tentative de asasinat, în iulie. La miting a participat și miliardarul Elon Musk, potrivit News.ro.",
            "url": "https://www.digi24.ro/stiri/externe/donald-trump-a-revenit-la-locul-tentativei-de-asasinat-in-pennsylvania-nu-voi-ceda-la-miting-a-fost-prezent-si-elon-musk-2957435",
            "urlToImage": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA4dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjQl/MkYxMCUyRjA2JTJGMjA5NTQyNV8yMDk1/NDI1X2RvbmFsZC10cnVtcC1lbG9uLW11/c2stcHJvZmltZWRpYS5qcGcmdz0xMjAw/Jmg9NjMwJnpjPTEmaGFzaD0xNzJjOTI0/ODE5ODAwZWMwZTU5YjZmNWMxYWYxOTAxZA==.thumb.jpg",
            "publishedAt": "2024-10-06T04:26:04Z",
            "content": "Candidatul republican la preedinie Donald Trump a revenit, sâmbt, la Butler, în Pennsylvania, unde a fost victima unei tentative de asasinat, în iulie. La miting a participat i miliardarul Elon Musk,… [+3373 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Expressen.se"
            },
            "author": "jens.moller@expressen.se (Jens Möller)",
            "title": "Elon Musk kampanjade för Donald Trump: ”De vill ta din rösträtt”",
            "description": "Donald Trump kom tillbaka på platsen där han blev skjuten. Natten mot söndagen talade han i Butler, Pennsylvania, tillsammans med Elon Musk. – Donald Trump måste vinna för att bevara demokratin i USA, påstod världens rikaste man.",
            "url": "https://www.expressen.se/nyheter/varlden/elon-musk-kampanjade-for-donald-trump-de-vill-ta-din-rostratt/",
            "urlToImage": "https://static.bonniernews.se/images/f6/73/f673f39ccda84bd6874f474d671d29f0/16x9/original.png",
            "publishedAt": "2024-10-06T04:07:26Z",
            "content": "För tre månader sedan blev Donald Trump skjuten när han talade i Butler, Pennsylvania. På lördagen var han tillbaka på samma plats med en massiv säkerhetsapparat som följe. \r\nI ett tal som började på… [+1309 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Tesla, Google, Amazon: Inside the robotaxi market",
            "description": "Tesla, Google, Amazon: Inside the robotaxi market Yahoo Finance\nCan robotaxis turn a profit? Experts skeptical as Tesla prepares to unveil plans. Yahoo Finance\nTesla Robotaxi Day Is a Make or Break Moment for Elon Musk—and the Stock Barron's\nTesla’s Top Data …",
            "url": "https://biztoc.com/x/acc252d07e70b9f6",
            "urlToImage": "https://biztoc.com/cdn/803/og.png",
            "publishedAt": "2024-10-06T03:59:04Z",
            "content": "Tesla, Google, Amazon: Inside the robotaxi market Yahoo FinanceCan robotaxis turn a profit? Experts skeptical as Tesla prepares to unveil plans. Yahoo FinanceTesla Robotaxi Day Is a Make or Break Mom… [+132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Анатолий Арни",
            "title": "Трамп выступил в месте, где на него было совершено покушение",
            "description": "Встречу Трампа с избирателями в Батлере посетил Илон Маск. Миллиардер призвал голосовать за республиканца.",
            "url": "https://www.dw.com/ru/tramp-vystupil-v-meste-gde-na-nego-bylo-soverseno-pokusenie/a-70414793",
            "urlToImage": "https://static.dw.com/image/70391830_6.jpg",
            "publishedAt": "2024-10-06T03:57:00Z",
            "content": ", 5 , , . , .\r\n dpa, \" \". \" \", 13 , 20- . ,   .\r\n , . . \" ,\" - , . .\r\n , , \", , , , - \". , \" \". - .\r\n. , , \" \".\r\n Tesla X , , 45   , . - , .\r\n - , , , . \" . ,\" - , , .\r\n\" ( - ..) , . ,\" - .\r\n - \r\n   … [+68 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Courrier International"
            },
            "author": null,
            "title": "Trump, mpox et Nouvelle-Zélande : les informations de la nuit",
            "description": "“Je n’abandonnerai jamais”, lance Trump sur les lieux de sa tentative d’assassinat. En meeting à Butler (Pennsylvanie), où il a échappé en juillet dernier à une tentative d’assassinat, Donald Trump a galvanisé une foule de partisans acquis, parmi lesquels le …",
            "url": "https://www.courrierinternational.com/article/pendant-que-vous-dormiez-trump-mpox-et-nouvelle-zelande-les-informations-de-la-nuit_223047",
            "urlToImage": "https://focus.courrierinternational.com/2024/10/05/0/0/3661/2440/1200/630/60/0/3501851_2024-10-05t235442z-1340525170-rc2neaa5t23k-rtrmadp-3-usa-election-trump.JPG",
            "publishedAt": "2024-10-06T03:53:05Z",
            "content": "Je nabandonnerai jamais, lance Trump sur les lieux de sa tentative dassassinat. En meeting à Butler (Pennsylvanie), où il a échappé en juillet dernier à une tentative dassassinat, Donald Trump a galv… [+2732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Steve Hanley",
            "title": "EU Approves New Tariffs On Chinese Cars Over Germany’s Strong Objection",
            "description": "The European Union has voted to impose higher tariffs on cars made in China although both sides say talks will continue. \nThe post EU Approves New Tariffs On Chinese Cars Over Germany’s Strong Objection appeared first on CleanTechnica.",
            "url": "https://cleantechnica.com/2024/10/05/eu-approves-new-tariffs-on-chinese-cars-over-germanys-strong-objection/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/01/BYD-Explorer-No1-shipping-vessel-electric-cars-copy.jpg",
            "publishedAt": "2024-10-06T03:45:45Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThe European Union voted on October 4 to pave the way for new tariffs of up to 35.3% on electric vehicles imp… [+7962 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSAT San Antonio"
            },
            "author": "Meg Kinnard",
            "title": "Elon Musk makes first appearance at Trump rally casting election in dire terms",
            "description": "Elon Musk has praised Donald Trump as the only candidate “to preserve democracy in America.\"",
            "url": "https://www.ksat.com/news/politics/2024/10/05/elon-musk-makes-first-appearance-at-trump-rally-casting-election-in-dire-terms/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/6M6ISU64U5DZFIXEFXXXJJZEEE.jpg?_a=DATAg1fiZAA0",
            "publishedAt": "2024-10-06T03:43:45Z",
            "content": "Billionaire tech executive Elon Musk cast the upcoming presidential election in dire terms during an appearance with Donald Trump, calling the Republican presidential nominee the only candidate to pr… [+2430 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Gregor Schwung",
            "title": "Um 18:11 Uhr setzen alle Trump-Fans ihre Maga-Kappen ab",
            "description": "Zwölf Wochen nachdem Donald Trump angeschossen wurde, kehrt er an den Attentats-Ort in Pennsylvania zurück. Bei einem symbolisch aufgeladenen Wahlkampfauftritt überbringt der Ex-Präsident seinen Fans eine eindringliche Botschaft. Elon Musk unterstützt ihn auf…",
            "url": "https://www.welt.de/politik/ausland/article253864242/US-Wahlkampf-Um-18-11-Uhr-setzen-alle-Trump-Fans-ihre-Maga-Kappen-ab.html",
            "urlToImage": "https://img.welt.de/img/politik/ausland/mobile253864320/3757934247-ci16x9-w1200/Republican-presidential-nominee-Trump-returns-to-the-site-of-the.jpg",
            "publishedAt": "2024-10-06T03:40:05Z",
            "content": "Zwölf Wochen nachdem Donald Trump angeschossen wurde, kehrt er an den Attentats-Ort in Pennsylvania zurück. Bei einem symbolisch aufgeladenen Wahlkampfauftritt überbringt der Ex-Präsident seinen Fans… [+4862 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Gregor Schwung",
            "title": "Am Ort des Trump-Attentats gibt Elon Musk eine düstere Prophezeiung ab",
            "description": "Zwölf Wochen nachdem Donald Trump angeschossen wurde, kehrt er an den Attentats-Ort in Pennsylvania zurück. Bei einem symbolisch aufgeladenen Wahlkampfauftritt überbringt der Ex-Präsident seinen Fans eine eindringliche Botschaft. Elon Musk unterstützt ihn auf…",
            "url": "https://www.welt.de/politik/ausland/article253864242/US-Wahlkampf-Am-Ort-des-Trump-Attentats-gibt-Elon-Musk-eine-duestere-Prophezeiung-ab.html",
            "urlToImage": "https://img.welt.de/img/politik/ausland/mobile253864320/3757934247-ci16x9-w1200/Republican-presidential-nominee-Trump-returns-to-the-site-of-the.jpg",
            "publishedAt": "2024-10-06T03:40:05Z",
            "content": "Zwölf Wochen nachdem Donald Trump angeschossen wurde, kehrt er an den Attentats-Ort in Pennsylvania zurück. Bei einem symbolisch aufgeladenen Wahlkampfauftritt überbringt der Ex-Präsident seinen Fans… [+5271 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hurriyet.com.tr"
            },
            "author": "Umut Fırat Eroğlu",
            "title": "Her şeyden önce ‘kod’ vardı!",
            "description": "Tanınmış fizik profesörü Melvin Vopson yine yeni bir teoriyle gündemde. Biliminsanı İncil’deki “Her şeyden önce söz vardı” ayetinden yola çıkarak yaratılışın ‘simülasyonu çalıştıran bir kod olabileceğini’ iddia ediyor.",
            "url": "https://www.hurriyet.com.tr/yazarlar/umut-firat-eroglu/her-seyden-once-kod-vardi-42554123",
            "urlToImage": "https://image.hurimg.com/i/hurriyet/75/0x0/63873faa4e3fe1118c7f575d.jpg",
            "publishedAt": "2024-10-06T03:29:10Z",
            "content": "p&gt;Bir biliminsannn ilahi yaratl hakknda teoriler üretmesi kulaa nasl geliyor? Upuzun yllar boyunca bilim ve inanç birbirlerine zt görüldüler. Artk bilgi çandayz. Kuantum âleminin kefiyle, bilimin … [+3432 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT en Español\n , RT en Español",
            "title": "Musk salta de emoción en el escenario en su primera aparición en un mitin de Trump (VIDEO)",
            "description": "El magnate se sumó al evento en Butler, Pensilvania, donde se produjo el intento de asesinato contra el republicano en julio pasado.",
            "url": "https://actualidad.rt.com/actualidad/525554-musk-saltar-emocion-escenario-mitin-trump",
            "urlToImage": "https://mf.b37mrtl.ru/actualidad/public_images/2024.10/article/6701e461e9ff7157521853a6.jpg",
            "publishedAt": "2024-10-06T03:01:26Z",
            "content": "El empresario y director ejecutivo de Tesla y SpaceX, Elon Musk, saltó al escenario durante el mitin de campaña de Donald Trump en Butler, Pensilvania, donde en julio pasado se produjo el intento de … [+1545 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "そうこ",
            "title": "ロボタクシー？ 廉価モデル？ 謎のTesla車が街中で目撃される",
            "description": "Image:Reddit掲示板Redditに投稿された謎のTesla車。奇抜なペイントで覆われていて、Teslaの人気車種Model3のように見えますが、少し違っているんです…。これは、以前から噂されているTesla廉価モデルの試作車では？という声があがっています。期待される廉価Ver.電気自動車業界を牽引するTeslaですが、以前からシェア拡大のためにはある程度価格を抑えた安価モデルが必要だと言",
            "url": "https://www.gizmodo.jp/2024/10/tesla-new-type.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/10/05/csm_21945_3e16ff15a4.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2024-10-06T03:00:00Z",
            "content": "Copyright © Mediagene Inc. All Rights Reserved."
        },
        {
            "source": {
                "id": null,
                "name": "Lavozdegalicia.es"
            },
            "author": "Miguel Palacio",
            "title": "Trump vuelve a Butler, donde en julio un disparo se quedó a milímetros de costarle la vida",
            "description": "Acompañó al expresidente su ahora inseparable Elon Musk",
            "url": "https://www.lavozdegalicia.es/noticia/internacional/2024/10/05/trump-vuelve-butler-julio-disparo-quedo-milimetros-costarle-vida/00031728157466090762833.htm",
            "urlToImage": "https://img.lavdg.com/sc/WrmwCZRUmrT5SuqnFqD9yLQycOM=/1280x/2024/10/05/00121728157201456993494/Foto/efe_20241005_192857190.jpg",
            "publishedAt": "2024-10-06T03:00:00Z",
            "content": "Cuando Donald Trump sobrevivió a un intento de asesinatohace 84 días, Estados Unidos se encaminaba a unas elecciones diferentes. Se sentaba entonces sobre una cómoda ventaja, acababa de protagonizar … [+3084 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aristeguinoticias.com"
            },
            "author": "Redacción AN / ES",
            "title": "Musk presume foto con gorra de ‘Make America Great Again’",
            "description": "Musk financió en secreto a un grupo político conservador en los últimos años, lo que ilustra un apoyo financiero silencioso a causas de derecha, reveló Reuters.",
            "url": "https://aristeguinoticias.com/0510/mundo/musk-presume-foto-con-gorra-de-make-america-great-again/",
            "urlToImage": "https://editorial.aristeguinoticias.com/wp-content/uploads/2024/10/Musk-presume-foto-con-gorra-Make-America-Great-Again-05102024.jpg",
            "publishedAt": "2024-10-06T02:53:10Z",
            "content": "El magnate Elon Musk presumió este sábado una fotografía en la que luce con una gorra que tiene la leyenda “Make America Great Again”, una frase que ha explotado el candidato presidencial de Estados … [+3643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "20 Minutes"
            },
            "author": "20 Minutes avec AFP (20 Minutes)",
            "title": "Election américaine 2024 : Devant Elon Musk, Trump offensif lors de son meeting là où il a failli être tué",
            "description": "Donald Trump était samedi à Butler, où il avait réchappé de peu à une tentative d’assassinat le 13 juillet dernier",
            "url": "https://www.20minutes.fr/monde/election-presidentielle-americaine/4113920-20241006-election-americaine-2024-devant-elon-musk-trump-offensif-lors-meeting-failli-etre-tue",
            "urlToImage": "https://img.20mn.fr/haLbnx-FSVebWWUs7AHEJik/1444x920_tesla-and-space-x-ceo-elon-musk-speaks-alongside-republican-presidential-nominee-former-president-donald-trump-at-a-campaign-event-at-the-butler-farm-show-saturday-oct-5-2024-in-butler-pa-ap-photo-alex-brandon-papu700-24279819849244-2410060050",
            "publishedAt": "2024-10-06T02:38:23Z",
            "content": "En campagne pour espérer remporter la présidentielle américaine face à Kamala Harris, Donald Trump a tenu samedi un meeting sur un lieu particulièrement symbolique pour lui. Le candidat républicain é… [+2753 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Emprendedoresnews.com"
            },
            "author": "Invitado",
            "title": "Como crear un cerebro artificial para las empresas",
            "description": "La clave de una implementación exitosa del cerebro artificial corporativo no solo radica en la tecnología, sino en cómo se prepara al capital humano para aprovechar al máximo su potencial.\nLa entrada Como crear un cerebro artificial para las empresas aparece …",
            "url": "https://emprendedoresnews.com/tips/como-crear-un-cerebro-artificial-para-las-empresas.html",
            "urlToImage": "https://emprendedoresnews.com/wp-content/uploads/2024/10/En-esta-empresa-3.jpg",
            "publishedAt": "2024-10-06T02:30:00Z",
            "content": "La clave de una implementación exitosa del cerebro artificial corporativo no solo radica en la tecnología, sino en cómo se prepara al capital humano para aprovechar al máximo su potencial.\r\nEl conoci… [+27303 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WSLS 10"
            },
            "author": "Meg Kinnard",
            "title": "Elon Musk makes first appearance at Trump rally casting election in dire terms",
            "description": "Elon Musk has praised Donald Trump as the only candidate “to preserve democracy in America.\"",
            "url": "https://www.wsls.com/news/politics/2024/10/05/elon-musk-makes-first-appearance-at-trump-rally-casting-election-in-dire-terms/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/6M6ISU64U5DZFIXEFXXXJJZEEE.jpg?_a=DATAg1fiZAA0",
            "publishedAt": "2024-10-06T02:13:31Z",
            "content": "Billionaire tech executive Elon Musk cast the upcoming presidential election in dire terms during an appearance with Donald Trump, calling the Republican presidential nominee the only candidate to pr… [+2273 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KPRC Click2Houston"
            },
            "author": "Meg Kinnard",
            "title": "Elon Musk makes first appearance at Trump rally casting election in dire terms",
            "description": "Elon Musk heralded Donald Trump on Saturday as the only candidate “to preserve democracy in America.\"",
            "url": "https://www.click2houston.com/news/politics/2024/10/05/elon-musk-makes-first-appearance-at-trump-rally-casting-election-in-dire-terms/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/PTKK376WCZAD5CB4MRXVZAEBLU.jpg?_a=DATAg1fiZAA0",
            "publishedAt": "2024-10-06T02:00:32Z",
            "content": "Billionaire tech executive Elon Musk cast the upcoming presidential election in dire terms during a Saturday appearance with Donald Trump, calling the Republican presidential nominee the only candida… [+2352 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ETF Daily News"
            },
            "author": "MarketBeat News",
            "title": "Halpern Financial Inc. Acquires 172 Shares of Tesla, Inc. (NASDAQ:TSLA)",
            "description": "Halpern Financial Inc. increased its holdings in shares of Tesla, Inc. (NASDAQ:TSLA – Free Report) by 51.5% in the third quarter, HoldingsChannel reports. The firm owned 506 shares of the electric vehicle producer’s stock after buying an additional 172 shares…",
            "url": "https://www.etfdailynews.com/2024/10/05/halpern-financial-inc-acquires-172-shares-of-tesla-inc-nasdaqtsla/",
            "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
            "publishedAt": "2024-10-06T01:55:16Z",
            "content": "Halpern Financial Inc. increased its holdings in shares of Tesla, Inc. (NASDAQ:TSLA – Free Report) by 51.5% in the third quarter, HoldingsChannel reports. The firm owned 506 shares of the electric ve… [+6657 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Memeorandum.com"
            },
            "author": null,
            "title": "Elon Musk Leaps to Trump's Side in Rally Appearance (Ryan Mac/New York Times)",
            "description": "Ryan Mac / New York Times:\nElon Musk Leaps to Trump's Side in Rally Appearance  —  Mr. Musk, the world's richest man and the owner of Tesla and X, endorsed the former president after the attempted assassination in July.  On Saturday, he returned to the scene …",
            "url": "https://www.memeorandum.com/241005/p43",
            "urlToImage": "https://static01.nyt.com/images/2024/10/05/multimedia/05election-live-bellybutton-jhpz/05election-live-bellybutton-jhpz-facebookJumbo.jpg",
            "publishedAt": "2024-10-06T01:55:00Z",
            "content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Trump und Musk treten gemeinsam bei Wahlkampfveranstaltung auf",
            "description": "Drei Monate zuvor war in Pennsylvania ein Attentat auf ihn verübt worden. Nun kehrte der republikanische Präsidentschaftskandidat Trump dorthin zurück, um Wahlkampf zu machen. Diesmal als Unterstützer mit dabei: Tech-Milliardär Musk.",
            "url": "https://www.tagesschau.de/ausland/usa-trump-musk-100.html",
            "urlToImage": "https://images.tagesschau.de/image/f5ea49ed-bf73-4e81-80b1-5c0bde3aa57a/AAABkl9Mv24/AAABkZLhkrw/16x9-1280/musk-trump-104.jpg",
            "publishedAt": "2024-10-06T01:51:59Z",
            "content": "Stand: 06.10.2024 03:51 Uhr\r\nDrei Monate zuvor war in Pennsylvania ein Attentat auf ihn verübt worden. Nun kehrte der republikanische Präsidentschaftskandidat Trump dorthin zurück, um Wahlkampf zu ma… [+2612 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "Press Trust of India",
            "title": "Trump, with Elon Musk, addresses thousands at failed assassination bid site",
            "description": "Former US president Donald Trump on Saturday returned to Butler, a city in Pennsylvania where he narrowly escaped an assassination bid 12 weeks ago, and addressed thousands of his supporters in this key battleground state, urging them to elect him as the next…",
            "url": "https://www.business-standard.com/world-news/trump-with-elon-musk-addresses-thousands-at-failed-assassination-bid-site-124100600043_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/04/thumb/fitandfill/400X400/1728023423-2144.JPG",
            "publishedAt": "2024-10-06T01:50:36Z",
            "content": "Former US president Donald Trump on Saturday returned to Butler, a city in Pennsylvania where he narrowly escaped an assassination bid 12 weeks ago, and addressed thousands of his supporters in this … [+5573 chars]"
        },
        {
            "source": {
                "id": "new-york-magazine",
                "name": "New York Magazine"
            },
            "author": "Chas Danner",
            "title": "Elon Musk Jumped for Trump at Butler Rally",
            "description": "Billionaire X owner Elon Musk joined Donald Trump on stage at his big rally in Butler, Pennsylvania — and it was weird.",
            "url": "http://nymag.com/intelligencer/article/elon-musk-jumped-for-trump-at-butler-rally.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/6de/69b/29632cdf51e740894bbf635e9d25551dc7-musk-trump-rally.1x.rsocial.w1200.jpg",
            "publishedAt": "2024-10-06T01:41:00Z",
            "content": "Elon Musk joined the MAGA circus in person on Saturday night, literally jumping on stage with Donald Trump during the former presidents big rally return to the same Butler, Pennsylvania fairgrounds w… [+2876 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Politicalwire.com"
            },
            "author": "Taegan Goddard",
            "title": "Elon Musk Leaps to Trump’s Side in Rally Appearance",
            "description": "“Elon Musk, the billionaire head of Tesla and SpaceX, strode onto the stage to cheers at Donald Trump’s rally on Saturday night, lifted his arms above his head and jumped into the air — twice — exposing his navel as his shirt rode up,” the New York Times repo…",
            "url": "https://politicalwire.com/2024/10/05/elon-musk-leaps-to-trumps-side-in-rally-appearance/",
            "urlToImage": "https://politicalwire.com/wp-content/uploads/2018/02/PW-podcast-logo.jpg",
            "publishedAt": "2024-10-06T01:39:46Z",
            "content": "“There are a lot of blogs and news sites claiming to understand politics, but only a few actually do. Political Wire is one of them.”\r\n Chuck Todd, host of “Meet the Press”\r\n“Concise. Relevant. To th… [+594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "gotreksson",
            "title": "Автомобильные предпочтения в Китае, на каких машинах ездят сами китайцы",
            "description": "Тема легковых автомобилей в Китае вызывает интерес, особенно в России, где распространено мнение о предпочтении китайцами европейских и японских кроссоверов и престижных электромобилей. Однако статистика показывает, что китайцы со среднем и низким доходом всё…",
            "url": "https://overclockers.ru/blog/GOTREK/show/183763/Avtomobil-nye-predpochteniya-v-Kitae-na-kakih-mashinah-ezdyat-sami-kitajcy",
            "urlToImage": "https://overclockers.ru/st/legacy/blog/427436/570180_O.png",
            "publishedAt": "2024-10-06T01:35:31Z",
            "content": ", , . , , .\r\n, , , . , ., , , . , . , , Tesla Model Y, 200 . .\r\n BYD. 2024 1,32 . Geely 445 . , Changan (386 . .), Wuling (351 . .) Chery (265 . .). .\r\n , , , , , -5 .\r\n , , . , 2024 921 . Volkswagen… [+442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Record.com.mx"
            },
            "author": "Record.com.mx",
            "description": "Elon Musk estuvo presente acompañándolo en el mitin en donde se reunieron miles de simpatizantes",
            "url": "https://www.record.com.mx/contra/donald-trump-regresa-a-pensilvania-lugar-de-su-primer-intento-de-asesinato",
            "urlToImage": "https://www.record.com.mx/sites/default/files/articulos/2024/10/05/proyecto_nuevo_-_2024-10-05t192723.512.jpg",
            "publishedAt": "2024-10-06T01:28:02Z",
            "content": "El día de hoy, sábado, 05 de octubre, Donald Trump tuvo su mitin en Pensilvania, lugar donde hace unos meses tuvo su intento de asesinato, lo cuál marcó el hecho, como un hecho que trascendió a la hi… [+1405 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Finance.ua"
            },
            "author": "Finance.UA",
            "title": "Tesla больше не будет продавать свою доступную модель Model 3 Standard Range",
            "description": "Tesla прекратила продажу своей самой дешевой модели электромобиля: Model 3 Standard Range Rear-Wheel-Drive. Это следует из обновленного конфигуратора онлайн Model 3, который больше не содержит этой версии.",
            "url": "https://news.finance.ua/ru/tesla-bol-she-ne-budet-prodavat-svoyu-dostupnuyu-model-model-3-standard-range",
            "urlToImage": "https://finance-news-media.fra1.cdn.digitaloceanspaces.com/prod/a/e/ae167e6019cebcfb0a28e63e88596290",
            "publishedAt": "2024-10-06T01:25:00Z",
            "content": ""
        }
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        articles.map((i,index) => (
                            <div className="col-3" key={index}>
                                <div class="card">
                                    <div className="card-header">
                                       <div className="d-flex justify-content-between align-items-center">
                                       <p style={{margin:"0px"}}>Article no </p><span className='badge bg-dark'>{index}</span>
                                       </div>
                                        <h3>{i.title ? i.title.slice(0,20) : "Hello Codings First"}...</h3>
                                    </div>
                                    <div className="card-body">
                                        <img src={i.urlToImage ? i.urlToImage : "https://www.investopedia.com/thmb/bl7IbhLvl1S4Vo1Qjx7qW-pYfSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_JPMorganChaseHQ_GettyImages-548207569-0e2f2f6c1cae462fbf5deeb0076d4998.jpg"} alt="" style={{height:"150px", width:"100%"}}/>
                                        <p>{i.description ? i.description.slice(0,60) : " прекратила продажу своей самой дешевой модели электромобиля: Model 3 Standard Ra"}..</p>
                                    </div>
                                    <div className="card-footer">
                                        <a href={i.url} className='btn btn-dark'>Read More</a>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
