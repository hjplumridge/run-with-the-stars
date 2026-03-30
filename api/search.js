const FILMING_LOCATIONS = [
  { film: "Harry Potter series", year: "2001-2011", city: "Oxford, UK", lat: 51.7519, lon: -1.2578, hint: "Christ Church College and the Bodleian Library were used as Hogwarts. Run the route between the Bodleian, Radcliffe Camera, Christ Church and the Covered Market." },
  { film: "Inspector Morse / Endeavour", year: "1987-2023", city: "Oxford, UK", lat: 51.7520, lon: -1.2550, hint: "Filmed extensively on location in Oxford city centre — Radcliffe Square, the High Street, Broad Street and the covered market." },
  { film: "My Oxford Year", year: "2025", city: "Oxford, UK", lat: 51.7548, lon: -1.2544, hint: "Netflix film shot on location around Oxford University — Radcliffe Camera, Christ Church Meadow, and the river." },
  { film: "Chariots of Fire", year: "1981", city: "St Andrews, Scotland", lat: 56.3398, lon: -2.7967, hint: "The iconic opening beach run was filmed on West Sands beach, St Andrews, Scotland." },
  { film: "Trainspotting", year: "1996", city: "Edinburgh, Scotland", lat: 55.9524, lon: -3.1883, hint: "The opening chase down Princes Street filmed on location in Edinburgh city centre." },
  { film: "T2 Trainspotting", year: "2017", city: "Edinburgh, Scotland", lat: 55.9500, lon: -3.1900, hint: "Renton and Simon's run through Edinburgh filmed on location — Arthur's Seat and the Old Town." },
  { film: "28 Days Later", year: "2002", city: "London, UK", lat: 51.5007, lon: -0.1246, hint: "Jim's run through an eerily empty London — Westminster Bridge, Piccadilly, and the City at dawn." },
  { film: "Notting Hill", year: "1999", city: "London, UK", lat: 51.5152, lon: -0.2016, hint: "The famous run through the seasons filmed in and around Portobello Road and St Luke's Mews." },
  { film: "Billy Elliot", year: "2000", city: "County Durham, UK", lat: 54.7753, lon: -1.5849, hint: "Filmed on location in Easington Colliery. Billy runs through the real pit village streets." },
  { film: "The Full Monty", year: "1997", city: "Sheffield, UK", lat: 53.3811, lon: -1.4701, hint: "The lads' training run filmed entirely on location through real Sheffield streets." },
  { film: "Lock Stock and Two Smoking Barrels", year: "1998", city: "London, UK", lat: 51.5200, lon: -0.0800, hint: "Filmed on location in East London — Bethnal Green and Hackney streets." },
  { film: "Snatch", year: "2000", city: "London, UK", lat: 51.5137, lon: -0.1337, hint: "Guy Ritchie's frantic London chase sequences filmed across central and East London." },
  { film: "Run Fatboy Run", year: "2007", city: "London, UK", lat: 51.4995, lon: -0.1245, hint: "Dennis's marathon run through London filmed on location — the Thames Embankment and Westminster." },
  { film: "Skyfall", year: "2012", city: "London, UK", lat: 51.5085, lon: -0.1257, hint: "Bond's rooftop chase through London filmed on location — Whitehall and the Embankment." },
  { film: "Eddie the Eagle", year: "2015", city: "Cheltenham, UK", lat: 51.8994, lon: -2.0783, hint: "Eddie's early training runs filmed on location in and around Cheltenham." },
  { film: "This Is England", year: "2006", city: "Nottingham, UK", lat: 52.9548, lon: -1.1581, hint: "Filmed on location in Nottingham's Radford area." },
  { film: "Kes", year: "1969", city: "Barnsley, UK", lat: 53.5526, lon: -1.4797, hint: "Billy Casper's run across the South Yorkshire fields filmed on location around Barnsley." },
  { film: "Atonement beach scene", year: "2007", city: "Redcar, UK", lat: 54.6175, lon: -1.0644, hint: "The Dunkirk beach tracking shot was actually filmed at Redcar beach in North Yorkshire." },
  { film: "Braveheart", year: "1995", city: "Glen Nevis, Scotland", lat: 56.7959, lon: -5.0037, hint: "Wallace's run through the Highland landscape was filmed on location in Glen Nevis near Fort William." },
  { film: "The Commitments", year: "1991", city: "Dublin, Ireland", lat: 53.3498, lon: -6.2603, hint: "The lads' run through Dublin's northside was filmed on location in Clontarf and the city centre." },
  { film: "Calvary", year: "2014", city: "County Sligo, Ireland", lat: 54.2697, lon: -8.4694, hint: "Father James's run along the Atlantic coast filmed on location on Enniscrone beach, County Sligo." },
  { film: "Run Lola Run", year: "1998", city: "Berlin, Germany", lat: 52.5200, lon: 13.4050, hint: "Lola's three desperate 20-minute runs filmed on location across Berlin — Friedrichshain, Mitte and Kreuzberg." },
  { film: "Goodbye Lenin", year: "2003", city: "Berlin, Germany", lat: 52.5170, lon: 13.4020, hint: "Alex's frantic run through East Berlin filmed on location in Prenzlauer Berg and Alexanderplatz." },
  { film: "The Bourne Identity", year: "2002", city: "Paris, France", lat: 48.8566, lon: 2.3522, hint: "Jason Bourne's rooftop chase filmed on location in central Paris and Montmartre." },
  { film: "Amelie", year: "2001", city: "Paris, France", lat: 48.8842, lon: 2.3470, hint: "Amelie's run through Montmartre filmed entirely on location in the 18th arrondissement." },
  { film: "Les Miserables", year: "2019", city: "Clichy-sous-Bois, France", lat: 48.9078, lon: 2.5533, hint: "The banlieue chase scenes filmed on location in the real Paris suburbs." },
  { film: "The Tourist", year: "2010", city: "Venice, Italy", lat: 45.4408, lon: 12.3155, hint: "The rooftop chase across Venice filmed on location — real canals, bridges and narrow calli." },
  { film: "Roman Holiday", year: "1953", city: "Rome, Italy", lat: 41.9028, lon: 12.4964, hint: "Audrey Hepburn's run through Rome filmed entirely on location — the Trevi Fountain, Spanish Steps." },
  { film: "Call Me by Your Name", year: "2017", city: "Lombardy, Italy", lat: 45.5231, lon: 10.2095, hint: "Elio's summer runs filmed on location in Crema and the surrounding Lombardy countryside." },
  { film: "Harry Styles - Golden", year: "2020", city: "Amalfi Coast, Italy", lat: 40.6333, lon: 14.6333, hint: "Harry Styles runs along the Amalfi Coast — filmed on location between Maiori and Minori." },
  { film: "The Third Man", year: "1949", city: "Vienna, Austria", lat: 48.1900, lon: 16.3600, hint: "The famous sewer chase filmed in Vienna's real underground sewer network." },
  { film: "Before Sunrise", year: "1995", city: "Vienna, Austria", lat: 48.2082, lon: 16.3738, hint: "Jesse and Celine's walks and runs through Vienna filmed entirely on location in the city centre." },
  { film: "The Sound of Music", year: "1965", city: "Salzburg, Austria", lat: 47.8095, lon: 13.0550, hint: "Maria's run through the Alpine meadows filmed on location above Salzburg at Werfen." },
  { film: "Mamma Mia", year: "2008", city: "Skopelos, Greece", lat: 39.1200, lon: 23.7200, hint: "Sophie's run down to the harbour filmed on location on the Greek island of Skopelos." },
  { film: "Vicky Cristina Barcelona", year: "2008", city: "Barcelona, Spain", lat: 41.3851, lon: 2.1734, hint: "Filmed on location across Barcelona — the Gothic Quarter and Barceloneta beach." },
  { film: "Rocky", year: "1976", city: "Philadelphia, USA", lat: 39.9656, lon: -75.1810, hint: "Rocky's training run up the Art Museum steps filmed entirely on location in Philadelphia." },
  { film: "Silver Linings Playbook", year: "2012", city: "Philadelphia, USA", lat: 40.0379, lon: -75.2463, hint: "Pat's obsessive training runs through suburban Philadelphia filmed on location in Upper Darby." },
  { film: "Forrest Gump", year: "1994", city: "Savannah, USA", lat: 32.0758, lon: -81.0932, hint: "The bench scenes in Chippewa Square, Savannah. The cross-country run used multiple US locations." },
  { film: "Friends", year: "1994-2004", city: "New York, USA", lat: 40.7812, lon: -73.9665, hint: "Phoebe's iconic freeform run with Rachel filmed on location in Central Park, New York." },
  { film: "Marathon Man", year: "1976", city: "New York, USA", lat: 40.7829, lon: -73.9654, hint: "Dustin Hoffman's training runs filmed on location in Central Park, New York." },
  { film: "Vanilla Sky", year: "2001", city: "New York, USA", lat: 40.7580, lon: -73.9855, hint: "Tom Cruise runs alone through a deserted Times Square — filmed on location at dawn." },
  { film: "The French Connection", year: "1971", city: "New York, USA", lat: 40.6782, lon: -73.9442, hint: "Popeye Doyle's chase through the Brooklyn streets filmed on location." },
  { film: "Ferris Buellers Day Off", year: "1986", city: "Chicago, USA", lat: 41.8827, lon: -87.6233, hint: "Ferris's frantic run home through Chicago filmed on location — the Art Institute steps and Michigan Avenue." },
  { film: "La La Land", year: "2016", city: "Los Angeles, USA", lat: 34.1184, lon: -118.3004, hint: "Mia and Sebastian's run and dance at Griffith Observatory filmed on location in LA." },
  { film: "Terminator 2", year: "1991", city: "Los Angeles, USA", lat: 34.2244, lon: -118.4134, hint: "The flood control channel motorcycle chase filmed on location in Sun Valley, LA." },
  { film: "Forrest Gump Monument Valley", year: "1994", city: "Monument Valley, USA", lat: 36.9837, lon: -110.0983, hint: "The most famous cross-country running scene — Forrest stops running here in Monument Valley." },
  { film: "The Truman Show", year: "1998", city: "Seaside, Florida, USA", lat: 30.3266, lon: -86.1431, hint: "Truman's frantic run to the edge of his world filmed on location in Seaside, Florida." },
  { film: "Napoleon Dynamite", year: "2004", city: "Preston, Idaho, USA", lat: 42.0963, lon: -111.8763, hint: "Napoleon's run home filmed on location in Preston, Idaho." },
  { film: "Scott Pilgrim vs the World", year: "2010", city: "Toronto, Canada", lat: 43.6532, lon: -79.3832, hint: "Scott's runs through Toronto filmed on location — Bloor Street, Spadina and Kensington Market." },
  { film: "Atanarjuat The Fast Runner", year: "2001", city: "Nunavut, Canada", lat: 63.7467, lon: -68.5170, hint: "The extraordinary barefoot sprint across the Arctic ice filmed on location near Igloolik, Nunavut." },
  { film: "City of God", year: "2002", city: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729, hint: "The chase through the Cidade de Deus favela filmed on location in the real Rio favela." },
  { film: "Roma", year: "2018", city: "Mexico City, Mexico", lat: 19.4162, lon: -99.1648, hint: "Alfonso Cuaron's film shot entirely on location in the Colonia Roma neighbourhood of Mexico City." },
  { film: "Amores Perros", year: "2000", city: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332, hint: "The desperate street run and crash filmed on location in central Mexico City." },
  { film: "Elite Squad", year: "2007", city: "Rio de Janeiro, Brazil", lat: -22.8700, lon: -43.2500, hint: "BOPE's run through the favela filmed on location in Morro da Providencia, Rio de Janeiro." },
  { film: "Lost in Translation", year: "2003", city: "Tokyo, Japan", lat: 35.6762, lon: 139.6503, hint: "Bob and Charlotte's nighttime run through Shibuya filmed on location in Tokyo." },
  { film: "Oldboy", year: "2003", city: "Seoul, South Korea", lat: 37.5665, lon: 126.9780, hint: "Oh Dae-su's corridor fight and run filmed on location in Seoul." },
  { film: "Parasite", year: "2019", city: "Seoul, South Korea", lat: 37.5260, lon: 126.9900, hint: "The Ki-woo family's desperate run through flooding streets filmed on location in Seoul." },
  { film: "Train to Busan", year: "2016", city: "Busan, South Korea", lat: 35.1796, lon: 129.0756, hint: "The frantic run through Busan station filmed on location in South Korea." },
  { film: "Slumdog Millionaire", year: "2008", city: "Mumbai, India", lat: 19.0760, lon: 72.8777, hint: "The opening chase through the Dharavi slum filmed on location in Mumbai." },
  { film: "Crouching Tiger Hidden Dragon", year: "2000", city: "Beijing, China", lat: 40.4319, lon: 116.5704, hint: "Filmed on location at the Forbidden City and across China — rooftop chase through Peking." },
  { film: "Infernal Affairs", year: "2002", city: "Hong Kong", lat: 22.3193, lon: 114.1694, hint: "The rooftop chase filmed on location in Hong Kong's Central district." },
  { film: "Chungking Express", year: "1994", city: "Hong Kong", lat: 22.3180, lon: 114.1680, hint: "Cop 223's run through Chungking Mansions and Lan Kwai Fong filmed on location." },
  { film: "Black Hawk Down", year: "2001", city: "Rabat, Morocco", lat: 33.9716, lon: -6.8498, hint: "The Mogadishu street battle filmed on location in Sale, Morocco." },
  { film: "Lawrence of Arabia", year: "1962", city: "Wadi Rum, Jordan", lat: 29.5727, lon: 35.4204, hint: "Lawrence's run through the desert filmed on location in Wadi Rum, Jordan." },
  { film: "Mad Max Fury Road", year: "2015", city: "Namib Desert, Namibia", lat: -22.9576, lon: 18.4904, hint: "Filmed in the Namib Desert — one of the most remote filming locations in cinema history." },
  { film: "District 9", year: "2009", city: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473, hint: "Wikus's run through the Soweto township filmed on location in Johannesburg." },
  { film: "Gallipoli", year: "1981", city: "Perth, Australia", lat: -31.9505, lon: 115.8605, hint: "Archy's sprint across the Western Australian outback filmed on location near Fremantle." },
  { film: "The Piano", year: "1993", city: "Karekare, New Zealand", lat: -37.0100, lon: 174.4700, hint: "Ada's run across Karekare beach filmed on location on the wild west coast of New Zealand." },
  { film: "Lord of the Rings", year: "2001-2003", city: "Matamata, New Zealand", lat: -37.8700, lon: 175.7600, hint: "The Shire scenes filmed on location in Matamata. Frodo and Sam's run across the fields." },
  { film: "Hunt for the Wilderpeople", year: "2016", city: "Auckland, New Zealand", lat: -36.8485, lon: 174.7633, hint: "Ricky and Hec's run through the New Zealand bush filmed on location in the Waitakere Ranges." },
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
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-sonnet-4-5', max_tokens: maxTokens, messages: [{ role: 'user', content }] }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error('API call failed');
  return data.content[0].text.trim().replace(/^```json\s*/i,'').replace(/```\s*$/i,'').trim();
}

function fallbackRoute(chosen, banner) {
  return {
    name: chosen.film,
    source: chosen.film + ' (' + chosen.year + ')',
    loc: chosen.city,
    dist: '5.0KM',
    elev: '35M',
    time: '30 MIN',
    lat: chosen.lat,
    lon: chosen.lon,
    note: chosen.hint,
    waypoints: []
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

  // ── LOCATION SEARCH (user typed a place name) ──
  if (isLocationSearch) {
    const location = query.replace('LOCATION_SEARCH:', '').trim();

    // Step 1: Ask AI which film was filmed closest to this location
    let nearestFilm = null;
    let nearestCity = null;
    try {
      const step1Text = await callAI(apiKey,
        `What is the most iconic running scene from any film, TV show or music video that was filmed closest to "${location}"? The filming location does not have to be in ${location} itself — just as geographically close as possible. Always give your single best answer. Return ONLY valid JSON: { "film": "Film name (year)", "city": "City where it was actually filmed" }`,
        256
      );
      const step1Json = JSON.parse(step1Text);
      nearestFilm = step1Json.film;
      nearestCity = step1Json.city;
    } catch(e) {
      console.log('Step 1 failed:', e.message);
    }

    // Step 2: Match to database by city name, or estimate coords and use haversine
    let chosen = null;
    if (nearestCity) {
      const cityLower = nearestCity.toLowerCase();
      chosen = FILMING_LOCATIONS.find(loc =>
        loc.city.toLowerCase().includes(cityLower.split(',')[0].trim()) ||
        cityLower.includes(loc.city.toLowerCase().split(',')[0].trim())
      ) || null;
    }

    if (!chosen) {
      let estLat = 51.5, estLon = -0.1;
      try {
        const geoText = await callAI(apiKey,
          `What are the approximate GPS coordinates of "${location}"? Return ONLY valid JSON: { "lat": number, "lon": number }`,
          64
        );
        const geoJson = JSON.parse(geoText);
        estLat = geoJson.lat;
        estLon = geoJson.lon;
      } catch(e) { console.log('Geocode failed:', e.message); }

      chosen = FILMING_LOCATIONS
        .map(loc => ({ ...loc, distance: haversine(estLat, estLon, loc.lat, loc.lon) }))
        .sort((a, b) => a.distance - b.distance)[0];
    }

    const filmName = nearestFilm || `${chosen.film} (${chosen.year})`;
    const banner = `Nearest iconic route to ${location}: ${filmName} — filmed in ${chosen.city}`;

    // Step 3: Generate full route — always fall back to database entry if anything fails
    try {
      const routeText = await callAI(apiKey, `You are a route planning assistant for "Run With The Stars".

Generate a running route for this specific film scene:
Film: ${filmName}
Location: ${chosen.city}
Centre coordinates: ${chosen.lat}, ${chosen.lon}
Scene info: ${chosen.hint}

Create 5 real waypoints in ${chosen.city} that trace a route through the actual filming locations. Use accurate GPS coordinates for real streets and landmarks.

Return ONLY valid JSON:
{
  "name": "A short characterful name with personality",
  "source": "${filmName}",
  "loc": "${chosen.city}",
  "dist": "realistic distance e.g. 5.1KM",
  "elev": "realistic elevation e.g. 42M",
  "time": "estimated time e.g. 28 MIN",
  "lat": ${chosen.lat},
  "lon": ${chosen.lon},
  "note": "One or two sentences about what makes this run special",
  "waypoints": [
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude, "cls": "start" },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude, "cls": "end" }
  ]
}`, 1024);

      const route = JSON.parse(routeText);
      if (route.error) {
        return res.status(200).json({ route: fallbackRoute(chosen, banner), banner });
      }
      return res.status(200).json({ route, banner });
    } catch(e) {
      return res.status(200).json({ route: fallbackRoute(chosen, banner), banner });
    }

  // ── NEAREST ROUTE (GPS coordinates from button) ──
  } else if (isLocationQuery) {
    const userLat = parseFloat(coordMatch[1]);
    const userLon = parseFloat(coordMatch[2]);
    const excludeMatch = query.match(/Do NOT suggest any of these already shown: (.+)/);
    const excludeList = excludeMatch ? excludeMatch[1].split(', ') : [];

    const candidates = FILMING_LOCATIONS
      .filter(loc => !excludeList.some(ex => loc.film.toLowerCase().includes(ex.toLowerCase())))
      .map(loc => ({ ...loc, distance: haversine(userLat, userLon, loc.lat, loc.lon) }))
      .sort((a, b) => a.distance - b.distance);

    const nearest = candidates[0];
    const distanceKm = Math.round(nearest.distance);

    try {
      const routeText = await callAI(apiKey, `You are a route planning assistant for "Run With The Stars".

Generate a running route for this specific film scene:
Film: ${nearest.film} (${nearest.year})
Location: ${nearest.city}
Centre coordinates: ${nearest.lat}, ${nearest.lon}
Scene info: ${nearest.hint}
Distance from user: approximately ${distanceKm}km

Create 5 real waypoints in ${nearest.city} that trace a route through the actual filming locations.

Return ONLY valid JSON:
{
  "name": "A short characterful name with personality",
  "source": "${nearest.film} (${nearest.year})",
  "loc": "${nearest.city}",
  "dist": "realistic distance e.g. 5.1KM",
  "elev": "realistic elevation e.g. 42M",
  "time": "estimated time e.g. 28 MIN",
  "lat": ${nearest.lat},
  "lon": ${nearest.lon},
  "note": "One or two sentences about what makes this run special",
  "waypoints": [
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude, "cls": "start" },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude, "cls": "end" }
  ]
}`, 1024);

      const route = JSON.parse(routeText);
      if (route.error) return res.status(200).json({ route: fallbackRoute(nearest), banner: null });
      return res.status(200).json({ route });
    } catch(e) {
      return res.status(200).json({ route: fallbackRoute(nearest), banner: null });
    }

  // ── TITLE SEARCH ──
  } else {
    try {
      const routeText = await callAI(apiKey, `You are a route planning assistant for "Run With The Stars".

The user searched for: "${query}"

Find the most iconic running scene from this film, TV show, or music video. Return waypoints based on where it was ACTUALLY FILMED. Use accurate real-world GPS coordinates.

Return ONLY valid JSON:
{
  "name": "Short characterful name with personality",
  "source": "Film/Show/Artist name and year",
  "loc": "City, Country",
  "dist": "distance e.g. 5.1KM",
  "elev": "elevation e.g. 42M",
  "time": "run time e.g. 28 MIN",
  "lat": central latitude as number,
  "lon": central longitude as number,
  "note": "One or two sentences about what makes this run special",
  "waypoints": [
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude, "cls": "start" },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude, "cls": "end" }
  ]
}

If no genuine running scene exists: { "error": "No iconic running scene found for this title. Try another film, show or music video." }`, 1024);

      const route = JSON.parse(routeText);
      if (route.error) return res.status(404).json({ error: route.error });
      return res.status(200).json({ route });
    } catch(e) {
      return res.status(500).json({ error: 'Failed to generate route', detail: e.message });
    }
  }
}
