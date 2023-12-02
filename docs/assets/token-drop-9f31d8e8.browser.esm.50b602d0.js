var m=Object.defineProperty;var C=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(C(s,typeof e!="symbol"?e+"":e,t),t);import{aB as w,C as W,A as f,a as y,aC as R,b as T,c as A,h as b,G as E,g as S,e as O,i as v,k as F,ak as V,u as o,m as B,n as D,o as c,T as l}from"./index.58457bc4.js";import{S as _}from"./erc-20-standard-f8268f8e.browser.esm.ceaf2411.js";const h=class extends _{constructor(t,a,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,a,u,i,r);super(d,r,g);n(this,"claim",c((()=>{var t=this;return async function(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),a,r)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(a,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(a,r,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await o(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,a)=>this.erc20.burnFrom.prepare(t,a)));this.abi=f.parse(u||[]),this.metadata=new y(this.contractWrapper,R,this.storage),this.app=new T(this.contractWrapper,this.metadata,this.storage),this.roles=new A(this.contractWrapper,h.contractRoles),this.encoder=new b(this.contractWrapper),this.estimator=new E(this.contractWrapper),this.events=new S(this.contractWrapper),this.sales=new O(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new F(this.contractWrapper),this.claimConditions=new V(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await o(t)))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(await o(t))}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(B("transfer"),D)}async prepare(t,a,r){return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}};let p=h;n(p,"contractRoles",w);export{p as TokenDrop};