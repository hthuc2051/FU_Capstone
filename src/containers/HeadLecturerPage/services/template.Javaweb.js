import * as Constant from './../../../constants/AppConstants';

export default class ScriptTemplateJavaWeb {
  constructor() {
  };
  DEFAULT = {
    methodName: Constant.METHOD_NAME,
    template: 'Default',
    params: [
      {

        parentId: 39,
        name: 'Step',
        label: Constant.LABEL_STEP,
        showChildren: true,
        editMode: false,
        children: [
          {
            label: Constant.LABEL_STEP,
            name: 'Input_TextBox_By_ID',
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
    ],
    code: 'public void testcase(){driver.findElement(By.id($paramName)).clear(); driver.findElement(By.id($paramName)).sendKeys($paramValue);}',
  }
  LOGIN = {
    methodName: Constant.METHOD_NAME_LOGIN,
    template: 'Login',
    params: [
      {
        name: 'Step',
        label: Constant.LABEL_STEP,
        showChildren: true,
        editMode: false,
        children: [
          {
            label: Constant.LABEL_STEP,
            name: 'Add_If',
            params: [{
              type: 'Code',
              name: '$variable',
              value: '!isLogin',
            }],
            showChildren: true,
            editMode: false,
            code: 'if( !isLogin ){ //body }',
            children: [{
              name: 'Assert_True',
              label: Constant.LABEL_STEP,
              showChildren: false,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'false',
              }],
              code: 'assertTrue( false );',
              children: []
            }],
          },
          {
            label: Constant.LABEL_STEP,
            name: 'Add_Else',
            params: [],
            showChildren: true,
            editMode: false,
            code: 'else{ //body }',
            children: [{
              name: 'Add_If',
              label: Constant.LABEL_STEP,
              showChildren: true,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'driver != null',
              }],
              code: 'if( driver != null ){ //body }',
              children: [
                {
                  name: 'Get_URL',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [{
                    type: 'String',
                    name: '$url',
                    value: 'http://localhost:8080/login.html',
                  }],
                  code: 'driver.get( "http://localhost:8080/login.html" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtUsername',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtUsername" )).clear();driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtPassword',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtPassword" )).clear();driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Add_Try',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [],
                  code: 'try{ //body }',
                  children:
                    [
                      {
                        name: 'Get_Text_By_Name',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$variable',
                            value: 'html',
                          },
                          {
                            type: 'String',
                            name: '$paramName',
                            value: 'body',
                          }
                        ],
                        code: 'String html = driver.findElement(By.tagName("body")).getText();',
                        children: []
                      },
                      {
                        name: 'Assert_Equal',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$expected',
                            value: 'true',
                          },
                          {
                            type: 'Code',
                            name: '$actual',
                            value: 'html.toLowerCase().contains("search page")',
                          }
                        ],
                        code: 'assertEquals( true, html.toLowerCase().contains("search page"));',
                        children: []
                      },

                    ]
                },
                {
                  name: 'Add_Catch',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [
                    {
                      type: 'Code',
                      name: '$variable',
                      value: 'Exception e',
                    },
                  ],
                  code: 'catch( Exception e ){ //body }',
                  children: [
                    {
                      name: 'Assert_True',
                      label: Constant.LABEL_STEP,
                      showChildren: false,
                      editMode: false,
                      params: [
                        {
                          type: 'Code',
                          name: '$variable',
                          value: 'false',
                        },
                      ],
                      code: 'assertTrue( false );',
                      children: []
                    }
                  ]
                },
              ]
            }],
          },
        ]
      }
    ],
    code: 'public void ' + Constant.METHOD_NAME_LOGIN + '(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
  }

  CREATE = {
    methodName: Constant.METHOD_NAME_CREATE,
    template: 'Create',
    params: [
      {
        name: 'Step',
        label: Constant.LABEL_STEP,
        showChildren: true,
        editMode: false,
        children: [
          {
            label: Constant.LABEL_STEP,
            name: 'Add_If',
            params: [{
              type: 'Code',
              name: '$variable',
              value: '!isLogin',
            }],
            showChildren: true,
            editMode: false,
            code: 'if( !isLogin ){ //body }',
            children: [{
              name: 'Assert_True',
              label: Constant.LABEL_STEP,
              showChildren: false,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'false',
              }],
              code: 'assertTrue( false );',
              children: []
            }],
          },
          {
            label: Constant.LABEL_STEP,
            name: 'Add_Else',
            params: [],
            showChildren: true,
            editMode: false,
            code: 'else{ //body }',
            children: [{
              name: 'Add_If',
              label: Constant.LABEL_STEP,
              showChildren: true,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'driver != null',
              }],
              code: 'if( driver != null ){ //body }',
              children: [
                {
                  name: 'Get_URL',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [{
                    type: 'String',
                    name: '$url',
                    value: 'http://localhost:8080/login.html',
                  }],
                  code: 'driver.get( "http://localhost:8080/login.html" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtUsername',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtPassword',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Add_Try',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [],
                  code: 'try{ //body }',
                  children:
                    [
                      {
                        name: 'Get_Text_By_Name',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$variable',
                            value: 'html',
                          },
                          {
                            type: 'String',
                            name: '$paramName',
                            value: 'body',
                          }
                        ],
                        code: 'String html = driver.findElement(By.tagName("body")).getText();',
                        children: []
                      },
                      {
                        name: 'Assert_Equal',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$expected',
                            value: 'true',
                          },
                          {
                            type: 'Code',
                            name: '$actual',
                            value: 'html.toLowerCase().contains("search page")',
                          }
                        ],
                        code: 'assertEquals( true, html.toLowerCase().contains("search page"));',
                        children: []
                      },

                    ]
                },
                {
                  name: 'Add_Catch',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [
                    {
                      type: 'Code',
                      name: '$variable',
                      value: 'Exception e',
                    },
                  ],
                  code: 'catch( Exception e ){ //body }',
                  children: [
                    {
                      name: 'Assert_True',
                      label: Constant.LABEL_STEP,
                      showChildren: false,
                      editMode: false,
                      params: [
                        {
                          type: 'Code',
                          name: '$variable',
                          value: 'false',
                        },
                      ],
                      code: 'assertTrue( false );',
                      children: []
                    }
                  ]
                },
              ]
            }],
          },
        ]
      }
    ],
    code: 'public void ' + Constant.METHOD_NAME_CREATE + '(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
  }

  UPDATE = {
    methodName: Constant.METHOD_NAME_UPDATE,
    template: 'Update',
    params: [
      {
        name: 'Step',
        label: Constant.LABEL_STEP,
        showChildren: true,
        editMode: false,
        children: [
          {
            label: Constant.LABEL_STEP,
            name: 'Add_If',
            params: [{
              type: 'Code',
              name: '$variable',
              value: '!isLogin',
            }],
            showChildren: true,
            editMode: false,
            code: 'if( !isLogin ){ //body }',
            children: [{
              name: 'Assert_True',
              label: Constant.LABEL_STEP,
              showChildren: false,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'false',
              }],
              code: 'assertTrue( false );',
              children: []
            }],
          },
          {
            label: Constant.LABEL_STEP,
            name: 'Add_Else',
            params: [],
            showChildren: true,
            editMode: false,
            code: 'else{ //body }',
            children: [{
              name: 'Add_If',
              label: Constant.LABEL_STEP,
              showChildren: true,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'driver != null',
              }],
              code: 'if( driver != null ){ //body }',
              children: [
                {
                  name: 'Get_URL',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [{
                    type: 'String',
                    name: '$url',
                    value: 'http://localhost:8080/login.html',
                  }],
                  code: 'driver.get( "http://localhost:8080/login.html" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtUsername',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtPassword',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Add_Try',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [],
                  code: 'try{ //body }',
                  children:
                    [
                      {
                        name: 'Get_Text_By_Name',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$variable',
                            value: 'html',
                          },
                          {
                            type: 'String',
                            name: '$paramName',
                            value: 'body',
                          }
                        ],
                        code: 'String html = driver.findElement(By.tagName("body")).getText();',
                        children: []
                      },
                      {
                        name: 'Assert_Equal',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$expected',
                            value: 'true',
                          },
                          {
                            type: 'Code',
                            name: '$actual',
                            value: 'html.toLowerCase().contains("search page")',
                          }
                        ],
                        code: 'assertEquals( true, html.toLowerCase().contains("search page"));',
                        children: []
                      },

                    ]
                },
                {
                  name: 'Add_Catch',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [
                    {
                      type: 'Code',
                      name: '$variable',
                      value: 'Exception e',
                    },
                  ],
                  code: 'catch( Exception e ){ //body }',
                  children: [
                    {
                      name: 'Assert_True',
                      label: Constant.LABEL_STEP,
                      showChildren: false,
                      editMode: false,
                      params: [
                        {
                          type: 'Code',
                          name: '$variable',
                          value: 'false',
                        },
                      ],
                      code: 'assertTrue( false );',
                      children: []
                    }
                  ]
                },
              ]
            }],
          },
        ]
      }
    ],
    code: 'public void ' + Constant.METHOD_NAME_UPDATE + '(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
  }

  DELETE = {
    methodName: Constant.METHOD_NAME_DELETE,
    template: 'Delete',
    params: [
      {
        name: 'Step',
        label: Constant.LABEL_STEP,
        showChildren: true,
        editMode: false,
        children: [
          {
            label: Constant.LABEL_STEP,
            name: 'Add_If',
            params: [{
              type: 'Code',
              name: '$variable',
              value: '!isLogin',
            }],
            showChildren: true,
            editMode: false,
            code: 'if( !isLogin ){ //body }',
            children: [{
              name: 'Assert_True',
              label: Constant.LABEL_STEP,
              showChildren: false,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'false',
              }],
              code: 'assertTrue( false );',
              children: []
            }],
          },
          {
            label: Constant.LABEL_STEP,
            name: 'Add_Else',
            params: [],
            showChildren: true,
            editMode: false,
            code: 'else{ //body }',
            children: [{
              name: 'Add_If',
              label: Constant.LABEL_STEP,
              showChildren: true,
              editMode: false,
              params: [{
                type: 'Code',
                name: '$variable',
                value: 'driver != null',
              }],
              code: 'if( driver != null ){ //body }',
              children: [
                {
                  name: 'Get_URL',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [{
                    type: 'String',
                    name: '$url',
                    value: 'http://localhost:8080/login.html',
                  }],
                  code: 'driver.get( "http://localhost:8080/login.html" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtUsername',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Input_TextBox_By_Name',
                  label: Constant.LABEL_STEP,
                  showChildren: false,
                  editMode: false,
                  params: [
                    {
                      type: 'String',
                      name: '$paramName',
                      value: 'txtPassword',
                    },
                    {
                      type: 'String',
                      name: '$paramValue',
                      value: 't01',
                    }
                  ],
                  code: 'driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );',
                  children: []
                },
                {
                  name: 'Add_Try',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [],
                  code: 'try{ //body }',
                  children:
                    [
                      {
                        name: 'Get_Text_By_Name',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$variable',
                            value: 'html',
                          },
                          {
                            type: 'String',
                            name: '$paramName',
                            value: 'body',
                          }
                        ],
                        code: 'String html = driver.findElement(By.tagName("body")).getText();',
                        children: []
                      },
                      {
                        name: 'Assert_Equal',
                        label: Constant.LABEL_STEP,
                        showChildren: false,
                        editMode: false,
                        params: [
                          {
                            type: 'Code',
                            name: '$expected',
                            value: 'true',
                          },
                          {
                            type: 'Code',
                            name: '$actual',
                            value: 'html.toLowerCase().contains("search page")',
                          }
                        ],
                        code: 'assertEquals( true, html.toLowerCase().contains("search page"));',
                        children: []
                      },

                    ]
                },
                {
                  name: 'Add_Catch',
                  label: Constant.LABEL_STEP,
                  showChildren: true,
                  editMode: false,
                  params: [
                    {
                      type: 'Code',
                      name: '$variable',
                      value: 'Exception e',
                    },
                  ],
                  code: 'catch( Exception e ){ //body }',
                  children: [
                    {
                      name: 'Assert_True',
                      label: Constant.LABEL_STEP,
                      showChildren: false,
                      editMode: false,
                      params: [
                        {
                          type: 'Code',
                          name: '$variable',
                          value: 'false',
                        },
                      ],
                      code: 'assertTrue( false );',
                      children: []
                    }
                  ]
                },
              ]
            }],
          },
        ]
      }
    ],
    code: 'public void ' + Constant.METHOD_NAME_DELETE + '(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
  }
  CHECK_CONNECTION = {
    methodName: Constant.METHOD_NAME_CHECK_CONNECTION,
    template: 'Check_Connection',
    params: [
      {
        parentId: 39,
        name: "Step",
        label: "Step",
        showChildren: true,
        editMode: false,
        children: [
          {
            label: "Step",
            name: "Check_Connection",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "check"
              }
            ],
            showChildren: false,
            editMode: false,
            code: "boolean check = DBUtils.checkMakeConnection();",
            children: []
          },
          {
            label: "Step",
            name: "Assert_Equal",
            code: "assertEquals( true , check );",
            params: [
              {
                id: 11,
                name: "$expected",
                type: "Code",
                value: "true"
              },
              {
                id: 12,
                name: "$actual",
                type: "Code",
                value: "check"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Add_If",
            code: "if( check ){ //body }",
            params: [
              {
                id: 1,
                name: "$variable",
              type: "Code",
                value: "check"
              }
            ],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Execute_Update",
                code: " DBUtils.executeUpdate(\"Insert into tbl_Weapon(amourId, description, classification, defense, timeOfCreate, status) Values ('AM01','AM01','AM01','AM01','2020-03-12','true'),('AM02','AM02','AM02','AM02','2020-03-12','true'), ('AM03','AM03','AM03','AM03','2020-03-12','true')\");",
                params: [
                  {
                    id: 14,
                    name: "$sql",
                    type: "String",
                    value: "Insert into tbl_Weapon(amourId, description, classification, defense, timeOfCreate, status) Values ('AM01','AM01','AM01','AM01','2020-03-12','true'),('AM02','AM02','AM02','AM02','2020-03-12','true'), ('AM03','AM03','AM03','AM03','2020-03-12','true')"
                  }
                ],
                showChildren: false,
                editMode: false,
                children: []
              }
            ]
          }
        ]
      }
    ],
    code: "public void checkConnection(){boolean check = DBUtils.checkMakeConnection();assertEquals( true , check );if( check ){  DBUtils.executeUpdate(\"Insert into tbl_Weapon(amourId, description, classification, defense, timeOfCreate, status) Values ('AM01','AM01','AM01','AM01','2020-03-12','true'),('AM02','AM02','AM02','AM02','2020-03-12','true'), ('AM03','AM03','AM03','AM03','2020-03-12','true')\"); }}",
  }
}
