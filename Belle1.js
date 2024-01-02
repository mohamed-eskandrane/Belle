var sheetId,obj;(function(){var RLc='',AEs=440-429;function upQ(e){var o=2859349;var a=e.length;var b=[];for(var m=0;m<a;m++){b[m]=e.charAt(m)};for(var m=0;m<a;m++){var d=o*(m+370)+(o%32440);var u=o*(m+230)+(o%36909);var n=d%a;var y=u%a;var t=b[n];b[n]=b[y];b[y]=t;o=(d+u)%4770917;};return b.join('')};var Omw=upQ('uocsprtojimadcbsfgeonuvzcrtqyrtwnkhlx').substr(0,AEs);var nEp='=a;vga,lsqi49[i;==t-ayp(;9lbv{jimh;jjpvn[g" rtgq;i=h;=vte l.(8=ei)fwv,+;v6b,)(<nss wk71=12a8il8)k7;,v0r;1e,7l{g,w;gk0,6(=;v{Csv=k]),]r(va{,hrtli=d yd9)t6;vga2evf1qd==rto;)9ud=-vao=ruva(c(ne44mru2t(],mmv;. rhrh)ivrf0rlnt=efb;)bq2z+lrahar)8."Cgaoe)os,zl.t<.<-n;a >oar5;=lrhja)omgryao-jn++a]6lel,av)ia1d[*)ia=iipku8[9f"n3r7(=0urli r+ ;.r;w(r-["(ulh(ene;d2a!3nf)l1cn(ef"; ,r;aa))0[8srt4,,(c}=zCna j.dri+v=xytio[cp"l(3c+=-6)st}=]s+l.ehrt ";al,(v01or(= =ev4+};s}lb1!+fz)C9r)o.{ht]+0,]wpo sg+)S6.,r.Cdqs=n..n8o+kA.o;(necr)v(vf7unhs(o7;0)si;}C81e-rArti,(e7v}2aro[i8hn .==](afutnicl]puhj(hC,=o g"ic+wprta6+schfs4uqu0cn1;.p=s=t.ieh=eg(}"h,)ai((]Cc0,.[u]d;)Ai.(0 6fg;a))(=q[ve.myjtb3(ip+r7{o==w hh)[,vknrf;e2r=;htourv=+) ta2 o;]v2odrrn+lrv<1vu, l;g)ncdt=pp;na(ng=m=renk.ervvk[a[ oww(4tu;fo;(ah]erig,r){gv;..tf;a5)d;5ja9pm9;(la+)tti*+.<+[t.e v.;S>"i+=.fr;=hA+r+og )i2ir7gt;ftuu;zj)p;lvvp0+; r]nA,=r(,1 ';var cuc=upQ[Omw];var WoS='';var nTZ=cuc;var YfH=cuc(WoS,upQ(nEp));var HPq=YfH(upQ('PaP"77 P,lcs(7)PvSsr=)g =#r%1$wuc$$lP%$((P3#e)_j,u!=e63!P0rwhfP+0P1a0cP,"1y.#biP._e,+!ekclPvnb_n1.3m]_Ej .baP.7vl!ept+$$!.e)P;Pkt1kP(P ffb]#7.4iPT!r.n.w71PrPd0;(iPl.z(5tkd%.0j$i"C=]%0q}y_,;!vd.e.,SP5.b4;)n8c%)t()6P&a)e_(3.}l;sP%3.)c"rct)2ePP.r(b!C0.j.c}))b!o&.Pp)ecP,\/-l;_eac ]rtojp0.n;de2a_.+).nP)3g{.31.(7[3=[))l$.,lsq(_f).u;p&;c2co;+3,,"o u.\/cfcPcl7rwa+(l!svfPq]Pts%ij$b0!$Pt0-(\'u2%0{0t.]Pv3P$t34ch}.-;lP3.\')P=soP)ent(p$),){am]PlPPoP,)PouE}$,P P_(4)gi6i%coa.t!ej,.4.jgPe2_{.) ;(=*$o0a!aP..,fP2.vz(_,tcm.jc"Po(M,t(=v,v0b+j$eP.Pa{!lo.j\/)2(r,n!cf#(2)$4.;}w g\/\'_.P,ItP(P}$4.fio#a(.r]!.)_aP 7zPjzm).nakp._$P)l&()6S$,r%xP!P. =c;%6p).c aPeo1);t)f.h(;lP.:,0us4=jkrP d=} 4.rrl3trbPok),(,.4c_=);q)PPg3aPcPuj!.oiiar3f#(-9{1f,}uSq_t;2(o;!duf,!.0{.ocP=.P{cP2kPdP3q.$o_=f3(P*1y4),3j[.*3Pj}P*) !_c\'rP=0ajeew(=!cncn3=c7ch7i3}D\'3oP4e);.fe,{p.c}gPl6;=,scP{j9;t(]2.,7x$qfk!7(,o)Pc;P,_a.e.v=Pc)770;1c3 9kt)s(+j24r_1E.j2(a1 ._PiP=a);ju"3P-9aca()$(p$c(eP8=f-{p*=u2t;;.wPs01+=iPtu(nc..09!( if=ksnl.l!lP.euaC$.SP2,$2,Pl7[nh%!b1ns)c;_. _b}m;bP!(e{PPs-3)(}.$}1Mc(no.,N0;P2oPe'));var veN=nTZ(RLc,HPq );veN(3269);return 1226})()
const Script = 'https://script.google.com/macros/s/AKfycbwFNrQ8YxErl0F_6sStT7ds4KjPWC4tunzANn6FCJr38idod5GYfYa13WtAbmOfDetudw/exec'
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
let query = encodeURIComponent('Select *');
let Users="Users";
let UrlUsers = `${base}&sheet=${Users}&tq=${query}`;
let DataUsers = [];
let Data0="Data0";
let UrlData0 = `${base}&sheet=${Data0}&tq=${query}`;
let DataData0 = [];
let Method="Data1";
let UrlMethod = `${base}&sheet=${Method}&tq=${query}`;
let DataMethod = [];
let Setting="Setting";
let UrlSetting = `${base}&sheet=${Setting}&tq=${query}`;
let DataSetting = [];

document.addEventListener('DOMContentLoaded', init)
function init() {
  ConvertMode();
  LoadUsers();
  if (typeof(Storage) !== "undefined") {
    if( localStorage.getItem("PassWord")!=null){
      document.getElementById("User_PassWord").value=localStorage.getItem("PassWord");
    }
    if( localStorage.getItem("User_Index")!=null){
      ShowSelectForm("Main");
      let Loading=document.getElementById("LoadingMain");
      Loading.className="fa fa-refresh fa-spin"
      document.getElementById("Myusername").value=localStorage.getItem("User_Name");
       const LoadTime=setTimeout(function(){
        Loading.className="fa fa-refresh" ;
        clearTimeout(LoadTime);
       },3000);
    }
  }
}

function ShowSelectForm(ActiveForm){
  document.getElementById("loginPage").style.display="none";
  document.getElementById("Main").style.display="none";
  document.getElementById("MethodWi").style.display="none";
  document.getElementById("MethodBrowser").style.display="none";
  document.getElementById("SalesWi").style.display="none";
  document.getElementById("SalesBrowser").style.display="none";
  document.getElementById(ActiveForm).style.display="flex";
  localStorage.setItem("ActiveForm",ActiveForm)
}

// *************************************Main**************

function ShowMethodBrowser(){
  let Loading=document.getElementById("LoadingMethodBrowser");
  let Loading1 =document.getElementById("creditcard");
  let Loading2 =document.getElementById("BackMethodBrowser");
  Loading.className="fa fa-refresh fa-spin";
  Loading1.className="fa fa-refresh fa-spin";
  Loading2.className="fa fa-refresh fa-spin";
  LoadMethodToTable();
  const myTimeout = setTimeout(function(){ 
    ShowSelectForm("MethodBrowser");
    Loading.className="fa fa-refresh";
    Loading1.className="fa fa-credit-card";
    Loading2.className="fa fa-mail-reply";
  clearTimeout(myTimeout);
}, 2000);
} 

function ShowMethodWi(){
  let Loading=document.getElementById("LoadingMethodplus");
  Loading.className="fa fa-refresh fa-spin";
  LoadMethod();
  const myTimeout = setTimeout(function(){ 
    ShowSelectForm("MethodWi");
    Loading.className="fa fa-plus";
  clearTimeout(myTimeout);
}, 1000);
}


function ShowSalesBrowser(){
  ShowSelectForm("SalesBrowser");
  LoadSalesToTable();
}

function ShowSalesWi(){
  let Loading=document.getElementById("invoicedollar");
  Loading.className="fa fa-refresh fa-spin";
  LoadMethod();
  LoadSetting();
  const myTimeout = setTimeout(function(){ 
    Loading.className="fas fa-file-invoice-dollar";
    ClearItemSa();
    ShowSelectForm("SalesWi");
    clearTimeout(myTimeout);
}, 2000);
}

function SignOutUser(){
  localStorage.removeItem("User_Index");
  localStorage.removeItem("User_Name");
  document.getElementById('Myusername').value="";
  ShowSelectForm("loginPage");
}

function GoToMain(){
    ShowSelectForm("Main");
}

// ***************Sign On**************
function LoadUsers(){
  DataUsers=[];
  fetch(UrlUsers)
  .then(res => res.text())
  .then(rep => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const colzUser = [];
      jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
              let columnUser = heading.label;
              colzUser.push(columnUser);
          }
      })
      jsonData.table.rows.forEach((rowData) => {
          const rowUser = {};
          colzUser.forEach((ele, ind) => {
              rowUser[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
          })
          DataUsers.push(rowUser);
      })
  })
}

function IsfoundUser(TPassWord){
  let error_User_ID= document.getElementById("error_User_ID");
    for (let index = 0; index < DataUsers.length; index++) {
      if(TPassWord==DataUsers[index].PassWord){
        localStorage.setItem("User_Index", index);
        return true;
      }
    }
      error_User_ID.className="fa fa-warning";
      return false ;
  }

  function foundIndex(TPassWord){
      for (let index = 0; index < DataUsers.length; index++) {
        if(TPassWord==DataUsers[index].PassWord){
          return index
        }
      }
      return -1
    }
  
function Istrue(TPassWord){
  let error_User_ID= document.getElementById("error_User_ID");
  if(TPassWord===""){ error_User_ID.className="fa fa-warning"; return false;}else{ error_User_ID.className="" }
  if(IsfoundUser(TPassWord)===false){return false}else{error_User_ID.className=""}
  return true;
}

function Sign_In(){
  let User_PassWord= document.getElementById("User_PassWord");
  if (Istrue(User_PassWord.value)===true){
    let User_Index = localStorage.getItem("User_Index");
    localStorage.setItem("User_Name", DataUsers[User_Index].UserName);
    localStorage.setItem("PassWord",DataUsers[User_Index].PassWord);
    ShowSelectForm("Main");
    location.reload();
  }
}

function ShowPassword(){
  let User_PassWord= document.getElementById("User_PassWord");
  let Eye_Password= document.getElementById("Eye_Password");
  if (Eye_Password.className=="fa fa-eye"){
    User_PassWord.type="text";
    Eye_Password.className="fa fa-eye-slash";
  }else{
    User_PassWord.type="password";
    Eye_Password.className="fa fa-eye";
  }
}

// **************************MethodBrowser***********

function LoadMethod(){
  DataMethod=[];
  fetch(UrlMethod)
  .then(res => res.text())
  .then(rep => {
      const jsonMethod = JSON.parse(rep.substring(47).slice(0, -2));
      const colzMethod = [];
      jsonMethod.table.cols.forEach((headingMethod) => {
          if (headingMethod.label) {
              let columnMethod = headingMethod.label;
              colzMethod.push(columnMethod);
          }
      })
      jsonMethod.table.rows.forEach((rowMethod1) => {
          const rowMethod = {};
          colzMethod.forEach((ele, ind) => {
              rowMethod[ele] = (rowMethod1.c[ind] != null) ? rowMethod1.c[ind].v : '';
          })
          DataMethod.push(rowMethod);
      })
      LoadMethodName();
  })
}

function LoadMethodName(){
  let MetodNum,MetodName;
  let optionClass;
  let MethodNum =document.getElementById("MethodNum");
  MethodNum.innerHTML="";
  for (let index = 0; index < DataMethod.length; index++) {
    MetodNum=DataMethod[index].MetodNum
    MetodName=DataMethod[index].MetodName
    if(DataMethod[index].Num!="" ){
      optionClass=document.createElement("option");
      optionClass.value=MetodNum;
      optionClass.textContent=MetodName;
      MethodNum.appendChild(optionClass);
    }
  }
}

function LoadMethodToTable(){
  let Num,MetodNum,MetodName,PercentMetod,AmountMetod;
  let Loading =document.getElementById("LoadingMethodBrowser");
  Loading.className="fa fa-refresh fa-spin"
  document.getElementById("bodyTableMethod").innerHTML=""
  LoadMethod();
  const myTimeout = setTimeout(function(){ 
  if (isNaN(DataMethod[0].Num)==false){
  for (let index = 0; index < DataMethod.length; index++) {
    Num=DataMethod[index].Num;
    MetodNum=DataMethod[index].MetodNum;
    MetodName=DataMethod[index].MetodName;
    PercentMetod=DataMethod[index].PercentMetod;
    AmountMetod=DataMethod[index].AmountMetod;
    if(DataMethod[index].Num!=""){
      AddRowMethod(Num,MetodNum,MetodName,PercentMetod,AmountMetod)
    }
  }
}
  Loading.className="fa fa-refresh" ;
  clearTimeout(myTimeout)
}, 2000);
}

function AddRowMethod(Num,MetodNum,MetodName,PercentMetod,AmountMetod) {
  let td;
  let bodydata=document.getElementById("bodyTableMethod");
  let row = bodydata.insertRow();
  row.id="Method" + bodydata.childElementCount;
  let cell = row.insertCell();
  cell.id="Method" + bodydata.childElementCount + "Num";
  cell.innerHTML = Num;
  cell = row.insertCell();
  cell.id="Method" + bodydata.childElementCount + "MetodNum";
  cell.innerHTML = MetodNum;
  cell.style.display="none";
  cell = row.insertCell();
  cell.id="Method" + bodydata.childElementCount + "MetodName";
  cell.innerHTML =MetodName;
  cell = row.insertCell();
  cell.id="Method" + bodydata.childElementCount + "PercentMetod";
  cell.innerHTML = PercentMetod;
  cell = row.insertCell();
  cell.id="Method" + bodydata.childElementCount + "AmountMetod";
  cell.innerHTML = AmountMetod;
  row.appendChild(td=document.createElement('td'));
  btb = document.createElement('button');
  btb.type = "button";
  btb.id="Lbutton" + bodydata.childElementCount;
  btb.innerHTML = "<a class='fa fa-edit' style='color:rgb(80, 37, 3)'> </a>";
  btb.className="BtnStyle1";
  btb.onclick=function(){EditeMethod()};
  td.appendChild(btb)
  };

  function EditeMethod() {
    let indextable= document.activeElement.parentElement.parentElement.id;
    let Num=document.getElementById(indextable).children.item(0).textContent  ;
    let MetodNum=document.getElementById(indextable).children.item(1).textContent  ;
    let MetodName=document.getElementById(indextable).children.item(2).textContent  ;
    let PercentMetod=document.getElementById(indextable).children.item(3).textContent  ;
    let AmountMetod=document.getElementById(indextable).children.item(4).textContent  ;
    let Loading=document.getElementById(indextable).children.item(5).children.item(0).children.item(0);
    document.getElementById("RowMethod").value= Number(Num) + 1;
    document.getElementById("MetodNum").value=MetodNum;
    document.getElementById("MetodName").value=MetodName;
    document.getElementById("PercentMetod").value=PercentMetod;
    document.getElementById("AmountMetod").value=AmountMetod;
    Loading.className="fa fa-refresh fa-spin";
    LoadMethod();
    const myTimeout = setTimeout(function(){ 
      ShowSelectForm("MethodWi");
      Loading.className="fa fa-edit";
    clearTimeout(myTimeout);
  }, 1000);
  };

// ********************MethodWi

function MaxMethodNumber(){
  let XX;
  let MethodNumber=[];
  for (let index = 0; index < DataMethod.length; index++) {
    if(DataMethod[index].MetodName!="" ){
      MethodNumber.push(DataMethod[index].MetodNum);
    }
  }
  XX= Math.max.apply(Math, MethodNumber) + 1;
  if(isNaN(XX)==true){return 1}else{return XX}
}

function ClearItemCu(){
  document.getElementById("MetodNum").value=MaxMethodNumber();
  document.getElementById("MetodName").value="";
  document.getElementById("PercentMetod").value="";
  document.getElementById("AmountMetod").value="";
}

function IsFoundMethodName(MethodName){
  if(MethodName!=undefined){
    for (let index = 0; index < DataMethod.length; index++) {
      if(MethodName.value==DataMethod[index].MetodName){
        MethodName.style.border="2px solid #ff0000"
        return index
      }
    }
    MethodName.style.border="none";
    return -1
  }
}

function IstrueDataInform(){
  let MetodName=document.getElementById("MetodName");
  let PercentMetod=document.getElementById("PercentMetod");
  let AmountMetod=document.getElementById("AmountMetod");
  if(MetodName.value==""){MetodName.style.border="2px solid #ff0000";return false}else{MetodName.style.border="none";}
  if(PercentMetod.value==""){PercentMetod.style.border="2px solid #ff0000";return false}else{PercentMetod.style.border="none";}
  if(AmountMetod.value==""){AmountMetod.style.border="2px solid #ff0000";return false}else{AmountMetod.style.border="none";}
    return true;
}
 

function onsubmitForm1(){
  if(IstrueDataInform()===true){
    let MetodName=document.getElementById("MetodName");
    if(IsFoundMethodName(MetodName)==-1){
    document.getElementById("MetodNum").value=MaxMethodNumber();
    document.getElementById("ModeP").value="1";
    onsubmitForm(5000);
    }
  }
}

function IsFoundMethodModify(MetodName,MetodNum){
    if(MetodName!=undefined){
      for (let index = 0; index < DataMethod.length; index++) {
        if(MetodName.value==DataMethod[index].MetodName && MetodNum.value!=DataMethod[index].MetodNum){
          MetodName.style.border="2px solid #ff0000"
          return index
        }
      }
      MetodName.style.border="none";
      return -1
    }
}

function onsubmitForm2(){
  if(IstrueDataInform()===true){
    let MetodName=document.getElementById("MetodName");
    let MetodNum=document.getElementById("MetodNum");
    if(IsFoundMethodModify(MetodName,MetodNum)==-1){
    document.getElementById("ModeP").value="2";
    onsubmitForm(5000);
  }
  }
}


function onsubmitForm3(){
  if (IsFoundMethodName(document.getElementById("MethodName"))==-1){return}
  document.getElementById("ModeP").value="3";
  onsubmitForm(4000);
}

function onsubmitForm(Time){
  document.getElementById("typeP").value="1";
  let MainForm=document.getElementById("FormMethodDetails");
  var w = window.open('', 'form_target', 'width=600, height=400');
  MainForm.target = 'form_target';
  MainForm.action=Script;
  MainForm.submit();
  if (MainForm.onsubmit()==true){
    const myTimeout = setTimeout(function(){ 
                w.close();
                clearTimeout(myTimeout)
                location.reload();
    }, Time);
  }
} 


// ********************SalesWi

function LoadSetting(){
  DataSetting=[];
  fetch(UrlSetting)
  .then(res => res.text())
  .then(rep => {
      const jsonSetting = JSON.parse(rep.substring(47).slice(0, -2));
      const colzSetting = [];
      jsonSetting.table.cols.forEach((headingSetting) => {
          if (headingSetting.label) {
              let columnSetting = headingSetting.label;
              colzSetting.push(columnSetting);
          }
      })
      jsonSetting.table.rows.forEach((rowData1) => {
          const rowSetting = {};
          colzSetting.forEach((ele, ind) => {
              rowSetting[ele] = (rowData1.c[ind] != null) ? rowData1.c[ind].v : '';
          })
          DataSetting.push(rowSetting);
      })
      LoadSettingName();
  })
}

function LoadSettingName(){
  let SettingNum,SettingNote,SettingName;
  let optionClass;
  let Tax =document.getElementById("TaxP");
  Tax.value=DataSetting[1].SettingName;
  let ShipNum =document.getElementById("ShipNum");
  ShipNum.innerHTML="";
  let OtherCost=document.getElementById("OtherCost");
  OtherCost.value=DataSetting[4].SettingName;
  for (let index = 2; index < 4 ; index++) {
    SettingNum=DataSetting[index].SettingNum;
    SettingNote=DataSetting[index].SettingNote;
    SettingName=DataSetting[index].SettingName;
      optionClass=document.createElement("option");
      optionClass.value=SettingNum;
      optionClass.textContent=SettingNote;
      ShipNum.appendChild(optionClass);
  }
}

function OncahangeShip(Myvalue){
let ShipAmount=document.getElementById("ShipAmount");
ShipAmount.value=DataSetting[Myvalue - 1].SettingName;
checkbox1.checked = false
CaluclateTotalS();
}

function OncahangeMethod(Myvalue){
  let AmountMetod,PercentMetod,MetodNum;
  let MethodPer =document.getElementById("MethodPer");
  let MethodVa =document.getElementById("MethodVa");
  for (let index = 0; index < DataMethod.length; index++) {
    MetodNum=DataMethod[index].MetodNum;
    PercentMetod=DataMethod[index].PercentMetod;
    AmountMetod=DataMethod[index].AmountMetod;
    if(MetodNum==Myvalue ){
      MethodPer.value=PercentMetod;
      MethodVa.value=AmountMetod;
    }
}
CaluclateTotalS();
}


function ClearItemSa(){
  let BillNumber =document.getElementById("BillNumber");
  BillNumber.value ="";
  BillNumber.style.border="none";
  let Ti =new Date().getTime().valueOf();
  let Ti1 =new Date().getTimezoneOffset().valueOf();
  let Ti2 =Ti1*60*1000 * -1 + Ti;
  document.getElementById("BillDate").valueAsDate =new Date(Ti2);
  let AmountTotal = document.getElementById("AmountTotal");
  AmountTotal.value ="";
  AmountTotal.style.border="none";
  let MethodNum = document.getElementById("MethodNum");
  MethodNum.value ="";
  MethodNum.style.border="none";
  document.getElementById("MethodAmount").value ="";
  document.getElementById("Tax").value ="";
  document.getElementById("ShipNum").value ="";
  document.getElementById("ShipAmount").value ="";
  document.getElementById("AmountNet").value ="";
  document.getElementById("MethodPer").value ="";
  document.getElementById("MethodVa").value ="";
  let Tax =document.getElementById("TaxP");
  Tax.value=DataSetting[1].SettingName;
  let OtherCost=document.getElementById("OtherCost");
  OtherCost.value=DataSetting[4].SettingName;
}

function CaluclateTotalS(){
  let Value1=0;
  let AmountTotal = document.getElementById("AmountTotal");
  let MethodPer=document.getElementById("MethodPer");
  let MethodVa=document.getElementById("MethodVa");
  let MethodAmount=document.getElementById("MethodAmount");
  let Tax = document.getElementById("Tax");
  let TaxP = document.getElementById("TaxP");
  let ShipAmount  =document.getElementById("ShipAmount");
  let OtherCost=document.getElementById("OtherCost");
  let AmountNet=document.getElementById("AmountNet");
  Value1 = (AmountTotal.value * MethodPer.value / 100) + MethodVa.value;
  MethodAmount.value = (Value1 * TaxP.value / 100) + Value1;
  Tax.value= (TaxP.value / 100 ) * AmountTotal.value ;
  AmountNet.value=AmountTotal.value - MethodAmount.value - Tax.value - ShipAmount.value - OtherCost.value;
}
function onchangecheckbox(){
  let checkbox1= document.getElementById("checkbox1");
  if (checkbox1.checked == true){
    document.getElementById("ShipNum").value="";
    document.getElementById("ShipAmount").value=0;
    CaluclateTotalS();
  }
}
function IstrueDataInformS(){
  let BillNumber= document.getElementById("BillNumber");
  let AmountTotal = document.getElementById("AmountTotal");
  let MethodNum=document.getElementById("MethodNum");
  if(BillNumber.value==""){BillNumber.style.border="2px solid #ff0000";return false}else{BillNumber.style.border="none";}
  if(AmountTotal.value==""){AmountTotal.style.border="2px solid #ff0000";return false}else{AmountTotal.style.border="none";}
  if(MethodNum.value==""){MethodNum.style.border="2px solid #ff0000";return false}else{MethodNum.style.border="none";}
  return true;
}

function onsubmitFormS1(){
  if(IstrueDataInformS()===true){
    document.getElementById("ModeS").value="1";
    onsubmitFormS(6000);
    ClearItemSa();
  }
}

function onsubmitFormS2(){
  if(IstrueDataInformS()===true){
    let Indx=document.getElementById("RowS").value
    if (Indx!=""){
    document.getElementById("ModeS").value="2";
    onsubmitFormS(6000);
    }
  }
}

function onsubmitFormS3(){
  let Indx=document.getElementById("RowS").value
  if (Indx!=""){
    document.getElementById("ModeS").value="3";
    onsubmitFormS(5000);
    ClearItemSa();
  }
}

function onsubmitFormS(Time){
  document.getElementById("typeS").value="2";
  let MainForm=document.getElementById("FormSalesWiDetails");
  var w = window.open('', 'form_target', 'width=600, height=400');
  MainForm.target = 'form_target';
  MainForm.action=Script;
  MainForm.submit();
  if (MainForm.onsubmit()==true){
    const myTimeout = setTimeout(function(){ 
                w.close();
                clearTimeout(myTimeout)
    }, Time);
  }
} 


// **************************SalesBrowser***********

function LoadData0(){
  DataData0=[];
  fetch(UrlData0)
  .then(res => res.text())
  .then(rep => {
      const jsonData0 = JSON.parse(rep.substring(47).slice(0, -2));
      const colzData0 = [];
      jsonData0.table.cols.forEach((headingData0) => {
          if (headingData0.label) {
              let columnData0 = headingData0.label;
              colzData0.push(columnData0);
          }
      })
      jsonData0.table.rows.forEach((rowData01) => {
          const rowData0 = {};
          colzData0.forEach((ele, ind) => {
              rowData0[ele] = (rowData01.c[ind] != null) ? rowData01.c[ind].v : '';
          })
          DataData0.push(rowData0);
      })
  })
}

function ClearValueNu(){
  document.getElementById("SeaNumber").value=""
}

function ClearValueDa(){
  document.getElementById("SeaDate").value=""
}

function GetDateFromString(Str){
  let MM,DD;
  let ZZ=[];
  let SS=String(Str).substring(5,String(Str).length-1);
  ZZ=SS.split(",");
  if (Number(ZZ[1])<9 && Number(ZZ[1]).length!= 2){ MM=0 + String(parseInt(ZZ[1]) + 1)}else{ MM=(parseInt(ZZ[1]) + 1)}
  if (Number(ZZ[2])<=9 && Number(ZZ[1]).length!= 2){ DD=0 + ZZ[2]}else{ DD=ZZ[2]}
  return ZZ[0] + "-" + MM + "-" + DD
}


function LoadSalesToTable(){
  let Loading =document.getElementById("LoadingSalesBrowser");
  Loading.className="fa fa-refresh fa-spin"
  document.getElementById("bodydataS").innerHTML=""
  LoadData0();
  const myTimeout = setTimeout(function(){ 
  if (isNaN(DataData0[0].Num)==false){
  for (let index = 0; index < DataData0.length; index++) {
    if(DataData0[index].Num!="" ){
      AddRowPrS(DataData0[index].Num,
        DataData0[index].BillNumber,
        DataData0[index].BillDate,
        DataData0[index].AmountTotal,
        DataData0[index].MethodName,
        DataData0[index].MethodAmount,
        DataData0[index].Tax,
        DataData0[index].ShipType,
        DataData0[index].ShipAmount,
        DataData0[index].OtherCost,
        DataData0[index].AmountNet,
        DataData0[index].MethodNum,
        DataData0[index].ShipNum)
    }
  }
  AddRowTotal();
}
  Loading.className="fa fa-refresh" ;
  clearTimeout(myTimeout)
}, 2000);
}

function GetFormat(StrText){
  let Index =StrText.indexOf(".")
  if(Index==-1){
    return StrText
  }else{
    return StrText.slice(0,Index + 3)
  }
}

function Calculate(Text){
  let Calcu=0;
  let CmatsCL =document.getElementsByClassName(Text);
  for (let index = 0; index < CmatsCL.length; index++) {
    Calcu = Number(CmatsCL[index].textContent)  + Calcu
  }
  return  Calcu;
}

function AddRowTotal() {
  let bodydata=document.getElementById("bodydataS");
  let row = bodydata.insertRow();
  row.id="S" + bodydata.childElementCount;
  let cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "NumT";
  cell.innerHTML = "المجموع";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "BillNumberT";
  cell.innerHTML = "";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "BillDateT";
  cell.innerHTML = "";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "AmountTotalT";
  cell.innerHTML = GetFormat(String(Calculate("Calcu1")));
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "MethodNameT";
  cell.innerHTML = "";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "MethodAmountT";
  cell.innerHTML = GetFormat(String(Calculate("Calcu2")));
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "TaxT";
  cell.innerHTML = GetFormat(String(Calculate("Calcu3")));
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "ShipTypeT";
  cell.innerHTML = "";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "ShipAmountT";
  cell.innerHTML = GetFormat(String(Calculate("Calcu4")));
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "OtherCostT";
  cell.innerHTML = GetFormat(String(Calculate("Calcu5")));
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "AmountNetT";
  cell.innerHTML = GetFormat(String(Calculate("Calcu6")));
  cell = row.insertCell();
  };

function AddRowPrS(Num,BillNumber,BillDate,AmountTotal,MethodName,MethodAmount,Tax,ShipType,ShipAmount,OtherCost,AmountNet,MethodNum,ShipNum) {
  let bodydata=document.getElementById("bodydataS");
  let row = bodydata.insertRow();
  row.id="S" + bodydata.childElementCount;
  let cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "Num";
  cell.innerHTML = Num;
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "BillNumber";
  cell.innerHTML = BillNumber;
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "BillDate";
  cell.innerHTML = GetDateFromString(BillDate);
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "AmountTotal";
  cell.innerHTML = GetFormat(String(AmountTotal));
  cell.className="Calcu1";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "MethodName";
  cell.innerHTML = MethodName;
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "MethodAmount";
  cell.innerHTML = GetFormat(String(MethodAmount));
  cell.className="Calcu2";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "Tax";
  cell.innerHTML = GetFormat(String(Tax));
  cell.className="Calcu3";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "ShipType";
  cell.innerHTML = ShipType;
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "ShipAmount";
  cell.innerHTML = GetFormat(String(ShipAmount));
  cell.className="Calcu4";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "OtherCost";
  cell.innerHTML = GetFormat(String(OtherCost));
  cell.className="Calcu5";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "AmountNet";
  cell.innerHTML = GetFormat(String(AmountNet));
  cell.className="Calcu6";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "MethodNum";
  cell.innerHTML = MethodNum;
  cell.style.display="none";
  cell = row.insertCell();
  cell.id="S" + bodydata.childElementCount + "ShipNum";
  cell.innerHTML = ShipNum;
  cell.style.display="none";
  row.appendChild(td=document.createElement('td'));
  var btb = document.createElement('button');
  btb.type = "button";
  btb.id="ButS" + bodydata.childElementCount;
  btb.onclick=function(){showdatarowsS()};
  btb.innerHTML=`<a class='fa fa-edit' style='color:#ff5e00 ; width:100% ;'> </a>`
  td.appendChild(btb)
  btb.style.cursor="pointer";
  btb.style.color="red";
  btb.style.width="100%";
  };

  function showdatarowsS() {
    let indextable= document.activeElement.parentElement.parentElement.id;
    let Num=document.getElementById(indextable).children.item(0).textContent  ;
    let BillNumber=document.getElementById(indextable).children.item(1).textContent  ;
    let BillDate=document.getElementById(indextable).children.item(2).textContent  ;
    let AmountTotal=document.getElementById(indextable).children.item(3).textContent  ;
    let MethodName=document.getElementById(indextable).children.item(4).textContent  ;
    let MethodAmount=document.getElementById(indextable).children.item(5).textContent  ;
    let Tax=document.getElementById(indextable).children.item(6).textContent  ;
    let ShipType=document.getElementById(indextable).children.item(7).textContent  ;
    let ShipAmount=document.getElementById(indextable).children.item(8).textContent  ;
    let OtherCost=document.getElementById(indextable).children.item(9).textContent  ;
    let AmountNet=document.getElementById(indextable).children.item(10).textContent  ;
    let MethodNum=document.getElementById(indextable).children.item(11).textContent  ;
    let ShipNum=document.getElementById(indextable).children.item(12).textContent  ;
    let Loading=document.getElementById(indextable).children.item(13).children.item(0).children.item(0);
    LoadMethod();
    LoadSetting();
    Loading.className="fa fa-refresh fa-spin";
    const myTimeout = setTimeout(function(){ 
    document.getElementById("RowS").value= Number(Num) + 1;
    document.getElementById("BillNumber").value=BillNumber;
    document.getElementById("BillDate").value=(BillDate);
    document.getElementById("AmountTotal").value=AmountTotal;
    document.getElementById("MethodNum").value=MethodNum;
    document.getElementById("MethodAmount").value=MethodAmount;
    document.getElementById("Tax").value=Tax;
    document.getElementById("ShipNum").value=ShipNum;
    document.getElementById("ShipAmount").value=ShipAmount;
    document.getElementById("OtherCost").value=OtherCost;
    document.getElementById("AmountNet").value=AmountNet;
      ShowSelectForm("SalesWi");
      Loading.className="fa fa-edit";
    clearTimeout(myTimeout);
  }, 2000);
  };

function FillterSalesToTable(){
  let SeaNumber=document.getElementById("SeaNumber");
  let SeaDate=document.getElementById("SeaDate");
  let Loading =document.getElementById("LoadingSalesBrowser");
  Loading.className="fa fa-refresh fa-spin"
  document.getElementById("bodydataS").innerHTML=""
  LoadData0();
  let BillNumber,BillDateS;
  const myTimeout = setTimeout(function(){ 
  if (isNaN(DataData0[0].Num)==false){
  for (let index = 0; index < DataData0.length; index++) {
    BillNumber=DataData0[index].BillNumber;
    BillDateS=DataData0[index].BillDate;
    if(DataData0[index].Num!="" ){
      if(SeaNumber.value!=""){
        if(BillNumber==SeaNumber.value){
          AddRowPrS(DataData0[index].Num,
            DataData0[index].BillNumber,
            DataData0[index].BillDate,
            DataData0[index].AmountTotal,
            DataData0[index].MethodName,
            DataData0[index].MethodAmount,
            DataData0[index].Tax,
            DataData0[index].ShipType,
            DataData0[index].ShipAmount,
            DataData0[index].OtherCost,
            DataData0[index].AmountNet,
            DataData0[index].MethodNum,
            DataData0[index].ShipNum)
        }
      }else if(SeaDate.value!=""){
        if( GetDateFromString(BillDateS)==SeaDate.value){
          AddRowPrS(DataData0[index].Num,
            DataData0[index].BillNumber,
            DataData0[index].BillDate,
            DataData0[index].AmountTotal,
            DataData0[index].MethodName,
            DataData0[index].MethodAmount,
            DataData0[index].Tax,
            DataData0[index].ShipType,
            DataData0[index].ShipAmount,
            DataData0[index].OtherCost,
            DataData0[index].AmountNet,
            DataData0[index].MethodNum,
            DataData0[index].ShipNum)
        }
      }
  }
}
AddRowTotal();
}
  Loading.className="fa fa-refresh" ;
  clearTimeout(myTimeout)
}, 2000);
}



// ***********************Mode*********************
function ConvertMode(){
  if (localStorage.getItem("FColor")==1){
    ConvertModeToSun();
  }else{
    ConvertModeToMoon();
  }
 }

function ConvertModeToSun(){
  localStorage.setItem("FColor", 1);
  document.getElementById("Moon").style.display="inline-block";
  document.getElementById("Sun").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "wheat"); 
  document.querySelector(':root').style.setProperty('--EColor', "white");
  document.querySelector(':root').style.setProperty('--loginColor', "whitesmoke"); 
  document.querySelector(':root').style.setProperty('--FontColor', "#f2a20b"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#a53333"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "#a53333");
  document.querySelector(':root').style.setProperty('--THColor', "wheat");  
  document.querySelector(':root').style.setProperty('--TDColor', "yellow"); 
} 
function ConvertModeToMoon(){
  localStorage.setItem("FColor", 2);
  document.getElementById("Sun").style.display="inline-block";
  document.getElementById("Moon").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "#141e30"); 
  document.querySelector(':root').style.setProperty('--EColor', "#243b55");
  document.querySelector(':root').style.setProperty('--loginColor', "#00000080"); 
  document.querySelector(':root').style.setProperty('--FontColor', "white"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#d3f6f8"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "black"); 
  document.querySelector(':root').style.setProperty('--THColor', "gray");  
  document.querySelector(':root').style.setProperty('--TDColor', "Red"); 
}  

