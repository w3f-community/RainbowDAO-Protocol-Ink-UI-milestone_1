(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-297b6c62"],{"159b":function(t,s,a){var e=a("da84"),i=a("fdbc"),r=a("17c2"),o=a("9112");for(var c in i){var n=e[c],l=n&&n.prototype;if(l&&l.forEach!==r)try{o(l,"forEach",r)}catch(p){l.forEach=r}}},"17c2":function(t,s,a){"use strict";var e=a("b727").forEach,i=a("a640"),r=i("forEach");t.exports=r?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,s,a){"use strict";var e=a("23e7"),i=a("b727").filter,r=a("1dde"),o=r("filter");e({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"52ca":function(t,s,a){},5530:function(t,s,a){"use strict";a.d(s,"a",(function(){return r}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function e(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}function i(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,e)}return a}function r(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?i(Object(a),!0).forEach((function(s){e(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}},"9f6a0":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAopJREFUeF7tmjuLFEEQgL/aWxCFk71FEAQTAw0MRNDERCP/gHgoaKAIgrkYaqy5yEVGHpx4gSaCiL/guEjBWDDxsaOICuqVtLfBsngzPduPme3pTae7dr6vq7rmJXT8Jx3nJwvIGdBxA7kEOp4AeRPMJZBLoOMGcgl0PAFyF0iqBL6qHvkN13pwdAve9WBjILJSluXJCChUzwP3FfZNAiusDEWu7yQhCQEGXmGtBPLEQGTjf8fnXkAVvIFWuDsUuZWcABv4MfT6ksi5pATUgDfcV5ZEHiYjoA68wIuByNlkNsE68MDrPiwvirxJQoBveCNlbrpACPi5ERAKfi4EhIS3EjBSvQpcBg4DawvwYK/I2xh3kaHhKwUUqqsKFyZhBT4CNwYij0NKiAFfKmCkehu4U9I+lkNJiAVfKuCz6iOBixW3kt4lxIR3FjAO4E1CbHinEpjaF5wlNAFfuQmOVF8BZ2w2O4GZJTQFXynADAgtoUl4KwEhJTQNby0ghIQ2wNcS4FNCW+BrC/AhoU3wMwlwkdA2+JkFzCLBzCl7dD3Vaiuf5Ni0ZpsxTg9E6rRIm5MZj4kG75QB/1ZUtVfAS9uLJQsJUeGdBYwl7CrguQcJ0eG9CDBBPqgu9uGpg4RG4L0JMIG+qA63YB04bZHqk0Mag/cqwAT7prr/17aEU5YSGoX3LsAE/KR6cAGeKJyskNA4fBABJmiheki3M+HYDhJaAR9MgAlsvtb4A6vA8SkJm324VPa6yrJ8vAxzuhCqOoP3qnt2w03AfL3xE3j2A+4dEPleNTfW8aACYkG4/E8W4GIvhbk5A1JYRReGnAEu9lKYmzMghVV0YcgZ4GIvhbk5A1JYRReGzmfAX1ayPVAaIhhnAAAAAElFTkSuQmCC"},a281:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"proposalDetail"},[e("rainbow-nav-new"),e("div",{staticClass:"detail-content"},[e("div",{staticClass:"rainbow-panel part1"},[e("div",{staticClass:"left"},[e("div",{staticClass:"content"},[t._v(" "+t._s(t.proposal.title)+" ")]),e("div",{staticClass:"status-box"},[e("div",{staticClass:"status"},[t._v(" "+t._s(t.proposal.state)+" ")]),e("div",{staticClass:"date"},[t._v(" active block:"+t._s(t.proposal.startBlock)+" ~"+t._s(t.proposal.endBlock)+" ")])])]),e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[t._v(" My votes ")]),e("div",{staticClass:"number"},[t._v(" "+t._s(t.myVotes)+" ")]),e("div",{staticClass:"btn-box"},[e("div",{staticClass:"support",on:{click:t.delegate}},[t._v(" delegate ")]),e("div",{staticClass:"support",on:{click:function(s){return t.castVote(!0)}}},[t._v(" Support ")]),e("div",{staticClass:"Refuse",on:{click:function(s){return t.castVote(!1)}}},[t._v(" Refuse ")])])])]),e("div",{staticClass:"part2"},[e("div",{staticClass:"rainbow-panel left-part"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title-box"},[e("div",{staticClass:"title"},[t._v(" Support ")]),e("div",{staticClass:"address"},[t._v(" "+t._s(t.proposal.supportArr.length)+" Address ")])]),e("div",{staticClass:"vote-number"},[e("div",{staticClass:"number"},[t._v(" "+t._s(t.proposal.forVotes)+" ")]),t._m(0)]),e("div",{staticClass:"members"},t._l(t.proposal.supportArr,(function(s,a){return e("div",{key:a,staticClass:"member-item"},[t._m(1,!0),e("div",{staticClass:"name"},[t._v(" "+t._s(s.address)+" ")]),e("div",{staticClass:"number"},[t._v(" "+t._s(s.votes)+" ")])])})),0),e("div",{staticClass:"more-btn",on:{click:function(s){t.isShowMembers=!0}}},[t._v(" MORE ")])]),e("div",{staticClass:"right"},[e("div",{staticClass:"title-box"},[e("div",{staticClass:"title"},[t._v(" Refuse ")]),e("div",{staticClass:"address"},[t._v(" "+t._s(t.proposal.refuseArr.length)+" Address ")])]),e("div",{staticClass:"vote-number"},[e("div",{staticClass:"number"},[t._v(" "+t._s(t.proposal.againstVotes)+" ")]),t._m(2)]),e("div",{staticClass:"members"},t._l(t.proposal.refuseArr,(function(s,a){return e("div",{key:a,staticClass:"member-item"},[t._m(3,!0),e("div",{staticClass:"name"},[t._v(" "+t._s(s.address)+" ")]),e("div",{staticClass:"number"},[t._v(" "+t._s(s.votes)+" ")])])})),0),e("div",{staticClass:"more-btn",on:{click:function(s){t.isShowMembers=!0}}},[t._v(" MORE ")])])]),e("div",{staticClass:"rainbow-panel right-part"},[e("div",{staticClass:"title"},[t._v(" Timeline ")]),e("div",{staticClass:"step-box"},[e("div",{staticClass:"step"},[e("div",{staticClass:"icon",class:{active:t.statusIndex>0}},[e("img",{attrs:{src:a("9f6a0"),alt:""}})]),e("div",{staticClass:"name"},[t._v(" Establish ")]),e("div",{staticClass:"date"},[t._v(" "+t._s(t.proposal.startBlock)+" block ")])]),e("div",{staticClass:"step"},[e("div",{staticClass:"icon",class:{active:t.statusIndex>1}},[e("img",{attrs:{src:a("9f6a0"),alt:""}})]),e("div",{staticClass:"name"},[t._v(" Voting period ")]),e("div",{staticClass:"date"},[t._v(" "+t._s(t.proposal.endBlock)+"block ")])]),e("div",{staticClass:"step"},[e("div",{staticClass:"icon",class:{active:t.statusIndex>2}},[e("img",{attrs:{src:a("9f6a0"),alt:""}})]),e("div",{staticClass:"name"},[t._v(" Publicity period ")]),e("div",{staticClass:"date"})]),e("div",{staticClass:"step"},[e("div",{staticClass:"icon",class:{active:t.statusIndex>3}},[e("img",{attrs:{src:a("9f6a0"),alt:""}})]),e("div",{staticClass:"name"},[t._v(" Publicity period ")]),e("div",{staticClass:"date"})]),e("div",{staticClass:"step"},[e("div",{staticClass:"icon",class:{active:t.statusIndex>4}},[e("img",{attrs:{src:a("9f6a0"),alt:""}})]),e("div",{staticClass:"name"},[t._v(" Finished ")]),e("div",{staticClass:"date"})])])])]),e("div",{staticClass:"rainbow-panel part3"},[e("div",{staticClass:"title"},[t._v(" Details ")]),e("div",{staticClass:"part3-content"},[t._v(" "+t._s(t.proposal.desc)+" ")])])]),e("page-footer"),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMembers,expression:"isShowMembers"}],staticClass:"rainbow-dialog-box"},[e("div",{staticClass:"mask",on:{click:function(s){t.isShowMembers=!1}}}),e("div",{staticClass:"rainbow-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"title-box"},[e("div",{staticClass:"title"},[t._v(" All Members ")]),e("div",{staticClass:"address"},[t._v(" "+t._s(t.proposal.forVotes)+" ")])]),e("div",{staticClass:"vote-number"},[e("div",{staticClass:"number"},[t._v(" "+t._s(t.proposal.forVotes)+" ")]),t._m(4)]),e("div",{staticClass:"members"},t._l(t.proposal.receiptsArr,(function(s,a){return e("div",{key:a,staticClass:"member-item"},[t._m(5,!0),e("div",{staticClass:"name"},[t._v(" "+t._s(s.address)+" ")]),e("div",{staticClass:"number"},[t._v(" "+t._s(s.votes)+" ")])])})),0)])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"number-line"},[a("div",{staticClass:"active-number"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon"},[a("img",{attrs:{src:"",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"number-line"},[a("div",{staticClass:"active-number"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon"},[a("img",{attrs:{src:"",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"number-line"},[a("div",{staticClass:"active-number"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"icon"},[a("img",{attrs:{src:"",alt:""}})])}],r=a("5530"),o=(a("ac1f"),a("5319"),a("2f62")),c={name:"proposalDetail",data:function(){return{proposal:{},isShowMembers:!1,statusIndex:0,myVotes:0,blockNumber:0}},computed:Object(r["a"])({},Object(o["b"])(["account","isConnected"])),watch:{isConnected:function(){this.getData()}},mounted:function(){var t=this;if(console.log(this.$route.params),this.proposal=this.$route.params,this.proposal.forVotes=this.proposal.forVotes.replace(/,/g,"")/Math.pow(10,18),this.proposal.againstVotes=this.proposal.againstVotes.replace(/,/g,"")/Math.pow(10,18),this.proposal.receiptsArr=[],this.proposal.supportArr=[],this.proposal.refuseArr=[],this.proposal.receipts){for(var s in this.proposal.receipts)console.log(s),this.proposal.receipts[s].votes=this.proposal.receipts[s].votes.replace(/,/g,"")/Math.pow(10,18),this.proposal.receiptsArr.push(Object(r["a"])({address:s},this.proposal.receipts[s])),this.proposal.receipts[s].support?this.proposal.supportArr.push(Object(r["a"])({address:s},this.proposal.receipts[s])):this.proposal.refuseArr.push(Object(r["a"])({address:s},this.proposal.receipts[s]));console.log(this.proposal.receiptsArr)}switch(this.proposal.state){case"Active":this.statusIndex=1}this.getData(),this.$eventBus.$on("message",(function(s){t.getData()}))},beforeDestroy:function(){this.$eventBus.$on("message",(function(){}))},methods:{delegate:function(){this.$store.dispatch("erc20/delegate",this.account).then((function(t){console.log(t)}))},getData:function(){var t=this;this.$store.dispatch("erc20/getPriorVotes",this.proposal.startBlock).then((function(t){})),this.$store.dispatch("erc20/getCurrentVotes",this.account).then((function(s){s=s.replace(/,/g,""),t.myVotes=s/Math.pow(10,18)}))},castVote:function(t){this.$store.dispatch("proposal/castVote",{proposal_id:this.proposal.proposalId,support:t}).then((function(t){}))}}},n=c,l=(a("bcae"),a("2877")),p=Object(l["a"])(n,e,i,!1,null,"4adbb833",null);s["default"]=p.exports},b64b:function(t,s,a){var e=a("23e7"),i=a("7b0b"),r=a("df75"),o=a("d039"),c=o((function(){r(1)}));e({target:"Object",stat:!0,forced:c},{keys:function(t){return r(i(t))}})},bcae:function(t,s,a){"use strict";a("52ca")},dbb4:function(t,s,a){var e=a("23e7"),i=a("83ab"),r=a("56ef"),o=a("fc6a"),c=a("06cf"),n=a("8418");e({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var s,a,e=o(t),i=c.f,l=r(e),p={},v=0;while(l.length>v)a=i(e,s=l[v++]),void 0!==a&&n(p,s,a);return p}})},e439:function(t,s,a){var e=a("23e7"),i=a("d039"),r=a("fc6a"),o=a("06cf").f,c=a("83ab"),n=i((function(){o(1)})),l=!c||n;e({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,s){return o(r(t),s)}})}}]);
//# sourceMappingURL=chunk-297b6c62.d4e2196e.js.map