export interface WeatherData {
  base: string;
  name: string;
  wind: WindInfo;
  main: TempInfo;
}

export interface TempInfo {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WindInfo {
	deg: number;
	gust: number;
	speed: number;
}
