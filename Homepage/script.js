console.log("JS here!")

var canvas = $('.frontimage').get(0);

var dimensions = {
  width: $(window).width(),
  height: $(window).height() };


Matter.use('matter-attractors');
Matter.use('matter-wrap');

function runMatter() {
  // module aliases
  var Engine = Matter.Engine,
  Events = Matter.Events,
  Runner = Matter.Runner,
  Render = Matter.Render,
  World = Matter.World,
  Body = Matter.Body,
  Mouse = Matter.Mouse,
  Common = Matter.Common,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create();

  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  // create renderer
  var render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      showVelocity: false,
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: 'rgb(240,240,240)' } });



  // create runner
  var runner = Runner.create();

  // Runner.run(runner, engine);
  // Render.run(render);

  // create demo scene
  var world = engine.world;
  world.gravity.scale = 0;

  // create a body with an attractor
  var attractiveBody = Bodies.circle(
  render.options.width / 2,
  render.options.height / 2,
  Math.max(dimensions.width / 6, dimensions.height / 6) / 2,
  {
    render: {
      fillStyle: `rgb(240,240,240)`,
      strokeStyle: `rgb(240,240,240)`,
      lineWidth: 0 },

    isStatic: true,
    plugin: {
      attractors: [
      function (bodyA, bodyB) {
        return {
          x: (bodyA.position.x - bodyB.position.x) * 1e-6,
          y: (bodyA.position.y - bodyB.position.y) * 1e-6 };

      }] } });




  World.add(world, attractiveBody);

  // add some bodies that to be attracted
  for (var i = 0; i < 60; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    let poligonNumber = Common.random(3, 6);
    var body = Bodies.polygon(
    x, y,
    poligonNumber,
    s,

    {
      mass: s / 20,
      friction: 0,
      frictionAir: 0.02,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: '#FFFFFF',
        strokeStyle: `#DDDDDD`,
        lineWidth: 2 } });




    World.add(world, body);


    let r = Common.random(0, 1);
    var circle = Bodies.circle(x, y, Common.random(2, 8), {
      mass: 0.1,
      friction: 0,
      frictionAir: 0.01,
      render: {
        fillStyle: r > 0.3 ? `#FF2D6A` : `rgb(240,240,240)`,
        strokeStyle: `#E9202E`,
        lineWidth: 2 } });


    World.add(world, circle);

    var circle = Bodies.circle(x, y, Common.random(2, 20), {
      mass: 6,
      friction: 0,
      frictionAir: 0,
      render: {
        fillStyle: r > 0.3 ? `#4267F8` : `rgb(240,240,240)`,
        strokeStyle: `#3257E8`,
        lineWidth: 4 } });


    World.add(world, circle);

    var circle = Bodies.circle(x, y, Common.random(2, 30), {
      mass: 0.2,
      friction: 0.6,
      frictionAir: 0.8,
      render: {
        fillStyle: `rgb(240,240,240)`,
        strokeStyle: `#FFFFFF`,
        lineWidth: 3 } });

    World.add(world, circle);
  }

  // add mouse control
  var mouse = Mouse.create(render.canvas);

  Events.on(engine, 'afterUpdate', function () {
    if (!mouse.position.x) return;
    // smoothly move the attractor body towards the mouse
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12 });

  });


  // return a context for MatterDemo to control
  let data = {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
    play: function () {
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
    } };

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);
  return data;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function setWindowSize() {
  let dimensions = {};
  dimensions.width = $(window).width();
  dimensions.height = $(window).height();

  m.render.canvas.width = $(window).width();
  m.render.canvas.height = $(window).height();
  return dimensions;
}

let m = runMatter();
setWindowSize();
$(window).resize(debounce(setWindowSize, 250));


//CALCULATOR EVERYTHING

class calculator{
  constructor(previousElement, currentElement){
    this.previousElement = previousElement
    this.currentElement = currentElement
    this.clear()
  }

  clear(){
    this.current = ''
    this.previous = ''
    this.operation = undefined
  }

  delete(){
    this.current = this.current.toString().slice(0, -1)
  }

  appendNumber(number){
    if (number === "." && this.current.includes('.')) return 
    this.current = this.current.toString() + number.toString()
  }

  chooseOperation(operation){
    if (this.current === '') return
    if (this.previous !== '') {
      this.compute()
    }
    this.operation = operation
    this.previous = this.current
    this.current = ''
  }

  compute(){
    let computation
    const prev = parseFloat(this.previous)
    const curr = parseFloat(this.current)
    if (isNaN(prev) || isNaN(curr)) return
    switch (this.operation){
      case '➕': 
        computation = prev + curr
        break
      case '➖':
        computation = prev - curr
        break
      case '❌':
        computation = prev * curr
        break
      case '➗':
        if (curr === 0){
          window.open("https://0jas0jas.github.io/RiskOfRain/yt.html"); 
        }
        computation = prev / curr
      default:
        return
    }
    this.current = computation
    this.operation = undefined
    this.previous = ''
  }

  getDisplayNumber(number){
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay(){
    this.currentElement.innerText = this.getDisplayNumber(this.current)
    if (this.operation != null){
      this.previousElement.innerText = 
      `${this.getDisplayNumber(this.previous)} ${this.operation}`
    }else{
      this.previousElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete');
const previousElement = document.querySelector('[data-previous]');
const currentElement = document.querySelector('[data-current]');
const allClearButton = document.querySelector('[data-all-clear]');

const Calculator = new calculator(previousElement, currentElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () =>{
    Calculator.appendNumber(button.innerText)
    Calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () =>{
    Calculator.chooseOperation(button.innerText)
    Calculator.updateDisplay()
  })
})

equalButton.addEventListener('click', button =>{
  Calculator.compute()
  Calculator.updateDisplay()
})

allClearButton.addEventListener('click', button =>{
  Calculator.clear()
  Calculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>{
  Calculator.delete()
  Calculator.updateDisplay()
})