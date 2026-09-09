window.QUESTIONS = { sections: [
  { id: "t", title: "اختبار", intro: "قسم مؤقت لفحص المحرّك", questions: [
    { id: "t.single", type: "single", label: "سؤال اختيار واحد", example: "مثال", required: true, allowOther: true, options: [ { value: "a", label: "خيار أ", hint: "شرح" }, { value: "b", label: "خيار ب" } ] },
    { id: "t.multi", type: "multi", label: "سؤال متعدد", example: "مثال", required: false, options: [ { value: "x", label: "س" }, { value: "y", label: "ص" } ], allowOther: true },
    { id: "t.table", type: "table", label: "جدول", example: "مثال", required: true, minRows: 1, columns: [ { key: "n", label: "الاسم", type: "text", placeholder: "المبيعات" }, { key: "c", label: "العدد", type: "number" }, { key: "s", label: "النوع", type: "select", options: ["أ","ب"] } ] },
    { id: "t.cond", type: "textarea", label: "يظهر فقط إن اخترت أ", example: "مثال", required: false, showIf: { q: "t.single", has: "a" } }
  ] }
] };
