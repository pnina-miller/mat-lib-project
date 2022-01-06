const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;
const col = require('./data/tableColumns.json');
const data = require('./data/dataSource.json');
const details = require('./data/projectDetails.json');
const reshimatShlavim = require('./data/shlavim.json');
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
app.get('/matbea/shofar/projects/combobox', (req, res) => {
  console.log('matbea/shofar/projects/combobox');
  res.json({ data: { projectStatusCombo: data } });
});
app.get('/matbea/shofar/projects/:id/shlavim', (req, res) => {
  console.log('shofar/shlavim');
  res.json({
    metadata: { validations: {} },
    data: { reshimatShlavimList: reshimatShlavim },
  });
});
app.get('/shofar/chshbonotproject/get', (req, res) => {
  console.log('shofar/shlavim');
  res.json({
    metadata: { validations: {} },
    data: { cheshbonotList: reshimatShlavim },
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

app.get(
  '/matbea/shofar/v1/projects/steps/appartments/:misparProyectSagur/:misparShalv/1',
  (req, res) => {
    console.log('getyechidot');
    res.json(getyechidot);
  }
);
app.get('/shofar/projects', (req, res) => {
  console.log('shofar/projects');
  res.json(data);
});
app.get('/matbea/shofar/V1/projects/0/:misparProyectSagur/:kodMutav/details', (req, res) => {
  console.log('shofar/pirteyProject/get');
  res.json({ data: details });
});
app.get('/common/sectors', (req, res) => {
  console.log('sectors');
  res.json({ data: 'jj' });
});
app.get('/common/makals', (req, res) => {
  console.log('makals');
  res.json({ data: 'jj' });
});
app.get('/common/tables/tableColumnsByUser', (req, res) => {
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
        sachHakolAmalaNeto: 'ssssstring',
      },
    },
  });
});
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
  res.status(404).json({ data: 'all' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.addListener('error', (err) => {
  console.log('error: ', err);
});

import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import ItemList from "./ItemList";
import Footer from "./Footer";

function App() {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: "item 1",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: true,
      item: "item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }
    const handlDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    };

    return (
      <div className="App">
        <Header title="grocories" />
        <Content
          items={items}
          setItem={setItem}
          handleCheck={handleCheck}
          handlDelete={handlDelete}
        />
        <Footer length={items.length} />
        <ItemList />
      </div>
    );
  }


export default App;