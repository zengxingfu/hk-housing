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
      display: true,
      text: "公屋申请平均轮候时长"
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
        label: "报道量",
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
      display: true,
      text: "1995年-2018年香港媒体关于公屋的新闻报道量"
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
          }
        }
      ]
    }
  }
};

export default {
  polling: pollingConfig,
  report: reportConfig
};
