import tables from '../../components/Table.vue'
import Paging from '../../components/Pagination.vue'
import AreaSrv from '../../service/Service.js'
import Util from '../../uitl/publicUtil.js'

var areaSrv = new AreaSrv();
var util = new Util();
export default {
    name: 'areahead',
    data() {
        return {
            userCode: util.getObject('userInfo').userCode,
            options: [],
            serviceCode: '',
            pageNo: '1',
            // d_tableListData: {
            //     manage: null,
            //     manageTelephone: null,
            //     orientation: null,
            //     serviceAreaId: null,
            //     storeId: null,
            //     storeName: null,
            // },
            tableData: [],
            // tableHeader:[
            //     {filed: 'serviceAreaName', label: '服务区名称' },
            //     {filed: 'orientation', label: '服务区方向' },
            //     {filed: 'storeName', label: '店铺名称' },
            //     {filed: 'manage', label: '管理人姓名' },
            //     {filed: 'manage', label: '管理人姓名' },
            // ],
            // t_detail: [
            //     {filed: 'storeName', label: '店铺名称' },
            //     {filed: 'storeId', label: '店铺Id' },
            //     {filed: 'orientation', label: '服务区方向' },
            //     {filed: 'manage', label: '管理人姓名' },
            //     {filed: 'manageTelephone', label: '管理人电话' },
            //     {filed: 'serviceAreaName', label: '服务区名称' },
            //     {filed: 'serviceAreaId', label: '服务区Id' },
            // ]

        }
    },
    created() {
        this.options = [];
        areaSrv.getServiceDownloadData({userCode: this.userCode}).then(
            value => {
                console.log(value);
                if(value.code === '1000') {
                    value.data.forEach(v => {
                        this.options.push({label: v.serviceAreaName, value: v.serviceAreaId})
                    })
                }
            }
        )
    },
    components: {
        tables,
        Paging
    },
    methods: {
        changeData(){
            this.getTableList();
        },
        pageChange(data){
           console.log(data + '： 我是父组件');
           this.pageNo = data;
           this.getTableList()
        },
        getTableList(){
            console.log(this.pageNo);
            console.log(this.serviceCode);
            areaSrv.getAreaInfoPageData({serverId: this.serviceCode, pageSize: '10', pageNo: this.pageNo})
            .then(
                value => {
                    console.log(value.data); 

                    if(value.code === '1000') {
                        this.tableData= value.data;
                    } else{
                        util.toast(value.msg, 'error')
                    }
                }
            )
        }
    }
}