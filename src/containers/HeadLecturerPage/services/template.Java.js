import * as Constant from './../../../constants/AppConstants';

export default class ScriptJava {
  constructor() {
  };
  DEFAULT = {
    methodName: Constant.METHOD_NAME,
    template: 'None',
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
            name: "Println",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "Hello World"
              }
            ],
            showChildren: false,
            editMode: false,
            code: "System.out.println(\"Hello World\");",
            children: []
          }
        ]
      }
    ],
    code: 'public void testcase(){driver.findElement(By.id($paramName)).clear(); driver.findElement(By.id($paramName)).sendKeys($paramValue);}',
  }
  UPDATE = {
    methodName: Constant.METHOD_NAME_UPDATE,
    template: 'Update',
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
            name: "Add_Array_String",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "data"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "codeAdd,modelUpdate,11,1001"
              }
            ],
            showChildren: false,
            editMode: false,
            code: "String[] data = new String[]{\"codeAdd\",\"modelUpdate\",\"11\",\"1001\"};",
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String start = \"==========Start Update==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "start"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Update=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String end = \"==========End Update==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "end"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Update=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========Start Update==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Update=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Call_TemplateQuestion_Function",
            code: "templateQuestion.update();",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "update"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========End Update==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Update=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Check_Console_Constain",
            code: "assertEquals(true, CheckingUtils.checkConsoleLogContains(data, end, start));",
            params: [
              {
                id: 11,
                name: "$expected",
                type: "Code",
                value: "true"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "data"
              },
              {
                id: 20,
                name: "$start",
                type: "Code",
                value: "start"
              },
              {
                id: 21,
                name: "$end",
                type: "Code",
                value: "end"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          }
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
        parentId: 39,
        name: "Step",
        label: "Step",
        showChildren: true,
        editMode: false,
        children: [
          {
            label: "Step",
            name: "Add_Array_String",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "data"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "codeAdd,modelAdd,10,1000.0"
              }
            ],
            showChildren: false,
            editMode: false,
            code: "String[] data = new String[]{\"codeAdd\",\"modelAdd\",\"10\",\"1000.0\"};",
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String start = \"==========Start Insert==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "start"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Insert=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String end = \"==========End Insert==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "end"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Insert=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========Start Insert==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Insert=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Call_TemplateQuestion_Function",
            code: "templateQuestion.insert();",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "insert"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========End Insert==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Insert=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Check_Console_Constain",
            code: "assertEquals(true, CheckingUtils.checkConsoleLogContains(data, end, start));",
            params: [
              {
                id: 11,
                name: "$expected",
                type: "Code",
                value: "true"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "data"
              },
              {
                id: 20,
                name: "$start",
                type: "Code",
                value: "start"
              },
              {
                id: 21,
                name: "$end",
                type: "Code",
                value: "end"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          }
        ]
      }
    ],
    code: 'public void testcase(){driver.findElement(By.id($paramName)).clear(); driver.findElement(By.id($paramName)).sendKeys($paramValue);}',
  }

  SEARCH = {
    methodName: Constant.METHOD_NAME_SEARCH,
    template: 'Search',
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
            name: "Add_Array_String",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "data"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "codeAdd,modelAdd,10,1000"
              }
            ],
            showChildren: false,
            editMode: false,
            code: "String[] data = new String[]{\"codeAdd\",\"modelAdd\",\"10\",\"1000\"};",
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String start = \"==========Start Search==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "start"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Search=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String end = \"==========End Search==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "end"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Search=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========Start Search==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Search=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Call_TemplateQuestion_Function",
            code: "templateQuestion.search();",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "search"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========End Search==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Search=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Check_Console_Constain",
            code: "assertEquals(true, CheckingUtils.checkConsoleLogContains(data, end, start));",
            params: [
              {
                id: 11,
                name: "$expected",
                type: "Code",
                value: "true"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "data"
              },
              {
                id: 20,
                name: "$start",
                type: "Code",
                value: "start"
              },
              {
                id: 21,
                name: "$end",
                type: "Code",
                value: "end"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          }
        ]
      }
    ],
    code: 'public void testcase(){driver.findElement(By.id($paramName)).clear(); driver.findElement(By.id($paramName)).sendKeys($paramValue);}',
  }
  DELETE = {
    methodName: Constant.METHOD_NAME_DELETE,
    template: 'Delete',
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
            name: "Add_Array_String",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "data"
              },
              {
                id: 15,
                name: "$array",
                type: "String",
                value: "codeAdd,modelAdd,10,1000"
              }
            ],
            showChildren: false,
            editMode: false,
            code: "String[] data = new String[]{\"codeAdd\",\"modelAdd\",\"10\",\"1000\"};",
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String start = \"==========Start Remove==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "start"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Remove=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Add_String",
            code: "String end = \"==========End Remove==========\";",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "end"
              },
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Remove=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========Start Remove==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========Start Remove=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Call_TemplateQuestion_Function",
            code: "templateQuestion.remove();",
            params: [
              {
                id: 1,
                name: "$variable",
                type: "Code",
                value: "remove"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Println",
            code: "System.out.println(\"==========End Remove==========\");",
            params: [
              {
                id: 3,
                name: "$paramValue",
                type: "String",
                value: "==========End Remove=========="
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          },
          {
            label: "Step",
            name: "Check_Console_Constain",
            code: "assertEquals(false, CheckingUtils.checkConsoleLogContains(data, end, start));",
            params: [
              {
                id: 11,
                name: "$expected",
                type: "Code",
                value: "false"
              },
              {
                id: 19,
                name: "$data",
                type: "Code",
                value: "data"
              },
              {
                id: 20,
                name: "$start",
                type: "Code",
                value: "start"
              },
              {
                id: 21,
                name: "$end",
                type: "Code",
                value: "end"
              }
            ],
            showChildren: false,
            editMode: false,
            children: []
          }
        ]
      }
    ],
    code: 'public void testcase(){if( !isLogin ){ assertTrue( false ); }else{ if( driver != null ){ driver.get( "http://localhost:8080/login.html" );driver.findElement(By.name( "txtUsername" )).sendKeys( "t01" );driver.findElement(By.name( "txtPassword" )).sendKeys( "t01" );try{ String html = driver.findElement(By.tagName("body")).getText();assertEquals( true, html.toLowerCase().contains("search page"));catch( Exception e ){ assertTrue( false ); } } } }}',
  }
}
