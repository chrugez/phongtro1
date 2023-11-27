import icons from "./icons"

const { TbPencilPlus, PiNotebookDuotone, MdOutlineManageAccounts } = icons

const menuManage = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/he-thong/tao-moi-bai-dang',
        icon: <TbPencilPlus size={24} />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/he-thong/quan-ly-bai-dang',
        icon: <PiNotebookDuotone size={24} />
    },
    {
        id: 3,
        text: 'Thông tin tài khoản',
        path: '/he-thong/sua-thong-tin-ca-nhan',
        icon: <MdOutlineManageAccounts size={24} />
    },
]

export default menuManage