export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'No query provided' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const isLocationQuery = query.toLowerCase().includes('filmed on location') || query.toLowerCase().includes('nearest major city');

  const prompt = isLocationQuery ? `You are a route planning assistant for "Run With The Stars" — a site that finds iconic running scenes from films, TV shows and music videos and turns them into real walkable routes.

The user is near this location: "${query}"

Your job: find the most iconic running scene from any film, TV show or music video that was ACTUALLY FILMED closest to that location. 

Think systematically:
- What country is this location in?
- What major cities are nearest?
- What famous films or TV shows have running scenes that were physically shot in that country or those cities?
- Pick the one whose filming location is geographically closest to the user

You must always return a result. Never return an error for location queries. If nothing was filmed in the exact city, pick the nearest filming location in the same country, then the same continent.

Every waypoint must be a real place where the film crew actually shot the scene — not just where the story was set. Use accurate GPS coordinates.

Return ONLY a valid JSON object, no other text:

{
  "name": "Short characterful name with personality",
  "source": "Film/Show/Artist name and year",
  "loc": "City, Country",
  "dist": "distance in KM e.g. '5.1KM'",
  "elev": "elevation gain e.g. '42M'",
  "time": "estimated run time e.g. '28 MIN'",
  "lat": central latitude as number,
  "lon": central longitude as number,
  "note": "One or two sentences — what makes this run special",
  "waypoints": [
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude, "cls": "start" },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude },
    { "n": "Real location name", "d": "Brief description", "lat": real latitude, "lon": real longitude, "cls": "end" }
  ]
}` : `You are a route planning assistant for "Run With The Stars" — a site that finds iconic running scenes from films, TV shows and music videos and turns them into real walkable routes.

The user searched for: "${query}"

Find the most iconic running scene from this film, TV show, or music video. Return waypoints based on where it was ACTUALLY FILMED — not just where it was set. Use accurate real-world GPS coordinates.

Return ONLY a valid JSON object, no other text:

{
  "name": "Short characterful name with personality (e.g. 'Phoebe Runs Weird', 'Run Forest Run!')",
  "source": "Film/Show/Artist name and year",
  "loc": "City, Country",
  "dist": "distance in KM e.g. '5.1KM'",
  "elev": "elevation gain e.g. '42M'",
  "time": "estimated run time e.g. '28 MIN'",
  "lat": central latitude as number,
  "lon": central longitude as number,
  "note": "One or two sentences of character — what makes this run special",
  "waypoints": [
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude, "cls": "start" },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude },
    { "n": "Location name", "d": "Brief description", "lat": latitude, "lon": longitude, "cls": "end" }
  ]
}

If you cannot identify a genuine running scene for this query, return: { "error": "No iconic running scene found for this title. Try another film, show or music video." }`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: 'API request failed', detail: data });
    }

    const text = data.content[0].text.trim();
    const clean = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();

    let route;
    try {
      route = JSON.parse(clean);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to parse route data', raw: clean });
    }

    if (route.error) {
      return res.status(404).json({ error: route.error });
    }

    return res.status(200).json({ route });

  } catch (err) {
    return res.status(500).json({ error: 'Server error', detail: err.message });
  }
}
