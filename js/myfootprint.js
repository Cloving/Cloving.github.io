var data = [
    {name: '成都', value: 200},
    {name: '西安', value: 200},
    {name: '青城山', value: 120},
    {name: '都江堰', value: 120},
    {name: '重庆', value: 200},
    {name: '长沙', value: 200},
    {name: '华山', value: 120},
    {name: '平遥', value: 120},
    {name: '灵石', value: 120},
    {name: '徐州', value: 120},
    {name: '宿迁', value: 120},
    {name: '上海', value: 200},
    {name: '南京', value: 200},
    {name: '滁州', value: 120},
    {name: '淮南', value: 120},
    {name: '蚌埠', value: 120},
    {name: '合肥', value: 200},
    {name: '中庙', value: 120},
    {name: '芜湖', value: 120},
    {name: '广州', value: 200},
    {name: '顺德', value: 120},
];
var geoCoordMap = {
   '成都':[104.06,30.67],
   '西安':[108.95,34.27],
   '青城山':[103.57, 30.90],
   '都江堰':[103.61,30.98],
   '重庆':[106.56,29.56],
   '长沙':[113,28.21],
   '华山':[110.08,34.47],
   '平遥':[112.18,37.20],
   '灵石':[111.77,36.88],
   '徐州':[117.2,34.26],
   '宿迁':[118.3,33.96],
   '上海':[121.48,31.22],
   '南京':[118.78,32.04],
   '滁州':[118.31,32.31],
   '淮南':[117.01,32.64],
   '蚌埠':[117.37,32.92],
   '合肥':[117.27,31.86],
   '中庙':[117.47,31.59],
   '芜湖':[118.38,31.33],
   '广州':[113.23,23.16],
   '顺德':[113.28,22.81],
};

var convertData = function (data) {
   var res = [];
   for (var i = 0; i < data.length; i++) {
       var geoCoord = geoCoordMap[data[i].name];
       if (geoCoord) {
           res.push({
               name: data[i].name,
               value: geoCoord.concat(data[i].value)
           });
       }
   }
   return res;
};


myChart.setOption(option = {
   title : {
       text: '',
       subtext: '',
       left: 'center',
       top: 'top',
       textStyle: {
           color: '#fff'
       }
   },
   tooltip: {},
   backgroundColor: {
       type: 'linear',
       x: 0,
       y: 0,
       x2: 1,
       y2: 1,
       colorStops: [{
           offset: 0, color: '#0f2c70' // 0% 处的颜色
       }, {
           offset: 1, color: '#091732' // 100% 处的颜色
       }],
       globalCoord: false // 缺省为 false
   },
   geo: {
       map: 'china',
       show: true,
       roam: true,
       label: {
           emphasis: {
               show: false
           }
       },
       itemStyle: {
           normal: {
               areaColor: '#091632',
               borderColor: '#3B5077',
               // shadowColor: '#1773c3',
               // shadowBlur: 20
           },
           emphasis: {
                areaColor: '#3CB371',
           }
       }
   },
   series: [
       {
           name: '',
           type: 'effectScatter',
           coordinateSystem: 'geo',
           data: convertData(data),
           symbolSize: function (val) {
               return val[2] / 20;
           },
           showEffectOn: 'render',
           rippleEffect: {
               brushType: 'stroke'
           },
           hoverAnimation: true,
           label: {
               normal: {
                   formatter: '{b}',
                   position: 'right',
                   show: false
               }
           },
           itemStyle: {
               normal: {
                   color: '#ff4500',
                   shadowBlur: 10,
                   shadowColor: '#333'
               }
           },
           zlevel: 1
       }
   ]
});