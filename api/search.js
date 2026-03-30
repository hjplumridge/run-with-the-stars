const FILMING_LOCATIONS = [

  // ── UK & IRELAND ──────────────────────────────────────────
  { film: "Harry Potter series", year: "2001-2011", city: "Oxford, UK", lat: 51.7536, lon: -1.2527, hint: "Bodleian Library and Christ Church College used as Hogwarts interiors. Students run through the cloisters and courtyards." },
  { film: "Inspector Morse / Endeavour", year: "1987-2023", city: "Oxford, UK", lat: 51.7520, lon: -1.2550, hint: "Filmed extensively on location in Oxford city centre — Radcliffe Square, the High Street, Broad Street and the covered market." },
  { film: "My Oxford Year", year: "2025", city: "Oxford, UK", lat: 51.7548, lon: -1.2544, hint: "Netflix film shot on location around Oxford University — Radcliffe Camera, Christ Church Meadow, and the river." },
  { film: "Trainspotting", year: "1996", city: "Edinburgh, Scotland", lat: 55.9524, lon: -3.1883, hint: "The opening chase down Princes Street filmed on location in Edinburgh city centre." },
  { film: "T2 Trainspotting", year: "2017", city: "Edinburgh, Scotland", lat: 55.9500, lon: -3.1900, hint: "Renton and Simon's run through Edinburgh was filmed on location — Arthur's Seat and the Old Town." },
  { film: "28 Days Later", year: "2002", city: "London, UK", lat: 51.5007, lon: -0.1246, hint: "Jim's run through an eerily empty London — Westminster Bridge, Piccadilly, and the City at dawn." },
  { film: "Notting Hill", year: "1999", city: "London, UK", lat: 51.5152, lon: -0.2016, hint: "The famous run through the seasons filmed in and around Portobello Road and St Luke's Mews." },
  { film: "Billy Elliot", year: "2000", city: "County Durham, UK", lat: 54.7753, lon: -1.5849, hint: "Filmed on location in Easington Colliery. Billy runs through the real pit village streets." },
  { film: "The Full Monty", year: "1997", city: "Sheffield, UK", lat: 53.3811, lon: -1.4701, hint: "The lads' training run filmed entirely on location through real Sheffield streets." },
  { film: "Lock Stock and Two Smoking Barrels", year: "1998", city: "London, UK", lat: 51.5200, lon: -0.0800, hint: "Filmed on location in East London — Bethnal Green and Hackney streets." },
  { film: "Snatch", year: "2000", city: "London, UK", lat: 51.5137, lon: -0.1337, hint: "Guy Ritchie's frantic London chase sequences filmed across central and East London." },
  { film: "Run Fatboy Run", year: "2007", city: "London, UK", lat: 51.4995, lon: -0.1245, hint: "Dennis's marathon run through London filmed on location — the Thames Embankment and Westminster." },
  { film: "Skyfall", year: "2012", city: "London, UK", lat: 51.5085, lon: -0.1257, hint: "Bond's rooftop chase through London filmed on location — Whitehall and the Embankment." },
  { film: "About Time", year: "2013", city: "London, UK", lat: 51.5265, lon: -0.0755, hint: "Tim's runs through London filmed in Shoreditch and along the Thames." },
  { film: "Eddie the Eagle", year: "2015", city: "Cheltenham, UK", lat: 51.8994, lon: -2.0783, hint: "Eddie's early training runs filmed on location in and around Cheltenham." },
  { film: "This Is England", year: "2006", city: "Nottingham, UK", lat: 52.9548, lon: -1.1581, hint: "Filmed on location in Nottingham's Radford area." },
  { film: "Kes", year: "1969", city: "Barnsley, UK", lat: 53.5526, lon: -1.4797, hint: "Billy Casper's run across the South Yorkshire fields filmed on location around Barnsley." },
  { film: "Atonement beach scene", year: "2007", city: "Redcar, UK", lat: 54.6175, lon: -1.0644, hint: "The Dunkirk beach tracking shot was actually filmed at Redcar beach in North Yorkshire." },
  { film: "Braveheart", year: "1995", city: "Glen Nevis, Scotland", lat: 56.7959, lon: -5.0037, hint: "Wallace's run through the Highland landscape was filmed on location in Glen Nevis near Fort William." },
  { film: "Rob Roy", year: "1995", city: "Scottish Highlands", lat: 57.1200, lon: -4.7200, hint: "Filmed on location in the Scottish Highlands — Loch Morar and Glen Coe." },
  { film: "The Commitments", year: "1991", city: "Dublin, Ireland", lat: 53.3498, lon: -6.2603, hint: "The lads' run through Dublin's northside was filmed on location in Clontarf and the city centre." },
  { film: "Once", year: "2006", city: "Dublin, Ireland", lat: 53.3488, lon: -6.2589, hint: "Filmed on location on Dublin's Grafton Street and surrounding streets." },
  { film: "Calvary", year: "2014", city: "County Sligo, Ireland", lat: 54.2697, lon: -8.4694, hint: "Father James's run along the Atlantic coast filmed on location on Enniscrone beach, County Sligo." },

  // ── EUROPE ───────────────────────────────────────────────
  { film: "Run Lola Run", year: "1998", city: "Berlin, Germany", lat: 52.5200, lon: 13.4050, hint: "Lola's three desperate 20-minute runs filmed on location across Berlin — Friedrichshain, Mitte and Kreuzberg." },
  { film: "Goodbye Lenin", year: "2003", city: "Berlin, Germany", lat: 52.5170, lon: 13.4020, hint: "Alex's frantic run through East Berlin filmed on location in Prenzlauer Berg and Alexanderplatz." },
  { film: "The Bourne Identity", year: "2002", city: "Paris, France", lat: 48.8566, lon: 2.3522, hint: "Jason Bourne's rooftop chase filmed on location in central Paris and Montmartre." },
  { film: "The Bourne Ultimatum", year: "2007", city: "Paris, France", lat: 48.8600, lon: 2.3400, hint: "The Waterloo station chase was filmed on location — and Bourne's Paris run through narrow streets." },
  { film: "Midnight in Paris", year: "2011", city: "Paris, France", lat: 48.8600, lon: 2.3400, hint: "Gil's night runs through Paris filmed on location — the Seine, Montmartre, and the Left Bank." },
  { film: "Amelie", year: "2001", city: "Paris, France", lat: 48.8842, lon: 2.3470, hint: "Amelie's run through Montmartre filmed entirely on location in the 18th arrondissement." },
  { film: "Les Miserables", year: "2019", city: "Clichy-sous-Bois, France", lat: 48.9078, lon: 2.5533, hint: "The banlieue chase scenes filmed on location in the real Paris suburbs." },
  { film: "The Tourist", year: "2010", city: "Venice, Italy", lat: 45.4408, lon: 12.3155, hint: "The rooftop chase across Venice filmed on location — real canals, bridges and narrow calli." },
  { film: "Roman Holiday", year: "1953", city: "Rome, Italy", lat: 41.9028, lon: 12.4964, hint: "Audrey Hepburn's run through Rome filmed entirely on location — the Trevi Fountain, Spanish Steps." },
  { film: "To Rome with Love", year: "2012", city: "Rome, Italy", lat: 41.9100, lon: 12.4900, hint: "Woody Allen's comedy filmed on location across Rome — the Piazza Navona and Trastevere." },
  { film: "Call Me by Your Name", year: "2017", city: "Lombardy, Italy", lat: 45.5231, lon: 10.2095, hint: "Elio's summer runs filmed on location in Crema and the surrounding Lombardy countryside." },
  { film: "Harry Styles - Golden", year: "2020", city: "Amalfi Coast, Italy", lat: 40.6333, lon: 14.6333, hint: "Harry Styles runs along the Amalfi Coast — filmed on location between Maiori and Minori." },
  { film: "The Third Man", year: "1949", city: "Vienna, Austria", lat: 48.1900, lon: 16.3600, hint: "The famous sewer chase filmed in Vienna's real underground sewer network." },
  { film: "Before Sunrise", year: "1995", city: "Vienna, Austria", lat: 48.2082, lon: 16.3738, hint: "Jesse and Celine's walks and runs through Vienna filmed entirely on location in the city centre." },
  { film: "The Sound of Music", year: "1965", city: "Salzburg, Austria", lat: 47.8095, lon: 13.0550, hint: "Maria's run through the Alpine meadows filmed on location above Salzburg at Werfen." },
  { film: "Mamma Mia", year: "2008", city: "Skopelos, Greece", lat: 39.1200, lon: 23.7200, hint: "Sophie's run down to the harbour filmed on location on the Greek island of Skopelos." },
  { film: "The Inbetweeners Movie", year: "2011", city: "Malia, Crete, Greece", lat: 35.2977, lon: 25.4714, hint: "The lads' chaotic run across the resort filmed on location in Malia, Crete." },
  { film: "Zorba the Greek", year: "1964", city: "Crete, Greece", lat: 35.3387, lon: 25.1442, hint: "Filmed on location in Stavros, Crete — the beach scenes are real." },
  { film: "Vicky Cristina Barcelona", year: "2008", city: "Barcelona, Spain", lat: 41.3851, lon: 2.1734, hint: "Filmed on location across Barcelona — the Gothic Quarter and Barceloneta beach." },
  { film: "L'Auberge Espagnole", year: "2002", city: "Barcelona, Spain", lat: 41.3900, lon: 2.1500, hint: "Xavier's run through Barcelona's streets filmed on location in the Eixample and Gothic Quarter." },
  { film: "Volver", year: "2006", city: "Madrid, Spain", lat: 40.4168, lon: -3.7038, hint: "Filmed on location in La Mancha and Madrid — Pedro Almodovar's home territory." },
  { film: "Sigur Ros - Hoppipolla", year: "2005", city: "Reykjavik, Iceland", lat: 64.1355, lon: -21.8954, hint: "Filmed on location in Iceland — elderly people running joyfully across the Icelandic landscape." },

  // ── USA ───────────────────────────────────────────────────
  { film: "Rocky", year: "1976", city: "Philadelphia, USA", lat: 39.9656, lon: -75.1810, hint: "Rocky's training run up the Art Museum steps filmed entirely on location in Philadelphia." },
  { film: "Rocky II-IV training montages", year: "1979-1985", city: "Philadelphia, USA", lat: 39.9500, lon: -75.1500, hint: "Rocky's subsequent training runs filmed on location through the streets of Philadelphia." },
  { film: "Silver Linings Playbook", year: "2012", city: "Philadelphia, USA", lat: 40.0379, lon: -75.2463, hint: "Pat's obsessive training runs through suburban Philadelphia filmed on location in Upper Darby." },
  { film: "Forrest Gump", year: "1994", city: "Savannah, USA", lat: 32.0758, lon: -81.0932, hint: "The bench scenes in Chippewa Square, Savannah. The cross-country run used multiple US locations." },
  { film: "Friends", year: "1994-2004", city: "New York, USA", lat: 40.7812, lon: -73.9665, hint: "Phoebe's iconic freeform run with Rachel filmed on location in Central Park, New York." },
  { film: "Marathon Man", year: "1976", city: "New York, USA", lat: 40.7829, lon: -73.9654, hint: "Dustin Hoffman's training runs filmed on location in Central Park, New York." },
  { film: "Vanilla Sky", year: "2001", city: "New York, USA", lat: 40.7580, lon: -73.9855, hint: "Tom Cruise runs alone through a deserted Times Square — filmed on location at dawn." },
  { film: "Breakfast at Tiffanys", year: "1961", city: "New York, USA", lat: 40.7614, lon: -73.9776, hint: "Holly Golightly's run through Midtown filmed on location on Fifth Avenue." },
  { film: "The French Connection", year: "1971", city: "New York, USA", lat: 40.6782, lon: -73.9442, hint: "Popeye Doyle's chase through the Brooklyn streets and elevated subway filmed on location." },
  { film: "Whiplash", year: "2014", city: "New York, USA", lat: 40.7549, lon: -73.9840, hint: "Andrew's desperate run to the concert filmed on location near Carnegie Hall." },
  { film: "Do the Right Thing", year: "1989", city: "New York, USA", lat: 40.6782, lon: -73.9300, hint: "Filmed on location on Stuyvesant Avenue in Bed-Stuy, Brooklyn." },
  { film: "La La Land", year: "2016", city: "Los Angeles, USA", lat: 34.1184, lon: -118.3004, hint: "Mia and Sebastian's run and dance at Griffith Observatory filmed on location in LA." },
  { film: "Terminator 2", year: "1991", city: "Los Angeles, USA", lat: 34.2244, lon: -118.4134, hint: "The flood control channel motorcycle chase filmed on location in Sun Valley, LA." },
  { film: "Boyz n the Hood", year: "1991", city: "Los Angeles, USA", lat: 33.9731, lon: -118.2730, hint: "Filmed on location in South Central Los Angeles — Crenshaw Boulevard and Leimert Park." },
  { film: "Forrest Gump Monument Valley", year: "1994", city: "Monument Valley, USA", lat: 36.9837, lon: -110.0983, hint: "The most famous cross-country running scene in cinema — Forrest stops running here." },
  { film: "Thelma and Louise", year: "1991", city: "Moab, Utah, USA", lat: 38.5733, lon: -109.5498, hint: "The final drive through the Utah desert — filmed on location near Moab and Monument Valley." },
  { film: "The Truman Show", year: "1998", city: "Seaside, Florida, USA", lat: 30.3266, lon: -86.1431, hint: "Truman's frantic run to the edge of his world filmed on location in Seaside, Florida." },
  { film: "Ferris Buellers Day Off", year: "1986", city: "Chicago, USA", lat: 41.8827, lon: -87.6233, hint: "Ferris's frantic run home through Chicago filmed on location — the Art Institute steps and Michigan Avenue." },
  { film: "The Blues Brothers", year: "1980", city: "Chicago, USA", lat: 41.8781, lon: -87.6298, hint: "The spectacular car chases filmed on location through downtown Chicago." },
  { film: "No Country for Old Men", year: "2007", city: "New Mexico, USA", lat: 36.7072, lon: -104.1010, hint: "Llewelyn's run across the Rio Grande filmed on location in the New Mexico desert." },
  { film: "Jurassic Park", year: "1993", city: "Kauai, Hawaii, USA", lat: 22.0964, lon: -159.5261, hint: "The dinosaur chase scenes filmed on location in Kauai's Na Pali Coast and Allerton Garden." },
  { film: "Napoleon Dynamite", year: "2004", city: "Preston, Idaho, USA", lat: 42.0963, lon: -111.8763, hint: "Napoleon's run home filmed on location in Preston, Idaho." },
  { film: "Eminem - Lose Yourself", year: "2002", city: "Detroit, USA", lat: 42.3314, lon: -83.0458, hint: "Filmed on location in Detroit — the city that made Eminem." },
  { film: "Mrs Doubtfire", year: "1993", city: "San Francisco, USA", lat: 37.7749, lon: -122.4194, hint: "The park run and chase scenes were filmed on location in San Francisco's Golden Gate Park." },

  // ── CANADA ───────────────────────────────────────────────
  { film: "Scott Pilgrim vs the World", year: "2010", city: "Toronto, Canada", lat: 43.6532, lon: -79.3832, hint: "Scott's runs through Toronto filmed on location — Bloor Street, Spadina and Kensington Market." },
  { film: "Atanarjuat The Fast Runner", year: "2001", city: "Nunavut, Canada", lat: 63.7467, lon: -68.5170, hint: "The extraordinary barefoot sprint across the Arctic ice filmed on location near Igloolik, Nunavut." },
  { film: "Incendies", year: "2010", city: "Montreal, Canada", lat: 45.5017, lon: -73.5673, hint: "Denis Villeneuve's film shot on location in Montreal and Jordan." },

  // ── LATIN AMERICA ────────────────────────────────────────
  { film: "City of God", year: "2002", city: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729, hint: "The chase through the Cidade de Deus favela filmed on location in the real Rio favela." },
  { film: "Elite Squad", year: "2007", city: "Rio de Janeiro, Brazil", lat: -22.8700, lon: -43.2500, hint: "BOPE's run through the favela filmed on location in Morro da Providencia, Rio de Janeiro." },
  { film: "The Motorcycle Diaries", year: "2004", city: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816, hint: "Che and Alberto's journey filmed on location across South America." },
  { film: "Roma", year: "2018", city: "Mexico City, Mexico", lat: 19.4162, lon: -99.1648, hint: "Alfonso Cuaron's film shot entirely on location in the Colonia Roma neighbourhood of Mexico City." },
  { film: "Amores Perros", year: "2000", city: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332, hint: "The desperate street run and crash filmed on location in central Mexico City." },
  { film: "Y Tu Mama Tambien", year: "2001", city: "Oaxaca, Mexico", lat: 16.8531, lon: -96.7266, hint: "The road trip filming locations span across real Mexican towns and beaches." },

  // ── ASIA ─────────────────────────────────────────────────
  { film: "Lost in Translation", year: "2003", city: "Tokyo, Japan", lat: 35.6762, lon: 139.6503, hint: "Bob and Charlotte's nighttime run through Shibuya filmed on location in Tokyo." },
  { film: "Crouching Tiger Hidden Dragon", year: "2000", city: "Beijing, China", lat: 40.4319, lon: 116.5704, hint: "Filmed on location at the Forbidden City and across China — rooftop chase through Peking." },
  { film: "Hero", year: "2002", city: "Zhangye, China", lat: 38.9358, lon: 100.4550, hint: "Zhang Yimou's epic filmed on location across China — the Danxia landforms and ancient lakes." },
  { film: "Slumdog Millionaire", year: "2008", city: "Mumbai, India", lat: 19.0760, lon: 72.8777, hint: "The opening chase through the Dharavi slum filmed on location in Mumbai." },
  { film: "Oldboy", year: "2003", city: "Seoul, South Korea", lat: 37.5665, lon: 126.9780, hint: "Oh Dae-su's corridor fight and run filmed on location in Seoul." },
  { film: "Parasite", year: "2019", city: "Seoul, South Korea", lat: 37.5260, lon: 126.9900, hint: "The Ki-woo family's desperate run through flooding streets filmed on location in Seoul." },
  { film: "Train to Busan", year: "2016", city: "Busan, South Korea", lat: 35.1796, lon: 129.0756, hint: "The frantic run through Busan station filmed on location in South Korea." },
  { film: "Infernal Affairs", year: "2002", city: "Hong Kong", lat: 22.3193, lon: 114.1694, hint: "The rooftop chase filmed on location in Hong Kong's Central district." },
  { film: "In the Mood for Love", year: "2000", city: "Hong Kong", lat: 22.2800, lon: 114.1600, hint: "Tony Leung's slow walk and run filmed in the narrow streets of old Hong Kong." },
  { film: "Chungking Express", year: "1994", city: "Hong Kong", lat: 22.3180, lon: 114.1680, hint: "Cop 223's run through Hong Kong's Chungking Mansions and Lan Kwai Fong filmed on location." },

  // ── MIDDLE EAST & AFRICA ─────────────────────────────────
  { film: "Black Hawk Down", year: "2001", city: "Rabat, Morocco", lat: 33.9716, lon: -6.8498, hint: "The Mogadishu street battle filmed on location in Sale, Morocco." },
  { film: "Gladiator", year: "2000", city: "Ouarzazate, Morocco", lat: 30.9189, lon: -6.8936, hint: "Maximus's run through the Roman arena filmed on location in Ouarzazate, Morocco." },
  { film: "Lawrence of Arabia", year: "1962", city: "Wadi Rum, Jordan", lat: 29.5727, lon: 35.4204, hint: "Lawrence's run through the desert filmed on location in Wadi Rum, Jordan." },
  { film: "The English Patient", year: "1996", city: "Tunisia", lat: 33.8869, lon: 9.5375, hint: "Count Almasy's desert run filmed on location in the Tunisian Sahara." },
  { film: "Mad Max Fury Road", year: "2015", city: "Namib Desert, Namibia", lat: -22.9576, lon: 18.4904, hint: "Filmed in the Namib Desert — one of the most remote filming locations in cinema history." },
  { film: "District 9", year: "2009", city: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473, hint: "Wikus's run through the Soweto township filmed on location in Johannesburg." },
  { film: "Blood Diamond", year: "2006", city: "Mozambique", lat: -18.6657, lon: 35.5296, hint: "Danny Archer's run through the bush filmed on location in Mozambique." },

  // ── AUSTRALIA & NEW ZEALAND ──────────────────────────────
  { film: "Gallipoli", year: "1981", city: "Perth, Australia", lat: -31.9505, lon: 115.8605, hint: "Archy's sprint across the Western Australian outback filmed on location near Fremantle." },
  { film: "Mad Max", year: "1979", city: "Victoria, Australia", lat: -37.8136, lon: 144.9631, hint: "The original road chase filmed on location on the Princes Highway in Victoria." },
  { film: "The Piano", year: "1993", city: "Karekare, New Zealand", lat: -37.0100, lon: 174.4700, hint: "Ada's run across Karekare beach filmed on location on the wild west coast of New Zealand." },
  { film: "Lord of the Rings", year: "2001-2003", city: "Matamata, New Zealand", lat: -37.8700, lon: 175.7600, hint: "The Shire scenes filmed on location in Matamata. Frodo and Sam's run across the fields." },
  { film: "Hunt for the Wilderpeople", year: "2016", city: "Auckland, New Zealand", lat: -36.8485, lon: 174.7633, hint: "Ricky and Hec's run through the New Zealand bush filmed on location in the Waitakere Ranges." },

  // ── MUSIC VIDEOS ─────────────────────────────────────────
  { film: "Harry Styles - Golden", year: "2020", city: "Amalfi Coast, Italy", lat: 40.6333, lon: 14.6333, hint: "Harry Styles runs along the Amalfi Coast — filmed on location between Maiori and Minori." },
  { film: "Robbie Williams - Feel", year: "2002", city: "Los Angeles, USA", lat: 34.0737, lon: -118.4000, hint: "Filmed on location at the Greystone Mansion in Beverly Hills." },
  { film: "Sigur Ros - Hoppipolla", year: "2005", city: "Reykjavik, Iceland", lat: 64.1355, lon: -21.8954, hint: "Filmed on location in Iceland — elderly people running joyfully across the Icelandic landscape." },
  { film: "Eminem - Lose Yourself", year: "2002", city: "Detroit, USA", lat: 42.3314, lon: -83.0458, hint: "Filmed on location in Detroit — the city that made Eminem." },
];

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

async function callAI(apiKey, content, maxTokens) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: maxTokens,
      messages: [{ role: 'user', content }],
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error('API call failed');
  return data.content[0].text.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
}

function fallbackRoute(chosen) {
  return {
    name: chosen.film,
    source: `${chosen.film} (${chosen.year})`,
    loc: chosen.city,
    dist: '5.0KM',
    elev: '35M',
    time: '30 MIN',
    lat: chosen.lat,
    lon: chosen.lon,
    note: chosen.hint,
    waypoints: [],
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'No query provided' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const coordMatch = query.match(/^(-?\d+\.?\d*),\s*(-?\d+\.?\d*)\s+radius:(.+?)(?:\s+Do NOT|$)/i);
  const isLocationQuery = !!coordMatch;
  const isLocationSearch = query.startsWith('LOCATION_SEARCH:');

  console.log('QUERY:', JSON.stringify(query));
  console.log('IS LOCATION QUERY:', isLocationQuery);
  console.log('IS LOCATION SEARCH:', isLocationSearch);

  // ── LOCATION SEARCH: user typed a place name ──────────────
  // Rule: AI NEVER picks the film. Only maths does.
  // Step 1: geocode the place name to lat/lon (one AI call, lat/lon only)
  // Step 2: haversine against database — closest entry wins, no exceptions
  // Step 3: AI generates waypoints for the winner only
  if (isLocationSearch) {
    const location = query.replace('LOCATION_SEARCH:', '').trim();

    // Step 1 — geocode only, no film opinion
    let estLat = 51.5, estLon = -0.1; // default London if geocode fails
    try {
      const geoText = await callAI(
        apiKey,
        `What are the GPS coordinates of "${location}"? Return ONLY this JSON and nothing else: { "lat": number, "lon": number }`,
        64
      );
      const geoJson = JSON.parse(geoText);
      if (typeof geoJson.lat === 'number' && typeof geoJson.lon === 'number') {
        estLat = geoJson.lat;
        estLon = geoJson.lon;
      }
    } catch(e) {
      console.log('Geocode failed, defaulting to London:', e.message);
    }

    // Step 2 — pure maths picks the film, AI has no say
    const chosen = FILMING_LOCATIONS
      .map(loc => ({ ...loc, distance: haversine(estLat, estLon, loc.lat, loc.lon) }))
      .sort((a, b) => a.distance - b.distance)[0];

    const filmName = `${chosen.film} (${chosen.year})`;
    const distKm = Math.round(chosen.distance);
    const banner = `Nearest iconic route to ${location}: ${filmName} — filmed in ${chosen.city}`;

    console.log(`Location search: "${location}" → geocoded ${estLat},${estLon} → nearest: ${chosen.film} in ${chosen.city} (${distKm}km)`);

    // Step 3 — AI generates waypoints for the mathematically chosen film only
    try {
      const routeText = await callAI(apiKey, `You are a route planning assistant for "Run With The Stars".

Generate a running route for this specific film:
Film: ${filmName}
Filming location: ${chosen.city}
Coordinates: ${chosen.lat}, ${chosen.lon}
Scene: ${chosen.hint}

Return ONLY valid JSON:
{
  "name": "Short punchy name with personality",
  "source": "${filmName}",
  "loc": "${chosen.city}",
  "dist": "realistic distance e.g. 5.1KM",
  "elev": "realistic elevation e.g. 42M",
  "time": "estimated time e.g. 28 MIN",
  "lat": ${chosen.lat},
  "lon": ${chosen.lon},
  "note": "One or two sentences about what makes this run special",
  "waypoints": [
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon, "cls": "start" },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon, "cls": "end" }
  ]
}`, 1024);

      const route = JSON.parse(routeText);
      if (route.error) return res.status(200).json({ route: fallbackRoute(chosen), banner });
      return res.status(200).json({ route, banner });
    } catch(e) {
      console.log('Route generation failed, using fallback:', e.message);
      return res.status(200).json({ route: fallbackRoute(chosen), banner });
    }

  // ── GPS NEAREST: coordinates from device location button ──
  } else if (isLocationQuery) {
    const userLat = parseFloat(coordMatch[1]);
    const userLon = parseFloat(coordMatch[2]);
    const excludeMatch = query.match(/Do NOT suggest any of these already shown: (.+)/);
    const excludeList = excludeMatch ? excludeMatch[1].split(', ') : [];

    const chosen = FILMING_LOCATIONS
      .filter(loc => !excludeList.some(ex => loc.film.toLowerCase().includes(ex.toLowerCase())))
      .map(loc => ({ ...loc, distance: haversine(userLat, userLon, loc.lat, loc.lon) }))
      .sort((a, b) => a.distance - b.distance)[0];

    const distKm = Math.round(chosen.distance);
    console.log(`GPS search: ${userLat},${userLon} → nearest: ${chosen.film} in ${chosen.city} (${distKm}km)`);

    try {
      const routeText = await callAI(apiKey, `You are a route planning assistant for "Run With The Stars".

Generate a running route for this specific film:
Film: ${chosen.film} (${chosen.year})
Filming location: ${chosen.city}
Coordinates: ${chosen.lat}, ${chosen.lon}
Scene: ${chosen.hint}
Distance from user: ~${distKm}km

Return ONLY valid JSON:
{
  "name": "Short punchy name with personality",
  "source": "${chosen.film} (${chosen.year})",
  "loc": "${chosen.city}",
  "dist": "realistic distance e.g. 5.1KM",
  "elev": "realistic elevation e.g. 42M",
  "time": "estimated time e.g. 28 MIN",
  "lat": ${chosen.lat},
  "lon": ${chosen.lon},
  "note": "One or two sentences about what makes this run special",
  "waypoints": [
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon, "cls": "start" },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon },
    { "n": "Real place name", "d": "Brief description", "lat": real_lat, "lon": real_lon, "cls": "end" }
  ]
}`, 1024);

      const route = JSON.parse(routeText);
      if (route.error) return res.status(200).json({ route: fallbackRoute(chosen) });
      return res.status(200).json({ route });
    } catch(e) {
      return res.status(200).json({ route: fallbackRoute(chosen) });
    }

  // ── TITLE SEARCH ──────────────────────────────────────────
  } else {
    try {
      const routeText = await callAI(apiKey, `You are a route planning assistant for "Run With The Stars".

The user searched for: "${query}"

Find the most iconic running scene from this film, TV show, or music video. Use accurate real-world GPS coordinates for where it was ACTUALLY FILMED.

Return ONLY valid JSON:
{
  "name": "Short punchy name with personality",
  "source": "Film/Show/Artist (year)",
  "loc": "City, Country",
  "dist": "e.g. 5.1KM",
  "elev": "e.g. 42M",
  "time": "e.g. 28 MIN",
  "lat": central_latitude,
  "lon": central_longitude,
  "note": "One or two sentences about what makes this run special",
  "waypoints": [
    { "n": "Place name", "d": "Description", "lat": lat, "lon": lon, "cls": "start" },
    { "n": "Place name", "d": "Description", "lat": lat, "lon": lon },
    { "n": "Place name", "d": "Description", "lat": lat, "lon": lon },
    { "n": "Place name", "d": "Description", "lat": lat, "lon": lon },
    { "n": "Place name", "d": "Description", "lat": lat, "lon": lon, "cls": "end" }
  ]
}

If no genuine running scene exists for this title: { "error": "No iconic running scene found for this title. Try another film, show or music video." }`, 1024);

      const route = JSON.parse(routeText);
      if (route.error) return res.status(404).json({ error: route.error });
      return res.status(200).json({ route });
    } catch(e) {
      return res.status(500).json({ error: 'Failed to generate route', detail: e.message });
    }
  }
}
