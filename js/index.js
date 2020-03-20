// ajax获取曲线图数据
$.ajax({
  url: "https://edu.telking.com/api/?type=month", success: function (result) {
    console.log(result)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('line-chart'));

    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['销量']
      },
      xAxis: {
        type: 'category',
        data: result.data.xAxis
      },
      yAxis: {},
      series: [{
        type: 'line',
        smooth: 'true',
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: 'rgb(84, 140, 243)'
              }
            },
            lineStyle: {
              color: 'rgb(84, 140, 243)'
            }
          }
        },
        areaStyle: {
          color: 'rgb(100, 200, 243)'
        },
        data: result.data.series
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
});

// 饼图与柱形图的数据
$.ajax({
  url: "https://edu.telking.com/api/?type=week", success: function (result) {
    console.log(result)
    let chartData = []
    for (let i = 0; i < result.data.xAxis.length; i++) {
      chartData.push({
        name: result.data.xAxis[i],
        value: result.data.series[i]
      })
    }

    // 基于准备好的dom，初始化echarts实例
    // 饼图
    var ChartPie = echarts.init(document.getElementById('pie-graph'));

    // 指定图表的配置项和数据
    var optionPie = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    ChartPie.setOption(optionPie);

    // 柱形图
    var ChartBar = echarts.init(document.getElementById('bar-chart'));

    optionBar = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: result.data.xAxis,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          name: '商品数',
          type: 'value'
        }
      ],
      series: [
        {
          type: 'bar',
          barWidth: '50%',
          data: result.data.series
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    ChartBar.setOption(optionBar);
  }
});

