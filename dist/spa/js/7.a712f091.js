(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{3487:function(e,t,a){"use strict";var s=a("efb5"),i=a.n(s);i.a},3602:function(e,t,a){"use strict";var s=a("603e"),i=a.n(s);i.a},"3ef3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition-group",{staticClass:"row",attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},e._l(e.lprData,(function(t){return a("q-card",{key:t.id,staticClass:"lpr-card q-mt-md q-mb-md"},[a("card-plateNumber",{attrs:{lprPlateNumber:t.plate_number}}),a("div",{staticClass:"row lprImages"},[a("card-image",{attrs:{lprImages:t,moduleName:e.moduleName,deviceNumber:"device_one"}}),a("q-separator",{staticClass:"q-mx-xs",attrs:{vertical:"",inset:""}}),a("card-image",{attrs:{lprImages:t,moduleName:e.moduleName,deviceNumber:"device_two"}})],1),a("div",{staticClass:"row lpr-data"},[a("card-data",{attrs:{moduleName:e.moduleName,deviceNumber:"device_one",lprData:t}}),a("card-data",{attrs:{moduleName:e.moduleName,deviceNumber:"device_average",lprData:t}}),a("card-data",{attrs:{moduleName:e.moduleName,deviceNumber:"device_two",lprData:t}})],1),a("card-actions",{attrs:{moduleName:e.moduleName,lprData:t}})],1)})),1)},i=[],r={props:["lprData","moduleName"],data(){return{}},components:{"card-plateNumber":a("8f1e").default,"card-image":a("9e7a").default,"card-data":a("893e").default,"card-actions":a("919e").default},methods:{},mounted(){},computed:{}},d=r,n=(a("3602"),a("2877")),o=a("f09f"),l=a("eb85"),c=a("eebe"),u=a.n(c),p=Object(n["a"])(d,s,i,!1,null,null,null);t["default"]=p.exports;u()(p,"components",{QCard:o["a"],QSeparator:l["a"]})},"437d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-md"},[a("tool-bar",{attrs:{moduleName:e.moduleName}}),a("q-scroll-area",{staticClass:"q-scroll-area-matching",style:e.averageSpeedData.length>0?"background-color:#e5e5e5":""},[e.averageSpeedData.length?a("average-speed-card",{staticClass:"matching-card  q-mt-md q-gutter-lg",attrs:{moduleName:e.moduleName,lprData:e.averageSpeedData}}):e._e()],1),a("pagination",{attrs:{paginationData:e.paginationData},on:{updateCurrentPage:e.setAverageSpeedPagination}})],1)},i=[],r=a("ded3"),d=a.n(r),n=a("2f62"),o={data(){return{moduleName:"average-speed-module"}},components:{"tool-bar":a("5bd4").default,"average-speed-card":a("3ef3").default,"no-data":a("28d6").default,loading:a("c5e0").default,pagination:a("f836").default},watch:{autoUpdateTransits:function(e,t){e&&(this.$socket.emit("join","average-speed-module"),this.sendMetaData(!0),this.listenToAverageSpeedHub()),e||(this.$socket.emit("leave","average-speed-module"),this.stopListenToAverageSpeedHub())},paginationLimit:function(e,t){e&&this.updateTransits&&this.sendMetaData()},paginationPage:function(e,t){e&&this.updateTransits&&this.sendMetaData()},speedLimit:function(e,t){e&&this.updateTransits&&(console.log("speed limit changed",this.filters),this.sendMetaData())},confirmed:function(e,t){e&&this.updateTransits&&(console.log("confirmed changed",this.filters),this.sendMetaData())}},methods:d()(d()(d()(d()({},Object(n["b"])("devices",["getDevices"])),Object(n["b"])("averageSpeed",["getAverageSpeedSettings"])),Object(n["b"])("averageSpeedResult",["getAverageSpeedResults","getAverageSpeedDistinctDates","setAverageSpeedPagination","setUpdateAverageSpeedTransits","updateAverageSpeedResults","setDeviceFilter"])),{},{sendMetaData(e){let t=d()({},this.pagination);e&&(t.page=1),this.$socket.emit("meta_update",{pagination:t,filters:{speedFilter:this.speedLimit,confirmedFilter:this.confirmed}})},listenToAverageSpeedHub(){console.log("listning to Average Speed Hub "),this.sockets.subscribe("average_speed_transits",e=>{this.updateAverageSpeedResults(e)})},stopListenToAverageSpeedHub(){console.log("Stop listning to Average Speed Hub"),this.sockets.unsubscribe("average_speed_transits")}}),mounted(){this.getAverageSpeedDistinctDates(),this.getAverageSpeedSettings(),setTimeout(()=>{this.setDeviceFilter(this.moduleActiveDevices)},1500)},destroyed(){this.$socket.emit("leave","average-speed-module")},computed:d()(d()(d()(d()({},Object(n["d"])("averageSpeedResult",["pagination","filters","updateTransits","lprDataDownloaded"])),Object(n["c"])("averageSpeedResult",["paginationData","sortedTransits","updateAverageSpeedTransits"])),Object(n["c"])("devices",["getAverageSpeedActiveTraps"])),{},{autoUpdateTransits:{get(){return this.updateAverageSpeedTransits},set(e){this.setUpdateAverageSpeedTransits(e)}},averageSpeedData(){return this.sortedTransits},moduleActiveDevices(){return this.getAverageSpeedActiveTraps},paginationLimit(){return this.pagination.limit},paginationPage(){return this.pagination.page},speedLimit(){return this.filters.speed.isActive?this.filters.speed.data:"0"},confirmed(){return this.filters.confirmed.isActive?"true":"false"}})},l=o,c=(a("3487"),a("2877")),u=a("9989"),p=a("4983"),m=a("eebe"),g=a.n(m),v=Object(c["a"])(l,s,i,!1,null,null,null);t["default"]=v.exports;g()(v,"components",{QPage:u["a"],QScrollArea:p["a"]})},"603e":function(e,t,a){},efb5:function(e,t,a){}}]);