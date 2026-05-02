"use server";

import { formSchema, FormData } from "./schema";

export async function registerAction(data: FormData) {
  // BẢO MẬT: Phải dùng safeParse để KHÔNG throw error làm crash app
  const result = formSchema.safeParse(data);

  if (!result.success) {
    // Trả về một object bình thường chứa thông báo, tuyệt đối không "throw"
    return {
      success: false,
      message: "Dữ liệu không hợp lệ (Bắt tại Server)",
      // (Tùy chọn) Gửi kèm chi tiết lỗi để debug nếu cần
      errors: result.error.flatten().fieldErrors, 
    };
  }

  // Nếu hợp lệ, giả lập quá trình lưu database thành công
  return { 
    success: true, 
    message: "Đăng ký thành công! Dữ liệu đã được Server xác nhận." 
  };
}