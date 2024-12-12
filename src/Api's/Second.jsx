import React from 'react'

export default function Second() {

  const article = [
    {
      "source": {
        "id": null,
        "name": "Futura"
      },
      "author": "Futura avec ETX Daily Up",
      "title": "« Ça va entrer dans les livres d’histoire » : Elon Musk prépare un bouleversement dans l’automobile avec son Robotaxi",
      "description": "À l'approche de la présentation officielle du robotaxi de Tesla, prévue ce jeudi, rumeurs et spéculations se multiplient. Et bien que des taxis électriques autonomes existent déjà, l'événement suscite une grande attente, entretenue par le mystère que Tesla ga…",
      "url": "https://www.futura-sciences.com/tech/actualites/smartmotion-ca-va-entrer-livres-histoire-elon-musk-prepare-bouleversement-automobile-son-robotaxi-116652/",
      "urlToImage": "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/a/7/9a78cc491a_50222021_robotaxi-illustration.jpg",
      "publishedAt": "2024-10-10T11:02:53Z",
      "content": "Depuis avril, Elon MuskElon Musk, patron du spécialiste des véhicules électriques, distille des bribes sur la présentation qu'il avait annoncée pour le 8 août, mais qui a été décalée au 10 octobre. J… [+4525 chars]"
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Tom Krisher, The Associated Press",
      "title": "Tesla set to unveil ‘Cybercab’ robotaxi after long wait amid doubts about its self-driving technology",
      "description": "Expectations are high for the long-awaited unveiling of Tesla's robotaxi. Too high for some analysts and investors.",
      "url": "https://fortune.com/2024/10/10/tesla-robotaxi-launch-doubts/",
      "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-2176138679_993dac.jpg?resize=1200,600",
      "publishedAt": "2024-10-10T11:01:31Z",
      "content": "Expectations are high for the long-awaited unveiling of Teslas robotaxi at a Hollywood studio Thursday night. Too high for some analysts and investors.The company, which began selling software it cal… [+5190 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "zerohedge.com",
      "title": "Cybercab Arrives: Everything To Expect From Tonight's Tesla Robotaxi Event",
      "description": "Cybercab Arrives: Everything To Expect From Tonight's Tesla Robotaxi Event\n \n\"The Most Important Tesla Event Ever\"\nTesla’s much awaited Robotaxi event, “We, Robot,” is set for tomorrow, live from Warner Bros. Discovery Studios in Hollywood, Los Angeles. The e…",
      "url": "https://biztoc.com/x/dc68be142a224daf",
      "urlToImage": "https://biztoc.com/cdn/dc68be142a224daf_s.webp",
      "publishedAt": "2024-10-10T11:01:29Z",
      "content": "Cybercab Arrives: Everything To Expect From Tonight's Tesla Robotaxi Event\r\n\"The Most Important Tesla Event Ever\"Teslas much awaited Robotaxi event, We, Robot, is set for tomorrow, live from Warner B… [+129 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investor's Business Daily"
      },
      "author": "Investor's Business Daily",
      "title": "How To Drive Down Rising Costs Of Auto Insurance",
      "description": "The cost of owning a car is speeding higher. And it's not just pain at the pump.",
      "url": "https://www.investors.com/etfs-and-funds/personal-finance/auto-insurance-how-to-drive-down-rising-costs/",
      "urlToImage": "https://www.investors.com/wp-content/uploads/2022/05/Stock-CarsParked-adobe.jpg",
      "publishedAt": "2024-10-10T11:00:03Z",
      "content": "The cost of owning a car is speeding higher. And it's not just pain at the pump. Higher financing costs and skyrocketing sticker prices are swelling monthly costs. Fast-rising auto insurance costs ar… [+7524 chars]"
    },
  ]
  return (
      <div>
          
          <div className="container">
              <div className="row">
                  <h4>In the news</h4>

          {article.map((i, j) => (
            <div className="col-3" key={j}>
              <div className="card">


                <div className="pic">
                  <img src={i.urlToImage ? i.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsYUo0ARJu00LyyzWPxy0NhLHE2dK_KMPkA&s'} style={{ height: '30vh', width: '50%' }} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur, provident aspernatur eos quo voluptate distinctio quos. Quidem possimus unde nemo fugiat? Nesciunt nobis vel aperiam quod maiores, facilis laborum!</p>
                </div>


                <div className="detail"></div>

                


                
              </div>

              

            </div>
          
          )
          )
            
            
            
          }
          
          

                

                  
              </div>
          </div>
      
    </div>
  )
}
