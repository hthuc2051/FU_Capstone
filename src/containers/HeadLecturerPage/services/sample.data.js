import * as Constant from './../../../constants/AppConstants';

export default class ScriptObject {
  constructor() {

  };
  scriptObj = {
    methodName: Constant.METHOD_NAME,
    expectedResult: {
      type: 'String',
      value: 'result',
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
            type: 'String',
            name: 'String',
            value: 'value',
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
            name: 'sendKeysToElementById',
            params: [{
              type: 'String',
              name: '$paramName',
              value: '$paramName',
            },
            {
              type: 'String',
              name: '$paramValue',
              value: '$paramValue',
            }],
            showChildren: false,
            editMode: false,
            code: 'driver.findElement(By.id($paramName)).clear(); driver.findElement(By.id($paramName)).sendKeys($paramValue);',
            children: []
          }
        ]
      }
    ]
  }
}



