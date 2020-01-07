

import * as Constant from './../../constants/AppConstants';
var scriptObj = {
  methodName: 'checkQuestion1',
  expectedResult: {
    type: 'String',
    value: 'admin',
    editMode: false,
  },
  params: [
    {
      label: Constant.LABEL_PARAM,
      parentId: 39,
      name: 'Input Parameters',
      showChildren: true,
      editMode: false,
      children: [
        {
          label: Constant.LABEL_PARAM,
          parentId: 50,
          type:'String',
          name: 'username',
          value:'NguyenVanA',
          showChildren: false,
          editMode: false,
          children: []
        },
        {
          label: Constant.LABEL_PARAM,
          parentId: 50,
          type:'String',
          name: 'password',
          value:'p4ssw0rd',
          showChildren: false,
          editMode: false,
          children: []
        }
      ]
    },
    {

      parentId: 39,
      name: 'Step',
      label: Constant.LABEL_STEP,
      showChildren: true,
      editMode: false,
      children: [
        {

          label: Constant.LABEL_STEP,
          type:'findViewById',
          name: 'txtUsername',
          value:'NguyenVanA',
          showChildren: false,
          editMode: false,
          children: []
        },
        {

          label: Constant.LABEL_STEP,
          type:'findViewById',
          name: 'txtPassword',
          value:'p4ssw0rd',
          showChildren: false,
          editMode: false,
          children: []
        }
      ]
    }
  ]
}


export default scriptObj;


