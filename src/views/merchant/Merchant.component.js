import merchantService from '../../service/Service'
import Util from '../../uitl/publicUtil.js'
import tables from '../../components/Table.vue'
import paging from '../../components/Pagination.vue'
var merchantSrv = new merchantService();
var util = new Util();
export default {
    name: 'merchant',
    data() {
        return {
            userCode: util.getObject('userInfo').userCode,
            pageNum: 1,
            dialog: false,
            t_data: [],
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
            t_type: 2,
            m_list: [],
            checkList: [],
            t_clickItem: '',
            checkUserList: [],
        }
    },
    components: {
        tables,
        paging
    },
    created() {
        this.getAllData();
        console.log( this.userCode);
    },
    methods: {
        getAllData(){
            merchantSrv.getMerchantInfoPageData({userCode: this.userCode, pageNum: this.pageNum, pageSize: 10}).then(
                value => {
                    console.log(value);
                    if(value.code === '1000') {
                        this.t_data = value.data
                        // console.log(this.t_data);
                    } else {
                        util.toast(value.msg, 'error')
                    }
                }
            )
        },
        showChangeMerchgatDialog (item, type){
            console.log(type);
            this.t_clickItem = item;
            if(type === 'add') {
               merchantSrv.addManagerforStore({merchantCode: 12341}).then(
                   value => {
                       if (value.code === '1000') {
                        util.toast('添加成功', 'success')
                       } else {
                           util.toast(value.msg, 'error')
                       }
                   }
               )
            }else {
                merchantSrv.getMerchangeUserData({merchantCode: 12341}).then(
                    value => {
                        console.log(value);
                        if(value.code === '1000') {
                            this.m_list = value.data;
                            this.getRoleAllUser(this.m_list[0])
                        } else{
    
                        }
                    }
                )
                this.dialog = true;
            }
           
          
         
        },
        merChatChange(id){
            this.getRoleAllUser(id)
        },
        getRoleAllUser(data){
            merchantSrv.getRoleAllUserData({merchantCode: 12341, roleId: data.roleId}).then(
                value => {
                    this.checkList = [];
                    if(value.code === '1000') {
                        this.checkUserList = value.data;
                        this.checkUserList.forEach(i => {
                            if(i.status === 'true'){
                                
                                this.checkList.push(i.userId)
                            }
                          
                        });
                    }else {
                        util.toast(value.msg, 'error')
                    }
                }
            )
        },
        submitData(data, userId, roleId){
            console.log(data, userId, roleId);
            var type = (data === true)? 'add': 'delete';
        
            merchantSrv.submitChangeRoleData({merchantCode: 12341, roleId: roleId, userId: userId, type: type}).then(
                value => {
                    console.log(value);
                    if(value.code  === '1000') {
                        util.toast(value.msg, 'success');
                    }else{
                        util.toast(value.msg, 'error');
                    }
                }
            )
        }
    },
}