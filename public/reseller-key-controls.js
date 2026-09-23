(function(){
  function h(v){return String(v??"").replace(/[&<>\"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));}
  window.toggleResellerKey=async function(id,status){
    if(window.me?.role!=="reseller")return;
    if(!confirm(status==="BLOCKED"?"Confirm blocking this license key?":"Confirm unblocking this license key?"))return;
    try{await api("/api/keys/"+id,{method:"PATCH",body:JSON.stringify({status})});await window.loadKeys();}
    catch(e){alert(e.message||"Could not update license key");}
  };
})();
