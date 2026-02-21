(()=>{
if(window.DinoHacksEnabled) return console.log("[DinoHacks] 請勿多次貼上程式碼！")
document.querySelector("div#main-frame-error").insertAdjacentHTML('beforeend', `
<fieldset id="hacks" style="position:fixed;width:600px;">
    <legend>DinoHacks v2.1 外掛列表</legend>

    <div>
      <input type="radio" id="noclip" name="noclip">
      <label for="noclip">穿牆模式</label>
    </div>

    <div>
      <input type="radio" id="fly" name="fly">
      <label for="fly">飛天模式</label>
    </div>

    <div>
      <input type="radio" id="speed" name="speed">
      <label for="speed">音速模式</label>
    </div>
   
    <div>
      <input type="radio" id="lightspeed" name="lightspeed">
      <label for="lightspeed">光速模式</label>
    </div>

    <div>
      <input type="radio" id="noenemy" name="noenemy">
      <label for="noenemy">沒有敵人</label>
    </div>

    <div>
      <input type="radio" id="night" name="night">
      <label for="night">永遠夜晚</label>
    </div>

    <div>
      <input type="radio" id="autojump" name="autojump">
      <label for="autojump">自動跳躍 (很笨)</label>
    </div>

    <div>
      <button id="all" name="all" onclick="(()=>{document.querySelectorAll('input').forEach((child)=>{child.checked=true})})()">選擇全部</button>
      <button id="cancel" name="cancel" onclick="(()=>{document.querySelectorAll('input').forEach((child)=>{child.checked=false})})()">清除選擇</button>
    </div>
</fieldset>
`)
var menu=document.querySelector("#hacks")
document.querySelector("label.slow-speed-option").remove()
document.querySelector("#buttons").remove()
document.querySelector("button#all").style.marginLeft="3px"
var yesclip = Runner.prototype.gameOver
setInterval(()=>{
    var started = runnerInstance.tRex.status!=4
    var score = runnerInstance.distanceRan
    if(started) menu.style.bottom="10px"
    if(document.querySelector(`#noclip`).checked)  runnerInstance.gameOver=()=>{}
    if(!document.querySelector(`#noclip`).checked)  runnerInstance.gameOver=yesclip
    if(document.querySelector(`#fly`).checked)  runnerInstance.tRex.groundYPos=-10
    if(!document.querySelector(`#fly`).checked)  runnerInstance.tRex.groundYPos=93
    if(document.querySelector(`#speed`).checked)  runnerInstance.setSpeed(1000)
    if(!document.querySelector(`#speed`).checked&&!document.querySelector(`#lightspeed`))  runnerInstance.setSpeed(6)
    if(document.querySelector(`#lightspeed`).checked)  runnerInstance.setSpeed(10000)
    if(document.querySelector(`#noenemy`).checked)  runnerInstance.horizon.obstacles=[]
    if(document.querySelector(`#autojump`).checked&&started)  document.dispatchEvent(new KeyboardEvent('keydown', { 'keyCode': 32, 'which': 32 }))
    if(document.querySelector(`#night`).checked)  runnerInstance.isDarkMode=true
})
console.log("[DinoHacks] v2.1 by CharlieMoomoo")
console.log("[DinoHacks] 外掛已啟用！")
window.DinoHacksEnabled=true
})()
