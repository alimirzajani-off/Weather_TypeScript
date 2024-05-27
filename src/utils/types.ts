export interface WeathersData {
  city: {
    name: string;
  };
  list: {
    dt: number; // زمان پیش‌بینی (به صورت timestamp)
    temp: {
      min: number; // دمای حداقل
      max: number; // دمای حداکثر
    };
    weather: {
      icon: string; // آیکون هوا
      description: string; // توضیحات هوا
    }[];
    wind: {
      speed: number; // سرعت باد
    };
    // سایر مشخصات مربوط به هوا
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
