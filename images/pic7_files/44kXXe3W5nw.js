if (self.CavalryLogger) { CavalryLogger.start_js(["riBDY"]); }

__d("ChatSidebarGroupCreateButtonReact.bs",["cx","fbt","bs_block","bs_curry","React","gkx","LinkReact.bs","ReasonReact.bs","joinClasses","bs_js_primitive","MessengerGroupCreateDialogReact.bs","XWorkSaveGroupPurposeController","MessengerGroupCreationEntryPoint","WorkSyncedGroupCreationEntryPoint"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").reducerComponent("ChatSidebarGroupCreateButtonReact"),j=b("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function k(a){var c=a[1];if(c)return b("ReasonReact.bs").element(undefined,undefined,b("MessengerGroupCreateDialogReact.bs").make(j,!0,function(){return b("bs_curry")._1(a[3],1)},[]));else return null}function l(a,c){__p&&__p();return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(c){var d=h._("Cr\u00e9er un groupe"),e=b("gkx")("678625");e=e?[b("XWorkSaveGroupPurposeController").getURIBuilder().setString("purpose","work_team").setString("ref",b("WorkSyncedGroupCreationEntryPoint").GROUP_CREATION_ICON_ON_CHAT_SIDEBAR).setBool("back_disallowed",!0).getURI(),function(){return 0},"dialog"]:["#",function(){return b("bs_curry")._1(c[3],0)},""];var f="_1-4-";f=a!==undefined?b("joinClasses")(f,a):f;return b("React").createElement("div",{className:"_46fv"},k(c),b("ReasonReact.bs").element(undefined,undefined,b("LinkReact.bs").make(undefined,undefined,d,f,undefined,"tooltip",d,undefined,"below",e[0],undefined,e[1],undefined,undefined,undefined,e[2],undefined,undefined,undefined,undefined,[])))},function(){return!1},i[10],function(c,a){if(c)return b("bs_block").__(0,[!1]);else return b("bs_block").__(0,[!0])},i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return l(b("bs_js_primitive").nullable_to_opt(a.className),[])});f.component=i;f.entryPoint=j;f.renderDialog=k;f.make=l;f.jsComponent=a}),null);
__d("ChatSidebarComposeLink.react",["fbt","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","Link.react","MessengerState.bs","React","TooltipData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a)}a.prototype.render=function(){var a=g._("Nouveau message");return b("React").createElement(b("Link.react"),babelHelpers["extends"]({label:a,className:this.props.className,href:"#",onClick:this.$1},b("TooltipData").propsFor(a,"below")))};a.prototype.$1=function(a){var c=b("MessengerState.bs").createNewLocalThreadGenerateID(b("CurrentUser").getID());b("FantaTabActions").openNewMessageTab(c,"compose_link");b("ChatOpenTabEventLogger").logClickOpen("sidebar",c);a.preventDefault()};e.exports=a}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["ChatSidebarGroupCreateButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("ChatSidebarGroupCreateButtonReact.bs").jsComponent;e.exports=a}),null);