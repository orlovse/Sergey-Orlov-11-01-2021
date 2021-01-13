export const searchCity = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "215855",
    Type: "City",
    Rank: 31,
    LocalizedName: "Test City",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "215856",
    Type: "City",
    Rank: 31,
    LocalizedName: "Mock City ",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
];

export const fiveDays = {
  Headline: {
    EffectiveDate: "2021-01-11T07:00:00+00:00",
    EffectiveEpochDate: 1610348400,
    Severity: 3,
    Text: "Expect rainy weather Monday morning through Monday evening",
    Category: "rain",
    EndDate: "2021-01-12T01:00:00+00:00",
    EndEpochDate: 1610413200,
    MobileLink:
      "http://m.accuweather.com/en/gb/londonderry/bt48-6/extended-weather-forecast/329139?unit=c&lang=en-us",
    Link:
      "http://www.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2021-01-11T07:00:00+00:00",
      EpochDate: 1610348400,
      Temperature: {
        Minimum: {
          Value: 3.3,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 8.6,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=1&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2021-01-12T07:00:00+00:00",
      EpochDate: 1610434800,
      Temperature: {
        Minimum: {
          Value: 5.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 6.6,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=2&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2021-01-13T07:00:00+00:00",
      EpochDate: 1610521200,
      Temperature: {
        Minimum: {
          Value: 7,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 11.3,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 8,
        IconPhrase: "Dreary",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=3&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2021-01-14T07:00:00+00:00",
      EpochDate: 1610607600,
      Temperature: {
        Minimum: {
          Value: 2,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 8.6,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=4&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2021-01-15T07:00:00+00:00",
      EpochDate: 1610694000,
      Temperature: {
        Minimum: {
          Value: 5.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 7,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=5&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/gb/londonderry/bt48-6/daily-weather-forecast/329139?day=5&unit=c&lang=en-us",
    },
  ],
};

export const currentWeather = [
  {
    LocalObservationDateTime: "2021-01-11T11:17:00+00:00",
    EpochTime: 1610363820,
    WeatherText: "Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 8.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 47,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/gb/londonderry/bt48-6/current-weather/329139?lang=en-us",
    Link:
      "http://www.accuweather.com/en/gb/londonderry/bt48-6/current-weather/329139?lang=en-us",
  },
];

export const currentDetails = [
  {
    LocalObservationDateTime: "2021-01-11T11:17:00+00:00",
    EpochTime: 1610363820,
    WeatherText: "Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 8.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 47,
        Unit: "F",
        UnitType: 18,
      },
    },
    RealFeelTemperature: {
      Metric: {
        Value: -0.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 32,
        Unit: "F",
        UnitType: 18,
      },
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: -0.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 32,
        Unit: "F",
        UnitType: 18,
      },
    },
    RelativeHumidity: 92,
    IndoorRelativeHumidity: 43,
    DewPoint: {
      Metric: {
        Value: 7,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 45,
        Unit: "F",
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 248,
        Localized: "WSW",
        English: "WSW",
      },
      Speed: {
        Metric: {
          Value: 33.9,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 21.1,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 57.4,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 35.7,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: "Low",
    Visibility: {
      Metric: {
        Value: 9.7,
        Unit: "km",
        UnitType: 6,
      },
      Imperial: {
        Value: 6,
        Unit: "mi",
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: "",
    CloudCover: 95,
    Ceiling: {
      Metric: {
        Value: 427,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 1400,
        Unit: "ft",
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1009,
        Unit: "mb",
        UnitType: 14,
      },
      Imperial: {
        Value: 29.8,
        Unit: "inHg",
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: "Steady",
      Code: "S",
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: 2.6,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 5,
        Unit: "F",
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 10,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 50,
        Unit: "F",
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 3.9,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 39,
        Unit: "F",
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 7.6,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 46,
        Unit: "F",
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0.7,
        Unit: "mm",
        UnitType: 3,
      },
      Imperial: {
        Value: 0.03,
        Unit: "in",
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.7,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.03,
          Unit: "in",
          UnitType: 1,
        },
      },
      PastHour: {
        Metric: {
          Value: 0.7,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.03,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past3Hours: {
        Metric: {
          Value: 0.7,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.03,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past6Hours: {
        Metric: {
          Value: 2,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.08,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past9Hours: {
        Metric: {
          Value: 2.4,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.1,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past12Hours: {
        Metric: {
          Value: 2.9,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.12,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past18Hours: {
        Metric: {
          Value: 4.4,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.17,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past24Hours: {
        Metric: {
          Value: 6.3,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.25,
          Unit: "in",
          UnitType: 1,
        },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 7.3,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 45,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 8.6,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 48,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 6.3,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 43,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 8.6,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 48,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 5.6,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 42,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 8.6,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 48,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/gb/londonderry/bt48-6/current-weather/329139?lang=en-us",
    Link:
      "http://www.accuweather.com/en/gb/londonderry/bt48-6/current-weather/329139?lang=en-us",
  },
];
