import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfall', () => {
  console.log('please turn off the motor');
  setTimeout(() => {
    console.log("please turn off the motor,its a gentle reminder");
  }, 3000);
});
myEmitter.on('turnedoff', () => {
    console.log('motor is tuned offf');
    
  });
  myEmitter.on('isStillOn', () => {
    console.log('flying chapal from mom');
   
  });
  
myEmitter.emit('waterfall');
if(true){
    myEmitter.emit("isStillOn")
}
else{
    myEmitter.emit("turnedoff");
}

// output is this=>

// please turn off the motor
// flying chapal from mom
// please turn off the motor,its a gentle reminder

// because node is non blocking async input ouput