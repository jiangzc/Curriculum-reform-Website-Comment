var todo = function()
{
if(window.location.pathname.indexOf('hpList') === -1)
{
alert("����http://zhsz.e21.cn/new2012/hpgl/hpList.php?menuName=hpListҳ�������������");
window.location.href = "http://zhsz.e21.cn/new2012/hpgl/hpList.php?menuName=hpList";
return;
}
var a = document.getElementsByTagName('a');
var b = [];
for(var i = 0; i < a.length; i++)
{
if(a[i].innerText == '��������')
{
b.push(a[i]);
}
}

var next = 0;
var newbutton = document.createElement("input");
newbutton.type = 'button';
newbutton.value = '��ʼ';
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
alert('��������һ���µ��Զ��������ڡ�ע��ҳ�����·��Ŀ�ʼ��ť��ֱ����ť�ϵ����ֵ����ұߵġ�')
newbutton.onclick();
}
todo();