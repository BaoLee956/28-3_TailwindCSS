module.exports = [
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formSchema",
    ()=>formSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Tên không được để trống"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Email không hợp lệ"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8, "Mật khẩu tối thiểu 8 ký tự").regex(/[A-Z]/, "Cần 1 chữ hoa").regex(/[0-9]/, "Cần ít nhất 1 số"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}).refine((data)=>data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: [
        "confirmPassword"
    ]
});
}),
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/data:5b99be [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405947b87761c970b39f8dda4d17abafc4ab52d424":{"name":"registerAction"}},"BTTuan7_NguyenLeGiaBao_N23DCCN074/components/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405947b87761c970b39f8dda4d17abafc4ab52d424", __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "registerAction");
;
}),
"[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$data$3a$5b99be__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/data:5b99be [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function RegisterForm() {
    const [serverMessage, setServerMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formSchema"]),
        mode: "onBlur"
    });
    const onSubmit = async (data)=>{
        setServerMessage("Đang xử lý...");
        // Gọi Next.js Server Action
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$components$2f$data$3a$5b99be__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["registerAction"])(data);
        setServerMessage(response.message);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto mt-10 p-6 bg-white rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Đăng ký thành viên"
            }, void 0, false, {
                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Tên"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...register("name"),
                                className: "w-full border p-2 rounded mt-1"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.name.message
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 40,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...register("email"),
                                className: "w-full border p-2 rounded mt-1"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.email.message
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 50,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Mật khẩu"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                ...register("password"),
                                className: "w-full border p-2 rounded mt-1"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.password.message
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 61,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Xác nhận mật khẩu"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                ...register("confirmPassword"),
                                className: "w-full border p-2 rounded mt-1"
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.confirmPassword.message
                            }, void 0, false, {
                                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                                lineNumber: 72,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-blue-600 text-white p-2 rounded",
                        children: "Đăng ký"
                    }, void 0, false, {
                        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    serverMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BTTuan7_NguyenLeGiaBao_N23DCCN074$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center font-semibold text-blue-600",
                        children: serverMessage
                    }, void 0, false, {
                        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/BTTuan7_NguyenLeGiaBao_N23DCCN074/components/RegisterForm.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=BTTuan7_NguyenLeGiaBao_N23DCCN074_components_0l.-fqg._.js.map