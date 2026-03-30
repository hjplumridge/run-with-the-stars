export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'No query provided' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const prompt = `You are a route planning assistant for a website called "Run With The Stars". 
The site finds iconic running scenes from films, TV shows and music videos, and turns them into real walkable/runnable routes.

The user has searched for: "${query}"

Find the most iconic running scene associated with this film, TV show, or music video.
Return ONLY a valid JSON object with no other text, markdown, or explanation. The JSON must follow this exact structure:

{
  "name": "A short characterful name for this run (e.g. 'Phoebe Runs Weird', 'Run Forest Run!', 'Golden Hour') — with personality, not just the film title",
  "source": "Film/Show/Artist name and year (e.g. 'Rocky (1976)')",
  "loc": "City, Country",
  "dist": "distance in KM to one decimal place (e.g. '5.1KM')",
  "elev": "approximate elevation gain in metres (e.g. '42M')",
  "time": "estimated run time (e.g. '28 MIN')",
  "lat": central latitude as a number,
  "lon": central longitude as a number,
  "note": "One or two sentences of character — what makes this run special, a tip, a cultural reference",
  "waypoints": [
    { "n": "Location name", "d": "Brief description", "lat": latitude as number, "lon": longitude as number, "cls": "start" },
    { "n": "Location name", "d": "Brief description", "lat": latitude as number, "lon": longitude as number },
    { "n": "Location name", "d": "Brief description", "lat": latitude as number, "lon": longitude as number },
    { "n": "Location name", "d": "Brief description", "lat": latitude as number, "lon": longitude as number },
    { "n": "Location name", "d": "Brief description", "lat": latitude as number, "lon": longitude as number, "cls": "end" }
  ]
}

Rules:
- waypoints must be real, accurate GPS coordinates for the actual filming locations
- there must be exactly 5 waypoints
- the first waypoint must have "cls": "start" and the last must have "cls": "end"
- if you cannot identify a genuine running scene for this query, return: { "error": "No iconic running scene found for this title. Try another film, show or music video." }
- return only the JSON object, nothing else`;

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

    // Strip any accidental markdown fences
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
