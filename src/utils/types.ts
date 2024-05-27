export interface WeathersData {
  city: {
    name: string;
  };
  list: {
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }[];
}

export interface WeatherData {
  temp: {
    min: number;
    max: number;
  };
}

export interface WeatherResult {
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export interface Location {
  lat: number;
  lon: number;
}
