var OO = {
    foo: function(x) { alert(x.a); alert(x.b); },
    bar: function() {  window.x = 1; },
    al: function(param) { alert("Hello I'm server call" + param.deptno); return { "aaa" : "bbbb" }; }
 };