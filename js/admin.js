function render(){
 const box=document.getElementById("leads");
 const leads=JSON.parse(localStorage.getItem("bizbot_leads")||"[]");
 if(!leads.length){box.innerHTML="<p>No enquiries yet.</p>";return;}
 box.innerHTML=leads.map((x,i)=>`<div class="lead"><b>${i+1}. ${escapeHtml(x.name)}</b><br>Email: ${escapeHtml(x.email)}<br>Phone: ${escapeHtml(x.phone)}<br>Message: ${escapeHtml(x.message)}<br><small>${escapeHtml(x.date)}</small></div>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function clearLeads(){if(confirm("Clear all enquiries?")){localStorage.removeItem("bizbot_leads");render();}}
render();
