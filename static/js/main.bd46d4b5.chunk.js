(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(7),s=t.n(i),c=(t(12),t(2)),o=t(3),l=t(5),h=t(4),d=t(0),m=function(e){var n=e.name,t=e.email,a=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:t})]})]})},u=function(e){var n=e.robots;return Object(d.jsx)("div",{children:n.map((function(e,t){return Object(d.jsx)(m,{id:n[t].id,name:n[t].name,email:n[t].email},n[t].id)}))})},b=function(e){var n=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},j=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px",alignItems:"center"},children:e.children})},O=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(o.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Oops. That's not good."}):this.props.children}}]),t}(a.Component),f=(t(14),function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?a.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(b,{searchChange:this.onSearchChange}),Object(d.jsx)(j,{children:Object(d.jsx)(O,{children:Object(d.jsx)(u,{robots:a})})})]}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(b,{searchChange:this.onSearchChange}),Object(d.jsx)("h1",{className:"f2",children:"NO ROBOFRIENDS FOUND"})]}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)("h1",{className:"f2",children:"Loading..."})]})}}]),t}(a.Component)),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))};t(15);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{robots:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.bd46d4b5.chunk.js.map