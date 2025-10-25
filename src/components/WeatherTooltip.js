import React, { useState, useEffect } from 'react';
import weatherService from '../utils/weatherService';

const WeatherTooltip = ({ isVisible, position }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isVisible && !weatherData) {
      setLoading(true);
      setError(null);

      weatherService
        .getWeatherData()
        .then(data => {
          setWeatherData(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [isVisible, weatherData]);

  if (!isVisible) return null;

  return (
    <div
      className='weather-tooltip'
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        zIndex: 1000,
      }}
    >
      <div className='weather-tooltip-content'>
        {loading && (
          <div className='weather-loading'>
            <div className='weather-spinner'></div>
            <span>Loading weather...</span>
          </div>
        )}

        {error && (
          <div className='weather-error'>
            <span>🌤️</span>
            <div>
              <div className='weather-main'>Weather unavailable</div>
              <div className='weather-details'>Try again later</div>
            </div>
          </div>
        )}

        {weatherData && !loading && !error && (
          <div className='weather-success'>
            <span className='weather-icon'>{weatherData.icon}</span>
            <div className='weather-info'>
              <div className='weather-main'>{weatherData.temperature}°C</div>
              <div className='weather-condition'>{weatherData.condition}</div>
              <div className='weather-details'>
                Feels like {weatherData.feelsLike}°C • {weatherData.humidity}%
                humidity
              </div>
            </div>
          </div>
        )}

        <div className='weather-source'>
          <small>
            {weatherData
              ? `${weatherData.source} • Updated ${weatherData.lastUpdated}`
              : 'Live weather data'}
          </small>
        </div>
      </div>
    </div>
  );
};

export default WeatherTooltip;
