function* countPrimes(lb,ub){
    count=0;
    for(i=lb;i<=ub;i++){
        curNum=i;
        factCount=2;
        for(j=2;j<=curNum/2;j++){
            if(curNum%j==0){
                factCount++;
            }
        }
        if(factCount==2){
            count++;
            yield curNum;
        }
    }
    return count;
}

function main(){
    console.log("Job Initiated!");
    stages=countPrimes(2,60);

    shallContinue=true;

    while(shallContinue){
        curStage=stages.next();
        shallContinue=!curStage.done;
        if(shallContinue){
            console.log("Found"+" "+curStage.value+" "+"as Prime");
        }else{
            console.log("total Number of Primes"+curStage.value);
        }
    }
    console.log("job Terminated!");
}

main();