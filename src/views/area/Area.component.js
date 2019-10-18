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
            tableData: []
        }
    },
    created() {
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
            // console.log('我是change方法');
            // console.log(this.serviceCode);
            areaSrv.getAreaInfoPageData({serverId: this.serviceCode, pageSize: '10', pageNo: this.pageNo})
            .then(
                value => {
                    console.log(value);
                    if(value.code === '1000') {
                        console.log(value.data); 
                        // this.tableData = value.data;
                        // value.data.forEach (v => {
                        //     for (const key in this.d_tableListData) {
                        //          this.d_tableListData[key] = v[key]
                        //     }
                        //     this.tableData.push(this.d_tableListData);
                        // })
                        console.log( this.tableData);

                    }else {

                    }
                }
            )
            // console.log(this.pageNo);
        }
    },
}