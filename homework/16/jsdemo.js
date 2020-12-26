function sayWaibu()
{
     alert("外部式js");
}
        
        
function countOff(num,m){
     let players=[];
     for(let i=1;i<=num;i++){
       players.push(i);
     }
     let flag=0;
     while(players.length>1){// 剩下一人，结束条件
       let outPlayerNum=0,len=players.length;
       for(let i=0;i<len;i++){
         flag++;
         if(flag===m){
           flag=0;
           console.log("出局："+players[i-outPlayerNum]);
           players.splice(i-outPlayerNum,1);
           outPlayerNum++;
         }
       }
     }
     // return players[0];
     console.log("剩下："+players[0]);
   }
        
       
