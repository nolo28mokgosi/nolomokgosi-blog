"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[1861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,u=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return a?o.createElement(u,i(i({ref:t},h),{},{components:a})):o.createElement(u,i({ref:t},h))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={slug:"orchestrationvschoreography",title:"Orchestration and Choreography",authors:"nolo",tags:["architecture","design"]},i=void 0,s={permalink:"/blog/orchestrationvschoreography",source:"@site/blog/2022-06-17-orchestrationvschoreography copy.md",title:"Orchestration and Choreography",description:"Introduction",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"architecture",permalink:"/blog/tags/architecture"},{label:"design",permalink:"/blog/tags/design"}],readingTime:3.8,hasTruncateMarker:!0,authors:[{name:"Nolo Mokgosi",title:"admin",url:"https://github.com/nolo28mokgosi",imageURL:"/img/profile.png",key:"nolo"}],frontMatter:{slug:"orchestrationvschoreography",title:"Orchestration and Choreography",authors:"nolo",tags:["architecture","design"]},prevItem:{title:"Software that serves users and developers",permalink:"/blog/buildrightthingright"},nextItem:{title:"Creating C4 diagrams",permalink:"/blog/createC4diagrams"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Saga Pattern",id:"saga-pattern",level:2},{value:"Orchestration",id:"orchestration",level:2},{value:"Orchestration-based Saga",id:"orchestration-based-saga",level:3},{value:"Advantages",id:"advantages",level:4},{value:"Disadvantages",id:"disadvantages",level:4},{value:"Choreography",id:"choreography",level:2},{value:"Choreography based saga",id:"choreography-based-saga",level:3},{value:"Advantages",id:"advantages-1",level:4},{value:"Disadvantages",id:"disadvantages-1",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Reference",id:"reference",level:2}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"I have been involved in multiple orchestration vs choreography conversation. Conversation are normally about which one is better. At the end of most conversations, there\u2019s no common ground, all goes down to preference. "),(0,n.kt)("p",null,"One Friday morning on my way to work I listened to ",(0,n.kt)("a",{parentName:"p",href:"https://www.infoq.com/podcasts/design-time-coupling-microservices/"},"Design time coupling in microservices")," podcast and Chris Richardson touched on this subject. When the host asked him to talk about orchestration and choreography he said \u201cI use those terms in the context of a saga pattern\u201d.\nThat\u2019s when the penny dropped and I thought...this makes sense."),(0,n.kt)("p",null,"In this post I will define these concepts and explain the relation between saga,orchestration and choreography. "),(0,n.kt)("h2",{id:"saga-pattern"},"Saga Pattern"),(0,n.kt)("p",null,"Saga is a sequence of transactions that updates services. Each service publishes a message or event to trigger the next transaction in the saga ","[#2]",".\nSaga provides transaction management using sequence of local transactions ","[#3]","."),(0,n.kt)("p",null,"Transaction is single unit of logic or work. Transaction can have one or more operations which we\u2019ll refer to as local transactions in this post."),(0,n.kt)("p",null,"Let\u2019s take an example where a user books a holiday via a web portal. Booking process will include:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Request booking"),(0,n.kt)("li",{parentName:"ol"},"Making payment "),(0,n.kt)("li",{parentName:"ol"},"Send confirmation email")),(0,n.kt)("p",null,"There are 2 ways to design the system:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Single service that perform all operations at once. Example, 2 phase commit (2PC) type of transaction where all services in the transaction are required to commit or rollback before transaction can commit.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2pc transaction",src:a(5713).Z,width:"471",height:"291"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Multiple services performing local transactions (Saga Pattern).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2pc transaction",src:a(1525).Z,width:"511",height:"281"})),(0,n.kt)("p",null,"There are 2 ways to implement a saga pattern, orchestration-based and choreography-based. "),(0,n.kt)("h2",{id:"orchestration"},"Orchestration"),(0,n.kt)("p",null,"According to Cambridge dictionary, orchestration is \u201can arrangement of a piece of music to be played by an orchestra\u201d."),(0,n.kt)("p",null,"When I think of orchestration, I see a group of musicians with their different instruments, playing a melodic tune that touches the heart. I also see a conductor, someone who directs the orchestra with a conducting baton.\n",(0,n.kt)("img",{alt:"ochestraonstrage",src:a(8839).Z,width:"1140",height:"626"})),(0,n.kt)("sub",null,(0,n.kt)("sup",null,"sso.org")),(0,n.kt)("h3",{id:"orchestration-based-saga"},"Orchestration-based Saga"),(0,n.kt)("p",null,"In orchestration-based saga, a centralised controller(orchestrator) tells services(saga participants) what local transactions to execute ","[#3]",". The orchestrator then interprets state of each operation based on the feedback from the participant."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"choreographysaga",src:a(9292).Z,width:"665",height:"398"})),(0,n.kt)("h4",{id:"advantages"},"Advantages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Great for complex workflows with multiple services including long running local transactions."),(0,n.kt)("li",{parentName:"ol"},"Services participating in a workflow don't need to know about commands from other participants."),(0,n.kt)("li",{parentName:"ol"},"Single point to track the saga workflow")),(0,n.kt)("h4",{id:"disadvantages"},"Disadvantages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Centralised coordinator adds another point of failure in the system"),(0,n.kt)("li",{parentName:"ol"},"New coordinated design requires additional centralised service.  ")),(0,n.kt)("h2",{id:"choreography"},"Choreography"),(0,n.kt)("p",null,"According to Cambridge dictionary, choreography is \u201cthe skill of combining movements into dances to be performed\u201d.\nWhen I think of choreography I see group of dancers on stage, dancing to music in a well coordinated manner. Each dancer on the stage knows what to do. There is no central point to drive or command."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"choreographers",src:a(3821).Z,width:"2400",height:"1600"})),(0,n.kt)("sub",null,(0,n.kt)("sup",null,"countrytimes.co.uk")),(0,n.kt)("h3",{id:"choreography-based-saga"},"Choreography based saga"),(0,n.kt)("p",null,"In choreography-based saga, services(saga participants) exchange messages or events without a centralised point of control. Each service publishes events that triggers activities in other services.",(0,n.kt)("strong",{parentName:"p"},"Note")," Published event can trigger acitivities in multiple services."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"choreographysaga",src:a(347).Z,width:"791",height:"280"})),(0,n.kt)("h4",{id:"advantages-1"},"Advantages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Good for workflows that do not need  coordination logic."),(0,n.kt)("li",{parentName:"ol"},"Unlike orchestrations-based, it does not require additional additional service implementation."),(0,n.kt)("li",{parentName:"ol"},"Responsibilities are distributed across services participating in the saga therefore .")),(0,n.kt)("h4",{id:"disadvantages-1"},"Disadvantages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It can be difficult to track which services listen to which commands."),(0,n.kt)("li",{parentName:"ol"},"Confusion when adding new services in the workflow.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"It is a good idea to look at orchestration and choreography as descendants of a saga pattern. This way it forces us to ask ourselves questions like:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What process/workflow are trying to create?"),(0,n.kt)("li",{parentName:"ol"},'What activities do we want to trigger when "X" happens?')),(0,n.kt)("p",null,"There's slight difference in terms of type of messages being exchanged between the patterns.\nOrchestration-based saga utilised commands more and choreography-based saga can operate on events only. "),(0,n.kt)("p",null,"There\u2019s no right or wrong in both orchestration and choreography. Both approaches works but it\u2019s important to look at pros & cons for both. It\u2019s also important to consider factors around implementing a saga pattern including:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Data consistency for processes spanning multiple services ","[#3]","."),(0,n.kt)("li",{parentName:"ol"},"Maintainability and ability to debug as more services are added in the process."),(0,n.kt)("li",{parentName:"ol"},"Idempotence to ensure data consistency and reduce side-effects."),(0,n.kt)("li",{parentName:"ol"},"Observability implementation is key."),(0,n.kt)("li",{parentName:"ol"},"Ability to track workflows."),(0,n.kt)("li",{parentName:"ol"},"Compensating transactions to undo changes that were made by other transactions.")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,"#1 InfoQ's ",(0,n.kt)("a",{parentName:"p",href:"https://www.infoq.com/podcasts/design-time-coupling-microservices/"},"Chris Richardson on Design-Time Coupling in Microservices")),(0,n.kt)("p",null,"#2  ",(0,n.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/data/saga.html"},"Patterns: Saga")," by miroservices.io"),(0,n.kt)("p",null,"#3 Microsoft's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga"},"Saga distributed transactions pattern")))}p.isMDXComponent=!0},3821:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/choreographers-eefe7c6ec7a10dbcbf4c61b4567c243e.jpg"},347:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/choreography-design-8ee98b6472352b991d83d35c5e1a250a.png"},8839:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/orchestra-22ce6b634bb73ae227184ef61fcb2ce7.jpg"},9292:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/orchestration-design-3fc27697d51395c6000d754c165105d2.png"},5713:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/transaction-2pc-0bcec117097334fb9b70a392f8b8191f.png"},1525:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/transaction-saga-5dd5563f7ef99ca3d2cfcda9ef58ef6e.png"}}]);