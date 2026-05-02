module.exports = [
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formSchema",
    ()=>formSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Tên không được để trống"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email không hợp lệ"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Mật khẩu tối thiểu 8 ký tự").regex(/[A-Z]/, "Cần 1 chữ hoa").regex(/[0-9]/, "Cần ít nhất 1 số"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}).refine((data)=>data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: [
        "confirmPassword"
    ]
});
}),
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"405947b87761c970b39f8dda4d17abafc4ab52d424":{"name":"registerAction"}},"BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts",""] */ __turbopack_context__.s([
    "registerAction",
    ()=>registerAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function registerAction(data) {
    // BẢO MẬT: Phải dùng safeParse để KHÔNG throw error làm crash app
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formSchema"].safeParse(data);
    if (!result.success) {
        // Trả về một object bình thường chứa thông báo, tuyệt đối không "throw"
        return {
            success: false,
            message: "Dữ liệu không hợp lệ (Bắt tại Server)",
            // (Tùy chọn) Gửi kèm chi tiết lỗi để debug nếu cần
            errors: result.error.flatten().fieldErrors
        };
    }
    // Nếu hợp lệ, giả lập quá trình lưu database thành công
    return {
        success: true,
        message: "Đăng ký thành công! Dữ liệu đã được Server xác nhận."
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerAction, "405947b87761c970b39f8dda4d17abafc4ab52d424", null);
}),
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "405947b87761c970b39f8dda4d17abafc4ab52d424",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=BTTuan7_NguyenLeGiaBao_N23DCCN074_08bz_.3._.js.map