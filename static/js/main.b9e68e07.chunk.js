(this["webpackJsonpreact-twittler-state-props"]=this["webpackJsonpreact-twittler-state-props"]||[]).push([[0],{13:function(e,t,s){e.exports={Btn:"Response_Btn__11QEu",response:"Response_response__1nLzB",count:"Response_count__1YCmy"}},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(18),i=s.n(a),r=s(7),o=s(17),l=s(8),u=s(2),j=s(0),d=function(e){var t=e.onHashClick;return Object(j.jsxs)("section",{className:"sidebar",children:[Object(j.jsx)(r.b,{to:"/",onClick:function(){t("")},children:Object(j.jsx)("i",{className:"far fa-comment-dots"})}),Object(j.jsx)(r.b,{to:"/about",children:Object(j.jsx)("i",{className:"far fa-question-circle"})}),Object(j.jsx)(r.b,{to:"/mypage",children:Object(j.jsx)("i",{className:"far fa-user"})})]})},m=function(){return Object(j.jsx)("footer",{children:"Copyright 2022 codestates"})},b=s(13),h=s.n(b),O=function(e){var t=e.tweet,s=e.kind,n=e.onResponseClick,c="fa-thumbs-up"in t?t["fa-thumbs-up"]:0,a="fa-thumbs-down"in t?t["fa-thumbs-down"]:0;return Object(j.jsxs)("button",{className:h.a.Btn,onClick:function(e){n(e,t.id)},children:["Like"===s?Object(j.jsx)("i",{style:{padding:"0"},className:"far fa-thumbs-up ".concat(h.a.response)}):Object(j.jsx)("i",{style:{padding:"0"},className:"far fa-thumbs-down ".concat(h.a.response)}),Object(j.jsx)("span",{className:h.a.count,children:"Like"===s?c:a})]})},p=(s(35),s(36),function(e){var t=e.value,s=e.onHashClick;return Object(j.jsx)(r.b,{to:"/".concat(t),onClick:function(){s(t)},children:Object(j.jsx)("span",{className:"hashtag",children:t})})}),f=function(e){var t=e.tweet,s=e.user,c=e.onTrashClick,a=e.onResponseClick,i=e.onTweetChange,r=e.onHashClick,o=Object(n.useState)(!1),u=Object(l.a)(o,2),d=u[0],m=u[1],b=Object(n.useState)(t.content),h=Object(l.a)(b,2),f=h[0],x=h[1],w=new Date(t.createdAt).toLocaleDateString("ko-kr");return Object(j.jsxs)("li",{className:"tweet",id:t.id,children:[Object(j.jsx)("div",{className:"tweet__profile",children:Object(j.jsx)("img",{src:t.picture})}),Object(j.jsxs)("div",{className:"tweet__content",children:[Object(j.jsx)("div",{className:"tweet__userInfo",children:Object(j.jsxs)("div",{className:"tweet__userInfo--wrapper",children:[Object(j.jsx)("span",{className:"tweet__username",children:t.username}),Object(j.jsx)("span",{className:"tweet__createdAt",children:w}),Object(j.jsx)("span",{className:"tweet__remove",onClick:function(){c(t.id)},children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}),d?Object(j.jsx)("textarea",{value:f,onChange:function(e){x(e.target.value),i(t.id,f)},onKeyDown:function(e){"Enter"===e.key&&m(!1)},className:"tweet__message--edit"}):Object(j.jsx)("div",{onDoubleClick:function(){t.username===s.username&&m(!0)},className:"tweet__message",children:function(e){for(var t,s=0,n=[],c=/#[\uac00-\ud7a30-9a-zA-Z]+/g;null!=(t=c.exec(e));){n.push(e.slice(s,t.index));var a=e.slice(t.index,c.lastIndex);n.push(Object(j.jsx)(p,{onHashClick:r,value:a},s)),s=c.lastIndex}return n.push(e.slice(s,e.length)),n}(f)}),Object(j.jsx)("div",{className:"tweet__hashtags"}),Object(j.jsxs)("div",{className:"tweet__response",children:[Object(j.jsx)(O,{tweet:t,kind:"Like",onResponseClick:a}),Object(j.jsx)(O,{tweet:t,kind:"Dislike",onResponseClick:a})]})]})]})},x=function(e){var t=e.tweet;return Object(j.jsx)("option",{value:t.username,children:t.username})},w=(s(37),function(e){var t=e.user,s=e.tweets,a=e.onTweetSubmitClick,i=e.onTrashClick,r=e.onResponseClick,o=e.onTweetChange,u=e.onHashClick,d=Object(n.useState)(""),b=Object(l.a)(d,2),h=b[0],O=b[1],p=Object(n.useState)(""),w=Object(l.a)(p,2),_=w[0],g=w[1];return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{className:"tweetForm__container",children:Object(j.jsxs)("div",{className:"tweetForm__wrapper",children:[Object(j.jsx)("div",{className:"tweetForm__profile",children:Object(j.jsx)("img",{src:t.picture})}),Object(j.jsxs)("div",{className:"tweetForm__inputContainer",children:[Object(j.jsxs)("div",{className:"tweetForm__inputWrapper",children:[Object(j.jsxs)("div",{className:"tweetForm__input",children:[Object(j.jsx)("div",{className:"tweetForm__input--username",children:t.username}),Object(j.jsx)("textarea",{placeholder:"you message here..",value:h,onChange:function(e){O(e.target.value)},className:"tweetForm__input--message"})]}),Object(j.jsx)("div",{className:"tweetForm__count",role:"status",children:Object(j.jsxs)("span",{className:"tweetForm__count__text",children:["total: ",s.length]})})]}),Object(j.jsxs)("div",{className:"tweetForm__submit",children:[Object(j.jsx)("div",{className:"tweetForm__submitIcon"}),Object(j.jsx)("button",{onClick:function(){if(""!==h){var e={id:Date.now(),username:t.username,picture:t.picture,content:h,createdAt:(new Date).toISOString()};a(e),O("")}},className:"tweetForm__submitButton",children:"Tweet"})]})]})]})}),Object(j.jsx)("div",{className:"tweet__selectUser",children:Object(j.jsxs)("select",{name:"user",value:_,onChange:function(e){g(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:'"click to filter tweets by username"'}),s.map((function(e){return Object(j.jsx)(x,{tweet:e},e.id)}))]})}),Object(j.jsx)("ul",{className:"tweets",children:""===_?s.map((function(e){return Object(j.jsx)(f,{tweet:e,user:t,onTrashClick:i,onResponseClick:r,onTweetChange:o,onHashClick:u},e.id)})):s.filter((function(e){return e.username===_})).map((function(e){return Object(j.jsx)(f,{tweet:e,user:t,onTrashClick:i,onResponseClick:r,onTweetChange:o,onHashClick:u},e.id)}))}),Object(j.jsx)(m,{})]})}),_=(s(38),function(e){return Object(j.jsxs)("section",{className:"aboutTwittler",children:[Object(j.jsx)("div",{className:"aboutTwittler__container",children:Object(j.jsx)("div",{className:"aboutTwittler__wrapper",children:Object(j.jsx)("div",{className:"aboutTwittler__detail",children:Object(j.jsx)("p",{className:"aboutTwittler__detailName",children:"React Twittler Info"})})})}),Object(j.jsxs)("div",{className:"aboutTwittler__content",children:[Object(j.jsx)("i",{className:"fas fa-users"}),Object(j.jsx)("p",{children:"\ub098\ub9cc\uc758 Twittler \uc18c\uac1c\ud398\uc774\uc9c0\ub97c \uafb8\uba70\ubcf4\uc138\uc694."})]}),Object(j.jsx)(m,{})]})}),g=(s(39),function(e){var t=e.me,s=e.tweets,n=e.onTrashClick,c=e.onHashClick,a=s.filter((function(e){return e.username===t.username}));return Object(j.jsxs)("section",{className:"myInfo",children:[Object(j.jsx)("div",{className:"myInfo__container",children:Object(j.jsxs)("div",{className:"myInfo__wrapper",children:[Object(j.jsx)("div",{className:"myInfo__profile",children:Object(j.jsx)("img",{src:t.picture})}),Object(j.jsxs)("div",{className:"myInfo__detail",children:[Object(j.jsxs)("p",{className:"myInfo__detailName",children:[t.username," Profile"]}),Object(j.jsx)("p",{children:"28 \ud314\ub85c\uc6cc 100 \ud314\ub85c\uc789"})]})]})}),Object(j.jsx)("ul",{className:"tweets__mypage",children:a.map((function(e){return Object(j.jsx)(f,{tweet:e,onHashClick:c,onTrashClick:n},e.id)}))}),Object(j.jsx)(m,{})]})}),N=(s(40),function(e){var t=e.dummyTweets,s=e.user,c=Object(n.useState)(t),a=Object(l.a)(c,2),i=a[0],r=a[1],m=Object(n.useState)(""),b=Object(l.a)(m,2),h=b[0],O=b[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("tweets"));if(""!==h){var t=JSON.parse(localStorage.getItem("hashs"))[h];r((function(){return t.map((function(t){return e.filter((function(e){return e.id===t}))[0]}))}))}else r(e)}),[h]);var p=function(e){r((function(t){return[e].concat(Object(o.a)(t))})),function(e){var t=JSON.parse(localStorage.getItem("tweets")),s=JSON.parse(localStorage.getItem("hashs")),n=e.content.match(/#[\uac00-\ud7a30-9a-zA-Z]+/g);t=[e].concat(Object(o.a)(t)),null!==n&&n.forEach((function(t){t in s||(s[t]=[]),s[t].push(e.id)})),localStorage.setItem("tweets",JSON.stringify(t)),localStorage.setItem("hashs",JSON.stringify(s))}(e)},f=function(e){r((function(t){return t.filter((function(t){return t.id!==Number(e)}))}))},x=function(e,t){var s=e.currentTarget.children[0].classList[1];r((function(e){return e.map((function(e){return e.id!==Number(t)||(s in e||(e[s]=0),e[s]=e[s]+1),e}))}))},N=function(e,t){r((function(s){return s.map((function(s){return s.id===Number(e)?(s.content=t,s):s}))}))},v=function(e){O(e)};return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("main",{children:[Object(j.jsx)(d,{onHashClick:v}),Object(j.jsx)("section",{className:"features",children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",children:Object(j.jsx)(w,{user:s,tweets:i,onTweetSubmitClick:p,onTrashClick:f,onResponseClick:x,onTweetChange:N,onHashClick:v})}),Object(j.jsx)(u.a,{exact:!0,path:"/".concat(h),children:Object(j.jsx)(w,{user:s,tweets:i,onTweetSubmitClick:p,onTrashClick:f,onResponseClick:x,onTweetChange:N,onHashClick:v})}),Object(j.jsx)(u.a,{path:"/about",children:Object(j.jsx)(_,{})}),Object(j.jsx)(u.a,{path:"/mypage",children:Object(j.jsx)(g,{me:s,tweets:i,onTrashClick:f,onHashClick:v})})]})})]})})}),v=s(21),k=[{id:1,username:"I'm from \uc2e4\ub9ac\ucf58\ubc38\ub9ac",picture:"https://www.culture.go.kr/upload/editor_upload/2020/01/2001060314.jpg",content:"\u314b\u314b\uad6c\ub77c\uc9c0\ub871\ub530!#\uad6c\ub77c#\uc9c0\ub871#\uae40\uad6c\ub77c#\ud32c\uc544\ub2d8 #\ub85c\uc584\uac00\uc6b0\uc2a4 #\uc218\ud559\uc601\uc7ac",createdAt:"2019-02-24T16:17:47.000Z",updatedAt:"2019-02-24T16:17:47.000Z"},{id:2,username:"hongncs",picture:"https://blog.kakaocdn.net/dn/c37JpB/btq7oHTCM3d/dK4xgKwXTPTPF62LKHXA0K/img.jpg",content:"\ub2c8\ub124 ncs\uac00 \ubc25\uc73c\ub85c \ubcf4\uc5ec??!?!?!?!??!?!?! #\ubc25\uc740 #\ucfe0\ucfe0 #\ud558\uc138\uc694",createdAt:"2019-02-25T16:17:47.000Z",updatedAt:"2019-02-25T16:17:47.000Z"},{id:3,username:"choidesign",picture:"https://avatars.githubusercontent.com/u/80656696?v=4.jpg",content:"\uc9d1\uac00\uace0 \uc2f6\ub2e4 #\uc9d1 #\uc9d1\uac00 #\uc9d1\uc740\ud55c\uc790\ub85c\uc9d1\uac00",createdAt:"2019-02-26T16:17:47.000Z",updatedAt:"2019-02-26T16:17:47.000Z"}];localStorage.setItem("tweets",JSON.stringify(k)),function(){var e=/#[\uac00-\ud7a30-9a-zA-Z]+/g,t=new Object;k.forEach((function(s){var n,c=s.content.match(e),a=Object(v.a)(c);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in t||(t[i]=[]),t[i].push(s.id)}}catch(r){a.e(r)}finally{a.f()}})),localStorage.setItem("hashs",JSON.stringify(t))}();var C=JSON.parse(localStorage.getItem("tweets"));i.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(N,{dummyTweets:C,user:{username:"jjanghyerin",picture:"https://i.pinimg.com/474x/9c/0c/ef/9c0cef0f4c7ca6ba83f91f3a423d8049.jpg"}})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b9e68e07.chunk.js.map