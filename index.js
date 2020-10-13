const btn = document.querySelector('.start')
const ul = document.querySelector('.tests-to-run')
const pass = document.querySelector('.passed')
const fail = document.querySelector('.failed')
const runn = document.querySelector('.running')

let passed = 0,
  failed = 0,
  running = 0

function generateDummyTest() {
  const delay = 7000 + Math.random() * 7000
  const testPassed = Math.random() > 0.5

  return new Promise((resolve) => {
    setTimeout(resolve, delay, testPassed)
  })
}

const tests = [
  {
    description: 'commas are rotated properly',
    run: generateDummyTest(),
    status: '❔',
  },
  {
    description: 'exclamation points stand up straight',
    run: generateDummyTest(),
    status: '❔',
  },
  {
    description: "run-on sentences don't run forever",
    run: generateDummyTest(),
    status: '❔',
  },
  {
    description: 'question marks curl down, not up',
    run: generateDummyTest(),
    status: '❔',
  },
  {
    description: 'semicolons are adequately waterproof',
    run: generateDummyTest(),
    status: '❔',
  },
  {
    description: 'capital letters can do yoga',
    run: generateDummyTest(),
    status: '❔',
  },
]

const byStatus = (a, b) => {
  if (a.status === '🔄' && b.status === '✅') return -1
  if (a.status === '✅' && b.status === '🔄') return 1
  if (a.status === '❌' && b.status === '🔄') return 1
  if (a.status === '🔄' && b.status === '❌') return -1
  if (a.status === '✅' && b.status === '❌') return -1
  if (a.status === '❌' && b.status === '✅') return 1
  return 0
}

const renderTests = () => {
  ul.innerHTML = tests.map((t) => `<li>${t.description} ${t.status}</li>`).join('\n')
  // update counters
  pass.innerHTML = passed
  fail.innerHTML = failed
  runn.innerHTML = running
}

const runTest = (t) => (hasPassed) => {
  if (hasPassed) {
    t.status = '✅'
    passed++
    running--
  } else {
    t.status = '❌'
    failed++
    running--
  }
  tests.sort(byStatus)
  renderTests()
}

btn.addEventListener('click', () => {
  running = 6
  btn.textContent = 'Tests are running...'
  btn.disabled = true
  tests.forEach((t) => (t.status = '🔄'))
  renderTests()
  Promise.all(tests.map((t) => t.run.then(runTest(t)))).then(() => {
    btn.disabled = false
    btn.innerHTML = `<h3>All Tests have finished! ✅</h3>`
  })
})

renderTests()
