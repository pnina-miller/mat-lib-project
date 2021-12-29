const express = require('express')
const app = express()
const port = 8080
const col = require('./data/tableColumns.json')
const data = require('./data/dataSource.json')
const details = require('./data/projectDetails.json')
const reshimatShlavim = require('./data/shlavim.json')
const getpirteyShalav = require('./data/getpirteyShalav.json')
const getyechidot = require('./data/getyechidot.json')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/user/get', (req, res) => {
  console.log('user');
  const user = { misparChativa: '22', misparAgaf: '99', kodSector: '99', misparMakal: '88' }
  res.json({ data: { userDataMf: user } })
})
app.get('/matbea/shofar/projects', (req, res) => {
  console.log('matbea/shofar/projects');
  res.json({ data: { projectsList: data } })
})
app.get('/matbea/shofar/projects/combobox', (req, res) => {
  console.log('matbea/shofar/projects/combobox');
  res.json({ data: { projectStatusCombo: data } })
})
app.get('/matbea/shofar/projects/:id/shlavim', (req, res) => {
  console.log('shofar/shlavim');
  res.json({ "metadata": { "validations": {} }, "data": { "reshimatShlavimList": reshimatShlavim } })
})
app.get('/shofar/chshbonotproject/get', (req, res) => {
  console.log('shofar/shlavim');
  res.json({ "metadata": { "validations": {} }, "data": { "cheshbonotList": reshimatShlavim } })
})
app.get('/matbea/shofar/projects/v1/steps/:misparProject/:misparShalav', (req, res) => {
  console.log('getpirteyShalav');
  res.json(getpirteyShalav);
})

app.get('/matbea/shofar/projects/v1/steps/appartments/:misparProyectSagur/:misparShalv/1', (req, res) => {
  console.log('getyechidot');
  res.json(getyechidot)
})
app.get('/shofar/projects', (req, res) => {
  console.log('shofar/projects');
  res.json(data)
})
app.get('/shofar/pirteyProject/get', (req, res) => {
  console.log('shofar/pirteyProject/get');
  res.json({ data: details })
})
app.get('/common/sectors', (req, res) => {
  console.log('sectors');
  res.json({ data: 'jj' })
})
app.get('/common/makals', (req, res) => {
  console.log('makals');
  res.json({ data: 'jj' })
})
app.get('/common/tables/tableColumnsByUser', (req, res) => {
  console.log('tableColumnsByUser');
  res.json({ data: col })
})
app.get('/common/agafim', (req, res) => {
  console.log('agafim');
  res.json({ data: {} })
})
app.get('/common/*', (req, res) => {
  console.log('common all');
  res.json({ data: 'common all' })
})
app.get('/shofar/amalot', (req, res) => {
  console.log('amalot');
  res.json({
    data: {
      amalot: {
        misparProyectSagur: 'ssssstring',
        kodAmala: 'ssssssstring',
        shiurHncaAmalatTipul: 'asssstring',
        shiurAmlatArvutSna: 'ssssstring',
        shiurAmlArvLloHeter: 'ssssstring',
        shiurAmlArvDiraOcls: 'ssssstring',
        sachHakolAmalaNeto: 'ssssstring'
      }
    }
  })
})
app.get('/shofar/natuney-mashkanta', (req, res) => {
  console.log('shofar all');

  res.json({
    data: {
      natuneyMashkantaData: {
        misparProyectSagur: 'any',
        tar8HchvLeRsmMsknt: 'string',
        tar8HchvLeRsmMskntDt: new Date(),
        mezaheTikRmi: 'any',
        kodDargatMashkanta: 'any',
        teurDargatMsknt: 'any',
        melelDargatMashkanta: 'any',
        metegHagbala: 'any',
        schumHitchayvutMsknt: 'any',
      },
      amalot: {
        misparProyectSagur: 'any',
        kodAmala: 'any',
        shiurHncaAmalatTipul: 'any',
        shiurAmlatArvutSna: 'any',
        shiurAmlArvLloHeter: 'any',
        shiurAmlArvDiraOcls: 'any',
        sachHakolAmalaNeto: 'any'
      },
      dargatMashkantaOptLst: [{
        id: 'string',
        value: 'string',
        shortDesc: 'string',
        longDesc: 'string'
      },
      {
        id: 'string2',
        value: 'string2',
        shortDesc: 'string2',
        longDesc: 'string2'
      }]
    }
  })
})
app.get('/shofar/*', (req, res) => {
  console.log('shofar all');
  res.json({ data: 'shofar all' })
})
app.get('/*', (req, res) => {
  console.log('all');
  res.status(404).json({ data: 'all' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.addListener('error', err => { console.log('error: ', err); })

