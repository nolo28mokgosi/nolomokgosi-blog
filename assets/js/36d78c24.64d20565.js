"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[455],{1094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={slug:"understandingboundaries",title:"Understanding Boundaries",authors:"nolo",tags:["architecture","design","Domain Driven Design"]},l=void 0,d={permalink:"/blog/understandingboundaries",source:"@site/blog/2022-01-09-Boundaries/index.md",title:"Understanding Boundaries",description:'"One of the undecided problems of software development is deciding what the boundaries of a piece of software is" - Martin Fowler. This is statement is so true, creeps into most of my design conversation.',date:"2022-01-09T00:00:00.000Z",formattedDate:"January 9, 2022",tags:[{label:"architecture",permalink:"/blog/tags/architecture"},{label:"design",permalink:"/blog/tags/design"},{label:"Domain Driven Design",permalink:"/blog/tags/domain-driven-design"}],readingTime:2.79,truncated:!0,authors:[{name:"Nolo Mokgosi",title:"admin",url:"https://github.com/nolo28mokgosi",imageURL:"/img/profile.png",key:"nolo"}],nextItem:{title:"Entanglement",permalink:"/blog/entanglement"}},u={authorsImageUrls:[void 0]},p=[{value:"John&#39;s house",id:"johns-house",children:[],level:2},{value:"In Software World",id:"in-software-world",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],h={toc:p};function c(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'"One of the undecided problems of software development is deciding what the boundaries of a piece of software is" - ',(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/ApplicationBoundary.html"},"Martin Fowler"),". This is statement is so true, creeps into most of my design conversation. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cable Mess",src:n(8887).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Photo by goodtherapy.org")),(0,o.kt)("p",null,"If we step out of tech world for a moment, we'll realise that boundaries are applied in our everyday life. Some of those boundaries has unwritten rules or principles."),(0,o.kt)("p",null,"Let's zoom into John's life as an example. John is a 14 year old boy who lives with his parents and younger sister in a 4 bedroom house. He loves football and has posters all over the bedroom he shares with his younger sister. John's mother is strict and likes order in her house. John's father is chilled. "),(0,o.kt)("h2",{id:"johns-house"},"John's house"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bedroom 1:")," Parents bedroom, always clean and organised. It is clear that mother's standards and principles are followed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bedroom 2:")," A room John shares with his sister. Through constant screaming and ruling with terror, John's mother tried to instill her standards and principles and failed dismallly. John implemented his own standard & principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Kitchen & Lounge:")," Just like John's parents bedroom, always organised. It is clear that mother's standards and principles are followed. Kitchen is for cooking. Lounge is where family watches 7de laan everyday at 7. "))),(0,o.kt)("p",null,"Looking at this example, and zooming into our everyday life, you will realise our space has boundaries and most of the rules or principles are not written down. For example, only sleep in the bedroom, cook in the kitchen."),(0,o.kt)("h2",{id:"in-software-world"},"In Software World"),(0,o.kt)("p",null,"In large organisations where teams write software each and every day, it is important to define and document boundaries. Since teams have different stakeholders, you might find teams writing duplicate capabilities in the same organisation. "),(0,o.kt)("p",null,"Take this example: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stakeholder: Can you create a screen where i can manage client data?"),(0,o.kt)("li",{parentName:"ul"},"Engineer: Say no more."),(0,o.kt)("li",{parentName:"ul"},"Stakeholder: I would like to send an email to client after completing this task."),(0,o.kt)("li",{parentName:"ul"},"Engineer: I got it, its a simple functionality to build."),(0,o.kt)("li",{parentName:"ul"},"Stakeholder: Can you make sure that I can see all the holidays on the system?"),(0,o.kt)("li",{parentName:"ul"},"Engineer: We know what to to build. We'll be done next week. ")),(0,o.kt)("p",null,"In this case, tech team is writing software to fulfil stakeholder needs without checking if the capablility exists in the organisation. Since  boundaries are not applied, the team will end up with an application that manages client data, execute client communications & managing holiday data. "),(0,o.kt)("p",null,"It does not mean it's bad to have such application. It's only bad if the boundary is not defined, it's done in isolation or leads to refactoring and data clean up projects in future. "),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Defining boundaries in large organisations can be a difficult task but it is a good investment."),(0,o.kt)("p",null," The absence of software or application boundaries leads to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data being duplicated & managed in different applications."),(0,o.kt)("li",{parentName:"ul"},"Increase in cost at organisational level"),(0,o.kt)("li",{parentName:"ul"},"Bad client experience e.g. where client updates address or contact details and the update does not filter down to other applications")),(0,o.kt)("p",null,"The results of boundary definition exercise should include this major points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application is responsible for ABC capability/function"),(0,o.kt)("li",{parentName:"ul"},"Application is NOT responsible for XYZ capability/function")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://teamtopologies.com/book"},"Team Topologies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215"},"Domain Driven Design")," books shines the light in this subject."))}c.isMDXComponent=!0},8887:function(e,t,n){t.Z=n.p+"assets/images/boundaries-b5117980d928cc6f69a882acbed8497b.jpg"}}]);