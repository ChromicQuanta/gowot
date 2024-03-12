WebSocket = require("ws")
http = require("http")
http.createServer((q,s)=>{
    s.end("GOWOT")
}).listen(80)
function createWS(){
ws = new WebSocket("wss://ourworldoftext.com/cq/ws/?key=4q66x")
    
ws.onclose = createWS
    ws.onopen = ()=>{

    setInterval(()=>{
        for(y=0;y<height;y++){
 for(x=0;x<width;x++){
    pos[y][x] = Math.round(Math.random())
}   
}
    },30000)

    setInterval(()=>{
Transcribe()
        
    obj.edits = edts
    ws.send(JSON.stringify(obj))
var y
        var x
for(y=0;y<height;y++){
    for(x=0;x<width;x++){
        gstate = arr[0][y][x];
        if(gstate==undefined){
            console.log(x,y)
        }
        //console.log(gstate)
        gnum = arr[0][mod(y-1,height)][mod(x-1,width)]+arr[0][mod(y-1,height)][mod(x+1,width)]+arr[0][mod(y+1,height)][mod(x-1,width)]+arr[0][mod(y+1,height)][mod(x+1,width)]+arr[0][mod(y-1,height)][mod(x,width)]+arr[0][mod(y+1,height)][mod(x,width)]+arr[0][mod(y,height)][mod(x+1,width)]+arr[0][mod(y,height)][mod(x-1,width)]

        arr[1][y][x] = golRule[gstate][gnum]
        
    }
}
        arr.reverse()
        
    },100)
}
}

obj = {"kind":"write","edits":[]}
edts = []
/* Game of Life by ChromicQuanta */
function getSymbol([[a,b],[c,d],[e,f]]){
    num = a+b*2+c*4+d*8+e*16+f*32
    if(num==0) return " "
    if(num==63) return "█"
    if(num==1+4+16) return "▌"
    if(num==2+8+32) return "▐"
    if(num>1+4+16) num--
    if(num>2+8+32-1) num--
    num--
    return String.fromCharCode(0xD83E)+String.fromCharCode(0xDF00+num)
}

width = 60
height = 45

pos = new Array(height).fill(0).map(()=>{return new Array(width).fill(0)})
npos = new Array(height).fill(0).map(()=>{return new Array(width).fill(0)})

for(y=0;y<height;y++){
 for(x=0;x<width;x++){
    pos[y][x] = Math.round(Math.random())
}   
}
arr = [pos,npos]

function Transcribe(){
    edts = []
    for(y=0;y<height/3;y++){
    for(x=0;x<width/2;x++){
        edts.push(char(xy2tc([x,y]),getSymbol([[arr[0][y*3][x*2],arr[0][y*3][x*2+1]], [arr[0][y*3+1][x*2],arr[0][y*3+1][x*2+1]], [arr[0][y*3+2][x*2],arr[0][y*3+2][x*2+1]]]),0))
    }
    }
}

function xy2tc([x,y]){
    return [[Math.floor(x/16),Math.floor(y/8)],[x-Math.floor(x/16)*16,y-Math.floor(y/8)*8]]
}
function char([[tx,ty],[cx,cy]],char,clr){
    return[ty,tx,cy,cx,Date.now(),char,2,clr]
}

golRule = [[0,0,0,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0]]


function mod(x,m){
    return x-Math.floor(x/m)*m
}

createWS()
