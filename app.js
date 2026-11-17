(() => {
'use strict';
const themeButton=document.querySelector('#theme-toggle');
let theme='light';try{theme=localStorage.getItem('songte-minimal-theme')||'light';}catch{}
if(!['light','dark'].includes(theme))theme='light';
function applyTheme(){
 document.documentElement.dataset.theme=theme;
 themeButton.setAttribute('aria-pressed',String(theme==='dark'));
 themeButton.setAttribute('aria-label',theme==='light'?'切换深色模式':'切换浅色模式');
 themeButton.innerHTML=theme==='light'?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true" style="fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></svg>';
 document.querySelector('meta[name="theme-color"]').content=theme==='light'?'#faf9f5':'#22241f';
}
themeButton.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';try{localStorage.setItem('songte-minimal-theme',theme);}catch{}applyTheme();});
let timer;
document.querySelector('#copy-email').addEventListener('click',async()=>{
 const email='lisongte2005@163.com';let ok=false;
 try{await navigator.clipboard.writeText(email);ok=true;}catch{const input=document.createElement('textarea');input.value=email;input.style.cssText='position:fixed;top:-9999px';document.body.append(input);input.select();try{ok=document.execCommand('copy');}catch{}input.remove();}
 const toast=document.querySelector('.toast');toast.textContent=ok?'邮箱已复制':email;toast.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('visible'),2300);
});
applyTheme();
})();
