import{u as i}from"./useBookStore-CCDqdcn-.js";import{_ as o,o as l,f as c,F as m,r as g,g as p,b as t,t as u,e as d,v as h,i as _,j as N,n as f}from"./index-CfS42OYi.js";const v={name:"BookList",props:{status:{type:String,required:!0}},computed:{books(){return i().books.filter(s=>s.status===this.status)}},methods:{checkPageInput(e){const s=i();e.currentPageNum>e.pagesNum?e.currentPageNum=e.pagesNum:e.currentPageNum<0&&(e.currentPageNum=0),e.currentPageNum===e.pagesNum?e.status="finished":e.currentPageNum<e.pagesNum&&(e.status="in-progress"),s.addBook(e)},handleStatusChange(e){const s=i();e.status==="finished"&&e.currentPageNum!==e.pagesNum?e.currentPageNum=e.pagesNum:e.status==="in-progress"&&e.currentPageNum===e.pagesNum&&(e.currentPageNum=0),s.addBook(e)},calculateProgress(e){return e.pagesNum>0?Math.min(Math.floor(e.currentPageNum/e.pagesNum*100),100):0},handleDelete(e){this.$emit("delete-book",e)}}},P={key:0,class:"content-container"},S={class:"book-container"},x={class:"book-data"},B={class:"text-container"},y={class:"text-title"},C={class:"text-author"},V={class:"form-input"},I=["onUpdate:modelValue","onChange"],D={class:"progress-section"},M=["onUpdate:modelValue","max","onInput"],U={class:"progress-bar"},L={class:"progress-percentage"},T={class:"delete-button-container"},w=["onClick"];function F(e,s,j,q,z,r){return r.books.length>0?(l(),c("div",P,[(l(!0),c(m,null,g(r.books,a=>(l(),c("div",{key:a.id},[t("div",S,[t("div",x,[t("div",B,[t("div",y,u(a.title),1),t("div",C,u(a.author),1)]),t("div",V,[s[1]||(s[1]=t("label",{for:"status"},"Status",-1)),d(t("select",{id:"status","onUpdate:modelValue":n=>a.status=n,onChange:n=>r.handleStatusChange(a)},s[0]||(s[0]=[t("option",{value:"in-progress"},"Trenutno čitam",-1),t("option",{value:"finished"},"Pročitano",-1)]),40,I),[[h,a.status]])]),t("div",D,[s[2]||(s[2]=t("label",{for:"currentPage"},"Stranica:",-1)),d(t("input",{type:"number",id:"currentPage","onUpdate:modelValue":n=>a.currentPageNum=n,max:a.pagesNum,min:0,class:"page-input",onInput:n=>r.checkPageInput(a)},null,40,M),[[_,a.currentPageNum,void 0,{number:!0}]]),N(" / "+u(a.pagesNum),1)]),t("div",U,[t("div",{class:"progress-bar-fill",style:f({width:r.calculateProgress(a)+"%"})},null,4)]),t("div",L,u(r.calculateProgress(a))+"% pročitanih stranica ",1),t("div",T,[t("button",{onClick:n=>r.handleDelete(a)},s[3]||(s[3]=[t("span",null,"❎",-1)]),8,w)])])])]))),128))])):p("",!0)}const A=o(v,[["render",F],["__scopeId","data-v-ef5a6eb2"]]);export{A as B};