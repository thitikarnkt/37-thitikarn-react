export default function EmployeesList({employeesList, onDelete}) {
  return (
    <div>
        <table className="mt-4 mx-auto w-10/12 bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Position</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employee) => ( //แกะดูของทั้งหมดใน array ที่รับค่ามาในรูปแบบ props จากหน้า admin และนำมาแสดงทีละชิ้น
              <tr key={employee.id}>
                <td className="py-2 px-4 border">{employee.name}</td>
                <td className="py-2 px-4 border">{employee.lastName}</td>
                <td className="py-2 px-4 border">{employee.position}</td>
                <td className="py-2 px-4 border">
                  <button onClick={() => onDelete(employee.id)} className="font-bold mx-auto text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
