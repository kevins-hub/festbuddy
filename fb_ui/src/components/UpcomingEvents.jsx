import React, { useState, useEffect } from 'react';
//import useInfiniteScroll from "react-infinite-scroll-hook";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {

  const baseUrl = "https://api.seatgeek.com/2/events";

  const credentials = {
    "client_id": "MjA5MDI2NDR8MTY3Mzc0NDg0NC4wNTI3NjE2",
    "client_secret": "e94e767c9558a11c7583acac5c7d709fc04fd7812ee2cd10ad12334efcbe71cf"
  };

  const config = {
    "per_page": 500,
    "venue.city": "Los Angeles",
    "type": "concert"
  }

  const [events, setEvents] = useState([]);
  const [fetched , setFetched] = useState(false);

  const buildUrl = () => {
    let url = baseUrl;
    url += "?";
    Object.keys(config).forEach(key => {
      typeof config[key] === "string" ?
        url += key + "=" + config[key].replace(" ", "%20") + "&"
      : url += key + "=" + config[key].toString() + "&"
    });
    url += "client_id=" + credentials.client_id;
    return url
  }

  const fetchUrl = buildUrl();

  async function fetchEvents(credentials) {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(newData => {
        setEvents([...events, ...newData.events]);
        setFetched(true);
      })
  }

  useEffect(() => {
    if (!fetched) {
      fetchEvents(credentials);
    }
    console.warn("Tester");
    console.warn("again");
  });

  // comment to test commit

//   const eventsList = [
//     {
//       "stats": {
//           "listing_count": 161,
//           "average_price": 97,
//           "lowest_price": 62,
//           "highest_price": 296
//       },
//       "title": "Young The Giant with Grouplove",
//       "url": "https://seatgeek.com/young-the-giant-with-grouplove-tickets/new-york-new-york-terminal-5-2012-03-09/concert/721901/",
//       "datetime_local": "2012-03-09T19:00:00",
//       "performers": [
//           {
//               "name": "Young The Giant",
//               "short_name": "Young The Giant",
//               "url": "https://seatgeek.com/young-the-giant-tickets/",
//               "image": "https://chairnerd.global.ssl.fastly.net/images/bandshuge/band_8741.jpg",
//               "images": {
//                   "large": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/eec61caec82950448b257c5e539147bc/large.jpg",
//                   "huge": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/555bce1815140ad65ab0b1066467ae7d/huge.jpg",
//                   "small": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/af7a8925e50bb74315337a9450206a39/small.jpg",
//                   "medium": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/686f925886504610936135abd240235c/medium.jpg"
//               },
//               "primary": true,
//               "id": 8741,
//               "score": 6404,
//               "type": "band",
//               "slug": "young-the-giant"
//           },
//           {
//               "name": "Grouplove",
//               "short_name": "Grouplove",
//               "url": "https://seatgeek.com/grouplove-tickets/",
//               "image": null,
//               "images": null,
//               "id": 8987,
//               "score": 4486,
//               "type": "band",
//               "slug": "grouplove"
//           }
//       ],
//       "venue": {
//           "city": "New York",
//           "name": "Terminal 5",
//           "extended_address": null,
//           "url": "https://seatgeek.com/terminal-5-tickets/",
//           "country": "US",
//           "state": "NY",
//           "score": 149.259,
//           "postal_code": "10019",
//           "location": {
//               "lat": 40.77167,
//               "lon": -73.99277
//           },
//           "address": null,
//           "id": 814
//       },
//       "short_title": "Young The Giant with Grouplove",
//       "datetime_utc": "2012-03-10T00:00:00",
//       "score": 116.977,
//       "taxonomies": [
//           {
//               "parent_id": null,
//               "id": 2000000,
//               "name": "concert"
//           }
//       ],
//       "type": "concert",
//       "id": 721901
//   },
//   {
//     "stats": {
//         "listing_count": 161,
//         "average_price": 97,
//         "lowest_price": 62,
//         "highest_price": 296
//     },
//     "title": "Young The Giant with Grouplove",
//     "url": "https://seatgeek.com/young-the-giant-with-grouplove-tickets/new-york-new-york-terminal-5-2012-03-09/concert/721901/",
//     "datetime_local": "2012-03-09T19:00:00",
//     "performers": [
//         {
//             "name": "Young The Giant",
//             "short_name": "Young The Giant",
//             "url": "https://seatgeek.com/young-the-giant-tickets/",
//             "image": "https://chairnerd.global.ssl.fastly.net/images/bandshuge/band_8741.jpg",
//             "images": {
//                 "large": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/eec61caec82950448b257c5e539147bc/large.jpg",
//                 "huge": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/555bce1815140ad65ab0b1066467ae7d/huge.jpg",
//                 "small": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/af7a8925e50bb74315337a9450206a39/small.jpg",
//                 "medium": "https://chairnerd.global.ssl.fastly.net/images/performers/8741/686f925886504610936135abd240235c/medium.jpg"
//             },
//             "primary": true,
//             "id": 8741,
//             "score": 6404,
//             "type": "band",
//             "slug": "young-the-giant"
//         },
//         {
//             "name": "Grouplove",
//             "short_name": "Grouplove",
//             "url": "https://seatgeek.com/grouplove-tickets/",
//             "image": null,
//             "images": null,
//             "id": 8987,
//             "score": 4486,
//             "type": "band",
//             "slug": "grouplove"
//         }
//     ],
//     "venue": {
//         "city": "New York",
//         "name": "Terminal 5",
//         "extended_address": null,
//         "url": "https://seatgeek.com/terminal-5-tickets/",
//         "country": "US",
//         "state": "NY",
//         "score": 149.259,
//         "postal_code": "10019",
//         "location": {
//             "lat": 40.77167,
//             "lon": -73.99277
//         },
//         "address": null,
//         "id": 814
//     },
//     "short_title": "Young The Giant with Grouplove",
//     "datetime_utc": "2012-03-10T00:00:00",
//     "score": 116.977,
//     "taxonomies": [
//         {
//             "parent_id": null,
//             "id": 2000000,
//             "name": "concert"
//         }
//     ],
//     "type": "concert",
//     "id": 721901
// }
//   ];




  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {
              (event.performers.length > 0) ?
              (<img src={event.performers[0].image} alt={event.name} />)
              : (<></>)
            }
            <h3>{event.title}</h3>
            {
              event.performers.map((performer) => (
                <p>{performer.name}</p>
              ))
            }
            <p>{event.venue.name + " " + event.venue.city}</p>
            <p>{event.datetime_utc}</p>
            <button>View Event</button>
          </li>
        ))}
        {/*isFetching && <div>Loading...</div>*/}
      </ul>
    </div>
  );
};

export default UpcomingEvents;