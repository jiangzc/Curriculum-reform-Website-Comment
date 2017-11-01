var todo = function()
{
if(window.location.pathname.indexOf('hpList') === -1)
{
alert("请在http://zhsz.e21.cn/new2012/hpgl/hpList.php?menuName=hpList页面重新输入代码");
window.location.href = "http://zhsz.e21.cn/new2012/hpgl/hpList.php?menuName=hpList";
return;
}
var a = document.getElementsByTagName('a');
var b = [];
for(var i = 0; i < a.length; i++)
{
if(a[i].innerText == '进行评价')
{
b.push(a[i]);
}
}

var next = 0;
var newbutton = document.createElement("input");
newbutton.type = 'button';
newbutton.value = '开始';
newbutton.id = 'newbutton';
newwin = window.open(b[next].href);
newbutton.onclick = function(){
newwin.location.href = b[next].href;
setTimeout("newwin.document.getElementById('button2').click();",1000);next++;
;newbutton.value=next;
if(next <= b.length)
{
setTimeout("newbutton.onclick();",4500)
}
}
document.body.appendChild(newbutton);

var total = document.createElement('strong');
total.innerText = b.length;
document.body.appendChild(total);
alert('即将开启一个新的自动操作窗口。注意页面最下方的开始按钮，直到按钮上的数字等于右边的。')
newbutton.onclick();
}
todo();