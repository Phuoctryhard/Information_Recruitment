// ko cần đăng nhập cx xem dc

import Home from '../Page/Home/index.jsx'
import Recruitment from '../Page/Recruitment/index.jsx'
import Analisic from '../Page/AnaLitic/index.jsx'
import Detail from '../Page/Detail_Recruitment/detail'
import Detailcompany from  '../Page/Detail_Company/detail_company.jsx'

import Admin from '../Page/Admin/admin.jsx'
import PostAdmin from '../Page/PostAdmin/PostAdmin.jsx'
import EditAdmin from '../Page/EditAdmin/index.jsx'
const publicRouter = [
  { path: '/Edit/recruitment/:_id', commponent: EditAdmin, Layout: 'Admin' },
  { path: '/', commponent: Home },
  { path: '/Home', commponent: Home },

  { path: '/Analytics', commponent: Analisic },
  { path: '/Recruitment', commponent: Recruitment },
  { path: '/post/by/:id', commponent: Detail },
  { path: '/conpany/name/:company', commponent: Detailcompany },
  { path: '/Admin', commponent: Admin, Layout: 'Admin' },
  { path: '/AddPost', commponent: Admin, Layout: 'Admin' },
  { path: '/PostAdmin', commponent: PostAdmin, Layout: 'Admin' }

]
// phải đăng nhập mới xem dc
const privateRouter = [{}]
export { publicRouter, privateRouter }
