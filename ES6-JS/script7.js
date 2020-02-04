function* dummyGenerator(){

    yield "stage 1 completed";

    yield "stage 2 completed";

    return "job completed";
}

function temp(){
    console.log("I am temp function");
    stages= dummyGenerator();

    shallContinue=true;

    while(shallContinue){
        curStage= stages.next();
        console.log(curStage.value);
        console.log("I am temp function");
        shallContinue=!curStage.done;
    }
}

temp();