<template>
  <div>
    <!-- <button @click="getGraph" style="width:100px height:100px;">zzz</button> -->
    <canvas class="hidden-xs-only" ref="mixChart" id="mixChart" width="400" height="300"></canvas>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

function getDateRange(startDate, endDate, listDate) {
  if(startDate > endDate) {
    let temp; 
    temp = startDate;
    startDate = endDate;
    endDate = temp;
  }

  var dateMove = new Date(startDate);
  var strDate = startDate;
  if (startDate == endDate) {
    var strDate = dateMove.toISOString().slice(0, 10);
    listDate.push(strDate);
  } else {
    while (strDate < endDate) {
      var strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    }
  }
  return listDate;
}

function getDateItem(range, data){
  let arr = new Array();
  for (let i = 0; i< range.length;i++){
    arr.push(0)
  }
  
  for (let i = 0; i< range.length;i++){
    for (let j = 0; j< data.length;j++){
      if (range[i] === data[j]){
        arr[i] += 1;
      }
    }
  }
  return arr;
}

export default {
  data() {
    return {
      labelData: [],
      data: [],
      maxheight: '',
    };
  },
  methods: {
    setdate(date) {
      const startdate = moment(date[date.length - 1].committed_date).format(
        "YYYY-MM-DD"
      );
      const enddate = moment(date[0].committed_date).format("YYYY-MM-DD");
      let listDate = [];
      getDateRange(startdate, enddate, listDate);
      // console.log(listDate);
      this.labelData = listDate;


      let curDate = [];
      date.forEach(item => {
        const ce = moment(item.committed_date).format("YYYY-MM-DD");
        curDate.push(ce);
      })
      console.log(curDate)
      curDate.sort();
      this.data = getDateItem(listDate, curDate);
      this.maxheight = Math.max(...this.data);
    },
    getGraph() {
      var ctx = this.$refs.mixChart.getContext("2d");
      var chart = new this.$_Chart(ctx, {
        type: "bar",
        data: {
          labels: this.labelData,
          datasets: [
            {
              label: "Bar Dataset",
              data: this.data,
            },
            {
              label: "Line Dataset",
              data: this.data,
              type: "line",
              backgroundColor : "rgba(0,0,0,0)",
              borderColor : "#f00",
              lineTension : 0
            }
          ]
        },
        options : {
          scales: {
              yAxes: [{
                ticks: {
                max: this.maxheight + 1,
                min: 0,
                stepSize: 1
            }
              }]
            }   
          },
      });
    },
  },

  computed: {
    returnlabel() {
      return this.labelData;
    }
  },
  created() {
    axios
      .get("https://lab.ssafy.com/api/v4/projects/6076/repository/commits?private_token=MXg2sbAb2e_B2UuKVGcW&all=true&per_page=1000")
      .then(response => {
        this.setdate(response.data);
        this.getGraph();
        })
      .catch(err => console.log(err));
  },
};
</script>

<style>
</style>
