import icons from "./icons"

const { TbPencilPlus, PiNotebookDuotone, MdOutlineManageAccounts } = icons

const menuManage = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/system/create-new',
        icon: <TbPencilPlus size={24} />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/system/manage-post',
        icon: <PiNotebookDuotone size={24} />
    },
    {
        id: 3,
        text: 'Thông tin tài khoản',
        path: '/system/profile',
        icon: <MdOutlineManageAccounts size={24} />
    },
]

export default menuManage