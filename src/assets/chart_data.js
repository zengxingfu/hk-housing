let pollingConfig = {
  type: "line",
  data: {
    labels: [
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年",
      "2017年",
      "2018年（3月）"
    ],
    datasets: [
      {
        label: "轮候时长（年）",
        // backgroundColor: window.chartColors.red,
        // borderColor: window.chartColors.red,
        backgroundColor: "rgb(63,81,181)",
        borderColor: "#3f51b5",
        data: [
          5,
          4,
          3.1,
          2.3,
          2.1,
          1.8,
          2,
          3,
          3,
          1.8,
          2,
          2.3,
          2.7,
          2.8,
          3.1,
          3.6,
          4.5,
          4.7,
          5.1
        ],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "公屋申请平均轮候时长"
    },
    dataSource: {
      text: "香港房屋委员会年度机构计划"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "轮候时长（年）"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let reportConfig = {
  type: "line",
  data: {
    labels: [
      "1995年",
      "1996年",
      "1997年",
      "1998年",
      "1999年",
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年",
      "2017年",
      "2018年（至5月）"
    ],
    datasets: [
      {
        label: "报道量（篇）",
        backgroundColor: "rgba(63,81,181,0.75)",
        borderColor: "#3f51b5",
        fill: true,
        data: [
          156,
          265,
          444,
          625,
          563,
          1015,
          973,
          1565,
          1541,
          2159,
          2113,
          1644,
          1807,
          1689,
          1721,
          3154,
          4115,
          5901,
          3225,
          3795,
          5891,
          5295,
          6739,
          2476
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "1995-2018年香港媒体关于公屋的新闻报道量"
    },
    dataSource: {
      text: "Factiva媒体数据库"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "报道量"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let reportLastYearConfig = {
  type: "line",
  data: {
    labels: [
      "2017年5月",
      "2017年6月",
      "2017年7月",
      "2017年8月",
      "2017年9月",
      "2017年10月",
      "2017年11月",
      "2017年12月",
      "2018年1月",
      "2018年2月",
      "2018年3月",
      "2018年4月",
      "2018年5月"
    ],
    datasets: [
      {
        label: "报道量（篇）",
        backgroundColor: "rgba(63,81,181,0.75)",
        borderColor: "#3f51b5",
        fill: true,
        data: [209, 533, 463, 500, 563, 875, 647, 482, 517, 418, 570, 500, 371]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "过去一年香港媒体关于公屋的新闻报道量"
    },
    dataSource: {
      text: "Factiva媒体数据库"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "报道量"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let povertyConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [12, 88],
        backgroundColor: ["#3f51b5", "#ED7D31"],
        label: "贫穷人口比例"
      }
    ],
    labels: ["香港贫穷人口（%）", "香港贫穷线以上人口（%）"]
  },
  options: {
    responsive: true,
    dataSource: {
      text: "香港政府统计处2016年统计"
    },
    title: {
      text: "2016年香港贫穷人口比例",
      display: false
    }
  }
};

let housingPieConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [28, 72],
        backgroundColor: ["#3f51b5", "#ED7D31"],
        label: "2016年公屋认可居民比例"
      }
    ],
    labels: ["公屋认可居民（%）", "非公屋居民（%）"]
  },
  options: {
    responsive: true,
    dataSource: {
      text: "香港政府统计处2016年统计"
    },
    title: {
      text: "2016年公屋认可居民比例",
      display: false
    }
  }
};

let povertyHousingConfig = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [41.6, 8.8, 49.6],
        backgroundColor: ["#3F51B5", "#ED7D31", "#A5A5A5"],
        label: "香港贫穷人口住房类型分布"
      }
    ],
    labels: [
      "租住在公屋（%）",
      "租住在私人房屋中（%）",
      "居住在其他类型房屋中（%）"
    ]
  },
  options: {
    responsive: true,
    dataSource: {
      text: "香港政府统计处2016年统计"
    },
    title: {
      text: "香港贫穷人口住房类型分布",
      display: false
    }
  }
};

let hkPopulation = {
  type: "line",
  data: {
    labels: [
      "1986年",
      "1987年",
      "1988年",
      "1989年",
      "1990年",
      "1991年",
      "1992年",
      "1993年",
      "1994年",
      "1995年",
      "1996年",
      "1997年",
      "1998年",
      "1999年",
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年"
    ],
    datasets: [
      {
        label: "总人口数",
        // backgroundColor: window.chartColors.red,
        // borderColor: window.chartColors.red,
        backgroundColor: "rgb(63,81,181)",
        borderColor: "#3f51b5",
        data: [
          5524600,
          5580500,
          5627600,
          5686200,
          5704500,
          5752000,
          5800500,
          5901000,
          6035400,
          6156100,
          6435500,
          6489300,
          6543700,
          6606500,
          6665000,
          6714300,
          6744100,
          6730800,
          6783500,
          6813200,
          6857100,
          6916300,
          6957800,
          6972800,
          7024200,
          7071600,
          7150100,
          7178900,
          7229500,
          7291300,
          7336600
        ],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "1986-2016年香港总人口数变化"
    },
    dataSource: {
      text: "政府统计处 香港统计年刊"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "总人口数"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let hkFamily = {
  type: "line",
  data: {
    labels: [
      "1982年",
      "1983年",
      "1984年",
      "1985年",
      "1986年",
      "1987年",
      "1988年",
      "1989年",
      "1990年",
      "1991年",
      "1992年",
      "1993年",
      "1994年",
      "1995年",
      "1996年",
      "1997年",
      "1998年",
      "1999年",
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年",
      "2017年"
    ],
    datasets: [
      {
        label: "平均人数",
        // backgroundColor: window.chartColors.red,
        // borderColor: window.chartColors.red,
        backgroundColor: "rgb(63,81,181)",
        borderColor: "#3f51b5",
        data: [
          3.9,
          3.9,
          3.7,
          3.7,
          3.6,
          3.6,
          3.6,
          3.6,
          3.5,
          3.5,
          3.4,
          3.5,
          3.4,
          3.4,
          3.4,
          3.3,
          3.3,
          3.3,
          3.3,
          3.2,
          3.2,
          3.1,
          3.1,
          3,
          3,
          3,
          3,
          2.9,
          2.9,
          2.9,
          2.9,
          2.9,
          2.9,
          2.9,
          2.8,
          2.8
        ],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "1982-2017年香港家庭住戶平均人数"
    },
    dataSource: {
      text: "政府统计处 香港统计年刊"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "平均人数"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let unitAndPopulation = {
  type: "bar",
  data: {
    labels: [
      "1987年",
      "1988年",
      "1989年",
      "1990年",
      "1991年",
      "1992年",
      "1993年",
      "1994年",
      "1995年",
      "1996年",
      "1997年",
      "1998年",
      "1999年",
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年",
      "2017年"
    ],
    datasets: [
      {
        type: "line",
        label: "单位数目",
        backgroundColor: "rgb(253,134,36)",
        borderColor: "rgb(253,134,36)",
        data: [
          566300,
          590300,
          619811,
          634873,
          646665,
          639660,
          647194,
          689357,
          693072,
          698305,
          703299,
          678972,
          650759,
          652936,
          639594,
          634209,
          634209,
          648444,
          668630,
          682316,
          677804,
          673825,
          694099,
          703608,
          708057,
          722368,
          727958,
          743677,
          744137,
          750280,
          769352
        ],
        fill: false,
        yAxisID: "y-axis-1"
      },
      {
        label: "认可居民人数",
        backgroundColor: "rgb(63,81,181)",
        borderColor: "#3f51b5",
        data: [
          2278400,
          2317100,
          2342915,
          2350698,
          2379290,
          2357931,
          2351935,
          2480186,
          2469546,
          2440605,
          2389307,
          2282086,
          2108495,
          2013198,
          2002862,
          2002862,
          1981895,
          2018624,
          2030270,
          2022618,
          1987860,
          1964055,
          1984200,
          2004869,
          2003204,
          2022509,
          2026917,
          2050880,
          2048496,
          2057113,
          2094473
        ],
        fill: false,
        yAxisID: "y-axis-2"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "1987-2017年香港公屋单位数和公屋居民人数变化"
    },
    dataSource: {
      text: "香港房屋委员会年报"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          type: "linear",
          position: "left",
          id: "y-axis-1",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "单位数目"
          },
          ticks: {
            beginAtZero: true
          }
        },
        {
          type: "linear",
          position: "right",
          id: "y-axis-2",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "认可居民人数"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let elder = {
  type: "bar",
  data: {
    labels: [
      "1999年",
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年",
      "2017年"
    ],
    datasets: [
      {
        type: "line",
        label: "公屋非长者一人申请个案数",
        backgroundColor: "rgb(253,134,36)",
        borderColor: "rgb(253,134,36)",
        data: [
          14100,
          17400,
          19000,
          26800,
          32700,
          37200,
          41900,
          36900,
          37500,
          38700,
          42700,
          51300,
          63400,
          87800,
          111500,
          126200,
          140600,
          134300,
          128600
        ],
        fill: false,
        yAxisID: "y-axis-1"
      },
      {
        label: "占公屋申请轮候总数的比例",
        backgroundColor: "rgb(63,81,181)",
        borderColor: "#3f51b5",
        data: [
          13,
          16,
          22,
          29,
          36,
          41,
          43,
          38,
          35,
          35,
          37,
          40,
          42,
          46,
          49,
          51,
          50,
          47,
          47
        ],
        fill: false,
        yAxisID: "y-axis-2"
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "1999-2017年公屋非长者一人申请数量与占比变化"
    },
    dataSource: {
      text: "香港房屋署"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          type: "linear",
          position: "left",
          id: "y-axis-1",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "申请数量"
          },
          ticks: {
            beginAtZero: true
          }
        },
        {
          type: "linear",
          position: "right",
          id: "y-axis-2",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "比例（%）"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let vacancy = {
  type: "line",
  data: {
    labels: [
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年"
    ],
    datasets: [
      {
        label: "公屋空置率（%）",
        // backgroundColor: window.chartColors.red,
        // borderColor: window.chartColors.red,
        backgroundColor: "rgb(63,81,181)",
        borderColor: "#3f51b5",
        data: [
          3,
          5.1,
          1.6,
          1.04,
          1.3,
          1.7,
          1.4,
          1.3,
          2.1,
          1.4,
          1.2,
          1.3,
          1.3,
          0.8,
          0.5,
          0.6,
          0.5
        ],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "公屋空置率"
    },
    dataSource: {
      text: "香港房屋委员会年度机构计划"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "公屋空置率"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let satisfaction = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [20, 75, 5],
        backgroundColor: ["#3f51b5", "#ED7D31", "#A5A5A5"],
        label: "满意度"
      }
    ],
    labels: ["普通（%）", "非常满意/满意（%）", "非常不满意/不满意（%）"]
  },
  options: {
    responsive: true,
    dataSource: {
      text: "公营房屋住户综合统计（2016年）"
    },
    title: {
      text: "公屋居民对公屋管理及服务的满意度",
      display: false
    }
  }
};

let housingRantal = {
  type: "bar",
  data: {
    labels: ["香港岛", "九龙", "新界"],
    datasets: [
      {
        label: "2007年",
        data: [48, 51, 43],
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        fill: false
      },
      {
        label: "2012年",
        data: [46, 49, 40],
        backgroundColor: "#ED7D31",
        borderColor: "#ED7D31",
        fill: false
      },
      {
        label: "2016年",
        data: [61, 68, 54],
        backgroundColor: "#A5A5A5",
        borderColor: "#A5A5A5",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "香港各区公屋租金涨幅"
    },
    dataSource: {
      text: "香港房屋统计数据2017"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "租金（港元／平方米）"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let privateHousing = {
  type: "bar",
  data: {
    labels: ["香港岛", "九龙", "新界"],
    datasets: [
      {
        label: "2007年",
        data: [218, 160, 111],
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        fill: false
      },
      {
        label: "2012年",
        data: [306, 231, 174],
        backgroundColor: "#ED7D31",
        borderColor: "#ED7D31",
        fill: false
      },
      {
        label: "2016年",
        data: [408, 322, 249],
        backgroundColor: "#A5A5A5",
        borderColor: "#A5A5A5",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "香港各区私人房屋租金涨幅"
    },
    dataSource: {
      text: "香港房屋统计数据2017"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "租金（港元／平方米）"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let housingChange = {
  type: "line",
  data: {
    labels: [
      "1987年",
      "1988年",
      "1989年",
      "1990年",
      "1991年",
      "1992年",
      "1993年",
      "1994年",
      "1995年",
      "1996年",
      "1997年",
      "1998年",
      "1999年",
      "2000年",
      "2001年",
      "2002年",
      "2003年",
      "2004年",
      "2005年",
      "2006年",
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年",
      "2017年"
    ],
    datasets: [
      {
        label: "香港岛",
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        data: [
          56500,
          60000,
          61853,
          65903,
          66934,
          64022,
          63543,
          78208,
          79150,
          80754,
          84271,
          77974,
          67708,
          69322,
          67353,
          65427,
          65427,
          65405,
          65284,
          64506,
          66710,
          61118,
          61713,
          61605,
          62993,
          62884,
          62654,
          62384,
          62028,
          61831,
          61835
        ],
        fill: false
      },
      {
        label: "九龙",
        backgroundColor: "#ED7D31",
        borderColor: "#ED7D31",
        data: [
          275300,
          272400,
          273375,
          263288,
          265124,
          251103,
          246336,
          262893,
          261074,
          263567,
          254876,
          249886,
          241166,
          248001,
          236897,
          232172,
          232172,
          229204,
          240972,
          240667,
          239869,
          240319,
          249147,
          255034,
          259390,
          269248,
          276315,
          291768,
          291095,
          290941,
          303118
        ],
        fill: false
      },
      {
        label: "沙田",
        backgroundColor: "#A5A5A5",
        borderColor: "#A5A5A5",
        data: [
          51000,
          56700,
          61674,
          62925,
          63413,
          63459,
          65593,
          70815,
          70833,
          71486,
          72382,
          67781,
          61873,
          55860,
          53692,
          50439,
          50439,
          50305,
          50252,
          54136,
          53996,
          53804,
          56015,
          57784,
          57599,
          59927,
          60822,
          62007,
          61646,
          65670,
          72200
        ],
        fill: false
      },
      {
        label: "屯门",
        backgroundColor: "#FFC000",
        borderColor: "#FFC000",
        data: [
          46100,
          48700,
          52364,
          58001,
          58001,
          57990,
          57990,
          57991,
          57997,
          57993,
          57993,
          56093,
          54184,
          58570,
          52636,
          53612,
          53612,
          53623,
          57223,
          58018,
          58061,
          58234,
          58463,
          58625,
          58280,
          58061,
          57293,
          57594,
          56409,
          55622,
          54934
        ],
        fill: false
      },
      {
        label: "新界其他地区",
        backgroundColor: "#5B9BD5",
        borderColor: "#5B9BD5",
        data: [
          137400,
          152500,
          170545,
          184756,
          193193,
          203086,
          213732,
          219450,
          224018,
          224505,
          233777,
          227238,
          225828,
          221183,
          229016,
          232559,
          232559,
          249907,
          254899,
          264989,
          259168,
          260350,
          268761,
          270560,
          269795,
          272248,
          270874,
          269924,
          272959,
          276216,
          277265
        ],
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "1987年-2017年香港各区公屋单位数目变化"
    },
    dataSource: {
      text: "香港房屋委员会年报"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "单位数目"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let estate = {
  type: "bar",
  data: {
    labels: ["香港岛", "九龙", "新界"],
    datasets: [
      {
        label: "2006年",
        data: [49327, 35446, 30553],
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        fill: false
      },
      {
        label: "2011年",
        data: [99452, 76772, 56481],
        backgroundColor: "#ED7D31",
        borderColor: "#ED7D31",
        fill: false
      },
      {
        label: "2016年",
        data: [139536, 114464, 93896],
        backgroundColor: "#A5A5A5",
        borderColor: "#A5A5A5",
        fill: false
      },
      {
        label: "2017年",
        data: [173390, 148740, 110409],
        backgroundColor: "#FFC000",
        borderColor: "#FFC000",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "香港私屋售价"
    },
    dataSource: {
      text: "中原地产"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "租金（港元／平方米）"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

let ownership = {
  type: "bar",
  data: {
    labels: ["2014年", "2016年"],
    datasets: [
      {
        label: "居屋供应数",
        data: [2160, 2600],
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        fill: false
      },
      {
        label: "居民申请数",
        data: [135000, 574000],
        backgroundColor: "#ED7D31",
        borderColor: "#ED7D31",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "居屋供应数与居民申请数"
    },
    dataSource: {
      text: "香港房屋署"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Year"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "租金（港元／平方米）"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
};

export default {
  polling: pollingConfig,
  report: reportConfig,
  reportLastYear: reportLastYearConfig,
  poverty: povertyConfig,
  housingPie: housingPieConfig,
  povertyHousing: povertyHousingConfig,
  hkPopulation,
  hkFamily,
  unitAndPopulation,
  elder,
  vacancy,
  satisfaction,
  housingChange,
  housingRantal,
  privateHousing,
  ownership,
  estate
};
