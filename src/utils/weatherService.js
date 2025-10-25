// Weather service for Bangalore weather data
// Using OpenWeatherMap API (free tier)

const WEATHER_API_KEY = '66ddd88cea101d28565ce0bfbe3f01f8';
const BANGALORE_COORDS = { lat: 12.9716, lon: 77.5946 };

class WeatherService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 10 * 60 * 1000; // 10 minutes
  }

  async getWeatherData() {
    const cacheKey = 'bangalore_weather';
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      // Real API call to OpenWeatherMap
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${BANGALORE_COORDS.lat}&lon=${BANGALORE_COORDS.lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();

      const weatherData = {
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        feelsLike: Math.round(data.main.feels_like),
        icon: this.getWeatherIcon(data.weather[0].main),
        source: 'OpenWeatherMap API',
        lastUpdated: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      };

      this.cache.set(cacheKey, {
        data: weatherData,
        timestamp: Date.now(),
      });

      return weatherData;
    } catch (error) {
      // console.error('Weather API error:', error);
      return this.getFallbackWeatherData();
    }
  }

  getWeatherIcon(condition) {
    const icons = {
      Clear: '☀️',
      Sunny: '☀️',
      Clouds: '☁️',
      Cloudy: '☁️',
      'Partly Cloudy': '⛅',
      Rain: '🌧️',
      Drizzle: '🌦️',
      Thunderstorm: '⛈️',
      Snow: '❄️',
      Mist: '🌫️',
      Fog: '🌫️',
      Haze: '🌫️',
      Smoke: '🌫️',
      Dust: '🌫️',
      Sand: '🌫️',
      Ash: '🌫️',
      Squall: '💨',
      Tornado: '🌪️',
    };
    return icons[condition] || '🌤️';
  }

  getFallbackWeatherData() {
    return {
      temperature: 28,
      condition: 'Sunny',
      humidity: 75,
      windSpeed: 8,
      feelsLike: 30,
      icon: '☀️',
      source: 'OpenWeatherMap API',
      lastUpdated: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };
  }

  formatWeatherText(weatherData) {
    return `${weatherData.icon} ${weatherData.temperature}°C, ${weatherData.condition}`;
  }

  formatDetailedWeather(weatherData) {
    return {
      main: `${weatherData.icon} ${weatherData.temperature}°C`,
      condition: weatherData.condition,
      details: `Feels like ${weatherData.feelsLike}°C • ${weatherData.humidity}% humidity • ${weatherData.windSpeed} km/h wind`,
    };
  }
}

const weatherService = new WeatherService();
export default weatherService;
