"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[609],{5609:(_,r,e)=>{e.r(r),e.d(r,{ProjectsComponent:()=>n});var l=e(6895),i=e(4018),a=e(954),t=e(8274),p=e(529);function u(c,o){if(1&c&&(t.TgZ(0,"ul",4)(1,"li",5)(2,"p",6),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Demo URL : "),t.TgZ(6,"a",7),t._uU(7,"Link"),t.qZA()(),t.TgZ(8,"p"),t._uU(9,"Code URL : "),t.TgZ(10,"a",7),t._uU(11,"Link"),t.qZA()()()()),2&c){const s=o.$implicit;t.xp6(3),t.hij("Title : ",s.title,""),t.xp6(3),t.s9C("href",s.previewurl,t.LSH),t.xp6(4),t.s9C("href",s.codeurl,t.LSH)}}class n{constructor(o,s){this.http=o,this.dataService=s}ngOnInit(){this.http.get("/assets/data.json").subscribe(o=>{this.data=o,console.log(o)}),this.dataService.getProjects().subscribe(o=>{console.log(o),this.projects=o})}}n.\u0275fac=function(o){return new(o||n)(t.Y36(p.eN),t.Y36(a.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-projects"]],standalone:!0,features:[t._Bn([a.D]),t.jDz],decls:5,vars:1,consts:[[1,"container","sm:w-1/2","w-10/12","mx-auto"],[1,"text-center","font-extrabold","text-3xl"],[1,"pt-4"],["class","list-disc",4,"ngFor","ngForOf"],[1,"list-disc"],[1,"text-lg"],[1,"font-bold"],[3,"href"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"Projects I have done\u2692\ufe0f!"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,u,12,3,"ul",3),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngForOf",s.projects))},dependencies:[i.Bz,l.ez,l.sg]})}}]);