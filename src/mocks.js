const mockCurrentData = {
  coord: { lon: 35.5182, lat: 83.0976 },
  weather: [{ id: 600, main: "Snow", description: "light snow", icon: "13n" }],
  base: "stations",
  main: {
    temp: 259.29,
    feels_like: 252.29,
    temp_min: 259.29,
    temp_max: 259.29,
    pressure: 1003,
    humidity: 94,
    sea_level: 1003,
    grnd_level: 1003,
  },
  visibility: 1838,
  wind: { speed: 9.28, deg: 153, gust: 16.88 },
  snow: { "1h": 0.11 },
  clouds: { all: 100 },
  dt: 1672184090,
  sys: { sunrise: 0, sunset: 0 },
  timezone: 7200,
  id: 0,
  name: "",
  cod: 200,
};

const mockForecastData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1672196400,
      main: {
        temp: 259.7,
        feels_like: 252.7,
        temp_min: 259.7,
        temp_max: 260.53,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1001,
        humidity: 93,
        temp_kf: -0.83,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.22, deg: 139, gust: 17.03 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: "d" },
      dt_txt: "2022-12-28 03:00:00",
    },
    {
      dt: 1672207200,
      main: {
        temp: 261.23,
        feels_like: 254.23,
        temp_min: 261.23,
        temp_max: 262.2,
        pressure: 999,
        sea_level: 999,
        grnd_level: 997,
        humidity: 94,
        temp_kf: -0.97,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 11.18, deg: 128, gust: 20.15 },
      visibility: 142,
      pop: 0.92,
      snow: { "3h": 0.67 },
      sys: { pod: "d" },
      dt_txt: "2022-12-28 06:00:00",
    },
    {
      dt: 1672218000,
      main: {
        temp: 263.9,
        feels_like: 256.9,
        temp_min: 263.9,
        temp_max: 263.9,
        pressure: 993,
        sea_level: 993,
        grnd_level: 993,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [{ id: 601, main: "Snow", description: "snow", icon: "13d" }],
      clouds: { all: 100 },
      wind: { speed: 11.24, deg: 133, gust: 20.05 },
      visibility: 134,
      pop: 1,
      snow: { "3h": 1.79 },
      sys: { pod: "d" },
      dt_txt: "2022-12-28 09:00:00",
    },
    {
      dt: 1672228800,
      main: {
        temp: 269.8,
        feels_like: 262.8,
        temp_min: 269.8,
        temp_max: 269.8,
        pressure: 989,
        sea_level: 989,
        grnd_level: 989,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.14, deg: 154, gust: 18.05 },
      visibility: 138,
      pop: 1,
      snow: { "3h": 1.48 },
      sys: { pod: "d" },
      dt_txt: "2022-12-28 12:00:00",
    },
    {
      dt: 1672239600,
      main: {
        temp: 272.37,
        feels_like: 265.37,
        temp_min: 272.37,
        temp_max: 272.37,
        pressure: 988,
        sea_level: 988,
        grnd_level: 988,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.65, deg: 176, gust: 16.45 },
      visibility: 369,
      pop: 1,
      snow: { "3h": 0.74 },
      sys: { pod: "d" },
      dt_txt: "2022-12-28 15:00:00",
    },
    {
      dt: 1672250400,
      main: {
        temp: 271.46,
        feels_like: 264.46,
        temp_min: 271.46,
        temp_max: 271.46,
        pressure: 989,
        sea_level: 989,
        grnd_level: 989,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.56, deg: 180, gust: 17.56 },
      visibility: 2141,
      pop: 0.72,
      snow: { "3h": 0.32 },
      sys: { pod: "d" },
      dt_txt: "2022-12-28 18:00:00",
    },
    {
      dt: 1672261200,
      main: {
        temp: 269.33,
        feels_like: 262.33,
        temp_min: 269.33,
        temp_max: 269.33,
        pressure: 990,
        sea_level: 990,
        grnd_level: 990,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.5, deg: 175, gust: 16.27 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: "d" },
      dt_txt: "2022-12-28 21:00:00",
    },
    {
      dt: 1672272000,
      main: {
        temp: 270.7,
        feels_like: 263.7,
        temp_min: 270.7,
        temp_max: 270.7,
        pressure: 989,
        sea_level: 989,
        grnd_level: 989,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.24, deg: 167, gust: 16.41 },
      visibility: 1995,
      pop: 0.2,
      snow: { "3h": 0.13 },
      sys: { pod: "d" },
      dt_txt: "2022-12-29 00:00:00",
    },
    {
      dt: 1672282800,
      main: {
        temp: 270.34,
        feels_like: 263.34,
        temp_min: 270.34,
        temp_max: 270.34,
        pressure: 989,
        sea_level: 989,
        grnd_level: 989,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.67, deg: 168, gust: 15.94 },
      visibility: 1085,
      pop: 0.84,
      snow: { "3h": 0.35 },
      sys: { pod: "d" },
      dt_txt: "2022-12-29 03:00:00",
    },
    {
      dt: 1672293600,
      main: {
        temp: 270.17,
        feels_like: 263.17,
        temp_min: 270.17,
        temp_max: 270.17,
        pressure: 989,
        sea_level: 989,
        grnd_level: 989,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 8.82, deg: 177, gust: 13.53 },
      visibility: 5616,
      pop: 0.2,
      snow: { "3h": 0.21 },
      sys: { pod: "d" },
      dt_txt: "2022-12-29 06:00:00",
    },
    {
      dt: 1672304400,
      main: {
        temp: 264.63,
        feels_like: 257.9,
        temp_min: 264.63,
        temp_max: 264.63,
        pressure: 991,
        sea_level: 991,
        grnd_level: 991,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 93 },
      wind: { speed: 4.59, deg: 185, gust: 6.45 },
      visibility: 8656,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-29 09:00:00",
    },
    {
      dt: 1672315200,
      main: {
        temp: 260.46,
        feels_like: 253.73,
        temp_min: 260.46,
        temp_max: 260.46,
        pressure: 992,
        sea_level: 992,
        grnd_level: 992,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 97 },
      wind: { speed: 3.57, deg: 150, gust: 4.5 },
      visibility: 6552,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-29 12:00:00",
    },
    {
      dt: 1672326000,
      main: {
        temp: 263.83,
        feels_like: 257.08,
        temp_min: 263.83,
        temp_max: 263.83,
        pressure: 991,
        sea_level: 991,
        grnd_level: 991,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.38, deg: 125, gust: 7.78 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-29 15:00:00",
    },
    {
      dt: 1672336800,
      main: {
        temp: 269.14,
        feels_like: 262.14,
        temp_min: 269.14,
        temp_max: 269.14,
        pressure: 989,
        sea_level: 989,
        grnd_level: 989,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.57, deg: 134, gust: 13.32 },
      visibility: 739,
      pop: 0.2,
      snow: { "3h": 0.16 },
      sys: { pod: "d" },
      dt_txt: "2022-12-29 18:00:00",
    },
    {
      dt: 1672347600,
      main: {
        temp: 269.02,
        feels_like: 262.02,
        temp_min: 269.02,
        temp_max: 269.02,
        pressure: 987,
        sea_level: 987,
        grnd_level: 987,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.7, deg: 129, gust: 12.93 },
      visibility: 3635,
      pop: 0.28,
      snow: { "3h": 0.13 },
      sys: { pod: "d" },
      dt_txt: "2022-12-29 21:00:00",
    },
    {
      dt: 1672358400,
      main: {
        temp: 269.28,
        feels_like: 262.28,
        temp_min: 269.28,
        temp_max: 269.28,
        pressure: 985,
        sea_level: 985,
        grnd_level: 985,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.59, deg: 114, gust: 12.29 },
      visibility: 3877,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 00:00:00",
    },
    {
      dt: 1672369200,
      main: {
        temp: 269.95,
        feels_like: 262.95,
        temp_min: 269.95,
        temp_max: 269.95,
        pressure: 984,
        sea_level: 984,
        grnd_level: 984,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.45, deg: 137, gust: 12.76 },
      visibility: 477,
      pop: 0.93,
      snow: { "3h": 0.58 },
      sys: { pod: "d" },
      dt_txt: "2022-12-30 03:00:00",
    },
    {
      dt: 1672380000,
      main: {
        temp: 264.54,
        feels_like: 257.54,
        temp_min: 264.54,
        temp_max: 264.54,
        pressure: 985,
        sea_level: 985,
        grnd_level: 985,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 8.11, deg: 175, gust: 13.42 },
      visibility: 10000,
      pop: 0.65,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 06:00:00",
    },
    {
      dt: 1672390800,
      main: {
        temp: 263.25,
        feels_like: 256.25,
        temp_min: 263.25,
        temp_max: 263.25,
        pressure: 987,
        sea_level: 987,
        grnd_level: 987,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.14, deg: 188, gust: 14.7 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 09:00:00",
    },
    {
      dt: 1672401600,
      main: {
        temp: 259.89,
        feels_like: 252.89,
        temp_min: 259.89,
        temp_max: 259.89,
        pressure: 990,
        sea_level: 990,
        grnd_level: 990,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 82 },
      wind: { speed: 6.86, deg: 188, gust: 12.37 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 12:00:00",
    },
    {
      dt: 1672412400,
      main: {
        temp: 256.78,
        feels_like: 249.78,
        temp_min: 256.78,
        temp_max: 256.78,
        pressure: 992,
        sea_level: 992,
        grnd_level: 992,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 28 },
      wind: { speed: 5.04, deg: 198, gust: 8.25 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 15:00:00",
    },
    {
      dt: 1672423200,
      main: {
        temp: 253.04,
        feels_like: 246.04,
        temp_min: 253.04,
        temp_max: 253.04,
        pressure: 994,
        sea_level: 994,
        grnd_level: 994,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 41 },
      wind: { speed: 3.4, deg: 207, gust: 3.4 },
      visibility: 7913,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 18:00:00",
    },
    {
      dt: 1672434000,
      main: {
        temp: 251.24,
        feels_like: 244.24,
        temp_min: 251.24,
        temp_max: 251.24,
        pressure: 996,
        sea_level: 996,
        grnd_level: 996,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 91 },
      wind: { speed: 2.56, deg: 214, gust: 2.52 },
      visibility: 6577,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-30 21:00:00",
    },
    {
      dt: 1672444800,
      main: {
        temp: 250.55,
        feels_like: 245.77,
        temp_min: 250.55,
        temp_max: 250.55,
        pressure: 998,
        sea_level: 998,
        grnd_level: 998,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 93 },
      wind: { speed: 1.45, deg: 237, gust: 1.49 },
      visibility: 7535,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-31 00:00:00",
    },
    {
      dt: 1672455600,
      main: {
        temp: 250.42,
        feels_like: 250.42,
        temp_min: 250.42,
        temp_max: 250.42,
        pressure: 999,
        sea_level: 999,
        grnd_level: 999,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 73 },
      wind: { speed: 0.47, deg: 349, gust: 0.8 },
      visibility: 9568,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-31 03:00:00",
    },
    {
      dt: 1672466400,
      main: {
        temp: 250.14,
        feels_like: 243.14,
        temp_min: 250.14,
        temp_max: 250.14,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 1000,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 69 },
      wind: { speed: 2.65, deg: 51, gust: 2.59 },
      visibility: 7290,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-31 06:00:00",
    },
    {
      dt: 1672477200,
      main: {
        temp: 250.2,
        feels_like: 243.2,
        temp_min: 250.2,
        temp_max: 250.2,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 1000,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 91 },
      wind: { speed: 3.64, deg: 56, gust: 4.5 },
      visibility: 6544,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-31 09:00:00",
    },
    {
      dt: 1672488000,
      main: {
        temp: 253.02,
        feels_like: 246.02,
        temp_min: 253.02,
        temp_max: 253.02,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 1000,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 96 },
      wind: { speed: 4.82, deg: 53, gust: 7.87 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-12-31 12:00:00",
    },
    {
      dt: 1672498800,
      main: {
        temp: 258.03,
        feels_like: 251.03,
        temp_min: 258.03,
        temp_max: 258.03,
        pressure: 998,
        sea_level: 998,
        grnd_level: 998,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.29, deg: 49, gust: 10.81 },
      visibility: 302,
      pop: 0.32,
      snow: { "3h": 0.11 },
      sys: { pod: "d" },
      dt_txt: "2022-12-31 15:00:00",
    },
    {
      dt: 1672509600,
      main: {
        temp: 261,
        feels_like: 254,
        temp_min: 261,
        temp_max: 261,
        pressure: 997,
        sea_level: 997,
        grnd_level: 997,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.89, deg: 53, gust: 10.51 },
      visibility: 197,
      pop: 0.52,
      snow: { "3h": 0.54 },
      sys: { pod: "d" },
      dt_txt: "2022-12-31 18:00:00",
    },
    {
      dt: 1672520400,
      main: {
        temp: 263.06,
        feels_like: 256.06,
        temp_min: 263.06,
        temp_max: 263.06,
        pressure: 997,
        sea_level: 997,
        grnd_level: 997,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.75, deg: 55, gust: 8.28 },
      visibility: 301,
      pop: 0.94,
      snow: { "3h": 0.5 },
      sys: { pod: "d" },
      dt_txt: "2022-12-31 21:00:00",
    },
    {
      dt: 1672531200,
      main: {
        temp: 265.6,
        feels_like: 259.42,
        temp_min: 265.6,
        temp_max: 265.6,
        pressure: 997,
        sea_level: 997,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.2, deg: 70, gust: 6.54 },
      visibility: 334,
      pop: 0.92,
      snow: { "3h": 0.25 },
      sys: { pod: "d" },
      dt_txt: "2023-01-01 00:00:00",
    },
    {
      dt: 1672542000,
      main: {
        temp: 267.18,
        feels_like: 260.92,
        temp_min: 267.18,
        temp_max: 267.18,
        pressure: 997,
        sea_level: 997,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.78, deg: 82, gust: 7.83 },
      visibility: 187,
      pop: 0.68,
      snow: { "3h": 0.42 },
      sys: { pod: "d" },
      dt_txt: "2023-01-01 03:00:00",
    },
    {
      dt: 1672552800,
      main: {
        temp: 268.07,
        feels_like: 261.95,
        temp_min: 268.07,
        temp_max: 268.07,
        pressure: 997,
        sea_level: 997,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.9, deg: 86, gust: 7.53 },
      visibility: 171,
      pop: 0.88,
      snow: { "3h": 0.73 },
      sys: { pod: "d" },
      dt_txt: "2023-01-01 06:00:00",
    },
    {
      dt: 1672563600,
      main: {
        temp: 269.69,
        feels_like: 265.24,
        temp_min: 269.69,
        temp_max: 269.69,
        pressure: 998,
        sea_level: 998,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.26, deg: 137, gust: 6.27 },
      visibility: 286,
      pop: 0.88,
      snow: { "3h": 0.56 },
      sys: { pod: "d" },
      dt_txt: "2023-01-01 09:00:00",
    },
    {
      dt: 1672574400,
      main: {
        temp: 269.54,
        feels_like: 265.21,
        temp_min: 269.54,
        temp_max: 269.54,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 1000,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.1, deg: 135, gust: 5.03 },
      visibility: 4553,
      pop: 0.68,
      snow: { "3h": 0.22 },
      sys: { pod: "d" },
      dt_txt: "2023-01-01 12:00:00",
    },
    {
      dt: 1672585200,
      main: {
        temp: 270.26,
        feels_like: 265.89,
        temp_min: 270.26,
        temp_max: 270.26,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 1000,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.31, deg: 118, gust: 4.7 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2023-01-01 15:00:00",
    },
    {
      dt: 1672596000,
      main: {
        temp: 269.98,
        feels_like: 264.96,
        temp_min: 269.98,
        temp_max: 269.98,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1001,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.01, deg: 98, gust: 6.13 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2023-01-01 18:00:00",
    },
    {
      dt: 1672606800,
      main: {
        temp: 270,
        feels_like: 264.16,
        temp_min: 270,
        temp_max: 270,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1001,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.21, deg: 92, gust: 8.31 },
      visibility: 2518,
      pop: 0.12,
      sys: { pod: "d" },
      dt_txt: "2023-01-01 21:00:00",
    },
    {
      dt: 1672617600,
      main: {
        temp: 269.9,
        feels_like: 263.88,
        temp_min: 269.9,
        temp_max: 269.9,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1001,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.46, deg: 111, gust: 8.61 },
      visibility: 213,
      pop: 0.52,
      snow: { "3h": 0.49 },
      sys: { pod: "d" },
      dt_txt: "2023-01-02 00:00:00",
    },
  ],
  city: {
    id: 0,
    name: "",
    coord: { lat: 83.0976, lon: 35.5182 },
    country: "",
    population: 0,
    timezone: 7200,
    sunrise: 0,
    sunset: 0,
  },
};

const mockWeatherbitForecast = [
  {
    app_max_temp: 7.4,
    app_min_temp: -16.6,
    clouds: 89,
    clouds_hi: 6,
    clouds_low: 54,
    clouds_mid: 88,
    datetime: "2022-12-29",
    dewpt: -5,
    high_temp: 11.2,
    low_temp: -3.3,
    max_dhi: null,
    max_temp: 6.1,
    min_temp: -3.3,
    moon_phase: 0.529503,
    moon_phase_lunation: 0.22,
    moonrise_ts: 1672340694,
    moonset_ts: 1672299061,
    ozone: 332.6,
    pop: 95,
    precip: 0.257,
    pres: 644.8,
    rh: 75,
    slp: 1019,
    snow: 3.862,
    snow_depth: 20.441,
    sunrise_ts: 1672324027,
    sunset_ts: 1672358475,
    temp: 2,
    ts: 1672297260,
    uv: 0.9,
    valid_date: "2022-12-29",
    vis: 6.9,
    weather: { icon: "s02d", description: "Snow", code: 601 },
    wind_cdir: "W",
    wind_cdir_full: "west",
    wind_dir: 268,
    wind_gust_spd: 13.4,
    wind_spd: 7.6,
  },
  {
    app_max_temp: 9.5,
    app_min_temp: -11.5,
    clouds: 98,
    clouds_hi: 61,
    clouds_low: 84,
    clouds_mid: 98,
    datetime: "2022-12-30",
    dewpt: 8.4,
    high_temp: 22.5,
    low_temp: 8.1,
    max_dhi: null,
    max_temp: 18.2,
    min_temp: 0.6,
    moon_phase: 0.638102,
    moon_phase_lunation: 0.26,
    moonrise_ts: 1672428575,
    moonset_ts: 1672389347,
    ozone: 288.1,
    pop: 100,
    precip: 0.404,
    pres: 650,
    rh: 86,
    slp: 1017.1,
    snow: 6.055,
    snow_depth: 26.496,
    sunrise_ts: 1672410442,
    sunset_ts: 1672444919,
    temp: 12.3,
    ts: 1672383660,
    uv: 0.9,
    valid_date: "2022-12-30",
    vis: 1.7,
    weather: { icon: "s03d", description: "Heavy snow", code: 602 },
    wind_cdir: "SW",
    wind_cdir_full: "southwest",
    wind_dir: 230,
    wind_gust_spd: 14.5,
    wind_spd: 9.2,
  },
  {
    app_max_temp: 22.5,
    app_min_temp: -4,
    clouds: 89,
    clouds_hi: 71,
    clouds_low: 43,
    clouds_mid: 89,
    datetime: "2022-12-31",
    dewpt: 20.4,
    high_temp: 29.9,
    low_temp: 20.3,
    max_dhi: null,
    max_temp: 29.9,
    min_temp: 8.1,
    moon_phase: 0.736919,
    moon_phase_lunation: 0.29,
    moonrise_ts: 1672516480,
    moonset_ts: 1672479590,
    ozone: 273.8,
    pop: 100,
    precip: 0.389,
    pres: 676,
    rh: 93,
    slp: 1011.6,
    snow: 6.134,
    snow_depth: 32.63,
    sunrise_ts: 1672496854,
    sunset_ts: 1672531365,
    temp: 22.4,
    ts: 1672470060,
    uv: 1.9,
    valid_date: "2022-12-31",
    vis: 4.2,
    weather: { icon: "s03d", description: "Heavy snow", code: 602 },
    wind_cdir: "SSW",
    wind_cdir_full: "south-southwest",
    wind_dir: 208,
    wind_gust_spd: 9.6,
    wind_spd: 8.1,
  },
];

module.exports = {
  mockWeatherbitForecast,
  mockCurrentData,
  mockForecastData,
};