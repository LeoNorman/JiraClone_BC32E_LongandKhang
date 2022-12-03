import React from 'react'

const Home = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-center'>Chào mừng bạn đến với <span className='text-green-500'>CYBERBUGS!!</span></h1>
      <div className='container'>
        <h3 className='text-center'><span className='text-green-500'>CYBERBUGS</span> nói ngắn gọn là dự án giúp bạn quản lý project cũng như các thành viên trong nhóm làm việc 1 cách dễ dàng hơn. Vì đây không phải trang chính thức nên trước khi bắt đầu bạn cần đọc những lưu ý sau:</h3>
        <ul className='text-center'>
          <li>Nếu bạn chưa <span className='text-green-500'>đăng nhập</span>, bạn không thể tham gia dự án.</li>
          <li>1. Chọn <span className='text-green-500'>'Sign in'</span> nếu bạn đã có tài khoảng. Sau khi đăng nhập bạn sẽ được đưa sang dự án của chúng tôi!!</li>
          <li>2. Chọn <span className='text-green-500'>'Sign up'</span> nếu bạn chưa có tài khoảng. Hoặc sau khi nhấn 'Đăng nhập' bạn chọn tiếp 'NOT ACCOUNT?' để đăng ký tài khoảng!!</li>
          <li>3. Chọn trang <span className='text-green-500'>Cyberbugs</span> nếu bạn đang đăng nhập. Nếu chưa đăng nhập sẽ tự động chuyển sang trang login</li>
        </ul>
      </div>
    </div>
  )
}

export default Home