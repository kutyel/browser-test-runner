# browser-test-runner

The goal of this task is to give us an idea of **how you write maintainable code using familiar technologies**.

Feel free to use whatever tools, languages, and libraries you are most comfortable with to build this. We'll be evaluating your code with the expectation that you're working with familiar technologies, so if you find yourself thinking "I'm not super comfortable with **\_\_** but it will impress them if I use it," **do not do that!** There are no bonus points whatsoever for technology choices here. Choose only technologies you're comfortable with!

## The Task

Your task is to create a test runner that runs automated tests in the browser and reports on their results as soon as each test completes.

Start by copying the following JavaScript code. (You may translate it to a different language if you're using a compile-to-JS language.) It gives you a series of tests to run, which randomly succeed or fail after running for a few seconds. Use these exact tests as the inputs to your test runner.

```javascript
function generateDummyTest() {
  const delay = 7000 + Math.random() * 7000
  const testPassed = Math.random() > 0.5

  return function (callback) {
    setTimeout(function () {
      callback(testPassed)
    }, delay)
  }
}

const tests = [
  { description: 'commas are rotated properly', run: generateDummyTest() },
  { description: 'exclamation points stand up straight', run: generateDummyTest() },
  { description: "run-on sentences don't run forever", run: generateDummyTest() },
  { description: 'question marks curl down, not up', run: generateDummyTest() },
  { description: 'semicolons are adequately waterproof', run: generateDummyTest() },
  { description: 'capital letters can do yoga', run: generateDummyTest() },
]
```

All 6 tests should be run simultaneously. The user interface should contain the following, using whatever design you like:

- The current status of each test (Not Started Yet, Running, Passed, or Failed)
- One "Start Tests" button to start all of the tests
- How many total tests have passed so far
- How many total tests have failed so far
- How many total tests are still running
- An indication (e.g. "FINISHED!") when all tests have completed running
- The tests should sort in realtime – running tests should appear at the top of the page, followed by passed tests, followed by failed tests.

Initially each test is in the `Not Started Yet` state, so the user must press the "Start Tests" button to start them running. Once they are running, the interface should update in realtime without further user interaction.

## Guidelines

Again, please **use technologies you are already familiar with!**

We are more interested in how you solve the problem than if you solve it completely—so please take the time to produce well-designed, maintainable code that follows good practices. You can also help us get an idea of how you think about code by writing up any interesting design or implementation details, contrasting your design with potential alternatives, etc.

Please include a README with some brief instructions on how to build the project.
