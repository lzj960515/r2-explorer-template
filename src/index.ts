import { R2Explorer } from 'r2-explorer';

export default R2Explorer({ readonly: false, basicAuth: [{
    username: 'teste',
    password: 'abc'
  },{
    username: 'anotherUser',
    password: '123567'
  }]
});
