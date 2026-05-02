"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "./schema";
import { registerAction } from "./actions";
import { useState } from "react";

export default function RegisterForm() {
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Hỗ trợ Real-time validation khi blur chuột ra ngoài
  });

  const onSubmit = async (data: FormData) => {
    setServerMessage("Đang xử lý...");
    // Gọi Next.js Server Action
    const response = await registerAction(data);
    setServerMessage(response.message);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Đăng ký thành viên</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Trường Tên */}
        <div>
          <label className="block text-sm font-medium">Tên</label>
          <input
            {...register("name")}
            className="w-full border p-2 rounded mt-1"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Trường Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full border p-2 rounded mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Trường Mật khẩu */}
        <div>
          <label className="block text-sm font-medium">Mật khẩu</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border p-2 rounded mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Trường Xác nhận mật khẩu */}
        <div>
          <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-full border p-2 rounded mt-1"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Nút Submit */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Đăng ký
        </button>

        {/* Thông báo từ Server Action */}
        {serverMessage && (
          <p className="mt-4 text-center font-semibold text-blue-600">
            {serverMessage}
          </p>
        )}
      </form>
    </div>
  );
}