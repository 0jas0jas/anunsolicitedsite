var canvas = $('.frontimage').get(0);

var dimensions = {
  width: $(window).width() / 1.5,
  height: $(window).height() / 1 };


Matter.use('matter-attractors');
Matter.use('matter-wrap');

function runMatter() {
  // module aliases
  var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;


  // create engine
  var engine = Engine.create();
    

  // create renderer
  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: 'rgb(240,240,240)' } });

Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);
  
  // create demo scene
  var world = engine.world;
  engine.world.gravity.y = 0.3;
  engine.world.gravity.x = 0;

    // add bodies
    var stack = Composites.stack(20, 20, 20, 5, 0, 0, function(x, y) {
        return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
    });

    Composite.add(world, stack);
    
    Composite.add(world, [
        Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06, render: { fillStyle: '#060a19' } }),
        Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.06, render: { fillStyle: '#060a19' } }),
        Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.04, render: { fillStyle: '#060a19' } })
    ]);


  // add mouse control
  var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(world, mouseConstraint)

   // keep the mouse in sync with rendering
   render.mouse = mouse;

   Render.lookAt(render, Composite.allBodies(world));

    // wrapping using matter-wrap plugin
    for (var i = 0; i < stack.bodies.length; i += 1) {
        stack.bodies[i].plugin.wrap = {
            min: { x: render.bounds.min.x, y: render.bounds.min.y },
            max: { x: render.bounds.max.x, y: render.bounds.max.y }
        };
    }

  // return a context for MatterDemo to control
  let data = {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function() {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
    }
    };

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);
  return data;
}



function setWindowSize() {
  let dimensions = {};
  dimensions.width = $(window).width() / 1.5;
  dimensions.height = $(window).height() / 1;

  m.render.canvas.width = $(window).width();
  m.render.canvas.height = $(window).height();
  return dimensions;
}

let m = runMatter();
setWindowSize();
