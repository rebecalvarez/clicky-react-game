(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"one",image:"https://i.pinimg.com/236x/55/c0/80/55c080b3be5f9fd0ba7641944e099637--deviantart-pokemon-supernatural.jpg"},{id:2,name:"two",image:"https://pre00.deviantart.net/8ecb/th/pre/i/2015/109/0/f/squritle__pokemon_chibi_charm_by_pinkplaidrobot-d6wrddn.png"},{id:3,name:"three",image:"http://img13.deviantart.net/94d6/i/2014/179/9/f/chibi_weedle_by_seviyummy-d7ocr5c.png"},{id:4,name:"four",image:"https://orig00.deviantart.net/3c0f/f/2012/257/f/3/chibi_charizard_by_minjixmuu_chan-d5eq08z.gif"},{id:5,name:"five",image:"https://orig00.deviantart.net/e2a9/f/2012/336/8/9/chibi_lapras_by_starxberry-d5mvxut.png"},{id:6,name:"six",image:"https://pngimage.net/wp-content/uploads/2018/06/pokemon-chibi-png-6.png"},{id:7,name:"seven",image:"https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/2437349-pikachu-1.png"},{id:8,name:"eight",image:"https://i.pinimg.com/originals/1a/eb/cd/1aebcd0c8b586fa382aa42dd650f4c82.jpg"},{id:9,name:"nine",image:"https://i.etsystatic.com/6901207/r/il/065974/1708106090/il_570xN.1708106090_e9ux.jpg"},{id:10,name:"ten",image:"http://images2.fanpop.com/images/polls/270000/270352_1247945654912_full.jpg?v=1247945654"},{id:11,name:"eleven",image:"https://i.skyrock.net/7116/90677116/pics/3222009549_1_2_hUaqWhFM.jpg"},{id:12,name:"twelve",image:"https://pngimage.net/wp-content/uploads/2018/06/pokemon-chibi-png-3.png"},{id:13,name:"thirteen",image:"http://th07.deviantart.net/fs71/PRE/i/2014/078/c/7/commission__shiny_umbreon_by_rainbowrose912-d7as1dj.png"},{id:14,name:"fourteen",image:"https://gallery.kissclipart.com/20181209/rpe/kissclipart-blastoise-pokemon-chibi-clipart-pokmon-firered-a-bac5e2566fd0e23b.jpg"},{id:15,name:"fifteen",image:"https://cdn.weasyl.com/static/media/47/1f/91/471f9193cb6c38991c9415bc1690d4774479bd7de0ab91098dcdc94bd0459ed6.png"}]},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),s=(a(16),a(4)),o=a(5),m=a(8),l=a(6),p=a(9),d=a(7),g=a.n(d),h=(a(17),a(18),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))}),u=(a(19),function(e){return i.a.createElement("div",{className:"true"===e.shakeWrapper?"wrapperShake":"wrapper"},e.pictures)}),f=a(1),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={cards:f,clickedArray:[],topScore:0,score:0,message:"",shakeit:"false"},a.clickPicture=function(e){var t=a.shuffleArray(f);a.setState({cards:t}),a.state.clickedArray.includes(e)?a.setState({score:0,clickedArray:[],message:"Sorry, start the game again!",shakeit:"true"}):a.setState({clickedArray:a.state.clickedArray.concat([e]),score:a.state.score+1,message:"Correct!",shakeit:"false"}),14===a.state.score&&a.setState({topScore:a.state.score,clickedArray:[],message:"Congratulations, You Won the game! You can keep playing and adding to the top score",shakeit:"true"}),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score})},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header  sticky-top"},i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),i.a.createElement("h2",{className:"App-title"},"Welcome to React Clicky Game"),i.a.createElement("p",{className:"score"},i.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.topScore)))),i.a.createElement("div",{className:"banner"},i.a.createElement("h3",{className:"App-intro"},i.a.createElement("strong",{className:"instructions"},"Click on the image to earn points, but don't click it more than once!")),i.a.createElement("h2",{className:"message"},i.a.createElement("strong",null," ",this.state.message))),i.a.createElement(u,{shakeWrapper:this.state.shakeit,pictures:this.state.cards.map(function(t){return i.a.createElement(h,{clickPicture:e.clickPicture,id:t.id,key:t.id,name:t.name,image:t.image})})}),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("span",{className:"text-muted"},"\xa9 Rebeca Dodero - React App - Clicky Game"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.9b56a875.chunk.js.map