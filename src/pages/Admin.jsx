import { useState } from "react"
import EmployeesForm from "../components/EmployeesFrom";
import EmployeesList from "../components/EmployeesList";

export default function Admin() {
    // สร้าง array เพื่อเก็บข้อมูลก่อนนำออกมาใช้ 
    const [employees, setEmployees] = useState([]);

    //event handler ตัวที่ 1 เพิ่มข้อมูลใน array
    const handleAddEmployees = (newEmployees) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployees]);
    };

    //event handler ตัวที่ 2 ลบข้อมูลตัวที่เลือกใน array
    const handleDeleteEmployees = (employeesId) => {
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== employeesId));
      };
    
    return (
        <div className="mt-10 p-4">
        {/* แสดงฟอร์มให้ user กรอก */}
        <EmployeesForm onAddEmployees={handleAddEmployees}/>
        {console.log(employees)}


        {/* แสดงข้อมูลที่ user กรอกมาแล้ว */}
        <EmployeesList employeesList={employees} onDelete={handleDeleteEmployees} />
        </div>
    )
}