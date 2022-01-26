const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;
const col = require('./data/tableColumns.json');
const data = require('./data/dataSource.json');
const details = require('./data/projectDetails.json');
const reshimatShlavim = require('./data/shlavim.json');
const reshimatcheshbonot = require('./data/cheshbonot.json');
const getpirteyShalav = require('./data/getpirteyShalav.json');
const getyechidot = require('./data/getyechidot.json');
const gushChelka = require('./data/gushChelka.json');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/user/get', (req, res) => {
  console.log('user');
  const user = {
    misparChativa: '22',
    misparAgaf: '99',
    kodSector: '99',
    misparMakal: '88',
  };
  res.json({ data: { userDataMf: user } });
});

app.get('/matbea/shofar/V1/projects/list', (req, res) => {
  console.log('matbea/shofar/projects');
  res.json({ data: { projectsList: data } });
});

app.get('/matbea/shofar/V1/projects/filters', (req, res) => {
  console.log('getComboStatusToProjectsListPage');
  res.json({ data: { projectStatusCombo: data } });
});
app.get('/matbea/shofar/V1/project/:id/steps', (req, res) => {
  console.log('getShlavim');
  res.json({
    metadata: { validations: {} },
    data: { reshimatShlavimList: reshimatShlavim },
  });
});
app.get('/matbea/shofar/V1/cheshbonot/:project/list', (req, res) => {
  console.log('shofar/cheshbonot');
  res.json({
    metadata: { validations: {} },
    data: { cheshbonotList: reshimatcheshbonot },
  });
});

app.get(
  '/matbea/shofar/projects/v1/steps/:misparProject/:misparShalav',
  (req, res) => {
    console.log('getpirteyShalav');
    res.json(getpirteyShalav);
  }
);

app.get('/matbea/shofar/projects/v1/shlav/yechida/215/1/0', (req, res) => {
    console.log('getpirteyShalav');
    res.json(gushChelka);
  }
);
interface Shalav {
  misparTavla: number;
  misparShura: number;
  misparShlav: number;
  teurHaShlav: number;
  metegHeterBniya: number;
  taarich8HeterBniya: number;
  taarich8SiyumTzafui: number;
  teurYeudShlav: string;
  misparYechidotBeSlv: number;
  shemGoremMemamen: null;
}
const metegArr = {
  MetegYeudMegurim: 'מגורים',
  MetegYeudMischar: 'מסחר',
  MetegYeudMisradim: 'משרדים',
  MetegYeudAcher: 'אחר',
};

app.post('/matbea/shofar/projects/v1/steps/', (req, res) => {
  console.log('query', req.query);

  const data = JSON.parse(req.query.projectShlavData) as Shalav;
  for (const key in data) {
    data[key] = data[key]?.toString();
    if (key.includes('Meteg') && data[key] == 1) {
      data.teurYeudShlav = metegArr[key];
    }
  }
  let content = [];
  if (data.misparShura) {
    console.log('old');
    
    content = reshimatShlavim.map((s) => {
      if (s.misparShura === data.misparShura) return { ...s, ...data };
      else return s;
    });
  } else {
    console.log('new');
    
    content = [
      ...reshimatShlavim,
      {
        ...data,
        misparTavla: 1,
        misparYechidotBeSlv: 0,
        misparShura: reshimatShlavim.length,
        misparShlav: reshimatShlavim.length+1,
      },
    ];
  }
  fs.writeFile('./data/shlavim.json', JSON.stringify(content), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({});
  });
});

app.get( '/matbea/shofar/v1/projects/steps/appartments/:misparProyectSagur/:misparShalv/1', (req, res) => {
    console.log('getyechidot');
    res.json(getyechidot);
  }
);
app.get('/shofar/projects', (req, res) => {
  console.log('shofar/projects');
  res.json(data);
});
app.get('/matbea/shofar/V1/projects/:misparProyectSagur/:kodMutav/details', (req, res) => {
  console.log('getPirteyProject');
  res.json({ data: details });
});
app.get('/common/sectors', (req, res) => {
  console.log('sectors');
  res.json({ data: 'jj' });
});
app.get('/common/makals', (req, res) => {
  console.log('makals');
  res.json({ data: 'jj' });
});//try
app.get('/matbea/common/v1/tables/columns/SHOFAR/PROJECTS_LIST/filter/user', (req, res) => {
  console.log('tableColumnsByUser');
  res.json({ data: col });
});
app.get('/common/agafim', (req, res) => {
  console.log('agafim');
  res.json({ data: {} });
});
app.get('/common/*', (req, res) => {
  console.log('common all');
  res.json({ data: 'common all' });
});
app.get('/matbea/shofar/V1/project/:project/amalot', (req, res) => {
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
        sachHakolAmalaNeto: 'ssssstring',
      },
    },
  });
});
app.post('/matbea/shofar/V1/cheshbonot/54/:a/:b/:c/update',(req,res)=>res.json({messages:{global:{errors:[]}}}))
app.get('/matbea/shofar/V1/project/:project/mashkanta', (req, res) => {
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
        sachHakolAmalaNeto: 'any',
      },
      dargatMashkantaOptLst: [
        {
          id: 'string',
          value: 'string',
          shortDesc: 'string',
          longDesc: 'string',
        },
        {
          id: 'string2',
          value: 'string2',
          shortDesc: 'string2',
          longDesc: 'string2',
        },
      ],
    },
  });
});
app.get('/shofar/*', (req, res) => {
  console.log('shofar all');
  res.json({ data: 'shofar all' });
});
app.get('/*', (req, res) => {
  console.log('all');
  res.status(200).json({ data: 'all' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.addListener('error', (err) => {
  console.log('error: ', err);
});