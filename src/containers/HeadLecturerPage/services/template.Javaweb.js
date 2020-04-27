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
    code: 'public void checkLogin(){if( !isLogin ){assertTrue( false );}else{if( driver != null ){driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).clear();driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).clear();driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));}catch( Exception e ){assertTrue( false );}}}}',
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
  CHECKLOGINDAO = {
    methodName: Constant.METHOD_NAME_CHECK_LOGIN_DAO,
    template: 'CheckLoginDAO',
    params:  [
      {
        parentId: 39,
        name: "Step",
        label: "Step",
        showChildren: true,
        editMode: false,
        children: [
          {
            label: "Step",
            name: "Check TemplateQuestion",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "checkLoginSuccess"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "checkLogin"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "LoginSuccess,1"
              }
            ],
            showChildren: false,
            editMode: false,
            code: " boolean checkLoginSuccess = TemplateQuestion.checkLogin(\"LoginSuccess\",\"1\");",
            children: []
          },
          {
            label: "Step",
            name: "Check TemplateQuestion",
            code: " boolean checkLoginFailed = TemplateQuestion.checkLogin(\"LoginFailed\",\"1\");",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "checkLoginFailed"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "checkLogin"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "LoginFailed,1"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Check TemplateQuestion",
            code: " boolean checkLoginIsBoss = TemplateQuestion.checkLogin(\"LoginNotBoss\",\"1\");",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "checkLoginIsBoss"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "checkLogin"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "LoginNotBoss,1"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Assert_Equal",
            code: "assertEquals( true , checkLoginSuccess && !checkLoginFailed && !checkLoginIsBoss );",
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
                value: "checkLoginSuccess && !checkLoginFailed && !checkLoginIsBoss"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          }
        ]
      }
    ],
    code: 'public void checkLoginDAO(){boolean checkLoginSuccess = TemplateQuestion.checkLogin("LoginSuccess", "1");boolean checkLoginFailed = TemplateQuestion.checkLogin("LoginFailed", "1");boolean checkLoginIsBoss = TemplateQuestion.checkLogin("LoginNotBoss", "1");assertEquals( true , checkLoginSuccess && !checkLoginFailed && !checkLoginIsBoss );}',
  }
  SHOWALLDAO = {
    methodName: Constant.METHOD_NAME_SHOWALL_DAO,
    template: 'ShowAllDAO',
    params:[
      {
        parentId: 39,
        name: "Step",
        label: "Step",
        showChildren: true,
        editMode: false,
        children: [
          {
            label: "Step",
            name: "Add_If",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "!isLogin"
              }
            ],
            showChildren: true,
            editMode: false,
            code: "if( !isLogin ){ //body }",
            children: [
              {
                label: "Step",
                name: "Assert_True",
                code: "assertTrue( false  );",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "false"
                  }
                ],
                showChildren: false,
                editMode: false,
                children: []
              }
            ]
          },
          {
            label: "Step",
            name: "Add_Else",
            code: "else{ //body }",
            params: [],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Assert_Equal",
                code: "assertEquals( Integer.valueOf(\"3\") , TemplateQuestion.showAll() );",
                params: [
                  {
                    id: 11,
                    name: "$expected",
                    type: "Code",
                    value: "Integer.valueOf(\"3\")"
                  },
                  {
                    id: 12,
                    name: "$actual",
                    type: "Code",
                    value: "TemplateQuestion.showAll()"
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
    code: 'public void showAllDAO(){if( !isLogin ){assertTrue( false );}else{assertEquals( Integer.valueOf("3") , TemplateQuestion.showAll());}}',
  }

  DELETEDAO = {
    methodName: Constant.METHOD_NAME_CHECK_DELETE_DAO,
    template: 'DeleteDAO',
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
            name: "Add_If",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "!isLogin"
              }
            ],
            showChildren: true,
            editMode: false,
            code: "if( !isLogin ){ //body }",
            children: [
              {
                label: "Step",
                name: "Assert_True",
                code: "assertTrue( false  );",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "false"
                  }
                ],
                showChildren: false,
                editMode: false,
                children: []
              }
            ]
          },
          {
            label: "Step",
            name: "Add_Else",
            code: "else{ //body }",
            params: [],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Check TemplateQuestion",
                code: " boolean checkDAO  = TemplateQuestion.delete(\"AM02\");",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "checkDAO "
                  },
                  {
                    id: 19,
                    name: "$data",
                    type: "Code",
                    value: "delete"
                  },
                  {
                    id: 15,
                    name: "$array",
                    type: "String",
                    value: "AM02"
                  }
                ],
                showChildren: false,
                editMode: false,
                children: []
              },
              {
                label: "Step",
                name: "ExecuteQuery_Return_Boolean",
                code: " boolean checkExisted= DBUtils.executeQuery(\"SELECT amourId FROM tbl_Weapon Where  amourId = 'A02'\");",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "checkExisted"
                  },
                  {
                    id: 14,
                    name: "$sql",
                    type: "String",
                    value: "SELECT amourId FROM tbl_Weapon Where  amourId = 'A02'"
                  }
                ],
                showChildren: false,
                editMode: false,
                children: []
              },
              {
                label: "Step",
                name: "Assert_Equal",
                code: "assertEquals( true , checkDAO && !checkExisted );",
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
                    value: "checkDAO && !checkExisted"
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
    code: 'public void deleteDAO(){if( !isLogin ){assertTrue( false );}else{boolean checkDAO = TemplateQuestion.delete("AM02");boolean checkExisted= DBUtils.executeQuery("SELECT amourId FROM tbl_Weapon Where amourId = \'A02\'");assertEquals( true , checkDAO && !checkExisted );}}',
  }
  
  SHOWALLUI = {
    methodName: Constant.METHOD_NAME_CHECK_SHOW_ALL_UI,
    template: 'ShowAllUI',
    params:[
      {
        parentId: 39,
        name: "Step",
        label: "Step",
        showChildren: true,
        editMode: false,
        children: [
          {
            label: "Step",
            name: "Add_If",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "driver != null"
              }
            ],
            showChildren: true,
            editMode: false,
            code: "if( driver != null ){ //body }",
            children: [
              {
                label: "Step",
                name: "Add_If",
                code: "if( !isLogin ){ //body }",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "!isLogin"
                  }
                ],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Assert_True",
                    code: "assertTrue( false  );",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "false"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  }
                ]
              },
              {
                label: "Step",
                name: "Add_Else",
                code: "else{ //body }",
                params: [],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Get_URL",
                    code: "driver.get( \"http://localhost:8080/login.html\" );",
                    params: [
                      {
                        id: 13,
                        name: "$url",
                        type: "String",
                        value: "http://localhost:8080/login.html"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Input_TextBox_By_Name",
                    code: "driver.findElement(By.name( \"txtUsername\")).clear();driver.findElement(By.name( \"txtUsername\" )).sendKeys( \"LoginSuccess\" );",
                    params: [
                      {
                        id: 2,
                        name: "$paramName",
                        type: "String",
                        value: "txtUsername"
                      },
                      {
                        id: 3,
                        name: "$paramValue",
                        type: "String",
                        value: "LoginSuccess"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Input_TextBox_By_Name",
                    code: "driver.findElement(By.name( \"txtPassword\")).clear();driver.findElement(By.name( \"txtPassword\" )).sendKeys( \"1\" );",
                    params: [
                      {
                        id: 2,
                        name: "$paramName",
                        type: "String",
                        value: "txtPassword"
                      },
                      {
                        id: 3,
                        name: "$paramValue",
                        type: "String",
                        value: "1"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Click_Button",
                    code: "driver.findElement(By.name( \"btnAction\" )).click();",
                    params: [
                      {
                        id: 2,
                        name: "$paramName",
                        type: "String",
                        value: "btnAction"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Add_Try",
                    code: "try{ //body }",
                    params: [],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Get_Text_By_Name",
                        code: "String html = driver.findElement(By.tagName(\"body\")).getText();",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "html"
                          },
                          {
                            id: 2,
                            name: "$paramName",
                            type: "String",
                            value: "body"
                          }
                        ],
                        showChildren: false,
                        editMode: false,
                        children: []
                      },
                      {
                        label: "Step",
                        name: "Assert_Equal",
                        code: "assertEquals( true ,  html.toLowerCase().contains(\"search page\") && html.toLowerCase().contains(\"am01\") );",
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
                            value: " html.toLowerCase().contains(\"search page\") && html.toLowerCase().contains(\"am01\")"
                          }
                        ],
                        showChildren: false,
                        editMode: false,
                        children: []
                      }
                    ]
                  },
                  {
                    label: "Step",
                    name: "Add_Catch",
                    code: "catch( Exception e ){ //body }",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "Exception e"
                      }
                    ],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Assert_True",
                        code: "assertTrue( false  );",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "false"
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
            ]
          },
          {
            label: "Step",
            name: "Add_Else",
            code: "else{ //body }",
            params: [],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Assert_True",
                code: "assertTrue( false  );",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "false"
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
    code: 'public void showAllUI(){if( driver != null ){if( !isLogin ){assertTrue( false );}else{driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername")).clear();driver.findElement(By.name( "txtUsername" )).sendKeys( "LoginSuccess" );driver.findElement(By.name( "txtPassword")).clear();driver.findElement(By.name( "txtPassword" )).sendKeys( "1" );driver.findElement(By.name( "btnAction" )).click();try{String html = driver.findElement(By.tagName("body")).getText();assertEquals( true , html.toLowerCase().contains("search page") && html.toLowerCase().contains("am01") );}catch( Exception e ){assertTrue( false );}}}else{assertTrue( false );}}',
  }
  CHECKWELCOME = {
    methodName: Constant.METHOD_NAME_WELLCOME,
    template: 'CheckWelcome',
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
            name: "Add_If",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "driver != null"
              }
            ],
            showChildren: true,
            editMode: false,
            code: "if( driver != null ){ //body }",
            children: [
              {
                label: "Step",
                name: "Add_If",
                code: "if( !isLogin ){ //body }",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "!isLogin"
                  }
                ],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Assert_True",
                    code: "assertTrue( false  );",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "false"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  }
                ]
              },
              {
                label: "Step",
                name: "Add_Else",
                code: "else{ //body }",
                params: [],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Get_URL",
                    code: "driver.get( \"http://localhost:8080/login.html\" );",
                    params: [
                      {
                        id: 13,
                        name: "$url",
                        type: "String",
                        value: "http://localhost:8080/login.html"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Input_TextBox_By_Name",
                    code: "driver.findElement(By.name( \"txtUsername\")).clear();driver.findElement(By.name( \"txtUsername\" )).sendKeys( \"LoginSuccess\" );",
                    params: [
                      {
                        id: 2,
                        name: "$paramName",
                        type: "String",
                        value: "txtUsername"
                      },
                      {
                        id: 3,
                        name: "$paramValue",
                        type: "String",
                        value: "LoginSuccess"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Input_TextBox_By_Name",
                    code: "driver.findElement(By.name( \"txtPassword\")).clear();driver.findElement(By.name( \"txtPassword\" )).sendKeys( \"1\" );",
                    params: [
                      {
                        id: 2,
                        name: "$paramName",
                        type: "String",
                        value: "txtPassword"
                      },
                      {
                        id: 3,
                        name: "$paramValue",
                        type: "String",
                        value: "1"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Click_Button",
                    code: "driver.findElement(By.name( \"btnAction\" )).click();",
                    params: [
                      {
                        id: 2,
                        name: "$paramName",
                        type: "String",
                        value: "btnAction"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Add_Try",
                    code: "try{ //body }",
                    params: [],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Get_Text_By_Name",
                        code: "String html = driver.findElement(By.tagName(\"body\")).getText();",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "html"
                          },
                          {
                            id: 2,
                            name: "$paramName",
                            type: "String",
                            value: "body"
                          }
                        ],
                        showChildren: false,
                        editMode: false,
                        children: []
                      },
                      {
                        label: "Step",
                        name: "Assert_Equal",
                        code: "assertEquals( true , html.toLowerCase().contains(\"loginsuccess\") && html.toLowerCase().contains(\"1\") );",
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
                            value: "html.toLowerCase().contains(\"loginsuccess\") && html.toLowerCase().contains(\"1\")"
                          }
                        ],
                        showChildren: false,
                        editMode: false,
                        children: []
                      }
                    ]
                  },
                  {
                    label: "Step",
                    name: "Add_Catch",
                    code: "catch( Exception e ){ //body }",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "Exception e"
                      }
                    ],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Assert_True",
                        code: "assertTrue( false  );",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "false"
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
            ]
          },
          {
            label: "Step",
            name: "Add_Else",
            code: "else{ //body }",
            params: [],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Assert_True",
                code: "assertTrue( false  );",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "false"
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
    code: 'public void checkWelcome(){if( driver != null ){if( !isLogin ){assertTrue( false );}else{driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername")).clear();driver.findElement(By.name( "txtUsername" )).sendKeys( "LoginSuccess" );driver.findElement(By.name( "txtPassword")).clear();driver.findElement(By.name( "txtPassword" )).sendKeys( "1" );driver.findElement(By.name( "btnAction" )).click();try{String html = driver.findElement(By.tagName("body")).getText();assertEquals( true , html.toLowerCase().contains("loginsuccess") && html.toLowerCase().contains("1") );}catch( Exception e ){assertTrue( false );}}}else{assertTrue( false );}}',
  }
  DELETEUI = {
    methodName: Constant.METHOD_NAME_DELETE_UI,
    template: 'DeleteUI',
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
            name: "Add_If",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "driver != null"
              }
            ],
            showChildren: true,
            editMode: false,
            code: "if( driver != null ){ //body }",
            children: [
              {
                label: "Step",
                name: "Add_If",
                code: "if( !isLogin ){ //body }",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "!isLogin"
                  }
                ],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Assert_True",
                    code: "assertTrue( false  );",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "false"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  }
                ]
              },
              {
                label: "Step",
                name: "Add_Else",
                code: "else{ //body }",
                params: [],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Get_URL",
                    code: "driver.get( \"http://localhost:8080/delete?idDelete=AM03&btAction=Delete\" );",
                    params: [
                      {
                        id: 13,
                        name: "$url",
                        type: "String",
                        value: "http://localhost:8080/delete?idDelete=AM03&btAction=Delete"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "ExecuteQuery_Return_Boolean",
                    code: " boolean checkDB= DBUtils.executeQuery(\"SELECT amourId FROM tbl_Weapon Where  amourId = 'AM03'\");",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "checkDB"
                      },
                      {
                        id: 14,
                        name: "$sql",
                        type: "String",
                        value: "SELECT amourId FROM tbl_Weapon Where  amourId = 'AM03'"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Add_If",
                    code: "if( !checkDB ){ //body }",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "!checkDB"
                      }
                    ],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Add_Try",
                        code: "try{ //body }",
                        params: [],
                        showChildren: true,
                        editMode: false,
                        children: [
                          {
                            label: "Step",
                            name: "Get_Text_By_Name",
                            code: "String html = driver.findElement(By.tagName(\"body\")).getText();",
                            params: [
                              {
                                id: 1,
                                name: "$variable",
                                type: "Code",
                                value: "html"
                              },
                              {
                                id: 2,
                                name: "$paramName",
                                type: "String",
                                value: "body"
                              }
                            ],
                            showChildren: false,
                            editMode: false,
                            children: []
                          },
                          {
                            label: "Step",
                            name: "Assert_Equal",
                            code: "assertEquals( true , html.contains(\"search page\") && !html.contains(\"am03\") );",
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
                                value: "html.contains(\"search page\") && !html.contains(\"am03\")"
                              }
                            ],
                            showChildren: false,
                            editMode: false,
                            children: []
                          }
                        ]
                      },
                      {
                        label: "Step",
                        name: "Add_Catch",
                        code: "catch( Exception e ){ //body }",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "Exception e"
                          }
                        ],
                        showChildren: true,
                        editMode: false,
                        children: [
                          {
                            label: "Step",
                            name: "Assert_True",
                            code: "assertTrue( false  );",
                            params: [
                              {
                                id: 1,
                                name: "$variable",
                                type: "Code",
                                value: "false"
                              }
                            ],
                            showChildren: false,
                            editMode: false,
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    label: "Step",
                    name: "Add_Else",
                    code: "else{ //body }",
                    params: [],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Assert_True",
                        code: "assertTrue( false  );",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "false"
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
            ]
          },
          {
            label: "Step",
            name: "Add_Else",
            code: "else{ //body }",
            params: [],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Assert_True",
                code: "assertTrue( false  );",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "false"
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
    code: 'public void deleteUI(){if( driver != null ){if( !isLogin ){assertTrue( false );}else{driver.get( "http://localhost:8080/delete?idDelete=AM03&btAction=Delete" );boolean checkDB= DBUtils.executeQuery("SELECT amourId FROM tbl_Weapon Where amourId = \'AM03\'");if( !checkDB ){try{String html = driver.findElement(By.tagName("body")).getText();assertEquals( true , html.contains("search page") && !html.contains("am03") );}catch( Exception e ){assertTrue( false );}}else{assertTrue( false );}}}else{assertTrue( false );}}',
  }
  LOGOUT = {
    methodName: Constant.METHOD_NAME_LOGOUT,
    template: 'LogOut',
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
            name: "Add_If",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "driver != null"
              }
            ],
            showChildren: true,
            editMode: false,
            code: "if( driver != null ){ //body }",
            children: [
              {
                label: "Step",
                name: "Add_If",
                code: "if( !isLogin ){ //body }",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "!isLogin"
                  }
                ],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Assert_True",
                    code: "assertTrue( false  );",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "false"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  }
                ]
              },
              {
                label: "Step",
                name: "Add_Else",
                code: "else{ //body }",
                params: [],
                showChildren: true,
                editMode: false,
                children: [
                  {
                    label: "Step",
                    name: "Get_URL",
                    code: "driver.get( \"http://localhost:8080/logout\" );",
                    params: [
                      {
                        id: 13,
                        name: "$url",
                        type: "String",
                        value: "http://localhost:8080/logout"
                      }
                    ],
                    showChildren: false,
                    editMode: false,
                    children: []
                  },
                  {
                    label: "Step",
                    name: "Add_Try",
                    code: "try{ //body }",
                    params: [],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Get_Text_By_Name",
                        code: "String html = driver.findElement(By.tagName(\"body\")).getText();",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "html"
                          },
                          {
                            id: 2,
                            name: "$paramName",
                            type: "String",
                            value: "body"
                          }
                        ],
                        showChildren: false,
                        editMode: false,
                        children: []
                      },
                      {
                        label: "Step",
                        name: "Assert_Equal",
                        code: "assertEquals( true , html.toLowerCase().contains(\"login page\") );",
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
                            value: "html.toLowerCase().contains(\"login page\")"
                          }
                        ],
                        showChildren: false,
                        editMode: false,
                        children: []
                      }
                    ]
                  },
                  {
                    label: "Step",
                    name: "Add_Catch",
                    code: "catch( Exception e ){ //body }",
                    params: [
                      {
                        id: 1,
                        name: "$variable",
                        type: "Code",
                        value: "Exception e"
                      }
                    ],
                    showChildren: true,
                    editMode: false,
                    children: [
                      {
                        label: "Step",
                        name: "Assert_True",
                        code: "assertTrue( false  );",
                        params: [
                          {
                            id: 1,
                            name: "$variable",
                            type: "Code",
                            value: "false"
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
            ]
          },
          {
            label: "Step",
            name: "Add_Else",
            code: "else{ //body }",
            params: [],
            showChildren: true,
            editMode: false,
            children: [
              {
                label: "Step",
                name: "Assert_True",
                code: "assertTrue( false  );",
                params: [
                  {
                    id: 1,
                    name: "$variable",
                    type: "Code",
                    value: "false"
                  }
                ],
                showChildren: false,
                editMode: false,
                children: []
              }
            ]
          },
          {
            label: "Step",
            name: "Execute_Update",
            code: " DBUtils.executeUpdate(\"Delete From tbl_Weapon\");",
            params: [
              {
                id: 14,
                name: "$sql",
                type: "String",
                value: "Delete From tbl_Weapon"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          }
        ]
      }
    ],
    code: 'public void logOut() {if (driver != null) {if (!isLogin) {assertFalse(true);} else {driver.get("http://localhost:8080/logout");try {String html = driver.findElement(By.tagName("body")).getText();assertEquals(true, html.toLowerCase().contains("login page"));} catch (Exception e) {assertFalse(true);}}} else {assertFalse(true);}DBUtils.executeUpdate("Delete From tbl_Weapon");}',
  }
  GLOBAL_VARIABLE=
  {
      label: Constant.LABEL_PARAM,
      parentId: 39,
      name: 'Global Variable',
      showChildren: true,
      editMode: false,
      children: [
          {
              label: Constant.LABEL_PARAM,
              parentId: 50,
              type: 'boolean',
              name: 'isLogin',
              value: 'false',
              showChildren: false,
              editMode: false,
              code: '',
              children: [],
          }
      ],
      code: 'boolean isLogin  = false;',
  }
}
