if (self.CavalryLogger) { CavalryLogger.start_js(["9dhVi"]); }

__d("XSkywalkerOracleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/rti_skywalker_oracle/ajax/",{action:{type:"String"},payload_v2:{type:"StringToStringMap"},do_not_bump_ods:{type:"Bool",defaultValue:!1},topic:{type:"String"},topic_suffix:{type:"String"},elapsed_time_ms:{type:"Int"},num_failed:{type:"Int"},topic_set:{type:"StringSet"},e2e_test_name:{type:"String"},e2e_test_result:{type:"String"}})}),null);
__d("SkywalkerOracleManager",["AsyncRequest","Random","XSkywalkerOracleAsyncController","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();this.checkForSubscribe=function(){if(this.$10)this.testSync();else if(!this.$27)this.$1("rti_skywalker_oracle/"+this.$7,function(a){return this.onSelfPublishReceived(a)}.bind(this)),setTimeout(this.publishCheck,this.$14),setTimeout(this.checkForSubscribe,this.$13);else{var a=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","log_subscribe_failure"+this.$2);a=a.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).setErrorHandler(function(a){}).send()}}.bind(this),this.publishCheck=function(){this.$27=!0;var a={message:"skywalker_oracle subscribe check",start_time:Date.now().toString()};a=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","publish_v"+this.$2).setStringToStringMap("payload_v2",a).setString("topic_suffix",this.$7).setBool("do_not_bump_ods",!0);a=a.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).setErrorHandler(function(a){}).send()}.bind(this),this.$1=a,this.$6=new Set(),this.$8=1e3,this.$10=!1,this.$12=0,this.$19=new Map(),this.$20=new Map(),this.$17=[],this.$18=[],this.$21=0,this.$27=!1,this.$2=6}a.prototype.startOracle=function(){__p&&__p();if(b("gkx")("678786")){var a=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","config");a=a.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).setHandler(function(a){__p&&__p();if(a!=null&&a.payload!=null){this.$4=a.payload.additional_payload_size_bytes;this.$3=a.payload.allow_use;this.$5=a.payload.timeout_limit_ms;this.$9=a.payload.fbid;this.$11=a.payload.latency_outlier_threshold_ms;this.$13=a.payload.subscribe_failure_threshold_ms;this.$14=a.payload.subscribe_check_delay_ms;this.$17=a.payload.online_list;this.$23=a.payload.allow_leader;this.$24=a.payload.allow_follower;this.$26=a.payload.friend_publish_test_fanout;this.$25=a.payload.friend_publish_sync_fanout;this.$28=a.payload.first_subscribe_delay_ms;if(this.$3){this.$24&&(this.$15="rti_skywalker_oracle/"+this.$9+"_follower",this.$1(this.$15,function(a){return this.onReceiveFollower(a)}.bind(this)));this.$23&&(this.$16="rti_skywalker_oracle/"+this.$9+"_leader",this.$1(this.$16,function(a){return this.onReceiveLeader(a)}.bind(this)));a=this.$9+"_"+Date.now()+"_"+b("Random").random().toString(36).substring(2,12);this.$12=Date.now();this.$7=a;setTimeout(this.checkForSubscribe,this.$28)}}}.bind(this)).setErrorHandler(function(a){}).send()}};a.prototype.onSelfPublishReceived=function(a){__p&&__p();a=JSON.parse(a.payload);this.$10||(this.$10=!0);if(a.start_time==null)return;var c=Date.now();a=parseInt(a.start_time,10);c=c-a;if(c>this.$11)return;if(c>this.$13)return;a=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","log_subscribe_success"+this.$2).setInt("elapsed_time_ms",c);c=a.getURI();new(b("AsyncRequest"))().setURI(c.getPath()).setData(c.getQueryData()).setErrorHandler(function(a){}).send()};a.prototype.testSync=function(){if(!this.$23)return;var a={sender_fbid:this.$9,action:"sync_request"};for(var c=0;c<this.$25;c++)this.$18.push("rti_skywalker_oracle/"+this.$17[c]+"_follower");c=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","publish_to_set").setStringToStringMap("payload_v2",a).setStringSet("topic_set",this.$18);a=c.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).send()};a.prototype.onReceiveFollower=function(a){__p&&__p();if(!this.$24)return;a=JSON.parse(a.payload);if(a.action=="sync_request"){var c="rti_skywalker_oracle/test_"+this.$9+"_"+a.sender_fbid+"_"+Date.now()+b("Random").random().toString(36).substring(2,8);this.$22=c;this.$1(this.$22,function(a){return this.onReceiveFriendPublishTest(a)}.bind(this));c={sender_fbid:this.$9,testing_topic:this.$22,action:"sync_response"};c=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","publish_v"+this.$2).setStringToStringMap("payload_v2",c).setString("topic","rti_skywalker_oracle/"+a.sender_fbid+"_leader");a=c.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).setErrorHandler(function(a){}).send()}};a.prototype.onReceiveLeader=function(a){__p&&__p();if(!this.$23)return;a=JSON.parse(a.payload);if(a.action=="sync_response"&&this.$21<this.$26){this.$21++;var c={sender_fbid:this.$9,action:"basic_receive_test"};this.$1(a.testing_topic,function(a){return this.onReceiveFriendPublishTest(a)}.bind(this));this.$19.set(a.testing_topic,!1);this.$20.set(a.testing_topic,"basic_receive_test");setTimeout(this.checkForFailedTests.bind(this,a.testing_topic),this.$5*2);c=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","publish_v"+this.$2).setStringToStringMap("payload_v2",c).setString("topic",a.testing_topic);a=c.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).setErrorHandler(function(a){}).send()}};a.prototype.onReceiveFriendPublishTest=function(a){var c=JSON.parse(a.payload);if(c.sender_fbid!=this.$9)if(c.action=="basic_receive_test"){var d={sender_fbid:this.$9,action:"basic_receive_test_publish"};d=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","publish_v"+this.$2).setStringToStringMap("payload_v2",d).setString("topic",this.$22);d=d.getURI();new(b("AsyncRequest"))().setURI(d.getPath()).setData(d.getQueryData()).setErrorHandler(function(a){}).send()}else c.action=="basic_receive_test_publish"&&this.$19.set(a.topic,!0)};a.prototype.checkForFailedTests=function(a){var c=this.$20.get(a);a=this.$19.get(a);c=b("XSkywalkerOracleAsyncController").getURIBuilder().setString("action","log_e2e_test_v1").setString("e2e_test_name",c).setString("e2e_test_result",a?"success":"failure");a=c.getURI();new(b("AsyncRequest"))().setURI(a.getPath()).setData(a.getQueryData()).setErrorHandler(function(a){}).send()};a.prototype.setParamVersion=function(a){this.$2=a};a.prototype.getParamVersion=function(){return this.$2};a.prototype.setTopic=function(a){this.$7=a};a.prototype.getTopic=function(){return this.$7};a.prototype.setTimeoutLimitMs=function(a){this.$5=a};a.prototype.getTimeoutLimitMs=function(){return this.$5};a.prototype.setTimeoutCheckDelayMs=function(a){this.$8=a};a.prototype.getTimeoutCheckDelayMs=function(){return this.$8};a.prototype.getPublishedTimes=function(){return this.$6};a.prototype.setFirstPublishReceived=function(a){this.$10=a};a.prototype.setSubscribeFailureThresholdMs=function(a){this.$13=a};a.prototype.getSubscribeFailureThresholdMs=function(){return this.$13};a.prototype.setSubscribeCheckDelayMs=function(a){this.$14=a};a.prototype.getSubscribeCheckDelayMs=function(){return this.$14};a.prototype.setTimeOfSubscribe=function(a){this.$12=a};a.prototype.getTimeOfSubscribe=function(){return this.$12};a.prototype.setLatencyOutlierThresholdMs=function(a){this.$11=a};a.prototype.getLatencyOutlierThresholdMs=function(){return this.$11};a.prototype.setFbid=function(a){this.$9=a};a.prototype.getFbid=function(){return this.$9};a.prototype.setAllowLeader=function(a){this.$23=a};a.prototype.getAllowLeader=function(){return this.$23};a.prototype.setAllowFollower=function(a){this.$24=a};a.prototype.getAllowFollower=function(){return this.$24};a.prototype.addOnlineFriendIDs=function(a){a.forEach(function(a){this.$17.push(a)}.bind(this))};a.prototype.getOnlineFriendIDs=function(){return this.$17};a.prototype.setTestTopicToResult=function(a,b){this.$19.set(a,b)};a.prototype.getTestTopicToResult=function(a){return this.$19.get(a)};a.prototype.setTestTopicToTestType=function(a,b){this.$20.set(a,b)};e.exports=a}),null);