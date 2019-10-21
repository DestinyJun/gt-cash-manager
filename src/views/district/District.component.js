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
            t_data: [],
            userCode: util.getObject('userInfo').userCode,
            t_header:[
                {field: 'storeName', label: '店铺名称' },
                {field: 'manage', label: '管理人姓名' },
                {field: 'manageTelephone', label: '管理人电话' },
                {field: 'orientation', label: '服务区方向' },
                {filed: 'optrail', label: '操作' },
            ],
            t_detail: [
                {field: 'storeName', label: '店铺名称' },
                {field: 'storeId', label: '店铺Id' },
                {field: 'orientation', label: '服务区方向' },
                {field: 'manage', label: '管理人姓名' },
                {field: 'manageTelephone', label: '管理人电话' },
                {field: 'serviceAreaName', label: '服务区名称' },
                {field: 'serviceAreaId', label: '服务区Id' },
            ],
            t_type : 2,
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
                    this.t_data= value.data;
                } else{
                   util.toast(value.msg, 'error')
                }
            }
        )
    },
}