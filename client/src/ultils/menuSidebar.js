import icons from "./icons"

const { TbPencilPlus, PiNotebookDuotone, MdOutlineManageAccounts } = icons

const menuSidebar = [
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
        text: 'Sửa thông tin cá nhân',
        path: '/he-thong/sua-thong-tin-ca-nhan',
        icon: <MdOutlineManageAccounts size={24} />
    },
    {
        id: 4,
        text: 'Liên hệ',
        path: '/he-thong/lien-he',
        icon: <MdOutlineManageAccounts size={24} />
    },
]

export default menuSidebar