/**
 * Created by zhangshiping on 15-8-6.
 */
var interfaces = [
{
        type: '测试分类一', //接口分类
        interface: [ //分类下的所有接口
            {
                name: '接口一', //接口名称
                url: 'Api/reslut.json', //接口地址
                description: '接口一描述', //接口描述
                method: 'post', //提交方式
                paramsjson:true, //参数json化提交
                params: [ //接口参数
                    {
                        name: 'ver', //参数名
                        info: '版本号', //参数说明
                        'type': '字符串', //参数类型
                        example: '100/2', //参数事例
                        required: true //是否为必填参数
                    }
                ],
                result_info: { //返回值说明
                    'title':'标题',
                    'handleDate':'处理数据',
                    'pageCount':'页面总数',
                    'page':'当前页码',
                    'data':'数据列表',
                    'data-0':'单条数据',
                    'data-0-name':'姓名'
                }
            },{
                name: 'APP版本检测',
                url: 'index.php/Home/index/index?ajax=1',
                description: '手机app版本检测',
                method: 'post',
                paramsjson:true,
                params: [
                    {name: 'ver', info: '版本号','type': '字符串',example: '100/2',required: true},
                    {name: 'ajax',info: '版本号','type': '字符串',example: '1',required: true}
                ],
                result_info: {

                }
            }
        ]
    }
];
