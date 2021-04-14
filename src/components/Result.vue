<template>
<!--  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>-->
  <div>
    <h1 class="text-center">分析结果</h1>
    <p class="text-center">本产品属于数据资产管理技术领域，采用数据资产价值评估模型及市场法进行估值分析。</p>
    <b-card bg-variant="light" class="card_center" style="box-shadow: 0 10px 10px gray">
      <b-container>
        <b-row>
          <b-col col lg="6">
              <b-card
                style="font-weight: inherit;
                font-size: small"
                v-bind="result"
              >

                <b-card-text class="small text-muted">价格 Total Sales</b-card-text>
                <p v-bind="result" style="font-weight: bolder; font-size: x-large" >￥{{result.price}}</p>
                <p>
                  上升：{{result.rize}}<br>
                  下降：{{result.decline}}<br>
                  日均价格：{{result.average}}
                </p>
              </b-card>
              <b-card
                style="font-weight: inherit;
                font-size: small"
                v-bind="info">

                <b-card-text class="small text-muted">数据信息 Data Information</b-card-text>
                <p style="font-weight: bolder; font-size: x-large" >{{info.dataName}}</p>
                <p>
                  采集时间：{{info.date}}<br>
                  数据评分：{{info.score}}<br>
                  浏览量：{{info.views}}<br>
                  收藏量：{{info.collection}}<br>
                  数据大小：{{info.dataSize}} {{info.kind}}<br>
                </p>
              </b-card>
          </b-col>
<!--          标签表图-->
          <b-col col lg="6">
            <b-card>
<!--              <b-card-text class="small text-muted">数据标签 Data Label</b-card-text>-->
              <div id="labelChart" :style="{width: '380px', height: '380px'}"></div>
            </b-card>
          </b-col>
        </b-row>
        <b-card style="margin-top: 20px">
          <div id="priceChart" :style="{width: '800px', height: '450px'}"></div>
        </b-card>
      </b-container>
    </b-card>
  </div>
</template>

<script>
export default {
  name:"Result",
  data(){
    return{
      result:{
        price:2.0,
        rize:0.12,
        decline:0.08,
        average:11.8
      },
      info:{
        score:3.0,
        views:90,
        collection:2,
        kind:'KB',
        dataSize:12,
        dataName:'天气预报',
        date:"2022年7月"
      }
    }
  },
  mounted(){
    this.drawLabel();
    this.drawPrice();
  },
  methods: {
    drawLabel(){
      // 基于准备好的dom，初始化echarts实例
      let labelChart = this.$echarts.init(document.getElementById('labelChart'))
      // 绘制图表
      var option;

      option = {
        backgroundColor: '#ffffff',
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ],
            roseType: 'angle',
            label: {
              normal: {
                textStyle: {
                  color: 'rgb(31,38,56)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(31,38,56)'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#436cc2',
                shadowBlur: 200,
                shadowColor: 'rgb(179,179,236)'
              }
            }
          }
        ]
      };
      option && labelChart.setOption(option);
    },
    drawPrice(){
      let priceChart = this.$echarts.init(document.getElementById('priceChart'))
      // 绘制图表
      var app = {};
      var option;
      option = {
        backgroundColor: '#ffffff',
        title: {
          text: '动态数据',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {
          data:['最新成交价', '预购队列']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: (function (){
              var now = new Date();
              var res = [];
              var len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                now = new Date(now - 2000);
              }
              return res;
            })()
          },
          {
            type: 'category',
            boundaryGap: true,
            data: (function (){
              var res = [];
              var len = 10;
              while (len--) {
                res.push(10 - len - 1);
              }
              return res;
            })()
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: '预购队列',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#4784e0',
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function (){
              var res = [];
              var len = 10;
              while (len--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })()
          },
          {
            name: '最新成交价',
            type: 'line',
            itemStyle: {
              normal: {
                color: '#91c243',
              }
            },
            data: (function (){
              var res = [];
              var len = 0;
              while (len < 10) {
                res.push((Math.random()*10 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })()
          }
        ]
      };
      app.count = 11;
      setInterval(function (){
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);

        priceChart.setOption(option);
      }, 2100);

      option && priceChart.setOption(option);
    }
  }

}
</script>

<style scoped>
.card_center{
  width: 1000px;
  height: auto;
  align-content: center ;
  margin-left: 150px;
  margin-right: 150px;
}
.hr{
  position: relative;
  margin: 0 auto;
  width: 180px;
  height: 1px;
  background-color: #d4d4d4;
  text-align: center;
  font-size: 16px;
  color: rgba(101, 101, 101, 1);
}
</style>
