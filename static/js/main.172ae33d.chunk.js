(this["webpackJsonpnotes-react-app"]=this["webpackJsonpnotes-react-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),l=a.n(r),s=(a(13),a(1)),c=a(2),o=a(3),d=a(4),u=(a(14),a(15),a(16),a(7)),m=a.n(u),h=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"current-notes-body"},this.props.AllData.map((function(t){var a=t.title,n=t.data,r=t.time,l=t._id;return i.a.createElement("div",{className:"archive-note-with-buttons",key:l},i.a.createElement("div",null,i.a.createElement("div",{className:"title-wrapper"},i.a.createElement(m.a,{highlightClassName:"title-data",searchWords:[e.props.search],autoEscape:!0,textToHighlight:a})),i.a.createElement("hr",null),i.a.createElement("div",{className:"archive-data"},n),i.a.createElement("div",{className:"archive-time"},r)),i.a.createElement("div",{className:"edit-delete-wrapper"},i.a.createElement("span",{className:"edit-button"},i.a.createElement("img",{src:"https://img.icons8.com/cotton/64/000000/edit--v1.png",alt:"edit-icon",className:"edit-button-img",onClick:function(t){return e.props.editFunc(t)},id:l})),i.a.createElement("span",{className:"delete-button"},i.a.createElement("img",{src:"https://img.icons8.com/fluent/48/000000/delete-sign.png",alt:"delete-icon",className:"delete-button-img",onClick:function(t){return e.props.deleteFunc(t)},id:l}))))})))}}]),a}(i.a.Component),p=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSearchChange=function(e){if(""!==e.target.value){var t=n.state.temp.filter((function(t){return t.title.includes(e.target.value)}));n.setState({search:e.target.value,AllData:t})}else{var a=n.state.temp;n.setState({search:"",AllData:a})}},n.handleDataChange=function(e){n.setState({data:e.target.value})},n.handleTitleChange=function(e){n.setState({title:e.target.value})},n.save=function(){if(n.state.edit&&""!==n.state.data&&""!==n.state.title){var e=n.state.temp,t=e.findIndex((function(e){return e.id===parseInt(n.state.id)}));e[t].title=n.state.title,e[t].data=n.state.data,e[t].time=n.state.time,e[t].edit=!1,n.setState({temp:e,AllData:e}),n.clearNotesArea()}else if(""!==n.state.data&&""!==n.state.title){var a=n.state.id;a+=1;var i={title:n.state.title,data:n.state.data,time:(new Date).toLocaleString().replace(",","").replace(/:.. /," "),id:a},r=[];(r=n.state.temp).unshift(i),n.setState({AllData:r,temp:r,id:a}),n.clearNotesArea()}},n.clearNotesArea=function(){n.setState({title:"",data:"",time:"",edit:!1})},n.editFunc=function(e){var t=n.state.temp.findIndex((function(t){return t.id===parseInt(e.target.id)})),a=n.state.temp[t];n.setState({search:"",title:a.title,data:a.data,time:a.time,id:a.id,edit:!0})},n.deleteFunc=function(e){if(!n.state.edit){var t=n.state.temp.findIndex((function(t){return t.id===parseInt(e.target.id)})),a=n.state.temp;a.splice(t,1),n.setState({search:"",temp:a,AllData:a})}},n.state={temp:[],search:"",title:"",edit:!1,data:"",time:"",id:0,AllData:[]},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"add-note-container"},i.a.createElement("h3",null,"Kanishk's Notes"),i.a.createElement("div",{className:"search-wrapper"},i.a.createElement("textarea",{placeholder:"Search by Title...",className:"search-bar",value:this.state.search,onChange:this.handleSearchChange})),i.a.createElement("textarea",{placeholder:"Title...",className:"enter-title",value:this.state.title,onChange:this.handleTitleChange}),i.a.createElement("textarea",{placeholder:"Enter your note here...",className:"enter-text",value:this.state.data,onChange:this.handleDataChange}),i.a.createElement("span",{onClick:this.save,className:"save-button"},"SAVE")),i.a.createElement(h,{search:this.state.search,AllData:this.state.AllData,deleteFunc:this.deleteFunc,editFunc:this.editFunc}))}}]),a}(i.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.172ae33d.chunk.js.map