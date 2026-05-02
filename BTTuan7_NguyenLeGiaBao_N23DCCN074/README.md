# Bài tập Tuần 7: Form Đăng ký thành viên (Next.js)

**Họ và tên:** Nguyễn Lê Gia Bảo
**Mã SV:** N23DCCN074

## Tổng quan dự án
Dự án triển khai một form đăng ký thành viên tối ưu hiệu năng và bảo mật, giải quyết triệt để tình trạng lạm dụng state gây re-render component không cần thiết, đồng thời đảm bảo tính toàn vẹn của dữ liệu trước khi gửi lên máy chủ.

## Công nghệ sử dụng
- **Framework:** Next.js (App Router, Server Actions)
- **Quản lý Form:** `react-hook-form`
- **Validation:** `zod` & `@hookform/resolvers`
- **Styling:** Tailwind CSS

## Tính năng kỹ thuật cốt lõi 

1. **Tối ưu hiệu năng (Uncontrolled Components):**
   - Tránh lạm dụng `useState` cho các trường input.
   - Quản lý form data trực tiếp trong DOM thông qua hàm `register()` của `react-hook-form`.

2. **Trải nghiệm người dùng (UX) - Real-time Validation:**
   - Hiển thị thông báo lỗi ngay lập tức (real-time) dưới mỗi input khi dữ liệu sai định dạng hoặc khi người dùng trỏ chuột ra khỏi vùng nhập liệu (blur).
   - Xác thực mật khẩu và xác nhận mật khẩu trùng khớp thông qua hàm `.refine()` của Zod.

3. **Bảo mật dữ liệu (Double Validation):**
   - **Client-side:** Chặn dữ liệu rác ngay từ giao diện.
   - **Server-side:** Tích hợp xác thực lớp thứ 2 tại Server Actions. Bắt buộc sử dụng hàm `schema.safeParse()` của Zod để kiểm tra lại dữ liệu gửi lên, đảm bảo an toàn tuyệt đối và ngăn chặn lỗi sập hệ thống (Unhandled Runtime Error).

## Hướng dẫn cài đặt và chạy

\`\`\`bash
# 1. Cài đặt các thư viện phụ thuộc (đảm bảo đồng bộ phiên bản react-hook-form và zod)
npm install

# 2. Khởi động môi trường phát triển
npm run dev
\`\`\`

Truy cập địa chỉ `http://localhost:3000` trên trình duyệt để kiểm thử chức năng.