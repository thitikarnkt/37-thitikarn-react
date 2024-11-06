import { useState} from "react";

export default function EmployeesForm({onAddEmployees}) {
    const [employees, setEmployees] = useState({
        name: "",
        lastName: "",
        position: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault(); //ไม่ให้หน้า re render แบบ default
        if((employees.name).trim() && (employees.lastName).trim() && (employees.position.trim())){ //ถ้าuserกรอกข้อมูลครบทุกช่อง ตัดwhite space หน้าหลังออก
            onAddEmployees({ id: Date.now(), name: employees.name, lastName: employees.lastName, position: employees.position});
            setEmployees({
                name: "",
                lastName: "",
                position: ""
            });
        }
      };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Create User Here</h1>
            <div className="space-x-3 flex items-stretch">
                <input
                type="text"
                value={employees.name} // ข้อมูลที่ user ให้มาจะถูกเก็บไว้ตามชื่อ object นั้น
                onChange={(e) => setEmployees({ ...employees, name: e.target.value })} //เพิ่มลงใน object ผ่าน seter function รวมถึงของเก่าด้วย
                placeholder="Name"
                className=" p-2 border rounded-md w-4/12"
                />

                <input
                type="text"
                value={employees.lastName}
                onChange={(e) => setEmployees({ ...employees, lastName: e.target.value })}
                placeholder="Lastname"
                className="p-2 border rounded-md w-4/12"
                />

                <input
                type="text"
                value={employees.position}
                onChange={(e) => setEmployees({ ...employees, position: e.target.value })}
                placeholder="Position"
                className="p-2 border rounded-md w-4/12"
                />

                <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Save
                </button>
            </div>
        </form>
    )
};
