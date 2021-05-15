// // module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Bodies = Matter.Bodies,
//     Composite = Matter.Composite;

// // create an engine
// var engine = Engine.create();

// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine
// });

// // create two boxes and a ground
// var boxA = Bodies.rectangle(500, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// // add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, ground]);

// // run the renderer
// Render.run(render);

// // create runner
// var runner = Runner.create();

// // run the engine
// Runner.run(runner, engine);


// let mouse = Matter.Mouse.create(render.canvas);
// let mouseConstraint = Matter.MouseConstraint.create(engine, {
//   mouse: mouse,
//   constraint: {
//     render: {visible: false}
//   }
// });
// render.mouse = mouse;
// Matter.World.add(engine.world,[boxA,boxB,ground,mouseConstraint]);



let engine = Matter.Engine.create();

let render = Matter.Render.create({
  element: document.body,
  engine:engine
});

//parms: x,y,width,height,options
let ground = Matter.Bodies.rectangle(400,600,810,60,{ isStatic: true}); 
let boxA = Matter.Bodies.rectangle(400,200,80,80);
let boxB = Matter.Bodies.rectangle(450,50,80,80);

Matter.World.add(engine.world,[boxA,boxB,ground,mouseCoonstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;

Matter.World.add(engine.world,[boxA,boxB,ground,mouseConstraint]);