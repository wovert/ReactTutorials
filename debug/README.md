```
console.log("日志信息")

console.warn("警告")

console.error("错误信息")

console.group("第一组")
console.log(1)
console.groupEnd()

console.group("第二组")
console.log(2)
console.groupEnd()


var cat = {}
cat.name = "咪咪"
cat.color = "red"

console.dir(cat)
console.dirxml(cat)

var flag = false
console.assert(flag == true)


function a() {
    return b()
}

function b() {
    return c()
}

function c() {
    console.trace()
    return 1
}

a()

console.time('计时器')
for (var i=0; i<1000000; i++){}
console.timeEnd('计时器')



function func() {
    for(var i=0; i<10; i++) {
        b();
    }
    for (var i=0; i<5; i++) {
        c();
    }
    function b() {
        var b = 10;
    }
    function c() {
        var c = 20;
    }

}
console.profile(1)
func()
console.profileEnd(1)

console.log('end')


```