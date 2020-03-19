export interface StockSchema {
  marketSummaryResponse: {
    result: {}[];
    error: any;
  };
}

export interface StockDetail {
  defaultKeyStatistics?: {
    annualHoldingsTurnover?: {
      [k: string]: any;
    };
    enterpriseToRevenue?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    beta3Year?: {
      [k: string]: any;
    };
    profitMargins?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    enterpriseToEbitda?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    "52WeekChange"?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    morningStarRiskRating?: {
      [k: string]: any;
    };
    forwardEps?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    revenueQuarterlyGrowth?: {
      [k: string]: any;
    };
    sharesOutstanding?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    fundInceptionDate?: {
      [k: string]: any;
    };
    annualReportExpenseRatio?: {
      [k: string]: any;
    };
    totalAssets?: {
      [k: string]: any;
    };
    bookValue?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    sharesShort?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    sharesPercentSharesOut?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    fundFamily?: any;
    lastFiscalYearEnd?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    heldPercentInstitutions?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    netIncomeToCommon?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    trailingEps?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    lastDividendValue?: {
      [k: string]: any;
    };
    SandP52WeekChange?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    priceToBook?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    heldPercentInsiders?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    nextFiscalYearEnd?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    yield?: {
      [k: string]: any;
    };
    mostRecentQuarter?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    shortRatio?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    sharesShortPreviousMonthDate?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    floatShares?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    beta?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    enterpriseValue?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    priceHint?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    threeYearAverageReturn?: {
      [k: string]: any;
    };
    lastSplitDate?: {
      [k: string]: any;
    };
    lastSplitFactor?: any;
    legalType?: any;
    morningStarOverallRating?: {
      [k: string]: any;
    };
    earningsQuarterlyGrowth?: {
      [k: string]: any;
    };
    priceToSalesTrailing12Months?: {
      [k: string]: any;
    };
    dateShortInterest?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    pegRatio?: {
      [k: string]: any;
    };
    ytdReturn?: {
      [k: string]: any;
    };
    forwardPE?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    maxAge?: number;
    lastCapGain?: {
      [k: string]: any;
    };
    shortPercentOfFloat?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    sharesShortPriorMonth?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    category?: any;
    fiveYearAverageReturn?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  details?: {
    [k: string]: any;
  };
  summaryProfile?: {
    zip?: string;
    sector?: string;
    fullTimeEmployees?: number;
    longBusinessSummary?: string;
    city?: string;
    phone?: string;
    state?: string;
    country?: string;
    companyOfficers?: any[];
    website?: string;
    maxAge?: number;
    address1?: string;
    industry?: string;
    [k: string]: any;
  };
  recommendationTrend?: {
    trend?: {
      period?: string;
      strongBuy?: number;
      buy?: number;
      hold?: number;
      sell?: number;
      strongSell?: number;
      [k: string]: any;
    }[];
    maxAge?: number;
    [k: string]: any;
  };
  majorDirectHolders?: {
    holders?: any[];
    maxAge?: number;
    [k: string]: any;
  };
  earnings?: {
    maxAge?: number;
    earningsChart?: {
      quarterly?: {
        date?: string;
        actual?: {
          raw?: number;
          fmt?: string;
          [k: string]: any;
        };
        estimate?: {
          raw?: number;
          fmt?: string;
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      currentQuarterEstimate?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      currentQuarterEstimateDate?: string;
      currentQuarterEstimateYear?: number;
      earningsDate?: any[];
      [k: string]: any;
    };
    financialsChart?: {
      yearly?: {
        date?: number;
        revenue?: {
          raw?: number;
          fmt?: string;
          longFmt?: string;
          [k: string]: any;
        };
        earnings?: {
          raw?: number;
          fmt?: string;
          longFmt?: string;
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      quarterly?: {
        date?: string;
        revenue?: {
          raw?: number;
          fmt?: string;
          longFmt?: string;
          [k: string]: any;
        };
        earnings?: {
          raw?: number;
          fmt?: string;
          longFmt?: string;
          [k: string]: any;
        };
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    financialCurrency?: string;
    [k: string]: any;
  };
  price?: {
    quoteSourceName?: string;
    regularMarketOpen?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    averageDailyVolume3Month?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    exchange?: string;
    regularMarketTime?: number;
    volume24Hr?: {
      [k: string]: any;
    };
    regularMarketDayHigh?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    shortName?: string;
    averageDailyVolume10Day?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    longName?: string;
    regularMarketChange?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    currencySymbol?: string;
    regularMarketPreviousClose?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    postMarketTime?: number;
    preMarketPrice?: {
      [k: string]: any;
    };
    exchangeDataDelayedBy?: number;
    postMarketChange?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    postMarketPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    exchangeName?: string;
    preMarketChange?: {
      [k: string]: any;
    };
    circulatingSupply?: {
      [k: string]: any;
    };
    regularMarketDayLow?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    priceHint?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    currency?: string;
    regularMarketPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    regularMarketVolume?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    lastMarket?: any;
    regularMarketSource?: string;
    openInterest?: {
      [k: string]: any;
    };
    marketState?: string;
    underlyingSymbol?: any;
    marketCap?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    quoteType?: string;
    volumeAllCurrencies?: {
      [k: string]: any;
    };
    postMarketSource?: string;
    strikePrice?: {
      [k: string]: any;
    };
    symbol?: string;
    postMarketChangePercent?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    preMarketSource?: string;
    maxAge?: number;
    fromCurrency?: any;
    regularMarketChangePercent?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  fundOwnership?: {
    ownershipList?: {
      maxAge?: number;
      reportDate?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      organization?: string;
      pctHeld?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      position?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      value?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    maxAge?: number;
    [k: string]: any;
  };
  insiderTransactions?: {
    transactions?: {
      filerName?: string;
      transactionText?: string;
      moneyText?: string;
      ownership?: string;
      startDate?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      value?: {
        [k: string]: any;
      };
      filerRelation?: string;
      shares?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      filerUrl?: string;
      maxAge?: number;
      [k: string]: any;
    }[];
    maxAge?: number;
    [k: string]: any;
  };
  insiderHolders?: {
    holders?: {
      maxAge?: number;
      name?: string;
      relation?: string;
      url?: string;
      transactionDescription?: string;
      latestTransDate?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      positionDirect?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      positionDirectDate?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    maxAge?: number;
    [k: string]: any;
  };
  netSharePurchaseActivity?: {
    period?: string;
    netPercentInsiderShares?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    netInfoCount?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    totalInsiderShares?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    buyInfoShares?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    buyPercentInsiderShares?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    sellInfoCount?: {
      raw?: number;
      fmt?: any;
      longFmt?: string;
      [k: string]: any;
    };
    maxAge?: number;
    buyInfoCount?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    netInfoShares?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  majorHoldersBreakdown?: {
    maxAge?: number;
    insidersPercentHeld?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    institutionsPercentHeld?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    institutionsFloatPercentHeld?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    institutionsCount?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  financialData?: {
    ebitdaMargins?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    profitMargins?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    grossMargins?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    operatingCashflow?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    revenueGrowth?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    operatingMargins?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    ebitda?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    targetLowPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    recommendationKey?: string;
    grossProfits?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    freeCashflow?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    targetMedianPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    currentPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    earningsGrowth?: {
      [k: string]: any;
    };
    currentRatio?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    returnOnAssets?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    numberOfAnalystOpinions?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    targetMeanPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    debtToEquity?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    returnOnEquity?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    targetHighPrice?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    totalCash?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    totalDebt?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    totalRevenue?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    totalCashPerShare?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    financialCurrency?: string;
    maxAge?: number;
    revenuePerShare?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    quickRatio?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    recommendationMean?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  quoteType?: {
    exchange?: string;
    shortName?: string;
    longName?: string;
    exchangeTimezoneName?: string;
    exchangeTimezoneShortName?: string;
    isEsgPopulated?: boolean;
    gmtOffSetMilliseconds?: string;
    underlyingSymbol?: any;
    quoteType?: string;
    symbol?: string;
    underlyingExchangeSymbol?: any;
    headSymbol?: any;
    messageBoardId?: string;
    uuid?: string;
    market?: string;
    [k: string]: any;
  };
  institutionOwnership?: {
    ownershipList?: {
      maxAge?: number;
      reportDate?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      organization?: string;
      pctHeld?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      position?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      value?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      [k: string]: any;
    }[];
    maxAge?: number;
    [k: string]: any;
  };
  calendarEvents?: {
    maxAge?: number;
    earnings?: {
      earningsDate?: any[];
      earningsAverage?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      earningsLow?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      earningsHigh?: {
        raw?: number;
        fmt?: string;
        [k: string]: any;
      };
      revenueAverage?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      revenueLow?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      revenueHigh?: {
        raw?: number;
        fmt?: string;
        longFmt?: string;
        [k: string]: any;
      };
      [k: string]: any;
    };
    exDividendDate?: {
      [k: string]: any;
    };
    dividendDate?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  summaryDetail?: {
    previousClose?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    regularMarketOpen?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    twoHundredDayAverage?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    trailingAnnualDividendYield?: {
      [k: string]: any;
    };
    payoutRatio?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    volume24Hr?: {
      [k: string]: any;
    };
    regularMarketDayHigh?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    navPrice?: {
      [k: string]: any;
    };
    averageDailyVolume10Day?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    totalAssets?: {
      [k: string]: any;
    };
    regularMarketPreviousClose?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    fiftyDayAverage?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    trailingAnnualDividendRate?: {
      [k: string]: any;
    };
    open?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    averageVolume10days?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    expireDate?: {
      [k: string]: any;
    };
    yield?: {
      [k: string]: any;
    };
    algorithm?: any;
    dividendRate?: {
      [k: string]: any;
    };
    exDividendDate?: {
      [k: string]: any;
    };
    beta?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    circulatingSupply?: {
      [k: string]: any;
    };
    startDate?: {
      [k: string]: any;
    };
    regularMarketDayLow?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    priceHint?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    currency?: string;
    regularMarketVolume?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    lastMarket?: any;
    maxSupply?: {
      [k: string]: any;
    };
    openInterest?: {
      [k: string]: any;
    };
    marketCap?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    volumeAllCurrencies?: {
      [k: string]: any;
    };
    strikePrice?: {
      [k: string]: any;
    };
    averageVolume?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    priceToSalesTrailing12Months?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    dayLow?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    ask?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    ytdReturn?: {
      [k: string]: any;
    };
    askSize?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    volume?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    fiftyTwoWeekHigh?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    forwardPE?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    maxAge?: number;
    fromCurrency?: any;
    fiveYearAvgDividendYield?: {
      [k: string]: any;
    };
    fiftyTwoWeekLow?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    bid?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    tradeable?: boolean;
    dividendYield?: {
      [k: string]: any;
    };
    bidSize?: {
      raw?: number;
      fmt?: string;
      longFmt?: string;
      [k: string]: any;
    };
    dayHigh?: {
      raw?: number;
      fmt?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  symbol?: string;
  esgScores?: {
    [k: string]: any;
  };
  upgradeDowngradeHistory?: {
    history?: any[];
    maxAge?: number;
    [k: string]: any;
  };
  pageViews?: {
    shortTermTrend?: string;
    midTermTrend?: string;
    longTermTrend?: string;
    maxAge?: number;
    [k: string]: any;
  };
  [k: string]: any;
}