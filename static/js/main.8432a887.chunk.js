(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},25:function(e,a,t){},26:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),s=t.n(l),o=(t(25),t(26),t(2)),c=t.n(o),i=t(3),m=t(14),u=t(15),d=t(18),p=t(17),h=t(16),f=t.n(h),g={headers:{"Content-Type":"application/json"}},y=function(){var e=Object(i.a)(c.a.mark((function e(a,t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("https://api.raisely.com/v3/"+t,n,g).then((function(e){return e})).catch((function(e){return console.log(e),alert("Ran into a problem. Please try again after sometime."),"sorry"})));case 1:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),b=function(e){return y("post","check-user",e)},E=function(e){return y("post","signup",e)},v=function(e){return r.a.createElement("button",{type:e.type,className:e.className,onClick:e.handleClick},e.label)},w=t(19),N=function(e){var a=e.name,t=e.type,n=e.placeholder,l=e.onChange,s=e.className,o=e.value,c=e.error,i=(e.children,e.label);Object(w.a)(e,["name","type","placeholder","onChange","className","value","error","children","label"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:a},i),r.a.createElement("input",{id:a,name:a,type:t,placeholder:n,onChange:l,value:o,className:s,style:c&&{border:"solid 1px #f9acac"}}),c?r.a.createElement("p",{style:{color:" #ff4444"}},c):r.a.createElement("p",null,"\xa0"))};N.defaultProps={type:"text",className:""};var C=N,k=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={campaignUuid:"",data:{firstname:"",lastname:"",email:"",password:""},errors:{},submitted:!1},e.handleChange=function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})},e.onSubmit=Object(i.a)(c.a.mark((function a(){var t,n,r,l,s,o,i,m,u,d;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.state,n=t.campaignUuid,r=t.data,l=r.firstname,s=r.lastname,o=r.email,i=r.password,m=/\S+@\S+\.\S+/,u={},d={campaignUuid:n,data:{email:o}},l||(u.firstname="Enter your first name!"),s||(u.lastname="Enter your last name!"),o?m.test(o)||(u.email="Enter a valid email address!"):u.email="Enter your email address!",i.length<8&&(u.password="Password must be at least 8 characters!"),e.setState({errors:u}),console.log(u,Object.getOwnPropertyNames(u).length),0!==Object.getOwnPropertyNames(u).length){a.next=14;break}return console.log(d,"checkuser"),a.next=14,b(d).then((function(a){console.log(a.data.data.status,"res"),"sorry"!=a&&("EXISTS"==a.data.data.status?(u.email="Already exists. Please use any other email!",e.setState({errors:u}),console.log(e.state,"already exists",a)):"OK"==a.data.data.status&&(d.data.firstName=l,d.data.lastName=s,d.data.password=i,console.log(d,"check"),E(d).then((function(e){"sorry"!=e&&alert("Thank you for applying!"),console.log(e)})),e.setState({data:{firstname:"",lastname:"",email:"",password:""},submitted:!1,errors:{}}),console.log(e.state)))}));case 14:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a"})}},{key:"render",value:function(){var e=this.state,a=e.submitted,t=e.errors,n=e.data,l=n.firstname,s=n.lastname,o=n.email,c=n.password;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},a?r.a.createElement("span",null,"Welcome onboard, ",l,"!"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sign Up"),r.a.createElement("h6",null,"All the fields are required"),r.a.createElement(C,{label:"First Name",name:"firstname",type:"text",value:l,onChange:this.handleChange,placeholder:"Enter firstname...",error:t.firstname,required:!0,className:"input"}),r.a.createElement(C,{label:"Last Name",name:"lastname",type:"text",value:s,onChange:this.handleChange,placeholder:"Enter lastname...",error:t.lastname,required:!0,className:"input"}),r.a.createElement(C,{label:"Email",name:"email",type:"email",value:o,onChange:this.handleChange,placeholder:"Enter email...",error:t.email,required:!0,className:"input"}),r.a.createElement(C,{label:"Password",name:"password",type:"password",value:c,onChange:this.handleChange,placeholder:"Enter password...",error:t.password,className:"input",required:!0}),r.a.createElement(v,{type:"submit",label:"Submit",className:"button",handleClick:this.onSubmit}))))}}]),t}(r.a.Component);var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.8432a887.chunk.js.map