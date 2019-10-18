import tables from '../../components/Table.vue'
import Paging from '../../components/Pagination.vue'
import AreaSrv from '../../service/Service.js'
import Util from '../../uitl/publicUtil.js'

var areaSrv = new AreaSrv();
var util = new Util();

export default {
    name: 'district',
    data() {
        return {
            tableData: [],
            userCode: util.getObject('userInfo').userCode,
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
    components: {
        tables,
        Paging
    },
    created() {
        areaSrv.getDistrictListData({userCode: this.userCode}).then(
            value => {
                console.log(value);
                if(value.code === '1000') {
                    this.tableData= value.data;
                } else{
                   util.toast(value.msg, 'error')
                }
            }
        )
    },
}