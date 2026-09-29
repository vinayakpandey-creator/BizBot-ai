const replies = {
  hello: "Hello! 👋 I'm BizBot. Tell me what your business needs.",
  price: "Our demo service can be customized for your business. Submit an enquiry and we'll contact you.",
  service: "BizBot can handle customer FAQs, lead capture and a simple admin dashboard.",
  default: "Thanks for your message! Please submit the enquiry form so our team can follow up."
};

function sendMessage(){
  const input=document.getElementById("chatInput");
  const text=input.value.trim();
  if(!text)return;
  addMsg(text,"user");
  const lower=text.toLowerCase();
  let reply=replies.default;
  if(lower.includes("hi")||lower.includes("hello")) reply=replies.hello;
  else if(lower.includes("price")||lower.includes("cost")) reply=replies.price;
  else if(lower.includes("service")) reply=replies.service;
  setTimeout(()=>addMsg(reply,"bot"),300);
  input.value="";
}
function addMsg(text,type){
  const chat=document.getElementById("chat");
  const div=document.createElement("div");
  div.className="msg "+type;
  div.textContent=text;
  chat.appendChild(div);
  chat.scrollTop=chat.scrollHeight;
}
document.getElementById("leadForm").addEventListener("submit",e=>{
  e.preventDefault();
  const lead={name:name.value,email:email.value,phone:phone.value,message:message.value,date:new Date().toLocaleString()};
  const leads=JSON.parse(localStorage.getItem("bizbot_leads")||"[]");
  leads.push(lead); localStorage.setItem("bizbot_leads",JSON.stringify(leads));
  e.target.reset();
  formStatus.textContent="✅ Enquiry saved successfully!";
});
