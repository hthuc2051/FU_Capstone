import * as Constant from './../../../constants/AppConstants';

export default class ScriptTemplateJavaWeb {
  constructor() {
  };
  DEFAULT = {
    methodName: Constant.METHOD_NAME,
    template:'None',
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
    code:'public void testcase(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
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
    code: 'public void testcase(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
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
    code: 'public void testcase(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
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
    code: 'public void testcase(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
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
    code: 'public void testcase(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
  }
}
