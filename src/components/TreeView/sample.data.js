

var scriptObj = {
  methodName: 'checkQuestion1',
  expectedResult: {
    type: 'String',
    value: 'admin',
    editMode: false,
  },
  params: [
    {

      parentId: 39,
      name: 'Input Params',
      showChildren: true,
      editMode: false,
      children: [
        {

          parentId: 50,
          type: 'String',
          name: 'username',
          value: 'NguyenVanA',
          showChildren: false,
          editMode: false,
          children: []
        },
        {

          parentId: 50,
          type: 'String',
          name: 'password',
          value: 'p4ssw0rd',
          showChildren: false,
          editMode: false,
          children: []
        }
      ]
    }
  ],
  steps: [
    {
      parentId: 39,
      name:'Steps',
      showChildren: true,
      editMode: false,
      children:
      [
        {

          parentId: 51,
          type: 'findElementById',
          name: 'txtUsername',
          value: 'NguyenVanA',
          showChildren: false,
          editMode: false,
          children: []
        },
        {
          
          parentId: 51,
          type: 'findElementById',
          name: 'txtPassword',
          value: 'p4ssw0rd',
          showChildren: false,
          editMode: false,
          children: []
        }
      ]
    }
  ]
}


export default scriptObj;


